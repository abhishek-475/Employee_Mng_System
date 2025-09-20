// localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "aarav@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile sales and performance data for the month.",
        "taskDate": "2025-09-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Weekly sync-up with project team.",
        "taskDate": "2025-09-18",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise API documentation with recent changes.",
        "taskDate": "2025-09-22",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "ishaan@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the issue causing login failures for some users.",
        "taskDate": "2025-09-17",
        "category": "Bug Fixing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add dark mode toggle to the dashboard UI.",
        "taskDate": "2025-09-25",
        "category": "Feature"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve query performance on the invoices table.",
        "taskDate": "2025-09-28",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Conduct Code Review",
        "taskDescription": "Review PR #245 for backend updates.",
        "taskDate": "2025-09-19",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Meera",
    "email": "meera@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Presentation",
        "taskDescription": "Prepare slides for client demo.",
        "taskDate": "2025-09-21",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "UI Testing",
        "taskDescription": "Perform cross-browser UI testing.",
        "taskDate": "2025-09-18",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sprint Plan",
        "taskDescription": "Define user stories for upcoming sprint.",
        "taskDate": "2025-09-23",
        "category": "Planning"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Rohan",
    "email": "rohan@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Update and patch production server.",
        "taskDate": "2025-09-19",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design Review",
        "taskDescription": "Evaluate new UI designs from design team.",
        "taskDate": "2025-09-20",
        "category": "Review"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add unit tests for user authentication module.",
        "taskDate": "2025-09-24",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Database Backup",
        "taskDescription": "Perform weekly backup of production DB.",
        "taskDate": "2025-09-21",
        "category": "Database"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Ananya",
    "email": "ananya@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Marketing Campaign",
        "taskDescription": "Coordinate launch of social media campaign.",
        "taskDate": "2025-09-26",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Data Analysis",
        "taskDescription": "Analyze user engagement metrics.",
        "taskDate": "2025-09-22",
        "category": "Analytics"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Triage",
        "taskDescription": "Review and prioritize reported bugs.",
        "taskDate": "2025-09-20",
        "category": "Bug Fixing"
      }
    ]
  }
];

const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }



}