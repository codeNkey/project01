<template>
<div>
    <label for="">가장 선호하는 프로그래밍 언어는?</label>
    <select name="" id="" @click="getLanguage()" >
        <option :value="lan.code" v-for="lan in language" :key="lan.code">{{ lan.title }}</option>
    </select>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
            language: '',
        };
    },
    // 컴포지션 API 호출
    setup(){},
    // 옵션 API가 초기화되기 전, data(),computed()같은 옵션 API의 초기화
    beforeCreate(){},
    // data(), computed(), watch(), methods를 모두 초기화해서 사용준비
    created(){
        // this.getLanguage()
    },
    // DOM 노드가 생성되기 전의 상태
    beforeMount(){},
    // 실제 DOM이 랜더링이 모두 끝난 상태
    mounted(){
        // this.getLanguage()
    },
    // 리랜더링(data 변경) 직전에 수행되는 단계
    beforeUpdate(){},
    // 리랜더링 된 후에 호출
    updated(){},
    //  현재 컴포넌트에서 빠져나오기 직전
    beforeUnmount(){},
    // 
    unmounted(){},
    methods:{ 
        getLanguage() {
            this.language = [{code: '01', title: '자바스크립트'}]
        }

    }
}
</script>