var b = document.querySelector('button');
// var isPurple = false;

b.addEventListener('click', toggle);


// function toggle() {
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// }

function toggle() {
    document.body.classList.toggle("purple")
}