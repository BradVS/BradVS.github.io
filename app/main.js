let thumbnails = document.querySelectorAll(".thumbnail");
let thumbpics = ['./images/colorPicker.png'];

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
            img: "./images/colorPicker.png",
            link: "https://codesandbox.io/embed/7y1qx49xl6?view=preview"
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