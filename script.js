let details = document.getElementsByClassName('detail')
let showing = false
function display(project) {
    for (let detail of details) {
        if (detail.id == project && !detail.classList.contains('show')) {
            if (showing) {
                setTimeout(() => {detail.classList.add('show')}, 300)
            }
            else {
                detail.classList.add('show')
            }
            showing = true
        }
        else if (detail.id == project && detail.classList.contains('show')) {
            detail.classList.remove('show')
            showing = false
        }
        else {
            detail.classList.remove('show')
        }
    }
}

const github = document.getElementById('github')
const linkedin = document.getElementById('linkedin')
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
    github.src = "https://cdn.simpleicons.org/github/ffffff"
    linkedin.src = "https://cdn.simpleicons.org/linkedin/ffffff"
}