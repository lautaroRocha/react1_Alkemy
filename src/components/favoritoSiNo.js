    const  addOrRemoveFavs = e =>{
        const favs = localStorage.getItem('favs')
   
        let tempFavs;
    
        if(favs === null){
            tempFavs = [];
        }else{
            tempFavs = JSON.parse(favs)
        }
    
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        const div = parent.parentElement;
        const imgURL = div.querySelector ('img').getAttribute('src')
        const title = div.querySelector('.peli-titulo').textContent;
        const resu = div.querySelector('.peli-desp').textContent
        const id = btn.dataset.id;
        const movieFav = {
            imgURL, title, resu, id
        }
        let movieIsFav = tempFavs.find( oneMovie =>{
            return oneMovie.id === movieFav.id})
        if(!movieIsFav){
            tempFavs.push(movieFav);
            localStorage.setItem('favs', JSON.stringify(tempFavs))
        }else{
            let moviesLeft = tempFavs.filter(peli => {
                return peli.id !== movieFav.id;})
            localStorage.setItem('favs', JSON.stringify(moviesLeft))
        }
       
      }

export default addOrRemoveFavs;