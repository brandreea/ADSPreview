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

		 },	
        ro: {
            stack:'Stive si cozi',
			algo:'Algoritmi',
			bst:'Arbori binari de cautare',
			sdaalgotit:'Structuri de Date si Algoritmi'
        }
 };
 function changeLangtoEng(){
            	//DROPDOWN 
                    document.getElementById("stack").innerHTML=language.en.stack;
					document.getElementById("algo").innerHTML=language.en.algo;
					document.getElementById("bst").innerHTML=language.en.bst;
					document.getElementById("sdaalgotit").innerHTML=language.en.sdaalgotit;
					document.getElementById("lang").innerHTML=language.en.lang;
					document.getElementById("sda").innerHTML=language.en.sda;
					document.getElementById("aboutus").innerHTML=language.en.aboutus;
					
          
		  }