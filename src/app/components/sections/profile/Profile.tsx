import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Profile: FC = () => (
  <Section id="profile" title="Username" themeClass="theme-tertiary">
    <Content colSize="column">
      <img src="/assets/images/dolphin.png" alt="user" title="user" className="user-image" />
      <ul className="btn-group horizontal">
        <li>
          <button className="btn btn-primary btn-compact" type="button">
            Change image
          </button>
        </li>
        <li>
          <button className="btn btn-primary btn-compact" type="button">
            Delete image
          </button>
        </li>
      </ul>
    </Content>
  </Section>
);

export default Profile;
