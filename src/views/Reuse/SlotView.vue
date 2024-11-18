<template>
<div>
    <button class="btn btn-primary" data-bs-toggle = 'modal'
    data-bs-target = '#userModal'>
        Show modal
    </button>
    &emsp;
    <button class="btn btn-primary" data-bs-toggle = 'modal'
    data-bs-target = '#userModal'>
        User Modal3
    </button>
    
<slot-modal modalId=''>
    <template v-slot:title> 모달창 타이틀 </template>
    <template v-slot:body>
        <div class="row gy-2">
            <p>모달 1</p>    
            <p>모달 2</p>
            <p>모달 3</p>
        </div>
    </template>
    <template v-slot:footer>
        <button data-bs-dismiss='modal' class="btn btn-secondary" >닫기</button>
         </template>
</slot-modal>
<!-- <SlotModal 
:modalId = 'userModal'
/> -->
<slot-modal modalId='userModal'>
    <template v-slot:title>사용자</template>
    <template v-slot:body>
        <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">이름</label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" />
            </div>
        </div>
         <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">나이</label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control"/>
            </div>
        </div>
         <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">주소</label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" />
            </div>
        </div>
        </template>
        <template v-slot:footer> 
            <button class="btn btn-primary">저장</button>
        </template>
</slot-modal>

<slot-modal modalId=''>
    <template v-slot:title>사용자 입력창</template>
    <template v-slot:body>
        <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">이메일 주소</label>
            </div>
            <div class="col-9">
                <input type="email" class="form-control" />
            </div>
        </div>
         <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">전화번호</label>
            </div>
            <div class="col-9">
                <input type="tel" class="form-control"/>
            </div>
        </div>
         <div class="row gy-2">
            <div class="col-3">
                <label for="" class="form-label">주소</label>
            </div>
            <div class="col-9">
                <input type="text" class="form-control" />
            </div>
        </div>
        </template>
        <template v-slot:footer> 
            <button class="btn btn-primary">저장</button>
        </template>
</slot-modal>

</div>
</template>
<script>
import SlotModal from '@/components/flagment/SlotModal';

export default{ 
    name:'',
    components:{
        SlotModal,
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>