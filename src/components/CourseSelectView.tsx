import * as React from 'react';
import { course_list } from '../courses/all_courses';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
// function renderElements(keys) {
//     const components = {
//       componentA: ComponentA,
//       componentB: ComponentB,
//       componentC: ComponentC,
//     };

// const componentsToRender = keys.map(key => components[key]);
export default function CourseSelectView() {
    const [selection, setSelection] = useState('A 101 - Intro to Class');

    // const [course, setCourse] = useState('A 101 - Intro to Class');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelection((event.target as HTMLInputElement).value);
    };



    // function addToStack(course: { courseId: string; courseName: string; sections: { a: { StartTime: Date; EndTime: Date; Location: string; Description: string; RecurrenceRule: string; }; b: { StartTime: Date; EndTime: Date; Location: string; Description: string; RecurrenceRule: string; }; c: { StartTime: Date; EndTime: Date; Location: string; Description: string; RecurrenceRule: string; }; }; }[]) {
    //     selected_courses_titles = selected_courses.map((course) => <Item key={course.courseId}>{course.courseId + " - " + course.courseName}</Item>)
    // }
    // let selected_courses: any[] = [];
    const [selected_courses, set_selected_courses] = useState<any[]>([]);
    const [sec, set_sec] = useState<any[]>([]);
    // Generate string of checked items
    // var checkedItems = selected_courses.length
    //     ? selected_courses.reduce((total, item) => {
    //         return total + ", " + item;
    //     })
    //     : "";

    const result = (
        <div>
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={course_list}
                disableCloseOnSelect
                onChange={(_event, value) => {
                    // selected_courses = value
                    set_selected_courses(value);
                    // setTimeout(() => { console.log("World!"); }, 5000);
                    // console.log(selected_courses)
                    // addToStack(value)
                    // console.log(selected_courses_titles)
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
                        {selected_courses.map((e)=> (
                            <Item>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">{e.courseId} - {e.courseName}</FormLabel>
                                    
                                        {e.sections.map((s: any)=> (
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={selection}
                                                onChange={handleChange}
                                            >
                                            <FormControlLabel value={e.courseId + s.Section} control={<Radio />} label={s.Section} />
                                            </RadioGroup>
                                        ))}
                                        
                                    
                                </FormControl>
                            </Item>
                        ))}
                        
                    </div>
                
                </Stack>
            </Box>

        </div>
    );
return result
    
}