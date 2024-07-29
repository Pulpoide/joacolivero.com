import type { CoverProject } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	unrealengineprojectcleaner: {
		slug: "mercadolibrepricechart",
		name: "Unreal Engine Project Cleaner",
	},
	arrayutils: {
		slug: "arrayutils",
		name: "Array Utils",
	},
	hangman: {
		slug: "hangman",
		name: "Hangman",
	},
	calculadorarendimientosmercadopago: {
		slug: "calculadorarendimientosmercadopago",
		name: "Calculadora de Rendimientos MercadoPago",
	},
	pixelateddrift: {
		slug: "pixelateddrift",
		name: "Pixelated Drift",
	},
	portfolio: {
		slug: "portfolio",
		name: "Portfolio",
	},
	thedungeon: {
		slug: "thedungeon",
		name: "The Dungeon",
	},
	thegreatchocolatecaper: {
		slug: "thegreatchocolatecaper",
		name: "The Great Chocolate Caper",
	},
}

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.unrealengineprojectcleaner,
		imageUrl: `/assets/images/projects/otherprojectscover/unrealengineprojectcleaner.webp`,
		description: "Script de línea de comandos que optimiza el mantenimiento de proyectos de Unreal Engine eliminando carpetas temporales de forma efectiva, segura y rápida.",
	},
	{
		...projectMetadata.arrayutils,
		imageUrl: `/assets/images/projects/otherprojectscover/arrayutils.webp`,
		description:
			"Colección de funciones adaptadas de la Biblioteca de Plantillas Estándar (STL) de C++, diseñadas para interoperar con el lenguaje de scripting de Unreal Engine.",
	},
	{
		...projectMetadata.hangman,
		imageUrl: `/assets/images/projects/otherprojectscover/hangman.webp`,
		description:
			"Implementación del juego clásico \"El Ahorcado\" en 333 líneas de código, disponible para jugar en línea",
	},
	{
		...projectMetadata.calculadorarendimientosmercadopago,
		imageUrl: `/assets/images/projects/otherprojectscover/calculadorarendimientosmercadopago.webp`,
		description:
			"Herramienta web diseñada para calcular la ganancia de inversiones a lo largo del tiempo, ofreciendo una interfaz intuitiva y respuestas inmediatas.",
	},
	{
		...projectMetadata.pixelateddrift,
		imageUrl: `/assets/images/projects/otherprojectscover/pixelateddrift.webp`,
		description:
			"Simulador de manejo ambientado en una ciudad gótica con gráficos al estilo de la PlayStation 2.",
	},
	{
		...projectMetadata.portfolio,
		imageUrl: `/assets/images/projects/otherprojectscover/portfolio.webp`,
		description:
			"Este sitio web destaca por su diseño negro y backend robusto, es completamente responsivo, logra altas puntuaciones en Rendimiento, Accesibilidad y SEO e integra eficientemente APIs, almacenamiento de datos y validación de formularios.",
	},
	{
		...projectMetadata.thedungeon,
		imageUrl: `/assets/images/projects/otherprojectscover/thedungeon.webp`,
		description:
			"Prototipo de juego de puzzles y terror que desafía a los jugadores con acertijos envolventes en un ambiente oscuro y misterioso.",
	},
	{
		...projectMetadata.thegreatchocolatecaper,
		imageUrl: `/assets/images/projects/otherprojectscover/thegreatchocolatecaper.webp`,
		description:
			"Simulador interactivo donde el jugador asume el papel de una bola de chocolate intentando escapar de una casa laberíntica llena de robots hambrientos.",
	},
]