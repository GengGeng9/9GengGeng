// JavaScript to handle photo uploads and gallery display
document.addEventListener("DOMContentLoaded", () => {
    const memberCount = 9;

    for (let i = 1; i <= memberCount; i++) {
        let inputElement = document.getElementById(`upload${i}`);
        let galleryElement = document.getElementById(`gallery${i}`);

        inputElement.addEventListener("change", (event) => {
            let file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    let img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = "gallery-img";
                    galleryElement.appendChild(img);
                }
                reader.readAsDataURL(file);
            }
        });
    }
});
