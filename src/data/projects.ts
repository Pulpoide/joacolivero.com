import type { CoverProject } from "~/types";

import { Tag } from "./tags";

export const projectMetadata = {
	LexTrace: {
		slug: "lextrace",
		name: "LexTrace",
	},
	GCP_ecommerce_pipeline: {
		slug: "gcp-ecommerce",
		name: "GCP E-commerce",
	},
	TourmasterAI: {
		slug: "tourmaster-ai",
		name: "Tourmaster AI",
	},
	Deporturnos: {
		slug: "deporturnos",
		name: "Deporturnos",
	},
	BiohackerRoot: {
		slug: "biohacker-root",
		name: "Biohacker Root",
	},
	DraVildoza: {
		slug: "dra-vildoza",
		name: "Dra Vildoza",
	},

	ProductManager: {
		slug: "product-manager",
		name: "Product Manager",
	},
	Poui: {
		slug: "poui",
		name: "Poui",
	},
};

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.LexTrace,
		imageUrl: "/assets/images/projects/lextrace/lextrace.avif",
		i18nDescriptionKey: "LexTrace.description",
	},
	{
		...projectMetadata.GCP_ecommerce_pipeline,
		imageUrl: "/assets/images/projects/gcp-ecommerce/gcp-ecommerce.avif",
		i18nDescriptionKey: "GCP_ecommerce_pipeline.description",
	},
	{
		...projectMetadata.TourmasterAI,
		imageUrl: "/assets/images/projects/tourmaster-ai/tourmasterai.avif",
		i18nDescriptionKey: "TourmasterAI.description",
	},
	{
		...projectMetadata.Deporturnos,
		imageUrl: "/assets/images/projects/deporturnos/deporturnos.avif",
		i18nDescriptionKey: "Deporturnos.description",
	},
	{
		...projectMetadata.BiohackerRoot,
		imageUrl: "/assets/images/projects/biohacker-root/biohacker.avif",
		i18nDescriptionKey: "BiohackerRoot.description",
	},
	{
		...projectMetadata.DraVildoza,
		imageUrl: "/assets/images/projects/dra-vildoza/dra-vildoza.avif",
		i18nDescriptionKey: "DraVildoza.description",
	},
	{
		...projectMetadata.ProductManager,
		imageUrl: "/assets/images/projects/productmanager/home.avif",
		i18nDescriptionKey: "ProductManager.description",
	},
	{
		...projectMetadata.Poui,
		imageUrl: "/assets/images/projects/poui/home.avif",
		i18nDescriptionKey: "Poui.description",
	},
];

