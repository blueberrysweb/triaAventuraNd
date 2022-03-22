const historia = [
  { txt: "Benvingut Vols llegir una història?", si: 1, no: 5 },
  {
    txt: "Aquesta història està formada per dues pàgines vols continuar?",
    si: 2,
    no: 5,
  },
  {
    txt: "Però realment estàs segur que vols llegir aquesta història?",
    si: 3,
    no: 5,
  },
  { txt: "Ok, perfecte vols començar la història, clica al si?", si: 4, no: 5 },
  {
    txt: "La història és llagar i interminable realment vols començar?",
    si: 5,
    no: 5,
  },
  {
    txt: "To he de torna a preguntar segur que no vols llegir aquesta història?",
    si: 4,
    no: -1,
  },
  { txt: "Adeu", si: -1, no: -1 },
];
let paginaActual = 0;

while (paginaActual >= 0) {
  console.log(llegeixPagina());
  const opcio = demanaOpcio();
  paginaActual = seguentPagina(opcio);
}
console.log("Història acabada");
function seguentPagina(opcioSP) {
  if (opcioSP === "si") return historia[paginaActual].si;
  return historia[paginaActual].no;
}

function demanaOpcio() {
  let readlineSync = require("readline-sync");
  return readlineSync.question("Si o NO? ");
}

function llegeixPagina() {
  return historia[paginaActual].txt;
}
