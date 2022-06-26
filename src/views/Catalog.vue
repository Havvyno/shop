<template>
  <div class="catalog">
    <div class="intro">
      <div class="intro__heading heading-one--core">
        Собрание древних знаний
      </div>
      <div class="intro__action">
        <button 
            v-on:click="scrollWindow"
            class="intro__button button-main--core">
          Узнать больше
        </button>
      </div>
    </div>
    <div class="libary">
      <div class="libary__heading heading-two--core">
        Библиотека
      </div>
      <div class="libary__list">
        <div 
          class="libary__item">
          Категория
        </div>
        <div 
          v-on:click="sortedProducts(category.classic)"
          class="libary__item link-header--core">
          {{ category.classic }}
        </div>
        <div 
          v-on:click="sortedProducts(category.adventure)"
          class="libary__item link-header--core">
          {{ category.adventure }}
        </div>
        <div 
          v-on:click="sortedProducts(category.tales)"
          class="libary__item link-header--core">
          {{ category.tales }}
        </div>
      </div>
      <div class="libary__catalog">
        <div class="libary__desktop">
          <card
            v-for="item in filtredProducts.slice(currentIndexCarousel, indexCarouselDesktop)"
            :key="item.id"
            v-bind:item="item"
          />
        </div>
        <div class="libary__ipad">
          <card
            v-for="item in filtredProducts.slice(currentIndexCarousel, indexCarouselIpad)"
            :key="item.id"
            v-bind:item="item"
          />
        </div>
        <div class="libary__mobile">
          <card
            v-for="item in filtredProducts.slice(currentIndexCarousel, indexCarouselMobile)"
            :key="item.id"
            v-bind:item="item"
          />
        </div>
      </div>
      <div class="libary__carousel">
        <carousel
          v-on:next-carousel="nextCarousel"
          v-on:prev-carousel="prevCarousel"
          v-bind:currentIndexCarousel="currentIndexCarousel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import card from "@/components/card.vue"
import carousel from "@/components/uiKit/carousel.vue"

export default {
  name: 'Catalog',
  data() {
    return {
        currentIndexCarousel: 0,
        indexCarouselDesktop: 6,
        indexCarouselIpad: 4,
        indexCarouselMobile: 3,
        valueDescription: '',
        category: {
          classic: 'Классика',
          adventure: 'Приключения',
          tales: 'Сказки'
        }
    }
  },
  components: {
    card,
    carousel
  },
  methods: {
    sortedProducts(item) {
      this.valueDescription = item
    },
    scrollWindow() {
      window.scrollBy(950, 950)
    },
    nextCarousel() {
      if(this.currentIndexCarousel > 0) {
          this.currentIndexCarousel--
          this.indexCarouselDesktop--
          this.indexCarouselIpad--
          this.indexCarouselMobile--
      }
    },
    prevCarousel() {
      if(this.currentIndexCarousel >= this.products.length - 1) {
          this.currentIndexCarousel = 0
          this.indexCarouselDesktop = 9
          this.indexCarouselIpad = 4
          this.indexCarouselMobile = 3
      } else {
          this.currentIndexCarousel++
          this.indexCarouselDesktop++
          this.indexCarouselIpad++
          this.indexCarouselMobile++
      }
    },
  },
  computed: {
    ...mapState([
      'products'
    ]),
    filtredProducts() {
      if(this.valueDescription == '') {
        return this.products
      } else {
        return this.products.filter((item) => {
          return item.description == this.valueDescription
        })
      }
    }
  }
}
</script>

<style scoped>
  .catalog {
    display: grid;
    grid-gap: 140px;
  }

  .intro {
    padding: 0px 70px;
    background: url(@/assets/images/wallpaper/woman.png) no-repeat center;
    background-size: cover;
    height: 820px;
  }

  .intro__heading {
    padding: 120px 550px 0px 0px;
    color: #FFFFFF;
  }

  .intro__action {
    margin-top: 20px;
  }
  
  .intro__button {
    padding: 0px 40px;
  }

  .libary {
    padding: 0px 70px;
    display: grid;
    justify-items: center;
    grid-gap: 55px;
  }

  .libary__list {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    align-items: center;
  }

  .libary__item {
    padding: 0px 60px;
    font-family: 'Raleway';
    font-size: 24px;
    line-height: 36px;
    cursor: pointer;
  }

  .libary__item:first-child {
    font-family: 'Forum';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.07em;
    color: #000000;
    cursor: default;
  }

  .libary__desktop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fit, minmax(0,1fr));
    grid-gap: 20px
  }

  .libary__ipad {
    display: none;
  }

  .libary__mobile {
    display: none;
  }

  .libary__carousel {
    margin-bottom: 140px;
  }

  @media screen and (max-width: 768px) {
    .catalog {
      grid-gap: 90px;
    }

    .intro {
      padding: 0px 34px;
      height: 680px;
    }

    .intro__heading {
      padding: 70px 240px 0px 0px;
      font-size: 64px;
      line-height: 96px;
    }

    .intro__button {
      font-size: 24px;
      line-height: 36px;
      padding: 0px 20px;
    }

    .libary {
      padding: 0px 34px;
      grid-gap: 45px;
    }

    .libary__heading {
      font-size: 48px;
      line-height: 72px;
    }

    .libary__item {
      font-size: 18px;
      line-height: 27px;
      padding: 0px 30px;
    }

    .libary__item:first-child {
      font-size: 24px;
      line-height: 36px;
    }

    .libary__desktop {
      display: none;
    }

    .libary__ipad {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(auto-fit, minmax(0,1fr));
      grid-gap: 20px;
    }

    .libary__mobile {
      display: none;
    }

    .libary__carousel {
      margin-bottom: 90px;
    }
  }

  @media screen and (max-width: 375px) {
    .catalog {
      grid-gap: 40px;
    }

    .intro {
      padding: 0px 15px;
      height: 470px;
    }

    .intro__heading {
      padding: 60px 65px 0px 0px;
      font-size: 40px;
      line-height: 60px;
    }

    .intro__action {
      margin-top: 10px;
    }

    .intro__button {
      font-size: 24px;
      line-height: 36px;
      padding: 0px 10px;
    }

    .libary {
      padding: 0px 15px;
      grid-gap: 40px;
    }

    .libary__heading {
      font-size: 30px;
      line-height: 45px;
    }

    .libary__list {
      grid-auto-flow: row;
      text-align: center;
    }

    .libary__item {
      padding: 0px 20px;
      font-size: 18px;
      line-height: 27px;
    }

    .libary__item:first-child {
      font-size: 24px;
      line-height: 36px;
    }

    .libary__desktop {
      display: none;
    }

    .libary__ipad {
      display: none;
    }

    .libary__mobile {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(auto-fit, minmax(0,1fr));
      grid-gap: 10px
    }

    .libary__carousel {
      margin-bottom: 70px;
    }
  }
</style>