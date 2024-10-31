//SCROLL TO RIGHT
// collect element
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("scroll", function(){
    window.scrollBy(100,0)
})

// scrollable image collab
// collect left and right buttons and gallery container
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

// define one function for scroll left and scroll right
function scrollgallery(scrollpixels){
    gallerycontainer.scrollBy({
        left:scrollpixels,
        behavior: "smooth"
    })
}

btnright.addEventListener("click", function(){
    scrollgallery(508)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-508)
})