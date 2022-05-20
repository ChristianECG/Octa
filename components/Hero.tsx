import styled from 'styled-components'
import { RiGlobalLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import type { NextPage } from 'next'

const HeroContainer = styled.header`
	display: flex;
	flex-direction: column;
	background-color: #0e2a47;
	background-image: url('./cover.svg');
	background-size: cover;
	width: 100%;
	height: 100vh;
	max-height: 500px;
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
`

const Header = styled.h1`
	color: white;
	font-size: 1.8rem;
	font-weight: 400;
`;

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

const Hero: NextPage = () => {
	return (
		<HeroContainer>
			<HeaderContainer>
				<IconContainer>
					<Icon src='./favicon.ico' />
					<Header>Octa</Header>
				</IconContainer>
				<SocialIcons>
					<a href="https://twitter.com/ChristianECG_" target="_blank">
						<RiTwitterLine />
					</a>
					<a href="https://www.linkedin.com/in/christianeliascg/" target="_blank">
						<RiLinkedinLine />
					</a>
					<a href="https://christianecg.com" target="_blank">
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
}

export default Hero
