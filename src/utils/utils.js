/**
 * Creates a new dictionary by adding a new GIF URL to the existing dictionary.
 * If the key already exists in the dictionary and the URL is already present in the corresponding array,
 * the function returns the original dictionary.
 * If the key already exists in the dictionary but the URL is not present in the corresponding array,
 * the function returns a new dictionary with the URL added to the array.
 * If the key does not exist in the dictionary, the function returns a new dictionary with the key and URL added.
 *
 * @param {Object} oldDict - The original dictionary.
 * @param {string} newGifUrl - The new GIF URL to be added.
 * @param {string} newGifKey - The key for the new GIF URL.
 * @returns {Object} - The updated dictionary.
 */

export const newGifDict = (oldDict, newGifUrl, newGifKey) => {
  if (oldDict[newGifKey]) {
    if (oldDict[newGifKey].includes(newGifUrl)) {
      return oldDict;
    }
    return { ...oldDict, [newGifKey]: [...oldDict[newGifKey], newGifUrl] };
  }
  return { ...oldDict, [newGifKey]: [newGifUrl] };
};
