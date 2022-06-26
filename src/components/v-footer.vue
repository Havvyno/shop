<template>
    <div class="v-footer">
        <div class="left-side">
            <div class="left-side__logo">
                <img 
                    src="@/assets/images/sprites/logo.svg" 
                    alt="Olympians Books"
                    class="left-side__img"
                    width="310"
                    height="92"
                >
            </div>
            <div class="left-side__phone subheading-two--core">
                +30922040281
            </div>
        </div>
        <div class="right-side">
            <router-link 
                to="/"
                class="right-side__item link-footer--core">
                Главная
            </router-link>
            <router-link 
                to="/catalog"
                class="right-side__item link-footer--core">
                Каталог
            </router-link>
            <router-link 
                to="/basket"
                class="right-side__item link-footer--core">
                Корзина
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-footer'
}
</script>

<style scoped>
    .v-footer {
        background: #1596C1;
        padding: 15px 70px;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        position: absolute;
        width: 100%;
    }

    .left-side {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
        align-items: center;
    }

    .left-side__phone {
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        padding-left: 20px;
    }

    .right-side {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
        align-items: center;
    }

    .right-side__item {
        padding: 0px 20px;
    }

    @media screen and (max-width: 768px) {
        .v-footer {
            padding: 30px 34px;
        }

        .left-side__img {
            width: 160px;
            height: 60px;
        }

        .left-side__phone {
            font-size: 18px;
            line-height: 27px;
        }

        .right-side__item {
            padding: 0px 10px;
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media screen and (max-width: 375px) {
        .v-footer {
            padding: 10px 15px 30px;
            grid-gap: 10px;
        }
        
        .left-side {
            grid-auto-flow: row;
            grid-gap: 10px;
        }

        .left-side__img {
            width: 190px;
            height: 110px;
        }

        .left-side__phone {
            padding: 0%;
        }

        .right-side {
            grid-auto-flow: row;
            grid-gap: 10px;
            justify-items: flex-end;
        }

        .right-side__item {
            padding: 0%;
        }
    }
</style>