import { PythonLogo } from "~/components/Svg/PythonLogo";
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo";
import { AzureLogo } from "~/components/Svg/AzureLogo";
import { BashLogo } from "~/components/Svg/BashLogo";
import { TypescriptLogo } from "~/components/Svg/TypeScriptLogo";
import { DotNetLogo } from "~/components/Svg/DotNetLogo";
import { UnityLogo } from "~/components/Svg/UnityLogo";
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo";
import { CsharpLogo } from "~/components/Svg/CsharpLogo";
import { CppLogo } from "~/components/Svg/CppLogo";
import { MySQLLogo } from "~/components/Svg/MySQLLogo";
import { ExpressLogo } from "~/components/Svg/ExpressLogo";

export const skills = [
	// Backend skills
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#FFD445",
	},
	{
		name: "TypeScript",
		icon: <TypescriptLogo />,
		brandColor: "#3178C6",
	},
	{
		name: "Express",
		icon: <ExpressLogo />,
		brandColor: "",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#336791",
	},
	{
		name: "MySQL",
		icon: <MySQLLogo />,
		brandColor: "#00758F",
	},
	{
		name: "Bash",
		icon: <BashLogo />,
		brandColor: "#4EAA25",
	},
	// .NET related skills
	{
		name: "DotNet",
		icon: <DotNetLogo />,
		brandColor: "#1486CA",
	},
	{
		name: "Azure",
		icon: <AzureLogo />,
		brandColor: "#007FFF",
	},
	{
		name: "C#",
		icon: <CsharpLogo />,
		brandColor: "#9A5196",
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "",
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#659AD2",
	},
];
