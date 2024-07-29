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
]