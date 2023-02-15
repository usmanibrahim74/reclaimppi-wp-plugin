import{_ as w,o as a,c as r,h as x,x as h,t as u,d as t,b as g,a as y,r as f,z as m,k as b,A as n,B as S,f as B,F as v,e as V,j as T,n as _}from"./reuseable.6619a4c7.js";const F={name:"HasError",props:{errors:{type:Object,required:!0},field:{type:String,required:!0},message:{type:String,default:null}},computed:{getMessage(){return this.message?this.message:"The above field is required."}}},I=["innerHTML"];function C(s,e,l,o,d,i){return l.errors.includes(l.field)?(a(),r("div",{key:0,class:"text-sm text-red-600 mb-2",innerHTML:i.getMessage},null,8,I)):x("",!0)}const Se=w(F,[["render",C]]),N={type:"button",class:"bg-red-600 border-2 border-solid font-medium text-white flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"},j={class:"ml-4 mt-1"},Be={__name:"NextButton",props:{text:{type:String,default:"Next"}},setup(s){return(e,l)=>{const o=y("IconNext");return a(),r("button",N,[h(u(s.text)+" ",1),t("span",j,[g(o)])])}}},A={type:"button",class:"text-gray-600 flex items-center justify-center py-4 px-20 rounded"},M={class:"mr-4"},Ve={__name:"BackButton",props:{text:{type:String,default:"Next"}},setup(s){return(e,l)=>{const o=y("IconPrevious");return a(),r("button",A,[t("span",M,[g(o)]),h(u(s.text),1)])}}},q={class:"mr-12"},H=["id","value","name","checked"],z=["for"],L={class:"w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"},P={key:0,class:"w-3 h-3 bg-blue-500 rounded-full"},Q={class:"ml-2 text-md font-medium dark:text-gray-300 text-black"},Te={__name:"RadioBox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(s){const e=s;let l=f({uuid:m.v4()});const o=b(()=>e.modelValue==e.value);return(d,i)=>(a(),r("div",q,[t("input",{id:n(l).uuid,type:"radio",value:e.value,name:e.name,class:"hidden",checked:n(o),onChange:i[0]||(i[0]=c=>d.$emit("update:modelValue",c.target.value=="true"))},null,40,H),t("label",{for:n(l).uuid,class:"flex items-center cursor-pointer"},[t("div",L,[n(o)?(a(),r("div",P)):x("",!0)]),t("span",Q,u(e.label),1)],8,z)]))}},E={class:"mb-1"},D=["for"],$={__name:"Question",props:{text:{type:String,default:"Question"},labelFor:{type:String,default:""}},setup(s){const e=s;return(l,o)=>(a(),r("div",E,[t("label",{for:s.labelFor,class:"text-lg font-bold"},u(e.text),9,D)]))}},O={class:"relative"},R=["id","type","value","disabled"],Fe={__name:"InputText",props:{label:{type:String,default:"Question"},type:{type:String,default:"text"},modelValue:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(s){let e=f({uuid:m.v4()});return(l,o)=>(a(),r("div",null,[g($,{labelFor:n(e).uuid,text:s.label},null,8,["labelFor","text"]),t("div",O,[t("input",{id:n(e).uuid,class:"w-full pr-9 rounded border-slate-300 border bg-white",type:s.type,value:s.modelValue,disabled:s.disabled,onInput:o[0]||(o[0]=d=>l.$emit("update:modelValue",d.target.value))},null,40,R),S(l.$slots,"default")])]))}},W={class:""},G={class:"relative"},J=["id"],K={value:null},U=["selected","value"],X=t("span",{class:"absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"},null,-1),Ie={__name:"InputSelect",props:{label:String,options:{type:Array,required:!0},modelValue:String,inSelect:{type:Boolean,default:!1}},setup(s){const e=s;let l=f({uuid:m.v4()});function o(i){return i.value||i}function d(i){return i.label||i}return(i,c)=>(a(),r("div",W,[s.inSelect?x("",!0):(a(),B($,{key:0,labelFor:n(l).uuid,text:s.label},null,8,["labelFor","text"])),t("div",G,[t("select",{id:n(l).uuid,onChange:c[0]||(c[0]=p=>i.$emit("update:modelValue",p.target.value)),class:"w-full rounded border-slate-300 bg-select bg-[length:20px_14px]"},[t("option",K,u(e.inSelect?e.label:"Select"),1),(a(!0),r(v,null,V(s.options,(p,k)=>(a(),r("option",{selected:e.modelValue==o(p),value:o(p),key:k},u(d(p)),9,U))),128))],40,J),X])]))}},Y={class:"flex items-start"},Z=["id","value","name","checked","disabled"],ee=["for"],Ce={__name:"SignCheckbox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},emits:["update:modelValue"],setup(s,{emit:e}){const l=s;let o=f({uuid:m.v4()});const d=b(()=>(console.log(l.modelValue==l.value),l.modelValue==l.value));function i(c){console.log(c.target.checked),e("update:modelValue",c.target.checked)}return(c,p)=>(a(),r("div",Y,[t("input",{id:n(o).uuid,type:"checkbox",value:l.value,name:l.name,class:"form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left cursor-pointer",checked:n(d),onClick:i,disabled:s.disabled},null,8,Z),t("label",{for:n(o).uuid,class:"ml-2 text-sm md:text-md font-medium text-gray-900 leading-tight"},u(l.label),9,ee)]))}},te={class:"my-4 text-center"},se={class:"text-xl sm:text-2xl font-bold"},le=t("div",null,[t("hr",{class:"border border-slate-200"})],-1),Ne={__name:"StepTitle",props:{title:{type:String,required:!0}},setup(s){const e=s;return(l,o)=>(a(),r(v,null,[t("div",te,[t("p",se,u(e.title),1)]),le],64))}},oe={class:"relative border-b border-gray-300 py-4 px-3"},ne={class:"text-2xl"},ae=t("span",null,"\xD7",-1),re=[ae],ie={class:"p-3"},ue={class:"border-t border-gray-300 text-right text-white py-2 px-3"},je={__name:"ModalMarkup",props:{title:{type:String,default:"Title"},text:{type:String,default:"Text"},buttonTitle:{type:String,default:"Close"}},setup(s){const e=s;return(l,o)=>(a(),r("div",null,[t("div",oe,[t("p",ne,u(e.title),1),t("button",{type:"button",class:"absolute right-4 top-3 text-3xl text-gray-400",onClick:o[0]||(o[0]=d=>l.$emit("close"))},re)]),t("div",ie,[t("p",null,u(e.text),1)]),t("div",ue,[t("button",{onClick:o[1]||(o[1]=d=>l.$emit("close")),class:"bg-blue-600 text-sm py-2 px-6 rounded"}," Close ")])]))}},de={class:""},ce=["for"],pe={class:"relative"},_e=t("span",{class:"absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10"},"\xA3",-1),fe=["id","value"],me={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},be={class:"absolute hidden group-hover:flex sm:-left-[285px] -left-[145px] -top-5 -translate-y-full sm:w-80 w-44 px-2 py-2 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},Ae={__name:"AmountBox",props:{label:{type:String,default:"Question"},tooltip:{type:String,default:"Tooltip"},modelValue:String},setup(s){let e=f({uuid:m.v4()});return(l,o)=>{const d=y("IconInfo");return a(),r("div",de,[t("label",{class:"inline-block mt-3 mb-1",for:n(e).uuid},u(s.label),9,ce),t("div",pe,[_e,t("input",{id:n(e).uuid,class:"border-slate-300 border bg-white leading-normal py-3 pl-16 pr-10 rounded w-full",type:"number",value:s.modelValue,onInput:o[0]||(o[0]=i=>l.$emit("update:modelValue",i.target.value))},null,40,fe),t("span",me,[g(d),t("span",be,u(s.tooltip),1)])])])}}},ge={class:"absolute w-full h-full left-0 top-0 bg-[#05152e] bg-opacity-70 z-30 flex flex-col justify-center"},xe=t("div",{class:"flex items-center justify-center"},[t("div",{class:"w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin"})],-1),he={class:"text-center mt-10 relative text-white"},Me={__name:"Preloader",setup(s){const e=f({textA:0,textB:1,toggleText:!0,texts:["Please be patient with this","It may take a while","We are working on it"]});return T(()=>{e.textA=0,setInterval(()=>{e.toggleText?e.textB=e.textB+2>e.texts.length-1?1:e.textB+2:e.textA=e.textA+2>e.texts.length-1?0:e.textA+2,e.toggleText=!e.toggleText},5e3)}),(l,o)=>(a(),r("div",ge,[xe,t("div",he,[t("p",{class:_(["font-medium text-3xl absolute transition-opacity left-1/2 -translate-x-1/2 w-full",[e.toggleText?"opacity-100":"opacity-0"]])},u(e.texts[e.textA]),3),t("p",{class:_(["font-medium text-3xl absolute transition-opacity left-1/2 -translate-x-1/2 w-full",[e.toggleText?"opacity-0":"opacity-100"]])},u(e.texts[e.textB]),3)])]))}},ye={key:1,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-check",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFFFFF",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},ve=t("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),$e=t("path",{d:"M5 12l5 5l10 -10"},null,-1),ke=[ve,$e],qe={__name:"ProgressStep",props:{title:{type:String,default:"Step"},isLast:{type:Boolean,default:!1},step:{type:Number,required:!0},number:{type:Number,required:!0},current:{type:Number,required:!0}},setup(s){const e=s,l=b(()=>e.current==e.step),o=b(()=>e.current>e.step);return(d,i)=>(a(),r("div",{class:_(["w-full relative group",[n(l)?"":"hidden md:block"]])},[t("div",{class:_(["absolute left-1/2 -top-10 -translate-x-1/2 text-center w-full font-medium",[n(l)||n(o)?"text-green-400":"text-gray-300"]])},[t("strong",null,u(e.title),1)],2),t("div",{class:_(["border-2 bg-white relative z-10 rounded-full h-10 w-10 mx-auto flex items-center justify-center",[n(o)?"bg-green-400 border-green-400":"",n(l)?"border-green-400 text-green-400":"text-gray-300"]])},[s.step>=s.current?(a(),r(v,{key:0},[h(u(e.number),1)],64)):(a(),r("svg",ye,ke))],2),t("div",{class:_(["w-full group-last:left-0 group-last:w-1/2 md:group-last:hidden left-0 group-first:left-1/2 md:left-1/2 absolute top-1/2 -translate-y-1/2 right-0 h-1",[n(o)?"bg-green-400":"bg-gray-300"]])},null,2)],2))}};export{Se as H,Ae as _,Me as a,qe as b,Be as c,Ve as d,je as e,Te as f,$ as g,Fe as h,Ie as i,Ce as j,Ne as k};
