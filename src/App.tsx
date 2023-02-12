import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { appointments } from './courses/selected_courses';

function App() {
  var localData: EventSettingsModel = { dataSource: appointments };

  return (
    <div className="App">
      <header className="App-header">
        <ScheduleComponent currentView='WorkWeek' selectedDate={new Date(2023, 0, 1)} eventSettings={localData}>
          <Inject services={[Week, WorkWeek, Agenda]} />
        </ScheduleComponent>
      </header>
    </div>
  );
}

export default App;
