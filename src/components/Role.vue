<template>
  <div>
    <span @click="show">
        {{name}}------{{age}}
    </span>
  </div>
</template>

<script>
export default {
    name: 'Role',
    props:{
        name:{
            type: String
        },
        age:{
            type: Number,
            default: 18
        }
    }
}
</script>

<style>

</style>