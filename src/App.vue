<template>
    <div>
        <h1 ref="hello" v-text="msg"></h1>
        <Game name="L4D2" :price='18'></Game>
        <hr/>
        <Role name="Jack" :age="25"></Role>
    </div>

</template>

<script>
import Game from './components/Game'
import Role from './components/Role'
export default {
    data() {
        return {
            msg: "asdasdasdasdasd"
        }
    },
    components: {
        Game,
        Role
    }
}
</script>

<style>
</style>