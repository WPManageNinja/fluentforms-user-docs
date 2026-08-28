/**
 * markdown-it plugin: renders every markdown image as a <ZoomableImage> component.
 *
 * The component owns the <img> and builds it from props — no slot content — so the
 * server and client render identical markup. Wrapped in <ClientOnly> because the zoom
 * UI is client-only; that leaves nothing for the SSR pass to mismatch against, which
 * is what silently destroyed images in production builds.
 */

/** Escape for an HTML attribute value — avoids broken markup and XSS from alt text. */
function escapeAttr(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function zoomablePlugin(md) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self);

    const srcIndex = token.attrIndex('src');
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self);

    const src = token.attrs[srcIndex][1];
    const alt = token.content || '';

    // The src is emitted verbatim and never passes through Vite's asset pipeline, so a
    // relative path would 404 in the build. Every doc image here is an absolute
    // /images/... public-dir path; anything else falls through to the normal renderer.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self);
    }

    // Explicit closing tag (not self-closing) — Vue's parsing of markdown-emitted
    // markup is more reliable with it.
    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`;
  };
}
