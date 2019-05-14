<template>
  <div class="sign-up">
    
    <h2>Crear nueva cuenta</h2>
    <p>Es necesaria una cuenta de correo válida para poder iniciar sesión en nuestro sistema. </p>
    <input
      v-model="email" 
      type="text" 
      class="input" 
      placeholder="Correo electrónico" 
      required>
    <br>
    <input 
      v-model="password"
      type="password" 
      class="input" 
      placeholder="Contraseña" 
      required>
    <br>
    <button v-on:click="signUp" class="button">Registrarse</button>
    <br><br><br>
      <router-link to="/Login">
        Volver
      </router-link>
  </div>
</template>


<script>
  import firebase from 'firebase'
  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/login')
        }).catch((err) => {
          alert(err.message)
        });
      }
    }
  }
</script>



<style scoped>
.sign-up {
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
  color: #2c3e50;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
h1, h2, h3 {
  font-weight: normal;
}
</style>