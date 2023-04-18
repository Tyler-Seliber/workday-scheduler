
let course_list = [
        {
            courseId: 'MA 121',
            courseName: 'Differential Calculus',
            credits: 2,
            prerequisites: [],
            corequisites: [],
            courseDescription: 'Limits and derivatives of functions of one variable including the trigonometric, inverse trigonometric, logarithmic and exponential functions; differentiation rules, implicit differentiation, geometric and physical interpretations of the derivative, applications of the derivative including optimization and sketching graphs of one variable functions.',
            sections:
                [
                    {
                        Section: 'A (First Half)',
                        StartTime: new Date(2023, 0, 2, 9, 0),
                        EndTime: new Date(2023, 0, 2, 9, 50),
                        Location: 'Babbio 122',
                        Enrolled: 2,
                        Capacity: 90,
                        Instructor: 'Paul Schwartz',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'AA (Second Half)',
                        StartTime: new Date(2023, 0, 2, 9, 0),
                        EndTime: new Date(2023, 0, 2, 9, 50),
                        Location: 'Howe 102',
                        Enrolled: 0,
                        Capacity: 40,
                        Instructor: 'Jan Cannizzo',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'B (First Half)',
                        StartTime: new Date(2023, 0, 2, 10, 0),
                        EndTime: new Date(2023, 0, 2, 10, 50),
                        Location: 'Gateway South 122',
                        Enrolled: 0,
                        Capacity: 90,
                        Instructor: '',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'BB (Second Half)',
                        StartTime: new Date(2023, 0, 2, 10, 0),
                        EndTime: new Date(2023, 0, 2, 10, 50),
                        Location: 'Martha Bayard Stevens Hall 104',
                        Enrolled: 0,
                        Capacity: 40,
                        Instructor: 'Jan Cannizzo',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'C (First Half)',
                        StartTime: new Date(2023, 0, 2, 10, 0),
                        EndTime: new Date(2023, 0, 2, 10, 50),
                        Location: 'Carnegie 316',
                        Enrolled: 0,
                        Capacity: 49,
                        Instructor: '',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'CC (Second Half)',
                        StartTime: new Date(2023, 0, 2, 12, 0),
                        EndTime: new Date(2023, 0, 2, 12, 50),
                        Location: 'Martha Bayard Stevens Hall 104',
                        Enrolled: 0,
                        Capacity: 40,
                        Instructor: 'Jan Cannizzo',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'D (First Half)',
                        StartTime: new Date(2023, 0, 2, 12, 0),
                        EndTime: new Date(2023, 0, 2, 12, 50),
                        Location: 'Martha Bayard Stevens Hall 104',
                        Enrolled: 0,
                        Capacity: 49,
                        Instructor: 'Paul Schwartz',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'E (First Half)',
                        StartTime: new Date(2023, 0, 2, 12, 0),
                        EndTime: new Date(2023, 0, 2, 12, 50),
                        Location: 'Peirce 116',
                        Enrolled: 0,
                        Capacity: 49,
                        Instructor: '',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'F (First Half)',
                        StartTime: new Date(2023, 0, 2, 13, 0),
                        EndTime: new Date(2023, 0, 2, 13, 50),
                        Location: 'Peirce 116',
                        Enrolled: 0,
                        Capacity: 49,
                        Instructor: 'Denis Serbin',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'G (First Half)',
                        StartTime: new Date(2023, 0, 2, 14, 0),
                        EndTime: new Date(2023, 0, 2, 14, 50),
                        Location: 'Burchard 111',
                        Enrolled: 0,
                        Capacity: 70,
                        Instructor: 'Denis Serbin',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                        Description: ''
                    },
                    {
                        Section: 'QUIZMA121 (First Half)',
                        StartTime: new Date(2023, 0, 2, 17, 0),
                        EndTime: new Date(2023, 0, 2, 18, 0),
                        Location: 'None',
                        Enrolled: 4,
                        Capacity: 999,
                        Instructor: '',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
                        Description: ''
                    },
                    {
                        Section: 'QUIZMA121 (Second Half)',
                        StartTime: new Date(2023, 0, 2, 17, 0),
                        EndTime: new Date(2023, 0, 2, 18, 0),
                        Location: 'None',
                        Enrolled: 1,
                        Capacity: 999,
                        Instructor: '',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
                        Description: ''
                    },
                    {
                        Section: 'RA (First Half)',
                        StartTime: new Date(2023, 0, 2, 8, 0),
                        EndTime: new Date(2023, 0, 2, 8, 50),
                        Location: 'Babbio 321',
                        Enrolled: 1,
                        Capacity: 25,
                        Instructor: 'Jinghao Wang',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RAA (Second Half)',
                        StartTime: new Date(2023, 0, 2, 9, 30),
                        EndTime: new Date(2023, 0, 2, 10, 20),
                        Location: 'Babbio 220',
                        Enrolled: 1,
                        Capacity: 30,
                        Instructor: 'Marc Sokol',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RB (First Half)',
                        StartTime: new Date(2023, 0, 2, 9, 30),
                        EndTime: new Date(2023, 0, 2, 10, 20),
                        Location: 'Burchard 514',
                        Enrolled: 1,
                        Capacity: 25,
                        Instructor: 'Mengyang Cao',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RBB (Second Half)',
                        StartTime: new Date(2023, 0, 2, 11, 0),
                        EndTime: new Date(2023, 0, 2, 11, 50),
                        Location: 'Babbio 220',
                        Enrolled: 0,
                        Capacity: 30,
                        Instructor: 'Marc Sokol',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RC (First Half)',
                        StartTime: new Date(2023, 0, 2, 9, 30),
                        EndTime: new Date(2023, 0, 2, 10, 20),
                        Location: 'Edwin A. Stevens 229',
                        Enrolled: 0,
                        Capacity: 25,
                        Instructor: 'Yu Huang',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RCC (Second Half)',
                        StartTime: new Date(2023, 0, 2, 12, 30),
                        EndTime: new Date(2023, 0, 2, 13, 20),
                        Location: 'Babbio 219',
                        Enrolled: 0,
                        Capacity: 30,
                        Instructor: 'Marc Sokol',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                    {
                        Section: 'RD (First Half)',
                        StartTime: new Date(2023, 0, 2, 11, 0),
                        EndTime: new Date(2023, 0, 2, 11, 50),
                        Location: 'Burchard 514',
                        Enrolled: 1,
                        Capacity: 25,
                        Instructor: 'Zhiyu Yin',
                        RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                        Description: ''
                    },
                ]
        }
    ]

    // for each course and each section, add some of the course details to the description
    for (let course of course_list) {
        for (let section of course.sections) {
            var instruct = section.Instructor
            if (instruct.length === 0) {
                instruct = 'None Assigned'
            }
            var prereqs = course.prerequisites.toString()
            if (prereqs.length === 0) {
                prereqs = 'None'
            }
            var coreqs = course.corequisites.toString()
            if (coreqs.length === 0) {
                coreqs = 'None'
            }
            section.Description = 'Instructor: ' + instruct + '\n' + 'Enrolled: ' + section.Enrolled + '/' + section.Capacity + '\n' + 'Credits: ' + course.credits + '\n' + 'Prerequisites: ' + prereqs + '\n' + 'Corequisites: ' + coreqs
        }
    }
export const tempxxx = course_list;

