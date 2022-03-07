let innerContainer = document.querySelector(".innerContainer")
let resultBox = document.querySelector(".resultBox");

let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let namesOfMale= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwami"]
let namesOfFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

}
  
let form = document.getElementById("form");
 let akanName;
 let realName;
 form.addEventListener("submit",(e)=>{
    e.preventDefault();// prevents page reload everytime submit btn is clicked

    let formData =  new FormData(e.target)//create an object from formData constructor that collects all form data at once 
    let date = new Date(formData.get("date")) //create an object from date constructor to help us get the exact date user filled
    let days = date.getDay()//get the exact day from the date using getDay method returns in keys
    realName = formData.get("name");
    if(formData.get("gender")=== null){
        alert("please select your gender")
    }
     akanName = (formData.get("gender")=== "male")? (akanMale[dayOs]): (akanFemale[days]);

    // alert(akanName);
    showResult()
});
   
