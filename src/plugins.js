export default {
    install(Vue) {
        Vue.directive('f-bind', {
            add(element, binding) {
                element.innerText = binding.value * 10
            },
            bind(element, binding) {//指令和元素成功绑定时执行
                element.value = binding.value
            },
            inserted(element, binding) {//指令所在元素被插入页面时执行
                element.focus()
            },
            update(element, binding) {//指令所在模板被重新解析时执行
                element.value = binding.value
            }
        })
        Vue.mixin({
            methods: {
                show() {
                    alert(this.name)
                }
            },
        })
    }
}