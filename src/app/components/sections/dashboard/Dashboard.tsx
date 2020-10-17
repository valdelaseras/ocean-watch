import React, { FC } from 'react';
import Button from '../../atomic/atoms/button/Button';
import Checkbox from '../../atomic/atoms/checkbox/Checkbox';

const Dashboard: FC = () => {
  return (
    <>
      <h1>Dash</h1>
      <Button title="hereferwnkff" btnClass="test" type="button" disabled={true} />
      <Checkbox id="vl" title="erhjhsfkjw" required={false} name="bee" checked={false} />
    </>
  );
};

export default Dashboard;
