const imgs = [
    "img1",
    "img2",
    "img3"
]

function render(imgs) {
    for (i = 0; i < imgs.length; i++) {
        let string += `<img src=${imgs[i]}>`;
    }
}
render(imgs);

container.innerHTML = string; 