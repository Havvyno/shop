<template>
    <div class="slider">
        <div class="left-side">
            <button 
                v-on:click="prevSlider"
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
        <div class="center-side">
            <div class="center-side__item"></div>
            <div class="center-side__item"></div>
            <div class="center-side__item"></div>
        </div>
        <div class="right-side">
            <button 
                v-on:click="nextSlider"
                class="right-side__button">
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
export default {
    name: 'slider',
    methods: {
        nextSlider() {
            this.$emit('next-slider')
        },
        prevSlider() {
            this.$emit('prev-slider')
        }
    }
}
</script>

<style scoped>
    .slider {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 77px;
    }

    .left-side__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    .center-side {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 55px;
        align-items: center;
    }

    .center-side__item {
        border: 3px solid #000000;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    
    .center-side__item:first-child {
        background: #000000;
    }

    .right-side__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    @media screen and (max-width: 768px) {
        .slider {
            grid-gap: 451px;
        }

        .center-side {
            display: none;
        }
    }

    @media screen and (max-width: 375px) {
        .slider {
            grid-gap: 138px;
        }

        .center-side {
            display: none;
        }
    }
</style>