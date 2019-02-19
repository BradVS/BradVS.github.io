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
            name: "Example Name",
            description: "Consequat dolor irure laboris ipsum irure deserunt reprehenderit reprehenderit eu nulla sunt incididunt elit duis. Amet sint minim sit fugiat. Voluptate enim voluptate laboris duis. Voluptate do excepteur magna est incididunt excepteur fugiat quis. Qui mollit sunt quis elit nostrud cupidatat dolor adipisicing pariatur ipsum.",
            img: "./images/fake.jpg",
            link: "notlink.html"
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