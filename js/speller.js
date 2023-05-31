export default {
  check,
  lookup,
};

// prettier-ignore
const testArr = [
  "accept","access","accessibilities","accrete","accrual","accuracy","accuse","aces","ache",
  "acids","acne","acorn","action","agitation","agnostic","ago","alimony","alpacas","america",
  "american","amish","amputate","amputation","aspirin","attention","auction","autistic","bacon",
  "ballistic","banana","band","bane","bank","baptism","barf","base","bay","bears","because",
  "beers","berserk","body","bone","bonfire","boo","boy","brain","brains","bro","brunch","bunch",
  "burn","busy","butane","cacti","cafe","camp","can","candy","candycane","canine","cannibal",
  "cap","car","cheers","china","chocolate","clock","coffees","cone","cook","counts","cover","cow",
  "coy","coyote","cufflinks","cuisine","cup","cute","cuteness","cyborg","cyclic","cyclone",
  "cynics","dyes","dynamic","dynamite","dynamo","dynasties","dysfunctional","erosion","erotic",
  "erupt","essence","faces","false","fat","fear","feline","fence","fetish","fibs","final","fire",
  "flash","flog","flow","fog","forever","fraction","frog","frolic","fry","fun","function",
  "functional","functions","fusion","gala","gasp","gear","gene","generation","genesis","genius",
  "hack","hacker","hackers","halos","harp","has","hats","heat","heinous","helicopter","heretic",
  "honk","hook","hose","hundreds","hymn","hymnal","hyperbolic","icky","icon","inclines","inspire",
  "insulin","iron","irresponsibilities","kick","kind","knife","knits","know","krypton","lab",
  "lady","lifespan","lips","lubrication","lucky","mock","mockery","more","motion","mouse","neon",
  "nits","notification","nun","osmosis","ostentatious","pancreas","papyrus","patcher","patchier",
  "phone","physics","pirate","play","player","poacher","poison","police","polish","posh","pounds",
  "preparer","pretender","psychic","puffer","raccoon","rage","recluse","rescues","researh",
  "resin","responsibilities","retina","reunite","reverse","rhubarb","rub","ruby","ruin","run",
  "rune","rush","sack","sag","salvation","sarcasm","sassy","satin","scallion","scandal","scares",
  "scotch","septic","sickness","siphon","skunk","sniper","snowy","soccer","sociopath","spam",
  "span","spin","sure","tavern","taxes","teach","team","tetanus","tether","that","thin","think",
  "tick","ticklish","under","unicorns","union","unreal","use","utah","vaccine","vampire","verse",
  "violin","virus","viscosities","voice","vote","war","wash","wasp","watch","water","what","when",
  "who","wife","wise","witch","with","won","wonder","wonky","yams","yards","yarn","yikes","you",
  "youth","yucky"
]
let elements;

await loadPeriodicTable();

console.log(elements);
const elementsSymbols = elements.map(el => el.symbol.toLowerCase());
const elementsSymbolsSet = new Set(elementsSymbols);

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch('periodic-table.json')).json();
}

function check(inputWord) {
  // TODO: determine if `inputWord` can be spelled
  // with periodic table symbols; return array with
  // them if so (empty array otherwise)
  if (
    !elementsSymbolsSet.has(inputWord[0]) &&
    !elementsSymbolsSet.has(inputWord.slice(0, 2))
  )
    return [];

  if (elementsSymbolsSet.has(inputWord.slice(0, 2))) {
    let result = [inputWord.slice(0, 2)].concat(check(inputWord.slice(2)));
    return result.join('') === inputWord ? result : [];
  }
  if (elementsSymbolsSet.has(inputWord[0])) {
    let result = [inputWord[0]].concat(check(inputWord.slice(1)));
    return result.join('') === inputWord ? result : [];
  }
}

// console.log(check('accept'));
// testArr.forEach(val => console.log(check(val)));

function lookup(elementSymbol) {
  // TODO: return the element entry based on specified
  // symbol (case-insensitive)
  return elements.find(
    el => el.symbol.toLowerCase() === elementSymbol.toLowerCase(),
  );
}
