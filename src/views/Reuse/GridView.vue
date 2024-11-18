<template>
<div>
    <button class="btn btn-primary" @click="startSearch">자료 조사 시작</button>&emsp;
    <button class="btn btn-danger" @click="doDelete">삭제</button>
    <br>
    <br>
<Simple 
:headers="headers"
:items="dataBase"
@diff-change='changeDiff'
@change-item='checkBoxSelected'

/>
</div>
</template>
<script>
import SimpleGrid from '@/components/flagment/SimpleGrid.vue';
export default{ 
    name:'',
    components:{'Simple':SimpleGrid},
    data(){
        return{
            dataBase : [],
            headers : [
                {title:'국가', key: 'exchange'},
                {title:'살때', key: 'sale'},
                {title:'팔때', key: 'buy'},
                {title:'변경', key: 'diff'},
            ],
            allData: [],
            checkedItems : [],
            

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startSearch() {
            this.dataBase = 
            [{  
                exchange : "미국 USD",
                sale : 1396,
                buy : 1420,
                diff : "전일 상승"
            },{  
               
                exchange : "유럽 EUR",
                sale : 1473,
                buy : 1502,
                diff : "전일 하락"

            },{ 
                exchange : "일본 JPY",
                sale : 894,
                buy : 909,
                diff : "전일 하락"
            },{ 
                exchange : "중국 CNY",
                sale : 192,
                buy : 202,
                diff : "전일 상승"
            }]
            this.allData = this.dataBase
            this.delData = this.dataBase
        },
        changeDiff (data) {
            if (data === 'high') {
                console.log(data)
                    this.dataBase = this.allData.filter((pdata) => {
                       return pdata.diff === '전일 상승'
                    }
                )  
            }
            else if (data === 'low') {
                console.log(data)
                    this.dataBase = this.allData.filter((pdata) =>{
                        return pdata.diff === '전일 하락'
                    }
                )
            }
            else {
                console.log(data)
                this.dataBase = this.allData
            }
                
            },
            checkBoxSelected (data) {
                console.log(data)
                this.checkedItems = data
            },
                radioSelected (data) {
                    this.radioItems = data    
                },
            doDelete() {
                this.dataBase = this.dataBase.filter(
                    (data) => !this.checkedItems.includes(data.exchange)
                )
            },
             
            },
             
    }

</script>