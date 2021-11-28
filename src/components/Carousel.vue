<template>
  <div 
    id="carouselExampleInterval"
    class="carousel slide mb-5 "
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img :src="require('../assets/imagenes/invierno.jpg')" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img :src="require('../assets/imagenes/formal.jpg')" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img  :src="require('../assets/imagenes/primavera.jpg')" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
   

  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        "invierno.jpg",
        "formal.jpg",
        "primavera.jpg",
        "deportiva.jpg",
        "otono.jpg",
      ],
    };
  },
};
</script>

<style  scoped>
#cabeceraxd { height: 60px; }
</style>
