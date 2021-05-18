const carouselContainer = document.querySelector(".slideshow");

const url = "https://alexberg.de/api/arctic-tours/wp-json/wc/store/products?per_page=4";

async function fetchPosts() {

    try {
        const response = await fetch(url);
        const slider = await response.json();

        carouselContainer.innerHTML = "";

        createSlider(slider)
        show();
    }

    catch(error) {
        console.log(error);
        carouselContainer.innerHTML = message("error", error);
    }
    
}

fetchPosts();

function createSlider(slider) {
    slider.forEach(function(sliders) {
        carouselContainer.innerHTML += `<div class="slideElements fade">
                                            <a href="post.html?id=${sliders.id}">
                                            <img src="${sliders.images[0].src}">
                                            <h1 class="title">${sliders.name}</h1>
                                            </a>
                                        </div>`;
    })
}