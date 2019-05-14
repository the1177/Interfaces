<template>
  <div class="login">
    
    <h2>Sistema de Inventarios - Login</h2>
    <p>Por favor inicia sesión para poder continuar.</p>
    <input 
      type="text" 
      v-model="email" 
      placeholder="Correo electrónico" 
      class="input" 
      required>
    <br/>
    <input 
      type="password" 
      v-model="password"
      placeholder="Contraseña" 
      class="input" 
      required>
    <br/>
    <button v-on:click="login" class="button">Ingresar</button>
    <h3>¿No tienes cuenta? Regístrate; </h3>
    <p><router-link to="/signup">
      Nuevo usuario
    </router-link></p>
  </div>
</template>


<script>
  import firebase from 'firebase'
  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/Inicio')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>


<style scoped>
.login {
  margin-top: 40px;
}
input {
  align-self: center;
  margin: 10px 0;
  width: auto;
  padding: 15px;
}
button {
  margin: 10px 0;
  color: aliceblue;
  background-color: cadetblue;
  height: 30px;
  width: 80px;
  border-radius: 20px;
  border-width: 0px;
}
a {
  color: black;
  text-decoration: underline;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
h1, h2, h3 {
  font-weight: normal;
}
</style>