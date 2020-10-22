import React, { FC } from 'react';

export interface UserDetailsProps {
  id: string;
  imgSrc?: string;
  username: string;
  email: string;
  rank: string;
  sightings: string;
  region: string;
  biomes: string;
  notifications: string;
  givenVerifications: string;
  receivedVerifications: string;
}

const UserDetails: FC<UserDetailsProps> = ({
  id,
  imgSrc,
  username,
  email,
  rank,
  sightings,
  region,
  biomes,
  notifications,
  givenVerifications,
  receivedVerifications,
}) => (
  <div className="user-overview">
    <div className="column">
      <div className="user-image flex-center">
        <img src={imgSrc} alt="user" title="user" />
        <ul className="btn-group horizontal">
          <li>
            <button className="btn btn-primary btn-compact" type="button">
              Change
            </button>
          </li>
          <li>
            <button className="btn btn-primary btn-compact" type="button">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="column">
      <div className="user-information theme-quaternary">
        <div className="content">
          <table>
            <tbody>
              <tr>
                <th>
                  <h2>{username}</h2>
                </th>
              </tr>
              <tr>
                <th>Email</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Rank</th>
                <td>
                  {/*TODO: image must be loaded automatically based on user rank*/}
                  <img src="/assets/icons/starfish.svg" alt={rank} title="user ranking icon" className="medium-icon" />
                  {rank}
                </td>
              </tr>
              <tr>
                <th>Sightings</th>
                <td>{sightings}</td>
              </tr>
              <tr>
                <th>Verifications given</th>
                <td>{givenVerifications}</td>
              </tr>
              <tr>
                <th>Verifications received</th>
                <td>{receivedVerifications}</td>
              </tr>
              <tr>
                <th>Region</th>
                <td>{region}</td>
              </tr>
              <tr>
                <th>Biomes</th>
                <td>{biomes}</td>
              </tr>
              <tr>
                <th>Notifications</th>
                <td>{notifications}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default UserDetails;
