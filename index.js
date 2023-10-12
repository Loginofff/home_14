const student = document.getElementById("student");

async function loadStudent() {
const response = await fetch ("https://loginofff.github.io/student-api/me.json");
const res = await response.json();
console.log(res);
const { name , age, isHungry,status} = res;
console.log(name , age, isHungry, status);
student.textContent = `${name} ${age} ${isHungry ? "hungry" : "full"} ${status}`;
}
loadStudent();