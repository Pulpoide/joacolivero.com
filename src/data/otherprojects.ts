import { CoverProjectOther } from "~/types"
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

export const coverProjects: CoverProjectOther[] = [
	{
		...projectMetadata.thedungeon,
		imageUrl: `/assets/images/projects/otherprojectscover/thedungeon.webp`,
		description:
			"Prototipo de juego de puzzles y terror que desafía a los jugadores con acertijos envolventes en un ambiente oscuro y misterioso.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://pyoneerc1.itch.io/the-dungeon"
	},
	{
		...projectMetadata.arrayutils,
		imageUrl: `/assets/images/projects/otherprojectscover/arrayutils.webp`,
		description:
			"Colección de funciones adaptadas de la Biblioteca de Plantillas Estándar (STL) de C++, diseñadas para interoperar con el lenguaje de scripting de Unreal Engine.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/Array-Utils"
	},
	{
		...projectMetadata.portfolio,
		imageUrl: `/assets/images/projects/otherprojectscover/portfolio.webp`,
		description:
			"Este sitio web, con diseño en negro y backend robusto, es completamente responsivo y alcanza altas puntuaciones en Rendimiento, Accesibilidad y SEO. Incorpora APIs, almacenamiento de datos y validación de formularios, y utiliza despliegue automático con CI/CD para actualizaciones eficientes.",
		tags: [Tag.typescript, Tag.nextjs, Tag.css, Tag.postgreSQL],
		link: "https://github.com/pyoneerC/maxcomperatore.com"
	},
	{
		...projectMetadata.thegreatchocolatecaper,
		imageUrl: `/assets/images/projects/otherprojectscover/thegreatchocolatecaper.webp`,
		description:
			"Simulador interactivo donde el jugador asume el papel de una bola de chocolate intentando escapar de una casa laberíntica llena de robots hambrientos.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/The-Great-Chocolate-Caper"
	},
	{
		...projectMetadata.pixelateddrift,
		imageUrl: `/assets/images/projects/otherprojectscover/pixelateddrift.webp`,
		description:
			"Simulador de manejo ambientado en una ciudad gótica con gráficos al estilo de la PlayStation 2.",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://pyoneerc1.itch.io/pixelateddrift"
	},
	{
		...projectMetadata.calculadorarendimientosmercadopago,
		imageUrl: `/assets/images/projects/otherprojectscover/calculadorarendimientosmercadopago.webp`,
		description:
			"Herramienta web diseñada para calcular la ganancia de inversiones a lo largo del tiempo, ofreciendo una interfaz intuitiva y respuestas inmediatas.",
		tags: [Tag.javascript, Tag.html, Tag.css],
		link: "https://pyoneerc.github.io/rendimientos-mercado-pago/"
	},
	{
		...projectMetadata.unrealengineprojectcleaner,
		imageUrl: `/assets/images/projects/otherprojectscover/unrealengineprojectcleaner.webp`,
		description: "Script de línea de comandos que optimiza el mantenimiento de proyectos de Unreal Engine eliminando carpetas temporales de forma efectiva, segura y rápida.",
		tags: [Tag.powershell, Tag.cli],
	},
	{
		...projectMetadata.hangman,
		imageUrl: `/assets/images/projects/otherprojectscover/hangman.webp`,
		description:
			"Implementación del juego clásico \"El Ahorcado\" en 333 líneas de código, disponible para jugar en línea",
		tags: [Tag.cPlusPlus, Tag.cli],
	},
]