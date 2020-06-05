
var myVar = setInterval(myTimer, 1000);
var lg="ro";
	function myTimer()
	{	if(lg==='ro')
		document.getElementById("subhead").innerHTML= "Pe intelesul oricui.";
		else 
		document.getElementById("subhead").innerHTML= "For everybody.";
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
			aboutus:'About us',
		//HEADER
			sdaalgo:'Data Structures and Algorithms',
			subhead:'For everybody.',
		//SECTION2
			section2tit:'Take the first steps now.',
			subheadingsec2:'Broaden your problem solving knowledge in just a few easy steps.',
			st1:'Step 1',
			st2:'Step 2',
			st3:'Step 3',
			st1c:'Get used to the data structures',
			st2c:'Learn the optimal algorithms',
			st3c:'Solve problems like a pro',
		//SECTION3
			boutus3:'About us',
			startbtn:'Take the first steps.'
		 },	
        ro: {
            stack:'Stive si cozi',
			algo:'Algoritmi',
			bst:'Arbori binari de cautare',
			sdaalgotit:'Structuri de Date si Algoritmi',
			sdaalgo:'Structuri de Date si Algoritmi'
        }
 };
 function myTimers1()
	{
		   if(lg==="ro")
			document.getElementById("st1c").innerHTML="Familiarizeaza-te cu structurile de date.";
			else 
			document.getElementById("st1c").innerHTML=language.en.st1c;
	}
	function myTimers2()
	{
	if(lg==="ro")
	document.getElementById("st2c").innerHTML="Invata algoritmii eficienti.";
	else
	document.getElementById("st2c").innerHTML=language.en.st2c;
	}

	function myTimers3()
	{if(lg==="ro")
	document.getElementById("st3c").innerHTML="Rezolva probleme ca un profesionist.";
	else 
	document.getElementById("st3c").innerHTML=language.en.st3c;
	}
 function changeLangtoEng()
 {					lg="en";
					//THIS IS FIRST PAGE
					//NAVBAR
                    document.getElementById("stack").innerHTML=language.en.stack;
					document.getElementById("algo").innerHTML=language.en.algo;
					document.getElementById("bst").innerHTML=language.en.bst;
					document.getElementById("sdaalgotit").innerHTML=language.en.sdaalgotit;
					document.getElementById("lang").innerHTML=language.en.lang;
					document.getElementById("sda").innerHTML=language.en.sda;
					document.getElementById("aboutus").innerHTML=language.en.aboutus;
					//HEADER
					document.getElementById("subhead").innerHTML=language.en.subhead;
					document.getElementById("sdaalgo").innerHTML=language.en.sdaalgo;
					//SECTION 2
					document.getElementById("section2tit").innerHTML=language.en.section2tit;
					document.getElementById("subheadingsec2").innerHTML=language.en.subheadingsec2;
					document.getElementById("st1").innerHTML=language.en.st1;
					document.getElementById("st2").innerHTML=language.en.st2;
					document.getElementById("st3").innerHTML=language.en.st3;
					document.getElementById("st1c").innerHTML=language.en.st1c;
					document.getElementById("st2c").innerHTML=language.en.st2c;
					document.getElementById("st3c").innerHTML=language.en.st3c;
					//SECTION3
					document.getElementById("boutus3").innerHTML=language.en.boutus3;
					document.getElementById("startbtn").innerHTML=language.en.startbtn;
					
			}
	
function sortIt() {
    s = [ "Ana", "Ioana", "Campioana"];
    console.log(s);
    s.sort(function (a, b) {
        if (a <b) {
            return -1;
        }
        if (a == b) {
            return 0;
        }
        return 1;
    });
    console.log(s);

}

	