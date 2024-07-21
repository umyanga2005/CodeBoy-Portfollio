const hamburgerMenu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

const sections = document.querySelectorAll(".main, .skills-container, .projects-container, .contact-container");
const main = document.querySelector(".main");
const skillsContainer = document.querySelector(".skills-container");
const projectContainer = document.querySelector(".projects-container");
const contactContainer = document.querySelector(".contact-container");

const homeLink = document.querySelector('a[href="#home"]');
const skillsLink = document.querySelector('a[href="#skills"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLink = document.querySelector('a[href="#contact"]');

if (main && container) {
    main.addEventListener("click", () => {
        container.classList.remove("active");
        main.style.transform = "";
        
    });
}

if (skillsContainer && container) {
    skillsContainer.addEventListener("click", () => {
        container.classList.remove("active");
        skillsContainer.style.transform = "";
        
    });
}

if (projectContainer && container) {
    projectContainer.addEventListener("click", () => {
        container.classList.remove("active");
        projectContainer.style.transform = "";
        
    });
}

if (contactContainer && container) {
    contactContainer.addEventListener("click", () => {
        container.classList.remove("active");
        contactContainer.style.transform = "";
        
    });
}

if (hamburgerMenu && container) {
    hamburgerMenu.addEventListener("click", () => {
        if (container.classList.contains("active")) {
            // Check and reset the transform styles of each section when the container is active
            if (main.style.transform === "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)") {
                main.style.transform = "";
                main.style.pointerEvents = "visible";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "none";
                
                contactContainer.style.zIndex = "-3";
                contactContainer.style.opacity = "0.5";
                contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";


            }
            if (skillsContainer.style.transform === "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)") {
                skillsContainer.style.transform = "";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "visible";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "none";

            }
            if (projectContainer.style.transform === "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)") {
                projectContainer.style.transform = "";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "visible";
                contactContainer.style.pointerEvents = "none";
            }
            if (contactContainer.style.transform === "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)") {
                contactContainer.style.transform = "";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "visible";
            }
            container.classList.remove("active");
        } else {
            container.classList.add("active");
            // Set transform styles for each section when the container is not active
            if (main.style.transform === "") {
                main.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";
                skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)";
                projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5)";
                contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";

                contactContainer.style.zIndex = "-3";
                contactContainer.style.opacity = "0.5";
                contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";

                main.style.pointerEvents = "visible";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "none";
                
            }
            if (skillsContainer.style.transform === "") {
                skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "visible";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "none";
            }
            if (projectContainer.style.transform === "") {
                projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "visible";
                contactContainer.style.pointerEvents = "none";

            }
            if (contactContainer.style.transform === "") {
                contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

                main.style.pointerEvents = "none";
                skillsContainer.style.pointerEvents = "none";
                projectContainer.style.pointerEvents = "none";
                contactContainer.style.pointerEvents = "visible";
            }
        }
    });
}

// Function to reset the styles of all sections
function resetStyles() {
    sections.forEach(sec => {
        sec.style.zIndex = "";
        sec.style.opacity = "";
        sec.style.transform = "";
    });
}

// Function to set active section
function setActiveSection(section) {

    resetStyles();

    if (section === skillsContainer) {

        main.style.zIndex = "-3";
        main.style.opacity = "0.5";
        main.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";
        
        skillsContainer.style.zIndex = "5";
        skillsContainer.style.opacity = "0.99";
        skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

        projectContainer.style.zIndex = "-1";
        projectContainer.style.opacity = "0.8";
        projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)";

        contactContainer.style.zIndex = "-2";
        contactContainer.style.opacity = "0.6";
        contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5)";

    } else if (section === projectContainer) {
        skillsContainer.style.zIndex = "-3";
        skillsContainer.style.opacity = "0.5";
        skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";
        
        projectContainer.style.zIndex = "5";
        projectContainer.style.opacity = "0.99";
        projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

        contactContainer.style.zIndex = "-1";
        contactContainer.style.opacity = "0.8";
        contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)";

        main.style.zIndex = "-2";
        main.style.opacity = "0.6";
        main.style.transform = "perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5)";

    } else if (section === contactContainer) {
        projectContainer.style.zIndex = "-3";
        projectContainer.style.opacity = "0.5";
        projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";
        
        contactContainer.style.zIndex = "5";
        contactContainer.style.opacity = "0.99";
        contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

        main.style.zIndex = "-1";
        main.style.opacity = "0.8";
        main.style.transform = "perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)";

        skillsContainer.style.zIndex = "-2";
        skillsContainer.style.opacity = "0.6";
        skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5)";

    } else {
        // Default to main section if no matching section found
        contactContainer.style.zIndex = "-3";
        contactContainer.style.opacity = "0.5";
        contactContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5)";
        
        main.style.zIndex = "5";
        main.style.opacity = "0.99";
        main.style.transform = "perspective(1300px) rotateY(20deg) translateZ(405px) scale(0.5)";

        skillsContainer.style.zIndex = "-1";
        skillsContainer.style.opacity = "0.8";
        skillsContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5)";

        projectContainer.style.zIndex = "-2";
        projectContainer.style.opacity = "0.6";
        projectContainer.style.transform = "perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5)";

    }
}

