let thumbnails = document.querySelectorAll(".thumbnail");
let scrolledOnce = false;

//object for portfolio data/functions
const portfolio = {
    popup: document.getElementById("portfolioPopup"),
    popupAreas: {
        name: document.getElementById("popup__title"),
        descript: document.getElementById("popup__descript"),
        img: document.getElementById("popup__img"),
        link: document.getElementById("popup__link")
    },
    projects: [
        {
            name: "Color Picker",
            description: "This was a small React web app that I created for a class assignment. The idea behind it was to select a color, and then choose a color harmony, and then the screen would show the color and the color harmony associated with it that the user chose.",
            img: "./images/colorPicker.PNG",
            link: "https://codesandbox.io/embed/7y1qx49xl6?view=preview"
        },
        {
            name: "Interactive City Map",
            description: "This was a small React project I made for a class assignment. The project entailed using JSON information and having data transfer and communicate between three different React components. The basic functionality is this: a user can click on a name on the side menu to single out that spot on the map, the user can select a tag on the right in order to single out locations that fit that tag, or users can pick a name on the map in order to see more details about that location.",
            img: "./images/interactMap.PNG",
            link: "https://codesandbox.io/embed/mzw1k5ql89?fontsize=14&view=preview"
        },
        {
            name: "Concept Cafe",
            description: "This was a small React project I made for a class assignment. The project entailed using JSON information and having data transfer and communicate between three different React components, with the main component handling all communication. The basic functionality is this, the user can submit their order by selecting one of three different items on the menu, the barista component will respond by stating the price, and sending info to the machine component. The machine component will then use the information, state it is brewing, and display a loading bar. Once completed, the machine will tell the barista it is finished, and the barista will then display a final message.",
            img: "./images/conceptCafe.PNG",
            link: "https://codesandbox.io/embed/9o6ovy93vo?fontsize=14&view=preview"
        },
        {
            name: "Jungle Cook",
            description: "This was a website that I made as a class project at IUPUI. The project entailed taking the designs given to us, and implementing them, along with creating a CRUD system using Google's Firebase. Users could log in, create an account, view recipes, edit recipes, and create their own recipes to add to the site.",
            img: "./images/jungleCook.PNG",
            link: ""
        },
        {
            name: "DVD Rental Site",
            description: "This unnamed website was a group project that I had create as part of a group for a class project at IUPUI. The project entailed created a Model-View-Controller (MVC) structured website in PHP that could perform CRUD functionality. Users could create an account, browse through DVDs, look at individual DVDs, and perform rental actions if a DVD was in stock. There were separate functionalities for admin accounts that were blocked to regular users.",
            img: "./images/dvdRental.PNG",
            link: ""
        },
        {
            name: "Dodger",
            description: "This Python project was a group project that I had created as a part of a class at Indiana University, Bloomington. The game is a simple, arcade style coin collector, where the player must avoid falling hazards as they try to collect as many coins as possible and achieve a high score.",
            img: "./images/dodger.PNG",
            link: ""
        }
    ],
    displayPopup(input){
        this.popup.style.display = "block";
        // this.popup.classList.add("startClass");
        this.popupAreas.name.innerHTML = this.projects[input].name;
        this.popupAreas.descript.classList.add("startClass");
        this.popupAreas.descript.innerHTML = this.projects[input].description;
        this.popupAreas.img.src = this.projects[input].img;
        if(this.projects[input].link === ""){
            this.popupAreas.link.style.display = "none";
        }else{
            this.popupAreas.link.style.display = "inline";
            this.popupAreas.link.href = this.projects[input].link;
        }
        
    },
    hidePopup(){
        this.popup.style.display = "none";
        this.popup.classList.remove("startClass");
    }
}

// for (let i = 0; i < thumbnails.length; i++) {
//     thumbnails[i].style.backgroundImage = `url(${thumbpics[i]})`;
    
// }

window.addEventListener("scroll", function() {
    let elementTarget = document.getElementById("home");
    let portfolioTarget = document.getElementById("contact");
    let aboutText = document.querySelector(".text__holder");
    let portfolioArea = document.querySelector(".thumbnailArea");
    
    if (window.scrollY > (elementTarget.offsetTop + (elementTarget.offsetHeight / 5)) && scrolledOnce === false) {
        aboutText.style.animationName = "introFrames";
        aboutText.style.WebkitAnimationName = "introFrames";
        scrolledOnce = true;
    }

    if(window.scrollY > (portfolioTarget.offsetTop + (elementTarget.offsetHeight / 5))){
        portfolioArea.style.animationName = "portfolioSlideIn";
        portfolioArea.style.WebkitAnimationName = "portfolioSlideIn";
    }
  });

var portfolioArea = document.querySelector(".thumbnailArea");
for (let i = 0; i < portfolio.projects.length; i++){
    let thumbnailTitle = document.createElement("h4");
    thumbnailTitle.className = "thumbnail__title"
    thumbnailTitle.innerHTML = portfolio.projects[i].name;
    let thumbnailDescript = document.createElement("p");
    thumbnailDescript.className = "thumbnail__descript";
    thumbnailDescript.innerHTML = portfolio.projects[i].description;
    let portfolioPiece = document.createElement("div");
    portfolioPiece.className = "thumbnail";
    portfolioPiece.onclick = ()=>{
        portfolio.displayPopup(i)
    }
    portfolioPiece.style.backgroundImage = `url(${portfolio.projects[i].img})`;
    portfolioPiece.appendChild(thumbnailTitle);
    portfolioPiece.appendChild(thumbnailDescript);
    portfolioArea.appendChild(portfolioPiece)
}