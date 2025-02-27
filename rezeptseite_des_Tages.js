function toggleMenu() {
  const menu = document.querySelector('.menubar');
  menu.classList.toggle('active');
}

let zutaten = [
  0.25, 62.25, 20, 0.5, 0.5, 0.25, 1.25, 0.75, 0.75, 0.25, 175, 25, 25, 50, 
];

let menge = 0;

function calculateResulte() {
  let testcontainer = document.getElementById("anzahl").value;
  if (testcontainer > 20 ) {
    alert("Bitte nur eine Zahl zwischen 1 und 20 eingeben.");
  } else if (testcontainer < 1) {
    alert("Bitte nur eine Zahl zwischen 1 und 20 eingeben.");
  } else {
    for (let index = 0; index < zutaten.length; index++) {
      menge = zutaten[index];
      let container = document.getElementById("anzahl").value;
      let result = eval(container * menge);
      let row = [
        document.getElementById("ergebniss0"),
        document.getElementById("ergebniss1"),
        document.getElementById("ergebniss2"),
        document.getElementById("ergebniss3"),
        document.getElementById("ergebniss4"),
        document.getElementById("ergebniss5"),
        document.getElementById("ergebniss6"),
        document.getElementById("ergebniss7"),
        document.getElementById("ergebniss8"),
        document.getElementById("ergebniss9"),
        document.getElementById("ergebniss10"),
        document.getElementById("ergebniss11"),
        document.getElementById("ergebniss12"),
        document.getElementById("ergebniss13"),
      ];
      row[index].innerHTML = result;
    }
  }
}
