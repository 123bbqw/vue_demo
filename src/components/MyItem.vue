<template>
    <li>
        <label>
            <input type="checkbox" :checked='todoObj.done' @change="handleCheck(todoObj.id)" />
            <span>{{ todoObj.title }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteTodo(todoObj.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'MyItem',
    props: ['todoObj', 'checkTodo','handleDelete'],
    methods: {
        handleCheck(id) {
            this.checkTodo(id)
        },
        deleteTodo(id){
            if(confirm("确定删除？"))
                this.handleDelete(id)
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:hover {
    background-color: gray;
}

li:hover button{
    display: block;
}

li:last-child {
    border-bottom: none;
}
</style>