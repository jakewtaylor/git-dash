export const mapToGroups = (arr, keyGetter) =>
  arr.reduce((acc, item, index) => {
    const key = keyGetter(item, index);

    if (acc[key]) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
    }

    return acc;
  }, {});
