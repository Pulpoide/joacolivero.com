import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"
import "~/styles/reset.css"
import "~/styles/globals.css"
import "~/styles/utils.css"
export const metadata = {
	metadataBase: new URL("https://maxcomperatore.com"),
	title: "Max Comperatore - Desarrollador Backend y de Videojuegos",
	description: "Un desarrollador pragmático enfocado en backend y desarrollo de videojuegos.",
	authors: [{ name: "Max Comperatore" }],
	creator: "Max Comperatore",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" suppressHydrationWarning>
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{metadata.title}</title>
			<meta name="description"
						content="Portafolio personal de Max Comperatore que muestra proyectos y habilidades en desarrollo backend y de videojuegos." />
			<meta name="author" content="Max Comperatore" />
			<meta name="creator" content="Max Comperatore" />
			<meta property="og:image"
						content="https://maxcomperatore.com/assets/images/projects/otherprojectscover/portfolio.webp" />
			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://maxcomperatore.com/" />
			<meta property="og:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
			<meta property="og:description"
						content="Portafolio personal de Max Comperatore que muestra proyectos y habilidades en desarrollo backend y de videojuegos." />
			<meta property="og:image"
						content="https://maxcomperatore.com/assets/images/projects/otherprojectscover/portfolio.webp" />
			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://maxcomperatore.com/" />
			<meta property="twitter:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
			<meta property="twitter:description"
						content="Max Comperatore's personal portfolio showcasing projects and skills in backend and game development." />
			<meta property="twitter:image"
						content="https://maxcomperatore.com/assets/images/projects/otherprojectscover/portfolio.webp" />
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-N5ZZD243ZP"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N5ZZD243ZP');
      `,
				}}
			/>
		</head>
		<body className={`${GeistSans.className} ${GeistSans.variable}`}>
		<ThemeProvider>
			<SvgMasks />
			<div className="__next">
				<Header />
				{children}
			</div>
		</ThemeProvider>
		</body>
		</html>
	)
}