if (homeLink) {
    homeLink.addEventListener("click", () => {
        setActiveSection(main);   
        main.style.pointerEvents = "visible";
        skillsContainer.style.pointerEvents = "none";
        projectContainer.style.pointerEvents = "none";
        contactContainer.style.pointerEvents = "none";    
    });
}

if (skillsLink) {
    skillsLink.addEventListener("click", () => {
        setActiveSection(skillsContainer);
        main.style.pointerEvents = "none";
        skillsContainer.style.pointerEvents = "visible";
        projectContainer.style.pointerEvents = "none";
        contactContainer.style.pointerEvents = "none";
        refreshSkillAnimations();
    });
}

function refreshSkillAnimations() {
    const skillBars = document.querySelectorAll(".skill-per");
    const circularContainers = document.querySelectorAll(".circular-container .circular-progress");

    skillBars.forEach(skillBar => {
        skillBar.classList.remove("animate");
        void skillBar.offsetWidth; // Trigger reflow
        skillBar.classList.add("animate");
    });

    circularContainers.forEach(container => {
        const progressValue = container.querySelector(".progress-value");
        const progressEndValue = parseInt(progressValue.getAttribute("per"));
        let progressStartValue = 0;
        const speed = 50;

        const progressInterval = setInterval(() => {
            progressStartValue++;

            progressValue.textContent = `${progressStartValue}%`;
            container.style.background = `conic-gradient(#ff2770, #278cff, #ff2770, #278cff ${progressStartValue * 3.6}deg, #ededed 3.6deg)`;

            if (progressStartValue >= progressEndValue) {
                clearInterval(progressInterval);
            }
        }, speed);
    });
}


if (projectsLink) {
    projectsLink.addEventListener("click", () => {
        setActiveSection(projectContainer);
        main.style.pointerEvents = "none";
        skillsContainer.style.pointerEvents = "none";
        projectContainer.style.pointerEvents = "visible";
        contactContainer.style.pointerEvents = "none";
    });
}

if (contactLink) {
    contactLink.addEventListener("click", () => {
        setActiveSection(contactContainer);
        main.style.pointerEvents = "none";
        skillsContainer.style.pointerEvents = "none";
        projectContainer.style.pointerEvents = "none";
        contactContainer.style.pointerEvents = "visible";
    });

}

function clock() {
    let secDots = document.getElementById('secDots');
    let minDots = document.getElementById('minDots');
    let hrDots = document.getElementById('hrDots');

    var date = new Date();
    var hours = date.getHours() % 12
    var amPm = date.getHours >=12 ? 'PM' : 'AM';

    hours = hours === 0 ? 12 : hours;

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var secondsDots = '';
    for (var i =1; i< 61; i++){
        var rotation = i * 6;

        if (i === seconds){
            secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'; 
        }
        else {
            secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    var minutesDots = '';
    for (var i =1; i< 61; i++){
        var rotation = i * 6;

        if (i === minutes){
            minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'; 
        }
        else {
            minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    var hoursDots = '';
    for (var i =1; i< 13; i++){
        var rotation = i * 30;

        if (i === hours){
            hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>'; 
        }
        else {
            hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    secDots.innerHTML = secondsDots + '<b>'+ amPm + '</b>' + '<h2>' + zero(seconds) + '<br><span>Seconds</span></h2>';
    minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>Minutes</span></h2>';
    hrDots.innerHTML = hoursDots + '<h2>' + zero(hours) + '<br><span>Hours</span></h2>';
}

function zero(number) {
    if(number < 10) {
        return '0' + number;
    }
    return number
}

setInterval(clock, 1000);

var typed = new Typed("#text", {
    strings: ["Full-Stack Web Developer", "Freelancer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

