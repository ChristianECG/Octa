import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

const md = require('markdown-it')()

type ArticleError = {
	error: string
}

type Article = {
	content: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ArticleError | Article>
) {
	const permalink: string = req.query.permalink as string
	const articles: string[] = fs.readdirSync('./articles').reverse()

	let article: string | undefined;
	let articleTitle = '';

	// Find the article with the given permalink
	for (const _article of articles) {
		const _articlePermalink = _article.slice(9, permalink.length + 9)
		if (_articlePermalink === permalink) {
			article = _article;
			break;
		}
	}

	if (!article)
		res.status(404).json({ error: 'Article not found' })

	const articleContent = fs.readFileSync(`./articles/${article}`, 'utf8')
	const articleHTML: string = md.render(articleContent)

	res.status(200).json({content: articleHTML})
}
