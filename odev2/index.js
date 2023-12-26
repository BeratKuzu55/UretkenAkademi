const galeri = document.getElementById("galeri");

const create_image=()=>{
    var img = document.createElement("img");
    var link = `https://source.unsplash.com/300x300?random=${Math.random()}`;
    img.src = link;
    galeri.appendChild(img);
}

for (let index = 0; index < 60; index++) {
    console.log(index);
    create_image();
}

