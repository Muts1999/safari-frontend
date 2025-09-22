// destinations.js

// Sample destination data
const destinations = [
  {
    id: "maasai-mara",
    title: "Maasai Mara, Kenya",
    description: "The Maasai Mara is Kenya's most famous safari destination, known for its rich wildlife and the Great Migration.",
    highlights: [
      "Big Five sightings",
      "Hot air balloon safaris",
      "Masai cultural experiences"
    ],
    tips: [
      "Best time to visit: July to October",
      "Carry binoculars and camera",
      "Book accommodations early during peak season"
    ],
    category: "kenya"
  },
  {
    id: "amboseli",
    title: "Amboseli, Kenya",
    description: "Amboseli National Park offers iconic views of Mount Kilimanjaro and large elephant herds.",
    highlights: [
      "Elephant herds",
      "Birdwatching",
      "Scenic landscapes with Mount Kilimanjaro"
    ],
    tips: [
      "Morning game drives are best for wildlife spotting",
      "Carry sun protection",
      "Respect local communities"
    ],
    category: "kenya"
  },
  {
    id: "serengeti",
    title: "Serengeti, Tanzania",
    description: "Serengeti National Park is a UNESCO World Heritage Site famous for the Great Migration.",
    highlights: [
      "Endless plains",
      "Annual migration",
      "Big cats and predators"
    ],
    tips: [
      "Visit during migration season for best experience",
      "Pack light and breathable clothing",
      "Use a 4x4 safari vehicle"
    ],
    category: "tanzania"
  }
];

// Function to display destination cards
function displayDestinations(filter = "all") {
  const list = document.getElementById("destination-list");
  list.innerHTML = "";

  const filtered = filter === "all"
    ? destinations
    : destinations.filter(d => d.category === filter);

  filtered.forEach(d => {
    const card = document.createElement("div");
    card.className = "card p-6";

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${d.title}</h3>
      <p class="mb-4">${d.description.substring(0, 100)}...</p>
      <a href="destination-template.html?id=${d.id}" class="btn-gold">Learn More</a>
    `;

    list.appendChild(card);
  });
}

// Initial display
displayDestinations();

// Filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    displayDestinations(category);
  });
});
