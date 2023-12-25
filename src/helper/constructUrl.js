export default function constructUrl(lat, lon) {
  const prev = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b0eda6450d2e9d9530b819b524dc52da
`;
  // console.log

  // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}.04&appid=b0eda6450d2e9d9530b819b524dc52da`;
  return prev;
}
