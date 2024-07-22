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
		url: "https://www.gnu.org/software/bash/",
	},
	{
		name: "MongoDB",
		icon: <MongoDbLogo />,
		brandColor: "#47A248",
		url: "https://www.mongodb.com/",
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
		name: "Linux",
		icon: <LinuxLogo />,
		brandColor: "#444444",
		url: "https://www.linux.org/",
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#039CC7",
		url: "https://www.docker.com/",
	},
	{
		name: "AWS",
		icon: <AWSLogo />,
		brandColor: "#FF9900",
		url: "https://aws.amazon.com/",
	},
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#FFD445",
		url: "https://www.python.org/",
	},
	// .NET related skills
	{
		name: ".NET",
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
		name: "Unreal Engine",
		icon: <UnrealLogo />,
		brandColor: "",
		url: "https://www.unrealengine.com/",
	},
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "",
		url: "https://unity.com/",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#659AD2",
		url: "https://isocpp.org/",
	},
];
