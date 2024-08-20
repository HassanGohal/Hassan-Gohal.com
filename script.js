var typed = new Typed(".typing", {
    strings: ["UI/UX Designer", "Front-End Developer" , "3D Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
allSections = document.querySelectorAll(".section"),
    totalSections = allSections.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerHeight < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")

}
function updateNAv(element) {
for (let i = 0; i < totalNavList; i++){
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");
    }
}
}
document.querySelector(".hire-me") .addEventListener("click",  function () {
const sectionIdex = this.getAttribute("data-section-index");
console.log(sectionIdex);
showSection(this);
updateNAv(this);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",  () => 
    {
        asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for (let i = 0; i < totalSections;i++) {
                allSections[i].classList.toggle("open");
            }
        }

        // Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImg = document.getElementById("modalImage");

// Get all the thumbnails
var thumbnails = document.getElementsByClassName("thumbnail");

// Add click event to each thumbnail to open the modal
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
