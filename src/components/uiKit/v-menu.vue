<template>
    <div class="v-menu">
        <div class="menu__wrapper">
            <button 
                v-on:click="$emit('close-menu')"
                class="menu__button">
                <img 
                    src="@/assets/images/sprites/arrow-up.svg" 
                    alt="Меню"
                    class="menu__img"
                    width="64"
                    height="18"
                >
            </button>
        </div>
        <div class="menu__list">
            <router-link
                to="/"
                class="menu__item link-header--core">
                Главная
            </router-link>
            <router-link
                to="/catalog"
                class="menu__item link-header--core">
                Каталог
            </router-link>
            <router-link
                to="/basket"
                class="menu__item link-header--core">
                Корзина
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-menu'
}
</script>

<style scoped>
    .v-menu {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 48px 120px 110px;
        position: absolute;
        right: 33%;
        top: 0%;
    }

    .menu__wrapper {
        margin-bottom: 54px;
    }

    .menu__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    .menu__list {
        display: grid;
        grid-gap: 56px;
        justify-items: center;
    }

    @media screen and (max-width: 768px) {
        .v-menu {
            padding: 20px 70px 70px;
            right: 27%;
        }

        .menu__wrapper {
            margin-bottom: 40px;
        }

        .menu__img {
            width: 32px;
            height: 10px;
        }

        .menu__list {
            grid-gap: 48px;
        }

        .menu__item {
            font-size: 22px;
            line-height: 33px;
        }
    }

    @media screen and (max-width: 375px) {
        .v-menu {
            padding: 19px 65px 70px;
            top: 0%;
            left: 0%;
            right: 0%;
            z-index: 1000;
        }

        .menu__wrapper {
            margin-bottom: 39px;
        }

        .menu__img {
            width: 40px;
            height: 11px;
        }
    }
</style>