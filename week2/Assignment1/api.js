
fetch("https://picsum.photos/id/237/200/300").then (response =>{
    console.log(response);
    return response.blob();
})

.then(blob => {
    
    document.getElementById('api').src = URL.createObjectURL(blob)
        
    });












    fetch("https://picsum.photos/seed/picsum/200/300").then (response =>{
        console.log(response);
        return response.blob();
    })
    
    .then(blob => {
        
        document.getElementById('api2').src = URL.createObjectURL(blob)
            
        });
    
    
    
    
    
    
    
    
    
    
    
    


