import { CppLogo } from "~/components/Svg/Logos/CppLogo";
import { DockerLogo } from "~/components/Svg/Logos/DockerLogo";
import { FastAPILogo } from "~/components/Svg/Logos/FastAPILogo";
import { GeminiLogo } from "~/components/Svg/Logos/GeminiLogo";
import { GitHubActionsLogo } from "~/components/Svg/Logos/GitHubActionsLogo";
import { GoogleCloudLogo } from "~/components/Svg/Logos/GoogleCloudLogo";
import { JavaLogo } from "~/components/Svg/Logos/JavaLogo";
import { K6Logo } from "~/components/Svg/Logos/K6Logo";
import { LangChainLogo } from "~/components/Svg/Logos/LangChainLogo";
import { LangFuseLogo } from "~/components/Svg/Logos/LangFuseLogo";
import { LangGraphLogo } from "~/components/Svg/Logos/LangGraphLogo";
import { MongoDBLogo } from "~/components/Svg/Logos/MongoDBLogo";
import { NextJsLogo } from "~/components/Svg/Logos/NextJsLogo";
import { PostgresqlLogo } from "~/components/Svg/Logos/PostgresqlLogo";
import { PythonLogo } from "~/components/Svg/Logos/PythonLogo";
import { ReactLogo } from "~/components/Svg/Logos/ReactLogo";
import { SpringBootLogo } from "~/components/Svg/Logos/SpringBootLogo";
import { SqliteLogo } from "~/components/Svg/Logos/SqliteLogo";
import { SupabaseLogo } from "~/components/Svg/Logos/SupabaseLogo";
import { TypeScriptLogo } from "~/components/Svg/Logos/TypeScriptLogo";

export type SkillCategory = "Languages" | "Backend" | "Frontend" | "Databases" | "AI" | "DevOps/Tools";

export const CATEGORIES: SkillCategory[] = [
	"Backend",
	"AI",
	"Languages",
	"Databases",
	"DevOps/Tools",
	"Frontend"
];

