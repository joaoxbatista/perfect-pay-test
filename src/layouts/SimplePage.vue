<template>
    <div class="simple-layout">  
        <div class="navbar">
            <div class="container">
                <div class="navbar__brand">
                    <a href="">PayPerfect -  Sell and Buy</a>
                </div>
            </div>
        </div>

        <div class="content">
            <router-view/>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="footer__made">
                    Made with ❤️ by João Batista
                </div>
                <div class="footer_copy">
                    jhonxbatista.com
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            balance: {}
        }
    },

}
</script>