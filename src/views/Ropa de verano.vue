<template>
  <div>
    <section>
        <h2>Ropa de verano</h2>
          <div class="card estilo-c">
           <a href="#">
          <div class="img-container">
            <img :src="require('../assets/imagenes/verano1.jpg')" alt="producto 1">
            <span class="promo">15% de descuento</span>
          </div>
       </a>
      <div class="info-container">
        <h3>Vestido largo con tirantes rayado</h3>
        <strong>$500</strong>
        <span class="rating">★★★★☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano2.jpg')" alt="producto 1">
          <span class="promo">25% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Bluson estampado</h3>
        <strong>$650</strong>
        <span class="rating">★★★☆☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano3.jpg')" alt="producto 1">
          <span class="promo">10% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Mini vestido sin mangas</h3>
        <strong>$1,200</strong>
        <span class="rating">★★★★★</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
      </div>
    </section>

    <section>
          <div class="card estilo-c">
           <a href="#">
          <div class="img-container">
            <img :src="require('../assets/imagenes/verano4.jpg')" alt="producto 1">
            <span class="promo">20% de descuento</span>
          </div>
       </a>
      <div class="info-container">
        <h3>Vestido veranero floral</h3>
        <strong>$900</strong>
        <span class="rating">★★★★☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano5.jpg')" alt="producto 1">
          <span class="promo">10% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Vestido rojo de satén con escote</h3>
        <strong>$900</strong>
        <span class="rating">★★★☆☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano6.jpg')" alt="producto 1">
          <span class="promo">15% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Conjunto de tres piezas</h3>
        <strong>$750</strong>
        <span class="rating">★★★★★</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
      </div>
    </section>

    <section>
          <div class="card estilo-c">
           <a href="#">
          <div class="img-container">
            <img :src="require('../assets/imagenes/verano7.jpg')" alt="producto 1">
            <span class="promo">25% de descuento</span>
          </div>
       </a>
      <div class="info-container">
        <h3>Vestido de tirantes de espalda abierta con abertura lateral</h3>
        <strong>$600</strong>
        <span class="rating">★★★★☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano8.jpg')" alt="producto 1">
          <span class="promo">25% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Vestido de manga larga con estampado floral y escote</h3>
        <strong>$300</strong>
        <span class="rating">★★★☆☆</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
    </div>
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img :src="require('../assets/imagenes/verano9.jpg')" alt="producto 1">
          <span class="promo">10% de descuento</span>
        </div>
        </a>
      <div class="info-container">
        <h3>Short juvenil</h3>
        <strong>$250</strong>
        <span class="rating">★★★★★</span>
        <a href="#" class="add-cart">Añadir al carrito</a>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
*{
    box-sizing: border-box;
  }
  section{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px 0;
  }
  section h2{
    width: 100%;
    color: #999;
    font-family: monospace;
  }
  .card{
    width: 33.333333%;
  }
  .estilo-c{
    font-family: sans-serif;
    width: 30%;
    border: 1.5px solid rgb(122, 120, 120);
    border-radius: 15px;
    position: relative;
    z-index: 1;
  }
  .estilo-c .img-container{
    overflow: hidden; /*desbordamiento que este oculto*/
    height: 500px;
    position: relative;
    border-radius: 15px;
  }
  .estilo-c .img-container img{
    width: 105%;
    height: 105%;
    position: absolute;
    transition: all 0.5s;
  }
  .estilo-c:hover .img-container img{
    transform: scale(1.2);
  }
  .estilo-c .img-container .promo{
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 20px;
    background: yellow;
    padding: 15px;
    color: black;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
  }
  .estilo-c .info-container{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  }
  .estilo-c .info-container h3{
    margin: 0;
  }
  .estilo-c .info-container h3,
  .estilo-c .info-container strong,
  .estilo-c .info-container span{
    padding: 5px 15px;
    width: 100%;
  }
  .estilo-c .add-cart{
    margin: 1rem;
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 15px;
    border: 1px solid black;
    border-radius: 25px;
  }
  .estilo-c .add-cart:hover{
    color: black;
    background-color: transparent;
    border: 1px solid black;
  }
  .rating{
    font-size: 1.5rem;
    color: #ff7849;
  }
</style>