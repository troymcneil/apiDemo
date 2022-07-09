<template>
  <div>
    <error v-if="errorOccured" class="mb-8" v-model="errorMessage"/>
    <button @click="showStarredCompanies"
            class="float-right inline-flex items-center px-3 py-4 mb-8 rounded-full text-md font-medium bg-yellow-400 hover:bg-yellow-300 text-white">
      <StarIcon class="-ml-1 mr-1.5 h-6 w-6 text-white bg-transparent"
                :class="{'animate-spin': isStarringCompany}"/>
      {{ starCount }}
    </button>

    <div class="mt-1">
      <input type="search" v-model="searchQuery"
             class="py-4 shadow-sm focus:ring-brightWheelPrimary focus:border-brightWheelPrimary block w-full sm:text-xl border-gray-300 rounded-md"
             placeholder="search companies...">
    </div>

    <div>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 pt-12 pb-8">
        <div v-for="(result, i) in searchResults" :key="result.id"
             @click="update(result)"
             class="relative rounded-lg border border-gray-300 cursor-pointer bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-brightWheelPrimary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
         <search-result v-model="searchResults[i]" :is-starring="isStarringCompany" :selected-result="selectedResult"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue'
import {StarIcon} from '@heroicons/vue/solid'
import {Company} from "../models/Company";
import CompanyService from "../services/CompanyService";
import SearchResult from "./SearchResult.vue";
import Error from "./UI/Error.vue";

export default defineComponent({
  name: 'SearchPage',
  components: {
    Error,
    SearchResult,
    StarIcon
  },
  async setup() {
    const searchQuery = ref("");
    const searchResults = ref<Company[]>([]);
    const starredCompanies = ref<Company[]>([]);
    const isStarringCompany = ref<boolean>(false);
    const errorOccured = ref<boolean>(false);
    const errorMessage = ref<string>('');
    const selectedResult = ref<string>('');

    const starCount = computed(() => {
      return starredCompanies.value.length;
    });

    await getStarredCompanies();

    watch(searchQuery, async () => {
      let response: Company[] | string = await CompanyService.search(searchQuery.value);

      if (typeof response === "string") {
        showError(response);
      } else {
        reset();
        searchResults.value = response;
      }
    });

    async function update(company: Company) {
      selectedResult.value = company.id;
      isStarringCompany.value = true;
      let response: Company | string = await CompanyService.update(company.id, !company.starred);

      if (typeof response === "string") {
        showError(response);
      } else {
        reset();
        company.starred = response.starred;
        await getStarredCompanies();
      }
    }

    async function getStarredCompanies() {
      let response = await CompanyService.getStarredCompanies();

      if (typeof response === "string")
        showError(response);
      else {
        reset();
        starredCompanies.value = response;
      }
    }

    function showError(message: string) {
      errorOccured.value = true;
      errorMessage.value = message;
    }

    function reset() {
      errorOccured.value = false;
      errorMessage.value = '';
      selectedResult.value = '';
      isStarringCompany.value = false;
    }

    function showStarredCompanies() {
      searchResults.value = starredCompanies.value;
    }

    return {
      searchQuery,
      searchResults,
      starCount,
      isStarringCompany,
      selectedResult,
      errorOccured,
      errorMessage,
      update,
      showStarredCompanies
    }
  }
})
</script>