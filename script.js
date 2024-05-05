// Question 1 Resume in json format
var resume = {
  name: "Vignesh",
  age: 22,
  "professional summary": "",
  email: "vigneshwarr@outlook.com",
  degree: "B.Tech",
  skills: ["C", "Java", "Javascript", "Html", "Css", "MySQL"],
};

console.log(resume);

// Question 2 iterate the json for , for in
var resumes = [
  {
    name: "Vignesh",
    age: 22,
    "professional summary": "Looking for SDE",
    email: "vigneshwarr@outlook.com",
    degree: "B.Tech",
    skills: ["C", "Java", "Javascript", "Html", "Css", "MySQL"],
  },
  {
    name: "Kumar",
    age: 23,
    "professional summary": "Looking for STE",
    email: "kumarrr@outlook.com",
    degree: "B.E",
    skills: ["C", "Java", "Junit", "TestNG", "Selenium"],
  },
];

for (var i = 0; i < resumes.length; i++) {
  console.log(resumes[i]);
}

for (var i in resume) {
  console.log(`${i}: ${resume[i]}`);
}