export const skills = [
	{
		name: "Python",
		category: "Languages" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><PythonLogo /></div>,
		brandColor: "#FFD43B",
		tooltip: "Versatile, high-level language essential for AI applications, machine learning, and data processing.",
		colors: ["#3776AB", "#FFD43B", "#2b5b84"]
	},
	{
		name: "Java",
		category: "Languages" as SkillCategory,
		icon: <JavaLogo />,
		brandColor: "#f89820",
		tooltip: "Robust, object-oriented language used for cross-platform applications, backend services, and enterprise systems.",
		colors: ["#f89820", "#5382a1"]
	},
	{
		name: "TypeScript",
		category: "Languages" as SkillCategory,
		icon: <TypeScriptLogo />,
		brandColor: "#358ef1",
		tooltip: "Strongly typed superset of JavaScript, optimized for scalable and large-scale applications.",
		colors: ["#3178c6", "#235a97", "#00273f"],
	},
	{
		name: "C++",
		category: "Languages" as SkillCategory,
		icon: <CppLogo />,
		brandColor: "#008bb9",
		tooltip: "High-performance, compiled language for system-level programming and resource-intensive applications.",
		colors: ["#00599C", "#004482", "#008bb9"],
	},
	{
		name: "SpringBoot",
		category: "Backend" as SkillCategory,
		icon: <SpringBootLogo />,
		brandColor: "#8BC34A",
		tooltip: "Framework built on Java for rapidly developing scalable, production-ready backend services and microservices.",
		colors: ["#8BC34A", "#76A63F", "#9DDD54"],
	},
	{
		name: "FastAPI",
		category: "Backend" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><FastAPILogo /></div>,
		brandColor: "#009688",
		tooltip: "Modern, fast web framework for building high-performance APIs with Python, ideal for AI service integration.",
		colors: ["#009688", "#00bfa5", "#00796b"]
	},
	{
		name: "LangChain",
		category: "AI" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><LangChainLogo /></div>,
		brandColor: "#32A852",
		tooltip: "Framework for developing applications powered by language models, essential for RAG architectures.",
		colors: ["#1C3C3C", "#32A852", "#E8F4F0"]
	},
	{
		name: "LangGraph",
		category: "AI" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><LangGraphLogo /></div>,
		brandColor: "#2563EB",
		tooltip: "Library for building stateful, multi-actor applications with LLMs, perfect for orchestrating multi-agent systems.",
		colors: ["#2563EB", "#1D4ED8", "#60A5FA"]
	},
	{
		name: "LangFuse",
		category: "AI" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><LangFuseLogo /></div>,
		brandColor: "#E53E3E",
		tooltip: "Open-source LLM engineering platform for observability, analytics, and prompt management in complex AI workflows.",
		colors: ["#DC2626", "#3B82F6", "#2563EB"]
	},
	{
        name: "Gemini",
        category: "AI" as SkillCategory,
        icon: <GeminiLogo />,
        brandColor: "#4285F4",
        tooltip: "Multimodal AI model utilized for advanced reasoning, content generation, and integration within intelligent architectures.",
        colors: ["#9B72CB", "#EA4335", "#D96570", "#FBBC05", "#34A853", "#4285F4"],
    },
	{
		name: "PostgreSQL",
		category: "Databases" as SkillCategory,
		icon: <PostgresqlLogo />,
		brandColor: "#008bb9",
		tooltip: "Advanced open-source relational database known for reliability, SQL compliance, and extensibility.",
		colors: ["#0064a5", "#336791", "#008bb9"],
	},
	{
		name: "MongoDB",
		category: "Databases" as SkillCategory,
		icon: <MongoDBLogo />,
		brandColor: "#4DB33D",
		tooltip: "NoSQL database for flexible and scalable document storage.",
		colors: ["#3FA037", "#E8E7D5", "#3F3E42", "#C1BEBC"],
	},
	{
		name: "Supabase",
		category: "Databases" as SkillCategory,
		icon: <SupabaseLogo />,
		brandColor: "#32A852",
		tooltip: "Open-source Firebase alternative for building real-time databases and authentication.",
		colors: ["#32A852", "#2E8B57", "#1C3C3C"]
	},
	{
        name: "SQLite",
        category: "Databases" as SkillCategory,
        icon: <SqliteLogo />,
        brandColor: "#0F80CC",
        tooltip: "C-language library providing a fast, self-contained, high-reliability SQL database engine for edge and local storage.",
        colors: ["#044A64", "#0F80CC", "#5BC0DE"],
    },
	{
		name: "Docker",
		category: "DevOps/Tools" as SkillCategory,
		icon: <DockerLogo />,
		brandColor: "#00b8ff",
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "GitHub Actions",
		category: "DevOps/Tools" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><GitHubActionsLogo /></div>,
		brandColor: "#2088FF",
		tooltip: "Automation platform for CI/CD pipelines, enabling seamless testing and deployment workflows.",
		colors: ["#2088FF", "#181717", "#F6F8FA"]
	},
	{
		name: "Google Cloud",
		category: "DevOps/Tools" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><GoogleCloudLogo /></div>,
		brandColor: "#4285F4",
		tooltip: "Cloud computing services offering robust infrastructure, data analytics, and machine learning capabilities.",
		colors: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"]
	},
	{
		name: "k6",
		category: "DevOps/Tools" as SkillCategory,
		icon: <div style={{ fontSize: "2rem" }}><K6Logo /></div>,
		brandColor: "#7D64FF",
		tooltip: "Open-source load testing tool critical for evaluating backend scalability and high-performance system limits.",
		colors: ["#7D64FF", "#9D8BFF", "#5B43D6"]
	},
	{
		name: "React",
		category: "Frontend" as SkillCategory,
		icon: <ReactLogo />,
		brandColor: "#11bfed",
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
	{
		name: "NextJS",
		category: "Frontend" as SkillCategory,
		icon: <NextJsLogo />,
		brandColor: "#5e72e4",
		tooltip: "React framework focused on server-side rendering and static generation.",
		colors: ["#172b4d", "#f4f5f7", "#5e72e4"],
	},
];
