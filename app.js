function NewRandQuote() {
    let newQuote = document.querySelector("#quote");
    newQuote.innerHTML = Newquote[Math.floor(Math.random() * Newquote.length)];
    var bgColor = getColor();
    document.getElementById("quote").style.color = bgColor;
    document.getElementById("author").style.color = bgColor;
    document.body.style.background = bgColor;
    document.getElementById("btn").style.background = bgColor;
   
}


let bouton = document.querySelector("#btn");
console.log(bouton);

bouton.addEventListener("click", NewRandQuote);

let Newquote = ['Un jour un mec a refuser de filer une clope à Chuck Norris. Depuis, on prévient sur tous les paquets que "Fumer tue".',
 'Hercule est un demi-dieu, Dieu est un demi-Chuck Norris', 'Chuck Norris est le seul homme à posséder une bible dédicacée.',
  "Quand Chuck Norris se fait un pavé de saumon mi-cuit, c'est déjà la fin pour ses ennemis", 'Quand Chuck Norris regarde la vérité en face, elle baisse les yeux',
"Un jour, Chuck Norris a courru si vite qu'il a failli se rentrer dedans.","Quand Chuck Norris fait une erreur lors de l'examen d'histoire, l'histoire change",
"Chuck Norris x 0 = Chuck Norris. On élimine pas Chuck Norris aussi facilement.","Un jour, un canard et un castor se sont foutu de la gueule de Chuck Norris. Depuis, l'ornithorynque a vraiment l'air d'un con.",
"Selon certaines sources, il y aurait un spermatozoïde de Chuck Norris dans un lac écossais..."];


function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  
 

