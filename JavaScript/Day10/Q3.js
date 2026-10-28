
const Nestedloop = {
    "name": "Ankit Kumar Yadav",
    "age": 20,
    "isEnrolled": true,

    "skills": [
        "Python",
        "SQL",
        "Java"
    ],

    "numberofSkills": 3,

    "address": {
        "city": "Hajipur",
        "state": "Bihar",
        "country": "India"
    }
};

// Print complete object
console.log(Nestedloop);

// Print individual details
console.log("Name:", Nestedloop.name);
console.log("Age:", Nestedloop.age);
console.log("Enrolled:", Nestedloop.isEnrolled);

// Print all skills
console.log("Skills:");

Nestedloop.skills.forEach((skill, index) => {
    console.log(index + 1, skill);
});

// Print address
console.log("City:", Nestedloop.address.city);
console.log("State:", Nestedloop.address.state);
console.log("Country:", Nestedloop.address.country);
