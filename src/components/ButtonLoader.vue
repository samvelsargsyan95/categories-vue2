<template>
  <div>
    <button @click="$emit('clickFunc')" class="button">
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonLoader",
  props: {
    name: {
      type: String,
      default: () => "Load More Images",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgb(128, 128, 128);
  border: unset;
  background-color: lightblue;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.12);
    box-shadow: 4px 4px 4px rgb(204, 202, 202);
  }
}
</style>