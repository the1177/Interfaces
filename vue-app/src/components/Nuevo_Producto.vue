<template>
<div class="nuevoProducto">
    <h1>Nuevo producto</h1>
    <h3>Ingresa los datos del nuevo producto que deseas agregar al sistema.</h3>
     <input 
      type="text" 
      v-model="nombre" 
      placeholder="Nombre del producto" 
      class="input" 
      required>
    <br/>
    <input 
      type="text" 
      v-model="cantidad"
      placeholder="Cantidad" 
      class="input" 
      required>
    <br/>
    <input 
      type="text" 
      v-model="precio"
      placeholder="Precio $" 
      class="input" 
      required>
      <br/>
    <input 
      type="text" 
      v-model="descripcion"
      placeholder="Descripción" 
      class="input" 
      required>
      <br/>
    <button v-on:click="addProducto" class="button">Registrar</button>
</div>
</template>


<script>
import firebase from 'firebase'
  export default {
    name: 'nuevoProducto',
    data: function() {
      return {
        nombre: '',
        cantidad: '',
        precio: '',
        descripcion: ''
      }
    },
    methods: {
      addProducto () {
        firebase.auth().signInAnonymously()
        firebase.database().ref('productos/' + this.nombre).set({
            nombre: this.nombre,
            cantidad: this.cantidad,
            precio: this.precio,
            descripcion: this.descripcion
        }).then((user) => {
            alert("Producto agregado correctamente.")
          this.$router.replace('/Productos')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
h3 {
  font-weight: normal;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 14px;
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
button {
  margin: 10px 0;
  color: aliceblue;
  background-color: cadetblue;
  height: 30px;
  width: 80px;
  border-radius: 20px;
  border-width: 0px;
}
input {
  align-self: center;
  margin: 10px 0;
  width: auto;
  padding: 15px;
}
</style>