var counter = document.getElementById("counter");
var increase = document.getElementById("plus");
var decrease = document.getElementById("minus");


increase.addEventListener("click" , function() {
    let counterValue = parseInt(counter.innerText);
    counter.innerText = counterValue + 1;
})


decrease.addEventListener("click", function() {
    counter.innerText -= 1;
})