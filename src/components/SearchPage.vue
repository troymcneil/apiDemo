<template>
  <div>
    <StarIcon class="h-8 w-8 text-gray-500 bg-transparent hover:text-yellow-500 cursor-pointer"/>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <div class="mt-1">
      <input type="email" name="email" id="email"
             class="shadow-sm focus:ring-brightWheelPrimary focus:border-brightWheelPrimary block w-full sm:text-sm border-gray-300 rounded-md"
             placeholder="you@example.com">
    </div>

    <div>
      <div class="flow-root mt-6">
        <ul role="list" class="-my-5 divide-y divide-gray-200">
          <li class="py-5">
            <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 class="text-sm font-semibold text-gray-800">
                <a href="#" class="hover:underline focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Office closed on July 2nd
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-600 line-clamp-2">Cum qui rem deleniti. Suscipit in dolor veritatis sequi
                aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum
                consectetur dolores.</p>
            </div>
          </li>

          <li class="py-5">
            <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 class="text-sm font-semibold text-gray-800">
                <a href="#" class="hover:underline focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  New password policy
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-600 line-clamp-2">Alias inventore ut autem optio voluptas et repellendus.
                Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam
                reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.</p>
            </div>
          </li>

          <li class="py-5">
            <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 class="text-sm font-semibold text-gray-800">
                <a href="#" class="hover:underline focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  Office closed on July 2nd
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-600 line-clamp-2">Tenetur libero voluptatem rerum occaecati qui est
                molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias
                consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {StarIcon} from '@heroicons/vue/solid'
import axios from "axios";


export default defineComponent({
  name: 'SearchPage',
  components: {
    StarIcon
  },
  async setup() {
    try {
      const res = await axios.get(`http://localhost:3001`);
      console.log('data is', res.data);
    } catch (error) {
      console.log(error);
    }

    return {}
  }
})
</script>