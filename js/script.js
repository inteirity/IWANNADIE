document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".photo-grid img");
    const body = document.body;

    images.forEach((img) => {
        img.addEventListener("click", () => {
            // Create the overlay
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.style.display = "block";

            // Create the enlarged image
            const enlargedImg = document.createElement("img");
            enlargedImg.src = img.src; // Use the clicked image's source
            enlargedImg.alt = img.alt; // Copy the alt text for accessibility
            enlargedImg.classList.add("enlarged");

            // Append the enlarged image to the overlay
            overlay.appendChild(enlargedImg);

            // Append the overlay to the body
            body.appendChild(overlay);

            // Add click event to close the overlay
            overlay.addEventListener("click", () => {
                body.removeChild(overlay);
            });
        });
    });
});