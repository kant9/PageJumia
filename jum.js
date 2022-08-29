// Mon code javascript pour le slider central
let n=3;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const arrow1=document.querySelector(".arrow1");
const arrow2=document.querySelector(".arrow2");
arrow1.disabled=true;

const slideFooter=()=>
{
  const img1=document.querySelectorAll('.imfooter1');
  const img2=document.querySelectorAll('.imfooter2');
  
  for(let i=0; i<img1.length;i++)
  {
    const slide1=img1[i];
    const slide2=img2[i];

    if(slide1.style.display=='block')
    {
      slide1.style.display='none';
      slide2.style.display='block';
      arrow2.disabled=true;
      arrow1.disabled=false;

    }else{

      slide1.style.display='block';
      slide2.style.display='none';
      arrow1.disabled=true;
      arrow2.disabled=false;
    }

  }
}