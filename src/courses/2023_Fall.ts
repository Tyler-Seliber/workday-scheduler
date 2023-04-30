let all_courses_raw = [
    {
        courseId: 'CH 115',
        courseName: 'General Chemistry I',
        credits: 3,
        prerequisites: [],
        corequisites: ['CH 117 - General Chemistry Lab I'],
        courseDescription: 'This course is an introduction to important concepts and principles of chemistry with a focus on the following topics: atomic structure and periodic properties, stoichiometry, properties of gases, thermochemistry, chemical bond types, intermolecular forces, liquids and solids and a brief introduction to chemical kinetics, organic chemistry and materials chemistry.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 8, 0),
                    EndTime: new Date(2023, 0, 2, 8, 50),
                    Location: 'Burchard 111',
                    Enrolled: 1,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'C',
                    StartTime: new Date(2023, 0, 2, 9, 0),
                    EndTime: new Date(2023, 0, 2, 9, 50),
                    Location: 'Burchard 103',
                    Enrolled: 1,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'G',
                    StartTime: new Date(2023, 0, 2, 11, 0),
                    EndTime: new Date(2023, 0, 2, 11, 50),
                    Location: 'Peirce 116',
                    Enrolled: 4,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'H',
                    StartTime: new Date(2023, 0, 2, 12, 0),
                    EndTime: new Date(2023, 0, 2, 12, 50),
                    Location: 'Kidde 360',
                    Enrolled: 2,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'K',
                    StartTime: new Date(2023, 0, 2, 14, 0),
                    EndTime: new Date(2023, 0, 2, 14, 50),
                    Location: 'Edwin A. Stevens 330',
                    Enrolled: 2,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'S',
                    StartTime: new Date(2023, 0, 2, 12, 0),
                    EndTime: new Date(2023, 0, 2, 12, 50),
                    Location: 'McLean 104',
                    Enrolled: 0,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'QUIZCH115',
                    StartTime: new Date(2023, 0, 2, 8, 0),
                    EndTime: new Date(2023, 0, 2, 8, 50),
                    Location: 'Burchard 111',
                    Enrolled: 1,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                }
            ]
    },
    {
        courseId: 'CH 117',
        courseName: 'General Chemistry Lab I',
        credits: 1,
        prerequisites: ['CH 115 - General Chemistry I'],
        corequisites: ['CH 115 - General Chemistry I'],
        courseDescription: 'Laboratory work to accompany CH107/CH109 or CH115 includes experiments on atomic spectra; analytical techniques; stoichiometric analysis; gases; kinetics; equilibrium; acid-base titrations; oxidation-reduction reactions; electrochemical cells; qualitative analysis; and organic and inorganic syntheses.',
        sections:
            [
                {
                    Section: 'A-C',
                    StartTime: new Date(2023, 0, 2, 11, 0),
                    EndTime: new Date(2023, 0, 2, 13, 50),
                    Location: 'McLean 203',
                    Enrolled: 1,
                    Capacity: 19,
                    Instructor: 'Faith Kim',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
                    Description: ''
                },
                {
                    Section: 'B-C',
                    StartTime: new Date(2023, 0, 2, 14, 0),
                    EndTime: new Date(2023, 0, 2, 16, 50),
                    Location: 'McLean 203',
                    Enrolled: 3,
                    Capacity: 19,
                    Instructor: 'Faith Kim',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
                    Description: ''
                },
                {
                    Section: 'D-N',
                    StartTime: new Date(2023, 0, 2, 14, 0),
                    EndTime: new Date(2023, 0, 2, 16, 50),
                    Location: 'McLean 203',
                    Enrolled: 8,
                    Capacity: 19,
                    Instructor: 'Faith Kim',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TH',
                    Description: ''
                },
            ]
    },
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
    },
    {
        courseId: 'MA 221',
        courseName: 'Differential Equations',
        credits: 4,
        prerequisites: ['MA 124 - Calculus of Two Variables -OR- MA 126 - Multivariable Calculus I'],
        corequisites: [],
        courseDescription: 'Ordinary differential equations of first and second order, homogeneous and non-homogeneous equations; improper integrals, Laplace transforms; review of infinite series, series solutions of ordinary differential equations near an ordinary point; boundary-value problems; orthogonal functions; Fourier series; separation of variables for partial differential equations.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 8, 0),
                    EndTime: new Date(2023, 0, 2, 8, 50),
                    Location: 'Gateway South 122',
                    Enrolled: 15,
                    Capacity: 49,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'B',
                    StartTime: new Date(2023, 0, 2, 9, 0),
                    EndTime: new Date(2023, 0, 2, 9, 50),
                    Location: 'Gateway South 122',
                    Enrolled: 77,
                    Capacity: 95,
                    Instructor: '',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'C',
                    StartTime: new Date(2023, 0, 2, 10, 0),
                    EndTime: new Date(2023, 0, 2, 10, 50),
                    Location: 'Edwin A. Stevens 222',
                    Enrolled: 90,
                    Capacity: 95,
                    Instructor: 'Yi Li',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'D',
                    StartTime: new Date(2023, 0, 2, 12, 0),
                    EndTime: new Date(2023, 0, 2, 12, 50),
                    Location: 'Gateway South 122',
                    Enrolled: 94,
                    Capacity: 95,
                    Instructor: 'Pavel Dubovskiy',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE,FR',
                    Description: ''
                },
                {
                    Section: 'RA',
                    StartTime: new Date(2023, 0, 2, 8, 0),
                    EndTime: new Date(2023, 0, 2, 9, 15),
                    Location: 'Babbio 210',
                    Enrolled: 26,
                    Capacity: 30,
                    Instructor: 'Marissa Whitby',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                },
                {
                    Section: 'RB',
                    StartTime: new Date(2023, 0, 2, 8, 0),
                    EndTime: new Date(2023, 0, 2, 9, 15),
                    Location: 'Gateway South 021',
                    Enrolled: 13,
                    Capacity: 30,
                    Instructor: 'Aray Almen',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                },
                {
                    Section: 'RC',
                    StartTime: new Date(2023, 0, 2, 9, 30),
                    EndTime: new Date(2023, 0, 2, 10, 45),
                    Location: 'Edwin A. Stevens 329',
                    Enrolled: 17,
                    Capacity: 30,
                    Instructor: 'Jiajie Lu',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                },
                {
                    Section: 'RM',
                    StartTime: new Date(2023, 0, 2, 14, 0),
                    EndTime: new Date(2023, 0, 2, 15, 15),
                    Location: 'Babbio 221',
                    Enrolled: 30,
                    Capacity: 30,
                    Instructor: 'Marissa Whitby',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                }
            ]
    },
    {
        courseId: 'SSW 215',
        courseName: 'Individual Software Engineering',
        credits: 3,
        prerequisites: ['ENGR 115 - Introduction to Programming -OR- ENGR 116 - Introduction to Programming & Algorithmic Thinking'],
        corequisites: [],
        courseDescription: 'In this course students learn to practice a disciplined engineering process for developing software. Individual skills and practices, such as effort estimation and unit testing, are mastered so that students can become successful members of software engineering teams. Best practices in software engineering are followed, including the use of simple design patterns with well-known properties. Students work in small teams to construct a simple web service using the industry standard Ruby programming language, Rails framework and MySQL database technology.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 8, 35),
                    EndTime: new Date(2023, 0, 2, 9, 50),
                    Location: 'Peirce 218',
                    Enrolled: 19,
                    Capacity: 29,
                    Instructor: 'Nafiseh Ghorbani Renani',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE',
                    Description: ''
                },
                {
                    Section: 'B',
                    StartTime: new Date(2023, 0, 2, 13, 0),
                    EndTime: new Date(2023, 0, 2, 14, 15),
                    Location: 'Gateway North 213',
                    Enrolled: 23,
                    Capacity: 25,
                    Instructor: 'Nafiseh Ghorbani Renani',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE',
                    Description: ''
                }
            ]
    },
    {
        courseId: 'SSW 345',
        courseName: 'Modeling and Simulation',
        credits: 3,
        prerequisites: ['SSW 315 - Object-Oriented Software Engineering -OR- SSW 325 - Objected-Oriented Software Engineering'],
        corequisites: [],
        courseDescription: 'This course provides an introduction to the development and application of formal models for the specification, design, and automatic analysis of software systems, to increase the reliability and correctness of the software systems, in particular software critical to the safety of systems.Topics include a brief overview of logic and set theory, the use of formalism to describe models and build simulators of software systems, and the emphasis on tool- based specification and verification of a model\'s properties.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 11, 0),
                    EndTime: new Date(2023, 0, 2, 12, 15),
                    Location: 'McLean 211',
                    Enrolled: 36,
                    Capacity: 43,
                    Instructor: 'David Darian Muresan',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH',
                    Description: ''
                }
            ]
    },
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
    },
    {
        courseId: 'SSW 533',
        courseName: 'Cost Estimation and Metrics',
        credits: 3,
        prerequisites: [],
        corequisites: [],
        courseDescription: 'The course deals with the management of software projects using objective metrics that help developers and managers to understand the scope of the work to be accomplished, the risks that will occur, the tasks to be performed, the resources and effort to be expended, and the schedule to be observed. It provides the student with a thorough introduction to facility with, and understanding of such industry-standard software sizing metrics as Function, Feature, and Object Points and their relationship to the lines-of-code metric. It provides the student with a thorough introduction to and understanding of such industry-standard software estimation tools such as COCOMO II used in cost estimation.',
        sections:
            [
                {
                    Section: 'A',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'McLean 209',
                    Enrolled: 16,
                    Capacity: 36,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                },
                {
                    Section: 'A-U',
                    StartTime: new Date(2023, 0, 2, 18, 30),
                    EndTime: new Date(2023, 0, 2, 21, 0),
                    Location: 'McLean 209',
                    Enrolled: 4,
                    Capacity: 10,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU',
                    Description: ''
                },
                {
                    Section: 'WS',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 12,
                    Capacity: 30,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: '',
                    Description: ''
                },
                {
                    Section: 'WS-U',
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
                    Location: 'WebCampus',
                    Enrolled: 13,
                    Capacity: 15,
                    Instructor: 'Richard Ens',
                    RecurrenceRule: '',
                    Description: ''
                }
            ]
    },
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
                    StartTime: new Date(2023, 0, 0, 0, 0),
                    EndTime: new Date(2023, 0, 0, 0, 0),
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
export const fall2023 = all_courses_raw;

