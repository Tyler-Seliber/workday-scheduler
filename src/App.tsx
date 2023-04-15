import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
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
import { course_list } from "./all_courses";
import { CheckBox } from "@mui/icons-material";

export default function App() {
  // Variable that holds the selected course sections

  const [result, setResult] = useState([] as any[]);
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
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  let selected_courses_titles:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | JSX.Element[]
    | null
    | undefined = [];

  useEffect(() => {
    setLocalData({ dataSource: Object.values(selection) });
  }, [checked,selection]);

 

  const selectCourseSection = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      if (event.target.id in selection === false) {
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
      
    } else {
      if (event.target.id in selection === true) {
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
            <div>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={course_list}
                disableCloseOnSelect
                onChange={(_event, value) => {
                  set_selected_courses(value);

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
                getOptionLabel={(option) =>
                  option.courseId + " - " + option.courseName
                }
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
                        <FormLabel id={e.courseId}>
                          {e.courseId} - {e.courseName}
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
                                " - " +
                                s.RecurrenceRule.substring(18) +
                                " " +
                                s.StartTime.toLocaleTimeString() +
                                " - " +
                                s.EndTime.toLocaleTimeString()}
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
