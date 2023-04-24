let all_courses_raw = [
    {
        courseId: 'SSW 555',
        courseName: 'Agile Methods for Software Development',
        credits: 3,
        prerequisites: [],
        corequisites: [],
        courseDescription: 'In software problem areas that require exploratory development efforts, those with complex requirements and high levels of change, agile software development practices are highly effective when deployed in a collaborative, people-centered organizational culture. This course examines agile methods, including Extreme Programming (XP), Scrum, Lean, Crystal, Dynamic Systems Development Method and Feature-Driven Development to understand how rapid realization of software occurs most effectively. The ability of agile development teams to rapidly develop high quality, customer-valued software is examined and contrasted with teams following more traditional methodologies that emphasize planning and documentation. Students will learn agile development principles and techniques covering the entire software development process from problem conception through development, testing and deployment, and will be able to effectively participate in and manage agile software developments as a result of their successfully completing this course. Case studies and software development projects are used throughout.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 15, 30),
                    EndTime: new Date(2023, 0, 2, 18, 0),
                    Location: 'McLean 209',
                    Enrolled: 27,
                    Capacity: 29,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
                    Description: ''
                },
                {
                    Section: 'A-U',
                    StartTime: new Date(2023, 0, 2, 15, 30),
                    EndTime: new Date(2023, 0, 2, 18, 0),
                    Location: 'McLean 209',
                    Enrolled: 15,
                    Capacity: 15,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
                    Description: ''
                },
                {
                    Section: 'B',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'Burchard 102',
                    Enrolled: 25,
                    Capacity: 29,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=WE',
                    Description: ''
                },
                {
                    Section: 'B-U',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'Burchard 102',
                    Enrolled: 15,
                    Capacity: 15,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=WE',
                    Description: ''
                },
                {
                    Section: 'C',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'Burchard 111',
                    Enrolled: 10,
                    Capacity: 25,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
                    Description: ''
                },
                {
                    Section: 'C-U',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'Burchard 111',
                    Enrolled: 14,
                    Capacity: 14,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
                    Description: ''
                },
                {
                    Section: 'WS1',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 10,
                    Capacity: 10,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: '',
                    Description: ''
                },
                {
                    Section: 'WS1-U',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 35,
                    Capacity: 35,
                    Instructor: 'Zhongyuan (Annie) Yu',
                    RecurrenceRule: '',
                    Description: ''
                },
                {
                    Section: 'WS2',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 22,
                    Capacity: 39,
                    Instructor: '',
                    RecurrenceRule: '',
                    Description: ''
                },
                {
                    Section: 'WS3',
                    StartTime: new Date(1970, 0, 0, 0, 0),
                    EndTime: new Date(1970, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 35,
                    Capacity: 39,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: '',
                    Description: ''
                },
                {
                    Section: 'WS3-U',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 10,
                    Capacity: 10,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: '',
                    Description: ''
                }
            ]
    }
    ]

    // for each course and each section, add some of the course details to the description
    for (let course of all_courses_raw) {
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
export const summerI2023 = all_courses_raw;

