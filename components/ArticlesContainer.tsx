import styled from 'styled-components'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getArticles } from '../services/articles'
import { slugToArticle } from '../utils/articleUtils'
import { BsChevronDoubleDown } from "react-icons/bs";

const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 1.2rem;
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
`

const ArticlesContainer: NextPage = () => {
	const [articles, setArticles] = useState([] as string[])
	const [page, setPage] = useState(0)
	const [lastResult, setLastResult] = useState(9)

	const ArticlesMapper = (articles: string[] ) => {
		return articles.map((article, idx) => {
			const _article = slugToArticle(article)
			return (
				<a key={idx} href={`/${_article.permalink}`}>
					<Article>
						<h1>{_article.title}</h1>
						<p>{_article.date}</p>
						<img src={`/covers/${ (idx % 7) + 1 }.svg`} alt={_article.title} />
					</Article>
				</a>
			)
		})
	}

	const loadMore = async () => {
		setPage(page + 1)
		const newArticles: string[] = await getArticles({page})
		setArticles([...articles, ...newArticles])
		setLastResult(newArticles.length)
	}

	useEffect(() => {
		loadMore()
	}, [])

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