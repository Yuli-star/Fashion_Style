<template>
  <div id="nav">
    <header class="encabezado">
      <nav>
        <div>
          <img :src="require('@/assets/imagenes/logi.png')" alt="logo" />
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>

          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li>
            <router-link to="#">Sucursales</router-link>
            <ul>
              <li>
                <router-link to="/ropa/invierno">Ropa de invierno</router-link>
              </li>
              <li>
                <router-link to="/ropa/primavera"
                  >Ropa de primavera</router-link
                >
              </li>
              <li><router-link to="/ropa/otoño">Ropa de otoño</router-link></li>
              <li>
                <router-link to="/ropa/verano">Ropa de verano</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/tiendas">Tiendas</router-link></li>
          <li>
            <router-link to="/login">Iniciar Sesión</router-link>
          </li>
          <li>
            <div class="dropdown">
              <i id="car" v-on:click="ejemplo" class="fas fa-cart-arrow-down dropbtn size"></i>
              <div id="myDropdown" class="dropdown-content">
                <!--- acá colocas el contenido del drop --->
                <!-- <router-link to="/carrito">Carrito</router-link> -->
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    ejemplo(){
      document.getElementById("myDropdown").classList.toggle("show");
    }
  },
  
 
  created() {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#nav {
  position: relative;
  z-index: 2;
}

.encabezado {
  /* background: #ccb9eb;  antes*/
  background: #7c4dff;
}

img {
  height: 65px;
  /*border-radius: 50%; /*Redondear el logo*/
}

.encabezado nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.encabezado nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-size: 20px;
  color: white;
  padding: 12px 20px;
  display: block;
}

a:hover {
  background: #4c348d;
  color: white;
}

.encabezado nav ul li ul {
  display: flex;
  flex-direction: column;
}

.encabezado nav ul li ul {
  position: absolute;
  background: #7952b3;
  background: 7c4dff;
}

.encabezado nav ul li ul {
  display: none;
}

.encabezado nav ul li:hover > ul {
  display: block;
}

/* btn carrito */

.dropbtn {
  /* background-color: #3498db; */
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color: #4c348d;
  /* background-color: #2980b9; antes*/
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 400px;
  min-height: 400px;

  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.size {
  font-size: 1.5rem;
  cursor: pointer;
  cursor: hand;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>