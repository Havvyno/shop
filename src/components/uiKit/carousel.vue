<template>
    <div class="carousel">
        <div class="left-side">
            <button 
                v-on:click="nextCarousel"
                class="left-side__button">
                <img 
                    src="@/assets/images/sprites/arrow-left.svg" 
                    alt="Влево"
                    class="left-side__img"
                    width="50"
                    height="50"
                >
            </button>
        </div>
        <div class="center-side subheading-one--core">
            {{ `${currentIndexCarousel + 1} / ${products.length}` }}
        </div>
        <div 
            v-on:click="prevCarousel"
            class="right-side">
            <button class="right-side__button">
                <img 
                    src="@/assets/images/sprites/arrow-right.svg"  
                    alt="Вправо"
                    class="right-side__img"
                    width="50"
                    height="50"
                >
            </button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: 'carousel',
    props: {
        currentIndexCarousel: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState([
            'products'
        ])
    },
    methods: {
        nextCarousel() {
            this.$emit('next-carousel')
        },
        prevCarousel() {
            this.$emit('prev-carousel')
        }
    }
}
</script>

<style scoped>
    .carousel {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 38px;
    }

    .left-side__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    .center-side {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        font-family: 'Forum';
        font-feature-settings: normal;
    }

    .right-side__button {
        background: none;
        cursor: pointer;
        border: none;
    }
</style>