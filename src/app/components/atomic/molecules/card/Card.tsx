// A simple card component.
// Sighting and Comment both probably follow the same kind of structure ( some image, a bit of info )
// maybe a better name would be a modal or something?

import React, { FC } from 'react';
import UtilBar from '../util-bar/UtilBar';

export interface CardProps {
  colSizeA: string;
  colSizeB: string;
  className?: string;
  title: string;
  src?: string;
  imgClass?: string;
  utilBar: boolean;
}

const Card: FC<CardProps> = ({ utilBar, colSizeA, colSizeB, className, title, src, imgClass, children }) => (
  // TODO: card is clickable ( I believe in all, else most cases ). Use href? Link?
  // In any case link to sighting/:id
  // TODO: must be able to add additional classname
  <a className={'card column'}>
    <div className="column">
      <div className="content">
        <h2>{title}</h2>
      </div>
    </div>
    <div className={colSizeA}>
      <div className="content">
        {/*TODO: below p must be moved outside of this component and must be rendered as colAContent
          or something so any kind of content can be passed here */}
        <p>Short reporter message of 200 max characters or something, lorem ipsum dolphins</p>
        {src ? <img src={src} alt={title + ' image'} title={title} className={imgClass} /> : null}
      </div>
    </div>
    <div className={colSizeB}>
      <div className="content">{children}</div>
    </div>
    {utilBar ? (
      <div className="column">
        <UtilBar className="compact-ub align-right">
          <li>
            <button className="btn btn-secondary btn-compact icon-btn">
              Save
              <img src="/assets/icons/heart.svg" alt="Heart icon" title="Add to favorites" className="small-icon" />
            </button>
          </li>
          <li>
            <button className="btn btn-secondary btn-compact icon-btn">
              Follow
              <img
                src="/assets/icons/bell.svg"
                alt="Follow sighting icon"
                title="Follow sighting"
                className="small-icon"
              />
            </button>
          </li>
          <li>
            <button className="btn btn-secondary btn-compact icon-btn">
              Verify
              <img
                src="/assets/icons/check.svg"
                alt="Verification icon"
                title="Verify sighting"
                className="small-icon"
              />
            </button>
          </li>
        </UtilBar>
      </div>
    ) : null}
  </a>
);

export default Card;
