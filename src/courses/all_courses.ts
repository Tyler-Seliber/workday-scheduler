export type CourseType = {
    courseId: string,
    courseName: string,
    sections: Array<SectionType>
}
export type SectionType = {
    Section: string,
    StartTime: Date,
    EndTime: Date,
    Location: string,
    Description: string,
    RecurrenceRule: string
}
export const course_list = [
    {
        courseId: "CH 117",
        courseName: "General Chemistry Lab I",
        sections:
            [{
                Section: "A",
                StartTime: new Date(2023, 0, 5, 11, 0),
                EndTime: new Date(2023, 0, 5, 14, 50),
                Location: 'X 204',
                Description: 'Instructor: Kim, Faith',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH'
            },
            {
                Section: "B",
                StartTime: new Date(2023, 0, 2, 11, 0),
                EndTime: new Date(2023, 0, 2, 14, 50),
                Location: 'X 204',
                Description: 'Instructor: Kim, Faith',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO'
            },
            {
                Section: "C",
                StartTime: new Date(2023, 0, 6, 11, 0),
                EndTime: new Date(2023, 0, 6, 14, 50),
                Location: 'X 204',
                Description: 'Instructor: Kim, Faith',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=FR'
            }]

    },
    {
        courseId: "CS 115",
        courseName: "Intro to Computer Science",
        sections:
            [{
                Section: "A",
                StartTime: new Date(2023, 0, 2, 9, 0),
                EndTime: new Date(2023, 0, 2, 9, 50),
                Location: 'BC 104',
                Description: 'Instructor: Nicolosi, Antonio',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR'
            },
            {
                Section: "B",
                StartTime: new Date(2023, 0, 2, 13, 0),
                EndTime: new Date(2023, 0, 2, 13, 50),
                Location: 'K 228',
                Description: 'Instructor: Nicolosi, Antonio',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR'
            },
            {
                Section: "C",
                StartTime: new Date(2023, 0, 2, 11, 0),
                EndTime: new Date(2023, 0, 2, 11, 50),
                Location: 'GS 122',
                Description: 'Instructor: Nicolosi, Antonio',
                RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR'
            }]
    }

]