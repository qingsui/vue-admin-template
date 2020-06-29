const install=function(Vue){
  Vue.directive("mew",{
    //包含一些方法
    //使用update在使用v-loading="isLoading"时，isLoading发生变化的时候执行
    //el代表指令插入的元素节点：对当前的el和el下面包含的DOM进行修改
    update(el,binding,vnode){
      //binding标识控制指令的表达式，在这里指的是isLoading变量，可以通过判断binding.value获取isLoading的值
      //vnode表示其绑定的指令的相关信息，可以有多个指令，存放在data.directives,以对象数组的形式
      if (binding.value) {
        const div = document.createElement('div')
        div.innerText = '加载中...'
        div.setAttribute('id', 'loading')
        div.style.position = 'absolute'
        div.style.left = 0
        div.style.top = 0
        div.style.width = '100%'
        div.style.height = '100%'
        div.style.display = 'flex'
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'
        div.style.color = 'white'
        div.style.background = 'rgba(0, 0, 0, .7)'
        document.body.append(div)
      } else {
        if(document.getElementById('loading')){
          document.body.removeChild(document.getElementById('loading'))
        }
      }
    }
  })
}
export default install