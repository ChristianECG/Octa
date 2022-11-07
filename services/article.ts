import axios from 'axios'

async function getArticle (query: string, host: string) {
	const article = { data: {} }
	try {
		const response = await axios.get(encodeURI(`https://${host}/api/articles/${query}`))
		article.data = response.data
	} catch (error) {
		const response = await axios.get(encodeURI(`http://${host}/api/articles/${query}`))
		article.data = response.data
	}
	return article.data
}

export default getArticle
export { getArticle }
