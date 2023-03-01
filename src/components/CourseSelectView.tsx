import * as React from 'react';
import { course_list } from '../courses/all_courses';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


let data = [];
export default function CourseSelectView() {
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={course_list}
            disableCloseOnSelect
            onChange={(_event, value) => {
                data = value
                console.log(data)
            }}
            getOptionLabel={(option) => option.Subject}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.Subject}
                </li>

            )}

            renderInput={(params) => (
                <TextField {...params} label="Course List" />
            )}
        />
    );
}