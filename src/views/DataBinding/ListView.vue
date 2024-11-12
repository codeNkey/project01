<template>
<div>
    <table>
        <thead>
            <tr v-for="(air, i) in humidifier" :key='i'>
                <th>{{ air.Id }}</th>       
                <th>{{ air.Name }}</th>
                <th>{{ air.Comp }}</th>
                <th>{{ air.price }}</th>
                <th><input type="text" v-model="air.qty"></th>
                <th>￦{{ air.qty * air.price }}원</th>
            </tr>
        </thead>
        <br>
        <br>
        <thead>
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>키</th>
                <th>몸무게</th>
                <th>BMI</th>
            </tr>
        </thead>
       <tbody>
         <tr v-for='(info, i) in personalInfo' :key="i" >
            <th>{{ info.num }}</th>
            <th>{{ info.name }}</th>
            <th><input type="text" v-model="info.key"></th>
            <th><input type="text" v-model="info.kGram"></th>
            <th>BMI: {{ info.kGram/((info.key ** 2) / 10000)}}</th>
        </tr>
       </tbody>
       
      
    </table>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            humidifier: [
                {
                    title: '번호',
                    Id: '1',
                    Name: 'sam',
                    Comp: 'Samsung',
                    price: 100000,
                    qty: 5
                    
                },
                {
                    title: '이름',
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
                
            ],
            personalInfo: [ {
                num: '1',
                name: '한희진',
                key: 0,
                kGram: 0,
                 
            },
            {
                num: '2',
                name: '최동진',
                key: 0,
                kGram: 0,
                 
            },
            {
                num: '3',
                name: '김순동',
                key: 0,
                kGram: 0,
                 
            },
            {
                num: '4',
                name: '트럼프',
                key: 0,
                kGram: 0,
                 
            },

            ]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>