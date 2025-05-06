import React, {useState} from "react"; // Import React and useState hook
import "./App.css";  // Import CSS for styling

// Step 1: Define an array of student objects
const students = [
  { firstName: "Oyetunde", lastName: "Daniel", age: 32, score: 92, courses: ["English", "Spanish"] },
  { firstName: "Sandra", lastName: "Grace", age: 33, score: 90, courses: ["French", "Law"] },
  { firstName: "James", lastName: "Jack", age: 25, score: 91, courses: ["Chemistry", "Food Nutrition"] },
  { firstName: "Ruth", lastName: "Bright", age: 27, score: 85, courses: ["DevOps", "Biology"] },
  { firstName: "David", lastName: "King", age: 28, score: 80, courses: ["Medicine", "Computer Science"] }
];

function App() {
  // Step 2: create a stste variable to store the search input
  const [search, setSearch] = useState("");

  // Step 3: filter students based on the search input
  const filteredStudents = students.filter(({ firstName, lastName }) =>
    `${firstName} ${lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Step 4:Display a welcome message*/}
      <h1 className="welcome">Welcome to the System Information Board</h1>
      {/* Step 5: create a Search Input Field */}
      <input
      type="text"
      placeholder="Search students..."
      className="search-box"
      onChange={(e) => setSearch(e.target.value)} // update Search State on input change
      />

      {/* Step 6: Display filtered student cards */}

      <div className="students">
      {filteredStudents.map(({ firstName, lastName, age,score, courses}, index) => (
        <div key={index} className="student-card">
        <h2>{firstName} {lastName}</h2>
        <p>Age: {age}</p>
        <p>Score: {score}</p>
        <p>Courses: {courses.join(", ")}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App


