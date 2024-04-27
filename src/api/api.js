const GIPHY_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=vfJyZ01MtzcR17VY7mNvlh43HDjhuuP8";

export const gifFetcher = (searchTerm) => {
  return fetch(`${GIPHY_URL}&q=${searchTerm}&limit=10`).then((res) =>
    res.json()
  );
};
