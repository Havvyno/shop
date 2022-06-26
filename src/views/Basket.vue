<template>
  <div class="basket">
    <div class="basket__heading heading-two--core">
      Корзина
    </div>
    <div 
      v-if="basket.length <= 0"
      class="basket-empty subheading-two--core">
      Ваша корзина пока пуста. Отыщите в библиотеке необходимые фолианты.
    </div>
    <div 
      v-else
      class="basket-fill">
      <div class="basket__list">
        <div class="basket__item subheading-two--core">
          Название товара
        </div>
        <div class="basket__item subheading-two--core">
          Цена за шт.
        </div>
        <div class="basket__item subheading-two--core">
          Количество
        </div>
        <div class="basket__item subheading-two--core">
          Общая цена
        </div>
      </div>
      <div class="basket__product">
        <product
          v-for="item in basket"
          :key="item.id"
          v-bind:item="item"
        />
      </div>
      <div class="basket__total">
        <div class="basket__box">
          <div class="basket__title heading-three--core">
            Итого к оплате
          </div>
          <div class="basket__price heading-three--core">
            {{ `${totalFinal} р.` }}
          </div>
        </div>
        <div class="basket__action">
          <button 
            v-on:click="mutationBuyProduct(isAlert = true)"
            class="basket__button button-min--core">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <div 
      v-show="isAlert"
      class="baket-alert">
      <alert
        v-on:close-alert="closeAlert"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
import product from '@/components/product.vue'
import alert from '@/components/uiKit/alert.vue'
export default {
  name: 'Basket',
  data() {
    return {
      isAlert: false
    }
  },
  components: {
    product,
    alert
  },
  methods: {
    ...mapMutations([
      'mutationBuyProduct'
    ]),
    closeAlert() {
      this.isAlert = false
    },
    
  },
  computed: {
    ...mapState([
      'products',
      'basket'
    ]),
    totalFinal() {
      let result = []

      for(let item of this.basket) {
          result.push(item.price * item.amount)
      }

      result = result.reduce(function(sum, current) {
          return sum + current
      })

      return result
    }
  }
}
</script>

<style scoped>
  .basket {
    padding: 0px 70px;
    display: grid;
    grid-gap: 20px;
    justify-items: center;
  }

  .basket__heading {
    margin-top: 240px;
  }

  .basket-empty {
    margin-bottom: 150px;
    text-align: center;
  }

  .basket-fill {
    display: grid;
    grid-gap: 20px;
  }

  .basket__list {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    align-items: center;
  }

  .basket__item {
    padding: 0px 20px;
  }
  
  .basket__item:first-child {
    padding: 0px 40px;
  }

  .basket__product {
    display: grid;
    grid-gap: 20px;
  }

  .basket__total {
    display: grid;
    grid-gap: 20px;
    justify-items: center;
  }

  .basket__box {
    display: flex;
  }

  .basket__title {
    margin-right: 460px;
  }

  .basket__action {
    margin-bottom: 140px;
  }

  .basket__button {
    padding: 10px 120px;
  }

  .baket-alert {
    position: fixed;
    top: 25%;
  }

  @media screen and (max-width: 768px) {
    .basket {
      padding: 0px 34px;
    }

    .basket__heading {
      margin-top: 140px;
      font-size: 48px;
      line-height: 72px;
    }

    .basket__item {
      font-size: 18px;
      line-height: 27px; 
    }

    .basket__item:nth-last-child(3),
    .basket__item:nth-last-child(2) {
      display: none;
    }

    .basket__title {
      font-size: 24px;
      line-height: 36px;
      margin-right: 80px;
    }

    .basket__price {
      font-size: 24px;
      line-height: 36px;  
    }

    .basket__action {
      margin-bottom: 90px;
    }

    .basket__button {
      font-size: 24px;
      line-height: 36px;
      padding: 10px 100px;  
    }
  }

  @media screen and (max-width: 375px) {
    .basket {
      padding: 0px 15px;
      grid-gap: 40px;
    }

    .basket__heading {
      margin-top: 90px;
      font-size: 48px;
      line-height: 72px;
    }

    .basket__list {
      display: none;
    }

    .basket__box {
      flex-direction: column;
      align-items: center;
    }

    .basket__title {
      font-size: 24px;
      line-height: 36px;
      margin: 0px 0px 20px 0px;
    }

    .basket__price {
      font-size: 24px;
      line-height: 36px;
    }

    .basket__action {
      margin-bottom: 40px;
    }

    .basket__button {
      font-size: 24px;
      line-height: 36px;
      padding: 10px 40px;
    }
  }
</style>