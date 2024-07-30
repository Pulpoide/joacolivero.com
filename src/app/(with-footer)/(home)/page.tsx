import { HeroSection } from "./_sections/HeroSection"
import { ProjectsSection } from "./_sections/ProjectsSection"
import { AboutSection } from "./_sections/AboutSection"
import { SkillsSection } from "./_sections/SkillsSection"
import { ContactSection } from "./_sections/ContactSection"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head"

export default function Home() {
	return (
		<>
			<Head>
				<title>Max Comperatore - Desarrollador Backend y de Videojuegos</title>
				<meta name="description" content="Max Comperatore's personal portfolio showcasing projects and skills in backend and game development." />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://maxcomperatore.com/" />
				<meta property="og:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
				<meta property="og:description" content="Max Comperatore's personal portfolio showcasing projects and skills in backend and game development." />
				<meta property="og:image" content="https://maxcomperatore.com/assets/images/projects/otherprojectscover/portfolio.webp" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://maxcomperatore.com/" />
				<meta property="twitter:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
				<meta property="twitter:description" content="Max Comperatore's personal portfolio showcasing projects and skills in backend and game development." />
				<meta property="twitter:image" content="https://maxcomperatore.com/assets/images/projects/otherprojectscover/portfolio.webp" />
			</Head>
			<main>
				<Analytics />
				<SpeedInsights />
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<SkillsSection />
				<ContactSection />
			</main>
		</>
	);
}