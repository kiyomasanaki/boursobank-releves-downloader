/**
 * Bulk PDF Statement Downloader for Boursobank
 *
 * Télécharge en lot tous tes relevés PDF depuis ton compte Boursobank.
 * Usage console : ouvre ta page relevés (Documents > Relevés), F12 -> Console,
 * colle ce script, Entrée. Autorise les téléchargements multiples si demandé.
 *
 * @author keyamasabaya
 * @license MIT
 */

(async function bulkDownloadStatements() {
  const DOWNLOAD_DELAY_MS = 1500;
  const SELECTORS = [
    'a.c-link--download-pdf',
    'td.documents__action a[href*="statements-document"]'
  ];

  // Find download links using multiple selectors
  const findDownloadLinks = () => {
    for (const selector of SELECTORS) {
      const links = document.querySelectorAll(selector);
      if (links.length > 0) return links;
    }
    return [];
  };

  const downloadLinks = findDownloadLinks();

  if (downloadLinks.length === 0) {
    console.error('❌ No download links found. Check if you are on the correct page.');
    return;
  }

  console.log(`📄 Found ${downloadLinks.length} statement(s) to download`);

  for (let i = 0; i < downloadLinks.length; i++) {
    const link = downloadLinks[i];
    const title = link.title || link.getAttribute('href')?.split('/').pop() || `Document ${i + 1}`;

    console.log(`⬇️ Downloading ${i + 1}/${downloadLinks.length}: ${title}`);
    link.click();

    if (i < downloadLinks.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DOWNLOAD_DELAY_MS));
    }
  }

  console.log('✅ All downloads initiated!');
})();
