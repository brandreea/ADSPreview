
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
/*ctx.moveTo(20, 25);
ctx.lineTo(20, 75);
ctx.moveTo(20,75);
ctx.lineTo(60, 75);
ctx.moveTo(60, 75);
ctx.lineTo(60,25)
ctx.moveTo(60,25);
ctx.lineTo(20,25);
ctx.stroke();*/

var	xup=60;
var	yup=25;
var cellsNo=1;
function addElement()
{	
   ctx.strokeStyle="black";
	ctx = c.getContext("2d");
	ctx.clearRect(0,0,500,100);
    ctx.moveTo(xup, yup);
	ctx.lineTo(xup+40, yup);
	ctx.moveTo(xup+40, yup);
	ctx.lineTo(xup+40,yup+50)
	ctx.moveTo(xup+40,yup+50);
	ctx.lineTo(xup,yup+50);
	xup=xup+40;
	cellsNo++;
	ctx.moveTo(xup, yup);
	
    ctx.stroke();
	
}
function deleteElement()
{
		
		
		ctx = c.getContext("2d");
		ctx.moveTo(x-50, 10);
		ctx.clearRect(x-50,10,x+10,90);
		ctx.clearRect(x-50,10,x+10,90);
		xup=xup-40;
		ctx.moveTo(x-50, 10);
		ctx.stroke();
		cellsNo--;

  
}
 window.onload = function(){
        getComments();
        }
      
        function getComments(){
        fetch("http://localhost:3000/comments")
        .then((data) => { return data.json() })
        .then((json) => displayComments(json))
        }

        function displayComments(data){
        let responseArea = document.getElementById('responseArea');
       
        for (let i = 0; i<data.length; i++){
		//document.getElementById('comentarii').children[0].innerHTML='<p id="commentName">' + data[0]["author"]+'</p><p id="commentContent">'+data[0]["comment"]+ "</p><br/>";
        
        let authorName = document.createElement('P');
        authorName.innerText = data[i]["author"];
		authorName.id="commentName";
        let commentContent = document.createElement('P');
		authorName.onclick="deleteCom(i)";
        commentContent.innerText = data[i]["comment"];
		commentContent.id="commentContent";
        let someRespone = document.createElement('DIV');
        someRespone.appendChild(authorName);
        someRespone.appendChild(document.createElement('br'))
        someRespone.appendChild(commentContent);
		//someRespone.border="grey";
		
       // someRespone.style.border = "1px solid blue";
		
        responseArea.appendChild(someRespone);
        }
        console.log('in Display');
        }

        function sendInformation(){
        let name = document.getElementById('name').value;
        let comment = document.getElementById('comment').value;
        let fullcom={
        author: name, comment: comment};
        
         
        fetch("http://localhost:3000/comments", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({author: name, comment: comment, id: 0})
        }).then((data) => {
        
        commentsCount++;
        return data.json()
        }).then((json)=>{
        if(json.Status === 'OK'){

        document.getElementById('responseArea').innerText='Information receieved';

        } else {
        document.getElementById('responseArea').innerText='Information was not received';
        }
        console.log(json);
        })
        }
		
		
		function deleteCom(butonId) {
    console.log('in delete');
    fetch("http://localhost:3000/delete", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({ id: butonId })
    }).then((data) => {
        return data.json()
    }).then((json) => {
        console.log(json);
        

    })

}
var language =
 {
        en: {
		//DROPDOWN
            stack:'Stacks and queues',
			algo:'Algorithms',
			bst:'Binary Search Trees',
			sdaalgotit:'Data Structures and Algorithms',
			lang:'Language',
			sda:'Data Strutures',
			aboutus:'About us'}
			};
function toEng()
{
    console.log("got here");
	document.getElementById("stack").innerHTML=language.en.stack;
	document.getElementById("algo").innerHTML=language.en.algo;
	document.getElementById("bst").innerHTML=language.en.bst;
	document.getElementById("sdaalgotit").innerHTML=language.en.sdaalgotit;
	document.getElementById("lang").innerHTML=language.en.lang;
	document.getElementById("sda").innerHTML=language.en.sda;
	document.getElementById("aboutus").innerHTML=language.en.aboutus;
	document.getElementById("bigtit").innerHTML="Stacks and Queues";
	//STACKS
	document.getElementById("stacktit").innerHTML="Stack";
	document.getElementById("stDef").innerHTML="A stack is a list in which we have access to the last inserted element.";
	document.getElementById("exp1").innerHTML="Thus, we can insert elements in one end and only from the same end can we remove elements, one at a time.";
	document.getElementById("exp2").innerHTML="If we want to access a certain element of the stack, it is necessary to remove all those who are 'above it' in order to reach it.";
	document.getElementById("exp3").innerHTML="This insertion principle is called LIFO (last in, first out) and involves extracting the elements from the list in reverse order of the insertion.";
	document.getElementById("oper").innerHTML="Operations";
	document.getElementById("top").innerHTML="tells us which is the first element in the order of insertion (the 'left' end of the list);";
	document.getElementById("push").innerHTML="add a new item at the same end of the list;";
	document.getElementById("pop").innerHTML="remove the last item from the list (top item ()).";
	document.getElementById("q").innerHTML="Queue";
	document.getElementById("qdef").innerHTML="A queue is a list where we only have access to the first inserted element.";
	document.getElementById("qexp1").innerHTML="Unlike stacks, we can insert elements in one end and only extract one from the other one at a time.";
	document.getElementById("qexp2").innerHTML="If we want to access a certain element in the queue, it is necessary to remove all those who are 'under' it in order to reach it.";
	document.getElementById("qexp3").innerHTML="This insertion principle is called FIFO (first in, first out) and involves extracting the elements from the list in the order of insertion.";
	document.getElementById("opQ").innerHTML="Operations";
	document.getElementById("topq").innerHTML="tells us which is the first element in the order of insertion (the 'left' end of the list)";
	document.getElementById("pushq").innerHTML="add a new element to the 'right' end of the list;";
	document.getElementById("popq").innerHTML="remove the first item from the list (top item ()).";
	document.getElementById("comments").innerHTML="Comments";
	
}