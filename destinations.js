// destinations.js

// Sample destination data
const destinations = [
  {
    id: "maasai-mara",
    title: "Maasai Mara, Kenya",
    description: "The Maasai Mara is one of the most celebrated safari destinations in Africa, renowned for its breathtaking landscapes, abundant wildlife, and rich cultural heritage. Rolling savannah plains stretch as far as the eye can see, dotted with acacia trees and home to one of the highest concentrations of animals on the continent. The reserve is especially famous for the annual Great Migration, when millions of wildebeest, zebras, and gazelles thunder across the Mara River in search of greener pastures, attracting predators like lions, cheetahs, and crocodiles in a dramatic battle for survival. Beyond the migration, visitors can encounter the Big Five and a diverse array of other species throughout the year.\n\nEqually captivating are the cultural experiences with the Maasai people, whose traditions and way of life remain deeply connected to the land. Hot air balloon safaris offer a unique perspective, with sweeping aerial views of the sunrise illuminating the plains below. Whether you are seeking adventure, photography, or simply a deep connection with nature, the Maasai Mara offers an unforgettable safari experience that perfectly embodies the spirit of Africa.",
    category: "kenya"
  },
  {
    id: "amboseli",
    title: "Amboseli, Kenya",
    description: "Amboseli National Park is a land of striking contrasts, where vast open plains meet the dramatic backdrop of snow-capped Mount Kilimanjaro, the tallest mountain in Africa. The park is world-famous for its large herds of elephants, often photographed against the majestic silhouette of Kilimanjaro, creating one of the most iconic safari scenes. In addition to elephants, Amboseli is home to an impressive variety of wildlife including lions, cheetahs, giraffes, and over 400 species of birds, making it a paradise for nature lovers and photographers alike.\n\nWhat makes Amboseli unique is the presence of seasonal swamps and wetlands fed by underground rivers from Kilimanjaro’s glaciers, which attract wildlife even during the dry season. Visitors can also engage with the local Maasai communities, learning about their customs and traditions. With its extraordinary landscapes, close-up wildlife encounters, and cultural richness, Amboseli provides an intimate safari experience that is as awe-inspiring as it is memorable.",
    category: "kenya"
  },
  {
    id: "serengeti",
    title: "Serengeti, Tanzania",
    description: "The Serengeti National Park is a UNESCO World Heritage Site and one of the most iconic safari destinations in the world. Its name, derived from the Maasai word 'Siringet,' meaning 'endless plains,' perfectly describes the vast golden savannahs that stretch beyond the horizon. The park is home to the legendary Great Migration, where over two million wildebeest, zebras, and gazelles embark on a circular journey across the plains in search of food and water, pursued closely by predators in one of nature’s most spectacular dramas.\n\nBeyond the migration, the Serengeti offers year-round opportunities to witness incredible wildlife encounters, from prides of lions basking in the sun to elusive leopards resting in acacia trees and cheetahs sprinting across the plains. The park is also rich in birdlife, with more than 500 species recorded. Visitors can enjoy a variety of safari experiences, from traditional game drives to balloon safaris that reveal the immensity of the landscape at sunrise. A journey through the Serengeti is not just a wildlife adventure but a profound connection with one of Earth’s most pristine ecosystems.",
    category: "tanzania"
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Crater, Tanzania",
    description: "The Ngorongoro Crater is often described as the eighth wonder of the world, and for good reason. This vast, unbroken volcanic caldera is the largest of its kind on Earth and shelters a self-contained ecosystem teeming with wildlife. Its grasslands, swamps, and forests support an extraordinary density of animals, including elephants, hippos, lions, zebras, and wildebeest. The crater floor is also one of the few places in Tanzania where visitors may encounter the endangered black rhino, making it a must-visit destination for those hoping to see the Big Five in a single day.\n\nBeyond the wildlife, the Ngorongoro Conservation Area is also home to the Maasai people, who continue to live in harmony with the land and its animals. The views from the crater rim are nothing short of breathtaking, offering sweeping panoramas that stretch across the 260-square-kilometer basin below. Whether you are standing at the edge of the rim or exploring its fertile plains, the Ngorongoro Crater offers a safari experience that blends natural wonder with cultural heritage in a way few other places can match.",
    category: "tanzania"
  },
  {
    id: "ol-pejeta",
    title: "Ol Pejeta Conservancy, Kenya",
    description: "Ol Pejeta Conservancy, located in the foothills of Mount Kenya, is a trailblazer in wildlife conservation and one of East Africa’s most remarkable safari destinations. It is home to the last two northern white rhinos on Earth, making it a place of profound significance for global conservation. The conservancy also shelters thriving populations of black rhinos, lions, elephants, and chimpanzees, offering visitors a chance to encounter species rarely seen elsewhere in Kenya.\n\nWhat sets Ol Pejeta apart is its unique combination of safari adventure and conservation innovation. Visitors can participate in behind-the-scenes experiences, such as learning about rhino protection efforts, visiting the Sweetwaters Chimpanzee Sanctuary, or joining rangers on patrol. Alongside its wildlife, the conservancy promotes sustainable tourism and supports surrounding communities, creating a holistic model of conservation. For travelers seeking a safari that is both thrilling and meaningful, Ol Pejeta is a destination that leaves a lasting impression.",
    category: "kenya"
  },
  {
    id: "lake-nakuru",
    title: "Lake Nakuru, Kenya",
    description: "Lake Nakuru National Park is a jewel of Kenya’s Rift Valley, famed for its shimmering alkaline lake and the dramatic landscapes that surround it. The park has long been associated with flocks of flamingos that turn the lake’s surface into a sea of pink, though it is also a sanctuary for a wide array of other wildlife. It is one of Kenya’s best places to spot both black and white rhinos, as well as Rothschild’s giraffes, lions, leopards, and a rich variety of bird species.\n\nThe park’s diverse habitats, ranging from acacia woodlands to open grasslands, provide stunning backdrops for game drives and photography. Scenic viewpoints such as Baboon Cliff and Lion Hill offer panoramic views of the lake and surrounding terrain. Compact and easily accessible, Lake Nakuru is a perfect safari destination for those looking to combine spectacular scenery, excellent wildlife viewing, and a sense of tranquility within a short visit.",
    category: "kenya"
  },
  {
    id: "tarangire",
    title: "Tarangire, Tanzania",
    description: "Tarangire National Park is often described as Tanzania’s hidden gem, offering a more intimate safari experience compared to its more famous neighbors. The park is best known for its ancient baobab trees and its large elephant populations, which are among the most concentrated in East Africa. During the dry season, the Tarangire River becomes a lifeline, drawing thousands of animals from the surrounding areas. Visitors can witness dramatic gatherings of elephants, wildebeest, zebras, and giraffes along its banks, while predators lie in wait nearby.\n\nTarangire is also a paradise for birdwatchers, with over 500 species recorded, including vibrant lovebirds, hornbills, and birds of prey. Its rolling hills, seasonal swamps, and open woodlands create a varied and picturesque landscape that feels both wild and untouched. For travelers seeking a quieter safari destination with rich wildlife and striking scenery, Tarangire offers an experience that is authentic, serene, and unforgettable.",
    category: "tanzania"
  },
  {
    id: "lake-manyara",
    title: "Lake Manyara, Tanzania",
    description: "Lake Manyara National Park may be smaller in size, but it delivers a safari experience full of surprises and diversity. The park is set against the dramatic backdrop of the Great Rift Valley escarpment, with its centerpiece being the soda lake that attracts vast numbers of flamingos and other waterbirds. Beyond its birdlife, Lake Manyara is famous for its tree-climbing lions, a rare behavior that adds a touch of mystery to the park’s character. Elephants, giraffes, hippos, and troops of baboons are also commonly seen roaming the park.\n\nThe park’s varied landscapes, from groundwater forests and acacia woodlands to grassy floodplains and hot springs, make it one of the most scenic in Tanzania. Visitors can explore its beauty through game drives, walking safaris, or even canopy walks that provide a different perspective of the forest. Compact and easily accessible, Lake Manyara is often visited as part of a northern Tanzania safari circuit, offering a refreshing contrast to the larger parks and leaving travelers with vivid memories of its charm.",
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
    card.className = "card text-center p-4"; // compact card styling

    card.innerHTML = `
      <h3 class="text-base font-semibold mb-2">${d.title}</h3>
      <p class="mb-3 text-xs text-gray-600">${d.description.substring(0, 100)}...</p>
      <a href="destination-template.html?id=${d.id}" class="theme-accent text-sm font-semibold hover:underline">Learn More</a>
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
