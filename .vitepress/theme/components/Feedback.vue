<script setup>
import { reactive, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
const PRODUCT_NAME = 'FluentForms-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  voted: false,      // a vote was recorded (yes/no)
  voting: false,     // request in flight
  showComment: false,// comment textarea open
  comment: '',
  sent: false        // comment submitted
})

// Reset everything when navigating to a new page
watch(() => route.path, () => {
  state.voted = false
  state.voting = false
  state.showComment = false
  state.comment = ''
  state.sent = false
})

const post = (data) =>
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({
      product: PRODUCT_NAME,
      path: route.path,
      title: page.value.title,
      ...data
    })
  })

const vote = async (value) => {
  if (state.voting) return
  state.voting = true
  try { await post({ vote: value }) } catch (e) { console.error('Feedback Error:', e) }
  finally { state.voting = false; state.voted = true; state.showComment = false }
}

const sendComment = async () => {
  if (state.voting || !state.comment.trim()) return
  state.voting = true
  try { await post({ vote: 'comment', message: state.comment.trim() }) }
  catch (e) { console.error('Feedback Error:', e) }
  finally { state.voting = false; state.sent = true }
}
</script>

<template>
  <div class="feedback-box">
    <template v-if="!state.voted && !state.sent">
      <p class="feedback-title">Was this page helpful?</p>

      <div class="feedback-actions">
        <button class="fb-btn" :disabled="state.voting" @click="vote('yes')">👍 Yes</button>
        <button class="fb-btn" :disabled="state.voting" @click="vote('no')">👎 No</button>
        <button
          class="fb-btn"
          :class="{ active: state.showComment }"
          :disabled="state.voting"
          @click="state.showComment = !state.showComment"
        >
          {{ state.showComment ? '✕ Close' : '💬 Feedback' }}
        </button>
      </div>

      <div v-if="state.showComment" class="feedback-comment">
        <textarea
          v-model="state.comment"
          class="fb-textarea"
          rows="3"
          placeholder="How can we improve this specific page?"
        ></textarea>
        <button
          class="fb-send"
          :disabled="state.voting || !state.comment.trim()"
          @click="sendComment"
        >
          Send Feedback
        </button>
      </div>
    </template>

    <p v-else class="feedback-thanks">Thanks for your feedback! 💜</p>
  </div>
</template>

<style scoped>
.feedback-box {
  margin-top: 3rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-align: center;
}

.feedback-title {
  font-weight: 600;
  font-size: 15px;
  margin: 0 0 1rem;
  color: var(--vp-c-text-1);
}

.feedback-actions {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.fb-btn {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  padding: 6px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s, background-color 0.2s, color 0.2s;
}

.fb-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.fb-btn.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.fb-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.feedback-comment {
  max-width: 520px;
  margin: 1rem auto 0;
}

.fb-textarea {
  width: 100%;
  resize: vertical;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
}

.fb-textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.fb-send {
  margin-top: 0.75rem;
  border: 1px solid transparent;
  background-color: var(--vp-c-brand-1);
  color: #fff;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.fb-send:hover:not(:disabled) {
  background-color: var(--vp-c-brand-2);
}

.fb-send:disabled {
  opacity: 0.6;
  cursor: default;
}

.feedback-thanks {
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  color: var(--vp-c-brand-1);
}
</style>
