---
name: run-app
description: Launch the Shape The Wave Longevity Calculator app and drive it for screenshots or verification. Use when asked to run, start, verify, screenshot, or visually confirm a change in this app.
---

# Run the Shape The Wave Longevity Calculator

Vite + React + TypeScript SPA. Base path is `/Reel-Method-Longevity-Calculator/`
(configured for GitHub Pages). This skill's exact commands were verified
end-to-end in a fresh Linux container.

## 1. Install (skip if `node_modules` already present)

```bash
npm install
```

The repo has a SessionStart hook (`.claude/hooks/session-start.sh`) that
runs `npm install` automatically on remote web sessions, so this is
usually already done.

## 2. Start the dev server

```bash
npx vite --host 0.0.0.0 --port 5173 &
sleep 3
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/Reel-Method-Longevity-Calculator/
```

Expect `200`. The app is served at
`http://localhost:5173/Reel-Method-Longevity-Calculator/` — the trailing
path is required; the root `/` returns nothing useful.

## 3. Drive it in a browser (screenshots / verification)

**No apt install works in this environment** — the transitional
`chromium-browser` package points at snap, which isn't available.
`playwright install-deps` fails on unrelated PPAs. **Skip all of that.**

Use the pre-installed Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
via `playwright-core`:

```bash
npm install --no-save playwright-core
```

Then a CJS driver script. **Use `require()` with the absolute path** to
`playwright-core` inside the project's `node_modules` — the `--no-save`
install gets cleaned up between sessions, so re-run the install if the
module goes missing.

```javascript
// /tmp/drive.cjs
const { chromium } = require('/home/user/Reel-Method-Longevity-Calculator/node_modules/playwright-core');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:5173/Reel-Method-Longevity-Calculator/',
                  { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/app.png', fullPage: true });
  await browser.close();
})();
```

Run with plain `node /tmp/drive.cjs`. Read the PNG afterward — a blank
frame is a failure to launch, not a success.

## 4. Setting form values

React's controlled inputs ignore raw `.value = ...` assignments. Use the
native setter + dispatch pattern:

```javascript
await page.evaluate(() => {
  const setVal = (el, val) => {
    const proto = Object.getPrototypeOf(el);
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, val);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const nums = document.querySelectorAll('input[type="number"]');
  setVal(nums[0], '30');  // age
  setVal(nums[1], '22');  // BMI
  const selects = document.querySelectorAll('select');
  setVal(selects[0], 'female');   // biological sex
  setVal(selects[1], 'never');    // smoking status
  const ranges = document.querySelectorAll('input[type="range"]');
  // Order in DOM: purpose, social, exercise, sleep, alcohol, diet, stress
  [5, 5, 7, 8, 0, 5, 1].forEach((v, i) => setVal(ranges[i], v));
});
await page.click('button:has-text("Calculate")');
await page.waitForTimeout(600);
```

## 5. Key views to screenshot

| View | Action | Notes |
|---|---|---|
| Calculator (default) | Load home | REEL-organized form |
| Results | Click `Calculate Your Longevity Score` | Scrolls to results; wait 600ms for animation |
| Memberships | Click nav `Memberships`, tab defaults to Memberships | 5 tier cards |
| Bundles | Click tab `Bundles (16)` | Grouped by category |
| Packages | Click tab `Packages (21)` | Grouped by product/tier |
| Services | Click tab `Services (49)` | Compact cards, six-column grid |
| Mobile | `page.setViewportSize({ width: 390, height: 844 })` | Stacks all layouts |

## 6. Type-check / build (no browser needed)

```bash
npm run build   # runs tsc + vite build
```

Should complete in ~1s and emit `dist/`. Passes cleanly on the current
tree.

## Gotchas

- **Base path required in URL.** `http://localhost:5173/` returns
  nothing — always append `/Reel-Method-Longevity-Calculator/`.
- **`playwright-core` disappears between sessions** because it's
  installed with `--no-save`. Reinstall if `require()` fails.
- **Don't try to `apt install chromium`.** The environment's PPAs are
  broken and the transitional package is snap-only. Use `/opt/pw-browsers`.
- **Vite HMR needs `--host 0.0.0.0`** if you want to hit it from
  anything other than localhost inside the container.
