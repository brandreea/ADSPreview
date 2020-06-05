var language = {
  en: {
    //DROPDOWN
    stack: 'Stacks and queues',
    algo: 'Algorithms',
    bst: 'Binary Search Trees',
    sdaalgotit: 'Data Structures and Algorithms',
    lang: 'Language',
    sda: 'Data Strutures',
    aboutus: 'About us',
  },
  ro: {
    stack: 'Stive si cozi',
    algo: 'Algoritmi',
    bst: 'Arbori binari de cautare',
    sdaalgotit: 'Structuri de Date si Algoritmi',
  },
};
function changeLangtoEng() {
  //DROPDOWN
  document.getElementById('stack').innerHTML = language.en.stack;
  document.getElementById('algo').innerHTML = language.en.algo;
  document.getElementById('bst').innerHTML = language.en.bst;
  document.getElementById('sdaalgotit').innerHTML = language.en.sdaalgotit;
  document.getElementById('lang').innerHTML = language.en.lang;
  document.getElementById('sda').innerHTML = language.en.sda;
  document.getElementById('aboutus').innerHTML = language.en.aboutus;
}
let j = 0;
const title = 'STRUCTURI DE DATE SI ALGORITMI';
let firstHalf = '';
let secondHalf = '';
function typeWriter() {
  console.log('here');
  if (j < title.length / 2) {
    firstHalf += title.charAt(j);
    secondHalf = title.charAt(title.length - j - 1) + secondHalf;
    document.getElementById('sdaalgo').innerHTML = firstHalf + secondHalf;
    // document.getElementById('sdaalgo').innerHTML += title.charAt(j);
    j++;
    setTimeout(typeWriter, 100);
  }
}
