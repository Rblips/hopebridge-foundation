import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('./screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  console.log('Launching browser from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:5180/ ...');
  await page.goto('http://localhost:5180/', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 1000));

  // 1. Hero Desktop
  console.log('Capturing 01_hero_desktop.png...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01_hero_desktop.png') });

  // 2. Full Page Desktop
  console.log('Capturing 02_full_page_desktop.png...');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '02_full_page_desktop.png'), fullPage: true });

  // 3. About Section
  console.log('Capturing 03_about_section.png...');
  const aboutEl = await page.$('#about');
  if (aboutEl) {
    await aboutEl.screenshot({ path: path.join(SCREENSHOT_DIR, '03_about_section.png') });
  }

  // 4. Programs Section
  console.log('Capturing 04_programs_section.png...');
  const programsEl = await page.$('#programs');
  if (programsEl) {
    await programsEl.screenshot({ path: path.join(SCREENSHOT_DIR, '04_programs_section.png') });
  }

  // 5. Program Modal
  console.log('Opening Program Modal...');
  const learnMoreBtns = await page.$$('#programs button');
  if (learnMoreBtns.length > 1) {
    await learnMoreBtns[1].click(); // Digital skills modal
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '05_program_modal_open.png') });
    
    // Close modal by clicking close or esc
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
  }

  // 6. Impact Section
  console.log('Capturing 06_impact_section.png...');
  const impactEl = await page.$('#impact');
  if (impactEl) {
    await impactEl.screenshot({ path: path.join(SCREENSHOT_DIR, '06_impact_section.png') });
  }

  // 7. How We Work
  console.log('Capturing 07_how_we_work.png...');
  const howEl = await page.$('#how-we-work');
  if (howEl) {
    await howEl.screenshot({ path: path.join(SCREENSHOT_DIR, '07_how_we_work.png') });
  }

  // 8. Volunteer Section & Form
  console.log('Capturing 08_volunteer_section.png...');
  const volunteerEl = await page.$('#volunteer');
  if (volunteerEl) {
    await volunteerEl.screenshot({ path: path.join(SCREENSHOT_DIR, '08_volunteer_section.png') });
  }

  // 9. Volunteer Form Submitted State
  console.log('Testing Volunteer Form submission for screenshot...');
  await page.type('#fullName', 'Aarav Mehta');
  await page.type('#email', 'aarav.mehta@example.com');
  await page.type('#phone', '+91 98765 43210');
  await page.select('#areaOfInterest', 'Digital Skills');
  await page.type('#message', 'Passionate software engineer excited to mentor youth in coding and digital literacy.');
  
  const submitBtn = await page.$('#volunteer form button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '09_volunteer_success_state.png') });
  }

  // 10. Contact Section
  console.log('Capturing 10_contact_and_faq.png...');
  const contactEl = await page.$('#contact');
  if (contactEl) {
    await contactEl.screenshot({ path: path.join(SCREENSHOT_DIR, '10_contact_and_faq.png') });
  }

  // 11. Tablet Viewport
  console.log('Capturing 11_tablet_view.png...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5180/#home', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '11_tablet_view.png') });

  // 12. Mobile Viewport & Drawer
  console.log('Capturing 12_mobile_view.png...');
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5180/#home', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, '12_mobile_view.png') });

  // Mobile Menu Drawer Opened
  const menuBtn = await page.$('header button[aria-label="Toggle navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '13_mobile_menu_drawer.png') });
  }

  await browser.close();
  console.log('All screenshots saved successfully in:', SCREENSHOT_DIR);
}

run().catch((err) => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