export const projects = [
	{
		...projectMetadata.LexTrace,
		index: 0,
		description: "LexTrace.about",
		mobileImages:
			[
				"/assets/images/projects/lextrace/lextrace.avif",
			],
		desktopImages:
			[
			],
		links: [
			{
				label: "LexTrace.linkViewCode",
				url: "https://github.com/Pulpoide/lextrace-agentic-contract-diff",
			},
		],
		tags:
			[
				Tag.python,
				Tag.openai,
				Tag.gpt4oVision,
				Tag.langgraph,
				Tag.langchain,
				Tag.pydantic,
				Tag.langfuse,
				Tag.streamlit,
				Tag.pytest,
				Tag.uv
			],
	},
	{
		...projectMetadata.GCP_ecommerce_pipeline,
		index: 1,
		description: "GCP_ecommerce_pipeline.about",
		mobileImages:
			[
				"/assets/images/projects/gcp-ecommerce/gcp-ecommerce.avif",
			],
		desktopImages:
			[
			],
		links: [
			{
				label: "GCP_ecommerce_pipeline.linkViewCode",
				url: "https://github.com/Pulpoide/gcp-ecommerce-data-intelligence",
			},
		],
		tags:
			[
				Tag.python,
				Tag.gcp,
				Tag.vertexAI,
				Tag.pubsub,
				Tag.cloudFunctions,
				Tag.bigQuery,
				Tag.terraform
			],
	},
	{
		...projectMetadata.TourmasterAI,
		index: 2,
		description: "TourmasterAI.about",
		mobileImages:
			[
				"/assets/images/projects/tourmaster-ai/tourmasterai.avif",
			],
		desktopImages:
			[
			],
		links: [
			{
				label: "TourmasterAI.linkViewCode",
				url: "https://github.com/Pulpoide/tourmaster-ai",
			},
		],
		tags:
			[
				Tag.python,
				Tag.openai,
				Tag.langgraph,
				Tag.langchain,
				Tag.pydantic,
				Tag.chromaDB,
				Tag.langfuse,
				Tag.uv
			],
	},
	{
		...projectMetadata.Deporturnos,
		index: 3,
		description: "Deporturnos.about",
		mobileImages:
			[
				"/assets/images/projects/deporturnos/deporturnos.gif",
			],
		desktopImages:
			[
				"/assets/images/projects/deporturnos/home-admin.avif",
				"/assets/images/projects/deporturnos/users.avif",
				"/assets/images/projects/deporturnos/turnos.avif",
				"/assets/images/projects/deporturnos/mis-reservas.avif",

			],
		links: [
			{
				label: "Deporturnos.linkVisitSite",
				url: "https://deporturnos-front.vercel.app/",
			},
			{
				label: "Deporturnos.linkViewCode",
				url: "https://github.com/Pulpoide/deporturnos-back",
			},
			{
				label: "Deporturnos.linkViewCode2",
				url: "https://github.com/Pulpoide/deporturnos-front",
			},
			{
				label: "Deporturnos.linkVisitDocs",
				url: "https://deporturnos-back-production.up.railway.app/doc/swagger-ui/index.html",
			},
		],
		tags:
			[
				Tag.java,
				Tag.springboot,
				Tag.ejs,
				Tag.postgreSQL,
				Tag.docker,
			],
	},
	{
		...projectMetadata.BiohackerRoot,
		index: 4,
		description: "BiohackerRoot.about",
		mobileImages:
			[
				"/assets/images/projects/biohacker-root/biohacker.avif",
			],
		desktopImages:
			[
			],
		links: [
			{
				label: "BiohackerRoot.linkViewCode",
				url: "https://github.com/Pulpoide/biohacker-rag",
			},
		],
		tags:
			[
				Tag.python,
				Tag.openai,
				Tag.langchain,
				Tag.chromaDB,
				Tag.uv
			],
	},
	{
		...projectMetadata.DraVildoza,
		index: 5,
		description: "DraVildoza.about",
		links: [
			{
				label: "DraVildoza.linkVisitSite",
				url: "https://www.dravildoza.com/",
			},
			{
				label: "DraVildoza.linkViewCode",
				url: "https://github.com/Pulpoide/drasilviavildoza",
			}
		],
		mobileImages:
			[
				"/assets/images/projects/dra-vildoza/dra-vildoza.avif"
			],
		desktopImages:
			[
				"/assets/images/projects/dra-vildoza/form.avif",
				"/assets/images/projects/dra-vildoza/login.avif",
				"/assets/images/projects/dra-vildoza/panel.avif"
			],
		tags:
			[
				Tag.nextjs,
				Tag.typescript,
				Tag.tailwindCSS,
				Tag.supabase,
				Tag.i18n,
			],
	},
	{
		...projectMetadata.ProductManager,
		index: 6,
		description: "ProductManager.about",
		mobileImages:
			[
				"/assets/images/projects/productmanager/productmanager.gif",

			],
		desktopImages:
			[
				"/assets/images/projects/productmanager/home.avif",
				"/assets/images/projects/productmanager/products.avif",
				"/assets/images/projects/productmanager/edit-product.avif"

			],
		links: [
			{
				label: "ProductManager.linkVisitSite",
				url: "https://aoi2-w2.onrender.com/",
			},
			{
				label: "ProductManager.linkViewCode",
				url: "https://github.com/Pulpoide/aoi2_w2",
			},
			{
				label: "ProductManager.linkVisitDocs",
				url: "https://aoi2-w2.onrender.com/api-docs/",
			},
		],
		tags:
			[
				Tag.javascript,
				Tag.expressjs,
				Tag.mongoDB,
			],
	},
	{
		...projectMetadata.Poui,
		index: 7,
		description: "Poui.about",
		mobileImages:
			[
				"/assets/images/projects/poui/home.gif",
			],
		desktopImages: [
			"/assets/images/projects/poui/catalogo.avif",
			"/assets/images/projects/poui/form.avif",
			"/assets/images/projects/poui/quienessomos.avif",
		],
		links: [
			{
				label: "Poui.linkVisitSite",
				url: "https://poui.netlify.app/",
			},
			{
				label: "Poui.linkViewCode",
				url: "https://github.com/Pulpoide/aoi1_w2",
			},
		],
		tags:
			[
				Tag.javascript,
				Tag.css,
				Tag.html
			],
	},
];
