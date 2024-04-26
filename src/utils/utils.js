export const newGifDict = (oldDict, newGifUrl, newGifKey) => {
  //   return oldDict[newGifKey]
  //     ? { ...oldDict, [newGifKey]: [...oldDict[newGifKey], newGifUrl] }
  //     : { ...oldDict, [newGifKey]: [newGifUrl] };
  if (oldDict[newGifKey]) {
    if (oldDict[newGifKey].includes(newGifUrl)) {
      return oldDict;
    }
    return { ...oldDict, [newGifKey]: [...oldDict[newGifKey], newGifUrl] };
  }
  return { ...oldDict, [newGifKey]: [newGifUrl] };
};
