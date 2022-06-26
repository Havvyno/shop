<template>
    <div class="product">
        <div class="product__wrapper">
            <img 
                :src="`https://raw.githubusercontent.com/Havvyno/demo/main${item.img}`" 
                alt="Книга"
                class="product__img"
                width="90"
                height="135"
            >
        </div>
        <div class="product__box">
            <div class="product__title subheading-two--core">
                {{ item.title }}
            </div>
            <div class="product__price subheading-two--core">
                {{ `${item.price} p.` }}
            </div>
            <div class="product__action">
                <div class="left-side">
                    <button 
                        v-on:click="decrementProduct(item)"
                        class="left-side__button">
                        <img 
                            src="@/assets/images/sprites/minus.svg" 
                            alt="Уменьшить"
                            class="left-side__img"
                            width="32"
                            height="32"
                        >
                    </button>
                </div>
                <div class="center-side subheading-two--core">
                    {{ item.amount }}
                </div>
                <div class="right-side">
                    <button 
                        v-on:click="incrementProduct(item)"
                        class="right-side__button">
                        <img 
                            src="@/assets/images/sprites/plus.svg"  
                            alt="Увеличить"
                            class="right-side__img"
                            width="32"
                            height="32"
                        >
                    </button>
                </div>
            </div>
        </div>
        <div class="product__total subheading-two--core">
            {{ itemTotal }}
        </div>
        <div class="product__close">
            <button 
                v-on:click="mutationRemoveProduct(item.id)"
                class="product__button">
                <img 
                    src="@/assets/images/sprites/cross.svg" 
                    alt="Закрыть"
                    class="product__icon"
                    width="32"
                    height="32"
                >
            </button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
    name: 'product',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        itemTotal() {
            return this.item.amount * this.item.price
        },
    },
    methods: {
        ...mapMutations([
            'mutationRemoveProduct'
        ]),
        incrementProduct(item) {
            item.amount++
        },
        decrementProduct(item) {
            if(item.amount > 1) {
                item.amount--
            }
        }
    }
}
</script>

<style scoped>
    .product {
        border: 3px solid #000000;
        padding: 42px 29px 43px 55px;
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
        align-items: center;
    }

    .product__box {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
        align-items: center;
    }

    .product__action {
        display: grid;
        grid-gap: 30px;
        grid-auto-flow: column;
        align-items: center;
        justify-content: center;
    }

    .left-side__button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .right-side__button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .product__button {
        background: none;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .product {
            padding: 25px 64px 30px 65px;
        }

        .product__title {
            font-size: 18px;
            line-height: 27px;
        }

        .product__box {
            grid-auto-flow: row;
            justify-items: flex-start;
        }
        .product__price {
            display: none;
        }

        .center-side {
            font-size: 18px;
            line-height: 27px;
        }

        .product__total {
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media screen and (max-width: 375px) {
        .product {
            padding: 33px 25px 30px;
            grid-gap: 10px;
            grid-auto-flow: row;
            justify-items: center;
            position: relative;
            text-align: center;
        }

        .product__box {
            grid-gap: 10px;
            grid-auto-flow: row;
            justify-items: center;
        }
        .product__price {
            display: none;
        }

        .product__close {
            position: absolute;
            top: 5%;
            right: 10%;
        }
    }
</style>