const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Frontend Development", credits: 3, completed: false },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: true }
];

const courseContainer = document.getElementById("courses");
const creditDisplay = document.getElementById("credits");

function displayCourses(list) {
  courseContainer.innerHTML = "";

  const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = `The total credits for course listed above is ${totalCredits}`;

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = `course ${course.completed ? "completed" : ""}`;
    div.innerHTML = `<strong>${course.code}</strong><p>${course.name}</p>`;
    courseContainer.appendChild(div);
  });
}

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      displayCourses(courses);
    } else {
      displayCourses(courses.filter(c =>
        c.code.toLowerCase().startsWith(filter)
      ));
    }
  });
});

displayCourses(courses);
