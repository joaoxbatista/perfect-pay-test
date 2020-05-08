<template>
    <div class="product">
        <div class="product__image">
            <img :src="image" alt="">
        </div>

        <div class="product__info">
            <div class="product__name">
                {{ name }}
            </div>
           
            <div class="product__price">
                {{ parseBrCurrency(price) }}
            </div>

             <div class="product__description">
                {{ description }}
            </div>
        </div>

        <div class="product__action">
            <button :disabled="quantity <= 0" class="btn btn-danger" @click="seller()">Sell</button>
            <input readonly type="text" v-model="quantity">
            <button :disabled="(balance - ( debit + price)) < 0" class="btn btn-success" @click="buy()">Buy</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    props: {
        name: String,
        price: Number,
        image: String,
        description: String,
    },

    data () {
        return {
            quantity: 0
        }
    },

    methods: {
        ...mapMutations('balance', [
                'add_debit',
                'remove_debit'
            ]
        ),

        ...mapMutations('product', [
                'add_product',
                'remove_product'
            ]
        ),

        buy() {
            this.quantity += 1
            let product = { name: this.name, price: this.price, image: this.image}
            this.add_product(product)
            this.add_debit(parseFloat(this.price))
            
        },

        seller() {
            if(this.quantity > 0) {
                let product = { name: this.name, price: this.price, image: this.image};
                this.remove_product(product)
                this.remove_debit(parseFloat(this.price))
                this.quantity -= 1
            }
            else {
                alert('the value must be greater than zero!')
            }
        },

        parseBrCurrency(value) {
            return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        }
    },

    computed: {
        ...mapState('balance', [
            'balance',
            'debit'
        ])
    }
}
</script>
