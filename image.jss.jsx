const image=document.querySelector("#image");
const imgs=document.querySelector(".imgs");
const img=document.querySelectorAll(".imgs img");
const opacity=0.6;

img[0].style.opacity=opacity;
    


imgs.addEventListener("click",(event)=>{
    img.forEach((imgElem)=>{
        imgElem.style.opacity=1;
    })


    const clickImgUrl=event.target.src;
    image.src=clickImgUrl;

    image.classList.add("fade-in");

    setTimeout(()=>{
        image.classList.remove("fade-in");
    },600)

    event.target.style.opacity=opacity;
});
    


    
