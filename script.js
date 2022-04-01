// import KurdishProverbs from "kurdish-proverbs"

// //You can use proverbs_only, proverbs_with_quotes or old_proverbs
// const generatedProverbs = KurdishProverbs.generate(1, 'random')

// //Print it
// console.log(generatedProverbs[0])

let getRandome = (from, to) => {
  return Math.floor(Math.random() * (to - from) + 1);
};

let btnQuote = document.querySelector('.new-quote');
let quoteEle = document.querySelector('.quote');
let authorEle = document.querySelector('#author');

let currentIndex;
let GenerateQuote = () => {
  let index = getRandome(0, Quotes.length - 1);
  while (currentIndex === index) {
    index = getRandome(0, Quotes.length - 1);
  }
  currentIndex = index;
  quoteEle.innerHTML = Quotes[index].quote;
  authorEle.innerHTML = Quotes[index].author;
};

Quotes = [
  { quote: 'Çi kurd .. Çi qird', author: 'Mihemed el elî' },
  { quote: 'Mejiye sivik .. Barê giran', author: 'Kurd' },
  {
    quote: 'Kî çax tu buye kundir .. Kî çax hituyê te kişya ',
    author: 'Berazî',
  },
  { quote: 'Xwedê derd dane .. derman jî dane', author: 'kurd' },
  {
    quote:
      'Kurdno ,malxerabno ,yan fêrî zimanê xwe bivin .. yan jî nebêjin em kurdin',
    author: 'Celadet Bedirxan',
  },
  {
    quote: 'Dar li ser Koka xwe .. Mirov li ser zimanê xwe şîn dibe',
    author: 'kurd',
  },
  { quote: 'Bera dil bi dil be .. Bera darê tûrê li mil be', author: 'kurd' },
  {
    quote: 'Dar li ser Koka xwe .. Mirov li ser zimanê xwe şîn dibe',
    author: 'kurd',
  },
  { quote: 'Heta destê te reş nebe .. Tama devê te xweşnabe', author: 'kurd' },
];

window.onload = GenerateQuote();

btnQuote.addEventListener('click', () => {
  GenerateQuote();
});
