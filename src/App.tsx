import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { fall2023 } from "./courses/2023_Fall";
import { summerI2023 } from "./courses/2023_Summer_I";
import {
  Agenda,
  Day,
  EventSettingsModel,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // Variable that holds the selected course sections
  const [selection, setSelection] = useState(
    {} as {
      [key: string]: {
        Subject: string;
        StartTime: Date;
        EndTime: Date;
        Location: string;
        Description: string;
        RecurrenceRule: string;
      };
    }
  );
  const [selected_courses, set_selected_courses] = useState([] as any[]);
  const [checked, setChecked] = useState(
    {} as { [key: string]: boolean }
  );
  // Selected course sections to be displayed by the schedule view
  const [localData, setLocalData] = useState<EventSettingsModel>(
    {} as EventSettingsModel
  );

  // Course Selection View:
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [courseSelectDisabled, setCourseSelectDisabled] = useState(true);
  const [coursesForSemester, setCoursesForSemester] = useState([] as any[]);
  const [selectedCourseChips, setSelectedCourseChips] = useState([] as any[]);

  useEffect(() => {
    setLocalData({ dataSource: Object.values(selection) });
  }, [checked,selection]);

  const selectCourseSection = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    let courseId = event.target.id.substring(0,event.target.id.indexOf("-"));
    let section = event.target.id.substring(
      event.target.id.indexOf("-") + 1
    );
    let courseObject = selected_courses.find((c) => c.courseId === courseId);
    let sectionObject = courseObject?.sections.find(
      (s: any) => s.Section === section
    );
    let cDict = checked;
    if (event.target.id in cDict) {
      cDict[event.target.id] = event.target.checked;
      setChecked(cDict);
    } else {
      setChecked({ ...cDict, [event.target.id]: event.target.checked });
    }
    
    let dictionary = selection;
    if (event.target.checked === true) {
      if (event.target.id in dictionary === false) {
        dictionary[courseObject.courseId +
          " - " +
          sectionObject.Section +
          " - " +
          courseObject.courseName] = {
          Subject:
            courseObject.courseId +
            " - " +
            sectionObject.Section +
            " - " +
            courseObject.courseName,
          StartTime: sectionObject.StartTime,
          EndTime: sectionObject.EndTime,
          Location: sectionObject.Location,
          Description: sectionObject.Description,
          RecurrenceRule: sectionObject.RecurrenceRule,
        };
        setSelection(dictionary);
      } 
      
    } else if (event.target.checked === false){
      if (courseObject.courseId +
          " - " +
          sectionObject.Section +
          " - " +
          courseObject.courseName in dictionary === true) {
        delete dictionary[courseObject.courseId +
          " - " +
          sectionObject.Section +
          " - " +
          courseObject.courseName];
        setSelection(dictionary);
      }
    }

    setLocalData({ dataSource: Object.values(selection) });
  };

  const semesters = ['2023 Summer I', '2023 Fall']

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: 50 }}>
          This is filler because of the free trial banner.
        </div>
        <div className="flex-container">
          <div
            style={{ height: "100vh", overflowY: "scroll" }}
            className="flex-child-left"
          >
            <Autocomplete
              id="semester_selection"
              options={semesters}
              renderInput={(params) => <TextField {...params} label="Semester" />}
              onChange={(_event, value) => {
                // Clear the selected courses and the schedule view
                set_selected_courses([]);
                setLocalData({ dataSource: [] })
                setSelection({});
                setSelectedCourseChips([]);
                setCourseSelectDisabled(false)
                if (value == null) {
                  setCourseSelectDisabled(true)
                }
                else if (value == '2023 Fall') {
                  setCoursesForSemester(fall2023)
                }
                else if (value == '2023 Summer I') {
                  setCoursesForSemester(summerI2023)
                }
              }}
            />
            <div>
              <Autocomplete
                multiple
                disabled={courseSelectDisabled}
                id="course_selection"
                value={selectedCourseChips}
                options={coursesForSemester}
                disableCloseOnSelect
                onChange={(_event, value) => {
                  setSelectedCourseChips(value);
                  set_selected_courses(value);
                  let te = selected_courses
                  console.log(te)
                  console.log("_______________________________________________________")
                  console.log(value)

                  let temp3 = Object.values(selection);
                 
                  temp3.forEach((e: any) => {
                    let num = e["Subject"].indexOf(" - ")
                    let first = e["Subject"].substring(0, num);
                    let second = e["Subject"].substring(num+3, e["Subject"].indexOf(" - ", num+1));
                    let s = first + "-" + second;
            
                    let tf = false;
                      
                    value.forEach((f: any) => {
                      if (f.courseId === first) {
                        tf = true;
                        return;
                      }
                    });

                    if (tf === false) {
                      let temp2 = selection;
                
                      let tempCheck = checked;
                      tempCheck[s] = false;
               
                      delete temp2[e["Subject"]];
                      setChecked(tempCheck);
                      setSelection(temp2);
                    }
                  });

                  

                  setLocalData({ dataSource: Object.values(selection) });
                }}
                getOptionLabel={(option) =>option.courseId + " - " + option.courseName}
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

              <Box sx={{ gap: 2 }}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <div>
                    {selected_courses.map((e) => (
                      <Item key={e.courseId}>
                        <FormLabel id={e.courseId}>
                          {e.courseId} - {e.courseName} ({e.credits} Credits)
                        </FormLabel>
                        { e.sections.map((s: any) => (
                          <div>
                            <FormControlLabel
                              key={e.courseId + "-" + s.Section}
                              value={e.courseId + "-" + s.Section}
                              control={<Checkbox
                                key={e.courseId + "-" + s.Section}
                                id={e.courseId + "-" + s.Section}
                                value={e.courseId + "-" + s.Section}
                                checked={checked[e.courseId+ "-" + s.Section]}
                                onChange={selectCourseSection}
                              />}
                              label={s.Section +
                                (s.StartTime.valueOf() != s.EndTime.valueOf() ? " | " +
                                  s.RecurrenceRule.substring(18) +
                                  " " +
                                  s.StartTime.toLocaleTimeString() +
                                  " - " +
                                  s.EndTime.toLocaleTimeString() : "") +
                                " | Enrolled: " +
                                s.Enrolled + "/" + s.Capacity
                                }
                           />
                          </div>
                        ))
                        }
                      </Item>
                    ))}
                  </div>
                </Stack>
              </Box>
            </div>
          </div>
          <div
            style={{ height: "100vh", overflowY: "scroll" }}
            className="flex-child-right"
          >
            <div className="App">
              <header className="App-header">
                <ScheduleComponent
                  currentView="WorkWeek"
                  selectedDate={new Date(2023, 0, 1)}
                  eventSettings={localData}
                  readonly={true}
                >
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
