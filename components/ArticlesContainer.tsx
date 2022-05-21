import styled from 'styled-components'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { BsChevronDoubleDown } from "react-icons/bs"
import Link from 'next/link'
import { getArticles } from '../services/articles'
import { slugToArticle } from '../utils/articleUtils'

const Article = styled.article`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	height: 100%;
	cursor: pointer;

	h1 {
		font-size: 1.2rem;
		margin-top: 1rem;
	}

	p {
		margin-bottom: 1rem;
	}
`

const Container = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 40px 20px;
	max-width: 1200px;
	width: 90%;
	margin: 50px auto;

	@media (max-width: 768px) {
		grid-gap: 70px 20px;
	}
`

const LoadMore = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	align-self: center;
	margin: 0 auto 20px;
	border: none;
	background: none;
	cursor: pointer;
	padding: 10px;
`

const ArticlesContainer: NextPage = () => {
	const [articles, setArticles] = useState([] as string[])
	const [page, setPage] = useState(0)
	const [lastResult, setLastResult] = useState(9)

	const ArticlesMapper = (_articles: string[] ) => _articles.map((article, idx) => {
		const _article = slugToArticle(article)
		return (
			<Link key={idx} href={`/${_article.permalink}`}>
				<Article>
					<section>
						<h1>{_article.title}</h1>
						<p>{_article.date}</p>
					</section>
					<img src={`/covers/${ (idx % 7) + 1 }.svg`} alt={_article.title} />
				</Article>
			</Link>
		)
	})

	const loadMore = useCallback(async () => {
		setPage(p => p + 1)
		const newArticles: string[] = await getArticles({page})
		setArticles(a => [...a, ...newArticles])
		setLastResult(newArticles.length)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		loadMore()
	}, [loadMore])

	return (
		<>
			<Container>
				{articles && ArticlesMapper(articles)}
			</Container>
			<LoadMore onClick={loadMore} style={{display: lastResult === 9 ? 'flex' : 'none'}}>
				<BsChevronDoubleDown />
			</LoadMore>
		</>
	)
}

export default ArticlesContainer