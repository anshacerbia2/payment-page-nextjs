export const phone_formater = (value) => {
  const v = value
    .replace(/[^0-9,.]+/gi, "")
    .substr(0, 12);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}