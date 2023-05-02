<template>
  <div class="col-span-12 lg:col-span-3 hidden lg:block h-screen sticky top-44">
      <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-gray-800 text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          <img src="https://avatars.githubusercontent.com/u/33726176?v=4" class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about">
          <div class="pt-[100px] pb-8">
              <h2 class="mt-6 mb-1 text-[26px] font-semibold"> Rik Peeters </h2>
              <h3 class="mb-4 text-secondary-content inline-block px-5 py-1.5 rounded-lg bg-gray-900">
                  Software Engineer
              </h3>
              <div class="flex justify-center space-x-3">
                  <a href="https://www.linkedin.com/in/rikpeeters-nl" target="_blank" rel="noopener noreferrer">
                      <span class="btn-standard hover:btn-primary-gradient text-[#0077B5] btn-transition bg-gray-900">
                          <r-icon :icon="['fa-brands', 'fa-linkedin-in']"/>
                      </span>
                  </a>

                  <a href="https://www.github.com/rikp777" target="_blank" rel="noopener noreferrer">
                      <span class="btn-standard hover:btn-primary-gradient text-[#333] btn-transition bg-gray-900">
                          <r-icon :icon="['fa-brands', 'fa-github']" />
                      </span>
                  </a>

                  <a href="https://www.last.fm/user/rikp777" target="_blank" rel="noopener noreferrer">
                      <span class="btn-standard hover:btn-primary-gradient text-[#1773EA] btn-transition bg-gray-900">
                          <r-icon :icon="['fa-brands', 'fa-lastfm']" />
                      </span>
                  </a>

                  <a href="https://www.instagram.com/me.rikp/" target="_blank" rel="noopener noreferrer">
                      <span class="btn-standard hover:btn-primary-gradient text-[#e95950] btn-transition bg-gray-900">
                          <r-icon :icon="['fa-brands', 'fa-instagram']"/>
                      </span>
                  </a>


              </div>
              <!-- personal infomation start -->
              <div class="p-7 rounded-2xl mt-7 bg-gray-900">
                  <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#E93B81] shadow-md btn-transition">
                          <r-icon :icon="['fa-solid', 'fa-mobile-screen-button']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Phone </p>
                          <p class="text-primary-content font-semibold">+31 6 1331 2009</p>
                      </div>
                  </div>
                  <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                      <span class="btn-standard hover:btn-primary-gradient bg-gray-800 text-[#6AB5B9] shadow-md btn-transition">
                          <r-icon :icon="['fa-solid', 'fa-envelope-open-text']"/>
                      </span>
                      <div class="text-left ml-2.5">
                          <p class="text-secondary-content text-xs font-medium"> Email </p>
                          <p class="text-primary-content font-semibold">rikpeeters@hotmail.com</p>
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
                  Download CV
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "MeCard"
}
</script>

<style scoped>

</style>