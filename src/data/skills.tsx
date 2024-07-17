import { NextJsLogo } from "~/components/Svg/NextJsLogo"
import { MongoDbLogo } from "~/components/Svg/MongoDbLogo"
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo"
import { ReactJsLogo } from "~/components/Svg/ReactJsLogo"
import { ExpressLogo } from "~/components/Svg/ExpressLogo"
import { CppLogo } from "~/components/Svg/JavascriptLogo"
import { TypescriptLogo } from "~/components/Svg/TypescriptLogo"
import { NodeJsLogo } from "~/components/Svg/NodeJsLogo"
import { UnityLogo } from "~/components/Svg/TailwindCssLogo"
import { UnrealLogo } from "~/components/Svg/VitestLogo"

export const skills = [
	{
		name: "React",
		icon: <ReactJsLogo />,
		brandColor: "hsl(192.85714285714286, 95.06172839506173%, 68.23529411764706%)",
	},
	{
		name: "Next.js",
		icon: <NextJsLogo />,
		brandColor: "",
	},
	{
		name: "Typescript",
		icon: <TypescriptLogo />,
		brandColor: "#3178C6",
	},
	{
		name: "Node.js",
		icon: <NodeJsLogo />,
		brandColor: "#5FA04E",
	},
	{
		name: "Express",
		icon: <ExpressLogo />,
		brandColor: "",
	},
	{
		name: "MongoDB",
		icon: <MongoDbLogo />,
		brandColor: "#47A248",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#4169E1",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#c7b008",
	},
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#06B6D4",
	},
	{
		name: "Unreal Engine",
		icon: <UnrealLogo />,
		brandColor: "#6E9F18",
	},
]
