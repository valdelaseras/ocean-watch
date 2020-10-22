import React, { createContext, FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './app/components/decorator/nav/Nav';
import { auth } from './firebase';
import firebase from 'firebase';

interface AppState {
    loading: boolean;
    user: firebase.User | null;
}


const App: FC = () => {
    const [ appState, setAppState ] = useState<AppState>({
        loading: false,
        user: null,
    });

    useEffect(() => {
        auth.onAuthStateChanged( userAuth => setAppState({ user: userAuth, loading: false }))
    }, []);

  return (
    <div className="App">
      {/*<Nav />*/}
        <h1>{appState.user?.email}</h1>
      <Outlet />
    </div>
  );
};

export default App;
