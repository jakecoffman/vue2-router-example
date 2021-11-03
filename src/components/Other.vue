<template>
  <article>
    <h1>Other</h1>
    <p>You are at other</p>
    <p v-if="loading">Loading...</p>

    <div v-else class="container">
      Select a sub-route:
      <router-link
        v-for="item of items"
        :key="item.id"
        :to="`/other/${item.id}`"
      >
        {{ item.name }}
      </router-link>
    </div>

    <div class="child">
      <!-- The children need their item that is selected, but we
      don't need to keep track, just give them the list and they 
      can figure it out -->
      <router-view v-if="items" :things.sync="items" />
    </div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      items: null,
      loading: 0,
    };
  },
  async created() {
    this.loading++;
    // simulate loading from an api
    const r = await fetch("https://httpbin.org/anything", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        things: [
          { id: 1, name: "One" },
          { id: 2, name: "Two" },
          { id: 3, name: "Three" },
        ],
      }),
    });
    if (!r.ok) {
      return alert(await r.text());
    }
    this.items = (await r.json()).json.things;
    this.loading--;
  },
};
</script>
<style scoped>
.container {
  display: flex;
  gap: 1rem;
}
.child {
  margin-left: 2rem;
}
</style>