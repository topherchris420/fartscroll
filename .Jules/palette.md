## 2024-05-23 - Accessibility for Stylized Text
**Learning:** Using stylized unicode text (like 𝖂𝖍𝖎𝖘𝖕𝖊𝖗𝖘) as interactive elements creates significant accessibility barriers. Screen readers may struggle to announce the text intelligibly, and `<span>` elements lack keyboard focus and semantic meaning.
**Action:** When using decorative text for interactions:
1. Wrap it in a `<button>` for semantic meaning and keyboard access.
2. Use `aria-label` to provide the plain text version for screen readers.
3. Reset button styles (background, border) to maintain the visual design.
4. Add `aria-expanded` and `aria-controls` for toggle interactions.
