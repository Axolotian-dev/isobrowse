// Load the puppeteer-core library dynamically
async function loadPuppeteer() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/puppeteer-core';
    document.head.appendChild(script);
    return new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
    });
}

async function startChromium() {
    await loadPuppeteer();
    const puppeteer = window.puppeteer;

    // Launch a headless Chromium instance
    const browser = await puppeteer.launch({
        executablePath: '/path/to/chromium', // Provide the path to the Chromium executable
        headless: true
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');
    const content = await page.content();

    document.getElementById('output').innerText = content;

    await browser.close();
}

document.getElementById('startChromium').addEventListener('click', startChromium);
