const secondComponent = document.querySelector("#second-question-icon h4")
const secondComponentDropdown = document.querySelector("#second-question-icon img")
const secondHiddenMsg = document.querySelector(".secondHiddenMsg")

const thirdComponent = document.querySelector("#third-question-icon h4")
const thirdComponentDownpdown = document.querySelector("#third-question-icon img")
const thirdHiddenMsg = document.querySelector(".thirdHiddenMsg")

const fourthComponent = document.querySelector("#fourth-question-icon h4")
const fourthComponentDownpdown = document.querySelector("#fourth-question-icon img")
const fourthHiddenMsg = document.querySelector(".fourthHiddenMsg")

secondComponent.addEventListener("click",()=>{
    secondHiddenMsg.classList.toggle("displaySecondHiddenMsg")
})

secondComponentDropdown.addEventListener("click",()=>{
    secondHiddenMsg.classList.toggle("displaySecondHiddenMsg")
})



thirdComponent.addEventListener("click",()=>{
    thirdHiddenMsg.classList.toggle("displayThirdHiddenMsg")
})

thirdComponentDownpdown.addEventListener("click",()=>{
    thirdHiddenMsg.classList.toggle("displayThirdHiddenMsg")
})



fourthComponent.addEventListener("click",()=>{
    fourthHiddenMsg.classList.toggle("displayFourthHiddenMsg")
})

fourthComponentDownpdown.addEventListener("click",()=>{
    fourthHiddenMsg.classList.toggle("displayFourthHiddenMsg")
})