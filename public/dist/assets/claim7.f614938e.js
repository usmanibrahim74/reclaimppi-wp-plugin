import{r as U,z as J,k as q,o as x,c as v,g as K,v as W,A as e,d as r,D as L,h as I,n as G,t as F,C as O,a as i,b as t,F as P,R as j,w as A,i as D,f as E,j as H,e as Z,_ as Q,l as S,m as X,p as ee,I as te,q as oe,s as le,u as se,E as re}from"./reuseable.d23cd3c9.js";import{_ as ae,a as ne,b as ue,H as ie,c as de,d as me,e as ce,f as pe,g as _e,h as fe,i as be,j as ye,k as xe}from"./ProgressStep.f1406644.js";import{m as ge}from"./mitt.550594b0.js";import{G as ve}from"./GreatNews.dc70a56b.js";const Ve={class:"px-4 py-3 bg-white border"},we=["id","value","name"],he=["for"],ke={class:"w-5 h-5 border border-gray-400 bg-white rounded-full flex items-center justify-center"},Be={key:0,class:"w-3 h-3 bg-green-500 rounded-full"},Ce={__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},value:{type:Boolean,default:!1},name:String,label:{type:String,default:"label"}},emits:["update:modelValue"],setup(g,{emit:u}){const p=g;let o=U({uuid:J.v4()});const f=q({get(){return p.modelValue},set(n){u("update:modelValue",n)}}),m=q(()=>f.value.includes(p.value));return(n,a)=>(x(),v("div",Ve,[K(r("input",{id:e(o).uuid,type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=s=>L(f)?f.value=s:null),value:p.value,name:p.name,class:"hidden"},null,8,we),[[W,e(f)]]),r("label",{for:e(o).uuid,class:"flex items-center cursor-pointer gap-4"},[r("div",ke,[e(m)?(x(),v("div",Be)):I("",!0)]),r("span",{class:G(["text-md font-medium dark:text-gray-300",[e(m)?"text-green-500":"text-black"]])},F(p.label),3)],8,he)]))}},Ie=["Mr","Mrs","Miss","Ms","Dr"],Pe=[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}],z={title:null,first_name:null,last_name:null},T={day:null,month:null,year:null},M={self_assessment:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",amount:"A rough estimate of amount you've received in pounds (\xA3)"},w=U({url:"/ReclaimPPI/lead",step:1,loading:!1,steps:[{title:"Criteria",number:1},{title:"PPI Claim Details",number:2},{title:"About You",number:3},{title:"Contact Details",number:4},{title:"Start Claim",number:5}],form:[{self_assessment:null},{amount:null,years:[]},{less_earning:null,ni_number:null,cant_remember:null},{...z,...T},{email:null,phone:null,address:null,postcode:null,agree:null},{referral_code:null,signature:null}]}),qe={class:"mt-6 mb-4"},Ue={__name:"criteria",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,o=O("emitter");U({required:["self_assessment"],errors:[]});const f=q({get(){return p.modelValue},set(s){u("update:modelValue",s)}});function m(){f.self_assessment=!1,a()}function n(){f.self_assessment=!0,o.emit("toggleModal",{name:"assessmentModal",show:!0})}function a(){u("forward")}return(s,c)=>{const _=i("step-title"),d=i("question");return x(),v(P,null,[t(_,{title:"Is the below statement true?"}),r("div",qe,[t(d,{labelFor:"",class:"text-center max-w-[450px] mx-auto",text:"Please press proceed if you were NOT self-employed the year you got your PPI refund."}),r("div",{class:"flex flex-col md:flex-row gap-5 justify-center mt-6 items-center"},[r("button",{onClick:m,type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full"}," Proceed "),r("button",{type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full",onClick:n}," I was self-employed ")])])],64)}}},Ne={class:"mt-6 mb-2"},je={class:"grid sm:justify-items-center gap-x-6"},$e={class:"flex justify-start w-full mt-4"},Ee={class:"mt-2 mb-4"},Me=r("span",{class:"text-sm"},"(Please select the dates when you received the refund)",-1),Se={class:"grid md:grid-cols-3 mb-2 mt-4 gap-2"},Fe={class:"flex items-center justify-center"},Oe={__name:"claim",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,{filterEmptyKeys:o,hasEvery:f,arrayIntersection:m,range:n}=j();let a=U({showAssessmentModal:!1,required:["amount","years"],errors:[]});const s=q({get(){return p.modelValue},set(d){u("update:modelValue",d)}});function c(){const d=p.modelValue;let l=Object.values(a.required);const b=o(d);let y=m(b,l);return d.years.length==0&&y.push("years"),a.errors=[...y],!a.errors.length}function _(){c()&&u("forward")}return(d,l)=>{const b=i("step-title"),y=i("question"),h=i("HasError"),B=i("checkbox"),V=i("NextButton");return x(),v(P,null,[t(b,{title:"Please enter your PPI Claim details"}),e(s)?(x(),v(P,{key:0},[r("div",Ne,[t(y,{text:"How much did you receive in TOTAL from your PPI refunds?"}),r("div",je,[t(ae,{modelValue:e(s).amount,"onUpdate:modelValue":l[0]||(l[0]=k=>e(s).amount=k),label:"",tooltip:e(M).amount},null,8,["modelValue","tooltip"]),r("div",$e,[t(h,{field:"amount",errors:e(a).errors},null,8,["errors"])])])]),r("div",Ee,[t(y,{class:"leading-none",text:"When did you receive your refunds?"}),Me,r("div",Se,[t(B,{name:"years",modelValue:e(s).years,"onUpdate:modelValue":l[1]||(l[1]=k=>e(s).years=k),value:2018,label:"Before 2019"},null,8,["modelValue"]),t(B,{name:"years",modelValue:e(s).years,"onUpdate:modelValue":l[2]||(l[2]=k=>e(s).years=k),value:2019,label:"2019"},null,8,["modelValue"]),t(B,{name:"years",modelValue:e(s).years,"onUpdate:modelValue":l[3]||(l[3]=k=>e(s).years=k),value:2020,label:"2020"},null,8,["modelValue"]),t(B,{name:"years",modelValue:e(s).years,"onUpdate:modelValue":l[4]||(l[4]=k=>e(s).years=k),value:2021,label:"2021"},null,8,["modelValue"]),t(B,{name:"years",modelValue:e(s).years,"onUpdate:modelValue":l[5]||(l[5]=k=>e(s).years=k),value:"false",label:"2022"},null,8,["modelValue"])]),t(h,{field:"years",errors:e(a).errors,message:"Please select at least one date"},null,8,["errors"])]),r("div",Fe,[t(V,{text:"Continue",onClick:_})])],64)):I("",!0)],64)}}},Ae={class:"mt-6 mb-4"},De={class:"flex my-2"},He={class:"mt-6 mb-2"},ze={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},Te={class:"absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},Re={class:"mt-2"},Ye={class:"flex items-center mt-2 mb-6"},Je={class:"flex flex-col items-center justify-center"},Ke={__name:"claim2",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,{filterEmptyKeys:o,hasEvery:f,arrayIntersection:m,range:n}=j();let a=U({showAssessmentModal:!1,required:["less_earning","ni_number"],errors:[],amount:null,years:[]});const s=q({get(){return p.modelValue},set(d){u("update:modelValue",d)}});function c(){const d=p.modelValue;let l=Object.values(a.required);l.includes("ni_number")&&d.cant_remember&&l.splice(l.indexOf("ni_number"),1);const b=o(d);let y=m(b,l);var h=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");return![null,""].includes(d.ni_number)&&!h.test(d.ni_number)&&y.push("invalid_ni"),a.errors=[...y],!a.errors.length}function _(){c()&&u("forward")}return(d,l)=>{const b=i("step-title"),y=i("question"),h=i("radio-box"),B=i("HasError"),V=i("IconInfo"),k=i("input-text"),$=i("sign-checkbox"),C=i("NextButton"),Y=i("BackButton");return x(),v(P,null,[t(b,{title:"Please enter your PPI Claim details"}),e(s)?(x(),v(P,{key:0},[r("div",Ae,[t(y,{text:`Were you earning less than \xA350,000 a year at the
                time you received your PPI refund?`}),r("div",De,[t(h,{name:"less_earning",modelValue:e(s).less_earning,"onUpdate:modelValue":l[0]||(l[0]=N=>e(s).less_earning=N),value:!0,label:"Yes"},null,8,["modelValue"]),t(h,{name:"less_earning",modelValue:e(s).less_earning,"onUpdate:modelValue":l[1]||(l[1]=N=>e(s).less_earning=N),value:!1,label:"No"},null,8,["modelValue"])]),t(B,{field:"less_earning",errors:e(a).errors},null,8,["errors"])]),r("div",He,[t(k,{label:"National Insurance (NI) Number",modelValue:e(s).ni_number,"onUpdate:modelValue":l[2]||(l[2]=N=>e(s).ni_number=N)},{default:A(()=>[r("span",ze,[t(V),r("span",Te,F(e(M).ni),1)])]),_:1},8,["modelValue"]),r("div",Re,[t(B,{field:"invalid_ni",errors:e(a).errors,message:"Invalid NI Number"},null,8,["errors"]),t(B,{field:"ni_number",errors:e(a).errors},null,8,["errors"])])]),r("div",Ye,[t($,{modelValue:e(s).cant_remember,"onUpdate:modelValue":l[3]||(l[3]=N=>e(s).cant_remember=N),value:!0,label:"Can't remember (Provide it later)",disabled:d.niCheckDisabled},null,8,["modelValue","disabled"])]),r("div",Je,[t(C,{text:"Continue",onClick:_}),t(Y,{text:"Back",onClick:l[4]||(l[4]=N=>d.$emit("backward"))})])],64)):I("",!0)],64)}}},We={class:"flex flex-col sm:flex-row mt-6"},Le={class:"basis-1/3 pr-2"},Ge={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Ze={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Qe={class:"flex flex-col sm:flex-row"},Xe={class:"flex items-center justify-center flex-col"},et={__name:"about",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,{range:o,hasSome:f,filterEmptyKeys:m,arrayIntersection:n}=j();let a=U({required:["name","dob"],errors:[]});const s=q({get(){return p.modelValue},set(d){u("update:modelValue",d)}});function c(){const d=p.modelValue;let l=Object.values(a.required);const b=m(d);let y=n(b,l);return f(Object.keys(z),b)&&y.push("name"),f(Object.keys(T),b)&&y.push("dob"),a.errors=[...y],!a.errors.length}function _(){c()&&u("forward")}return(d,l)=>{const b=i("step-title"),y=i("input-select"),h=i("input-text"),B=i("HasError"),V=i("question"),k=i("NextButton"),$=i("BackButton");return x(),v(P,null,[t(b,{title:"Please complete your details below to start your claim"}),r("div",We,[r("div",Le,[t(y,{class:"",label:"Title",options:e(Ie),modelValue:e(s).title,"onUpdate:modelValue":l[0]||(l[0]=C=>e(s).title=C)},null,8,["options","modelValue"])]),r("div",Ge,[t(h,{class:"",label:"First Name",modelValue:e(s).first_name,"onUpdate:modelValue":l[1]||(l[1]=C=>e(s).first_name=C)},null,8,["modelValue"])]),r("div",Ze,[t(h,{class:"",label:"Last Name",modelValue:e(s).last_name,"onUpdate:modelValue":l[2]||(l[2]=C=>e(s).last_name=C)},null,8,["modelValue"])])]),t(B,{class:"mt-1",field:"name",errors:e(a).errors,message:"The above fields are required"},null,8,["errors"]),t(V,{class:"mt-6",text:"DOB"}),r("div",Qe,[t(y,{class:"basis-1/3 pr-2",label:"Day","in-select":"",options:e(o)(1,1,31),modelValue:e(s).day,"onUpdate:modelValue":l[3]||(l[3]=C=>e(s).day=C)},null,8,["options","modelValue"]),t(y,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Month","in-select":"",options:e(Pe),modelValue:e(s).month,"onUpdate:modelValue":l[4]||(l[4]=C=>e(s).month=C)},null,8,["options","modelValue"]),t(y,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Year","in-select":"",options:e(o)(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse(),modelValue:e(s).year,"onUpdate:modelValue":l[5]||(l[5]=C=>e(s).year=C)},null,8,["options","modelValue"])]),t(B,{class:"mt-1",field:"dob",errors:e(a).errors,message:"The above fields are required"},null,8,["errors"]),r("div",Xe,[t(k,{class:"mt-8 mb-2",text:"Continue",onClick:_}),t($,{class:"font-bold",text:"Back",onClick:l[6]||(l[6]=C=>d.$emit("backward"))})])],64)}}},tt={class:"mt-6"},ot={class:"mt-6"},lt={class:"mt-6"},st={class:"mt-6"},rt={class:"flex items-center mt-4 text-sm"},at={class:"flex items-center justify-center flex-col mt-7"},nt={__name:"contact",props:{modelValue:{type:Object,required:!0},messages:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,{filterEmptyKeys:o,arrayIntersection:f}=j();let m=U({required:["phone","address","postcode","agree","signature"],errors:[]});const n=q({get(){return p.modelValue},set(c){u("update:modelValue",c)}});function a(){const c=p.modelValue;let _=Object.values(m.required);const d=o(c);let l=f(d,_);var b=/\S+@\S+\.\S+/;return c.email!=null&&!b.test(c.email)&&l.push("invalid_email"),c.phone!=null&&(c.phone.length!=11||c.phone.charAt(0)!="0")&&l.push("invalid_phone"),!c.agree&&!l.includes("agree")&&l.push("agree"),m.errors=[...l],!m.errors.length}function s(){a()&&u("forward")}return(c,_)=>{const d=i("step-title"),l=i("input-text"),b=i("HasError"),y=i("sign-checkbox"),h=i("NextButton"),B=i("BackButton");return x(),v(P,null,[t(d,{title:"Enter your contact details to claim your tax back"}),r("div",null,[r("div",tt,[t(l,{type:"email",label:"Email",modelValue:e(n).email,"onUpdate:modelValue":_[0]||(_[0]=V=>e(n).email=V)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"email",errors:e(m).errors},null,8,["errors"]),t(b,{class:"mt-1",field:"invalid_email",errors:e(m).errors,message:"Invalid Email"},null,8,["errors"])]),r("div",ot,[t(l,{type:"tel",label:"Phone Number",modelValue:e(n).phone,"onUpdate:modelValue":_[1]||(_[1]=V=>e(n).phone=V)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"phone",errors:e(m).errors},null,8,["errors"]),t(b,{class:"mt-1",field:"invalid_phone",errors:e(m).errors,message:"Invalid Phone Number"},null,8,["errors"])]),r("div",lt,[t(l,{label:"Address",modelValue:e(n).address,"onUpdate:modelValue":_[2]||(_[2]=V=>e(n).address=V)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"address",errors:e(m).errors},null,8,["errors"])]),r("div",st,[t(l,{label:"Postcode",modelValue:e(n).postcode,"onUpdate:modelValue":_[3]||(_[3]=V=>e(n).postcode=V)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"postcode",errors:e(m).errors},null,8,["errors"])])]),r("div",rt,[t(y,{modelValue:e(n).agree,"onUpdate:modelValue":_[4]||(_[4]=V=>e(n).agree=V),value:!0,label:"I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes."},null,8,["modelValue"])]),t(b,{class:"mt-2",field:"agree",errors:e(m).errors},null,8,["errors"]),r("div",at,[t(h,{text:"Continue",onClick:s}),t(B,{text:"Back",onClick:_[5]||(_[5]=V=>c.$emit("backward"))})])],64)}}},ut={class:"mt-6 mb-1"},it=r("p",{class:"mb-1"},"Please draw your signature below in the green box.",-1),dt={class:""},mt={class:"flex items-center justify-center flex-col mt-8"},ct={__name:"start-claim",props:{modelValue:{type:Object,required:!0},loading:{type:Boolean,default:!1}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const p=g,o=D(null);let f=U({errors:[]});function m(){o.value.clearSignature()}function n(){const{isEmpty:s,data:c}=o.value.saveSignature();if(s){f.errors.push("signature");return}a.value.signature=c,u("forward")}const a=q({get(){return p.modelValue},set(s){return new Proxy(p.modelValue,{set(c,_,d){return u("update:modelValue",{...c,[_]:d}),!0}})}});return(s,c)=>{const _=i("input-text"),d=i("VueSignaturePad"),l=i("HasError"),b=i("NextButton"),y=i("BackButton");return x(),v(P,null,[g.loading?(x(),E(ne,{key:0})):I("",!0),t(ve),t(_,{label:"Do you have a referral code? (optional)",modelValue:e(a).referral_code,"onUpdate:modelValue":c[0]||(c[0]=h=>e(a).referral_code=h)},null,8,["modelValue"]),r("div",ut,[it,r("div",dt,[t(d,{class:"w-full bg-white border border-green-500 rounded",ref_key:"signaturePad",ref:o},null,512),t(l,{class:"mt-2",field:"signature",errors:e(f).errors,message:"Signature required"},null,8,["errors"])])]),r("small",{class:"font-bold cursor-pointer",onClick:m},"Clear Signature"),r("div",mt,[t(b,{disabled:g.loading,"no-icon":"",text:g.loading?"Please Wait ---":"Start Your Claim",onClick:n},null,8,["disabled","text"]),t(y,{text:"Back",onClick:c[1]||(c[1]=h=>s.$emit("backward"))})])],64)}}},pt={__name:"modal",setup(g){const u=O("emitter");let p=U({assessmentModal:!1});return H(()=>{u.on("toggleModal",({name:o,show:f})=>{p[o]=f})}),(o,f)=>{const m=i("ModalMarkup"),n=i("vue-final-modal");return x(),E(n,{classes:"flex justify-center items-center","content-class":"relative flex flex-col w-[500px] max-h-full mx-4 border rounded bg-white",modelValue:e(p).assessmentModal,"onUpdate:modelValue":f[0]||(f[0]=a=>e(p).assessmentModal=a)},{default:A(({close:a})=>[t(m,{title:"Warning!!!",text:e(M).self_assessment,onClose:a},null,8,["text","onClose"])]),_:1},8,["modelValue"])}}},_t={class:"relative left-1/2 -translate-x-1/2 w-[97vw] md:w-[99vw] mt-6 md:mt-4"},ft={class:"max-w-[1000px] mx-auto"},bt={class:"p-1 mx-auto"},yt={class:"flex items-center"},xt={class:"max-w-[700px] mx-auto mt-10 md:mt-20 bg-orange-50 py-5 px-3 lg:px-7 box-border relative"},gt={key:0,class:"swizard_page1"},vt={key:1,class:"swizard_page1"},Vt={key:2,class:"swizard_page1"},wt={key:3,class:"swizard_page2"},ht={key:4,class:"swizard_page3"},kt={key:5,class:"swizard_page4"};function Bt(g,u,p,o,f,m){return x(),v(P,null,[t(o.Modal),r("div",_t,[r("div",ft,[r("div",bt,[r("div",yt,[(x(!0),v(P,null,Z(o.state.steps,(n,a)=>(x(),E(o.ProgressStep,{"is-last":o.state.steps.length==a+1,key:a,title:n.title,number:n.number,step:a+1,current:o.state.step},null,8,["is-last","title","number","step","current"]))),128))]),r("div",xt,[o.state.step==1?(x(),v("div",gt,[t(o.Criteria,{modelValue:o.state.form[0],"onUpdate:modelValue":u[0]||(u[0]=n=>o.state.form[0]=n),onForward:o.stepForward},null,8,["modelValue"])])):I("",!0),o.state.step==2?(x(),v("div",vt,[t(o.Claim,{modelValue:o.state.form[1],"onUpdate:modelValue":u[1]||(u[1]=n=>o.state.form[1]=n),onForward:o.stepForward},null,8,["modelValue"])])):I("",!0),o.state.step==3?(x(),v("div",Vt,[t(o.Claim2,{modelValue:o.state.form[2],"onUpdate:modelValue":u[2]||(u[2]=n=>o.state.form[2]=n),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):I("",!0),o.state.step==4?(x(),v("div",wt,[t(o.About,{modelValue:o.state.form[3],"onUpdate:modelValue":u[3]||(u[3]=n=>o.state.form[3]=n),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):I("",!0),o.state.step==5?(x(),v("div",ht,[t(o.Contact,{modelValue:o.state.form[4],"onUpdate:modelValue":u[4]||(u[4]=n=>o.state.form[4]=n),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):I("",!0),o.state.step==6?(x(),v("div",kt,[t(o.StartClaim,{modelValue:o.state.form[5],"onUpdate:modelValue":u[5]||(u[5]=n=>o.state.form[5]=n),onForward:o.submit,onBackward:o.stepBack,loading:o.state.loading},null,8,["modelValue","loading"])])):I("",!0)])])])])],64)}const Ct={__name:"App",setup(g,{expose:u}){u();function p(){w.step>=1&&w.step<=5&&(w.step++,m())}function o(){w.step>1&&w.step<=5&&(w.step--,m())}async function f(){w.loading=!0;const a=w.form[1],s=parseFloat((a.amount/a.years.length).toFixed(2)),c={year_1:a.years.includes(2019)?s:0,year_2:a.years.includes(2020)?s:0,year_3:a.years.includes(2021)?s:0,year_4:a.years.includes(2022)?s:0};c.year_1+=a.years.includes(2018)?s:0;const _={externalID:window.location.href,source:"Friend",...w.form[0],...c,...w.form[2],...w.form[3],...w.form[4],...w.form[5]},d=await S.post(w.url,_);w.loading=!1,window.location.href="/26-thanks?reference="+d.data.claimID}function m(){document.getElementById("app").scrollIntoView()}const n={stepForward:p,stepBack:o,submit:f,scrollUp:m,computed:q,onMounted:H,ref:D,axios:S,state:w,Reusable:j,Criteria:Ue,Claim:Oe,Claim2:Ke,About:et,Contact:nt,StartClaim:ct,ProgressStep:ue,Modal:pt};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},It=Q(Ct,[["render",Bt]]),Pt=ge(),R=X(It);R.provide("emitter",Pt);R.use(ee).component("IconInfo",te).component("IconNext",oe).component("IconPrevious",le).component("IconSelect",se).component("HasError",ie).component("NextButton",de).component("BackButton",me).component("VueFinalModal",re).component("ModalMarkup",ce).component("RadioBox",pe).component("Checkbox",Ce).component("Question",_e).component("InputText",fe).component("InputSelect",be).component("SignCheckbox",ye).component("StepTitle",xe).mount("#app");
