const students = [
    {
      name: "Aarav Singh",
      fatherName: "Rajesh Singh",
      rollNo: "001",
      marks: 85,
      topics: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      name: "Meera Sharma",
      fatherName: "Suresh Sharma",
      rollNo: "002",
      marks: 90,
      topics: ["Biology", "Chemistry", "Mathematics"],
    },
    {
      name: "Rohan Gupta",
      fatherName: "Anil Gupta",
      rollNo: "003",
      marks: 78,
      topics: ["History", "Geography", "Political Science"],
    },
    {
      name: "Ananya Verma",
      fatherName: "Pankaj Verma",
      rollNo: "004",
      marks: 88,
      topics: ["English", "Mathematics", "Computer Science"],
    },
    {
      name: "Vikram Mehta",
      fatherName: "Sunil Mehta",
      rollNo: "005",
      marks: 92,
      topics: ["Physics", "Chemistry", "Mathematics"],
    },
    {
      name: "Sneha Patel",
      fatherName: "Mahesh Patel",
      rollNo: "006",
      marks: 81,
      topics: ["Biology", "Chemistry", "Physics"],
    },
    {
      name: "Rahul Jain",
      fatherName: "Vikas Jain",
      rollNo: "007",
      marks: 76,
      topics: ["Mathematics", "Computer Science", "Physics"],
    },
    {
      name: "Priya Kumar",
      fatherName: "Arun Kumar",
      rollNo: "008",
      marks: 84,
      topics: ["History", "Geography", "Economics"],
    },
    {
      name: "Nikhil Roy",
      fatherName: "Amit Roy",
      rollNo: "009",
      marks: 89,
      topics: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      name: "Isha Desai",
      fatherName: "Ravi Desai",
      rollNo: "010",
      marks: 93,
      topics: ["Biology", "Chemistry", "Physics"],
    },
    {
      name: "Amit Malhotra",
      fatherName: "Vivek Malhotra",
      rollNo: "011",
      marks: 77,
      topics: ["History", "Political Science", "Economics"],
    },
    {
      name: "Kavya Kapoor",
      fatherName: "Raj Kapoor",
      rollNo: "012",
      marks: 91,
      topics: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      name: "Sahil Reddy",
      fatherName: "Prakash Reddy",
      rollNo: "013",
      marks: 86,
      topics: ["Biology", "Chemistry", "Mathematics"],
    },
    {
      name: "Anushka Singh",
      fatherName: "Ravi Singh",
      rollNo: "014",
      marks: 80,
      topics: ["History", "Geography", "Political Science"],
    },
    {
      name: "Rajiv Nair",
      fatherName: "Vinod Nair",
      rollNo: "015",
      marks: 87,
      topics: ["Physics", "Chemistry", "Computer Science"],
    },
    {
      name: "Divya Joshi",
      fatherName: "Ramesh Joshi",
      rollNo: "016",
      marks: 79,
      topics: ["Mathematics", "English", "Computer Science"],
    },
    {
      name: "Arjun Rao",
      fatherName: "Sanjay Rao",
      rollNo: "017",
      marks: 83,
      topics: ["Physics", "Mathematics", "Computer Science"],
    },
    {
      name: "Snehal Patel",
      fatherName: "Nitin Patel",
      rollNo: "018",
      marks: 94,
      topics: ["Biology", "Chemistry", "Physics"],
    },
    {
      name: "Kabir Das",
      fatherName: "Manoj Das",
      rollNo: "019",
      marks: 82,
      topics: ["History", "Geography", "Political Science"],
    },
    {
      name: "Pooja Sharma",
      fatherName: "Ashok Sharma",
      rollNo: "020",
      marks: 95,
      topics: ["Mathematics", "Physics", "Chemistry"],
    },
  ];
  
  function showAllStudents() {
    let tableBody = document.getElementById("table-body");
    let html = '';
  
    students.forEach((student, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.rollNo}</td>
                <td>${student.name}</td>
                <td>${student.fatherName}</td>
                <td>${student.marks}</td>
            </tr>
        `;
    });
  
    tableBody.innerHTML = html;
  }
  
  function filterStudents(minMarks) {
    let filteredStudents = students.filter(student => student.marks >= minMarks);
    let tableBody = document.getElementById("table-body");
    let html = '';
  
    filteredStudents.forEach((student, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.rollNo}</td>
                <td>${student.name}</td>
                <td>${student.fatherName}</td>
                <td>${student.marks}</td>
            </tr>
        `;
    });
  
    tableBody.innerHTML = html;
  }
  
  
  showAllStudents();