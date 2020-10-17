import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from "./app/components/decorator/nav/Nav";

const App: FC = () => {
  return (
    <div className="App">
        <Nav/>
        <Outlet />
    </div>
  );
};

export default App;
