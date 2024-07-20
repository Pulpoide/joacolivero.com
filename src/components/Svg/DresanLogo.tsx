import type { SVGProps } from "react"

export const DresanLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={50}
		height={25}
		viewBox="0 30 200 35" // Adjusted viewBox
		fill="none"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeWidth="1"
			pathLength="1"
			fill="currentColor"
		/>
		<path d="M10,80 L10,30 L60,10 L60,60 Z" fill="#E8E8E8" stroke="black"/>
		<path d="M60,10 L110,30 L110,80 L60,60 Z" fill="#969696" stroke="black"/>
		<path d="M10,80 L60,60 L110,80 L60,100 Z" fill="#E8E8E8" stroke="black"/>
	</svg>
)
