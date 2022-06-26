<template>
    <div class="home">
        <div class="intro">
            <div class="intro__heading heading-one--core">
                Книги, которые вознесут вас на Олимп
            </div>
            <div class="intro__action">
                <button 
                    v-on:click="scrollWindow"
                    class="intro__button button-main--core">
                    Узнать больше
                </button>
            </div>
        </div>
        <div class="library">
            <div class="library__heading heading-two--core">
                Горячие новинки
            </div>
            <div class="library__cards">
                <div class="library__desktop">
                    <card
                        v-for="item in products.slice(currentIndexSlider, indexSliderDesktop)"
                        :key="item.id"
                        v-bind:item="item"
                    />
                </div>
                <div class="library__ipad-mobile">
                    <card
                        v-for="item in products.slice(currentIndexSlider, indexSliderIpadMobile)"
                        :key="item.id"
                        v-bind:item="item"
                    />
                </div>
            </div>
            <div class="library__controller">
                <slider
                    v-on:next-slider="nextSlider"
                    v-on:prev-slider="prevSlider"
                />
            </div>
        </div>
        <div class="about">
            <div class="about__top-side"></div>
            <div class="about__box">
                <div class="about__title heading-two--core">
                    О нас
                </div>
                <div class="about__subtitle subheading-two--core">
                    Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто магазин, а настоящий клуб любителей книги, который объединяет в своем культурном пространстве людей самых разных интересов.
                </div>
            </div>
            <div class="about__box">
                <div class="about__title heading-two--core">
                    Гармония
                </div>
                <div class="about__subtitle subheading-two--core">
                    Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много нового о книгах и писателях.
                </div>
            </div>
            <div class="about__bottom-side"></div>
        </div>
        <div class="contact">
            <div class="contact__heading heading-three--core">
                Хотите знать о книгах всё?
            </div>
            <div class="contact__subheading subheading-two--core">
                Подпишитесь на нашу новостную рассылку
            </div>
            <div class="contact__container">
                <div class="contact__wrapper">
                    <input 
                        type="text"
                        class="contact__input input-main--core"
                        v-model="valueEmail"
                    >
                </div>
                <div class="contact__action">
                    <button 
                        v-on:click="getEmail"
                        class="contact__button button-min--core">
                        Отправить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import card from "@/components/card.vue"
import slider from "@/components/uiKit/slider.vue"

export default {
    name: 'Home',
    data() {
        return {
            currentIndexSlider: 0,
            indexSliderDesktop: 3,
            indexSliderIpadMobile: 1,
            valueEmail: '',
        }
    },
    components: {
        card,
        slider
    },
    methods: {
        scrollWindow() {
            window.scrollBy(900, 900)
        },
        prevSlider() {
            if(this.currentIndexSlider > 0) {
                this.currentIndexSlider--
                this.indexSliderDesktop--
                this.indexSliderIpadMobile--
            }
        },
        nextSlider() {
            if(this.currentIndexSlider >= this.products.length - 1) {
                this.currentIndexSlider = 0
                this.indexSliderDesktop = 3
                this.indexSliderIpadMobile = 1
            } else {
                this.currentIndexSlider++
                this.indexSliderDesktop++
                this.indexSliderIpadMobile++
            }
        },
        getEmail() {
            this.valueEmail = ''
        }
    },
    computed: {
        ...mapState([
            'products',
            'basket'
        ])
    }
}
</script>

