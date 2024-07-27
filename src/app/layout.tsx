import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"
import "~/styles/reset.css"
import "~/styles/globals.css"
import "~/styles/utils.css"

export const metadata = {
	metadataBase: new URL("https://maxcomperatore.com"),
	title: "Max Comperatore - Backend & Game Developer",
	description: "Explora el portafolio de Max Comperatore, un desarrollador pragmático enfocado en backend y desarrollo de videojuegos.",
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
			<meta name="description" content={metadata.description} />
			<meta name="author" content={metadata.authors[0].name} />
			<meta name="creator" content={metadata.creator} />

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
