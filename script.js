document.addEventListener("DOMContentLoaded", function () {
   const searchIcon = document.getElementById("search-icon");
   const searchForm = document.getElementById("search-form");
   const searchContainer = document.getElementById("search-container");

   searchIcon.addEventListener("click", function (event) {
      event.preventDefault();
      if (searchForm.style.display === "flex") {
         searchForm.style.display = "none";
      } else {
         searchForm.style.display = "flex";
         searchForm.querySelector('.search-box').focus();
      }
   });

   document.addEventListener("click", function (event) {
      if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
         searchForm.style.display = "none";
      }
   });

   const imageWrappers = document.querySelectorAll(".image-wrapper");

   // Function to remove 'enlarged' class from all image wrappers
   function resetImageSize() {
      imageWrappers.forEach(function (wrapper) {
         wrapper.classList.remove("enlarged");
      });
   }

   // Function to enlarge image on hover
   function enlargeOnHover() {
      clearInterval(interval); // Stop the automatic enlargement
      resetImageSize(); // Reset the size before enlarging a new image
      this.classList.add("enlarged");
   }

   // Function to restart automatic enlargement
   function startAutomaticEnlargement() {
      resetImageSize();
      interval = setInterval(function () {
         if (index < imageWrappers.length) {
            resetImageSize(); // Reset the size before enlarging a new image 
            imageWrappers[index].classList.add("enlarged");
            index++;
         } else {
            clearInterval(interval);
            index = 0; // Reset the index to start again
            // Restart the enlargement process
            interval = setInterval(function () {
               if (index < imageWrappers.length) {
                  resetImageSize(); // Reset the size before enlarging a new image
                  imageWrappers[index].classList.add("enlarged");
                  index++;
               } else {
                  clearInterval(interval);
                  index = 0; // Reset the index to start again
               }
            }, 2000);
         }
      }, 3000);
   }

   let index = 0;
   let interval = setInterval(function () {
      if (index < imageWrappers.length) {
         resetImageSize(); // Reset the size before enlarging a new image
         imageWrappers[index].classList.add("enlarged");
         index++;
      } else {
         clearInterval(interval);
         index = 0; // Reset the index to start again
         // Restart the enlargement process
         interval = setInterval(function () {
            if (index < imageWrappers.length) {
               resetImageSize(); // Reset the size before enlarging a new image
               imageWrappers[index].classList.add("enlarged");
               index++;
            } else {
               clearInterval(interval);
               index = 0; // Reset the index to start again
            }
         }, 2000);
      }
   }, 3000);

   // Add event listeners for hover
   imageWrappers.forEach(function (wrapper) {
      wrapper.addEventListener("mouseover", function () {
         enlargeOnHover.call(this);
         this.addEventListener("mouseleave", startAutomaticEnlargement);
      });
   });
});