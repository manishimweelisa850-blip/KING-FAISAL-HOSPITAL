const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll("img");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    let index = 0;

    function showSlide(i) {
        if (i >= images.length) index = 0;
        if (i < 0) index = images.length - 1;

        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index++;
        showSlide(index);
    });

    prev.addEventListener("click", () => {
        index--;
        showSlide(index);
    });
});