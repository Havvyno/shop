<template>
    <div class="alert">
        <div class="alert__close">
            <button 
                v-on:click="$emit('close-alert')"
                class="alert__button">
                <img 
                    src="@/assets/images/sprites/cross.svg" 
                    alt="Закрыть"
                    class="alert__img"
                    width="32"
                    height="32"
                >
            </button>
        </div>
        <div class="alert__title subheading-one--core">
            Благодарим за покупку! Ваши ценные манускрипты прибудут в ближайшее время. Возвращайтесь ещё!
        </div>
    </div>
</template>

<script>
export default {
    name: 'alert'
}
</script>

<style scoped>
    .alert {
        background: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        padding: 52px  110px 123px;
        border: 1px solid rgba(0, 0, 0, 0.200);
    }

    .alert__close {
        margin-bottom: 20px;
    }

    .alert__button {
        background: none;
        cursor: pointer;
        border: none;
    }

    .alert__title {
        font-family: 'Forum';
        font-feature-settings: normal;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .alert {
            padding: 30px 60px 73px;
        }

        .alert__close {
            margin-bottom: 6px;
        }

        .alert__title {
            font-size: 22px;
            line-height: 33px;
        }
    }

    @media screen and (max-width: 375px) {
        .alert {
            padding: 29px 40px 30px;
        }

        .alert__close {
            margin-bottom: 0px;
        }

        .alert__title {
            font-size: 22px;
            line-height: 33px;
        }
    }
</style>