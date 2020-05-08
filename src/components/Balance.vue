<template>
    <div class="balance" ref="header">
        {{ balance_br }} left
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('balance', [
            'balance_br'
        ])
    }
}
</script>