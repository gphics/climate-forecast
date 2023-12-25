/**
 *
 * @param {Number} temp
 * @return {Number}
 * convert kelvin temp to celcius and fahereint
 */
function tempConverter(temp) {
  const fahrenheit = Math.round(1.8 * (+temp - 273.15) + 32);
  const celcius = Math.round(+temp - 273.15);
  return { celcius, kelvin: +temp, fahrenheit };
}

/**
 *
 * @param {Number} humidity
 * @returns {Number}
 * convert hPa pressure to psi pressure
 */
function pressureConverter(pressure) {
    const psi = Math.round(+pressure * 0.145037738);
    const atm = Math.round(+pressure *0.0009869233)
  return { psi, hPa: +pressure, atm };
}

const conversion = { pressureConverter, tempConverter };

export default conversion;
