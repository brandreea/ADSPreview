let eventLog = [];
const events = [
  'auxclick',
  'click',
  'contextmenu',
  'dblckick',
  // 'mousedown',
  // 'mouseenter',
  // 'mouseleave',
  // 'mousemove',
  // 'mouseover',
  // 'mouseout',
  // 'mouseup',
  'pointerlockchange',
  'pointerlockerror',
  'select',
  'wheel',
  'keydown',
  'keyup',
  'keypress',
];
const quiz = [
  {
    question: 'Ce timp de cautare are un arbore binar?',
    answers: [
      { content: 'O(n)', value: true },
      { content: 'O(logn)', value: false },
      { content: 'O(n^3)', value: false },
    ],
  },
  {
    question: 'Ce adancime are un arbore binar echilibrat?',
    answers: [
      { content: 'logn', value: false },
      { content: 'n', value: true },
      { content: 'n^2', value: false },
    ],
  },
  //   {
  //     question: '',
  //   },
];
if (window.location.hash) {
  if (window.location.hash === '#en') {
    //DROPDOWN
    stack.textContent = language.en.stack;
    algo.textContent = language.en.algo;
    bst.textContent = language.en.bst;
    sdaalgotit.textContent = language.en.sdaalgotit;
    lang.textContent = language.en.lang;
    sda.textContent = language.en.sda;
    aboutus.textContent = language.en.aboutus;
  }
}
function init() {
  render();
  const abreviations = document.querySelectorAll('abbr');
  abreviations.forEach(abreviation =>
    abreviation.addEventListener('click', onClickMoveToDefinitions)
  );
  let body = document.getElementById('bst-body');
  events.forEach(event => body.addEventListener(event, eventLogListener));
  document.getElementById('event-log').addEventListener('click', onClickRenderEvents);
  document.getElementById('age-form').addEventListener('submit', onSubmitAgeForm);
}
function render() {
  renderTest();
  renderDictionary();
}

function renderTest() {
  let test = document.getElementById('bst-test');
  for (let j = 0; j < quiz.length; j++) {
    let question = document.createElement('P');
    question.innerText = quiz[j].question;
    let form = document.createElement('FIELDSET');
    form.name = j.toString();
    const answers = quiz[j].answers;
    console.log(answers);
    for (let i = 0; i < answers.length; i++) {
      let ans = document.createElement('INPUT');
      ans.name = j;
      ans.type = 'checkbox';
      ans.id = j * answers.length + i;
      ans.value = answers[i].value;
      let label = document.createElement('LABEL');
      label.htmlFor = answers[i].content;
      label.innerText = answers[i].content;
      form.appendChild(ans);
      form.appendChild(label);
    }
    test.appendChild(question);
    test.appendChild(form);
  }
  let submit = document.createElement('BUTTON');
  submit.type = 'submit';
  submit.id = 'submit-test';
  submit.innerText = 'Submit';
  test.appendChild(submit);
  test.addEventListener('submit', checkForm);
}

function renderDictionary() {
  let dictionary = new Object();
  const dictionaryHTML = document.getElementById('dictionary');
  const abreviations = document.querySelectorAll('abbr');
  const definitions = document.querySelectorAll('dt');
  if (definitions.length > 0) return;
  console.log(abreviations);
  for (let i = 0; i < abreviations.length; i++) {
    if (dictionary[abreviations[i].innerText]) continue;
    let dt = document.createElement('DT');
    dt.textContent = abreviations[i].innerText;
    dictionaryHTML.appendChild(dt);
    let dd = document.createElement('DD');
    dd.textContent = abreviations[i].title;
    dictionaryHTML.appendChild(dd);
    dictionary[abreviations[i].innerText] = abreviations[i].title;
  }
}
function checkForm(event) {
  event.preventDefault();
  if (document.getElementById('submit-test').setEnabled == false) return;
  const form = event.target;
  const data = new FormData(form);
  const answers = Object.fromEntries(data);
  let count = 0;
  for (let i = 0; i < quiz.length; i++) {
    document.getElementById((i * 3).toString()).disabled = true;
    document.getElementById(i * 3 + 1).disabled = true;
    document.getElementById(i * 3 + 2).disabled = true;
    if (answers[i]) {
      if (answers[i] === 'true') count += 1;
    }
    console.log(quiz[i].answers);
  }
  console.log('Count:' + count);
  let color = quiz.length === count ? 'green' : 'red';
  document.getElementById('result').innerText =
    'Your result: ' + count.toString() + '/' + quiz.length.toString();
  document.getElementById('result').style.color = color;
  document.getElementById('submit-test').setEnabled = false;
}
function onClickMoveToDefinitions(event) {
  console.log('Onclick lstener');
  window.location.href = '#dictionary';
}

function onClickRenderEvents(event) {
  console.log(event);
  const eventLogContainer = document.getElementById('event-log-container');
  const button = document.getElementById(event.target.id);
  console.log(button);
  let list = document.createElement('DIV');
  list.id = 'event-log-list';
  eventLog.forEach(event => {
    let eventDetails = document.createElement('p');
    eventDetails.innerText = event.type + ' ' + event.timeStamp;
    list.appendChild(eventDetails);
  });
  eventLogContainer.append(list);
}
function eventLogListener(event) {
  eventLog.push(event);
  // console.log(eventLog);
  let list = document.getElementById('event-log-list');
  if (list == null) return;
  let newEvent = document.createElement('p');
  newEvent.innerText = event.type + ' ' + event.timeStamp;
  document.getElementById('event-log-list').appendChild(newEvent);
}

let date = new Date();
function onSubmitAgeForm(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const birthday = data.get('birthday').toString().split('#');
  date = new Date(birthday[1] + '/' + birthday[0] + '/' + birthday[2]);
  console.log(date);
  appendDate();
}

function appendDate() {
  console.log('function called');
  const fullAge = new Date() - date;
  const years = Math.floor(fullAge / 1000 / 60 / 60 / 24 / 365);
  const months = Math.floor(((fullAge / 1000 / 60 / 60 / 24) % 365) / 30);
  const days = Math.floor((fullAge / 1000 / 60 / 60 / 24) % 31);
  const hours = Math.floor((fullAge / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((fullAge / 1000 / 60) % 60);
  const seconds = Math.floor((fullAge / 1000) % 60);
  document.getElementById('full-age').innerText =
    years +
    ' years, ' +
    months +
    ' months,' +
    days +
    ' zile, ' +
    hours +
    ' ore, ' +
    minutes +
    'minute, ' +
    seconds +
    ' secunde.';
  setTimeout(appendDate, 1000);
}
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
