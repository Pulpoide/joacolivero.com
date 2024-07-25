import { PythonLogo } from "~/components/Svg/PythonLogo";
import { GitLogo } from "~/components/Svg/GitLogo";
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo";
import { AzureLogo } from "~/components/Svg/AzureLogo";
import { BashLogo } from "~/components/Svg/BashLogo";
import { TypeScriptLogo } from "~/components/Svg/TypeScriptLogo";
import { DotNetLogo } from "~/components/Svg/DotNetLogo";
import { UnityLogo } from "~/components/Svg/UnityLogo";
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo";
import { CsharpLogo } from "~/components/Svg/CsharpLogo";
import { CppLogo } from "~/components/Svg/CppLogo";
import { DockerLogo } from "~/components/Svg/DockerLogo";
import { MySQLLogo } from "~/components/Svg/MySQLLogo";
import { ExpressLogo } from "~/components/Svg/ExpressLogo";

export const skills = [
	// Backend skills
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#FFD445",
		url: "https://www.python.org/",
	},
	{
		name: "TypeScript",
		icon: <TypeScriptLogo />,
		brandColor: "#3178C6",
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "Express",
		icon: <ExpressLogo />,
		brandColor: "",
		url: "https://expressjs.com/",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#336791",
		url: "https://www.postgresql.org/",
	},
	{
		name: "MySQL",
		icon: <MySQLLogo />,
		brandColor: "#00758F",
		url: "https://www.mysql.com/",
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#039CC7",
		url: "https://www.docker.com/",
	},
	{
		name: "Git",
		icon: <GitLogo />,
		brandColor: "#dd4c35",
		url: "https://git-scm.com/",
	},
	{
		name: "Bash",
		icon: <BashLogo />,
		brandColor: "#4EAA25",
		url: "https://www.gnu.org/software/bash/",
	},
	// .NET related skills
	{
		name: "DotNet",
		icon: <DotNetLogo />,
		brandColor: "#1486CA",
		url: "https://dotnet.microsoft.com/",
	},
	{
		name: "Azure",
		icon: <AzureLogo />,
		brandColor: "#007FFF",
		url: "https://azure.microsoft.com/",
	},
	{
		name: "C#",
		icon: <CsharpLogo />,
		brandColor: "#9A5196",
		url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "",
		url: "https://unity.com/",
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "",
		url: "https://www.unrealengine.com/",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#659AD2",
		url: "https://isocpp.org/",
	},
];
