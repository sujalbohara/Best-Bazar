document.addEventListener("DOMContentLoaded", function () {
    const productData = [
        {
            category: "🔥 टॉप डील्स",
            backgroundColor: "#219ebc",
            fontColor: "#023047",
            products: [
                { store: "Best Bazaar", name: "Bingo Masala Tadka", weight: "75g", price: "₹13", originalPrice: "₹20", discount: "35% OFF", image: "https://www.jiomart.com/images/product/original/491696485/bingo-masala-tadka-tedhe-medhe-75-g-product-images-o491696485-p590333043-0-202501101847.jpg?im=Resize=(420,420)" },
                { store: "Best Bazaar", name: "Lay's Classic Salted", weight: "52g", price: "₹20", originalPrice: "₹30", discount: "33% OFF", image: "https://m.media-amazon.com/images/I/71oPL6sEwHL.jpg" },
                { store: "Best Bazaar", name: "Kurkure Masala Munch", weight: "90g", price: "₹25", originalPrice: "₹35", discount: "29% OFF", image: "https://m.media-amazon.com/images/I/71sOPzrW0mL._AC_UF1000,1000_QL80_.jpg" },
                { store: "Best Bazaar", name: "Bingo Masala Tadka", weight: "75g", price: "₹13", originalPrice: "₹20", discount: "35% OFF", image: "https://www.jiomart.com/images/product/original/491696485/bingo-masala-tadka-tedhe-medhe-75-g-product-images-o491696485-p590333043-0-202501101847.jpg?im=Resize=(420,420)" },
                { store: "Best Bazaar", name: "Lay's Classic Salted", weight: "52g", price: "₹20", originalPrice: "₹30", discount: "33% OFF", image: "https://m.media-amazon.com/images/I/71oPL6sEwHL.jpg" },
                { store: "Best Bazaar", name: "Kurkure Masala Munch", weight: "90g", price: "₹25", originalPrice: "₹35", discount: "29% OFF", image: "https://m.media-amazon.com/images/I/71sOPzrW0mL._AC_UF1000,1000_QL80_.jpg" }
            ]
        },
        {
            category: "🔥BUY 1 GET 1 FREE🔥",
            backgroundColor: "#219ebc",
            fontColor: "#023047",
            products: [
                { store: "Best Bazaar", name: "Parle G Biscuit", weight: "250g", price: "₹30", originalPrice: "₹40", discount: "25% OFF", image: "https://www.wbfoodbasket.com/cdn/shop/files/91eC2O5IN5L._SL1500.jpg?v=1707392665" },
                { store: "Best Bazaar", name: "Maggi 2-Minute Noodles", weight: "280g", price: "₹50", originalPrice: "₹65", discount: "23% OFF", image: "https://m.media-amazon.com/images/I/71Y7pDHbi8L._AC_UF1000,1000_QL80_.jpg" },
                { store: "Best Bazaar", name: "Britannia Good Day", weight: "200g", price: "₹40", originalPrice: "₹55", discount: "27% OFF", image: "https://m.media-amazon.com/images/I/71n1Q3cQL3L.jpg" }
            ]
        },
        {
            category: "🆕 नए उत्पाद",
            backgroundColor: "#219ebc",
            fontColor: "#023047",
            products: [
                { store: "Best Bazaar", name: "Parle G Biscuit", weight: "250g", price: "₹30", originalPrice: "₹40", discount: "25% OFF", image: "https://www.wbfoodbasket.com/cdn/shop/files/91eC2O5IN5L._SL1500.jpg?v=1707392665" },
                { store: "Best Bazaar", name: "Maggi 2-Minute Noodles", weight: "280g", price: "₹50", originalPrice: "₹65", discount: "23% OFF", image: "https://m.media-amazon.com/images/I/71Y7pDHbi8L._AC_UF1000,1000_QL80_.jpg" },
                { store: "Best Bazaar", name: "Britannia Good Day", weight: "200g", price: "₹40", originalPrice: "₹55", discount: "27% OFF", image: "https://m.media-amazon.com/images/I/71n1Q3cQL3L.jpg" }
            ]
        }
        
    ];

    const container = document.querySelector(".product-container");

    productData.forEach((section, index) => {
        const sectionWrapper = document.createElement("div");
        sectionWrapper.classList.add("product-row");

        const sectionTitle = document.createElement("h2");
        sectionTitle.classList.add("section-title");
        sectionTitle.textContent = section.category;

        // ✅ Set background and font color for "🔥 टॉप डील्स"
        if (section.backgroundColor && section.fontColor) {
            sectionTitle.style.backgroundColor = section.backgroundColor;
            sectionTitle.style.color = section.fontColor;
            sectionTitle.style.padding = "10px";
            sectionTitle.style.borderRadius = "5px";
            sectionTitle.style.display = "inline-block";
        }

        sectionWrapper.appendChild(sectionTitle);

        const scrollContainer = document.createElement("div");
        scrollContainer.classList.add("product-scroll");
        scrollContainer.setAttribute("id", `scroll-container-${index}`);

        section.products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;

            const weightLabel = document.createElement("div");
            weightLabel.classList.add("weight-label");
            weightLabel.textContent = product.weight;

            const storeName = document.createElement("p");
            storeName.classList.add("store-name");
            storeName.textContent = product.store;

            const productName = document.createElement("p");
            productName.classList.add("product-name");
            productName.textContent = product.name;

            const priceContainer = document.createElement("div");
            priceContainer.classList.add("price-container");

            const discountedPrice = document.createElement("span");
            discountedPrice.classList.add("discounted-price");
            discountedPrice.textContent = product.price;

            const originalPrice = document.createElement("span");
            originalPrice.classList.add("original-price");
            originalPrice.textContent = product.originalPrice;

            const discountBadge = document.createElement("span");
            discountBadge.classList.add("discount-badge");
            discountBadge.textContent = product.discount;

            priceContainer.appendChild(discountedPrice);
            priceContainer.appendChild(originalPrice);
            priceContainer.appendChild(discountBadge);

            const addToCartBtn = document.createElement("button");
            addToCartBtn.classList.add("add-to-cart");
            addToCartBtn.textContent = "Add";

            productCard.appendChild(img);
            productCard.appendChild(weightLabel);
            productCard.appendChild(storeName);
            productCard.appendChild(productName);
            productCard.appendChild(priceContainer);
            productCard.appendChild(addToCartBtn);

            scrollContainer.appendChild(productCard);
        });

        sectionWrapper.appendChild(scrollContainer);
        container.appendChild(sectionWrapper);
    });

    // Location detection functionality
    function getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Call Google Maps Geocoding API to get the address
                const apiKey = "AIzaSyCYIwdv1r_RiupS3ouo_Bez2GVyGxP8v2o"; // Replace with your Google Maps API Key
                const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

                fetch(geocodeUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === "OK") {
                            const address = data.results[0].formatted_address;
                            const locationElement = document.getElementById("current-location");
                            locationElement.textContent = address; // Display the address
                        } else {
                            const locationElement = document.getElementById("current-location");
                            locationElement.textContent = "Unable to fetch location address.";
                        }
                    })
                    .catch(error => {
                        const locationElement = document.getElementById("current-location");
                        locationElement.textContent = "Error fetching address.";
                        console.error("Error fetching address:", error);
                    });
            }, function (error) {
                const locationElement = document.getElementById("current-location");
                locationElement.textContent = "Unable to detect location.";
            });
        } else {
            const locationElement = document.getElementById("current-location");
            locationElement.textContent = "Geolocation not supported.";
        }
    }

    // Trigger location fetching
    const locationButton = document.querySelector(".location button");
    locationButton.addEventListener("click", getLocation);
});
