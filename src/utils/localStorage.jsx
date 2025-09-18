const employees = [
  {
    "id": 1,
    "email": "alice.employee@example.com",
    "password": "password321",
    "tasks": [
      {
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile sales and performance data for the month.",
        "taskDate": "2025-09-20",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Weekly sync-up with project team.",
        "taskDate": "2025-09-18",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Update Documentation",
        "taskDescription": "Revise API documentation with recent changes.",
        "taskDate": "2025-09-22",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "bob.employee@example.com",
    "password": "password321",
    "tasks": [
      {
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve the issue causing login failures for some users.",
        "taskDate": "2025-09-17",
        "category": "Bug Fixing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add dark mode toggle to the dashboard UI.",
        "taskDate": "2025-09-25",
        "category": "Feature",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Optimize Database",
        "taskDescription": "Improve query performance on the invoices table.",
        "taskDate": "2025-09-28",
        "category": "Database",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Conduct Code Review",
        "taskDescription": "Review PR #245 for backend updates.",
        "taskDate": "2025-09-19",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "carol.employee@example.com",
    "password": "password321",
    "tasks": [
      {
        "taskTitle": "Client Presentation",
        "taskDescription": "Prepare slides for client demo.",
        "taskDate": "2025-09-21",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "UI Testing",
        "taskDescription": "Perform cross-browser UI testing.",
        "taskDate": "2025-09-18",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Prepare Sprint Plan",
        "taskDescription": "Define user stories for upcoming sprint.",
        "taskDate": "2025-09-23",
        "category": "Planning",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "dave.employee@example.com",
    "password": "password321",
    "tasks": [
      {
        "taskTitle": "Server Maintenance",
        "taskDescription": "Update and patch production server.",
        "taskDate": "2025-09-19",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Design Review",
        "taskDescription": "Evaluate new UI designs from design team.",
        "taskDate": "2025-09-20",
        "category": "Review",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add unit tests for user authentication module.",
        "taskDate": "2025-09-24",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Perform weekly backup of production DB.",
        "taskDate": "2025-09-21",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "eve.employee@example.com",
    "password": "password321",
    "tasks": [
      {
        "taskTitle": "Marketing Campaign",
        "taskDescription": "Coordinate launch of social media campaign.",
        "taskDate": "2025-09-26",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Data Analysis",
        "taskDescription": "Analyze user engagement metrics.",
        "taskDate": "2025-09-22",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Bug Triage",
        "taskDescription": "Review and prioritize reported bugs.",
        "taskDate": "2025-09-20",
        "category": "Bug Fixing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
]

const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "password321"
  }
]


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   console.log(employees, admin);
   
   
   
}