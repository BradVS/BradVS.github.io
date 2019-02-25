let thumbnails = document.querySelectorAll(".thumbnail");
const thumbpics = ['./images/colorPicker.PNG', './images/interactMap.PNG'];

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
        }
    ],
    displayPopup(input){
        this.popup.style.display = "block";
        this.popupAreas.name.innerHTML = this.projects[input].name;
        this.popupAreas.descript.innerHTML = this.projects[input].description;
        this.popupAreas.img.src = this.projects[input].img;
        this.popupAreas.link.href = this.projects[input].link;
    },
    hidePopup(){
        this.popup.style.display = "none";
    }
}

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].style.backgroundImage = `url(${thumbpics[i]})`;
    
}