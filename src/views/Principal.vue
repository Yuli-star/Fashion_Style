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