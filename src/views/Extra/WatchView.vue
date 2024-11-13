<template>
<div>
    <div>
        <!-- <input type="text" name="" id="" v-model="myName"> -->
        <input type="text" name="" id="" v-model="yourName">
    </div>
    <div>
        <p>{{ myName }}</p>
        <p>{{ yourName }}</p>
    </div>
    <select name="" id="" v-model="selected">
        <option value="a">A</option>
        <option value="b">B</option>
    </select>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            myName:'',
            selected: '',
            selectedHistory: [],
            yourName: '',

        };
    },
    watch:{
        myName() {
             console.log(this.myName)
        },
        yourName(newValue, oldValue) {
            console.log('oldValue:', oldValue)
            console.log('newValue:', newValue)
        },
        selected(oldValue) {
            this.selectedHistory.push(oldValue)
            console.log(this.selectedHistory)
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>