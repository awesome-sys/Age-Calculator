const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");


function calculateAge () {
    const birtdayValue = birthdayEl.value;
    if(birtdayValue === ""){
        alert("Please enter your birthday")
    } else {
        let age = getAge(birtdayValue);
        console.log(age);
    }
}

function getAge (birtdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birtdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    } 

    return age;
}

btnEl.addEventListener("click", calculateAge);