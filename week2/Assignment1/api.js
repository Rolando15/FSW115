
fetch("https://picsum.photos/id/237/200/300").then (response =>{
    console.log(response);
    return response.blob();
})

.then(blob => {
    
    document.getElementById('api').src = URL.createObjectURL(blob)
        
    });














