console.log("Hello World");

let selected;

let submit = document.querySelector(".sub");

let btn = document.querySelectorAll(".btn");

let box = document.querySelector(".box");

btn.forEach(item => {


    item.addEventListener("click", () => {



        console.log(item.innerHTML);
        console.log("you have selected " + item.innerHTML + " out of 5");

        selected = item.innerHTML;

    })


})


submit.addEventListener('click', () => {

    box.classList.add("thank");
    box.innerHTML = ` <img src="illustration-thank-you.svg" alt="">

    <div class="selected">You have ${selected} selected out of 5</div>

    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
        touch!</p>`;




})