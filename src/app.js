import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let pronouns = ['the', 'our'];
  let adjectives = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.io'];

  let domainList = document.getElementById('domainList');

  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        for (let ext of extensions) {
          let fullDomain = p + a + n + ext;
          addToList(fullDomain);
        }
      }
    }
  }

  function addToList(domain) {
    const li = document.createElement('li');
    li.textContent = domain;
    domainList.appendChild(li);
  }

  console.log();
};
