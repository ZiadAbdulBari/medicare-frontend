<template>
    <div>
        <client-only>
            <Header v-if="!navExclude.includes(currentRoute)" />
        </client-only>
        <Nuxt />
        <client-only>
            <Footer v-if="!navExclude.includes(currentRoute)" />
        </client-only>
  </div>
</template>

<script>
import Footer from '../components/Footer/footer.vue'
import Header from '../components/Header/header.vue'
export default {
    components: { Header, Footer },
    data(){
        return{
        navExclude: ['registration']
        }
    },
    computed: {
        currentRoute(){
            return this.$route.name
        }
    },
}
</script>

<style>

</style>