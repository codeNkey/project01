<template>
<div>
    <p>{{ childData }}</p>
    <p>{{str}}</p>
    <p>{{num}}</p>
    <p>{{bool}}</p>
    <p>{{arr}}</p>
    <p>{{obj}}</p>
    <select name="" id="" @change="callParent()" v-model.number="selectedNum">
        <option :value="n" v-for="n in arr" :key="n">{{n}}</option>
    </select>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    props: {
        str: {
            type:String,
            default: '',
        },
        num: {
            type: Number,
            default: 0,
        },
        bool: {
            type: Boolean,
            default: true,    
        },
        arr: {
            type: Array,
            default: function() {
                return []
            },
        },
        obj: {
            type: Object,
            default: function() {
                return {}
            },
        }


    },
    data(){
        return{
            sampleData:'',
            selectedNum: 0,
            childData: '이 데이터는 자식컴포넌트에서 전달된  데이터 입니다.',
            childRef1: '이 것은 자식컴포넌트에서 온 데이터 입니다.'
        };
    },
    computed: {
        computedMethod() {
           console.log('콤퓨티드에서 온 데이터입니다.')
            
        }
    },
    setup(){},
    created(){
        
    },
    mounted(){
        this.$emit("child-send", this.childData)
    },
    unmounted(){},
    methods:{
        callParent() {
            this.$emit('change-num', this.selectedNum)
        },
        childPrint() {
            console.log(this.childData)
        },
    
    }
}
</script>