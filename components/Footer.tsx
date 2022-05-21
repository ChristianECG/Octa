import styled from 'styled-components'
import type { NextPage } from 'next'

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	background-color: #080f1b;
	color: #fff;
	padding: 1.5rem 0;
	width: 100%;
	font-size: 1rem;
	font-family: 'Noto Sans', sans-serif;

	a {
		color: #f9f9f9;
		font-weight: 600;
	}
`

const Footer: NextPage = () => (
	<StyledFooter>
		<p>
			Este blog está  hecho con ❤️ por <a href="https://twitter.com/ChristianECG_">Christian Elías</a>
		</p>
		<p>
			Todos los derechos reservados &copy; {new Date().getFullYear()}
		</p>
	</StyledFooter>
)

export default Footer