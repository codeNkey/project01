<template>
<div>
    <button class="btn btn-primary" @click="doSearch">조회</button>
     <!-- <table class="table table-bordered">
       
        <thead>
            <tr>
                <th>번호</th>
                <th>Id</th>
                <th>제조사</th>
                <th>가격</th>
                <th>구매개수</th>
            </tr>
        </thead>
       <tbody>
         <tr v-for='(info, i) in humidifier' :key="i" >
            <th>{{ info.Id }}</th>
            <th>{{ info.Name }}</th>
            <th>{{ info.Comp }}</th>
            <th>{{ info.price }}</th>
            <th>{{ info.qty }}</th>
            
        </tr>
       </tbody>
    </table> -->
    <Simple
    :headers = headers
    :items = humidifier
    />
</div>
</template>
<script>
import SimpleGrid from '@/components/flagment/SimpleGrid.vue';

export default{ 
    name:'',
    components:{ 'Simple' : SimpleGrid},
    data(){
        return{
             humidifier : [],
             headers : [
                {title: '제품번호', key : 'Id'},
                {title: '제품명', key: 'Name'},
                {title: '제조사', key: 'Comp'},
                {title: '가격', key: 'price'},
                {title: '구매개수', key: 'qty'},
             ],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        doSearch() {
                this. humidifier = [
                {
                    Id: '1',
                    Name: 'sam',
                    Comp: 'Samsung',
                    price: 100000,
                    qty: 5
                    
                },
                {
                    Id: '2',
                    Name: 'lg',
                    Comp: 'LG',
                    price: 110000,
                    qty: 5
                },
                {
                    Id: '3',
                    Name: 'cucu',
                    Comp: 'Cu',
                    price: 98000,
                    qty: 5
                },
                {
                    Id: '4',
                    Name: 'sk-elect',
                    Comp: 'Sk',
                    price: 105000,
                    qty: 5
                },
                {
                    Id: '5',
                    Name: 'deawoo',
                    Comp: 'DEAWOO',
                    price: 125000,
                    qty: 5
                },
                
                ]
        }
    }
}
</script>
