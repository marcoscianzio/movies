export const secondsToHms = (d: any) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " HORA " : " HORAS, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " MINUTO, " : " MINUTOS ") : "";
  return hDisplay + mDisplay;
};
