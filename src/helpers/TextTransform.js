const TextTransform = data => {
  let name = data.displayName.toLowerCase();
  return name
    .toLowerCase()
    .trim()
    .split(' ')
    .map(v => v[0].toUpperCase() + v.substr(1))
    .join(' ');
};

export { TextTransform };
