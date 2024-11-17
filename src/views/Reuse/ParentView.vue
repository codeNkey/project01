<template>
<div>
<h1>Parent Component</h1>
<br>
<br>
<h2>{{ recivedData }}</h2>
<h2>{{ childData }}</h2>
<button @click="changeValue" class="btn btn-primary">ChildData</button>

    <Child 
    :arr="[1,'2',3,4,5]"
    :bool="true"
    @change-num="getData"
    @child-send="getChildData"
    ref='child'/>
    
</div>
</template>
<script>
import ChildComponent from '@/components/flagment/ChildComponent.vue'

export default{ 
    name:'',
    components:{
        'Child': ChildComponent

    },
    data(){
        return{
            sampleData:'',
            parentNum: 10,
            recivedData: '',
            // ref: 'child',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(d, ) {
            console.log('getData 함수 호출')
            console.log(d ,)
        },
        getChildData(data) {
            this.recivedData = data
        },
        changeValue () {
            this.$refs.child.childData = '해당 데이터는 변경되었습니다.'
            this.$refs.child.childPrint()
            this.$refs.child.computedMethod
        },
    }
}
</script>