//Project 
const portfolioContainer = document.querySelector('.portfolioContainer')
const projectsJSON = [
    { projectName: 'Quote generator', img: 'files/project2.png', link: 'https://elhispanopolako.github.io/quoteGenerator/', isActive: true },
    { projectName: 'Insect catch game', img: 'files/project3.png', link: 'https://elhispanopolako.github.io/insectCatchGame/', isActive: false },
    { projectName: 'Pokedex', img: 'files/project4.png', link: 'https://elhispanopolako.github.io/pokedex/', isActive: false },
]
displayProjects()
const projects = document.querySelectorAll('.portfolioContainer .project')

console.log(projects)
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
//
