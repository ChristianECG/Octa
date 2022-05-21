import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AlternativeHero } from '../components/Hero'
import { getArticle } from '../services/article'
import styled from 'styled-components'
import Footer from '../components/Footer'

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

const Home: NextPage = () => {
	const router = useRouter()
	const [article, setArticle] = useState({content: '', error: ''})
	const [permalink, setPermalink] = useState('')

	useEffect(() => {
		(async () =>{
			const permalink = router.query.permalink as string
			setPermalink(permalink)
			if (permalink) {
				try {
					setArticle(await getArticle(permalink))
				} catch (e) {
					setArticle({content: '', error: 'Error loading article'})
				}
			}
		})()
	}, [router.query.permalink])

	return (
		<>
			<AlternativeHero />
			{
				permalink && article && article.content &&
					<Container dangerouslySetInnerHTML={{ __html: article.content }} />
			}
			{
				permalink && article && (article.error || !article.content) &&
					<Container style={{textAlign: 'center'}}>
						<img className="error" src='./404.svg' alt='Error 404' />
					</Container>
			}
			<Footer />
		</>
	)
}

export default Home
