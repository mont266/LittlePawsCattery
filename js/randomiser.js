// Array of all the image URLs and their corresponding fullsize URLs
var images = [
    {
      url: "images/gallery/1.jpg",
      fullsizeUrl: "images/gallery/1-original.jpg"
    },
    {
      url: "images/gallery/2.jpg",
      fullsizeUrl: "images/gallery/2-original.jpg"
    },
    {
      url: "images/gallery/3.jpg",
      fullsizeUrl: "images/gallery/3-original.jpg"
    },
    {
      url: "images/gallery/4.jpg",
      fullsizeUrl: "images/gallery/4-original.jpg"
    },
    {
      url: "images/gallery/5.jpg",
      fullsizeUrl: "images/gallery/5-original.jpg"
    },
    {
      url: "images/gallery/6.jpg",
      fullsizeUrl: "images/gallery/6-original.jpg"
    },
    {
      url: "images/gallery/7.jpg",
      fullsizeUrl: "images/gallery/7-original.jpg"
    },
    {
      url: "images/gallery/7.jpg",
      fullsizeUrl: "images/gallery/7-original.jpg"
    },
    {
      url: "images/gallery/8.jpg",
      fullsizeUrl: "images/gallery/8-original.jpg"
    },
    {
      url: "images/gallery/9.jpg",
      fullsizeUrl: "images/gallery/9-original.jpg"
    },
    {
      url: "images/gallery/10.jpg",
      fullsizeUrl: "images/gallery/10-original.jpg"
    },
    {
      url: "images/gallery/11.jpg",
      fullsizeUrl: "images/gallery/11-original.jpg"
    },
    {
      url: "images/gallery/12.jpg",
      fullsizeUrl: "images/gallery/12-original.jpg"
    },
    {
      url: "images/gallery/13.jpg",
      fullsizeUrl: "images/gallery/13-original.jpg"
    },
    {
      url: "images/gallery/14.jpg",
      fullsizeUrl: "images/gallery/14-original.jpg"
    },
    {
      url: "images/gallery/15.jpg",
      fullsizeUrl: "images/gallery/15-original.jpg"
    },
    {
      url: "images/gallery/16.jpg",
      fullsizeUrl: "images/gallery/16-original.jpg"
    }
  ];
  
  // Get a reference to the gallery container
  var galleryContainer = document.querySelector(".isotope");
  
  // Randomly select 6 unique images
  var selectedImages = getRandomElements(images, 6);
  
  // Clear the existing gallery items
  galleryContainer.innerHTML = "";
  
  // Create and append new gallery items for the selected images
  selectedImages.forEach(function(image) {
    var galleryItem = document.createElement("div");
    galleryItem.className = "col-sm-6 col-lg-4 isotope-item";
    galleryItem.dataset.filter = "Type 1";
  
    var thumbnail = document.createElement("article");
    thumbnail.className = "thumbnail-classic";
  
    var figure = document.createElement("div");
    figure.className = "thumbnail-classic-figure";
    var img = document.createElement("img");
    img.src = image.url;
    img.alt = "";
    img.width = 370;
    img.height = 315;
    figure.appendChild(img);
  
    var caption = document.createElement("div");
    caption.className = "thumbnail-classic-caption";
    var captionContent = document.createElement("div");
  
    var title = document.createElement("h5");
    title.className = "thumbnail-classic-title";
    var link = document.createElement("a");
    link.href = image.fullsizeUrl;
    link.textContent = "View Fullsize";
    title.appendChild(link);
  
    captionContent.appendChild(title);
    caption.appendChild(captionContent);
  
    thumbnail.appendChild(figure);
    thumbnail.appendChild(caption);
  
    galleryItem.appendChild(thumbnail);
    galleryContainer.appendChild(galleryItem);
  });
  
  /**
   * Returns a random subset of elements from an array
   * @param {Array} array - The input array
   * @param {number} count - The number of random elements to select
   * @returns {Array} - An array containing the randomly selected elements
   */
  function getRandomElements(array, count) {
    var shuffled = array.slice();
    var selected = [];
    var i = array.length;
    var min = i - count;
    var temp;
    var index;
  
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
      selected.push(temp);
    }
  
    return
}