<template>
    <div>
        <client-only>
            <Header/>
        </client-only>
        <Nuxt />
        <client-only>
            <Footer/>
        </client-only>
  </div>
</template>

<script>
import Footer from '../components/Footer/footer.vue'
import Header from '../components/Header/header.vue'

    export default {
  components: { Header, Footer },
        
    }
</script>

<style>

</style>