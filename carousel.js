document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150, //tiempo del paso de una imagen a otra
        dist:-80,  //distancia de perspectiva
        shift: 5, //distancia de las imanegnes a los costados
        padding: 5,
        numVisible: 5, //numero de imagenes que queremos que se muestren por pantalla
        indicators: true, //son los indicadores
        noWrap: false,
    });
});