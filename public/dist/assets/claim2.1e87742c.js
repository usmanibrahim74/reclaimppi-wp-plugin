import{_ as F,o as i,c as d,a as h,b as U,t as f,e as l,d as s,r as y,f as w,n as N,F as B,u as C,h as M,i as _,g as G,j as Z,l as P,k as L,w as E,p as O,q as R,s as D,R as z,x as K,y as X,I as $,z as ee,A as te,B as le,E as se}from"./reuseable.1784e1e3.js";const ae={name:"HasError",props:{errors:{type:Object,required:!0},field:{type:String,required:!0},message:{type:String,default:null}},computed:{getMessage(){return this.message?this.message:"The above field is required."}}},oe=["innerHTML"];function re(o,t,n,e,c,u){return n.errors.includes(n.field)?(i(),d("div",{key:0,class:"text-sm text-red-600 mb-2",innerHTML:u.getMessage},null,8,oe)):h("",!0)}const ne=F(ae,[["render",re]]),ie={type:"button",class:"bg-red-600 text-white flex items-center justify-center py-3 px-6 sm:py-4 sm:px-20 rounded"},de={class:"ml-4 mt-1"},ue={__name:"NextButton",props:{text:{type:String,default:"Next"}},setup(o){return(t,n)=>{const e=y("IconNext");return i(),d("button",ie,[U(f(o.text)+" ",1),l("span",de,[s(e)])])}}},me={type:"button",class:"text-gray-600 flex items-center justify-center py-4 px-20 rounded"},ce={class:"mr-4"},fe={__name:"BackButton",props:{text:{type:String,default:"Next"}},setup(o){return(t,n)=>{const e=y("IconPrevious");return i(),d("button",me,[l("span",ce,[s(e)]),U(f(o.text),1)])}}},_e={class:"relative border-b border-gray-300 py-4 px-3"},pe={class:"text-2xl"},be=l("span",null,"\xD7",-1),ge=[be],xe={class:"p-3"},ye={class:"border-t border-gray-300 text-right text-white py-2 px-3"},ve={__name:"ModalMarkup",props:{title:{type:String,default:"Title"},text:{type:String,default:"Text"},buttonTitle:{type:String,default:"Close"}},setup(o){const t=o;return(n,e)=>(i(),d("div",null,[l("div",_e,[l("p",pe,f(t.title),1),l("button",{type:"button",class:"absolute right-4 top-3 text-3xl text-gray-400",onClick:e[0]||(e[0]=c=>n.$emit("close"))},ge)]),l("div",xe,[l("p",null,f(t.text),1)]),l("div",ye,[l("button",{onClick:e[1]||(e[1]=c=>n.$emit("close")),class:"bg-blue-600 text-sm py-2 px-6 rounded"}," Close ")])]))}},H={year_1:null,year_2:null,year_3:null,year_4:null},Q={title:null,first_name:null,last_name:null},Y={day:null,month:null,year:null},r=w({url:"/index.php/ReclaimPPI/lead",step:1,showAssesmentModal:!1,showYearsInfoModal:!1,showNIModal:!1,loading:!1,self_assesment_message:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni_message:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",years_message:"A rough estimate of amount you've received in pounds (\xA3)",errors:[],year:Object.keys(H),name:Object.keys(Q),dob:Object.keys(Y),steps:[{title:"PPI Claim Details",number:1},{title:"About You",number:2},{title:"Contact Details",number:3},{title:"Start Claim",number:4}],required:[["self_assesment","year","less_earning","ni_number"],["name","dob"],["email","phone","address","postcode","agree","signature"]],form:[{self_assesment:null,...H,less_earning:null,ni_number:null,cant_remember:null},{...Q,...Y},{email:null,phone:null,address:null,postcode:null,agree:null},{referal_code:null,signature:null}]}),he={class:"w-full relative"},Ve={key:1,xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-check",width:"18",height:"18",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#FFFFFF",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},ke=l("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),we=l("path",{d:"M5 12l5 5l10 -10"},null,-1),Se=[ke,we],Ie={__name:"ProgressStep",props:{title:{type:String,default:"Step"},isLast:{type:Boolean,default:!1},step:{type:Number,required:!0},number:{type:Number,required:!0},current:{type:Number,required:!0}},setup(o){const t=o;return(n,e)=>(i(),d("div",he,[l("div",{class:N(["absolute left-1/2 -top-10 -translate-x-1/2 text-center w-full",[o.current>=o.step?"text-green-400":"text-gray-300"]])},[l("strong",null,f(t.title),1)],2),l("div",{class:N(["border-2 bg-white relative z-10 rounded-full h-10 w-10 mx-auto flex items-center justify-center",[o.current>o.step?"bg-green-400 border-green-400":"",o.current==o.step?"border-green-400 text-green-400":"text-gray-300"]])},[o.step>=o.current?(i(),d(B,{key:0},[U(f(t.number),1)],64)):(i(),d("svg",Ve,Se))],2),o.isLast?h("",!0):(i(),d("div",{key:0,class:N(["w-full left-1/2 absolute top-1/2 -translate-y-1/2 right-0 h-1",[o.current>o.step?"bg-green-400":"bg-gray-300"]])},null,2))]))}},Be={class:"my-4 text-center"},Ce={class:"text-xl sm:text-2xl font-bold"},Ne=l("div",null,[l("hr",{class:"border border-slate-200"})],-1),Pe={__name:"StepTitle",props:{title:{type:String,required:!0}},setup(o){const t=o;return(n,e)=>(i(),d(B,null,[l("div",Be,[l("p",Ce,f(t.title),1)]),Ne],64))}},Me={class:"mb-5"},Ae={class:"text-lg font-bold"},Te={__name:"AmountTitle",props:{title:{type:String,required:!0}},setup(o){const t=o;return(n,e)=>(i(),d("div",Me,[l("p",Ae,f(t.title),1)]))}},Fe={class:"mr-12"},Ue=["id","value","name","checked"],je=["for"],qe={__name:"SignCheckbox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(o){const t=o;let n=w({uuid:C.v4()});const e=M(()=>t.modelValue==t.value);return(c,u)=>(i(),d("div",Fe,[l("input",{id:_(n).uuid,type:"checkbox",value:t.value,name:t.name,class:"w-5 h-5 text-blue-600 bg-white rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",checked:_(e),onClick:u[0]||(u[0]=g=>c.$emit("update:modelValue",g.target.checked))},null,8,Ue),l("label",{for:_(n).uuid,class:"ml-2 text-md font-medium text-gray-900 dark:text-gray-300"},f(t.label),9,je)]))}},Ee={},Oe=G('<div class="text-center"><h3 class="my-11 font-normal">Great News!</h3><p class="font-medium mb-3"><span class="text-green-600">Congratulations, </span> You 100% meet the criteria </p><p class="inline-block py-4 px-14 mb-5 rounded bg-[#e1dddc4f]"> Our customers get money back in 6 Weeks! </p><hr class="mb-5"></div><div class="text-base mb-6"><p> Signing below agrees you into our <a target="__blank" href="/terms-conditions" class="text-red-700">terms and conditions</a> and our NO WIN NO FEE services. </p></div>',2);function Re(o,t){return Oe}const De=F(Ee,[["render",Re]]),ze={class:"mr-12"},He=["id","value","name","checked"],Qe=["for"],Ye={class:"w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"},Le={key:0,class:"w-3 h-3 bg-green-400 rounded-full"},We={__name:"RadioBox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},setup(o){const t=o;let n=w({uuid:C.v4()});const e=M(()=>t.modelValue==t.value);return(c,u)=>(i(),d("div",ze,[l("input",{id:_(n).uuid,type:"radio",value:t.value,name:t.name,class:"hidden",checked:_(e),onChange:u[0]||(u[0]=g=>c.$emit("update:modelValue",g.target.value=="true"))},null,40,He),l("label",{for:_(n).uuid,class:"flex items-center cursor-pointer"},[l("div",Ye,[_(e)?(i(),d("div",Le)):h("",!0)]),l("span",{class:N(["ml-2 text-md font-medium dark:text-gray-300",[_(e)?"text-green-400":"text-inherit"]])},f(t.label),3)],8,Qe)]))}},Je={class:"mb-1"},Ge=["for"],j={__name:"Question",props:{text:{type:String,default:"Question"},labelFor:{type:String,default:""}},setup(o){const t=o;return(n,e)=>(i(),d("div",Je,[l("label",{for:o.labelFor,class:"text-lg font-bold"},f(t.text),9,Ge)]))}},Ze={class:""},Ke=["for"],Xe={class:"relative"},$e=l("span",{class:"absolute left-3 h-full flex items-center justify-center py-1 pr-3 pl-1 border-r w-10"},"\xA3",-1),et=["id","value"],tt={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},lt={class:"absolute hidden group-hover:flex sm:-left-[285px] -left-[145px] -top-5 -translate-y-full sm:w-80 w-44 px-2 py-2 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},st={__name:"AmountBox",props:{label:{type:String,default:"Question"},tooltip:{type:String,default:"Tooltip"},modelValue:String},setup(o){let t=w({uuid:C.v4()});return(n,e)=>{const c=y("IconInfo");return i(),d("div",Ze,[l("label",{class:"inline-block mt-3 mb-1",for:_(t).uuid},f(o.label),9,Ke),l("div",Xe,[$e,l("input",{id:_(t).uuid,class:"border-slate-300 py-3 pl-16 pr-10 rounded w-full",type:"number",value:o.modelValue,onInput:e[0]||(e[0]=u=>n.$emit("update:modelValue",u.target.value))},null,40,et),l("span",tt,[s(c),l("span",lt,f(o.tooltip),1)])])])}}},at={class:"relative"},ot=["id","type","value"],rt={__name:"InputText",props:{label:{type:String,default:"Question"},type:{type:String,default:"text"},modelValue:{type:String,default:""}},setup(o){let t=w({uuid:C.v4()});return(n,e)=>(i(),d("div",at,[s(j,{labelFor:_(t).uuid,text:o.label},null,8,["labelFor","text"]),l("input",{id:_(t).uuid,class:"w-full pr-9 rounded border-slate-300",type:o.type,value:o.modelValue,onInput:e[0]||(e[0]=c=>n.$emit("update:modelValue",c.target.value))},null,40,ot),Z(n.$slots,"default")]))}},nt={class:""},it={class:"relative"},dt=["id"],ut={value:null},mt=["selected","value"],ct=l("span",{class:"absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2"},null,-1),ft={__name:"InputSelect",props:{label:String,options:{type:Array,required:!0},modelValue:String,inSelect:{type:Boolean,default:!1}},setup(o){const t=o;let n=w({uuid:C.v4()});function e(u){return u.value||u}function c(u){return u.label||u}return(u,g)=>(i(),d("div",nt,[o.inSelect?h("",!0):(i(),P(j,{key:0,labelFor:_(n).uuid,text:o.label},null,8,["labelFor","text"])),l("div",it,[l("select",{id:_(n).uuid,onChange:g[0]||(g[0]=b=>u.$emit("update:modelValue",b.target.value)),class:"w-full rounded border-slate-300 bg-select bg-[length:20px_14px]"},[l("option",ut,f(t.inSelect?t.label:"Select"),1),(i(!0),d(B,null,L(o.options,(b,m)=>(i(),d("option",{selected:t.modelValue==e(b),value:e(b),key:m},f(c(b)),9,mt))),128))],40,dt),ct])]))}},_t=["Mr","Mrs","Miss","Ms","Dr"],pt=[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}],bt={title:_t,months:pt},gt={class:"relative w-[100vw] left-1/2 -translate-x-1/2"},xt={class:"max-w-[900px] mx-auto"},yt={class:"p-3 mx-auto"},vt={class:"flex items-center"},ht={class:"max-w-[700px] mx-auto mt-20 bg-orange-50 py-5 px-5 lg:px-7 box-border"},Vt={key:0,class:"swizard_page1"},kt={class:"mt-6 mb-4"},wt={class:"flex my-2"},St={class:"mb-4"},It={class:"grid sm:grid-cols-2 sm:justify-items-center gap-x-6"},Bt={class:"flex justify-start w-full mt-4"},Ct={class:"mt-6 mb-4"},Nt={class:"flex my-2"},Pt={class:"mt-6 mb-2"},Mt={class:"absolute right-2 top-11 cursor-pointer group duration-300"},At={class:"absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},Tt={class:"mt-2"},Ft={class:"flex items-center mt-2 mb-6"},Ut={class:"flex items-center justify-center"},jt={key:1,class:"swizard_page2"},qt={class:"flex flex-col sm:flex-row mt-6"},Et={class:"basis-1/3 pr-2"},Ot={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Rt={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Dt={class:"flex flex-col sm:flex-row"},zt={class:"flex items-center justify-center flex-col"},Ht={key:2,class:"swizard_page3"},Qt={class:"mt-6"},Yt={class:"mt-6"},Lt={class:"mt-6"},Wt={class:"mt-6"},Jt={class:"flex items-center mt-4 text-sm"},Gt={class:"flex items-center justify-center flex-col mt-7"},Zt={key:3,class:"swizard_page4"},Kt={class:"mt-6 mb-1"},Xt=l("p",{class:"mb-1"}," Please draw your signature below in the green box. ",-1),$t={class:""},el={class:"flex items-center justify-center flex-col mt-8"};function tl(o,t,n,e,c,u){const g=y("ModalMarkup"),b=y("vue-final-modal"),m=y("HasError"),A=y("IconInfo"),V=y("NextButton"),S=y("BackButton"),T=y("VueSignaturePad");return i(),d(B,null,[s(b,{classes:"flex justify-center items-center","content-class":"relative flex flex-col w-[500px] max-h-full mx-4 border dark:border-gray-800 rounded bg-white dark:bg-gray-900",modelValue:e.state.showAssesmentModal,"onUpdate:modelValue":t[0]||(t[0]=a=>e.state.showAssesmentModal=a)},{default:E(({close:a})=>[s(g,{title:"Warning!!!",text:e.state.self_assesment_message,onClose:a},null,8,["text","onClose"])]),_:1},8,["modelValue"]),l("div",gt,[l("div",xt,[l("div",yt,[l("div",vt,[(i(!0),d(B,null,L(e.state.steps,(a,I)=>(i(),P(e.ProgressStep,{"is-last":e.state.steps.length==I+1,key:I,title:a.title,number:a.number,step:I+1,current:e.state.step},null,8,["is-last","title","number","step","current"]))),128))]),l("div",ht,[e.state.step==1?(i(),d("div",Vt,[s(e.StepTitle,{title:"Please enter your PPI Claim details"}),l("div",kt,[s(e.Question,{labelFor:"",text:`Were you required to complete a Self-Assessment the
                        year you got your PPI refund?`}),l("div",wt,[s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].self_assesment,"onUpdate:modelValue":[t[1]||(t[1]=a=>e.state.form[0].self_assesment=a),e.selfAssesedClick],value:!0,label:"Yes"},null,8,["modelValue"]),s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].self_assesment,"onUpdate:modelValue":t[2]||(t[2]=a=>e.state.form[0].self_assesment=a),value:!1,label:"No"},null,8,["modelValue"])]),s(m,{field:"self_assesment",errors:e.state.errors},null,8,["errors"])]),l("div",St,[s(e.Question,{text:`Please provide us with the TOTAL amount you
                            received for your PPI refunds in the relevant tax
                            years below:`}),l("div",It,[s(e.AmountBox,{modelValue:e.state.form[0].year_1,"onUpdate:modelValue":t[3]||(t[3]=a=>e.state.form[0].year_1=a),label:"Apr 2018 - Mar 2020",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_2,"onUpdate:modelValue":t[4]||(t[4]=a=>e.state.form[0].year_2=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_3,"onUpdate:modelValue":t[5]||(t[5]=a=>e.state.form[0].year_3=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),s(e.AmountBox,{modelValue:e.state.form[0].year_4,"onUpdate:modelValue":t[6]||(t[6]=a=>e.state.form[0].year_4=a),label:"Apr 2018 - Mar 2019",tooltip:e.state.years_message},null,8,["modelValue","tooltip"]),l("div",Bt,[s(m,{field:"year",errors:e.state.errors,message:"Please fill at least one record"},null,8,["errors"])])])]),l("div",Ct,[s(e.Question,{text:`Were you earning less than \xA350,000 a year at the
                            time you received your PPI refund?`}),l("div",Nt,[s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].less_earning,"onUpdate:modelValue":t[7]||(t[7]=a=>e.state.form[0].less_earning=a),value:!0,label:"Yes"},null,8,["modelValue"]),s(e.RadioBox,{name:"self_assesment",modelValue:e.state.form[0].less_earning,"onUpdate:modelValue":t[8]||(t[8]=a=>e.state.form[0].less_earning=a),value:!1,label:"No"},null,8,["modelValue"])]),s(m,{field:"less_earning",errors:e.state.errors},null,8,["errors"])]),l("div",Pt,[s(e.InputText,{label:"National insurance (NI) Number",modelValue:e.state.form[0].ni_number,"onUpdate:modelValue":t[9]||(t[9]=a=>e.state.form[0].ni_number=a)},{default:E(()=>[l("span",Mt,[s(A),l("span",At,f(e.state.ni_message),1)])]),_:1},8,["modelValue"]),l("div",Tt,[s(m,{field:"invalid_ni",errors:e.state.errors,message:"Invalid NI Number"},null,8,["errors"]),s(m,{field:"ni_number",errors:e.state.errors},null,8,["errors"])])]),l("div",Ft,[s(e.SignCheckbox,{modelValue:e.state.form[0].cant_remember,"onUpdate:modelValue":t[10]||(t[10]=a=>e.state.form[0].cant_remember=a),value:!0,label:"Can't remember (Provide it later)"},null,8,["modelValue"])]),l("div",Ut,[e.state.form[0].self_assesment?(i(),P(m,{key:1,class:"text-center",field:"already_assessed",errors:["already_assessed"],message:e.state.self_assesment_message},null,8,["message"])):(i(),P(V,{key:0,text:"Continue",onClick:e.stepForward}))])])):h("",!0),e.state.step==2?(i(),d("div",jt,[s(e.StepTitle,{title:"Please complete your details below to start your claim"}),l("div",qt,[l("div",Et,[s(e.InputSelect,{class:"",label:"Title",options:e.options.title,modelValue:e.state.form[1].title,"onUpdate:modelValue":t[11]||(t[11]=a=>e.state.form[1].title=a)},null,8,["options","modelValue"])]),l("div",Ot,[s(e.InputText,{class:"",label:"First Name",modelValue:e.state.form[1].first_name,"onUpdate:modelValue":t[12]||(t[12]=a=>e.state.form[1].first_name=a)},null,8,["modelValue"])]),l("div",Rt,[s(e.InputText,{class:"",label:"Last Name",modelValue:e.state.form[1].last_name,"onUpdate:modelValue":t[13]||(t[13]=a=>e.state.form[1].last_name=a)},null,8,["modelValue"])])]),s(m,{class:"mt-1",field:"name",errors:e.state.errors,message:"The above fields are required"},null,8,["errors"]),s(e.Question,{class:"mt-6",text:"DOB"}),l("div",Dt,[s(e.InputSelect,{class:"basis-1/3 pr-2",label:"Day","in-select":"",options:e.range(1,1,31),modelValue:e.state.form[1].day,"onUpdate:modelValue":t[14]||(t[14]=a=>e.state.form[1].day=a)},null,8,["options","modelValue"]),s(e.InputSelect,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Month","in-select":"",options:e.options.months,modelValue:e.state.form[1].month,"onUpdate:modelValue":t[15]||(t[15]=a=>e.state.form[1].month=a)},null,8,["options","modelValue"]),s(e.InputSelect,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Year","in-select":"",options:e.range(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse(),modelValue:e.state.form[1].year,"onUpdate:modelValue":t[16]||(t[16]=a=>e.state.form[1].year=a)},null,8,["options","modelValue"])]),s(m,{class:"mt-1",field:"dob",errors:e.state.errors,message:"The above fields are required"},null,8,["errors"]),l("div",zt,[s(V,{class:"mt-8 mb-2",text:"Continue",onClick:e.stepForward}),s(S,{class:"font-bold",text:"Back",onClick:e.stepBack})])])):h("",!0),e.state.step==3?(i(),d("div",Ht,[s(e.StepTitle,{title:"Enter your contact details to claim your tax back"}),l("div",null,[l("div",Qt,[s(e.InputText,{type:"email",label:"Email",modelValue:e.state.form[2].email,"onUpdate:modelValue":t[17]||(t[17]=a=>e.state.form[2].email=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"email",errors:e.state.errors},null,8,["errors"]),s(m,{class:"mt-1",field:"invalid_email",errors:e.state.errors,message:"Invalid Email"},null,8,["errors"])]),l("div",Yt,[s(e.InputText,{type:"tel",label:"Phone Number",modelValue:e.state.form[2].phone,"onUpdate:modelValue":t[18]||(t[18]=a=>e.state.form[2].phone=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"phone",errors:e.state.errors},null,8,["errors"]),s(m,{class:"mt-1",field:"invalid_phone",errors:e.state.errors,message:"Invalid Phone Number"},null,8,["errors"])]),l("div",Lt,[s(e.InputText,{label:"Address",modelValue:e.state.form[2].address,"onUpdate:modelValue":t[19]||(t[19]=a=>e.state.form[2].address=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"address",errors:e.state.errors},null,8,["errors"])]),l("div",Wt,[s(e.InputText,{label:"Postcode",modelValue:e.state.form[2].postcode,"onUpdate:modelValue":t[20]||(t[20]=a=>e.state.form[2].postcode=a)},null,8,["modelValue"]),s(m,{class:"mt-1",field:"postcode",errors:e.state.errors},null,8,["errors"])])]),l("div",Jt,[s(e.SignCheckbox,{modelValue:e.state.form[2].agree,"onUpdate:modelValue":t[21]||(t[21]=a=>e.state.form[2].agree=a),value:!0,label:"I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes."},null,8,["modelValue"])]),s(m,{class:"mt-2",field:"agree",errors:e.state.errors},null,8,["errors"]),l("div",Gt,[s(V,{text:"Continue",onClick:e.stepForward}),s(S,{text:"Back",onClick:e.stepBack})])])):h("",!0),e.state.step==4?(i(),d("div",Zt,[s(e.GreatNews),s(e.InputText,{label:"Do you have a referral code? (optional)",modelValue:e.state.form[3].referal_code,"onUpdate:modelValue":t[22]||(t[22]=a=>e.state.form[3].referal_code=a)},null,8,["modelValue"]),l("div",Kt,[Xt,l("div",$t,[s(T,{class:"w-full bg-white border border-green-500 rounded",ref:"signaturePad"},null,512),s(m,{class:"mt-2",field:"signature",errors:e.state.errors,message:"Signature required"},null,8,["errors"])])]),l("small",{class:"font-bold cursor-pointer",onClick:e.clearSignature},"Clear Signature"),l("div",el,[s(V,{disabled:e.state.loading,"no-icon":"",text:e.state.loading?"Please Wait ---":"Start Your Claim",onClick:e.submit},null,8,["disabled","text"]),s(S,{text:"Back",onClick:e.stepBack})])])):h("",!0)])])])])],64)}const ll={__name:"App",setup(o,{expose:t}){t();const{filterEmptyKeys:n,hasSome:e,hasEvery:c,arrayIntersection:u,range:g}=z(),b=O(null);R(()=>{});const m=M(()=>{var v;return r.form[0].cant_remember=!1,(v=r.form[0].ni_number)==null?void 0:v.length});function A(){setTimeout(()=>{console.log(r.form[0]),r.showAssesmentModal=!0},0)}function V(){const v=Object.values(r.required[r.step-1]),p=r.form[r.step-1];v.includes("ni_number")&&p.cant_remember&&v.splice(v.indexOf("ni_number"),1);const k=n(p);let x=u(k,v);if(r.step==1){c(Object.values(r.year),k)&&x.push("year"),p.self_assesment&&x.push("already_assessed");var W=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");![null,""].includes(p.ni_number)&&!W.test(p.ni_number)&&x.push("invalid_ni")}if(r.step==2&&(e(Object.values(r.name),k)&&x.push("name"),e(Object.values(r.dob),k)&&x.push("dob")),r.step==3){var J=/\S+@\S+\.\S+/;p.email!=null&&!J.test(p.email)&&x.push("invalid_email"),p.phone!=null&&(p.phone.length!=11||p.phone.charAt(0)!="0")&&x.push("invalid_phone"),!p.agree&&!x.includes("agree")&&x.push("agree")}return r.errors=[...x],!r.errors.length}function S(){V()&&r.step>=1&&r.step<=4&&r.step++}function T(){r.step>1&&r.step<=4&&r.step--}function a(){b.value.clearSignature()}async function I(){const{isEmpty:v,data:p}=b.value.saveSignature();if(v){r.errors.push("signature");return}r.loading=!0,r.form[3].signature=p;const k={...r.form[0],...r.form[1],...r.form[2],...r.form[3]};await D.post(r.url,k),r.loading=!1,window.location.href="/thank-you"}const q={filterEmptyKeys:n,hasSome:e,hasEvery:c,arrayIntersection:u,range:g,signaturePad:b,niCheckDisabled:m,selfAssesedClick:A,validate:V,stepForward:S,stepBack:T,clearSignature:a,submit:I,computed:M,onMounted:R,ref:O,axios:D,state:r,Reusable:z,ProgressStep:Ie,StepTitle:Pe,AmountTitle:Te,SignCheckbox:qe,GreatNews:De,RadioBox:We,Question:j,AmountBox:st,InputText:rt,InputSelect:ft,options:bt};return Object.defineProperty(q,"__isScriptSetup",{enumerable:!1,value:!0}),q}},sl=F(ll,[["render",tl]]);K(sl).use(X).component("IconInfo",$).component("IconNext",ee).component("IconPrevious",te).component("IconSelect",le).component("HasError",ne).component("NextButton",ue).component("BackButton",fe).component("VueFinalModal",se).component("ModalMarkup",ve).mount("#app");