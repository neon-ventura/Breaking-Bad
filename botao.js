document.addEventListener('click', (e) =>{
    console.log(e.target)

    

    if (e.target.classList.contains('assistaAgora')) {

            window.open('https://www.netflix.com/br/title/70143836', '_blank')
    }

    if (e.target.classList.contains('botaoCuriosidade')) {
        
        window.open('https://pt.wikipedia.org/wiki/Breaking_Bad', '_blank')
    }

    if (e.target.classList.contains('nav-link')) {
        window.open('https://pt.wikipedia.org/wiki/Breaking_Bad', '_blank')
    }
})

