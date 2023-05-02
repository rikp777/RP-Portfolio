<template>

    <intro-section />


    <github-calendar />
    <recommendations />
    <technologies />

    <work-experience />

<!--            &lt;!&ndash; about page title &ndash;&gt;-->
<!--            <h2 class="after-effect after:left-52">About Me</h2>-->
<!--            &lt;!&ndash; personal info for mobile devices start &ndash;&gt;-->
<!--            <div class="lg:hidden">-->
<!--                <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-stone-100 text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">-->
<!--                    &lt;!&ndash; profile image  &ndash;&gt;-->
<!--                    <img src="https://avatars.githubusercontent.com/u/33726176?v=4" class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about">-->
<!--                    <div class="pt-[100px] pb-8">-->
<!--                        <h2 class="mt-6 mb-1 text-[26px] font-semibold"> Monalisa Ashley-->
<!--                        </h2>-->
<!--                        <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">-->
<!--                            Ui/Ux Designer-->
<!--                            Software engineer-->
<!--                        </h3>-->

<!--                        <div class="flex justify-center space-x-3">-->
<!--                            &lt;!&ndash; facebook icon and link &ndash;&gt;-->
<!--                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">-->
<!--                                                <span class="socialbtn text-[#1773EA]">-->
<!--                                                    <i class="fa-brands fa-facebook-f"></i>-->
<!--                                                </span>-->
<!--                            </a>-->
<!--                            &lt;!&ndash; twitter icon and link &ndash;&gt;-->
<!--                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">-->
<!--                                                <span class="socialbtn text-[#1C9CEA]">-->
<!--                                                    <i class="fa-brands fa-twitter"></i>-->
<!--                                                </span>-->
<!--                            </a>-->
<!--                            &lt;!&ndash; dribbble icon and link &ndash;&gt;-->
<!--                            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">-->
<!--                                                <span class="socialbtn text-[#e14a84]">-->
<!--                                                    <i class="fa-brands fa-dribbble"></i>-->
<!--                                                </span>-->
<!--                            </a>-->
<!--                            &lt;!&ndash; linkedin icon and link &ndash;&gt;-->
<!--                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">-->
<!--                                                <span class="socialbtn text-[#0072b1]">-->
<!--                                                    <i class="fa-brands fa-linkedin-in"></i>-->
<!--                                                </span>-->
<!--                            </a>-->
<!--                        </div>-->

<!--                        &lt;!&ndash; personal info start &ndash;&gt;-->
<!--                        <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">-->
<!--                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">-->
<!--                                                <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">-->
<!--                                                    <i class="fa-solid fa-mobile-screen-button"></i>-->
<!--                                                </span>-->
<!--                                <div class="text-left ml-2.5">-->
<!--                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>-->
<!--                                    <p class="dark:text-white">+123 456 7890</p>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">-->
<!--                                                <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">-->
<!--                                                    <i class="fa-solid fa-envelope-open-text"></i>-->
<!--                                                </span>-->
<!--                                <div class="text-left ml-2.5">-->
<!--                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>-->
<!--                                    <p class="dark:text-white">example@mail.com</p>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">-->
<!--                                                <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">-->
<!--                                                    <i class="fa-solid fa-location-dot"></i>-->
<!--                                                </span>-->
<!--                                <div class="text-left ml-2.5">-->
<!--                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>-->
<!--                                    <p class="dark:text-white">Hong kong china</p>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="flex py-2.5">-->
<!--                                                <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">-->
<!--                                                    <i class="fa-solid fa-calendar-days"></i>-->
<!--                                                </span>-->
<!--                                <div class="text-left ml-2.5">-->
<!--                                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>-->
<!--                                    <p class="dark:text-white">May 27, 1990</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; personal info end &ndash;&gt;-->

<!--                        &lt;!&ndash; dowanload button &ndash;&gt;-->
<!--                        <button class="dowanload-btn">-->
<!--                            <img class="mr-3" src="./images/icons/dowanload.png" alt="icon"> Download-->
<!--                            CV-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; personal info for mobile devices end &ndash;&gt;-->

