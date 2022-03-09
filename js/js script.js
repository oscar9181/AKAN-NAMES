
const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let namesMale = ["Kwasi", "Kwadwo", "Kofi", "Kwame", "Kwabena", "Kwaku", "Yaw"]
let namesFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
let btn = document.querySelector("#btn");
let sex;
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    getUserInput()
})
var getUserInput = function () {
    
    let inputDay = document.getElementById("dayOfBirth").value
    let intDay = parseInt(inputDay)

    let inputMonth = document.getElementById("birthMonth").value
    let month = parseInt(inputMonth)

    let inputYear = document.getElementById("birthYear").value
    let Year = parseInt(inputYear)

     /* let inputGender = document.getElementById("gender");
    sex = inputGender.value */

    var male = document.getElementById("male")
    var female = document.getElementById("female")

   

      if (intDay < 1 || intDay > 31){
        alert('Valid days are between 1 and 31. Please input a valid day.');
        
    }

     if (month < 1 || month > 12){
        alert('Valid months are between 1 and 12. Please input a valid month.');
        
    }
    if(male.selected === true){
        alert(namesMale[intDay]);
    }
    
    else{
        alert(namesFemale[intDay])
    }




}
