(function() {
    ("use strict");

    const body = document.querySelector("body");


    /////////////////////////////////////////String 1

    function string1() {

        const section = document.createElement("section")
        body.appendChild(section);
        

        // Add your code here

        const quoteStart = `Don't judge each day by the harvest you reap `;
        const quoteEnd = `but by the seeds that you plant`;

        let finalQuote = quoteStart + quoteEnd;

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = finalQuote;

        section.appendChild(para1);

    }

    string1();


    //////////////////////////////////////////////String 2

    function string2() {
        const section = document.createElement("section");
        body.appendChild(section);

        const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
        const substring = 'green eggs and ham';

        // Add your code here
        let quoteLength = quote.length
        let index = quote.indexOf(substring);
        let revisedQuote = quote.slice(0, index + substring.length + 1);

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = `The quote is ${ quoteLength } characters long.`;
        const para2 = document.createElement('p');
        para2.textContent = revisedQuote;

        section.appendChild(para1);
        section.appendChild(para2);

    }

    string2();


    //////////////////////////////////////////////////String 3

    function string3() {
        const section = document.createElement("section");
        body.appendChild(section);

        const quote = 'I dO nOT lIke gREen eGgS anD HAM';

        // Add your code here

        let almFixedQuote = quote.toLowerCase();
        let fixedQuote = almFixedQuote.replace(`i`,`I`);

        fixedQuote = fixedQuote.replace("green eggs and ham", "broccolli");

        let finalQuote = `${fixedQuote}.`;



        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = fixedQuote;
        const para2 = document.createElement('p');
        para2.textContent = finalQuote;

        section.appendChild(para1);
        section.appendChild(para2);



    }

    string3();

    ///////////////////////////////////////////////String 4

    function string4() {
        const section = document.createElement("section");
        body.appendChild(section);

        const theorem = 'the Pythagorean theorem';

        const a = 5;
        const b = 8;

        const myString = `Using ${theorem}, 
        we can work out that that if the two shortest sides of a right-angled
         triangle have lengths of ${a} and ${b}, the length of the hypotenuse is 
         ${Math.sqrt((a * a) + (b * b))}.`;

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = myString;

        section.appendChild(para1);


    }

    string4();




})();