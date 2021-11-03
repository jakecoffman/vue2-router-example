<template>
  <article>
    <h1>Home</h1>
    <p>You are home</p>
    <button @click="nextPage">Programmatic Nav</button>
  </article>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$router.push("/other");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
