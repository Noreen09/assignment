interface subject {
    subjectname : string;
    class : string | number;
    pages : number;
}

let physics: subject = {
    subjectname: "Physics",
    class: "Grade 10",
    pages: 156
};

let chemistry: subject = {
    subjectname: "Chemistry",
    class: "1st year",
    pages: 200
};

console.log(physics);
console.log(chemistry);