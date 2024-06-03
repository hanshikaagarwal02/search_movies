const form=document.querySelector('form');
const input=document.querySelector('#inp');
const list=document.querySelector('#list')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(inp.value);
    getMovies(inp.value);
    inp.value=' ';
    list.innerText=' ';

})

function getMovies(searchText){
    const URL=`https://api.tvmaze.com/search/shows?q=${searchText}`;
    //console.log(URL);

    axios.get(URL)
        .then((res)=>{
            for(let MovieItem of res.data){
                if(MovieItem.show.image){
                    

                    const image=document.createElement('img');
                    image.setAttribute('src',MovieItem.show.image.medium);
                    image.style.margin='10px';

                    console.log(image);
                    list.append(image);
                    
                }
               
            }
            
        })
}