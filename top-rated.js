let slider = document.querySelector('.top-rated-cont')
let next = document.querySelector('.top-rated-next')
let prev = document.querySelector('.top-rated-prev')
let counter = 1;

let url2 = 'https://api.themoviedb.org/3/person/popular?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1'
fetch(url2)
    .then((res) => res.json())
    .then((value) => {
        let fragment = document.createDocumentFragment()
        for (let i = 0; i < value.results.length; i++) {
            let top = document.createElement('div')
            top.className = 'top'
            let topImage = document.createElement('div')
            topImage.className = 'top-image'
            let image = document.createElement('img')
            image.src = `https://image.tmdb.org/t/p/original/${value.results[i].profile_path}`
            let topInfo = document.createElement('div')
            topInfo.className = 'top-info'
            let topInfoCont = document.createElement('div')
            topInfoCont.className = 'top-info-cont'
            let topBtn = document.createElement('div')
            topBtn.className = 'top-btn'
            let button = document.createElement('button')
            button.textContent = '+'
            let topText = document.createElement('div')
            let topTextH2 = document.createElement('h2')
            topTextH2.textContent = `${value.results[i].name}`
            let topTextP = document.createElement('p')
            topTextP.textContent = `Popularity : ${value.results[i].popularity}`
            topText.className = 'top-text'
            topText.appendChild(topTextH2)
            topText.appendChild(topTextP)
            topBtn.appendChild(button)
            topInfoCont.appendChild(topBtn)
            topInfoCont.appendChild(topText)
            topInfo.appendChild(topInfoCont)

            topImage.appendChild(image)
            top.appendChild(topImage)
            top.appendChild(topInfo)
            fragment.appendChild(top)
        }
        slider.appendChild(fragment)

    })
    .then((response) => {
        let images = document.querySelectorAll('.top-rated-cont img')
        let size = images[3].clientWidth;
        
        next.addEventListener('click', () => {
            if (counter === 19) {
                counter = 1
                slider.style.transition = '0.6s ease'
                slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
            } else {
                counter++
                slider.style.transition = '0.6s ease'
                slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
               
            }

        })
        prev.addEventListener('click', () => {
            if (counter === 1) {
                slider.style.transition = '0.6s ease'
                counter = 19
                slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
            } else {
                slider.style.transition = '0.6s ease'
                counter--
                slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
            }

        })
    })