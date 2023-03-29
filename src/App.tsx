import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScheduleView from './components/ScheduleView';
import CourseSelectView from './components/CourseSelectView';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height:50}}>This is filler because of the free trial banner.</div>
        <div className="flex-container">
          <div style={{ height: '100vh', overflowY: 'scroll' }} className="flex-child-left">
            <CourseSelectView />
          </div>
          <div style={{ height: '100vh', overflowY: 'scroll' }} className="flex-child-right">
            <ScheduleView />
          </div> 
        </div>
      </header>
    </div>
  );
}

