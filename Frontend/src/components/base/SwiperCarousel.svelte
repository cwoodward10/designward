<script lang="ts">
    import { onMount } from 'svelte';

    import 'swiper/css/bundle';
    import { Swiper} from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';

    onMount(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // Optional parameters
            cssMode: true,
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 10,
            breakpoints: {
                740: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                }
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    })
</script>

<!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <button class="swiper-button-prev" on:click={() => Swiper}></button>
    <button class="swiper-button-next"></button>
  </div>

<style>
    .swiper {
        --swiper-navigation-color: var(--color-accent-primary);
        --swiper-pagination-bullet-inactive-color: var(--color-primary);
        --swiper-pagination-color: var(--color-accent-primary);
        --swiper-pagination-bullet-inactive-opacity: 1;
    }
    .swiper-slide {
        height: 400px;
        background-color: gray;

        scale: 80%;
        opacity: 0;
        transition-property: opacity, scale;
        transition-duration: 200ms, 300ms;
        transition-timing-function: ease;

        &.swiper-slide-prev, &.swiper-slide-next {
            scale: 90%;
            opacity: 90%;
        }
        &.swiper-slide-active {
            scale: 100%;
            opacity: 100%;
        }
    }
</style>