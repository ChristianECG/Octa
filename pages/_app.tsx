import { motion } from 'framer-motion'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<motion.div
			key={router.route}
			initial="initial"
			animate="animate"
			variants={{
				initial: {opacity: 0},
				animate: {opacity: 1},
			}}
			transition={{duration: 0.4, ease: 'easeInOut'}}
		>
			<Component {...pageProps} />
		</motion.div>
	)
}

export default MyApp
