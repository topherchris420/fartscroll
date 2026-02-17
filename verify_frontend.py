import os
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        cwd = os.getcwd()
        filepath = os.path.join(cwd, 'index.html')
        url = f'file://{filepath}'

        print(f"Navigating to {url}")
        page.goto(url)

        # Ensure we are at the top
        page.evaluate("window.scrollTo(0, 0)")

        # Wait for canvas to be present and visible
        page.wait_for_selector('#waveCanvas')

        # Wait for animation
        page.wait_for_timeout(2000)

        # Screenshot the hero section which contains the canvas
        hero = page.locator('.hero')
        hero.screenshot(path='hero_verification.png')
        print(f"Screenshot saved to hero_verification.png")

        browser.close()

if __name__ == '__main__':
    run()
