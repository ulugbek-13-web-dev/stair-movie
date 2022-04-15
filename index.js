let image = document.querySelector('.movie-image img')
let title = document.querySelector('.movie-text h2')
let p = document.querySelector('.movie-text p')
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1'
fetch(url)
    .then((resolve) => resolve.json())
    .then((value) => {
        console.log(value)
        let index = 0;
        image.src = `https://image.tmdb.org/t/p/original/${value.results[0].backdrop_path}`
        title.textContent = `${value.results[0].original_title}`
        p.textContent = `The rating is ${value.results[0].vote_average}`
        nextBtn.addEventListener('click', () => {
            if (index === 19) {
                index = 0
            } else {
                index++
                image.src = `https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title}`
                p.textContent = `The rating is ${value.results[index].vote_average}`
            }
        })
        prevBtn.addEventListener('click', () => {
            if (index === 0) {
                index = value.results.length
            } else {
                index--
                image.src = `https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title}`
                p.textContent = `The rating is ${value.results[index].vote_average}`
              
            }
        })
    })