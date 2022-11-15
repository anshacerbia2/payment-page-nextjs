export const exp_date_formater = (value) => {
  const v = value
    .replace(/[^0-9,.]+/gi, "")
    .substr(0, 4);
  const parts = [];

  for (let i = 0; i < v.length; i += 2) {
    parts.push(v.substr(i, 2));
  }

  return parts.length > 1 ? parts.join("/") : value;
}