import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

export default App;
