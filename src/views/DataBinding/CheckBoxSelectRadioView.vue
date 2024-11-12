<template>
<div>
    <div><h1>공화당과 민주당</h1>
    <p>{{ favoritDang }}</p>
    </div>
    <input type="checkbox" name="" id="바이든" value="바이든" v-model="favoritDang">
    <label for="바이든">바이든</label>
    <input type="checkbox" name="" id="트럼프" value="트럼프" v-model="favoritDang">
    <label for="트럼프">트럼프</label>
    <input type="checkbox" name="" id="해리스" value="해리스" v-model="favoritDang">
    <label for="해리스">해리스</label>
    <br>
    <br>
    <div>
        <div><h1>먹고 싶다 아이스크림</h1>
        <p>{{ favoritIce }}</p>
        </div>
    <select name="" id="" v-model="favoritIce">
        <option value="">없음</option>
        <option value="바밤바">바밤바</option>
        <option value="쭈쭈바">쭈쭈바</option>
        <option value="월드콘">월드콘</option>
        <option value="돼지바">돼지바</option>
    </select>
    <br>
    <br>
    <div>
        <h1>내가 좋아하는 언어</h1>
        <p>{{ language }}</p>
    </div>
    <div>
        <input type="radio" name="" id="ko" value="Korean" v-model="language">
        <label for="ko">Korean</label>
    </div>
    <div>
        <input type="radio" name="" id="en" value="English" v-model="language">
        <label for="en">English</label>
    </div>
    <div>
        <input type="radio" name="" id="ch" value="China" v-model="language">
        <label for="ch">China</label>
    </div>
    <div>
        <input type="radio" name="" id="sp" value="Spanish" v-model="language">
        <label for="sp">Spanish</label>
    </div>
    <div>
        <input type="radio" name="" id="없음" value="" v-model="language">
        <label for="없음">없음</label>
    </div>
    </div>
    
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            favoritDang: [
            ],
            favoritIce: '',
            language: 'Spanish',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>