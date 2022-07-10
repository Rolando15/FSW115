var xhr = new XMLHttpRequest()
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/", true);
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
       
        let data = JSON.parse(xhr.responseText)
       showData(data.results)
    }
}
 function showData(data){
    console.log(data)
    for (let i = 0; i < data.length; i++){
        const characters = document.createElement('h4')
        characters.textContent = data[i].name
        document.body.appendChild(characters)
    }  
 }
 

