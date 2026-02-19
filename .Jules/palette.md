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

## 2024-05-25 - Smooth Visibility Transitions
**Learning:** Using `display: none` for toggling visibility of UI elements (like "Back to Top" buttons) creates abrupt, jarring transitions and prevents animation.
**Action:** Use a combination of `opacity`, `visibility`, and `transform` with CSS transitions.
1. Hidden state: `opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(10px);`
2. Visible state: `opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0);`
3. Toggle a class (e.g., `.visible`) via JavaScript instead of manipulating `style.display`.
