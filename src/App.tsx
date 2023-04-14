import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Agenda, Day, EventSettingsModel, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import React, { useState } from 'react';
import './App.css';
import { course_list } from './courses/all_courses';

export default function App() {
  // Variable that holds the selected course sections
  const [selected_sections, setSection] = useState([{
    Subject: "CH 117 A - General Chemistry Lab I",
    StartTime: new Date(2023, 0, 5, 11, 0),
    EndTime: new Date(2023, 0, 5, 14, 50),
    Location: 'X 204',
    Description: 'Instructor: Kim, Faith',
    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH'
  }]);

  // Selected course sections to be displayed by the schedule view
  var localData: EventSettingsModel = { dataSource: selected_sections };

  // Course Selection View:
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  let selected_courses_titles: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | JSX.Element[] | null | undefined = [];

  

  const selectCourseSection = (event: React.ChangeEvent<HTMLInputElement>) => {
    let courseId = event.target.name.substring(0, event.target.name.indexOf('-'))
    let section = event.target.name.substring(event.target.name.indexOf('-') + 1)
    let courseObject = selected_courses.find((c) => c.courseId === courseId)
    let sectionObject = courseObject?.sections.find((s: any) => s.Section === section)
    let dictionary = selection

    if (courseId in dictionary) {
      dictionary[courseId] = (event.target as HTMLInputElement).value
      setSelection(dictionary)
    }else{
      setSelection({ ...dictionary, [courseId]: (event.target as HTMLInputElement).value})
    }
    setSection([{
      Subject: courseObject.courseId + sectionObject.Section + " - " + courseObject.courseName,
      StartTime: sectionObject.StartTime,
      EndTime: sectionObject.EndTime,
      Location: sectionObject.Location,
      Description: sectionObject.Description,
      RecurrenceRule: sectionObject.RecurrenceRule
    }])
  }
  const [selection, setSelection] = useState({} as { [key: string]: string });
  const [selected_courses, set_selected_courses] = useState<any[]>([]);
  const [sec, set_sec] = useState<any[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: 50 }}>This is filler because of the free trial banner.</div>
          <div className="flex-container">
          <div style={{ height: '100vh', overflowY: 'scroll' }} className="flex-child-left">
            <div>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={course_list}
                disableCloseOnSelect
                onChange={(_event, value) => {
                  set_selected_courses(value);
                }}
                getOptionLabel={(option) => option.courseId + " - " + option.courseName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.courseId + " - " + option.courseName}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Course List" />
                )}
              />

              <Box>
                <Stack
                  spacing={2}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <div>
                    {selected_courses.map((e) => (
                      <Item key={e.courseId}>
                        
                          <FormLabel id={e.courseId}>{e.courseId} - {e.courseName}</FormLabel>

                        {e.sections.map((s: any) => (
                        
                            <RadioGroup
                              key={e.courseId + "-" + s.Section}
                              aria-labelledby={e.courseId + "-" + s.Section}
                              name={e.courseId + "-" + s.Section}
                              value={selection[e.courseId]}
                              onChange={selectCourseSection}
                            >
                              <FormControlLabel value={e.courseId + "-" + s.Section} control={<Radio />} label={s.Section + ' - ' + s.RecurrenceRule.substring(18) + ' ' + s.StartTime.toLocaleTimeString() + ' - ' + s.EndTime.toLocaleTimeString()} />
                            </RadioGroup>
                            // <Radio
                            //   checked={selection === 'a'}
                            //   onChange={selectCourseSection}
                            //   value={selection}
                            //   name={e.courseId + "-" + s.Section}
                            //   inputProps={{ 'aria-label': 'A' }}
                            // >
                            //   <FormControlLabel value={s.courseId + s.Section} control={<Radio />} label={s.Section + ' - ' + s.RecurrenceRule.substring(18) + ' ' + s.StartTime.toLocaleTimeString() + ' - ' + s.EndTime.toLocaleTimeString()} />
                            // </Radio>
                          ))}

                      </Item>
                    ))}
                  </div>
                </Stack>
              </Box>
            </div>
          </div>
          <div style={{ height: '100vh', overflowY: 'scroll' }} className="flex-child-right">
            <div className="App">
              <header className="App-header">
                <ScheduleComponent currentView='WorkWeek' selectedDate={new Date(2023, 0, 1)} eventSettings={localData}>
                  <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
              </header>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

