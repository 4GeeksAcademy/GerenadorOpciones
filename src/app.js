/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominios = [".net", ".com", ".es"];

  function combinaciones(pronoun, adjetives, names, dominios) {
    let combis = [];

    for (let pro of pronoun) {
      for (let adj of adjetives) {
        for (let nam of names) {
          for (let dom of dominios) {
            combis.push(pro + adj + nam + dom);
          }
        }
      }
    }
    document.getElementById("listado").innerText = combis.join("\n");
    return combis;
  }
  let result = combinaciones(pronoun, adj, noun, dominios);

  combinaciones(pronoun, adj, noun, dominios);

  console.log(result);
};
