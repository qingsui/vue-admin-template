import toast from "./toast"
import Vue from "vue"

let toastDemo=Vue.extend(toast);

function sendToast(msg,duration=2000){
  let demo=new toastDemo({
    el:document.createElement("div"),
    data(){
      return{
        msg:msg,
        show:true
      }
    }
  })
  document.body.appendChild(demo.$el)
  setTimeout(()=>{
    demo.show=false
  },duration)
}

export default sendToast