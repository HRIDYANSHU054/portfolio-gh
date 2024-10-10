export function isMobileBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check for mobile browsers
  return /android|iPad|iPhone|iPod|opera mini|opera mobi|webOS|blackberry|mobile|samsung|windows phone/i.test(
    userAgent,
  );
}
