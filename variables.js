(function() {
    ("use strict");
  
    const body = document.querySelector("body");
    //////////////////////////////////////////////////////// VARIABLES 1
    function variables1() {
      const section = document.createElement("section");
      body.appendChild(section);
  
      // Add your code here
  
      let myName;
      myName = "Connor";
      const myAge = 21;
  
      // Don't edit the code below here!
  
      section.innerHTML = " ";
      const para1 = document.createElement("p");
      para1.textContent = myName;
      const para2 = document.createElement("p");
      para2.textContent = myAge;
      section.appendChild(para1);
      section.appendChild(para2);
    }
  
    variables1();
  
    //////////////////////////////////////////////////////// VARIABLES 2
  
    function variables2() {
      const section = document.createElement("section");
      body.appendChild(section);
  
      // Add your code here
  
      let myName = "Paul";
      myName = "Connor";
  
      // Don't edit the code below here!
  
      section.innerHTML = " ";
      const para = document.createElement("p");
      para.textContent = myName;
      section.appendChild(para);
    }
  
    variables2();
  
    //////////////////////////////////////////////////////// VARIABLES 3
  
    function variables3() {
      const section = document.createElement("section");
      body.appendChild(section);
  
      // Add your code here
  
      let myName = "Default";
      myName = "Chris";
  
      let myAge = 42;
  
      // Don't edit the code below here!
  
      section.innerHTML = " ";
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      para1.textContent = myName;
      para2.textContent = `In 20 years, I will be ${myAge + 20}`;
      section.appendChild(para1);
      section.appendChild(para2);
    }
  
    variables3();
  })();