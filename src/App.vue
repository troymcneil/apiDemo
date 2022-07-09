<template>
  <div>
    <Header/>
    <div class="container mx-auto py-8 px-8">
      <suspense>
        <search-page/>
      </suspense>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Header from "./components/UI/Header.vue";
import SearchPage from "./components/SearchPage.vue";

export default defineComponent({
  name: 'App',
  components: {
    SearchPage,
    Header
  }
})
</script>