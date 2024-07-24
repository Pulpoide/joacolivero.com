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
	hillclimbracing: {
		slug: "hillclimbracing",
		name: "Hill Climb Racing",
	},
}

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.mercadolibrepricechart,
		imageUrl: `/assets/images/projects/cover/mercadolibre.png`,
		description: "Visualiza un histograma detallado de los precios de productos en MercadoLibre.",
	},
	{
		...projectMetadata.monedasAPI,
		imageUrl: `/assets/images/projects/cover/monedasapi.png`,
		description:
			"API RESTful para obtener los precios más recientes de divisas extranjeras en Argentina.",
	},
	{
		...projectMetadata.hillclimbracing,
		imageUrl: `/assets/images/projects/cover/hcr.png`,
		description:
			"Hill Climb Racing recreado en Unity.",
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
			"Monedas API es una aplicación robusta desarrollada con FastAPI, diseñada para proporcionar tasas de cambio de divisas en tiempo real mediante scraping de sitios web financieros. La API se enfoca principalmente en varias tasas de cambio en Argentina, incluyendo USD (blue, oficial, MEP, CCL), Euro, Real Brasileño, Peso Chileno, Peso Uruguayo, y más. También ofrece una función de conversión para convertir montos entre las monedas soportadas.",
		mobileImages:
			[
				`/assets/images/projects/monedasapi/json.png`,
			],
		desktopImages:
			[
				`/assets/images/projects/monedasapi/mac.png`,
				`/assets/images/projects/monedasapi/architecturediagram.png`
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
		...projectMetadata.hillclimbracing,
		index: 2,
		description:
			"Este proyecto es una reimplementación del popular juego móvil Hill Climb Racing, construido con el motor de juegos Unity. Tiene como objetivo recrear la adictiva experiencia de juego con características y mejoras adicionales. Sumérgete en un mundo con un nivel hecho a mano, coleccionables, efectos de sonido inmersivos, una interfaz intuitiva y una física deliciosamente inestable diseñada para desafiar y entretener.",
		mobileImages:
			[
				`/assets/images/projects/hillclimbracing/falling.png`,
				`/assets/images/projects/hillclimbracing/celular.png`
			],
		desktopImages: [
			`/assets/images/projects/hillclimbracing/mac.png`,
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
			Tag.unity,
			Tag.cSharp
		],
	},
]
