<template>
  <div id="nav">
    <header class="encabezado">
      <nav>
        <div><img :src="require('@/assets/imagenes/logi.png')" alt="logo" /></div>
        <ul>
          <li><router-link to="/">Home</router-link></li>

          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li>
            <router-link to="#">Sucursales</router-link>
            <ul>
              <li><router-link to="/ropa/invierno">Ropa de invierno</router-link></li>
              <li><router-link to="/ropa/primavera">Ropa de primavera</router-link></li>
              <li><router-link to="/ropa/otoño">Ropa de otoño</router-link></li>
              <li><router-link to="/ropa/verano">Ropa de verano</router-link></li>
            </ul>
          </li>
          <li><router-link to="/tiendas">Tiendas</router-link></li>
          <li><router-link to="/carrito">Tu carrito</router-link></li>
          <li>
            <router-link to="/login">Iniciar Sesión</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
    name:"Header"
};
</script>

<style scoped>
*{
    margin:0;
    padding: 0;
}

#nav{
  position: relative;
  z-index: 2;
}

.encabezado{
    /* background: #ccb9eb;  antes*/ 
    background: #7c4dff;
}

img{
    width: 65px;
    /*border-radius: 50%; /*Redondear el logo*/
}

.encabezado nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}

.encabezado nav ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}

a{
    text-decoration: none;
    font-size: 20px;
    color: white;
    padding: 12px 20px;
    display: block;
}

a:hover{
    background: #4c348d;
    color: white;
}

.encabezado nav ul li ul{
    display: flex;
    flex-direction: column;
}

.encabezado nav ul li ul{
    position: absolute;
    background: #7952b3;
    background: 7c4dff;
}

.encabezado nav ul li ul{
    display: none;
}

.encabezado nav ul li:hover > ul{
    display: block;
}
</style>