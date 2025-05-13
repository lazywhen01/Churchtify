import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            width="32"
            height="42"
            viewBox="0 0 32 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="butt"
            strokeLinejoin="miter"
        >
            <path d="M2 12h28" />
            <path d="M16 5v32" />
        </svg>
    );
}
