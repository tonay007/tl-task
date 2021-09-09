//Shortcut selector like jQuery
const $ = selector => document.querySelector(selector);

//catching form submission
$("#form").addEventListener("submit", e => {
    e.preventDefault();
    const marks = parseInt($("#number").value);
    if (isValidate(marks)) {
        putInDOM(marks)
    }
    else {
        putInDOM("Invalid Input")
    };
});

//validating input
const isValidate = mark => {
    if (mark >= 0 && mark <= 100) {
        return true;
    }
    else {
        return false;
    };
};

//replacing in HTML DOM
const putInDOM = value => {
    if (typeof value === "number") {
        const grade = getGrade(value);
        $(".result").innerHTML = `<h3>Your grade is ${grade}</h3>`;
    }
    else {
        $(".result").innerHTML = `<h3>${value}. Provide a number between 0-100</h3>`;
    };
};

//getting the grade
const getGrade = number => {
    if (number >= 80) {
        return 'A+';
    }
    else if (number >= 70) {
        return 'A';
    }
    else if (number >= 60) {
        return 'A-';
    }
    else if (number >= 50) {
        return 'B';
    }
    else if (number >= 40) {
        return 'C';
    }
    else if (number >= 33) {
        return 'D';
    }
    else {
        return 'F';
    }
}