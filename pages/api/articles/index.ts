import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string[]>
) {
	const limit: number = parseInt(req.query.limit as string)
	const page: number = parseInt(req.query.page  as string)

	const articles: string[] = fs.readdirSync('./articles').reverse()

	if (!limit)
		res.status(200).json(articles)
	else if (!page)
		res.status(200).json(articles.slice(0, limit))
	else
		res.status(200).json(articles.slice(page * limit, (page + 1) * limit))
}
