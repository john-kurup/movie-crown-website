var button = document.getElementById('right1');
      button.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left1');
      back.onclick = function () {
         var container = document.getElementById('columnmain1');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }
 
      var button = document.getElementById('right2');
      button.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left2');
      back.onclick = function () {
         var container = document.getElementById('columnmain2');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



      var button = document.getElementById('right11');
      button.onclick = function () {
         var container = document.getElementById('columnmain11');
         sideScroll(container, 'right', 5, 300, 5);
      };

      var back = document.getElementById('left11');
      back.onclick = function () {
         var container = document.getElementById('columnmain11');
         sideScroll(container, 'left', 5, 300, 5);
      };

      function sideScroll(element, direction, speed, distance, step) {
         scrollAmount = 0;
         var slideTimer = setInterval(function () {
            if (direction == 'left') {
               element.scrollLeft -= step;

            } else {

               element.scrollLeft += step;

            } scrollAmount += step;

            if (scrollAmount >= distance) {
               window.clearInterval(slideTimer);

            }

         }, speed);
      }



 

      fetch('latest-movies.json')
      .then(response => response.json())
      .then(data => {
        const productListDiv = document.getElementById('columnmain11');

        // Loop through each item in the JSON data
        data.forEach(item => {
          // Create a card element
          const card = document.createElement('div');
          card.className = 'moviediv';

          // Create a link element
          const link = document.createElement('a');
          link.href = item.link;


          // Create an image element
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title;
          link.appendChild(image);
          image.className = 'imagemain';

          // Create a title element
          const title = document.createElement('div');
          title.className = 'movienamediv';
          title.textContent = item.title;
          link.appendChild(title);

          // Add the link to the card
          card.appendChild(link);

          // Add the card to the product list
          productListDiv.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });


      fetch('coming-soon.json')
      .then(response => response.json())
      .then(data => {
        const productListDiv = document.getElementById('coming-soon');

        // Loop through each item in the JSON data
        data.forEach(item => {
          // Create a card element
          const card = document.createElement('div');
          card.className = 'moviediv';

          // Create a link element
          const link = document.createElement('a');
          link.href = item.link;


          // Create an image element
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title;
          link.appendChild(image);
          image.className = 'imagemain';

          // Create a title element
          const title = document.createElement('div');
          title.className = 'movienamediv';
          title.textContent = item.title;
          link.appendChild(title);

          // Add the link to the card
          card.appendChild(link);

          // Add the card to the product list
          productListDiv.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

      fetch('ott-release.json')
      .then(response => response.json())
      .then(data => {
        const productListDiv = document.getElementById('ott-releases');

        // Loop through each item in the JSON data
        data.forEach(item => {
          // Create a card element
          const card = document.createElement('div');
          card.className = 'moviediv';

          // Create a link element
          const link = document.createElement('a');
          link.href = item.link;


          // Create an image element
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title;
          link.appendChild(image);
          image.className = 'imagemain';

          // Create a title element
          const title = document.createElement('div');
          title.className = 'movienamediv';
          title.textContent = item.title;
          link.appendChild(title);

          // Add the link to the card
          card.appendChild(link);

          // Add the card to the product list
          productListDiv.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });