import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export default function WhatsappIcon(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2" // Cambiado a camelCase
      stroke="currentColor"
      fill="none"
      strokeLinecap="round" // Cambiado a camelCase
      strokeLinejoin="round" // Cambiado a camelCase
      {...props} // Pasa todas las props al elemento SVG
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}
