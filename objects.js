(function(){
    ("use strict")

    const body = document.querySelector("body");

    ///////////////////////////////////////Objects 1

    function objects1() {
        const section = document.createElement("section");
        body.appendChild(section);

        let cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function() {
              console.log('Meow!');
            }
          }
          
          // Put your code here
          
          let catName = cat[`name`];
          cat.greeting();
          cat.color = `black`;
          
          
          // Don't edit the code below here
          
          let para1 = document.createElement('p');
          let para2 = document.createElement('p');
          
          para1.textContent = `The cat's name is ${ catName }.`;
          para2.textContent = `The cat's color is ${ cat.color }.`;
          
          section.appendChild(para1);
          section.appendChild(para2);


    }

    objects1();

    function objects2() {
        const section = document.createElement("section");
        body.appendChild(section);

        let bandInfo;

        // Put your code here
        const band = {
        name:`Imagine Dragons`,
        nationality:`the U.S.`,
        genre:`Pop Rock`,
        members: 4, 
        formed:2008,
        split:false,
        albums:[[`Night Visions`, 2012],[`Smoke + Mirrors`, 2015]]
        }

        bandInfo = `${band.name} is a band from ${band.nationality} They focus on primarily ${band.genre} music. They have ${band.members} members and were formed in ${band.formed}. The name of their first album is ${band.albums[0][0]} and it was released in ${band.albums[0][1]}. `;

        // Don't edit the code below here

        let para1 = document.createElement('p');
        para1.textContent = bandInfo;
        section.appendChild(para1);


    }

    objects2();

    function objects3() {
        const section = document.createElement("section");
        body.appendChild(section);

        let cat = {
            name : 'Bertie',
            breed : 'Cymric',
            color : 'white',
            greeting: function() {
              console.log(`Hello, said `+this.name+` the `+this.breed+``)
            }
          }
          
          let cat2 = {
            name : `Dusty`,
            breed : `Persian`,
            color : `Tan`,
            greeting: function() {
              console.log(`Hello, said `+this.name+` the `+this.breed+``)
            }
          }
          cat.greeting();
          cat2.greeting();


    }

    objects3();

})()