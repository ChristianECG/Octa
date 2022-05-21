import axios from 'axios'

type ArticleRequest = {
	limit?: number,
	page?: number
}

export async function getArticles (query: ArticleRequest) {
	const limit = query.limit || 9
	const page = query.page || 0

	const articles = await axios.get(`./api/articles?limit=${limit}&page=${page}`)

	return articles.data
}
