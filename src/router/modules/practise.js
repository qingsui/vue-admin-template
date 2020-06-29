import Layout from "@/layout"
const practiseRouter={
  path:"/practise",
  component:Layout,
  hidden:false,
  redirect:'/practise/index',
  meta:{
    title:"前期练习",
    icon:"eye-open"
  },
  children:[
    {
      path:"index",
      component:()=>import("@/views/system/practise/index"),
      name:"PractiseIndex",
      meta:{
        title:"事件/插件/指令"
      }
    },
    {
      path:"observable",
      component:()=>import("@/views/system/practise/observable"),
      name:"Observable",
      mmeta:{
        title:'observable响应式信息管理'
      }
    },
    {
      path:"emit_on",
      component:()=>import("@/views/system/practise/emit_on"),
      name:"Emit_on",
      meta:{title:"emit和on的使用"}
    },
    {
      path:"provide_inject",
      component:()=>import("@/views/system/practise/provide_inject"),
      name:"Provide_inject",
      mmeta:{
        title:'provide_inject组件通信'
      }
    },

  ]
}
export default practiseRouter;