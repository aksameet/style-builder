export const getColor = (value) => {
  const colorRegex = /(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/ig;
  return (value.match(colorRegex) || [])[0];
};

export const getFloat = (value) => {
  const regex = /-?\d+\.?\d{0,2}/;
  return (value.match(regex) || [''])[0];
};
