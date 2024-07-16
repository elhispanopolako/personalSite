//Selectors 
const portfolioContainer = document.querySelector('.portfolioContainer')
const content = document.querySelector('.content')
const moreNavs = document.querySelector('.moreNavs')
const showMoreButton = document.getElementById('showMore')
const navBarElements = document.querySelectorAll('nav li.menuItem a')
const moreIcon = document.querySelector('#showMore .more')
const lessIcon = document.querySelector('#showMore .less')
const skills = document.querySelectorAll('.skillsContainer .skill')
const homeBtn = document.getElementById('homeBtn')
let body = document.querySelector('body')
let scrollToTopBtn = document.querySelector('.arrowUp');
// Home

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function checkScroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("showArrow");
    } else {
        scrollToTopBtn.classList.remove("showArrow");
    }
}


// Projects
const projectsJSON = [
    { projectName: 'Insect catch game', img: 'files/project3.png', link: 'https://elhispanopolako.github.io/insectCatchGame/', isActive: false },
    { projectName: 'Quote generator', img: 'files/project2.png', link: 'https://elhispanopolako.github.io/quoteGenerator/', isActive: false },
    { projectName: 'Lego Tinder Swiper', img: 'files/project6.png', link: 'https://elhispanopolako.github.io/legoSwipe/', isActive: true },
    { projectName: 'Pokedex', img: 'files/project4.png', link: 'https://elhispanopolako.github.io/pokedex/', isActive: false },
    { projectName: 'Password Generator', img: 'files/project5.png', link: 'https://elhispanopolako.github.io/passwordGenerator/', isActive: false },
]
// On init
onInit()


scrollToTopBtn.addEventListener('click', scrollToTop)
window.onscroll = function () {
    checkScroll();
};
showMoreButton.addEventListener('click', () => {
    content.classList.toggle('showMore')
    moreNavs.classList.toggle('show')
    moreIcon.hidden = moreIcon.hidden == true ? false : true
    lessIcon.hidden = lessIcon.hidden == true ? false : true
    navBarElements.forEach((item) => {
        item.classList.toggle('disabled')
    });
    homeBtn.classList.toggle('disabled')
    body.classList.toggle('stop-scrolling')

})
const projects = document.querySelectorAll('.portfolioContainer .project')

projects.forEach((projectEl) => {
    projectEl.addEventListener('click', () => {
        removeActiveClasses()
        projectEl.classList.add('active')
    })
})
function removeActiveClasses() {
    projects.forEach((project) => {
        project.classList.remove('active')
    })
}
function displayProjects() {
    projectsJSON.forEach((project) => {
        createProjectCard(project)
    })
}

function createProjectCard(project) {
    let projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    if (project.isActive) {
        projectDiv.classList.add('active')
    }
    let projectInnerHtml = `
    <img src="${project.img}" alt="${project.projectName} image" class="projectImage">
    <h2 class="projectTitle">${project.projectName}</h2>
    <a href="${project.link}" target="_blank">
        <button class="homeButton">Go to demo</button>
    </a>
    `
    projectDiv.innerHTML = projectInnerHtml
    portfolioContainer.appendChild(projectDiv)
}
//Skills 
function onInit() {
    addHoverToSkills()
    scaleBrowser()
}

function scaleBrowser() {
    document.body.style.zoom = 1
    let scale = 'scale(1)';
    document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
    document.body.style.transform = scale;     // General
}
function addHoverToSkills() {
    skills.forEach((skill) => {
        skill.classList.add('hvr-float-shadow')
    })
}
