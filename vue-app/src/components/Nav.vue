<template>
  <div id="nav">
    <nav>
      <router-link id="link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Inicio',
          page:'/Inicio'
        },
        {
          id: `1`,
          text: 'Productos',
          page:'/Productos'
        },
        {
          id: `2`,
          text: 'Nuevo producto',
          page:'/Nuevo_Producto'
        },
        {
          id: `3`,
          text: 'Login',
          page:'/*'
        },
      ]
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('Login')
      })
    }
  }
}
</script>

<style>
#nav{
    padding: 35px 30px 30px 30px;
    margin: -35px -10px -10px -10px;
    background-color: cadetblue;
}
#link{
    font-size: 24px;
    color: aliceblue;
    text-align: left;
    display: inline;
    margin: 10px 30px 10px 30px;
    text-decoration: none;
}
#link:hover{
    background-color: aquamarine;
}
</style>
