import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string[]>,
) {
	const limit: number = parseInt(req.query.limit as string, 10)
	const page: number = parseInt(req.query.page  as string, 10)

	const articles: string[] = fs.readdirSync('./articles').reverse()

	if (!limit)
		res.status(200).json(articles)
	else if (!page)
		res.status(200).json(articles.slice(0, limit))
	else
		res.status(200).json(articles.slice(page * limit, (page + 1) * limit))
}
