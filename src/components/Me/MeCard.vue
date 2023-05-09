<template>
  <div class="col-span-10 lg:col-span-3 hidden lg:block h-screen sticky top-44">
      <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-gray-800 text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          <img src="https://avatars.githubusercontent.com/u/33726176?v=4" class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about">
          <div class="pt-[100px] pb-8">
              <h2 class="mt-6 mb-1 text-[26px] font-semibold"> Rik Peeters </h2>
              <h3 class="mb-4 text-secondary-content inline-block px-5 py-1.5 rounded-lg bg-gray-900">
                  Software Engineer
              </h3>
              <social-media/>
              <!-- personal infomation start -->
              <div class="p-7 rounded-2xl mt-7 bg-gray-900">
                  <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#E93B81] shadow-md btn-transition">
                          <r-icon :icon="['fa-solid', 'fa-laptop-code']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Skills </p>
                          <p class="text-primary-content font-semibold">Java, Vue.js</p>
                      </div>
                  </div>
                  <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#6AB5B9] shadow-md btn-transition">
                         <r-icon :icon="['fa-solid', 'fa-project-diagram']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Projects </p>
                          <p class="text-primary-content font-semibold">RP-Flowcontrol, RP-Fitness, RP-Portfolio</p>
                      </div>
                  </div>
                  <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#FD7590] shadow-md btn-transition">
                          <r-icon :icon="['fa-solid', 'fa-location-dot']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Location </p>
                          <p class="text-primary-content font-semibold">Netherlands</p>
                      </div>
                  </div>
                  <div class="flex py-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#C17CEB] shadow-md btn-transition">
                          <r-icon :icon="['fa-solid', 'fa-calendar-days']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Birthday </p>
                          <p class="text-primary-content font-semibold">Aug 3, 1998</p>
                      </div>
                  </div>
              </div>
              <!-- personal infomation end-->
              <!-- dowanload button -->
              <button class="mx-auto my-auto mt-5 flex items-center btn-primary-gradient btn-rounded btn-transition font-medium">
                  <r-icon :icon="['fa-solid', 'fa-download']" class="mr-2"/>
                  Contact
              </button>
          </div>
      </div>
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";

export default {
    name: "MeCard",
    components: {SocialMedia}
}
</script>

<style scoped>

</style>