import * as React from 'react';
import './CapturedImage.scss';

interface CapturedImageProps {
  src: string;
}

export const CapturedImage = ({ src }: CapturedImageProps) => (
  <div className="captured-image">{src && <img src={src}></img>}</div>
);
