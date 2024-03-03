// Define an array of objects containing cat information
const cats = [
  { name: "Miming", image: "miming.jpg" },
  { name: "Whitey", image: "whitey.jpg" },
  { name: "Orange", image: "orange.jpg" },
  { name: "Gray", image: "gray.jpg" },
  { name: "Oreo", image: "oreo.jpg" },
  { name: "Itim", image: "itim.jpg" },
  { name: "Abo", image: "abo.jpg" }
];

// Function to create and display cat cards
function displayCats() {
  const catContainer = document.getElementById("cat-container");

  cats.forEach(cat => {
    // Create a div element for the cat card
    const catCard = document.createElement("div");
    catCard.classList.add("cat-card");

    // Create an img element for the cat image
    const catImage = document.createElement("img");
    catImage.src = cat.image;
    catImage.alt = cat.name;
    catImage.classList.add("cat-image");

    // Create a paragraph element for the cat name
    const catName = document.createElement("p");
    catName.textContent = cat.name;

    // Append the cat image and name to the cat card
    catCard.appendChild(catImage);
    catCard.appendChild(catName);

    // Append the cat card to the cat container
    catContainer.appendChild(catCard);
  });
}

// Call the displayCats function to display the cat cards
displayCats();
