<template>
  <div class="sidebar">
    <h1 class="sidebar__header">Categories</h1>

    <div
      v-for="(item, key) of categories"
      :key="key"
      @click="getImagesFunc(item.id, false)"
      class="sidebar__header--item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Sidebar",

  computed: {
    ...mapGetters({
      categories: "catsModule/categories",
    }),
  },

  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions({
      getCategories: "catsModule/getCategories",
      getImages: "catsModule/getImages",
    }),

    ...mapMutations({
      setData: "catsModule/setData",
    }),

    async getImagesFunc(selectedCategoryId, loadMoreImages) {
      this.setData({ selectedCategoryId });
      await this.getImages({ loadMoreImages });
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 20%;
  background-color: #e6e3e3;
  padding: 32px;

  &__header {
    @extend %white-text;
    font-size: 45px;
    margin-bottom: 20px;

    &--item {
      @extend %white-text;
      cursor: pointer;
      text-transform: capitalize;
      padding: 8px 0;
      font-size: 25px;
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 2px 2px;
      }
    }
  }
}

%white-text {
  color: white;
  text-shadow: 1px 1px 1px black;
}
</style>