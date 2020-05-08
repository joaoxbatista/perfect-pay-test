<template>
    <div class="store">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <balance ref="balance"></balance>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4" v-for="product in products" :key="product.name">
                    <product 
                        :name="product.name" 
                        :price="product.price" 
                        :image="product.image"
                        :description="product.description"
                    >
                    </product>
                </div>
            </div>

            <div class="row product-selecteds" v-show="products_selecteds.length > 0">
                <div class="col-sm-12 products-selecteds__title">
                    List of purchased products
                </div>

                <div class="col-sm-6 col-md-6 product-selected " v-for="product_selected in products_selecteds" :key="product_selected.name">
                    <div class="row">
                        <div class="col-md-4 product-selected__image">
                            <img :src="product_selected.image" alt="">
                        </div>
                        <div class="col-md-8 product-selected__info">
                            {{ product_selected.name }} X  {{ product_selected.quantity }}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Product from '../components/Product';
import Balance from '../components/Balance';
export default {
    components: {
        Product,
        Balance
    },
    data () {
      return {
      }
    },


    created () {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll () {
            let header = this.$refs.balance.$refs.header

            if (window.pageYOffset > header.offsetTop + 60) {
                header.classList.add("sticky");
            }
            
            else if (window.pageYOffset <= 100) {
                header.classList.remove("sticky");
            } 
        }
    },

    computed: {
        ...mapState('product', [
            'products',
            'products_selecteds'
        ])
    }

    
}
</script>