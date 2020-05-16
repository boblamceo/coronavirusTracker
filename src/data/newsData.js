const date = new Date();

const url = `http://newsapi.org/v2/everything?q=coronavirus&from=${date.getFullYear}-${date.getMonth}-${date.getDate}&sortBy=publishedAt&language=en&apiKey=889fa0ba853e4b8394713d2c0cf908cb`;

export async function getNews() {
    let result = await fetch(url).then((response) => response.json());
    return result.articles;
}
