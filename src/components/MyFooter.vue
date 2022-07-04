<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" :checked="isAllDone" @change="changeAllDone"/>
        </label>
        <span>
            <span>已完成{{ totalDone }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'MyFooter',
    data() {
        return {
            completed: 0
        }
    },
    computed: {
        totalDone() {
            let count = 0;
            this.todos.forEach(todo => {
                if (todo.done === true)
                    count++;
            });
            return count
        },
        total() {
            return this.todos.length;
        },
        isAllDone() {
            return this.total === this.totalDone
        }
    },
    methods: {
        clear() {
            this.clearDone()
        },
        changeAllDone(e){
            this.handleAllDone(e.target.checked)
        }
    },
    props: ['todos', 'clearDone','handleAllDone']
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>