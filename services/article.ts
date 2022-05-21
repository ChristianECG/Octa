import axios from 'axios'

async function getArticle (query: string) {
	const articles = await axios.get(`./api/articles/${query}`)
	return articles.data
}

export default getArticle
export { getArticle }