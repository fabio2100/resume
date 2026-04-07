import { ImageResponse } from 'next/og';
import { ReactElement } from 'react';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Code icon SVG path from Material-UI
const CodeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
      fill="#3f51b5"
    />
  </svg>
);

// Icon generation
export default function Icon(): ReactElement {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '20%',
        }}
      >
        <CodeIcon />
      </div>
    ),
    {
      ...size,
    }
  ) as unknown as ReactElement;
}
