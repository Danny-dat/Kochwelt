function toggleMenu() {
  const menu = document.querySelector('.menubar');
  menu.classList.toggle('active');
}

let randomTitles = ["Gusseisen vs. Kupfer - Welche Pfanne ist besser?"];

let randomTitlesSecond = ["Warum ist Olivenöl so gesund?"];

let randomTitlesThierd = ["Kaltbeizen ist eine schonende Methode!"];

let randomText = [
"Beim Pfannenkauf stellt sich oft die Frage: Kupfer oder Gusseisen?" +
"Beide haben Vor- und Nachteile. Kupferpfannen sind bekannt für ihre" +
"exzellente Wärmeleitung. Sie reagieren schnell auf Temperaturänderungen" +
"und ermöglichen eine präzise Steuerung der Hitze. Ideal für empfindliche" +
"Gerichte wie Saucen oder Fisch. Allerdings sind sie recht empfindlich" +
"und benötigen eine regelmäßige Pflege, da sie leicht anlaufen können." +
"Gusseisenpfannen hingegen sind bekannt für ihre exzellente Wärmespeicherung." +
"Sie eignen sich perfekt zum Anbraten von Steaks oder Schmoren von" +
"Gerichten, da sie hohe Temperaturen halten. Allerdings sind sie schwer" +
"und brauchen etwas Pflege - regelmäßiges Einbrennen verhindert Rost." +
"Fazit: Kupfer für präzises, schnelles Braten und Gusseisen für langsames," +
"intensives Braten. Am besten? Beide im Küchenschrank haben!"
];

let randomTextSecond = [
 "Olivenöl ist nicht nur ein beliebtes Küchen-Grundnahrungsmittel, sondern auch ein echtes Gesundheitswunder. Besonders natives Olivenöl extra enthält viele ungesättigte Fettsäuren, insbesondere Ölsäure, die das Herz-Kreislaufsystem stärken und das Risiko von Herzkrankheiten senken. Es kann das 'gute' HDL-Cholesterin erhöhen und das 'schlechte' LDL-Cholesterin reduzieren.\n\n" +
"Ein weiterer Vorteil ist der hohe Gehalt an Antioxidantien, vor allem Polyphenolen wie Hydroxytyrosol, die Zellen vor Schäden schützen und entzündungshemmend wirken. Studien zeigen, dass Olivenöl auch den Blutdruck senken und den Blutzuckerspiegel stabilisieren kann.\n\n" +
"In der Küche ist es vielseitig einsetzbar – ideal für Salate, zum Verfeinern von Gerichten oder zum Braten. Hocherhitzbares Olivenöl behält seine Nährstoffe und wird nicht in schädliche Transfette umgewandelt.\n\n" +
"Fazit: Olivenöl ist nicht nur lecker, sondern auch gesund. Ein echter Alleskönner in der Küche!",
];

let randomTextThierd = [
  "Kaltbeizen ist eine schonende Methode, um Lebensmittel zu würzen und zu konservieren. Dabei werden Zutaten wie Fleisch, Fisch oder Gemüse mit einer Marinade aus Salz, Zucker, Säure und Gewürzen in kaltem Zustand behandelt. Diese Mischung sorgt für eine geschmackliche Entfaltung, ohne dass Hitze zum Einsatz kommt.\n\n" +
"Besonders bei Fisch wie Lachs oder Makrele bringt das Kaltbeizen eine zarte Textur und intensiven Geschmack. Auch Gemüse wie Gurken oder Rote Bete profitieren davon, da sie die Aromen der Marinade gut aufnehmen und ihre Frische bewahren. Die Beize fördert zudem die Haltbarkeit, was sie ideal für die Vorratshaltung macht.\n\n" +
"Wichtig ist die richtige Dosierung der Beize: Zu viel Salz kann die Zutaten austrocknen, zu wenig bewirkt keine geschmackliche Veränderung. Die Einwirkzeit variiert je nach Lebensmittel – von wenigen Stunden bis zu mehreren Tagen.\n\n" +
"Fazit: Kaltbeizen ist eine aromatische Methode, die Lebensmitteln Tiefe und Frische verleiht – perfekt für den Vorrat und außergewöhnliche Geschmackserlebnisse!",
];

let randomImg = ["img/potatoes-with-vegetables-2911156_1920.jpg"];

let randomImgSecond = ["img/olive-oil-968657_1920.jpg"];

let randomImgThierd = ["img/cuts-5098274_1920.jpg"];

function renderFiltered(index) {
  if (index == 1) {
    render(randomTitles, randomText, randomImg);
  }
  if (index == 2) {
    render(randomTitlesSecond, randomTextSecond, randomImgSecond);
  }

  if (index == 3) {
    render(randomTitlesThierd, randomTextThierd, randomImgThierd);
  }
}

function render(arrTitels, arrText, arrImg) {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let index = 0; index < arrTitels.length; index++) {
    contentRef.innerHTML += getNoteHtml(index, arrTitels, arrText, arrImg);
  }
}

function getNoteHtml(index, arrTitels, arrText, arrImg) {
  return `  <div class= "text_box">
                                     <h2>
                                         ${arrTitels[index]}
                                      </h2>
                                         <p>
                                         ${arrText[index]}
                                         </p>
                                    </div>
                                    <div> 
        <img
          src="${arrImg[index]}"
          alt=""
          class="img_global"
        />
      </div>`;
}
