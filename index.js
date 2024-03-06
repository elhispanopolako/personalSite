// AOS.init();
//Project 
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