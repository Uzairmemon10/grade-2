let namee = document.getElementById("name")
let usershow = document.getElementsByClassName("usershow")
let usershow2 = document.getElementsByClassName("usershow2")
let usershow3 = document.getElementsByClassName("usershow3")
let error = document.getElementById("error")





let submit = document.getElementById("submit").addEventListener('click', () => {
    let obtainedmarks = +(document.getElementById("obtainedmarks").value);
    let totalmarks = +(document.getElementById("totalmarks").value);

    if (totalmarks <= 0 || obtainedmarks < 0 || isNaN(totalmarks) || isNaN(obtainedmarks)) {
        error.innerHTML="PLEASE ENTER A VALID NUMBER "
    } else {
        let percentage = obtainedmarks / totalmarks * 100;
        switch (true) {
            case (percentage >= 80):
                usershow3[0].innerHTML = "a1"
                break;
            case (percentage >= 70):
                usershow3[0].innerHTML = "a"
                break;
            case (percentage >= 60):
                usershow3[0].innerHTML = "b"
                break;
            case (percentage >= 50):
                usershow3[0].innerHTML = "c"
                break;
            default:
                usershow3[0].innerHTML = "fail"
        }
    }
   usershow[0].innerHTML = document.getElementById("name").value
usershow2[0].innerHTML=percentage =Math.floor( (obtainedmarks / totalmarks) * 100)+"%";
         
})















