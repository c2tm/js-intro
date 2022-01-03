(function() {
    ("use strict");
  
    const body = document.querySelector("body");
    //////////////////////////////////////////////////////// Math 1
    function math1() {
      const section = document.createElement("section");
      body.appendChild(section);
  
      
        let finalResult;

        let evenOddResult;

        // Add your code here
        let num1 = 12
        let num2 = 12
        let num3 = 5
        let num4 = 3

        numAdd = num1 + num2;

        numSub = num3 - num4;

        finalResult = numAdd * numSub;

        evenOddResult = finalResult % 2;

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
        para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
        const para2 = document.createElement('p');
        const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
        para2.textContent = evenOddResultCheck;

        section.appendChild(para1);
        section.appendChild(para2);
    }
  
    math1();

    ///////////////////////////////MATH 2

    function math2() {
        const section = document.createElement("section");
        body.appendChild(section);
        

        // Final result should be 10.42
        // Add/update your code here

        let result = (7 + 13) / (9 + 7);
        let result2 = 100 / (2 * 6);

        result = result * result2;

        let finalResult = result.toFixed(2);

        console.log(typeof finalResult);

        let finalNumber = Number(finalResult);

        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        para1.textContent = `Your finalResult is ${ finalResult }`;
        const para2 = document.createElement('p');
        const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
        para2.textContent = finalNumberCheck;

        section.appendChild(para1);
        section.appendChild(para2);

    }

    math2();

    /////////////////////////////////////MATH 3

    function math3(){
        const section = document.createElement("section");
        body.appendChild(section);


        // Statement 1: The elephant weights less than the mouse
        const eleWeight = 1000;
        const mouseWeight = 2;



        // Statement 2: The Ostrich is taller than the duck
        const ostrichHeight = 2;
        const duckHeight = 0.3;

        // Statement 3: The two passwords match
        const pwd1 = 'stromboli';
        const pwd2 = 'stROmBoLi';


        // Add your code here
        let weightComparison;
        let heightComparison;
        let pwdMatch;

        if(eleWeight > mouseWeight) {
            weightComparison = false;
        } else {
            weightComparison = true;
        }

        if(ostrichHeight > duckHeight) {
            heightComparison = true;
        } else {
            heightComparison = false;
        }

        if(pwd1 === pwd2) {
            pwdMatch = true;
        } else {
            pwdMatch = false;
        }


        // Don't edit the code below here!

        section.innerHTML = ' ';
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');

        const weightTest = weightComparison ? 'True — elephants weight less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
        const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';
        const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

        para1.textContent = weightTest;
        section.appendChild(para1);
        para2.textContent = heightTest;
        section.appendChild(para2);
        para3.textContent = pwdTest;
        section.appendChild(para3);

    }

    math3();




  })();