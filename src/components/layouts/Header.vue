<template>
  <div id="nav">
    <header class="encabezado">
      <nav>
        <div><img :src="require('@/assets/imagenes/logi.png')" alt="" /></div>
        <ul>
          <li><a href="#">Nosotros</a></li>
          <li>
            <a href="#">Sucursales</a>
            <ul>
              <li><a href="#">Ropa de invierno</a></li>
              <li><a href="#">Ropa de primavera</a></li>
              <li><a href="#">Ropa de otoño</a></li>
            </ul>
          </li>
          <li><a href="#">Presupuesto</a></li>
          <li><a href="#">Ubicación</a></li>
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

.encabezado{
    background: #ccb9eb;
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
    background: rgb(222, 236, 159);
}

.encabezado nav ul li ul{
    display: flex;
    flex-direction: column;
}

.encabezado nav ul li ul{
    position: absolute;
    background: #ccb9eb;
}

.encabezado nav ul li ul{
    display: none;
}

.encabezado nav ul li:hover > ul{
    display: block;
}
</style>