<template>
  <div class="inicio">
    <body>
        <header class="header">
           <div class="logo-box">
                <img src="/src/assets/logo-white.png" alt="Logo" class="logo">
           </div>
           <div class="text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary-main">Bienvenido</span>
                    <span class="heading-primary-sub">El mejor lugar para controlar tus productos</span>
                </h1>
                <a href="#" class="btn btn-white btn-animated" v-on:click="goLogin"> Iniciar sesión</a>
           </div>
           
        </header>
        
    </body>
    <button class="button logout" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Inicio',
  data () {
    return {
      msg: 'Bienvenido al sistema de Inventarios.'
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    goLogin(){
      this.$router.replace('login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Background home*/


.header{
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(126,213,111,0.8),
        #28b485), 
        url("../assets/hero.jpg");
    background-size: cover;
    background-position: top;

    clip-path: polygon(0 0,100% 0, 100% 75vh,0 100%) ;
}

.logo-box{
    position: absolute;
    top: 40px;
    left: 40px;
}

.logo{
    height: 35px;

}
.text-box{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.heading-primary{
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;
}
.heading-primary-main{
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /*
    animation-delay: 3s;
    animation-iteration-count: 3;
    */
}
.heading-primary-sub{
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px; 
    animation: moveInRight 1s ease-out;
}

@keyframes moveInLeft{
    0%{
        opacity: 0;
        transform: translateX(-100px);
    }
    70%{
        opacity: 0.7;
        transform: translateX(10px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }

}
@keyframes moveInRight{
    0%{
        opacity: 0;
        transform: translateX(100px);
    }
    70%{
        opacity: 0.7;
        transform: translateX(-10px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    } 
}

@keyframes moveInBottom{
    0%{
        opacity: 0;
        transform: translateY(30px);
    }
   
    100%{
        opacity: 1;
        transform: translateX(0);
    } 
}

.btn:link, 
.btn:visited {
    text-transform:  uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all 0.3s;
    position: relative;
}

.btn:hover{
    transform: translate(-3px);
    box-shadow: 0 10px 20px rgba(0,0, 0, .2);

}
.btn:active{
    transform:translate(-1px);
    box-shadow: 0 5px 10px rgba(0,0, 0, .2);

}
.btn-white{
    background-color: #ffff;
    color: #777;
}

.btn::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius:100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: .4s;
}

.btn-white::after{
    background-color: #fff;
}

.btn:hover::after{
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

.btn-animated{
    animation: moveInBottom 0.5s ease-out 0.1s;
    animation-fill-mode: backwards;
}
</style>
