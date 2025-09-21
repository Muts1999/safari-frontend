// Sample blogs data
const blogs = [
  {
    id: 1,
    title: "Top Safari Destinations in Kenya",
    excerpt: "Explore the most amazing safari spots in Kenya with our guide.",
    content: "<p>Full content for Top Safari Destinations...</p>",
    category: "destinations"
  },
  {
    id: 2,
    title: "Safari Tips for Beginners",
    excerpt: "Essential tips for anyone planning their first safari.",
    content: "<p>Full content for Safari Tips...</p>",
    category: "tips"
  },
  {
    id: 3,
    title: "Travel Guides for East Africa",
    excerpt: "Comprehensive guides for traveling across East Africa.",
    content: "<p>Full content for Travel Guides...</p>",
    category: "guides"
  },
  {
    id: 4,
    title: "Wildlife Photography Tips",
    excerpt: "Capture stunning wildlife photos with these tips.",
    content: "<p>Full content for Wildlife Photography...</p>",
    category: "tips"
  },
  {
    id: 5,
    title: "Luxury Safari Lodges",
    excerpt: "Discover the best luxury lodges for your safari adventure.",
    content: "<p>Full content for Luxury Safari Lodges...</p>",
    category: "destinations"
  }
];

// Render blogs with optional category filter
function renderBlogs(filterCategory = "all") {
  const container = document.getElementById("blog-posts");
  container.innerHTML = "";

  if (filterCategory === "all") {
    // Group by category
    const categories = ["destinations", "tips", "guides"];
    categories.forEach(cat => {
      const catBlogs = blogs.filter(blog => blog.category === cat);
      if (catBlogs.length > 0) {
        // Category heading
        const heading = document.createElement("h2");
        heading.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        heading.className = "text-2xl font-bold mb-4 col-span-3 theme-accent";
        container.appendChild(heading);

        // Blogs under this category
        catBlogs.forEach(blog => {
          const div = document.createElement("div");
          div.className = "rounded-lg shadow hover:shadow-lg overflow-hidden bg-white transition hover:scale-105 mb-6";
          div.innerHTML = `
            <h3 class="font-bold text-xl p-4">${blog.title}</h3>
            <p class="px-4 pb-4">${blog.excerpt}</p>
            <a href="blog-template.html?id=${blog.id}" class="block p-4 theme-accent font-semibold hover:underline">Read More</a>
          `;
          container.appendChild(div);
        });
      }
    });
  } else {
    const filtered = blogs.filter(blog => blog.category === filterCategory);

    if (filtered.length === 0) {
      container.innerHTML = "<p class='text-center col-span-3'>No posts found for this category.</p>";
      return;
    }

    filtered.forEach(blog => {
      const div = document.createElement("div");
      div.className = "rounded-lg shadow hover:shadow-lg overflow-hidden bg-white transition hover:scale-105 mb-6";
      div.innerHTML = `
        <h3 class="font-bold text-xl p-4">${blog.title}</h3>
        <p class="px-4 pb-4">${blog.excerpt}</p>
        <a href="blog-template.html?id=${blog.id}" class="block p-4 theme-accent font-semibold hover:underline">Read More</a>
      `;
      container.appendChild(div);
    });
  }
}

// Initialize filter buttons
function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      buttons.forEach(b => b.classList.remove("active"));
      // Add active class to clicked
      btn.classList.add("active");
      // Render blogs
      const category = btn.dataset.category;
      renderBlogs(category);
    });
  });
}

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs("all"); // Show all by default
  initFilters();
});
