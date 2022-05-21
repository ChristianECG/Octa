import styled from 'styled-components'
import { RiGlobalLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri"
import type { NextPage } from 'next'
import Link from 'next/link'

const HeroContainer = styled.header`
	display: flex;
	flex-direction: column;
	background-color: #0e2a47;
	background-image: url('./cover.svg');
	background-size: cover;
	width: 100%;
	height: 100vh;
	padding: 20px;
`

const Icon = styled.img`
	width: 2rem;
	height: 2rem;
`

const IconContainer = styled.span`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	cursor: pointer;
`

const Header = styled.h1`
	color: white;
	font-size: 1.8rem;
	font-weight: 400;
`

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 2rem;
	gap: 1rem;
	width: 100%;
`

const SocialIcons = styled.span`
	display: flex;
	justify-content: center;
	color: white;
	font-size: 1.5rem;
	gap: 0.5rem;
	margin-left: auto;
`

const Title = styled.h1`
	color: white;
	font-size: 2.8rem;
	font-weight: 700;
`

const Subtitle = styled.h2`
	color: white;
	font-size: 1.5rem;
	font-weight: 400;
`

const TitleContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: 1rem;
`

const Hero: NextPage = () => (
	<HeroContainer style={{maxHeight: '500px'}}>
		<HeaderContainer>
			<IconContainer>
				<Link href="/"><Icon src='./favicon.svg' /></Link>
				<Link href="/"><Header>Octa</Header></Link>
			</IconContainer>
			<SocialIcons>
				<a href="https://twitter.com/ChristianECG_" target="_blank" rel="noreferrer">
					<RiTwitterLine />
				</a>
				<a href="https://www.linkedin.com/in/christianeliascg/" target="_blank" rel="noreferrer">
					<RiLinkedinLine />
				</a>
				<a href="https://christianecg.com" target="_blank" rel="noreferrer">
					<RiGlobalLine />
				</a>
			</SocialIcons>
		</HeaderContainer>
		<TitleContainer>
			<Title>Octa Blog</Title>
			<Subtitle>Tecnología y desarrollo</Subtitle>
		</TitleContainer>
	</HeroContainer>
)

const AlternativeHero = () => (
	<HeroContainer style={{height: 'auto'}}>
		<HeaderContainer>
			<IconContainer>
				<Link href="/"><Icon src='./favicon.svg' /></Link>
				<Link href="/"><Header>Octa</Header></Link>
			</IconContainer>
			<SocialIcons>
				<a href="https://twitter.com/ChristianECG_" target="_blank" rel="noreferrer">
					<RiTwitterLine />
				</a>
				<a href="https://www.linkedin.com/in/christianeliascg/" target="_blank" rel="noreferrer">
					<RiLinkedinLine />
				</a>
				<a href="https://christianecg.com" target="_blank" rel="noreferrer">
					<RiGlobalLine />
				</a>
			</SocialIcons>
		</HeaderContainer>
	</HeroContainer>
)

export default Hero
export { AlternativeHero }