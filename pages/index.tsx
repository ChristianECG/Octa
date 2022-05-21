import type { NextPage } from 'next'
import ArticlesContainer from '../components/ArticlesContainer'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home: NextPage = () => (
	<>
		<Hero />
		<ArticlesContainer />
		<Footer />
	</>
)

export default Home
