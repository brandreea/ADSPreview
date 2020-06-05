function getComments() {
  fetch('http://localhost:3000/comments')
    .then(data => {
      return data.json();
    })
    .then(json => displayComments(json));
}

function displayComments(data) {
  let responseArea = document.getElementById('response-area');

  for (let i = 0; i < data.length; i++) {
    let fieldset = document.createElement('FIELDSET');
    fieldset.name = data[i]['id'];
    let authorName = document.createElement('input');
    authorName.type = 'text';
    authorName.value = data[i]['author'];
    authorName.readOnly = true;
    let commentContent = document.createElement('input');
    commentContent.id = 'commentContent';
    commentContent.type = 'text';
    commentContent.value = data[i]['comment'];
    commentContent.readOnly = true;
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Sterge-ma';
    button.name = data[i]['id'];
    fieldset.appendChild(authorName);
    fieldset.appendChild(document.createElement('br'));
    fieldset.appendChild(commentContent);
    fieldset.appendChild(button);
    responseArea.appendChild(fieldset);
  }
  console.log('in Display');
}

function sendInformation() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;
  let fullcom = {
    author: name,
    comment: comment,
    id: Date.now(),
  };

  fetch('http://localhost:3000/comments', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ author: name, comment: comment, id: Date.now() }),
  })
    .then(data => {
      commentsCount++;
      return data.json();
    })
    .then(json => {
      if (json.Status === 'OK') {
        document.getElementById('response-area').innerText = 'Information receieved';
      } else {
        document.getElementById('response-area').innerText = 'Information was not received';
      }
      console.log(json);
    });
}

function deleteCom(commentId) {
  console.log('in delete');
  fetch('http://localhost:3000/delete', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({ id: commentId }),
  })
    .then(data => {
      return data.json();
    })
    .then(json => {
      console.log(json);
    });
}
function init() {
  document.getElementById('response-area').addEventListener('click', onClickDelete);
  getComments();
}
function onClickDelete(event) {
  console.log(event.target.name);
  const form = event.target;
  deleteCom(event.target.name);
  location.reload();
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
};
function toEng() {
  console.log('got here');
  document.getElementById('stack').innerHTML = language.en.stack;
  document.getElementById('algo').innerHTML = language.en.algo;
  document.getElementById('bst').innerHTML = language.en.bst;
  document.getElementById('sdaalgotit').innerHTML = language.en.sdaalgotit;
  document.getElementById('lang').innerHTML = language.en.lang;
  document.getElementById('sda').innerHTML = language.en.sda;
  document.getElementById('aboutus').innerHTML = language.en.aboutus;
  document.getElementById('bigtit').innerHTML = 'Stacks and Queues';
  //STACKS
  document.getElementById('stacktit').innerHTML = 'Stack';
  document.getElementById('stDef').innerHTML =
    'A stack is a list in which we have access to the last inserted element.';
  document.getElementById('exp1').innerHTML =
    'Thus, we can insert elements in one end and only from the same end can we remove elements, one at a time.';
  document.getElementById('exp2').innerHTML =
    "If we want to access a certain element of the stack, it is necessary to remove all those who are 'above it' in order to reach it.";
  document.getElementById('exp3').innerHTML =
    'This insertion principle is called LIFO (last in, first out) and involves extracting the elements from the list in reverse order of the insertion.';
  document.getElementById('oper').innerHTML = 'Operations';
  document.getElementById('top').innerHTML =
    "tells us which is the first element in the order of insertion (the 'left' end of the list);";
  document.getElementById('push').innerHTML = 'add a new item at the same end of the list;';
  document.getElementById('pop').innerHTML = 'remove the last item from the list (top item ()).';
  document.getElementById('q').innerHTML = 'Queue';
  document.getElementById('qdef').innerHTML =
    'A queue is a list where we only have access to the first inserted element.';
  document.getElementById('qexp1').innerHTML =
    'Unlike stacks, we can insert elements in one end and only extract one from the other one at a time.';
  document.getElementById('qexp2').innerHTML =
    "If we want to access a certain element in the queue, it is necessary to remove all those who are 'under' it in order to reach it.";
  document.getElementById('qexp3').innerHTML =
    'This insertion principle is called FIFO (first in, first out) and involves extracting the elements from the list in the order of insertion.';
  document.getElementById('opQ').innerHTML = 'Operations';
  document.getElementById('topq').innerHTML =
    "tells us which is the first element in the order of insertion (the 'left' end of the list)";
  document.getElementById('pushq').innerHTML = "add a new element to the 'right' end of the list;";
  document.getElementById('popq').innerHTML = 'remove the first item from the list (top item ()).';
  document.getElementById('comments').innerHTML = 'Comments';
}
