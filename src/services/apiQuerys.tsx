/**
 * Llamada a openWeatherAPI que trae informacion de maximo 5 ciudades
 * @param locationName
 * @returns Array
 */
export const getArrOfCoordinates = async (locationName: String) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    ).then(data => data.json());
    return res;
  } catch (err) {
    throw err;
  }
};

/**
 *Llamada a openWeatherAPI que trae toda la informacion de previsiones
 * @param lat
 * @param lon
 * @returns Object
 */
export const getWeatherForecast = async (lat: Number, lon: Number) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=dc95562776b6b4eaf655bac72e985edb`.trim()
    ).then(data => data.json());

    return res;
  } catch (err) {
    throw err;
  }
};

/**
 * Llamada a openWeatherAPI que devuelve una imagen con las caracteristicas especificadas
 * @param iconId
 * @param weatherMain
 * @param size
 * @returns JSX Element
 */
export const getIcon = (
  iconId: Number,
  weatherMain: String,
  size: String = '20px'
) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconId}@4x.png`}
      height={typeof size === 'string' ? size : size.toString()}
      width={typeof size === 'string' ? size : size.toString()}
      alt={`${weatherMain}`}
    />
  );
};
