<template>
  <div>
     <!-- component -->
<!-- This is an example component -->
    <div class="max-w-2xl mx-auto">
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li class="mb-10 ml-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
      </div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages
        including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing
        pages.</p>
      <a href="#"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
        more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg></a>
    </li>
    <li class="mb-10 ml-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
      </div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first
        designed in Figma and we keep a parity between the two versions even as we update the project.</p>
    </li>
    <li class="ml-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
      </div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components
        and interactive elements built on top of Tailwind CSS.</p>
    </li>
  </ol>
  <p class="mt-5">This timeline component is part of a larger, open-source library of Tailwind CSS components. Learn more
    by going to the official <a class="text-blue-600 hover:underline"
      href="#" target="_blank">Flowbite Documentation</a>.
  </p>
</div>

      <!-- component -->
      <div class="container bg-gray-200 mx-auto w-full h-full">
          <div class="relative wrap overflow-hidden p-10 h-full">
              <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>
              <!-- right timeline -->
              <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                  </div>
                  <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                      <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
              <!-- left timeline -->
              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                  </div>
                  <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                      <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>

              <!-- right timeline -->
              <div class="mb-8 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                  </div>
                  <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                      <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
              <!-- left timeline -->
              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                      <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                  </div>
                  <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                      <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                      <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
// import imageUrl from '../assets/kingsman.jpg' // => or relative path
</script>

<style scoped>

</style>