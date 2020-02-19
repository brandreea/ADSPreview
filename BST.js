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

            if(window.location.hash)
            {	
                 if(window.location.hash==='#en')
                {	//DROPDOWN 
                    stack.textContent=language.en.stack;
					algo.textContent=language.en.algo;
					bst.textContent=language.en.bst;
					sdaalgotit.textContent=language.en.sdaalgotit;
					lang.textContent=language.en.lang;
					sda.textContent=language.en.sda;
					aboutus.textContent=language.en.aboutus;
					
                }

            }
