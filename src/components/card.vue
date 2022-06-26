<template>
    <div class="card">
        <div class="card__wrapper">
            <img 
                :src="`https://raw.githubusercontent.com/Havvyno/demo/main${item.img}`" 
                alt="Книга"
                class="card__img"
                width="200"
                height="300"
            >
        </div>
        <div class="card__title subheading-two--core">
            {{ item.title }}
        </div>
        <div class="card__description subheading-three--core">
            {{ item.description }}
        </div>
        <div class="card__box">
            <div class="card__price subheading-one--core">
                {{ `${item.price} p.` }}
            </div>
            <div class="card__action">
                <button 
                    v-on:click="mutationAddProduct(item.id)"

                    class="card__button button-min--core">
                    Купить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'card',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations([
            'mutationAddProduct'
        ]),
    }
}
</script>

<style scoped>
    .card {
        padding: 20px;
        border: 3px solid #000000;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .card__wrapper {
        margin-bottom: 29px;
    }

    .card__title {
        text-align: center;
        width: 300px;
    }

    .card__description {
        margin-bottom: 20px;
        padding: 20px 0px;
    }

    .card__box {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
        align-items: center;   
        margin-top: auto; 
    }

    .card__button {
        padding: 0px 10px;
    }

    @media screen and (max-width: 768px) {
        .card {
            padding: 24px 10px 25px;
        }

        .card__wrapper {
            margin-bottom: 26px;
        }

        .card__title {
            font-size: 18px;
            line-height: 27px;
            max-width: 250px;
        }

        .card__description {
            margin-bottom: 40px;
            padding: 10px 0px;
            font-size: 14px;
            line-height: 21px;
        }

        .card__price {
            font-size: 22px;
            line-height: 33px;
        }

        .card__button {
            font-size: 20px;
            line-height: 36px;
        }
    }

    @media screen and (max-width: 375px) {
        .card {
            padding: 30px 25px 30px;
        }
        
        .card__wrapper {
            margin-bottom: 40px;
        }

        .card__img {
            width: 132px;
            height: 200px;
        }

        .card__title {
            margin-bottom: 10px;
            max-width: 240px;
        }

        .card__description {
            margin-bottom: 39px;
            padding: 0px;
        }

        .card__box {
            grid-gap: 10px;
        }
    }
</style>