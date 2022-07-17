import React from 'react'

import CountersList from './components/countersList';
import Page from './components/page';
import Navbar from './components/menu';

const App = () => {
    return (
    <div className="App">
      <CountersList />
        <Page />
    </div>
    )
}

export default App;



