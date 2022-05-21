import axios from 'axios'

export async function getArticle (query: string) {
	const articles = await axios.get(`./api/articles/${query}`)
	return articles.data
}
