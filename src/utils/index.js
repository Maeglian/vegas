const defineRectImages = (n) => {
  const arr = [1, 8];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    if (arr.includes(n)) return true;
    if (i === arr[0]) arr[0] += 10;
    if (i === arr[1]) arr[1] += 10;
  }

  return false;
};

export default defineRectImages;
