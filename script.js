let form = document.querySelector("form");
let text_top = document.querySelector(".top");
let text_bottom = document.querySelector(".bottom");
let img_link = document.querySelector(".img")

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(text_top.value === "" || text_bottom.value === "" || img_link.value === "") {
        alert("Please input all fields!");
    } else {
        constructMeme();
        form.reset();
    }
});

function constructMeme() {
    let div = document.createElement("div");
    let h3_top = document.createElement("h3");
    let h3_bottom = document.createElement("h3");
    let img = document.createElement("img");

    div.className = "wrapper";
    h3_top.setAttribute("id", "text-top");
    h3_bottom.setAttribute("id", "text-bottom");
    img.setAttribute("id", "image")

    h3_top.innerText = text_top.value;
    h3_bottom.innerText = text_bottom.value;
    img.src = img_link.value;

    document.body.appendChild(div);
    div.append(h3_top, img, h3_bottom);

    removeMeme(div);
}

function removeMeme(element) {
    element.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    });
}