/**
 * Mengonversi link Google Drive menjadi link direct agar bisa tampil di tag <img>
 * @param {string} input - URL Google Drive atau ID File
 * @returns {string} - URL yang diformat untuk display
 */
export function formatDriveUrl(input) {
  if (!input) return input;

  let fileId = null;

  // Ekstrak ID dari link lengkap
  if (input.includes('drive.google.com')) {
    const regex = /\/d\/([a-zA-Z0-9_-]+)|id=([a-zA-Z0-9_-]+)/;
    const match = input.match(regex);
    fileId = match ? (match[1] || match[2]) : null;
  } else if (/^[a-zA-Z0-9_-]{25,}$/.test(input)) {
    // Jika input adalah ID murni
    fileId = input;
  }

  if (fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  return input;
}
