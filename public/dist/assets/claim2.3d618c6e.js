import{_ as F,o as i,c as d,h,x as U,t as _,d as l,b as s,a as y,r as S,k as w,n as C,A as c,F as N,z as P,y as G,B as Z,f as M,e as L,w as E,i as O,j as R,l as D,R as z,m as K,p as X,I as $,q as ee,s as te,u as le,E as se}from"./reuseable.612d3238.js";const ae={name:"HasError",props:{errors:{type:Object,required:!0},field:{type:String,required:!0},message:{type:String,default:null}},computed:{getMessage(){return this.message?this.message:"The above field is required."}}},oe=["innerHTML"];function re(o,t,r,e,f,u){return r.errors.includes(r.field)?(i(),d("div",{key:0,class:"text-sm text-red-600 mb-2",innerHTML:u.getMessage},null,8,oe)):h("",!0)}const ne=F(ae,[["render",re]]),ie={type:"button",class:"bg-red-600 text-white flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"},de={class:"ml-4 mt-1"},ue={__name:"NextButton",props:{text:{type:String,default:"Next"}},setup(o){return(t,r)=>{const e=y("IconNext");return i(),d("button",ie,[U(_(o.text)+" ",1),l("span",de,[s(e)])])}}},me={type:"button",class:"text-gray-600 flex items-center justify-center py-4 px-20 rounded"},ce={class:"mr-4"},fe={__name:"BackButton",props:{text:{type:String,default:"Next"}},setup(o){return(t,r)=>{const e=y("IconPrevious");return i(),d("button",me,[l("span",ce,[s(e)]),U(_(o.text),1)])}}},_e={class:"relative border-b border-gray-300 py-4 px-3"},pe={class:"text-2xl"},be=l("span",null,"\xD7",-1),ge=[be],xe={class:"p-3"},ye={class:"border-t border-gray-300 text-right text-white py-2 px-3"},ve={__name:"ModalMarkup",props:{title:{type:String,default:"Title"},text:{type:String,default:"Text"},buttonTitle:{type:String,default:"Close"}},setup(o){const t=o;return(r,e)=>(i(),d("div",null,[l("div",_e,[l("p",pe,_(t.title),1),l("button",{type:"button",class:"absolute right-4 top-3 text-3xl text-gray-400",onClick:e[0]||(e[0]=f=>r.$emit("close"))},ge)]),l("div",xe,[l("p",null,_(t.text),1)]),l("div",ye,[l("button",{onClick:e[1]||(e[1]=f=>r.$emit("close")),class:"bg-blue-600 text-sm py-2 px-6 rounded"}," Close ")])]))}},H={year_1:null,year_2:null,year_3:null,year_4:null},Q={title:null,first_name:null,last_name:null},Y={day:null,month:null,year:null},n=S({url:"/index.php/ReclaimPPI/lead",step:1,showAssesmentModal:!1,showYearsInfoModal:!1,showNIModal:!1,loading:!1,self_assesment_message:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni_message:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",years_message:"A rough estimate of amount you've received in pounds (\xA3)",errors:[],year:Object.keys(H),name:Object.keys(Q),dob:Object.keys(Y),steps:[{title:"PPI Claim Details",number:1},{title:"About You",number:2},{title:"Contact Details",number:3},{title:"Start Claim",number:4}],required:[["self_assesment","year","less_earning","ni_number"],["name","dob"],["email","phone","address","postcode","agree","signature"]],form:[{self_assesment:null,...H,less_earning:null,ni_number:null,cant_remember:null},{...Q,...Y},{email:null,phone:null,address:null,postcode:null,agree:null},{referal_code:null,signature:null}]}),he={key:1,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-check",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFFFFF",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},Ve=l("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),ke=l("path",{d:"M5 12l5 5l10 -10"},null,-1),we=[Ve,ke],Se={__name:"ProgressStep",props:{title:{type:String,default:"Step"},isLast:{type:Boolean,default:!1},step:{type:Number,required:!0},number:{type:Number,required:!0},current:{type:Number,required:!0}},setup(o){const t=o,r=w(()=>t.current==t.step),e=w(()=>t.current>t.step);return(f,u)=>(i(),d("div",{class:C(["w-full relative",[c(r)?"":"hidden md:block"]])},[l("div",{class:C(["absolute left-1/2 -top-10 -translate-x-1/2 text-center w-full",[c(r)||c(e)?"text-green-400":"text-gray-300"]])},[l("strong",null,_(t.title),1)],2),l("div",{class:C(["border-2 bg-white relative z-10 rounded-full h-10 w-10 mx-auto flex items-center justify-center",[c(e)?"bg-green-400 border-green-400":"",c(r)?"border-green-400 text-green-400":"text-gray-300"]])},[o.step>=o.current?(i(),d(N,{key:0},[U(_(t.number),1)],64)):(i(),d("svg",he,we))],2),o.isLast?h("",!0):(i(),d("div",{key:0,class:C(["w-full left-1/2 absolute top-1/2 -translate-y-1/2 right-0 h-1",[c(e)?"bg-green-400":"bg-gray-300"]])},null,2))],2))}},Ie={class:"my-4 text-center"},Be={class:"text-xl sm:text-2xl font-bold"},Ce=l("div",null,[l("hr",{class:"border border-slate-200"})],-1),Ne={__name:"StepTitle",props:{title:{type:String,required:!0}},setup(o){const t=o;return(r,e)=>(i(),d(N,null,[l("div",Ie,[l("p",Be,_(t.title),1)]),Ce],64))}},Pe={class:"mb-5"},Me={class:"text-lg font-bold"},Ae={__name:"AmountTitle",props:{title:{type:String,required:!0}},setup(o){const t=o;return(r,e)=>(i(),d("div",Pe,[l("p",Me,_(t.title),1)]))}},Te={class:"mr-12"},Fe=["id","value","name","checked"],Ue=["for"],je={__name:"SignCheckbox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(o){const t=o;let r=S({uuid:P.v4()});const e=w(()=>t.modelValue==t.value);return(f,u)=>(i(),d("div",Te,[l("input",{id:c(r).uuid,type:"checkbox",value:t.value,name:t.name,class:"w-5 h-5 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:c(e),onClick:u[0]||(u[0]=g=>f.$emit("update:modelValue",g.target.checked))},null,8,Fe),l("label",{for:c(r).uuid,class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},_(t.label),9,Ue)]))}},qe={},Ee=G('<div class="text-center"><h3 class="my-11 font-normal">Great News!</h3><p class="font-medium mb-3"><span class="text-green-600">Congratulations, </span> You 100% meet the criteria </p><p class="inline-block py-4 px-14 mb-5 rounded bg-[#e1dddc4f]"> Our customers get money back in 6 Weeks! </p><hr class="mb-5"></div><div class="text-base mb-6"><p> Signing below agrees you into our <a target="__blank" href="/terms-conditions" class="text-red-700">terms and conditions</a> and our NO WIN NO FEE services. </p></div>',2);function Oe(o,t){return Ee}const Re=F(qe,[["render",Oe]]),De={class:"mr-12"},ze=["id","value","name","checked"],He=["for"],Qe={class:"w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"},Ye={key:0,class:"w-3 h-3 bg-green-400 rounded-full"},Le={__name:"RadioBox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(o){const t=o;let r=S({uuid:P.v4()});const e=w(()=>t.modelValue==t.value);return(f,u)=>(i(),d("div",De,[l("input",{id:c(r).uuid,type:"radio",value:t.value,name:t.name,class:"hidden",checked:c(e),onChange:u[0]||(u[0]=g=>f.$emit("update:modelValue",g.target.value=="true"))},null,40,ze),l("label",{for:c(r).uuid,class:"flex items-center cursor-pointer"},[l("div",Qe,[c(e)?(i(),d("div",Ye)):h("",!0)]),l("span",{class:C(["ml-2 text-md font-medium dark:text-gray-300",[c(e)?"text-green-400":"text-inherit"]])},_(t.label),3)],8,He)]))}},We={class:"mb-1"},Je=["for"],j={__name:"Question",props:{text:{type:String,default:"Question"},labelFor:{type:String,default:""}},setup(o){const t=o;return(r,e)=>(i(),d("div",We,[l("label",{for:o.labelFor,class:"text-lg font-bold"},_(t.text),9,Je)]))}},Ge={class:""},Ze=["for"],Ke={class:"relative"},Xe=l("span",{class:"absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10"},"\xA3",-1),$e=["id","value"],et={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},tt={class:"absolute hidden group-hover:flex sm:-left-[285px] -left-[145px] -top-5 -translate-y-full sm:w-80 w-44 px-2 py-2 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},lt={__name:"AmountBox",props:{label:{type:String,default:"Question"},tooltip:{type:String,default:"Tooltip"},modelValue:String},setup(o){let t=S({uuid:P.v4()});return(r,e)=>{const f=y("IconInfo");return i(),d("div",Ge,[l("label",{class:"inline-block mt-3 mb-1",for:c(t).uuid},_(o.label),9,Ze),l("div",Ke,[Xe,l("input",{id:c(t).uuid,class:"border-slate-300 py-3 pl-16 pr-10 rounded w-full",type:"number",value:o.modelValue,onInput:e[0]||(e[0]=u=>r.$emit("update:modelValue",u.target.value))},null,40,$e),l("span",et,[s(f),l("span",tt,_(o.tooltip),1)])])])}}},st={class:"relative"},at=["id","type","value"],ot={__name:"InputText",props:{label:{type:String,default:"Question"},type:{type:String,default:"text"},modelValue:{type:String,default:""}},setup(o){let t=S({uuid:P.v4()});return(r,e)=>(i(),d("div",st,[s(j,{labelFor:c(t).uuid,text:o.label},null,8,["labelFor","text"]),l("input",{id:c(t).uuid,class:"w-full pr-9 rounded border-slate-300",type:o.type,value:o.modelValue,onInput:e[0]||(e[0]=f=>r.$emit("update:modelValue",f.target.value))},null,40,at),Z(r.$slots,"default")]))}},rt={class:""},nt={class:"relative"},it=["id"],dt={value:null},ut=["selected","value"],mt=l("span",{class:"absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"},null,-1),ct={__name:"InputSelect",props:{label:String,options:{type:Array,required:!0},modelValue:String,inSelect:{type:Boolean,default:!1}},setup(o){const t=o;let r=S({uuid:P.v4()});function e(u){return u.value||u}function f(u){return u.label||u}return(u,g)=>(i(),d("div",rt,[o.inSelect?h("",!0):(i(),M(j,{key:0,labelFor:c(r).uuid,text:o.label},null,8,["labelFor","text"])),l("div",nt,[l("select",{id:c(r).uuid,onChange:g[0]||(g[0]=b=>u.$emit("update:modelValue",b.target.value)),class:"w-full rounded border-slate-300 bg-select bg-[length:20px_14px]"},[l("option",dt,_(t.inSelect?t.label:"Select"),1),(i(!0),d(N,null,L(o.options,(b,m)=>(i(),d("option",{selected:t.modelValue==e(b),value:e(b),key:m},_(f(b)),9,ut))),128))],40,it),mt])]))}},ft=["Mr","Mrs","Miss","Ms","Dr"],_t=[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}],pt={title:ft,months:_t},bt={class:"relative left-1/2 -translate-x-1/2"},gt={class:"max-w-[900px] mx-auto"},xt={class:"p-3 mx-auto"},yt={class:"flex items-center"},vt={class:"max-w-[700px] mx-auto mt-20 bg-orange-50 py-5 px-5 lg:px-7 box-border"},ht={key:0,class:"swizard_page1"},Vt={class:"mt-6 mb-4"},kt={class:"flex my-2"},wt={class:"mb-4"},St={class:"grid sm:grid-cols-2 sm:justify-items-center gap-x-6"},It={class:"flex justify-start w-full mt-4"},Bt={class:"mt-6 mb-4"},Ct={class:"flex my-2"},Nt={class:"mt-6 mb-2"},Pt={class:"absolute right-2 top-11 cursor-pointer group duration-300"},Mt={class:"absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},At={class:"mt-2"},Tt={class:"flex items-center mt-2 mb-6"},Ft={class:"flex items-center justify-center"},Ut={key:1,class:"swizard_page2"},jt={class:"flex flex-col sm:flex-row mt-6"},qt={class:"basis-1/3 pr-2"},Et={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Ot={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Rt={class:"flex flex-col sm:flex-row"},Dt={class:"flex items-center justify-center flex-col"},zt={key:2,class:"swizard_page3"},Ht={class:"mt-6"},Qt={class:"mt-6"},Yt={class:"mt-6"},Lt={class:"mt-6"},Wt={class:"flex items-center mt-4 text-sm"},Jt={class:"flex items-center justify-center flex-col mt-7"},Gt={key:3,class:"swizard_page4"},Zt={class:"mt-6 mb-1"},Kt=l("p",{class:"mb-1"}," Please draw your signature below in the green box. ",-1),Xt={class:""},$t={class:"flex items-center justify-center flex-col mt-8"};function el(o,t,r,e,f,u){const g=y("ModalMarkup"),b=y("vue-final-modal"),m=y("HasError"),A=y("IconInfo"),V=y("NextButton"),I=y("BackButton"),T=y("VueSignaturePad");return i(),d(N,null,[s(b,{classes:"flex justify-center items-center","content-class":"relative flex flex-col w-[500px] max-h-full mx-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900",modelValue:e.state.showAssesmentModal,"onUpdate:modelValue":t[0]||(t[0]=a=>e.state.showAssesmentModal=a)},{default:E(({close:a})=>[s(g,{title:"Warning!!!",text:e.state.self_assesment_message,onClose:a},null,8,["text","onClose"])]),_:1},8,["modelValue"]),l("div",bt,[l("div",gt,[l("div",xt,[l("div",yt,[(i(!0),d(N,null,L(e.state.steps,(a,B)=>(i(),M(e.ProgressStep,{"is-last":e.state.steps.length==B+1,key:B,title:a.title,number:a.number,step:B+1,current:e.state.step},null,8,["is-last","title","number","step","current"]))),128))]),l("div",vt,[e.state.step==1?(i(),d("div",ht,[s(e.StepTitle,{title:"Please enter your PPI Claim details"}),l("div",Vt,[s(e.Question,{labelFor:"",text:`Were you required to complete a Self-Assessment the
                        year you got your PPI refund?`}),l("div",kt,[s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].self_assesment,"onUpdate:modelValue":[t[1]||(t[1]=a=>e.state.form[0].self_assesment=a),e.selfAssesedClick],value:!0,label:"Yes"},null,8,["modelValue"]),s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].self_assesment,"onUpdate:modelValue":t[2]||(t[2]=a=>e.state.form[0].self_assesment=a),value:!1,label:"No"},null,8,["modelValue"])]),s(m,{field:"self_assesment",errors:e.state.errors},null,8,["errors"])]),l("div",wt,[s(e.Question,{text:`Please provide us with the TOTAL amount you
                            received for your PPI refunds in the relevant tax
                            years below:`}),l("div",St,[s(e.AmountBox,{modelValue:e.state.form[0].year_1,"onUpdate:modelValue":t[3]||(t[3]=a=>e.state.form[0].year_1=a),label:"Apr 2018 - Mar 2020",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_2,"onUpdate:modelValue":t[4]||(t[4]=a=>e.state.form[0].year_2=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_3,"onUpdate:modelValue":t[5]||(t[5]=a=>e.state.form[0].year_3=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_4,"onUpdate:modelValue":t[6]||(t[6]=a=>e.state.form[0].year_4=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),l("div",It,[s(m,{field:"year",errors:e.state.errors,message:"Please fill at least one record"},null,8,["errors"])])])]),l("div",Bt,[s(e.Question,{text:`Were you earning less than \xA350,000 a year at the
                            time you received your PPI refund?`}),l("div",Ct,[s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].less_earning,"onUpdate:modelValue":t[7]||(t[7]=a=>e.state.form[0].less_earning=a),value:!0,label:"Yes"},null,8,["modelValue"]),s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].less_earning,"onUpdate:modelValue":t[8]||(t[8]=a=>e.state.form[0].less_earning=a),value:!1,label:"No"},null,8,["modelValue"])]),s(m,{field:"less_earning",errors:e.state.errors},null,8,["errors"])]),l("div",Nt,[s(e.InputText,{label:"National insurance (NI) Number",modelValue:e.state.form[0].ni_number,"onUpdate:modelValue":t[9]||(t[9]=a=>e.state.form[0].ni_number=a)},{default:E(()=>[l("span",Pt,[s(A),l("span",Mt,_(e.state.ni_message),1)])]),_:1},8,["modelValue"]),l("div",At,[s(m,{field:"invalid_ni",errors:e.state.errors,message:"Invalid NI Number"},null,8,["errors"]),s(m,{field:"ni_number",errors:e.state.errors},null,8,["errors"])])]),l("div",Tt,[s(e.SignCheckbox,{modelValue:e.state.form[0].cant_remember,"onUpdate:modelValue":t[10]||(t[10]=a=>e.state.form[0].cant_remember=a),value:!0,label:"Can't remember (Provide it later)"},null,8,["modelValue"])]),l("div",Ft,[e.state.form[0].self_assesment?(i(),M(m,{key:1,class:"text-center",field:"already_assessed",errors:["already_assessed"],message:e.state.self_assesment_message},null,8,["message"])):(i(),M(V,{key:0,text:"Continue",onClick:e.stepForward}))])])):h("",!0),e.state.step==2?(i(),d("div",Ut,[s(e.StepTitle,{title:"Please complete your details below to start your claim"}),l("div",jt,[l("div",qt,[s(e.InputSelect,{class:"",label:"Title",options:e.options.title,modelValue:e.state.form[1].title,"onUpdate:modelValue":t[11]||(t[11]=a=>e.state.form[1].title=a)},null,8,["options","modelValue"])]),l("div",Et,[s(e.InputText,{class:"",label:"First Name",modelValue:e.state.form[1].first_name,"onUpdate:modelValue":t[12]||(t[12]=a=>e.state.form[1].first_name=a)},null,8,["modelValue"])]),l("div",Ot,[s(e.InputText,{class:"",label:"Last Name",modelValue:e.state.form[1].last_name,"onUpdate:modelValue":t[13]||(t[13]=a=>e.state.form[1].last_name=a)},null,8,["modelValue"])])]),s(m,{class:"mt-1",field:"name",errors:e.state.errors,message:"The above fields are required"},null,8,["errors"]),s(e.Question,{class:"mt-6",text:"DOB"}),l("div",Rt,[s(e.InputSelect,{class:"basis-1/3 pr-2",label:"Day","in-select":"",options:e.range(1,1,31),modelValue:e.state.form[1].day,"onUpdate:modelValue":t[14]||(t[14]=a=>e.state.form[1].day=a)},null,8,["options","modelValue"]),s(e.InputSelect,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Month","in-select":"",options:e.options.months,modelValue:e.state.form[1].month,"onUpdate:modelValue":t[15]||(t[15]=a=>e.state.form[1].month=a)},null,8,["options","modelValue"]),s(e.InputSelect,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Year","in-select":"",options:e.range(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse(),modelValue:e.state.form[1].year,"onUpdate:modelValue":t[16]||(t[16]=a=>e.state.form[1].year=a)},null,8,["options","modelValue"])]),s(m,{class:"mt-1",field:"dob",errors:e.state.errors,message:"The above fields are required"},null,8,["errors"]),l("div",Dt,[s(V,{class:"mt-8 mb-2",text:"Continue",onClick:e.stepForward}),s(I,{class:"font-bold",text:"Back",onClick:e.stepBack})])])):h("",!0),e.state.step==3?(i(),d("div",zt,[s(e.StepTitle,{title:"Enter your contact details to claim your tax back"}),l("div",null,[l("div",Ht,[s(e.InputText,{type:"email",label:"Email",modelValue:e.state.form[2].email,"onUpdate:modelValue":t[17]||(t[17]=a=>e.state.form[2].email=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"email",errors:e.state.errors},null,8,["errors"]),s(m,{class:"mt-1",field:"invalid_email",errors:e.state.errors,message:"Invalid Email"},null,8,["errors"])]),l("div",Qt,[s(e.InputText,{type:"tel",label:"Phone Number",modelValue:e.state.form[2].phone,"onUpdate:modelValue":t[18]||(t[18]=a=>e.state.form[2].phone=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"phone",errors:e.state.errors},null,8,["errors"]),s(m,{class:"mt-1",field:"invalid_phone",errors:e.state.errors,message:"Invalid Phone Number"},null,8,["errors"])]),l("div",Yt,[s(e.InputText,{label:"Address",modelValue:e.state.form[2].address,"onUpdate:modelValue":t[19]||(t[19]=a=>e.state.form[2].address=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"address",errors:e.state.errors},null,8,["errors"])]),l("div",Lt,[s(e.InputText,{label:"Postcode",modelValue:e.state.form[2].postcode,"onUpdate:modelValue":t[20]||(t[20]=a=>e.state.form[2].postcode=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"postcode",errors:e.state.errors},null,8,["errors"])])]),l("div",Wt,[s(e.SignCheckbox,{modelValue:e.state.form[2].agree,"onUpdate:modelValue":t[21]||(t[21]=a=>e.state.form[2].agree=a),value:!0,label:"I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes."},null,8,["modelValue"])]),s(m,{class:"mt-2",field:"agree",errors:e.state.errors},null,8,["errors"]),l("div",Jt,[s(V,{text:"Continue",onClick:e.stepForward}),s(I,{text:"Back",onClick:e.stepBack})])])):h("",!0),e.state.step==4?(i(),d("div",Gt,[s(e.GreatNews),s(e.InputText,{label:"Do you have a referral code? (optional)",modelValue:e.state.form[3].referal_code,"onUpdate:modelValue":t[22]||(t[22]=a=>e.state.form[3].referal_code=a)},null,8,["modelValue"]),l("div",Zt,[Kt,l("div",Xt,[s(T,{class:"w-full bg-white border border-green-500 rounded",ref:"signaturePad"},null,512),s(m,{class:"mt-2",field:"signature",errors:e.state.errors,message:"Signature required"},null,8,["errors"])])]),l("small",{class:"font-bold cursor-pointer",onClick:e.clearSignature},"Clear Signature"),l("div",$t,[s(V,{disabled:e.state.loading,"no-icon":"",text:e.state.loading?"Please Wait ---":"Start Your Claim",onClick:e.submit},null,8,["disabled","text"]),s(I,{text:"Back",onClick:e.stepBack})])])):h("",!0)])])])])],64)}const tl={__name:"App",setup(o,{expose:t}){t();const{filterEmptyKeys:r,hasSome:e,hasEvery:f,arrayIntersection:u,range:g}=z(),b=O(null);R(()=>{});const m=w(()=>{var v;return n.form[0].cant_remember=!1,(v=n.form[0].ni_number)==null?void 0:v.length});function A(){setTimeout(()=>{console.log(n.form[0]),n.showAssesmentModal=!0},0)}function V(){const v=Object.values(n.required[n.step-1]),p=n.form[n.step-1];v.includes("ni_number")&&p.cant_remember&&v.splice(v.indexOf("ni_number"),1);const k=r(p);let x=u(k,v);if(n.step==1){f(Object.values(n.year),k)&&x.push("year"),p.self_assesment&&x.push("already_assessed");var W=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");![null,""].includes(p.ni_number)&&!W.test(p.ni_number)&&x.push("invalid_ni")}if(n.step==2&&(e(Object.values(n.name),k)&&x.push("name"),e(Object.values(n.dob),k)&&x.push("dob")),n.step==3){var J=/\S+@\S+\.\S+/;p.email!=null&&!J.test(p.email)&&x.push("invalid_email"),p.phone!=null&&(p.phone.length!=11||p.phone.charAt(0)!="0")&&x.push("invalid_phone"),!p.agree&&!x.includes("agree")&&x.push("agree")}return n.errors=[...x],!n.errors.length}function I(){V()&&n.step>=1&&n.step<=4&&n.step++}function T(){n.step>1&&n.step<=4&&n.step--}function a(){b.value.clearSignature()}async function B(){const{isEmpty:v,data:p}=b.value.saveSignature();if(v){n.errors.push("signature");return}n.loading=!0,n.form[3].signature=p;const k={...n.form[0],...n.form[1],...n.form[2],...n.form[3]};await D.post(n.url,k),n.loading=!1,window.location.href="/thank-you"}const q={filterEmptyKeys:r,hasSome:e,hasEvery:f,arrayIntersection:u,range:g,signaturePad:b,niCheckDisabled:m,selfAssesedClick:A,validate:V,stepForward:I,stepBack:T,clearSignature:a,submit:B,computed:w,onMounted:R,ref:O,axios:D,state:n,Reusable:z,ProgressStep:Se,StepTitle:Ne,AmountTitle:Ae,SignCheckbox:je,GreatNews:Re,RadioBox:Le,Question:j,AmountBox:lt,InputText:ot,InputSelect:ct,options:pt};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}},ll=F(tl,[["render",el]]);K(ll).use(X).component("IconInfo",$).component("IconNext",ee).component("IconPrevious",te).component("IconSelect",le).component("HasError",ne).component("NextButton",ue).component("BackButton",fe).component("VueFinalModal",se).component("ModalMarkup",ve).mount("#app");
