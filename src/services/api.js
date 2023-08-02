export const perPage = 12;

const controller = new AbortController();
const signal = controller.signal;

export async function imagesApi(search, page) {
  const apiKey = '38433682-9c85037526380dba52a011593';
  const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  return await fetch(url, { signal }).then(res => res.json());
}
