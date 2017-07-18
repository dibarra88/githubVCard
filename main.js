let header = document.getElementById("bioHeader");
let bioInfo = document.getElementById("basics");
let story = document.getElementById("story");
let imgDiv = document.getElementById("pic");

// let request = new XMLHttpRequest();
// request.addEventListener("load", loadInfo);
// request.open('GET', 'https://api.github.com/users/dibarra88');
// request.send();

fetch("https://api.github.com/users/dibarra88")
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        loadInfo(data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });


function loadInfo(data) {
   // let data = JSON.parse(this.responseText);
    let basicsInfo = '';
    let storyContent = '';
    let imgURL = '';
    header.innerHTML = data.name;           //Main header
    imgURL = `<img src="${data.avatar_url}">` //img
    imgDiv.innerHTML += imgURL;

    //  BASICS
    basicsInfo = `<div><span>Name: </span>${data.name}<br />
            <span>Github URL:</span> <a href="${data.html_url}">GithubDiana</a><br />
            <span>Email:</span> blah@blah.com<br />
            <span>Company:</span> ${data.company}<br />
            <span>Website:</span> <a href="${data.blog}">Don't have one</a></div>`

    bioInfo.innerHTML += basicsInfo;

    //   STORY
    storyContent = `<div id="storyDiv"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec enim lectus.
             Duis tincidunt nulla nec ante venenatis, ut convallis eros tempor. Maecenas aliquet enim id ante imperdiet pharetra. 
             Nam vitae euismod tellus. Integer et ultrices diam. Proin fringilla quis mauris dapibus blandit. Curabitur eu nibh diam. </p></div>`
    story.innerHTML += storyContent;
    console.log(data);
}