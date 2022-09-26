<template>
    <button @click="loadMore">Показать еще</button>
</template>

<script>
export default {
    name: 'LoadMore',

    components: {},

    data() {
        return {
            count: 10
        }
    },
    computed: {},

    watch: {},

    mounted() {},

    methods: {
        loadMore() {
            let count = this.count
            this.$store.dispatch('loadMore', count)
            this.count += 10
        },
    }
}
</script>

<style lang="sass" scoped>

</style>