// Counter Creation Code


// When the Content is Loaded, Run the event getVisitCount
window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

// The Url to the API will be stored in functionApi
const fucntionApi = '';
 
//Event 
const getVisitCount = () => {
    let count = 30
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        cosole.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}