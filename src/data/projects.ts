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
				`/assets/images/projects/mercadolibre/mercadolibrepcmobile.png`,
				`/assets/images/projects/mercadolibre/mercadolibrepchistograma.png`
			],
		desktopImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmac.png`,
				`/assets/images/projects/mercadolibre/mercadolibrepcdiagrama.png`
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
			"Este proyecto es una reimplementación del popular juego móvil Hill Climb Racing, construido con el motor de juegos Unity. Tiene como objetivo recrear la adictiva experiencia de juego con características y mejoras adicionales. Sumérgete en un mundo con un nivel hecho a mano, coleccionables, efectos de sonido inmersivos, una interfaz intuitiva y una física deliciosamente inestable diseñada para desafiar y entretener.",
		mobileImages:
			[
				`/assets/images/projects/hillclimbracing/falling.png`,
			],
		desktopImages: [
			`/assets/images/projects/hillclimbracing/mac.png`,
			`/assets/images/projects/hillclimbracing/hcr.gif`,
			`/assets/images/projects/hillclimbracing/unity.png`
		],
		links: [
			{
				label: "Juega en tu navegador",
				url: "https://pyoneerc1.itch.io/hill-climb-racing-recreation",
			},
			{
				label: "Ver código",
				url: "https://github.com/pyoneerC/Hill-Climb-Racing",
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
