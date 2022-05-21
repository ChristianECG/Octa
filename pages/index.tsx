import type { NextPage } from 'next'
import ArticlesContainer from '../components/ArticlesContainer'
import Hero from '../components/Hero'

const Home: NextPage = () => (
	<>
		<Hero />
		<ArticlesContainer />
	</>
)

export default Home
