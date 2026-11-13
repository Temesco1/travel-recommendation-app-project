
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsContainer = document.getElementById("results");

const destinations = [
    {
        name: "Maldives Beach",
        category: "beach",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
        description: "Enjoy beautiful beaches and clear blue waters."
    },
    {
        name: "Bora Bora",
        category: "beach",
        country: "French Polynesia",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        description: "Discover a tropical paradise."
    },
    {
        name: "Eiffel Tower",
        category: "temple",
        country: "France",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        description: "Explore the famous landmark of Paris."
    },
    {
        name: "Taj Mahal",
        category: "temple",
        country: "India",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        description: "Visit India's famous historic monument."
    },
    {
        name: "Japan",
        category: "country",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        description: "Experience Japanese culture and scenery."
    },
    {
        name: "Italy",
        category: "country",
        country: "Italy",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
        description: "Discover the beauty of Italy."
    }
];

function displayResults(items) {
    resultsContainer.innerHTML = "";

    if (items.length === 0) {
        resultsContainer.innerHTML = "<p>No destinations found. Try another search.</p>";
        return;
    }

    items.forEach(place => {
        const card = document.createElement("div");
        card.className = "result-card";

        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <p><strong>Country:</strong> ${place.country}</p>
        `;

        resultsContainer.appendChild(card);
    });
}

function searchDestinations() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    const matches = destinations.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.category.toLowerCase().includes(query) ||
        place.country.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query)
    );

    displayResults(matches);
}

searchBtn.addEventListener("click", searchDestinations);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchDestinations();
    }
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    resultsContainer.innerHTML = "";
});