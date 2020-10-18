import React, { FC } from 'react';

export interface ImageAnchorProps {
  href: string;
  src: string;
  title: string;
  className?: string;
  imgClassName?: string;
}

const ImageAnchor: FC<ImageAnchorProps> = ({ href, src, title, className, imgClassName }) => (
  <a className={className} tabIndex={0} href={href}>
    <img src={src} alt={title + ' image'} title={title} className={imgClassName} />
  </a>
);

export default ImageAnchor;
