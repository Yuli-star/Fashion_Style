<template>
    <div>
        <img :src="require('../assets/imagenes/fondo2.jpeg')" alt="">
        <h3>Sobre Nosotros</h3>
        <p> 
            FASHION STYLE es una compañía internacional de moda.
            La empresa está principalmente enfocada a la ropa femenina, pero también ofrece 
            accesorios, zapatos, bolsos y otros artículos de moda. 
            El mercado de FASHION STYLE, abarca Puebla, Mexico y Jalisco. 
            La marca fue fundada el 2021, y desde entonces ha mantenido la filosofía de que 
            "Porque no es solo cuestión de ropa, sino de cómo te sientes cuando te la pones".
        </p>
        <h3>Nuestra Misión</h3>
        <p>
            FASHION STYLE ofrece las últimas tendencias para damas, a unos precios más que atractivos. 
            FASHION STYLE es fiel a la idea de que "Porque no es solo cuestión de ropa, sino de cómo te sientes cuando te la pones". 
            FASHION STYLE es capaz de llevar las últimas tendencias basadas en la moda global y llevar esos estilos al 
            mercado. Por tanto, si está buscando un estilo bohemio, camisetas gráficas, blusas estampadas o ropa 
            de baño, FASHION STYLE es su tienda. El objetivo es ofrecer productos de calidad con estilo, a precios 
            atractivos para todos los usuarios del mundo.
        </p>
        <h1>CONOCE FASHION STYLE</h1>


        <div class="row featurette"  v-for="card of cards" :key="card.id">

            <div :class="['col-md-7', card.isActive ? 'order-md-2' : '' ]">
                
                <h2 class="featurette-heading">{{card.title}}</h2>
                <p class="lead">{{card.description}}</p>
            </div>
            <div :class="['col-md-5', card.isActive ? 'col-md-1': '']" >
                <img :src="require('../assets/imagenes/'+card.image)" class="img-fluid mx-auto wd" alt="">
            </div>
        </div>
         
    </div>
</template>

<script>
    export default {
        name: 'Nosotros',
        data() {
            return {
                cards: [
                    {
                        title: 'Diseño de Productos',
                        description: 'Todo empieza con una idea concebida por nuestros diseñadores. La vida de un artículo comienza incluso antes de que el lápiz del diseñador toque el papel.',
                        image: 'productos.jpg',
                        isActive: false
                    },
                    {
                        title: 'Servicio al Cliente',
                        description: 'Seguramente le surjan muchas preguntas, pero no se preocupe, que está todo pensado. Nuestro servicio al cliente está formado por profesionales que pueden comunicarse en los siguientes idiomas: Inglés, Francés, Español, Italiano, Alemán, Ruso, Holandés y Árabe.',
                        image: 'cliente.jpg',
                        isActive: true
                    },
                    {
                        title: 'Fabricación',
                        description: 'Todos nuestros productos están creados por maquinaria de alta precisión, que presta atención al detalle y al estilo. Valoramos muchísimo la calidad y, a veces, nuestros productos son elaborados a mano por personas con amplia experiencia.',
                        image: 'fabricacion.jpg',
                        isActive: false
                    },
                    {
                        title: 'Calidad Asegurada',
                        description: 'Después de rigurosas pruebas e inspecciones, nuestros productos se convierten en algo de lo que podemos sentirnos orgullosos: ¡un artículo a la moda y de calidad!',
                        image: 'calidad.jpg',
                        isActive: true
                    }
                    
                    
                    
                ]
            }
        }
    }
</script>

<style scoped>
*{
    margin: 0%;
    padding: 1%;
}
img{
    display:block;
    margin:auto;
}
h1{
    text-align: center;
}
.wd{
    width: 480px;
}
</style>
