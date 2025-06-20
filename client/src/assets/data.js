export const tasks = [
  {
    _id: "1",
    title: "Website Project Proposal",
    priority: "high",
    stage: "todo",
    date: new Date("2023-01-15").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user1", name: "John Doe" },
      { _id: "user2", name: "Anthony Doe" },
    ],
    subTasks: [
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
    ],
  },
  {
    _id: "2",
    title: "Review Code Changes",
    priority: "medium",
    stage: "in progress",
    date: new Date("2023-02-01").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user3", name: "Bob Smith" },
      { _id: "user4", name: "Alice Johnson" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "3",
    title: "Bug Fixing",
    priority: "low",
    stage: "completed",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "4",
    title: "Tsk Manager Project",
    priority: "high",
    stage: "in progress",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "5",
    title: "Tsk Manager Project",
    priority: "high",
    stage: "in progress",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "6",
    title: "Tsk Manager Project",
    priority: "high",
    stage: "todo",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "7",
    title: "Tsk Manager Project",
    priority: "high",
    stage: "completed",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },

  {
    _id: "8",
    title: "Tsk Manager Project",
    priority: "high",
    stage: "completed",
    date: new Date("2023-02-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Jane Doe" },
      { _id: "user5", name: "Charlie Brown" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Blog App Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Blog App Admin Dashboard",
        date: new Date("2023-01-15").toISOString(),
        tag: "Design",
      },
    ],
  },
];
export const activitiesData = [
  {
    _id: "0",
    type: "started",
    activity: "started this task.",
    date: new Date("2023-01-15").toISOString(),
    by: "Akwasi Asante",
  },
  {
    _id: "1",
    type: "commented",
    activity:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.",
    date: new Date("2023-01-15").toISOString(),
    by: "Eduardo Benz",
  },
  {
    _id: "2",
    type: "assigned",
    activity: "task to Codewave Asante",
    date: new Date("2023-01-15").toISOString(),
    by: "Akwasi Asante",
  },

  {
    _id: "3",
    type: "in progress",
    activity:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum.",
    date: new Date("2024-01-15").toISOString(),
    by: "Jason Meyers",
  },
  {
    _id: "5",
    type: "bug",
    activity: "bug to Codewave Asante",
    date: new Date("2023-01-15").toISOString(),
    by: "Akwasi Asante",
  },
  {
    _id: "4",
    type: "completed",
    activity: "Codewave Asante has completed the task assigned",
    date: new Date("2023-01-15").toISOString(),
    by: "Akwasi Asante",
  },
];

export const users = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    role: "Developer",
    isActive: true,
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    email: "jane.smith@example.com",
    role: "Manager",
  },
  {
    name: "Alex Johnson",
    title: "UX Designer",
    email: "alex.johnson@example.com",
    role: "Designer",
    isActive: true,
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
  {
    name: "Emily Wilson",
    title: "Data Analyst",
    email: "emily.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Michael Brown",
    title: "QA Engineer",
    email: "michael.brown@example.com",
    role: "Tester",
  },
];
export const chartData = [
  {
    name: "High",
    total: 2400
  },
  {
    name: "Medium",
    total: 2210
  },
  {
    name: "Low",
    total: 2290
  }
];
export const summary = {
  totalTasks: 10,
  last10Task: [
    {
      _id: "65c51a4b9f91a23d48b45678",
      title: "Test task 1",
      date: "2025-04-01T00:00:00.000Z",
      priority: "high",
      stage: "todo",
      team: [
        {
          _id: "64n321m21m233m12312ms9",
          name: "CcAdmin",
          title: "Administrator",
          role: "Admin",
          email: "admin@gmail.com"
        },
        {
          _id: "65c20202h123bn12j3b3cc",
          name: "Ram",
          title: "Product Manager",
          role: "Manager",
          email: "ram@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45679",
      title: "Design new UI for homepage",
      date: "2025-04-02T00:00:00.000Z",
      priority: "medium",
      stage: "in progress",
      team: [
        {
          _id: "64n321m21m233m12312ms10",
          name: "Sara",
          title: "UI/UX Designer",
          role: "Designer",
          email: "sara@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45680",
      title: "Fix homepage bugs",
      date: "2025-04-03T00:00:00.000Z",
      priority: "low",
      stage: "todo",
      team: [
        {
          _id: "64n321m21m233m12312ms11",
          name: "Alex",
          title: "Frontend Developer",
          role: "Developer",
          email: "alex@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45681",
      title: "Backend API refactor",
      date: "2025-04-04T00:00:00.000Z",
      priority: "high",
      stage: "in progress",
      team: [
        {
          _id: "64n321m21m233m12312ms12",
          name: "John",
          title: "Backend Developer",
          role: "Developer",
          email: "john@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45682",
      title: "User authentication module",
      date: "2025-04-05T00:00:00.000Z",
      priority: "medium",
      stage: "todo",
      team: [
        {
          _id: "64n321m21m233m12312ms13",
          name: "Emily",
          title: "Security Engineer",
          role: "Engineer",
          email: "emily@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45683",
      title: "Product roadmap planning",
      date: "2025-04-06T00:00:00.000Z",
      priority: "high",
      stage: "in progress",
      team: [
        {
          _id: "64n321m21m233m12312ms14",
          name: "Zoe",
          title: "Product Owner",
          role: "Manager",
          email: "zoe@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45684",
      title: "Create test cases for new feature",
      date: "2025-04-07T00:00:00.000Z",
      priority: "medium",
      stage: "todo",
      team: [
        {
          _id: "64n321m21m233m12312ms15",
          name: "Mike",
          title: "QA Engineer",
          role: "Engineer",
          email: "mike@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45685",
      title: "Code review and merge PR",
      date: "2025-04-08T00:00:00.000Z",
      priority: "low",
      stage: "todo",
      team: [
        {
          _id: "64n321m21m233m12312ms16",
          name: "Lily",
          title: "Senior Developer",
          role: "Developer",
          email: "lily@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45686",
      title: "Customer feedback review",
      date: "2025-04-09T00:00:00.000Z",
      priority: "medium",
      stage: "in progress",
      team: [
        {
          _id: "64n321m21m233m12312ms17",
          name: "Sophia",
          title: "Customer Support",
          role: "Support",
          email: "sophia@gmail.com"
        }
      ]
    },
    {
      _id: "65c51a4b9f91a23d48b45687",
      title: "Marketing campaign strategy",
      date: "2025-04-10T00:00:00.000Z",
      priority: "high",
      stage: "in progress",
      team: [
        {
          _id: "64n321m21m233m12312ms18",
          name: "Tom",
          title: "Marketing Manager",
          role: "Manager",
          email: "tom@gmail.com"
        }
      ]
    }
  ],

  users: [
    {
      _id: "65c51a4b9f91a23d48b45679",
      name: "New User",
      title: "Designer",
      role: "Developer",
      isActive: true,
      createdAt: "2025-04-25T12:34:56.000Z"
    },
    {
      _id: "65c51a4b9f91a23d48b4909",
      name: "Sabal",
      title: "Data Analyst",
      role: "Analyst",
      isActive: true,
      createdAt: "2025-04-27T10:12:00.000Z"
    }
  ],

  tasks: {
    todo: 6,
    "in progress": 3,
    completed: 1
  }
};
