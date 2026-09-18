const image = document.querySelector("img");
image.addEventListener("mouseover",function(){
            image.src="media/banana.png";
        })

image.addEventListener("mouseout",function(){
    image.src='media/apple.png';
})