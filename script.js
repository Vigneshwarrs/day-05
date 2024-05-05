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
var resume1 = 
  {
    name: "Vignesh",
    age: 22,
    "professional summary": "Looking for SDE",
    email: "vigneshwarr@outlook.com",
    degree: "B.Tech",
    skills: ["C", "Java", "Javascript", "Html", "Css", "MySQL"],
  };
var obj = Object.keys(resume1);
for (var i = 0; i < obj.length; i++) {
  console.log(resume1[obj[i]]);
}

for (var i in resume1) {
  console.log(`${i}: ${resume1[i]}`);
}

for (var i of resume1) {
  console.log(resume1[i]);
}

obj.forEach((i)=>console.log(resume1[ele]));