<!--            <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">-->
<!--                <div class="col-span-12 space-y-2.5">-->
<!--                    <div class="lg:mr-16">-->
<!--                        <p class="text-[#44566c] dark:text-color-910 leading-7"> I'm Creative Director-->
<!--                            and UI/UX Designer from Sydney, Australia, working in web development and-->
<!--                            print media. I enjoy turning complex problems into simple, beautiful and-->
<!--                            intuitive designs. </p>-->
<!--                        <p class="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My aim is to-->
<!--                            bring across your message and identity in the most creative way. I created-->
<!--                            web design for many famous brand companies. </p>-->
<!--                    </div>-->
<!--                    <div></div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </div>-->

<!--        &lt;!&ndash; what i do section start &ndash;&gt;-->
<!--        <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">-->
<!--            <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>-->
<!--            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">-->
<!--                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> Ui/Ux Design </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="about-box bg-[#fefaf0] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon1.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> App Development </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon2.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> Photography </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="about-box bg-[#fff4f4] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon3.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> Photography </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="about-box bg-[#fff0f8] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon4.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> Managment </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="about-box bg-[#f3faff] dark:bg-transparent">-->
<!--                    <img class="w-10 h-10 object-contain block" src="./images/icons/icon5.svg" alt="icon">-->
<!--                    <div class="space-y-2">-->
<!--                        <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>-->
<!--                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit-->
<!--                            amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; what i do section start &ndash;&gt;-->
<!--        <div class="px-2 sm:px-5 md:px-10 lg:px-14">-->
<!--            <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">-->
<!--                <h3 class="text-center dark:text-white text-6xl mb-3 font-semibold"> Clients </h3>-->
<!--                &lt;!&ndash; slider and slider items &ndash;&gt;-->
<!--                <div class="slickOne text-center px-2 pt-8 slick-initialized slick-slider">-->
<!--                    <div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 3204px; transform: translate3d(-1602px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand3.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand4.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand2.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide" data-slick-index="3" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand3.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide" data-slick-index="4" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand4.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-current slick-active" data-slick-index="5" aria-hidden="false" style="width: 178px;" tabindex="0">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-active" data-slick-index="6" aria-hidden="false" style="width: 178px;" tabindex="0">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned slick-active" data-slick-index="7" id="" aria-hidden="false" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned slick-active" data-slick-index="8" id="" aria-hidden="false" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand2.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand3.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand4.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="12" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div><div class="slick-slide slick-cloned" data-slick-index="13" id="" aria-hidden="true" style="width: 178px;" tabindex="-1">-->
<!--                        <img class="overflow-hidden brand-img" src="./images/slider/brand1.png" alt="brand icon">-->
<!--                    </div></div></div>-->






<!--                </div>-->
<!--                &lt;!&ndash; slider and slider items end &ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; footer start &ndash;&gt;-->
<!--        <footer class="overflow-hidden rounded-b-2xl" style="background: transparent">-->
<!--            <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved-->
<!--                by <a class="hover:text-[#FA5252] duration-300 transition" href="https://themeforest.net/user/ib-themes" target="_blank" rel="noopener noreferrer"> ib-themes</a>. </p>-->
<!--        </footer>-->
<!--        &lt;!&ndash; footer section end &ndash;&gt;-->
<!--    </div>-->
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import IntroSection from "./IntroSection.vue";
import GithubCalendar from "./GithubCalendar.vue";
import PageCard from "../common/PageCard.vue";
import Recommendations from "./Recommendations.vue";
import Technologies from "./Technologies.vue";
import WorkExperience from "./WorkExperience.vue";
const introVisible = ref(true)

onMounted(() => {
    setTimeout(() => {
        introVisible.value = false
    }, 5200)
})
</script>

<style scoped>

</style>