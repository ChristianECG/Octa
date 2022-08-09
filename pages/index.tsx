import type { NextPage } from 'next'
import Head from 'next/head'
import ArticlesContainer from '../components/ArticlesContainer'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home: NextPage = () => (
	<>
		<Head>
			<title>Octa - Blog</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta property="og:title" content="Octa - Blog" key="title" />
			<meta property="og:type" content="website" key="type" />
			<meta property="og:url" content="https://octa.page" key="url" />
			<meta property="og:image" content="https://octa.page/cover.svg" key="image" />
			<meta property="og:description" content="Programando el futuro. Innovando el presente." key="description" />
			<link rel="icon" href="/favicon.svg" />
		</Head>
		<Hero />
		<ArticlesContainer />
		<Footer />
	</>
)

export default Home
