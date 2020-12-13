// A card component for sightings. Should probably rename this at some point

import React, { FC } from 'react';
import UtilBar from '../util-bar/UtilBar';
import ToggleButton from '../../atoms/button/ToggleButton';
import { useNavigate } from 'react-router';

export interface CardProps {
  colSizeA: string;
  colSizeB: string;
  className?: string;
  title: string;
  src?: string;
  imgClass?: string;
  utilBar: boolean;
  sightingId: string;
}

const Card: FC<CardProps> = ({
  utilBar,
  colSizeA,
  colSizeB,
  className,
  title,
  src,
  imgClass,
  children,
  sightingId,
}) => {
  const navigate = useNavigate();

  const savePost = (save: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(save ? 'Post isSaved' : 'Post unsaved');
        resolve();
      }, 10);
    });
  };

  const followPost = (follow: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(follow ? 'Following post' : 'Post unfollowed');
        resolve();
      }, 10);
    });
  };

  const verifyPost = (verify: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(verify ? 'Verified post' : 'Post unverified');
        resolve();
      }, 10);
    });
  };

  return (
    // TODO: card is clickable ( I believe in all, else most cases ). Use href? Link?
    // In any case link to sighting/:id
    // TODO: must be able to add additional classname
    <div className={'card column'}>
      <div className="redirect-area" onClick={() => navigate(`/sighting/details/${sightingId}`)}>
        <div className="column">
          <div className="content">
            <h2>{title}</h2>
          </div>
        </div>
        <div className={colSizeA}>
          <div className="content">{children}</div>
        </div>
        <div className={colSizeB}>
          <div className="content">
            <p>Short reporter message of 200 max characters or something, lorem ipsum dolphins</p>
            {src ? <img src={src} alt={title + ' image'} title={title} className={imgClass} /> : null}
          </div>
        </div>
      </div>
      {utilBar ? (
        <div className="column">
          <UtilBar className="compact-ub align-right">
            <li>
              <ToggleButton
                type="button"
                action={savePost}
                btnClass="btn-secondary btn-compact icon-btn"
                disabled={false}
              >
                {{
                  enabled: (
                    <>
                      Saved
                      <img
                        src="/assets/icons/heart.svg"
                        alt="Heart icon"
                        title="Added to saved sightings"
                        className="small-icon"
                      />
                    </>
                  ),
                  disabled: (
                    <>
                      Save
                      <img
                        src="/assets/icons/heart.svg"
                        alt="Heart icon"
                        title="Add to saved sightings"
                        className="small-icon grayscale"
                      />
                    </>
                  ),
                }}
              </ToggleButton>
            </li>
            <li>
              <ToggleButton
                type="button"
                action={followPost}
                btnClass="btn-secondary btn-compact icon-btn"
                disabled={false}
              >
                {{
                  enabled: (
                    <>
                      Following
                      <img
                        src="/assets/icons/bell.svg"
                        alt="Follow sighting icon"
                        title="Following sighting"
                        className="small-icon"
                      />
                    </>
                  ),
                  disabled: (
                    <>
                      Follow
                      <img
                        src="/assets/icons/bell.svg"
                        alt="Follow sighting icon"
                        title="Follow sighting"
                        className="small-icon grayscale"
                      />
                    </>
                  ),
                }}
              </ToggleButton>
            </li>
            <li>
              <ToggleButton
                type="button"
                action={verifyPost}
                btnClass="btn-secondary btn-compact icon-btn"
                disabled={false}
              >
                {{
                  enabled: (
                    <>
                      Verified
                      <img
                        src="/assets/icons/check.svg"
                        alt="Verify sighting icon"
                        title="Verified sighting"
                        className="small-icon"
                      />
                    </>
                  ),
                  disabled: (
                    <>
                      Verify
                      <img
                        src="/assets/icons/check.svg"
                        alt="Verify sighting icon"
                        title="Verify sighting"
                        className="small-icon grayscale"
                      />
                    </>
                  ),
                }}
              </ToggleButton>
            </li>
          </UtilBar>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
