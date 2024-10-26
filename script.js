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
