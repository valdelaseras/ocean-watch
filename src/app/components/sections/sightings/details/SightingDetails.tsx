import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Section from '../../../layout/section/Section';
import Content from '../../../layout/content/Content';
import Feed from '../../../atomic/organisms/feed/Feed';

import { stubCurrentUserSightings as sightings } from '../../../../stubs/currentUserSightings';
import UtilBar from '../../../atomic/molecules/util-bar/UtilBar';
import ToggleButton from '../../../atomic/atoms/button/ToggleButton';
import Card from '../../../atomic/molecules/card/Card';
import Row from '../../../layout/row/Row';

const SightingDetails: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentSighting = sightings.find((sighting) => sighting.id === id);

  const verifyPost = (verify: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(verify ? 'Verified post' : 'Post unverified');
        resolve();
      }, 10);
    });
  };

  const reportPost = (report: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(report ? 'Report post' : 'Post reported');
        resolve();
      }, 10);
    });
  };

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

  return (
    <Section id="sighting-details" titleClass="font-xl">
      <Content colSize="column">
        <h2>{currentSighting!.organism.species}</h2>
        <ul>
          <li>
            <span className="bold">Status:</span> {currentSighting!.status}
          </li>
          <li>
            <span className="bold">Location: </span>
            <a className="underlined">
              <img src="/assets/icons/gm-pin.svg" alt="google maps pin" className="small-icon" />
              {currentSighting!.location}
            </a>
          </li>
          <li>
            <span className="bold">Time:</span> {currentSighting!.timestamp}
          </li>
          <li>
            <span className="bold">Note:</span> {currentSighting!.note}
          </li>
          <li>
            <span className="bold">Quantity:</span> {currentSighting!.quantity}
          </li>
          <li>
            <span className="bold">Activity:</span> {currentSighting!.activity}
          </li>
          <li>
            <span className="bold">Direction:</span> {currentSighting!.direction}
          </li>
          <li>
            <span className="bold">Juveniles present:</span> {currentSighting!.juvenilesArePresent ? 'Yes' : 'No'}
          </li>
        </ul>
      </Content>

      <Content colSize="column">
        <h2>Images</h2>
        {/*image carousel widget thing goes here*/}
        <div className="carousel">
          <img src="/assets/images/orca.jpg" alt="orca picture" />
        </div>
        {/*    <li>- Pictures</li>*/}
        {/*    <li>- Map widget?</li>*/}
        {/*    <li>- Stats widget ( some cool stats to compare earlier sightings of this same species in this area? )</li>*/}
      </Content>

      <Content colSize="column">
        <Feed title="Comments & updates">
          {/*hide updates / hide comments > filter feed */}
          {/*{ comments ? {*/}
          {/*    comments*/}
          {/*} : "No updates yet" }*/}

          {/*'comment-list' is a shit name'*/}
          <ul className="comment-list">
            {/*ForEach comment: */}
            <li>
              {/*TODO: temp comment 'cards' or w/e*/}
              {/*maybe cool to make some 'text balloons' comments-list items,*/}
              {/*with comments from the right and updates from the left or*/}
              {/*something, so there is some distinction. Maybe also color differences*/}
              {/*and icons or something*/}
              <div className="comment">
                <Row colSize="column">
                  <span className="bold">Timothy commented: </span>
                  <span className="italic">Looks like 1 male, 3 females and babies</span>
                </Row>
                <Row colSize="column">
                  <small>11:45 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>

            <li>
              <div className="update">
                <Row colSize="column">
                  <span className="bold">Robin updated direction from </span>
                  <span className="line-through">{currentSighting!.direction}</span>
                  <span className="bold"> to </span>
                  {/*latest updated direction*/}
                  {/*New/latest direction must be reflected in details and sighting card*/}
                  <span>Roseneath</span>
                </Row>
                <Row colSize="column">
                  <small>11:43 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>

            <li>
              <div className="comment">
                <Row colSize="column">
                  <span className="bold">Laura commented: </span>
                  <span className="italic">Looks like they hunting are stingray</span>
                </Row>
                <Row colSize="column">
                  <small>10:53 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>

            <li>
              <div className="update">
                <Row colSize="column">
                  <span className="bold">Misha updated quantity from </span>
                  <span className="line-through">{currentSighting!.quantity}</span>
                  <span className="bold"> to </span>
                  {/*latest updated direction*/}
                  {/*New/latest direction must be reflected in details and sighting card*/}
                  <span>9</span>
                </Row>
                <Row colSize="column">
                  <small>10:03 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>

            <li>
              <div className="update">
                <Row colSize="column">
                  <span className="bold">Misha updated location from </span>
                  <span className="line-through">{currentSighting!.location}</span>
                  <span className="bold"> to </span>
                  {/*latest updated direction*/}
                  {/*New/latest direction must be reflected in details and sighting card*/}
                  <span>Evans Bay</span>
                </Row>
                <Row colSize="column">
                  <small>09:30 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>

            <li>
              <div className="update">
                <Row colSize="column">
                  <span className="bold">Tim added a photo </span>
                </Row>
                <Row colSize="column">
                  <small>09:23 PM, 13/12/2020</small>
                </Row>
              </div>
            </li>
          </ul>
        </Feed>
      </Content>

      <Content colSize="column">
        {/*TODO: request update functionality? Need to think about how that will work*/}
        <UtilBar className="compact-ub fixed-bottom full-vw align-right">
          <li>
            <button
              onClick={() => navigate(`/sighting/update/${id}`)}
              title="Update"
              className="btn-compact btn-primary"
            >
              Update
            </button>
          </li>
          <li>
            <ToggleButton type="button" action={reportPost} btnClass="icon-btn icon-only-btn" disabled={false}>
              {{
                enabled: (
                  <>
                    <img
                      src="/assets/icons/report.svg"
                      alt="Report sighting icon"
                      title="Reported sighting"
                      className="medium-icon"
                    />
                  </>
                ),
                disabled: (
                  <>
                    <img
                      src="/assets/icons/report.svg"
                      alt="Report sighting icon"
                      title="Report sighting"
                      className="medium-icon grayscale"
                    />
                  </>
                ),
              }}
            </ToggleButton>
          </li>
          <li>
            <ToggleButton type="button" action={savePost} btnClass="icon-btn icon-only-btn" disabled={false}>
              {{
                enabled: (
                  <>
                    <img
                      src="/assets/icons/heart.svg"
                      alt="Heart icon"
                      title="Added to saved sightings"
                      className="medium-icon"
                    />
                  </>
                ),
                disabled: (
                  <>
                    <img
                      src="/assets/icons/heart.svg"
                      alt="Heart icon"
                      title="Add to saved sightings"
                      className="medium-icon grayscale"
                    />
                  </>
                ),
              }}
            </ToggleButton>
          </li>
          <li>
            <ToggleButton type="button" action={followPost} btnClass="icon-btn icon-only-btn" disabled={false}>
              {{
                enabled: (
                  <>
                    <img
                      src="/assets/icons/bell.svg"
                      alt="Follow sighting icon"
                      title="Following sighting"
                      className="medium-icon"
                    />
                  </>
                ),
                disabled: (
                  <>
                    <img
                      src="/assets/icons/bell.svg"
                      alt="Follow sighting icon"
                      title="Follow sighting"
                      className="medium-icon grayscale"
                    />
                  </>
                ),
              }}
            </ToggleButton>
          </li>
          <li>
            <ToggleButton type="button" action={verifyPost} btnClass="icon-btn icon-only-btn" disabled={false}>
              {{
                enabled: (
                  <>
                    <img
                      src="/assets/icons/check.svg"
                      alt="Verify sighting icon"
                      title="Verified sighting"
                      className="medium-icon"
                    />
                  </>
                ),
                disabled: (
                  <>
                    <img
                      src="/assets/icons/check.svg"
                      alt="Verify sighting icon"
                      title="Verify sighting"
                      className="medium-icon grayscale"
                    />
                  </>
                ),
              }}
            </ToggleButton>
          </li>
        </UtilBar>
      </Content>
    </Section>
  );
};

export default SightingDetails;
