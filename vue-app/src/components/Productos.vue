<template>
    <div>
      <h1>Productos</h1>
      <center>
      <table class="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item of items" :key="item['.key']">
              <td>{{ item.nombre }}</td>
              <td>{{ item.cantidad }} </td>
              <td>{{ item.precio }}</td>
              <td>{{ item.descripcion }}</td>
              <td>
                <button @click="deleteItem(item['.key'])" class="btn btn-danger">Eliminar artículo</button>
             </td>
            </tr>
        </tbody>
      </table>
      </center>
  </div>
</template>

<script>
import firebase, { database } from 'firebase'
firebase.initializeApp({
  apiKey: 'AIzaSyBErTo2k6kLWBXPzI_0OTwRN6DmzcmOP_w',
  authDomain: 'interfaces-inventario.firebaseapp.com',
  databaseURL: 'https://interfaces-inventario.firebaseio.com',
  projectId: 'interfaces-inventario',
  storageBucket: 'interfaces-inventario.appspot.com',
  messagingSenderId: '743189328823'
})

firebase.auth().signInWithEmailAndPassword("jacob@gmail.com", "Inventarios123")

export default {
  data() {
    return {
      items: []
    }
  },
  firebase: {
    items: firebase.database().ref('productos')
  },
  methods: {
    deleteItem(key){
      firebase.database().ref('productos/' + this.key).remove()
      .then((data) => {
        alert("Producto removido.");
        this.$router.replace('/Productos#');
      });
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
table a:link {
	color: #666;
	font-weight: bold;
	text-decoration:none;
}
table a:visited {
	color: #999999;
	font-weight:bold;
	text-decoration:none;
}
table a:active,
table a:hover {
	color: #bd5a35;
	text-decoration:underline;
}
table {
	font-family:Arial, Helvetica, sans-serif;
	color:#666;
	font-size:16px;
	text-shadow: 1px 1px 0px #fff;
	background:#eaebec;
	margin:20px;
	border:#ccc 1px solid;

	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;

	-moz-box-shadow: 0 1px 2px #d1d1d1;
	-webkit-box-shadow: 0 1px 2px #d1d1d1;
	box-shadow: 0 1px 2px #d1d1d1;
}
table th {
	padding:21px 60px 22px 60px;
	border-top:1px solid #fafafa;
	border-bottom:1px solid #e0e0e0;
  font-size: 22px;
	background: #ededed;
	background: -webkit-gradient(linear, left top, left bottom, from(#ededed), to(#ebebeb));
	background: -moz-linear-gradient(top,  #ededed,  #ebebeb);
}
table th:first-child {
	text-align: left;
	padding-left:20px;
}
table tr:first-child th:first-child {
	-moz-border-radius-topleft:3px;
	-webkit-border-top-left-radius:3px;
	border-top-left-radius:3px;
}
table tr:first-child th:last-child {
	-moz-border-radius-topright:3px;
	-webkit-border-top-right-radius:3px;
	border-top-right-radius:3px;
}
table tr {
	text-align: center;
	padding-left:20px;
}
table td:first-child {
	text-align: left;
	padding-left:20px;
	border-left: 0;
}
table td {
	padding:18px;
	border-top: 1px solid #ffffff;
	border-bottom:1px solid #e0e0e0;
	border-left: 1px solid #e0e0e0;

	background: #fafafa;
	background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#fafafa));
	background: -moz-linear-gradient(top,  #fbfbfb,  #fafafa);
}
table tr.even td {
	background: #f6f6f6;
	background: -webkit-gradient(linear, left top, left bottom, from(#f8f8f8), to(#f6f6f6));
	background: -moz-linear-gradient(top,  #f8f8f8,  #f6f6f6);
}
table tr:last-child td {
	border-bottom:0;
}
table tr:last-child td:first-child {
	-moz-border-radius-bottomleft:3px;
	-webkit-border-bottom-left-radius:3px;
	border-bottom-left-radius:3px;
}
table tr:last-child td:last-child {
	-moz-border-radius-bottomright:3px;
	-webkit-border-bottom-right-radius:3px;
	border-bottom-right-radius:3px;
}
table tr:hover td {
	background: #f2f2f2;
	background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#f0f0f0));
	background: -moz-linear-gradient(top,  #f2f2f2,  #f0f0f0);	
}
</style>