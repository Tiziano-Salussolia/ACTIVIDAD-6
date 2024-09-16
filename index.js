const h5Elements = document.querySelectorAll(".card-title");
const textElements = document.querySelectorAll(".card-text");
const imgElements = document.querySelectorAll(".card img");

if (h5Elements.length >= 3 && textElements.length >= 3 && imgElements.length >= 3) {
  h5Elements[0].innerText = "Dibu 1";
  h5Elements[1].innerText = "BMW M3";
  h5Elements[2].innerText = "Dibu 3";

  textElements[0].innerText = "Lo más grande que hay";
  textElements[1].innerText = "El mejor auto que hay";
  textElements[2].innerText = "El arquero más grande que hay";

  imgElements[0].src = "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/M57XV2PCCIGBZOEMZLBRLAL77Y.jpg";
  imgElements[1].src = "https://i.pinimg.com/originals/e6/1b/2b/e61b2be9b35caae3783328543f846ed6.jpg";
  imgElements[2].src = "https://www.ole.com.ar/2024/09/05/7aHF1SP4O_1200x630__1.jpg";
} else {
  console.log("No se encontraron suficientes tarjetas.");
}







