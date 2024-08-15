
let cntr = 0

function heart(){
    let times = document.querySelector('#times')
    let hrt = document.querySelector('.hrt')
    cntr++

    let hrts = document.createElement("i");
    hrts.classList.add("fas");
    hrts.classList.add("fa-heart");
    hrt.appendChild(hrts);
    console.log(cntr);
    times.innerHTML = cntr;

}
