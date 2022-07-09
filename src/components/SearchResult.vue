<template>
    <div class="flex-shrink-0">
      <img v-if="company.image" class="h-16 w-16 rounded-full" :src="company.image" alt="Company Image">
    </div>
    <div class="flex-1 min-w-0">
      <div>
        <p class="text-lg font-medium text-gray-900">{{ company.name }}</p>
        <p class="text-md text-gray-500 truncate">{{ company.description }}</p>
        <address class="pt-4 text-sm text-gray-600">
          {{ company.address.address1 }}<br>
          {{ company.address.address2 }}
          {{ company.address.city }} {{ company.address.state }}, {{ company.address.postalCode }}
        </address>
      </div>
    </div>
    <div>
      <StarIcon class="h-8 w-8 text-gray-500 bg-transparent hover:text-yellow-300 cursor-pointer"
                :class="[ company.starred ? 'text-yellow-400' : '', isSelecting ? 'animate-spin' : '']"/>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from 'vue'
import {StarIcon} from '@heroicons/vue/solid'
import {Company} from "../models/Company";

export default defineComponent({
  name: 'SearchResult',
  components: {
    StarIcon
  },
  props: {
    modelValue: {
      type: Object as PropType<Company>,
      required: true,
    },
    selectedResult: {
      type: String,
      required: true,
      default: ''
    },
    isStarring: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  async setup(props) {
    const company = ref<Company>(props.modelValue);

    const isSelecting = computed(() => {
      return props.isStarring && props.selectedResult === company.value.id;
    });

    return {
      company,
      isSelecting
    }
  }
})
</script>