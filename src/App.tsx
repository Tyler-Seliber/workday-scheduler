import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './styles.css';
import ScheduleView from './components/ScheduleView';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <div className="flex-child-left">
            Flex Column 1
          </div>
          <div className="flex-child-right">
            <ScheduleView />
          </div> 
        </div>
      </header>
    </div>
  );
}

