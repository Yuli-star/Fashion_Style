<template>
  <div class="login">
    <div class="login-container">
        <div class="login-info-container">
          <h1 class="title">Inicia con</h1>
          <div class="social-login">
              <div class="social-login-element">
                  <img :src="require('../assets/imagenes/google.png')" alt="google-image">  
                  <span>Google</span>
              </div>
              <div class="social-login-element">
                  <img :src="require('../assets/imagenes/facebook.png')" alt="facebook-image">
                  <span>Facebook</span>
              </div>
          </div>
          <p>O</p>
          <form class="inputs-container">
              <input class="input" type="text" placeholder="Nombre de usuario">
              <input class="input" type="text" placeholder="Contraseña">
              <p>¿Se te olvidó tu contraseña? <span class="span">Click aquí</span></p>
              <button class="btn">Iniciar sesión</button>
              <p>¿No tienes una cuenta? <span class="span">Inscribirse</span></p>
          </form>
        </div>
          <img class="image-container" :src="require('../assets/imagenes/login.png')" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.login{
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    background-image: linear-gradient(to top, #f5c3f0 0%, #cef7c1 100%);
}

.login-container {
    height: 43.75em;
    width: 60em;
    margin: none 6em;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin: auto;
}

.login-info-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 0.5rem;
    background-color: var(--login-bg);
}

.image-container {
    padding: 2rem;
    width: 50%;
    background-color: var(--image-bg);
    box-sizing: border-box;
}

.title {
    text-transform: capitalize;
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--title-bg);
}

.social-login {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
}

.social-login-element {
    width: 12.5rem;
    height: 3.75rem;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    border-radius: 5px;
    border: 1px solid var(--button-bg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-login-element img {
    width: 1.875rem;
    height: 1.875rem;
    position: relative;
    top: 0;
    left: -0.625rem;
}

.social-login-element:hover {
    background-color: #fff;
}

.login-info-container > p {
    font-size: 1.25em;
    margin-top: 1.5em;
}

.inputs-container {
    height: 55%;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.input, .btn {
    width: 90%;
    height: 3.125rem;
    font-size: 1em;
}

.input {
    padding-left: 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    letter-spacing: 1px;
    box-sizing: border-box;
}

.input:hover {
    border: 2px solid var(--button-bg);
}

.btn {
    width: 80%;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: var(--button-bg);
    cursor: pointer;
}

.inputs-container p {
    margin: 0;
}

.span {
    color: var(--light-pink);
    font-weight: 600;
    cursor: pointer;
}

@media screen and (max-width: 1000px) {
    .login-container {
        width: 70%;
        margin-top: 3rem;
    }
    .login-info-container {
        width: 100%;
        border-radius: 5px;
    }
    
    .image-container {
        display: none;
    }  
}

@media screen and (max-width: 650px) {
    .login-container {
        width: 90%;
    }
}

@media screen and (max-width: 500px) {
    .login-container {
        height: 90%;
    }

    .social-login {
        flex-direction: column;
        align-items: center;
        height: 30%;
    }

    .login-info-container > p {
        margin: 0;
    }
}
</style>