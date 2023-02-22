import '../App.css';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { appointments } from '../courses/selected_courses';

function ScheduleView() {
    var localData: EventSettingsModel = { dataSource: appointments };

    return (
        <div className="App">
            <header className="App-header">
                <ScheduleComponent currentView='WorkWeek' selectedDate={new Date(2023, 0, 1)} eventSettings={localData}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </header>
        </div>
    );
}

export default ScheduleView;
