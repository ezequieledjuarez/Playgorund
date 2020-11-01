fetch("https://api.chucknorris.io/jokes/random")
.then(function(response){
    return response.json()
})
.then(function(response){
    console.log(response)
})