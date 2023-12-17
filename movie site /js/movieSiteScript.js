const apilink = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dcc8fa53ba3259f2cdbe053a6bb7601b&page=1"
const img_path ="https://image.tmdb.org/t/p/w1280"
const searchApi ="https://api.themoviedb.org/3/search/movie?&api_key=dcc8fa53ba3259f2cdbe053a6bb7601b&query="

const important = document.getElementById("section")
const form =  document.getElementById("form")
const search = document.getElementById("query")

returnMovies(apilink)

function returnMovies(url){
    fetch(url).then(response => response.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(Element =>{ 
            const divCard = document.createElement("div")
            divCard.setAttribute("class","card")
            const divRow = document.createElement("div")
            divRow.setAttribute("class","row")
            const divColumn = document.createElement("div")
            divColumn.setAttribute("class","column")
            const image = document.createElement("img")
            image.setAttribute("class","thumbnail")
        
            const title = document.createElement("h3")
            title.setAttribute("id","title")
            const center = document.createElement("center") 

            title.innerHTML = Element.original_title
            image.src = img_path + Element.poster_path
            
            center.appendChild(image)
            divCard.appendChild(center)
            divCard.appendChild(title)
            divColumn.appendChild(divCard)
            divRow.appendChild(divColumn)
           important.appendChild(divRow)


        })
    })

}
form.addEventListener("submit",(e) => {
    e.preventDefault()
    important.innerHTML=""

    const searchItem = search.value 
    if (searchItem){
        returnMovies(searchApi+searchItem)
        search.value=""
    }
})
 
function darkLightmode(){

if (document.body.style.backgroundColor!= "white"){
   document.body.style.backgroundColor= "white"
   document.getElementById("buttontext").innerHTML= "<strong>DARK MODE</strong>" 
   
}
else{
    document.body.style.backgroundColor= 131720
   document.getElementById("buttontext").innerHTML= "<strong> LIGHT MODE</strong>" 
}
   
}