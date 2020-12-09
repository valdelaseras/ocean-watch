import React, { FC } from 'react';
import Section from '../../layout/section/Section';
import Content from '../../layout/content/Content';

const Hotlines: FC = () => (
  <Section id="about" title="Emergency hotlines" themeClass="theme-tertiary">
    <Content colSize="column">
      <p>What to do if you find a dead bird, beached whale, or other native animals that might need help.</p>

      <h3>Who to contact</h3>
      <p>
        Ring these phone numbers and DOC or MPI will tell you what to do next. If you don't know if an animal is native,
        still call either DOC or MPI.
      </p>

      <h3>For 1 or 2 sick, injured or dead animals</h3>
      <p>
        Ring the DOC emergency hotline <span className="bold">0800 DOC HOT (0800 362 468)</span>.
      </p>

      <h3>For whale or dolphin strandings</h3>
      <p>
        Ring the DOC emergency hotline <span className="bold">0800 DOC HOT (0800 362 468)</span>.
      </p>

      <h3>For a group of 3 or more sick, injured or dead animals</h3>
      <p>
        Ring the Ministry for Primary Industries (MPI) pest and disease hotline on{' '}
        <span className="bold">0800 80 99 66</span>.
      </p>
    </Content>
  </Section>
);

export default Hotlines;
