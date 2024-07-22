import { PythonLogo } from "~/components/Svg/PythonLogo";
import { MongoDbLogo } from "~/components/Svg/MongoDbLogo";
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo";
import { AzureLogo } from "~/components/Svg/AzureLogo";
import { BashLogo } from "~/components/Svg/BashLogo";
import { LinuxLogo } from "~/components/Svg/LinuxLogo";
import { DotNetLogo } from "~/components/Svg/DotNetLogo";
import { UnityLogo } from "~/components/Svg/UnityLogo";
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo";
import { CsharpLogo } from "~/components/Svg/CsharpLogo";
import { CppLogo } from "~/components/Svg/CppLogo";
import { DockerLogo } from "~/components/Svg/DockerLogo";
import { MySQLLogo } from "~/components/Svg/MySQLLogo";
import { AWSLogo } from "~/components/Svg/AWSLogo";

export const skills = [
	// Backend skills
	{
		name: "Bash",
		icon: <BashLogo />,
		brandColor: "#4EAA25",
	},
	{
		name: "MongoDB",
		icon: <MongoDbLogo />,
		brandColor: "#47A248",
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
		name: "Linux",
		icon: <LinuxLogo />,
		brandColor: "#444444",
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#039CC7",
	},
	{
		name: "AWS",
		icon: <AWSLogo />,
		brandColor: "#FF9900",
	},
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#FFD445",
	},
	// .NET related skills
	{
		name: ".NET",
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
		name: "Unreal Engine",
		icon: <UnrealLogo />,
		brandColor: "",
	},
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#659AD2",
	},
];
