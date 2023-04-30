# Stevens Workday Scheduler
The Stevens Workday Scheduler is a tool designed to assist students and faculty at Stevens with planning their course schedules. It modernizes the concept behind the original SIT Scheduler that has been decomissioned after the university's switch to Workday for course registration.

Features include:
- Semester Selection
- Quick search for all courses being offered in that semester
- Select multiple sections to easily eliminate conflicting times
- View all the information about a course, including the meeting pattern, location, instructor, credits, pre/corequisites, and enrollment capacity

![Workday Scheduler](https://user-images.githubusercontent.com/42685071/235377375-7baec615-e541-49d6-adf2-5ab4bb480753.png)

## Build Instructions
1. Clone this repository: `git clone https://github.com/Tyler-Seliber/workday-scheduler.git`
2. Install Node dependencies: `npm install`
3. Start the webserver: `npm start`

The website will be available at localhost:3000 by default.

## Adding courses and sections
Courses are added in a dictionary format for their respective semesters. In the `src/courses` folder are .ts files that contain the available courses for different semesters/terms. The files follow the naming scheme `2023_Fall.ts`

Courses must be added to the `all_courses_raw` variable in the following format:
```ts
{
        courseId: 'SSW 423',
        courseName: 'Engineering Design VII',
        credits: 3,
        prerequisites: ['SSW 322 - Engineering Design VI'],
        corequisites: ['IDE 401 - Senior Innovation-II:Value Proposition'],
        courseDescription: 'This is the first course of a year long, two-course sequence which involves the students in a small-team Software Engineering project. The problem for the project is taken from industry, business, government or a not-for-profit organization. Each student team works with a client and is expected to collect data, analyze it and develop a design by the end of the first semester. In the second semester the design solution of the problem is completed and a written report is submitted for binding. During the year, oral and written progress reports are presented to peers, faculty and clients. The total project involves the application of the subject areas covered in the SSW 322 Software Design Evolution course, as well as skills learned in the other technical and non-technical courses of the Software Engineering curriculum.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 14, 30),
                    EndTime: new Date(2023, 0, 2, 16, 20),
                    Location: 'McLean 106',
                    Enrolled: 18,
                    Capacity: 30,
                    Instructor: 'David Darian Muresan',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                    Description: ''
                }
            ]
    }
```

__Notes__
- If there are no pre or corequisites, those fields can be left as empty arrays `[]`
- The `StartTime` and `EndTime` in each course section must have `2023`, `0`, and `2` as the first three arguments. This will ensure the courses show up correctly in the schedule view. The fourth and fifths arguments are the hour and minutes for the times.
  - The only exception is for web sections, which must have both the start and end times as `new Date(2023, 0, 0, 0, 0)`
- The  `Instructor` can be left as an empty string `''` if there is none assigned
- The `RecurrenceRule` must start with `FREQ=WEEKLY;BYDAY=` as this allows sections to be repeated on multiple days of the week. The day codes are as follows:
  - MO = Monday
  - TU = Tuesday
  - WE = Wednesday
  - TH = Thursday
  - FR = Friday
  - SA = Saturday
  - SU = Sunday
