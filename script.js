let displayed = 'title'
function display(project) {   
    if (project == displayed) {
        document.getElementsByClassName(project + ' button')[0].classList.remove('clicked')
        display('title')
    }
    else {
        if (displayed != 'title') {
            document.getElementsByClassName(displayed + ' button')[0].classList.remove('clicked')
        }
        if (project != 'title') {
            document.getElementsByClassName(project + ' button')[0].classList.add('clicked')
        }
        document.getElementsByClassName(displayed + ' detail')[0].classList.remove('show')
        document.getElementsByClassName(project + ' detail')[0].classList.add('show')
        displayed = project
    }
}

const github = document.getElementById('github')
const linkedin = document.getElementById('linkedin')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
    github.src = "https://cdn.simpleicons.org/github/ffffff"
    linkedin.src = "https://cdn.simpleicons.org/linkedin/ffffff"
}
