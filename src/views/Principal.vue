<template>
  <div>
      <header id="main-header">
        <div class="container">
            <p class="Logo" align="left">Logo</p>
            <h1 class="display-1" align="left" >FASHION STYLE</h1>
            <P align="left">Porque no es solo cuestión de ropa, sino de cómo te sientes cuando te la pones.</P>
            <p align="left">
                <a href="#" class="btn">Compras</a>
            </p>
        </div>
    </header>

    <section id="description">
        <div class="container">
            <h2 class="display-2">“Explosión De Estilo” con Fashion Style, el placer de vestirse bien.</h2>
            <p>Aquí encontrarás ese perfume que te hace inconfundible, esos zapatos que hablan de ti </p>
            <div class="descripcion-row">
                <div class="description-box">
                     <img :src="require('../assets/imagenes/car.png')" alt="">
                    <h4>Descripcion</h4>
                    <p>
                        Siendo una empresa con productos 100% artesanales, nos importa la economia de nuestros 
                        clientes, es por esto que somos reconocidos por mantener los mejores precios 
                        del mercado.
                    </p>
                </div>
                <div class="description-box">
                     <img :src="require('../assets/imagenes/icono2.png')" alt="">
                    <h4>Descripcion</h4>
                    <p>
                        Nuestro negocio Fashion style cuidamos la imagen que se transmite.
                    </p>
                </div>
                <div class="description-box">
                    <img :src="require('../assets/imagenes/tiempo.png')" alt="">
                    <h4>Descripcion</h4>
                    <p> 
                        Fashion style ha sido destacada durante sus 20 años de trayectoria por 
                        la puntualidad de las entregas y además con la mejor calidad.
                    </p>
                </div>    
            </div>
        </div>
    </section>

    <section>
        <head>
            <meta charset="UFF-8">
            <meta name="viewport" content="width=device.width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title> Carrusel</title>   
        </head>
        <body>
            <div class="contenedor">
                <div class="item1"></div>
                <div class="item2"></div>
                <div class="item3"></div>
                <div class="item4"></div>
                <div class="item5"></div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                       <img :src="require('../assets/imagenes/invierno.jpg')" class="d-block w-100" alt="imageninvierno">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/imagenes/formal.jpg')" class="d-block w-100" alt="imagenformal">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/imagenes/primavera.jpg')" class="d-block w-100" alt="imagenprimavera">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/imagenes/deportiva.jpg')" class="d-block w-100" alt="imagendeportiva">
                    </div>
                    <div class="carousel-item">
                        <img :src="require('../assets/imagenes/otono.jpg')" class="d-block w-100" alt="imagenotono">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </body>
    </section>

    <section id="testimonial">
        <div class="container">
            <h4>Aprovecha la oportunidad y compra las marcas que te gustan</h4>
            <p>Visita nuestras redes sociales</p>
            <p>Puebla</p>
            <img :src="require('../assets/imagenes/facebook.png')" height="65px" width="50px" alt="">
            <img :src="require('../assets/imagenes/whatsapp.png')" height="67px" width="50px" alt="">
            <img :src="require('../assets/imagenes/twitter.png')" height="65px" width="50px" alt="">
        </div>
    </section>

    <section id="features">
        <div class="container">
            <div class="features-row">
                <div class="features-box">
                    <img :src="require('../assets/imagenes/Ropa casual.jpg')" height="466" alt="">
                    <h4>Ropa casual</h4>
                    <p>
                        Sientete cómoda y bella todos los días con este outfit, sin perder el estilo. 
                    </p>
                </div>
                <div class="features-box">
                    <img :src="require('../assets/imagenes/ropa elegante.jpg')" height="466" alt="">
                    <h4>Ropa elegante</h4>
                    <p>
                        Para verte como toda una profesional y hermosa en el trabajo, este outfit cómodo es para ti.
                    </p>
                </div>
                <div class="features-box">
                    <img :src="require('../assets/imagenes/Ropa deportiva.jpg')" height="466" alt="">
                    <h4>Ropa deportiva</h4>
                    <p>
                        Sin importar la actividad fisica, que hagas debes conservar tu estilo y belleza.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <div class="about-image">
                <img :src="require('../assets/imagenes/Ropa cita.jpg')" alt="">
            </div>
            <div class="about-text">
                <h3 class="display-2">Información sobre nosotros</h3>
                <p>
                    Somos una empresa que busca que nuestras clientas al portar nuestras prendas exploten su estilo, 
                    belleza interior y sobre todo que se sientan cómodas y ellas mismas. Además de que sin importar su 
                    presupuesto nuestra calidad siga siendo la mejor.   
                </p>
                <p>
                    Es una tienda donde encontraran una gran variedad de estilos, colores 
                    y diseños en ropa para mujeres. Con la mayor oferta de productos 
                    de moda en Internet : ropa, calzado, joyería, bolsas, carteras, lentes, entre otros.
                    <p>Somos el portal interdimensional de las compras, queremos hacer tu vida más sencilla, 
                    tú solo preocúpate de encontrar el estilo perfecto entre nuestros fabulosos productos.</p>
                <!-- </p> -->
            </div>
        </div>
    </section>

    <footer id="mainfooter">
        <p>FASHION STYLE 2021 &copy;</p>
    </footer>
  </div>
</template>

<script>
export default {
    name:"Principal",
    data (){
    return{
        
    }
}

}
</script>

<style>
@import '../assets/css/estilos.css';
</style>