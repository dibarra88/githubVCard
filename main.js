let header = document.getElementById("bioHeader");
let bioInfo = document.getElementById("basics");
let story = document.getElementById("story");
let imgDiv = document.getElementById("pic");

let request = new XMLHttpRequest();
request.addEventListener("load", loadInfo);
request.open('GET', 'https://api.github.com/users/dibarra88');
request.send();

function loadInfo() {
    let data = JSON.parse(this.responseText);
    let basicsInfo = '';
    let storyContent = '';
    let imgURL = '';
    header.innerHTML = data.name;           //Main header
    imgURL = `<img src="${data.avatar_url}">` //img
    imgDiv.innerHTML += imgURL;

    //  BASICS
    basicsInfo = `<div><span>Name: </span>${data.name}<br />
            <span>Github URL:</span> <a href="${data.html_url}">GithubDiana</a><br />
            <span>Email:</span><br />
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