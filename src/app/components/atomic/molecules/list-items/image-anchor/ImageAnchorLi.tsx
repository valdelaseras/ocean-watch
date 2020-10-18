import React, { FC } from 'react';
import ImageAnchor from '../../../atoms/image-anchor/ImageAnchor';
import { ImageAnchorProps } from '../../../atoms/image-anchor/ImageAnchor';

const ImageAnchorLi: FC<ImageAnchorProps> = ({ href, src, title, className, imgClassName }) => (
  <li>
    <ImageAnchor href={href} src={src} title={title} className={className} imgClassName={imgClassName} />
  </li>
);

export default ImageAnchorLi;
