import React, { FC } from 'react';
import ImageAnchorLi from '../../../molecules/list-items/image-anchor/ImageAnchorLi';
import { ImageAnchorProps } from '../../../atoms/image-anchor/ImageAnchor';

interface ImageAnchorListProps {
  className: string;
  listItems: ImageAnchorProps[];
}

const ImageAnchorList: FC<ImageAnchorListProps> = ({ className, listItems }) => (
  <ul className={className}>
    {listItems.map((listItem) => (
      <ImageAnchorLi
        href={listItem.href}
        className={listItem.className}
        imgClassName={listItem.imgClassName}
        src={listItem.src}
        title={listItem.title}
      />
    ))}
  </ul>
);

export default ImageAnchorList;
