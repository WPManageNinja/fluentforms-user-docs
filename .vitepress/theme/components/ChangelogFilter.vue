<script setup>
import { ref, computed, nextTick } from 'vue'
import { onContentUpdated } from 'vitepress'

const OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' }
]

const active = ref('all')
const root = ref(null)
const buttons = ref([])
const counts = ref({ all: 0, free: 0, pro: 0 })

const activeIndex = computed(() => OPTIONS.findIndex((o) => o.value === active.value))

// A hairline sits on the left edge of every segment except the first, and is dropped on
// both sides of the selected one so nothing collides with the sliding thumb.
function hasDivider(i) {
  return i > 0 && activeIndex.value !== i && activeIndex.value !== i - 1
}

function container() {
  const anchor = root.value
  if (!anchor) return null
  return anchor.parentElement || anchor.closest('.vp-doc')
}

// Heading text without the trailing "​" of the header anchor link.
function headingText(el) {
  return el.textContent.replace(/​/g, '').trim()
}

// Tag every element of the changelog with the bucket it belongs to, so visibility
// becomes a pure CSS concern driven by one `data-cl-mode` attribute (see custom.css).
//
//   data-cl="head"  → version heading + its "Released on ..." line (shown in every mode
//                     the release still has content for; data-cl-has lists those buckets)
//   data-cl="free"  → free changes
//   data-cl="pro"   → Pro changes
//
// The page holds two shapes of release, both of which have to be honoured:
//
//   "## Fluent Forms v6.2.9"       a combined release — free changes first, then an
//                                  optional "### Fluent Forms Pro v6.2.9" sub-section
//   "## Fluent Forms v6.2.3 Pro"   a standalone single-plugin release, with its own release
//   "## Fluent Forms v6.1.1 Free"  date — the whole section belongs to that one bucket
//   "## Fluent Forms Pro v6.2.10"  same thing, plugin named before the version instead
function scan() {
  const parent = container()
  if (!parent) return 0

  const releases = []
  let current = null
  let bucket = null
  let started = false

  for (const child of Array.from(parent.children)) {
    if (child === root.value) {
      started = true
      continue
    }
    if (!started) continue

    if (child.tagName === 'H2') {
      const title = headingText(child)
      // Naming the plugin anywhere in the title pins the whole release to that bucket.
      const only = /\bPro\b/.test(title) ? 'pro' : /\bFree\b/.test(title) ? 'free' : null
      current = { head: [child], free: [], pro: [], only }
      releases.push(current)
      bucket = only || 'free'
      continue
    }
    if (!current) continue

    // Inside a combined release, the Pro sub-heading starts the Pro bucket. Inside a
    // pinned single-plugin release, everything stays in that release's own bucket.
    if (child.tagName === 'H3' && !current.only) {
      bucket = 'pro'
    }
    current[bucket].push(child)
  }

  for (const release of releases) {
    // The "Released on ..." line describes the whole release, so it belongs to the
    // header rather than to a bucket. Some early releases (v1.0.0–v1.2.5) have no
    // date line — only claim it when it really is a paragraph.
    const body = release[release.only || 'free']
    if (body.length && body[0].tagName === 'P') {
      release.head.push(body.shift())
    }

    const has = []
    if (release.free.length) has.push('free')
    if (release.pro.length) has.push('pro')

    for (const el of release.head) {
      el.setAttribute('data-cl', 'head')
      el.setAttribute('data-cl-has', has.join(' '))
    }
    for (const el of release.free) el.setAttribute('data-cl', 'free')
    for (const el of release.pro) el.setAttribute('data-cl', 'pro')
  }

  counts.value = {
    all: releases.length,
    free: releases.filter((r) => r.free.length).length,
    pro: releases.filter((r) => r.pro.length).length
  }

  return releases.length
}

// Is this heading visible in the given mode? Derived from the tags above rather than
// from computed styles, so it stays correct no matter when it is called.
function headingVisible(el, mode) {
  if (mode === 'all') return true
  const kind = el.getAttribute('data-cl')
  if (kind === 'head') return (el.getAttribute('data-cl-has') || '').split(' ').includes(mode)
  if (kind === 'free' || kind === 'pro') return kind === mode
  return true
}

