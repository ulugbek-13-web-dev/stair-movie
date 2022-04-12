let popularMain = document.querySelector('.popular-main')
let topratedURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1'
 fetch(topratedURL)
    .then((value) => value.json())
    .then((another)=> {
        console.log(another)
        let topRatedArray = another.results  
        topRatedArray.map((item) => {
            let popularItem=document.createElement('div')
            let popularItemImage = document.createElement('div')
            let itemImage = document.createElement('img')
            itemImage.src= `https://image.tmdb.org/t/p/original/${item.poster_path}`
            popularItemImage.appendChild(itemImage)
            popularItem.appendChild(popularItemImage)
            popularMain.appendChild(popularItem)
        })
    }
    )