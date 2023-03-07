

function showme() {
    const element = document.getElementById("profile");
    element.style.transition = "all 1s ease";
    element.style.opacity = 1;
}
function hideme(e) {
    const element = document.getElementById("profile");
    element.style.transition = "all 1s ease";
    element.style.opacity = 0.7;

}
function update() {
    document.addEventListener('',)
    setInterval(update, 100);
}
function NextPage() {
    const element = document.getElementById("Skill-container");
    element.style.marginTop = "400px";
    element.style.marginLeft = "200px";
    const element2 = document.getElementById("Projects-container");
    element2.style.transition="all 1s ease";
    element2.style.right="16px";
    showme();
}
function PreviousPage() {
    const element = document.getElementById("Skill-container");
    element.style.marginTop = "50px";
    element.style.marginLeft = "16px";
    const element2 = document.getElementById("Projects-container");
    element2.style.transition="all 1s ease";
    element2.style.right="-350px";
    hideme();
}

function PlaySound(){
    var newAudio = new Audio("./Music/Coding_night.mp3");
    if(newAudio.paused ) {
        newAudio.play();
     } else {
        newAudio.pause();
     }
}