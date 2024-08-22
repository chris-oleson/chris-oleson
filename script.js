let details = document.getElementsByClassName('detail')
function display(project) {
    let found = false
    for (let detail of details) {
        if (detail.classList.contains('show')) {
            detail.classList.remove('show')
        }
        else if (detail.id == project) {
            detail.classList.add('show')
            found = true
        }
    }

    if (found == false) {
        document.getElementById('title').classList.add('show')
    }
}

const github = document.getElementById('github')
const linkedin = document.getElementById('linkedin')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
    github.src = "https://cdn.simpleicons.org/github/ffffff"
    linkedin.src = "https://cdn.simpleicons.org/linkedin/ffffff"
}