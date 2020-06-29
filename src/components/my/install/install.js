import demoExe from "./install.vue"

const demo={
  install(Vue){
    Vue.component("install-demo",demoExe)
  }
}
export default demo