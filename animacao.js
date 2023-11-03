const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('mostrar')
        }else{
            entry.target.classList.remove('mostrar')
        }
    })
})

elements.forEach(function (element) {
    myObserver.observe(element)
})