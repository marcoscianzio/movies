export const secondsToHms = (d: any) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " HOUR " : " HOURS, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " MINUTE, " : " MINUTES ") : "";
  return hDisplay + mDisplay;
};
