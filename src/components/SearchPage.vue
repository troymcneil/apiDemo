<template>
  <div>
    <div class="mt-1">
      <input type="search" v-model="searchQuery"
             class="shadow-sm focus:ring-brightWheelPrimary focus:border-brightWheelPrimary block w-full sm:text-sm border-gray-300 rounded-md"
             placeholder="you@example.com">
    </div>

    <div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-12">
        <div v-for="result in searchResults" :key="result.id"
             class="relative rounded-lg border border-gray-300 cursor-pointer bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-brightWheelPrimary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <div class="flex-shrink-0">
            <img v-if="result.image" class="h-16 w-16 rounded-full" :src="result.image" alt="Company Image">
          </div>
          <div class="flex-1 min-w-0">
            <div>
              <p class="text-lg font-medium text-gray-900">{{ result.name }}</p>
              <p class="text-md text-gray-500 truncate">{{ result.description }}</p>
              <address class="pt-4 text-sm text-gray-600">
                {{ result.address.address1 }}<br>
                {{ result.address.address2 }}
                {{ result.address.city }} {{ result.address.state }}, {{ result.address.postalCode }}
              </address>
            </div>
          </div>
          <div>
            <StarIcon class="h-8 w-8 text-gray-500 bg-transparent hover:text-yellow-500 cursor-pointer"
            :class="{ 'text-yellow-500': result.starred }"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue'
import {StarIcon} from '@heroicons/vue/solid'
import axios from "axios";
import {Company} from "../models/Company";
import SearchService from "../services/SearchService";


export default defineComponent({
  name: 'SearchPage',
  components: {
    StarIcon
  },
  async setup() {
    const searchQuery = ref("");
    const searchResults = ref<Company[]>([]);

    watch(searchQuery, async () => {
      try {
        searchResults.value = await SearchService.search(searchQuery.value);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      searchQuery,
      searchResults
    }
  }
})
</script>