<style scoped>
    .home {
        display: grid;
        grid-gap: 140px;
    }

    .intro {
        padding: 0px 70px;
        background: url(@/assets/images/wallpaper/man.png) no-repeat right;
        background-size: cover;
        height: 940px;
    }

    .intro__heading {
        color: #FFFFFF;
        padding: 120px 440px 0px 0px;
    }

    .intro__action {
        margin-top: 20px;
    }

    .intro__button {
        padding: 0px 40px;
    }

    .library {
        padding: 0px 70px;
        display: grid;
        grid-gap: 70px;
        justify-items: center;
    }

    .library__desktop {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
    }

    .library__ipad-mobile {
        display: none;
    }

    .about {
        padding: 0px 70px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 590px);
    }

    .about__top-side {
        background: url(@/assets/images/wallpaper/book.png) no-repeat center;
        background-size: cover;
    }

    .about__box {
        background: #1596C1;
        padding: 50px 56px 120px;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .about__title {
        color: #FFFFFF;
    }

    .about__subtitle {
        color: #FFFFFF;
    }

    .about__bottom-side {
        background: url(@/assets/images/wallpaper/statue.png) no-repeat center;
        background-size: cover;
    }

    .contact {
        padding: 0px 70px;
        display: grid;
        grid-gap: 30px;
        justify-items: center;
        margin-bottom: 140px;
    }

    .contact__container {
        display: grid;
        grid-gap: 20px;
        grid-auto-flow: column;
    }

    .contact__input {
        min-width: 750px;
    }

    .contact__button {
        padding: 0px 20px;
    }

    @media screen and (max-width: 768px) {
        .home {
            grid-gap: 90px;
        }

        .intro {
            padding: 0px 34px;
            height: 820px;
        }

        .intro__heading {
            font-size: 64px;
            line-height: 96px;
            padding: 70px 240px 0px 0px;
        }

        .intro__button {
            padding: 0px 30px;
            font-size: 24px;
            line-height: 36px;
        }

        .library {
            padding: 0px 34px;
            grid-gap: 45px;
        }

        .library__desktop {
            display: none;
        }

        .library__ipad-mobile {
            display: grid;
        }

        .library__heading {
            font-size: 48px;
            line-height: 72px;
        }

        .library__controller {
            position: absolute;
            top: 260%;
        }

        .about {
            padding: 0px 34px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 550px);
        }
        
        .about__box {
            padding: 25px 80px 50px;
        }

        .about__title {
            font-size: 35px;
            line-height: 72px;
        }

        .about__subtitle {
            font-size: 18px;
            line-height: 27px;
        }

        .contact {
            padding: 0px 34px;
            grid-gap: 20px;
            margin-bottom: 90px;
        }

        .contact__heading {
            font-size: 30px;
            line-height: 45px;
        }

        .contact__subheading {
            font-size: 18px;
            line-height: 27px;
        }

        .contact__input {
            min-width: 400px;
        }

        .contact__button {
            font-size: 24px;
            line-height: 36px;
            padding: 5px 20px;
        }
    }

    @media screen and (max-width: 375px) {
        .home {
            grid-gap: 70px;
        }

        .intro {
            padding: 0px 15px;
            height: 590px;
        }

        .intro__heading {
            padding: 60px 25px 0px 0px;
            font-size: 40px;
            line-height: 60px;
        }

        .intro__action {
            margin-top: 10px;
        }

        .intro__button {
            padding: 0px 10px;
            font-size: 24px;
            line-height: 36px;
        }

        .library {
            padding: 0px 15px;
            grid-gap: 40px;
        }

        .library__desktop {
            display: none;
        }

        .library__ipad-mobile {
            display: grid;
        }
        
        .library__heading {
            font-size: 30px;
            line-height: 45px;
        }

        .library__controller {
            position: inherit;
        }

        .about {
            padding: 0px 15px;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(4, 523px);
        }

        .about__top-side {
            order: 2;
        }

        .about__box {
            padding: 30px 30px 25px;
        }
        
        .about__box:nth-last-child(3) {
            order: 1;
        }

        .about__box:nth-last-child(2) {
            order: 3;
        }

        .about__title {
            font-size: 30px;
            line-height: 45px;
        }

        .about__subtitle {
            font-size: 18px;
            line-height: 27px;
        }

        .about__bottom-side {
            order: 4;
        }

        .contact {
            padding: 0px 15px;
            grid-gap: 20px;
            margin-bottom: 70px;
            text-align: center;
        }

        .contact__heading {
            font-size: 30px;
            line-height: 45px;
        }

        .contact__subheading {
            font-size: 18px;
            line-height: 27px;
        }

        .contact__container {
            grid-gap: 10px;
            grid-auto-flow: row;
        }

        .contact__input {
            min-width: 290px;
        }

        .contact__button {
            padding: 0px 10px;
            font-size: 24px;
            line-height: 36px;
        }
    }
</style>