<template>
<div>
    <div>{{todos}}</div>
    <div>{{todosCount}}</div>
    <div>{{doneTodosCount}}</div>
    <div>{{notDoneTodosCount}}</div>
    <button @click="addItem">추가</button>
    <button @click="removeItem(4)">삭제</button>
    <button @click="doneYN({id:1, done: false})">변경</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    computed: {
        todos() {
            return this.$store.state.todo.todos
        },
        todosCount() {
      return this.$store.getters['todo/todosCount']
        },
        doneTodosCount() {
      return this.$store.getters['todo/doneTodosCount']
        },
        notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
    },

    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addItem(){
        this.$store.commit('todo/add',{id:4, title:'할일 4', done:false})
        this.$store.dispatch('todo/add',{id:4, title:'할일 4', done:false})
        
    },
    removeItem(id) {
        this.$store.commit('todo/remove',id)
    },
    doneYN(doneState) {
        this.$store.commit('todo/doneYN',doneState)
    }
}
}
</script>