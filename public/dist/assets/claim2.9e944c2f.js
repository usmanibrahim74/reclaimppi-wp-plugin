import{_ as C,o,c as i,a as b,b as z,t as u,d as h,r as g,e as t,F as y,f as j,n as L,g as q,u as W,h as $,i as w,j as E,k as O,l as G,p as M,q as I,s as A,R as N,x as J,y as Z,I as K,z as U,A as X,B as ee,E as te}from"./reuseable.59928ad4.js";const se={name:"HasError",props:{errors:{type:Object,required:!0},field:{type:String,required:!0},message:{type:String,default:null}},computed:{getMessage(){return this.message?this.message:"The above field is required."}}},ae=["innerHTML"];function ne(e,s,n,r,l,p){return n.errors.includes(n.field)?(o(),i("div",{key:0,class:"swizard__error",innerHTML:p.getMessage},null,8,ae)):b("",!0)}const re=C(se,[["render",ne]]),le={type:"button",class:"sbutton sbutton__primary sbutton--active"},oe={key:0,class:"sbutton__primary__icon"},ie={__name:"NextButton",props:{text:{type:String,default:"Next"},noIcon:{type:Boolean,default:!1}},setup(e){return(s,n)=>{const r=g("IconNext");return o(),i("button",le,[z(u(e.text)+" ",1),e.noIcon?b("",!0):(o(),i("span",oe,[h(r)]))])}}},ue={type:"button",class:"sbutton sbutton__back"},ce={class:"sbutton__primary__back"},de={__name:"BackButton",props:{text:{type:String,default:"Next"}},setup(e){return(s,n)=>{const r=g("IconPrevious");return o(),i("button",ue,[t("span",ce,[h(r)]),z(u(e.text),1)])}}},pe={class:"smodal__header"},_e={class:"smodal__title"},me=t("span",null,"\xD7",-1),fe=[me],ve={class:"smodal__body"},he={class:"smodal__body__p"},ge={class:"smodal__footer"},be={__name:"ModalMarkup",props:{title:{type:String,default:"Title"},text:{type:String,default:"Text"},buttonTitle:{type:String,default:"Close"}},setup(e){const s=e;return(n,r)=>(o(),i(y,null,[t("div",pe,[t("p",_e,u(s.title),1),t("button",{type:"button",class:"smodal__close",onClick:r[0]||(r[0]=l=>n.$emit("close"))},fe)]),t("div",ve,[t("p",he,u(s.text),1)]),t("div",ge,[t("button",{onClick:r[1]||(r[1]=l=>n.$emit("close")),class:"smodal__footer__btn"},"close")])],64))}},B={year_1:null,year_2:null,year_3:null,year_4:null},P={title:null,first_name:null,last_name:null},V={day:null,month:null,year:null},a=j({url:"/index.php/ReclaimPPI/lead",step:1,showAssesmentModal:!1,showYearsInfoModal:!1,showNIModal:!1,loading:!1,self_assesment_message:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni_message:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",years_message:"A rough estimate of amount you've received in pounds (\xA3)",errors:[],year:Object.keys(B),name:Object.keys(P),dob:Object.keys(V),steps:[{title:"PPI Claim Details",number:1},{title:"About You",number:2},{title:"Contact Details",number:3},{title:"Start Claim",number:4}],required:[["self_assesment","year","less_earning","ni_number"],["name","dob"],["email","phone","address","postcode","agree","signature"]],form:[{self_assesment:null,...B,less_earning:null,ni_number:null,cant_remember:null},{...P,...V},{email:null,phone:null,address:null,postcode:null,agree:null},{referal_code:null,signature:null}]}),ye={class:"w-full relative"},xe={class:"absolute left-1/2 -top-10 -translate-x-1/2 text-center text-green-400"},we={key:1,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-check",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFFFFF",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},$e=t("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),Ce=t("path",{d:"M5 12l5 5l10 -10"},null,-1),ze=[$e,Ce],Se={__name:"ProgressStep",props:{title:{type:String,default:"Step"},isLast:{type:Boolean,default:!1},step:{type:Number,required:!0},number:{type:Number,required:!0},current:{type:Number,required:!0}},setup(e){const s=e;return(n,r)=>(o(),i("div",ye,[t("div",xe,[t("strong",null,u(s.title),1)]),t("div",{class:L(["border-2 bg-white relative z-10 rounded-full h-10 w-10 mx-auto flex items-center justify-center",[e.current>e.step?"bg-green-400 border-green-400":"",e.current==e.step?"border-green-400 text-green-400":"text-gray-300"]])},[e.step>=e.current?(o(),i(y,{key:0},[z(u(s.number),1)],64)):(o(),i("svg",we,ze))],2),e.isLast?b("",!0):(o(),i("div",{key:0,class:L(["w-full left-1/2 absolute top-1/2 -translate-y-1/2 right-0 h-1",[e.current>e.step?"bg-green-400":"bg-gray-300"]])},null,2))]))}},ke={class:"swizard__title"},Le={class:"swizard__title__p text-center step-title"},Me=t("hr",{class:"swizard__title__line"},null,-1),Ie={__name:"StepTitle",props:{title:{type:String,required:!0}},setup(e){const s=e;return(n,r)=>(o(),i("div",ke,[t("p",Le,u(s.title),1),Me]))}},Ae={},Ne=q('<div class="swizard__claim swizard__title"><h3>Great News!</h3><p class="swizard__claim__congrat"><span class="swizard__claim__success">Congratulations, </span> You 100% meet the criteria </p><p class="swizard__claim__time"> Our customers get money back in 6 Weeks! </p><hr class="swizard__title__line"></div><div class="swizard__claim__message"><p> Signing below agrees you into our <a target="__blank" href="/terms-conditions" class="swizard__claim__message__terms">terms and conditions</a> and our NO WIN NO FEE services. </p></div>',2);function Be(e,s){return Ne}const Pe=C(Ae,[["render",Be]]),Ve={class:"swizard__radio__items__item"},je=["id","name","value","checked"],qe=["for"],Ee={__name:"RadioBox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(e){const s=e;let n=j({uuid:W.v4()});const r=$(()=>s.modelValue==s.value);return(l,p)=>(o(),i("div",Ve,[t("input",{id:w(n).uuid,type:"radio",name:s.name,value:s.value,checked:w(r),onChange:p[0]||(p[0]=m=>l.$emit("update:modelValue",m.target.value=="true"))},null,40,je),t("label",{for:w(n).uuid},[t("span",null,u(s.label),1)],8,qe)]))}},Oe={class:"swizard__radio"},Te={class:"swizard__radio__items"},Fe={__name:"RadioQuestion",props:{question:{type:String,default:"Question"},field:{type:String,default:"field_1"},errors:{type:Array,default:()=>[]},errorMessage:{type:String,default:null}},setup(e){const s=e;return(n,r)=>{const l=g("HasError");return o(),i("div",Oe,[t("p",null,u(s.question),1),t("div",Te,[E(n.$slots,"default")]),h(l,{field:s.field,errors:s.errors,message:s.errorMessage},null,8,["field","errors","message"])])}}},He={class:"swizard__years__items"},Re={class:"swizard__years__items__item"},De=t("span",{class:"swizard__years__items__item__left-icon"},"\xA3",-1),Qe=["value"],Ye={__name:"AmountBox",props:{label:{type:String,default:"Question"},modelValue:String},setup(e){return(s,n)=>{const r=g("IconInfo");return o(),i("div",He,[t("p",null,u(e.label),1),t("div",Re,[De,t("input",{type:"number",value:e.modelValue,onInput:n[0]||(n[0]=l=>s.$emit("update:modelValue",l.target.value)),class:"swizard__years__items__item__box hide-arrows"},null,40,Qe),t("span",{class:"swizard__years__items__item__right-icon",onClick:n[1]||(n[1]=l=>s.$emit("icon:click"))},[h(r)])])])}}},We={class:"swizard__input"},Ge={class:"swizard__input__item"},Je=["type","value"],Ze={__name:"InputText",props:{label:{type:String,default:"Question"},type:String,modelValue:String},setup(e){return(s,n)=>(o(),i("div",We,[t("p",null,u(e.label),1),t("div",Ge,[t("input",{type:e.type,value:e.modelValue,onInput:n[0]||(n[0]=r=>s.$emit("update:modelValue",r.target.value)),class:"swizard__input__item__box"},null,40,Je),E(s.$slots,"default")])]))}},Ke={class:"swizard__input"},Ue={key:0},Xe={class:"swizard__input__item"},et={value:null},tt=["selected","value"],st={class:"swizard__input__item__right-icon"},at={__name:"InputSelect",props:{label:String,options:{type:Array,required:!0},modelValue:String,inSelect:{type:Boolean,default:!1}},setup(e){const s=e;function n(l){return l.value||l}function r(l){return l.label||l}return(l,p)=>{const m=g("IconSelect");return o(),i("div",Ke,[e.inSelect?b("",!0):(o(),i("p",Ue,u(e.label),1)),t("div",Xe,[t("select",{onChange:p[0]||(p[0]=c=>l.$emit("update:modelValue",c.target.value)),class:"swizard__input__item__box select"},[t("option",et,u(s.inSelect?s.label:"Select"),1),(o(!0),i(y,null,O(e.options,(c,x)=>(o(),i("option",{selected:s.modelValue==n(c),value:n(c),key:x},u(r(c)),9,tt))),128))],32),t("span",st,[h(m)])])])}}},nt=["Mr.","Mrs.","Miss","Ms","Dr"],rt={title:nt},lt={class:"relative w-[100vw] left-1/2 -translate-x-1/2"},ot={class:"max-w-[700px] mx-auto"},it={class:"p-3 mx-auto"},ut={class:"flex items-center"},ct=q('<div class="mt-20 p-5 bg-orange-50 py-5 px-7 box-border"><div class="my-4 text-center"><p class="text-2xl font-bold"> Please enter your PPI Claim details </p></div><div><hr class="border border-slate-200"></div><div class="my-6"><div class="mb-6"><p class="text-lg font-bold"> Were you required to complete a Self-Assessment the year you got your PPI refund? </p></div><div class="flex flex-wrap"><div class="flex items-center mr-12"><input id="green-radio" type="radio" value="" name="colored-radio" class="mr-1 w-5 h-5"><label for="green-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 checked:text-green-600">Yes</label></div><div class="flex items-center mr-4"><input id="red-radio" type="radio" value="" name="colored-radio" class="mr-1 w-5 h-5"><label for="red-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">No</label></div></div></div><div class="mb-5"><p class="text-lg font-bold"> Please provide us with the TOTAL amount you received for your PPI refunds in the relevant tax years below </p></div><div class="grid sm:grid-cols-2 sm:justify-items-center gap-x-6"><div class=""><p class="mt-3 mb-1">Apr 2018 - Mar 2019</p><div class="relative"><span class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10">\xA3</span><input class="border-slate-300 py-3 pl-16 pr-10 rounded w-full" type="number"><span class="absolute right-2 top-3"><svg fill="#616A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> \\ <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path></svg></span></div></div><div class=""><p class="mt-3 mb-1">Apr 2018 - Mar 2019</p><div class="relative"><span class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10">\xA3</span><input class="border-slate-300 py-3 pl-16 pr-10 w-full rounded" type="number"><span class="absolute right-2 top-3"><svg fill="#616A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> \\ <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path></svg></span></div></div><div class=""><p class="mt-3 mb-1">Apr 2018 - Mar 2019</p><div class="relative"><span class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10">\xA3</span><input class="border-slate-300 py-3 pl-16 pr-10 w-full rounded" type="number"><span class="absolute right-2 top-3"><svg fill="#616A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> \\ <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path></svg></span></div></div><div class=""><p class="mt-3 mb-1">Apr 2018 - Mar 2019</p><div class="relative"><span class="absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10">\xA3</span><input class="border-slate-300 py-3 pl-16 pr-10 w-full rounded" type="number"><span class="absolute right-2 top-3"><svg fill="#616A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> \\ <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path></svg></span></div></div></div><div class="my-6"><div class="mb-6"><p class="text-lg font-bold"> Were you earning less than \xA350,000 a year at the time you received your PPI refund? </p></div><div class="flex flex-wrap"><div class="flex items-center mr-12"><input id="green-radio" type="radio" value="" name="colored-radio" class="mr-1 w-5 h-5"><label for="green-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300 checked:text-green-600">Yes</label></div><div class="flex items-center mr-4"><input id="red-radio" type="radio" value="" name="colored-radio" class="mr-1 w-5 h-5"><label for="red-radio" class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">No</label></div></div></div><div><p class="text-lg font-bold mb-2">National insurance (NI) Number</p><div class="relative"><input class="w-full pr-9 rounded" type="text"><span class="absolute right-2 top-2 cursor-pointer"><svg fill="#616A7A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> \\ <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path></svg></span></div></div></div>',1);function dt(e,s,n,r,l,p){return o(),i("div",lt,[t("div",ot,[t("div",it,[t("div",ut,[(o(!0),i(y,null,O(r.state.steps,(m,c)=>(o(),G(r.ProgressStep,{"is-last":r.state.steps.length==c+1,key:c,title:m.title,number:m.number,step:c+1,current:r.state.step},null,8,["is-last","title","number","step","current"]))),128))]),ct])])])}const pt={__name:"App",setup(e,{expose:s}){s();const{filterEmptyKeys:n,hasSome:r,hasEvery:l,arrayIntersection:p,range:m}=N(),c=M(null);I(()=>{});const x=$(()=>{var _;return a.form[0].cant_remember=!1,(_=a.form[0].ni_number)==null?void 0:_.length});function T(){setTimeout(()=>{console.log(a.form[0]),a.showAssesmentModal=!0},0)}function S(){const _=Object.values(a.required[a.step-1]),d=a.form[a.step-1];_.includes("ni_number")&&d.cant_remember&&_.splice(_.indexOf("ni_number"),1);const v=n(d);let f=p(v,_);if(a.step==1){l(Object.values(a.year),v)&&f.push("year"),d.self_assesment&&f.push("already_assessed");var Q=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");![null,""].includes(d.ni_number)&&!Q.test(d.ni_number)&&f.push("invalid_ni")}if(a.step==2&&(r(Object.values(a.name),v)&&f.push("name"),r(Object.values(a.dob),v)&&f.push("dob")),a.step==3){var Y=/\S+@\S+\.\S+/;d.email!=null&&!Y.test(d.email)&&f.push("invalid_email"),d.phone!=null&&(d.phone.length!=11||d.phone.charAt(0)!="0")&&f.push("invalid_phone")}return a.errors=[...f],!a.errors.length}function F(){S()&&a.step>=1&&a.step<=4&&a.step++}function H(){console.log("back"),a.step>1&&a.step<=4&&a.step--}function R(){c.value.clearSignature()}async function D(){const{isEmpty:_,data:d}=c.value.saveSignature();if(_){a.errors.push("signature");return}a.loading=!0,a.form[3].signature=d;const v={...a.form[0],...a.form[1],...a.form[2],...a.form[3]};await A.post(a.url,v),a.loading=!1,window.location.href="/thank-you"}const k={filterEmptyKeys:n,hasSome:r,hasEvery:l,arrayIntersection:p,range:m,signaturePad:c,niCheckDisabled:x,selfAssesedClick:T,validate:S,stepForward:F,stepBack:H,clearSignature:R,submit:D,computed:$,onMounted:I,ref:M,axios:A,state:a,Reusable:N,ProgressStep:Se,StepTitle:Ie,GreatNews:Pe,RadioBox:Ee,RadioQuestion:Fe,AmountBox:Ye,InputText:Ze,InputSelect:at,options:rt};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}},_t=C(pt,[["render",dt]]);J(_t).use(Z).component("IconInfo",K).component("IconNext",U).component("IconPrevious",X).component("IconSelect",ee).component("HasError",re).component("NextButton",ie).component("BackButton",de).component("VueFinalModal",te).component("ModalMarkup",be).mount("#app");