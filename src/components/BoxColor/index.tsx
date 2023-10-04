import React, { ReactNode } from 'react';

interface BoxProps {
  width: number;
  height: number;
  color: string;
  borderRadius?: number;
  fontSize?: number;
  children: ReactNode;
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  color,
  borderRadius = 5,
  fontSize = 18,
  children,
}) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    borderRadius: `${borderRadius}px`,
    fontSize: `${fontSize}px`,
    display: 'flex',
    color:'white',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={boxStyle}>{children}</div>;
};

export default Box;