import type { CoverProject } from "~/types";

import { Tag } from "./tags";

export const projectMetadata = {
	Deporturnos: {
		slug: "deporturnos",
		name: "Deporturnos",
	},
	ProductManager: {
		slug: "product-manager",
		name: "Product Manager",
	},
	Poui: {
		slug: "poui",
		name: "Poui",
	},
	DraVildoza: {
		slug: "dra-vildoza",
		name: "Dra Vildoza",
	}
};

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.Deporturnos,
		imageUrl: "/assets/images/projects/deporturnos/home.avif",
		i18nDescriptionKey: "Deporturnos.description",
	},
	{
		...projectMetadata.DraVildoza,
		imageUrl: "/assets/images/projects/dravildoza/home.avif",
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
		...projectMetadata.Deporturnos,
		index: 0,
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
		...projectMetadata.DraVildoza,
		index: 1,
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
				"/assets/images/projects/dravildoza/home.avif"
			],
		desktopImages:
			[
				"/assets/images/projects/dravildoza/form.avif",
				"/assets/images/projects/dravildoza/ty.avif",
				"/assets/images/projects/dravildoza/login.avif",
				"/assets/images/projects/dravildoza/panel.avif"
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
		index: 2,
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
		index: 3,
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
