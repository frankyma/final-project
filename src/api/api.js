const GIPHY_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=vfJyZ01MtzcR17VY7mNvlh43HDjhuuP8";

const JSON_BIN_URL = "https://api.jsonbin.io/v3/b/66298d29acd3cb34a83dd01f";

export const gifFetcher = (searchTerm) => {
  return fetch(`${GIPHY_URL}&q=${searchTerm}&limit=10`).then((res) =>
    res.json()
  );
};

export async function updateGifs(_, { arg }) {
  await fetch(JSON_BIN_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$3szlmFlo9OGPL/BY74kswu7z1WLmAelwJiKldHiJycVHHktTfKeAS",
    },
    body: JSON.stringify(arg),
  });
}

export const savedGifsFetcher = () => {
  return fetch(JSON_BIN_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key":
        "$2a$10$3szlmFlo9OGPL/BY74kswu7z1WLmAelwJiKldHiJycVHHktTfKeAS",
    },
  }).then((res) => res.json());
};
