import { SVGProps } from "react";

export const LangGraphLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={63}
        height={63}
        viewBox="0 0 24 24"
        fill="none"
        role="img"
        {...props}
    >
        <title>LangGraph</title>
        <path
            fill="currentColor"
            d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z"
        />
    </svg>
);