// VitePress builds the "On this page" outline from a DOM query with no visibility check,
// and never recomputes it on a click — so the outline is filtered here to match.
function syncOutline(mode) {
  for (const link of document.querySelectorAll('a.outline-link')) {
    const id = decodeURIComponent((link.getAttribute('href') || '').slice(1))
    const heading = id && document.getElementById(id)
    const item = link.closest('li')
    if (!heading || !item) continue
    item.style.display = headingVisible(heading, mode) ? '' : 'none'
  }
}

function select(value) {
  active.value = value
  const parent = container()
  if (parent) parent.setAttribute('data-cl-mode', value)
  syncOutline(value)
}

// Arrow-key navigation, as expected of a radio group.
function onKeydown(event) {
  const last = OPTIONS.length - 1
  let next = null

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = activeIndex.value + 1 > last ? 0 : activeIndex.value + 1
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = activeIndex.value - 1 < 0 ? last : activeIndex.value - 1
  else if (event.key === 'Home') next = 0
  else if (event.key === 'End') next = last
  if (next === null) return

  event.preventDefault()
  select(OPTIONS[next].value)
  buttons.value[next]?.focus()
}

// Runs on mount and again after every client-side navigation into this page —
// the markdown content is swapped in by VitePress, so onMounted alone is not enough.
onContentUpdated(() => {
  const found = scan()
  if (!found) {
    console.warn('[ChangelogFilter] no releases found — filter disabled')
    return
  }
  select(active.value)
  // The outline renders from the same hook, so re-sync once it exists.
  nextTick(() => syncOutline(active.value))
})
</script>

<template>
  <div ref="root" class="cl-filter">
    <span id="cl-filter-label" class="cl-filter__label">Show</span>
    <div
      class="cl-filter__group"
      role="radiogroup"
      aria-labelledby="cl-filter-label"
      :style="{ '--cl-index': activeIndex }"
      @keydown="onKeydown"
    >
      <span class="cl-filter__thumb" aria-hidden="true"></span>
      <button
        v-for="(option, i) in OPTIONS"
        :key="option.value"
        ref="buttons"
        type="button"
        role="radio"
        class="cl-filter__btn"
        :class="{ 'is-active': active === option.value }"
        :data-divider="hasDivider(i) ? 'on' : 'off'"
        :aria-checked="active === option.value"
        :tabindex="active === option.value ? 0 : -1"
        @click="select(option.value)"
      >
        {{ option.label }}
        <!-- Counts are read from the DOM, so they only exist after hydration. -->
        <span v-if="counts[option.value]" class="cl-filter__count">{{ counts[option.value] }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.cl-filter {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin: 28px 0 4px;
}

.cl-filter__label {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--vp-c-text-3);
}

/* Segmented control: three equal columns so the thumb can slide by exactly 100%. */
.cl-filter__group {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background-color: var(--vp-c-bg-alt);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
}

.cl-filter__thumb {
  position: absolute;
  z-index: 0;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc((100% - 8px) / 3);
  border-radius: 999px;
  background: linear-gradient(135deg, #2c6cff, #1f58e0);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.16), 0 6px 16px -4px rgba(44, 108, 255, 0.5);
  transform: translateX(calc(var(--cl-index, 0) * 100%));
  transition: transform 0.34s cubic-bezier(0.34, 1.32, 0.5, 1);
}

.cl-filter__btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  padding: 7px 20px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 500;
  line-height: 1.45;
  white-space: nowrap;
  color: var(--vp-c-text-2);
  background-color: transparent;
  transition: color 0.25s ease;
}

/* Hairline separator on the segment boundary, faded out either side of the thumb. */
.cl-filter__btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 1px;
  height: 17px;
  margin-top: -8.5px;
  border-radius: 1px;
  background-color: var(--vp-c-divider);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.cl-filter__btn[data-divider='on']::before {
  opacity: 1;
}

.cl-filter__btn:hover {
  color: var(--vp-c-text-1);
}

.cl-filter__btn.is-active {
  color: #fff;
  font-weight: 600;
}

.cl-filter__btn:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.cl-filter__count {
  font-size: 11.5px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  opacity: 0.55;
}

.cl-filter__btn.is-active .cl-filter__count {
  opacity: 0.75;
}

.dark .cl-filter__group {
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.24);
}

.dark .cl-filter__thumb {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 6px 16px -4px rgba(44, 108, 255, 0.45);
}

@media (max-width: 420px) {
  .cl-filter__btn {
    padding: 7px 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cl-filter__thumb,
  .cl-filter__btn::before {
    transition: none;
  }
}
</style>
