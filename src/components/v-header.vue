<template>
    <div 
        class="v-header"
        :class="[`${$route.name === 'basket' ? 'v-header--mode' : ''}`]">
        <div class="logo">
            <img 
                src="@/assets/images/sprites/logo.svg" 
                alt="Olympians Books"
                class="logo__img"
                width="184"
                height="100"
            >
        </div>
        <div class="menu">
            <div class="menu__wrapper">
                <button 
                    v-on:click="openMenu"
                    class="menu__button">
                    <img 
                        src="@/assets/images/sprites/arrow.svg" 
                        alt="Меню"
                        class="menu__img"
                        width="64"
                        height="18"
                    >
                </button>
            </div>
            <div 
                v-show="isMenu"
                class="menu-dropdown">
                <v-menu
                    v-on:close-menu="closeMenu"
                />
            </div>
        </div>
        <div class="list">
            <div 
                v-if="basket <= 0"
                class="list__item">
                <img 
                    src="@/assets/images/sprites/basket.svg" 
                    alt="Корзина"
                    class="list__img"
                    width="54"
                    height="64"
                >
            </div>
            <div 
                v-else
                class="list__item">
                Товар в корзине
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import vMenu from "@/components/uiKit/v-menu.vue"

export default {
    name: 'v-header',
    components: {
        vMenu
    },
    data() {
        return {
            isMenu: false,
        }
    },
    computed: {
        ...mapState([
            'basket'
        ]),
    },
    methods: {
        openMenu() {
            this.isMenu = true
        },
        closeMenu() {
            this.isMenu = false
        }
    }
}
</script>

<style scoped>
    .v-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        padding: 18px 70px;
        width: 100%;
    }

    .v-header--mode {
        background: #1596C1;
    }

    .menu__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    .list__item:last-child {
        font-family: 'Forum';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        text-indent: 5px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 768px) {
        .v-header {
            padding: 9px 34px;
        }

        .logo__img {
            width: 160px;
            height: 50px;
        }

        .menu__img {
            width: 32px;
            height: 10px;
        }

        .list__img {
            width: 28px;
            height: 32px;
        }
        
        .list__item:last-child {
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media screen and (max-width: 375px) {
        .v-header {
            padding: 5px 15px;
        }

        .logo__img {
            width: 90px;
            height: 50px;
        }

        .menu__img {
            width: 40px;
            height: 12px;
        }

        .list__img {
            width: 34px;
            height: 40px;
        }

        .list__item:last-child {
            font-size: 13px;
            line-height: 27px;
        }
    }
</style>