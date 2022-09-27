<template>
  <div class="home">
    <sidebar />

    <div class="main">
      <div class="main__images-cont">
        <div
          v-for="(image, key) of imagesList"
          :key="key"
          class="main__images-cont--image-cont"
        >
          <img :src="image.url" :alt="image.url" :title="image.url" />
        </div>
      </div>
      <button-loader @clickFunc="getImages({ loadMoreImages: true })" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "@/components/Sidebar";
import ButtonLoader from "@/components/ButtonLoader";

export default {
  name: "Home",
  components: {
    Sidebar,
    ButtonLoader,
  },
  computed: {
    ...mapGetters({
      imagesList: "catsModule/imagesList",
    }),
  },

  methods: {
    ...mapActions({
      getImages: "catsModule/getImages",
    }),
  },
};
</script>

<style scopped lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
}

.main {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__images-cont {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: auto;
    overflow-y: auto;

    &--image-cont {
      width: 150px;
      height: 150px;
      box-shadow: 2px 2px 3px 2px lightgrey;
      border-radius: 5px;
      overflow: hidden;
      margin: 20px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  & button {
    margin-bottom: 16px;
  }
}
</style>
