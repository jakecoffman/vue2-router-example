<template>
  <div id="app">
    <nav>
      <router-link to="/home"> Home </router-link>
      <router-link to="/other"> Other </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
nav > * {
  padding: 1rem;
}
.router-link-active {
  text-decoration: none;
  color: white;
  background: blue;
  border-radius: 5px;
}
</style>
