import type { NextPage } from 'next'
import styled from 'styled-components'
import Head from 'next/head'
import { AlternativeHero } from '../components/Hero'
import { getArticle } from '../services/article'
import Footer from '../components/Footer'
import { titleConverter } from '../utils/articleUtils'

const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 80px 20px 40px;
	font-weight: 300;
	font-family: 'Noto Sans', sans-serif;
	line-height: 1.5;
	text-align: justify;

	h1 {
		font-weight: 600;
		font-size: 1.7rem;
		margin-bottom: 20px;
	}

	h2, h3, h4, h5, h6 {
		font-weight: 500;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 20px;
	}

	ul, ol {
		margin-left: 30px;
		margin-bottom: 20px;
	}

	a {
		color: #00b9c1;
		font-weight: 600;
	}

	pre {
		max-width: 100%;
		width: 100%;
		overflow-x: auto;
		margin-bottom: 20px;
		background-color: #1b2426;
		color: #f8f8f2;
		padding: 15px;
		font-size: 0.9rem;
		border-radius: 5px;
	}

	img.error {
		max-width: 400px;
		margin: 0 auto;
		padding-top: 40px;
	}
`

const Home: NextPage = ({ permalink, article }) => {
	console.log(article, permalink)
	return (
		<>
			<Head>
				<title>{permalink ? titleConverter(permalink) : 'Error 404'} - Octa | Blog</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content={permalink ? titleConverter(permalink) : 'Error 404'} key="title" />
				<meta property="og:type" content="website" key="type" />
				<meta property="og:url" content="https://octa.page" key="url" />
				<meta property="og:image" content="https://octa.page/cover.svg" key="image" />
				<meta property="og:description" content="Programando el futuro. Innovando el presente." key="description" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<AlternativeHero />
			{
				permalink && article && article.content &&
				<Container dangerouslySetInnerHTML={{ __html: article.content }} />
			}
			{
				permalink && article && (article.error || !article.content) &&
				<Container style={{ textAlign: 'center' }}>
					<img className="error" src='./404.svg' alt='Error 404' />
				</Container>
			}
			<Footer />
		</>
	)
}

export async function getServerSideProps(context: any) {
	const { permalink } = context.query
	const { host } = context.req.headers
	return getArticle(permalink as string, host as string)
		.then(article => ({ props: { permalink, article } }))
		.catch((e) => {
			console.log(e)
			const article = { content: '', error: 'Error loading article' }
			return { props: { permalink, article } }
		})
}

export default Home
