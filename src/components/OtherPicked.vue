<template>
  <article>
    <h1>Child: {{ item.name }}</h1>

    <label
      >Rename:
      <input v-model="rename" />
    </label>
    <button @click="save">Save</button>
  </article>
</template>
<script>
export default {
  props: ["things"],
  data() {
    return {
      // Using a variable so that
      // changes don't mutate the state
      // passed in.
      rename: "",
    };
  },
  computed: {
    item() {
      return this.things.find((t) => t.id.toString() === this.$route.params.id);
    },
  },
  methods: {
    save() {
      // pretend we saved this to the api and got this back
      const newThing = { id: this.item.id, name: this.rename };
      const i = this.things.findIndex((thing) => thing.id === this.item.id);
      // we're not allowed to mutate things, so we emit a copy
      const newThings = [...this.things];
      newThings[i] = newThing;
      // update: syntax invokes the .sync logic in the parent
      this.$emit("update:things", newThings);
      this.rename = "";
    },
  },
};
</script>