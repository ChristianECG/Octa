import axios from 'axios'

async function getArticle (query: string, host: string) {
	const article = await axios.get(`http://${host}/api/articles/${query}`)
	return article.data
}

export default getArticle
export { getArticle }