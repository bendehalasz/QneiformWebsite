document.addEventListener('DOMContentLoaded', function() {
    // Get all images in the body
    const images = document.querySelectorAll('.container img');

    const displayed_images =  document.querySelectorAll('.displayed-images');


    // Add click event listener to each image
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        // Get the source of the clicked image
        const clickedSrc = this.getAttribute('src');
        image.classList.add("hide");

        console.log(clickedSrc);

        // Loop through all images and add or remove the "show-img" class based on the source
        displayed_images.forEach(function(img_div) {
            img = img_div.querySelector('img')
          const imgSrc = img.getAttribute('src');

          if (imgSrc === clickedSrc) {
            img_div.classList.add('show-img');
          } else {
            img_div.classList.remove('show-img');
          }
        });
      });
    });

    const closeButtons = document.querySelectorAll('.displayed-images button');
    closeButtons.forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            console.log("pressed")
            displayed_images.forEach(function(img_div) {
            img_div.classList.remove('show-img');
            });
            images.forEach(function(image) {
                image.classList.remove("hide");

            });
        });
    });
  });