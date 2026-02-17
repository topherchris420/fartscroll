## 2024-05-23 - Accessibility for Stylized Text
**Learning:** Using stylized unicode text (like 𝖂𝖍𝖎𝖘𝖕𝖊𝖗𝖘) as interactive elements creates significant accessibility barriers. Screen readers may struggle to announce the text intelligibly, and `<span>` elements lack keyboard focus and semantic meaning.
**Action:** When using decorative text for interactions:
1. Wrap it in a `<button>` for semantic meaning and keyboard access.
2. Use `aria-label` to provide the plain text version for screen readers.
3. Reset button styles (background, border) to maintain the visual design.
4. Add `aria-expanded` and `aria-controls` for toggle interactions.

## 2024-05-24 - Enhancing Range Sliders
**Learning:** Default range sliders lack clear focus indicators in some browsers, and unassociated labels reduce click targets.
**Action:** Always link labels with `for` attributes and ensure `input[type="range"]` has a distinct `:focus-visible` style using the brand color.

## 2026-02-17 - Smooth Transitions for Floating Elements
**Learning:** Abrupt display toggles (using `display: none` to `block`) for floating elements like "Back to Top" buttons feel unpolished and can be jarring.
**Action:** Use CSS transitions on `opacity` and `visibility` instead of toggling `display`. This creates a smooth fade-in/out effect. Ensure `visibility: hidden` is applied when opacity is 0 to prevent interaction with the invisible element.
