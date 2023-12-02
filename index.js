const buttons = document.querySelectorAll(".rating-button");
const rating = document.getElementById("rating");
const ratingPage = document.getElementById("first-page");
const submitPage = document.getElementById("second-page");
const submit = document.getElementById("submit-button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        rating.innerHTML = button.innerHTML;
    })
})

submit.addEventListener("click", ()=> {
    if (rating.innerHTML.length == 1){
        submitPage.classList.remove("hidden");
        ratingPage.classList.add("hidden");
    }
})