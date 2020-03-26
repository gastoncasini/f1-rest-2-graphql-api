export function getWikipediaMobileUrl(url: String) {
  return url !== undefined ? url.replace("wikipedia", "m.wikipedia") : "";
}

export function yearCheck(year: String) {
  const currentYear = new Date().getFullYear();
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear);
  }
  return year;
}

export function roundCheck(round: number) {
  if (round >= 100) {
    return 1;
  }
  return round;
}
