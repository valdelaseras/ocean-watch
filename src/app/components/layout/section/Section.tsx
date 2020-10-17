import React, { FC } from 'react';
import Row from '../../layout/row/Row';
import Content from '../../layout/content/Content';

interface SectionProps {
  id: string;
  title?: string;
  titleClass?: string;
}

const Section: FC<SectionProps> = ({ id, title, titleClass, children }) =>
    <section className="section">
      <div className="section-content">
        <div className="grid">
          <div id={id}>
            <Row colSize={'column'}>
              <Content colSize={'column'}>
                <h1 className={titleClass}>{title}</h1>
              </Content>
            </Row>

            {children}
          </div>
        </div>
      </div>
    </section>;

export default Section;
