<template>
<div>
    <p>{{ $t('Hello', {name: userName}) }}</p>
    <p>{{ $t('Welcome',) }}</p>
    <p>{{ $t('language') }}</p>

    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('ko')">한국어</button>
    <button @click="changeLanguage('es')">Spanish</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userName: 'heejin'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        changeLanguage(language) {
            this.$i18n.locale = language
        }
    }
}
</script>