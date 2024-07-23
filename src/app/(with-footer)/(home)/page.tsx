import { HeroSection } from "./_sections/HeroSection"
import { ProjectsSection } from "./_sections/ProjectsSection"
import { AboutSection } from "./_sections/AboutSection"
import { SkillsSection } from "./_sections/SkillsSection"
import { ContactSection } from "./_sections/ContactSection"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
	return (
		<main>
			<Analytics/>
			<HeroSection />
			<ScrollToTopButton />
			<ProjectsSection />
			<AboutSection />
			<SkillsSection />
			<ContactSection />
		</main>
	)
}
