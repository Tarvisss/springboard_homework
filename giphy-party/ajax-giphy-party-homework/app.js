
const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(results){
    
    // let numOfGifs = results.data.length;
    // if(results.data.length != 0){
    let numOfGifs = results.data.length;
    if(numOfGifs){
let randomIdx = Math.floor(Math.random() * numOfGifs);
let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
let $newGif = $("<img>", {
  src: results.data[randomIdx].images.original.url,
  class: "w-100"
});
 $newCol.append($newGif);
$gifArea.append($newCol);





    }
}


/* handle form submission: clear search box & make ajax call */

async function retrieveGif(event){
    event.preventDefault();
  
    let searchTerm = $searchInput.val();
    console.log(searchTerm);
    $searchInput.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
        

      }
    });
    
    addGif(response.data);
}


  const form = document.getElementById('find-giphy');
  form.addEventListener('submit', retrieveGif);

//remove the fucking pics
  const removeBtn = document.getElementById('remove-gif');
removeBtn.addEventListener("click", (event) =>{
$gifArea.empty();
});


// const $gifArea = $("#gif-area");
// const $searchInput = $("#search");

// /* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   if (numResults) {
//     let randomIdx = Math.floor(Math.random() * numResults);
//     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
//     let $newGif = $("<img>", {
//       src: res.data[randomIdx].images.original.url,
//       class: "w-100"
//     });
//     $newCol.append($newGif);
//     $gifArea.append($newCol);
//   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//     }
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#remove").on("click", function() {
//   $gifArea.empty();
// });