import type { CoverProject } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	mercadolibrepricechart: {
		slug: "mercadolibrepricechart",
		name: "Mercado Libre Price Chart",
	},
	monedasAPI: {
		slug: "monedasAPI",
		name: "Monedas API",
	},
	TheDungeon: {
		slug: "the-dungeon",
		name: "The Dungeon",
	},
}

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.mercadolibrepricechart,
		imageUrl: `/assets/images/projects/cover/mercadolibre.webp`,
		description: "Visualiza un histograma detallado de los precios de productos en MercadoLibre.",
	},
	{
		...projectMetadata.monedasAPI,
		imageUrl: `/assets/images/projects/cover/monedasapi.webp`,
		description:
			"API RESTful para obtener los precios más recientes de divisas extranjeras en Argentina.",
	},
	{
		...projectMetadata.TheDungeon,
		imageUrl: `/assets/images/projects/otherprojectscover/thedungeon.webp`,
		description:
			"Juego de puzzles y terror que combina acertijos desafiantes en un entorno oscuro y misterioso."
	},
]

export const projects = [
	{
		...projectMetadata.mercadolibrepricechart,
		index: 0,
		description:
			"Aplicación web que permite consultar precios de productos en MercadoLibre y visualizarlos en un histograma. Utiliza web scraping para obtener los precios, la API monedas-api (desarrollada por mí) para el tipo de cambio actualizado a dólares, y Matplotlib para generar gráficos claros y concisos que representan eficazmente la variabilidad de los precios.",
		mobileImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmobile.webp`,
				`/assets/images/projects/mercadolibre/mercadolibrepchistograma.webp`
			],
		desktopImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmac.webp`,
				`/assets/images/projects/mercadolibre/mercadolibrepcdiagrama.webp`
			],
		links: [
			{
				label: "Visitar sitio",
				url: "https://mercado-libre-price-chart.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/pyoneerC/mercado-libre-price-chart",
			},
		],
		tags:
			[
			Tag.python,
			Tag.flask,
		],
	},
	{
		...projectMetadata.monedasAPI,
		index: 1,
		description:
			"Monedas API es una aplicación robusta y dinámica desarrollada con FastAPI, que proporciona tasas de cambio de divisas en tiempo real mediante extracción de datos de sitios web financieros. Se centra en tasas de cambio en Argentina, incluyendo USD (blue, oficial, MEP, CCL), Euro, Real Brasileño y más. Desplegada en un servidor HTTP, ofrece acceso remoto a través de solicitudes RESTful.",
		mobileImages:
			[
				`/assets/images/projects/monedasapi/json.webp`,
			],
		desktopImages:
			[
				`/assets/images/projects/monedasapi/mac.webp`,
				`/assets/images/projects/monedasapi/architecturediagram.webp`
			],
		links: [
			{
				label: "Visitar documentación",
				url: "https://fastapiproject-1-eziw.onrender.com/docs",
			},
			{
				label: "Ver código",
				url: "https://github.com/pyoneerC/monedas-api",
			},
		],
		tags:
			[
			Tag.python,
			Tag.fastAPI
		],
	},
	{
		...projectMetadata.TheDungeon,
		index: 2,
		description:
			"Este juego combina terror y puzzles, ofreciendo acertijos complejos, una atmósfera siniestra y música envolvente. Diseñado con el objetivo de aprender y mejorar habilidades en desarrollo de juegos, ¿podrás superar todos los desafíos y sobrevivir para ver el final?",
		mobileImages:
			[
				`/assets/images/projects/hillclimbracing/falling.png`,
			],
		desktopImages: [
			`/assets/images/projects/hillclimbracing/hcr.gif`,
			`/assets/images/projects/hillclimbracing/streamer.webp`,
			`/assets/images/projects/hillclimbracing/unity.png`
		],
		links: [
			{
				label: "Ver en itch.io",
				url: "https://pyoneerc1.itch.io/the-dungeon",
			},
			{
				label: "Ver vídeos del juego",
				url: "https://www.youtube.com/playlist?list=PLRFx0xkqiuISCnQBv0af1v3Kn7fOHcoLT",
			},
		],
		tags:
		[
			Tag.unrealEngine,
			Tag.blueprints,
			Tag.cPlusPlus
		],
	},
]
