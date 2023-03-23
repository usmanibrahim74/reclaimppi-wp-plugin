import{r as U,C as $,k as N,a as d,o as b,c as v,b as e,d as l,F as I,A as t,e as O,f as q,w as F,t as H,h as B,R as M,i as T,_ as D,l as E,x as K,j as Y,m as L,p as Z,I as Q,q as X,s as ee,u as te,E as oe}from"./reuseable.d23cd3c9.js";import{_ as le,a as se,b as re,H as ne,c as ae,d as ie,e as ue,f as de,g as me,h as ce,i as pe,j as fe,k as _e}from"./ProgressStep.e8efce90.js";import{m as be}from"./mitt.550594b0.js";import{G as xe}from"./GreatNews2.275ada5d.js";const ye=["Mr","Mrs","Miss","Ms","Dr"],ve=[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}],R={year_1:null,year_2:null,year_3:null,year_4:null},z={title:null,first_name:null,last_name:null},J={day:null,month:null,year:null},A={self_assessment:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",years:"A rough estimate of amount you've received in pounds (\xA3)"},g=U({leadUrl:"/ReclaimPPI/lead",thanksUrl:"/ReclaimPPI/thanks",step:1,claim_id:null,loading:!1,steps:[{title:"Criteria",number:1},{title:"PPI Claim Details",number:2},{title:"About You",number:3},{title:"Contact Details",number:4},{title:"Start Claim",number:5}],form:[{self_assessment:null},{...R,less_earning:null,ni_number:null,cant_remember:null},{...z,...J},{email:null,phone:null,address:null,postcode:null,agree:null},{referral_code:null,signature:null}]}),ge={class:"mt-6 mb-4"},Ve={__name:"criteria",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(V,{emit:a}){const _=V,o=$("emitter");U({required:["self_assessment"],errors:[]});const m=N({get(){return _.modelValue},set(n){a("update:modelValue",n)}});function p(){m.self_assessment=!1,i()}function r(){m.self_assessment=!0,o.emit("toggleModal",{name:"assessmentModal",show:!0})}function i(){console.log("hanji"),a("forward")}return(n,c)=>{const u=d("step-title"),f=d("question");return b(),v(I,null,[e(u,{title:"Is the below statement true?"}),l("div",ge,[e(f,{labelFor:"",class:"text-center max-w-[450px] mx-auto",text:"Please press proceed if you were NOT self-employed the year you got your PPI refund."}),l("div",{class:"flex flex-col md:flex-row gap-5 justify-center mt-6 items-center"},[l("button",{onClick:p,type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full"}," Proceed "),l("button",{type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full",onClick:r}," I was self-employed ")])])],64)}}},he={class:"mt-6 mb-4"},we={class:"grid sm:grid-cols-2 sm:justify-items-center gap-x-6"},ke={class:"flex justify-start w-full mt-4"},Ce={class:"mt-6 mb-4"},Ie={class:"flex my-2"},Be={class:"mt-6 mb-2"},Pe={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},Ue={class:"absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},Ne={class:"mt-2"},qe={class:"flex items-center mt-2 mb-6"},Me={class:"flex items-center justify-center"},je={__name:"claim",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(V,{emit:a}){const _=V,{filterEmptyKeys:o,hasEvery:m,arrayIntersection:p,range:r}=M();let i=U({showAssessmentModal:!1,required:["years","less_earning","ni_number"],errors:[]});const n=N({get(){return _.modelValue},set(f){a("update:modelValue",f)}});function c(){const f=_.modelValue;let s=Object.values(i.required);s.includes("ni_number")&&f.cant_remember&&s.splice(s.indexOf("ni_number"),1);const x=o(f);let y=p(x,s);m(Object.keys(R),x)&&y.push("years");var h=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");return![null,""].includes(f.ni_number)&&!h.test(f.ni_number)&&y.push("invalid_ni"),i.errors=[...y],!i.errors.length}function u(){c()&&a("forward")}return(f,s)=>{const x=d("step-title"),y=d("question"),h=d("HasError"),P=d("radio-box"),w=d("IconInfo"),j=d("input-text"),S=d("sign-checkbox"),k=d("NextButton");return b(),v(I,null,[e(x,{title:"Please enter your PPI Claim details"}),t(n)?(b(),v(I,{key:0},[l("div",he,[e(y,{text:`Please provide us with the TOTAL amount you
                received for your PPI refunds in the relevant tax
                years below:`}),l("div",we,[(b(!0),v(I,null,O(t(r)(1,1,4),C=>(b(),q(le,{modelValue:t(n)["year_"+C],"onUpdate:modelValue":G=>t(n)["year_"+C]=G,label:`Apr ${2018+C-1} - Mar ${2018+C}`,tooltip:t(A).years},null,8,["modelValue","onUpdate:modelValue","label","tooltip"]))),256)),l("div",ke,[e(h,{field:"years",errors:t(i).errors,message:"Please fill at least one record"},null,8,["errors"])])])]),l("div",Ce,[e(y,{text:`Were you earning less than \xA350,000 a year at the
                time you received your PPI refund?`}),l("div",Ie,[e(P,{name:"less_earning",modelValue:t(n).less_earning,"onUpdate:modelValue":s[0]||(s[0]=C=>t(n).less_earning=C),value:!0,label:"Yes"},null,8,["modelValue"]),e(P,{name:"less_earning",modelValue:t(n).less_earning,"onUpdate:modelValue":s[1]||(s[1]=C=>t(n).less_earning=C),value:!1,label:"No"},null,8,["modelValue"])]),e(h,{field:"less_earning",errors:t(i).errors},null,8,["errors"])]),l("div",Be,[e(j,{label:"National Insurance (NI) Number",modelValue:t(n).ni_number,"onUpdate:modelValue":s[2]||(s[2]=C=>t(n).ni_number=C)},{default:F(()=>[l("span",Pe,[e(w),l("span",Ue,H(t(A).ni),1)])]),_:1},8,["modelValue"]),l("div",Ne,[e(h,{field:"invalid_ni",errors:t(i).errors,message:"Invalid NI Number"},null,8,["errors"]),e(h,{field:"ni_number",errors:t(i).errors},null,8,["errors"])])]),l("div",qe,[e(S,{modelValue:t(n).cant_remember,"onUpdate:modelValue":s[3]||(s[3]=C=>t(n).cant_remember=C),value:!0,label:"Can't remember (Provide it later)",disabled:f.niCheckDisabled},null,8,["modelValue","disabled"])]),l("div",Me,[e(k,{text:"Continue",onClick:u})])],64)):B("",!0)],64)}}},Se={class:"flex flex-col sm:flex-row mt-6"},Ee={class:"basis-1/3 pr-2"},Ae={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},$e={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Oe={class:"flex flex-col sm:flex-row"},Fe={class:"flex items-center justify-center flex-col"},He={__name:"about",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(V,{emit:a}){const _=V,{range:o,hasSome:m,filterEmptyKeys:p,arrayIntersection:r}=M();let i=U({required:["name","dob"],errors:[]});const n=N({get(){return _.modelValue},set(f){a("update:modelValue",f)}});function c(){const f=_.modelValue;let s=Object.values(i.required);const x=p(f);let y=r(x,s);return m(Object.keys(z),x)&&y.push("name"),m(Object.keys(J),x)&&y.push("dob"),i.errors=[...y],!i.errors.length}function u(){c()&&a("forward")}return(f,s)=>{const x=d("step-title"),y=d("input-select"),h=d("input-text"),P=d("HasError"),w=d("question"),j=d("NextButton"),S=d("BackButton");return b(),v(I,null,[e(x,{title:"Please complete your details below to start your claim"}),l("div",Se,[l("div",Ee,[e(y,{class:"",label:"Title",options:t(ye),modelValue:t(n).title,"onUpdate:modelValue":s[0]||(s[0]=k=>t(n).title=k)},null,8,["options","modelValue"])]),l("div",Ae,[e(h,{class:"",label:"First Name",modelValue:t(n).first_name,"onUpdate:modelValue":s[1]||(s[1]=k=>t(n).first_name=k)},null,8,["modelValue"])]),l("div",$e,[e(h,{class:"",label:"Last Name",modelValue:t(n).last_name,"onUpdate:modelValue":s[2]||(s[2]=k=>t(n).last_name=k)},null,8,["modelValue"])])]),e(P,{class:"mt-1",field:"name",errors:t(i).errors,message:"The above fields are required"},null,8,["errors"]),e(w,{class:"mt-6",text:"DOB"}),l("div",Oe,[e(y,{class:"basis-1/3 pr-2",label:"Day","in-select":"",options:t(o)(1,1,31),modelValue:t(n).day,"onUpdate:modelValue":s[3]||(s[3]=k=>t(n).day=k)},null,8,["options","modelValue"]),e(y,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Month","in-select":"",options:t(ve),modelValue:t(n).month,"onUpdate:modelValue":s[4]||(s[4]=k=>t(n).month=k)},null,8,["options","modelValue"]),e(y,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Year","in-select":"",options:t(o)(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse(),modelValue:t(n).year,"onUpdate:modelValue":s[5]||(s[5]=k=>t(n).year=k)},null,8,["options","modelValue"])]),e(P,{class:"mt-1",field:"dob",errors:t(i).errors,message:"The above fields are required"},null,8,["errors"]),l("div",Fe,[e(j,{class:"mt-8 mb-2",text:"Continue",onClick:u}),e(S,{class:"font-bold",text:"Back",onClick:s[6]||(s[6]=k=>f.$emit("backward"))})])],64)}}},Te={class:"mt-6"},De={class:"mt-6"},Ye={class:"mt-6"},Re={class:"mt-6"},ze={class:"flex items-center mt-4 text-sm"},Je={class:"flex items-center justify-center flex-col mt-7"},We={__name:"contact",props:{modelValue:{type:Object,required:!0},messages:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(V,{emit:a}){const _=V,{filterEmptyKeys:o,arrayIntersection:m}=M();let p=U({required:["phone","address","postcode","agree","signature"],errors:[]});const r=N({get(){return _.modelValue},set(c){a("update:modelValue",c)}});function i(){const c=_.modelValue;let u=Object.values(p.required);const f=o(c);let s=m(f,u);return c.phone!=null&&(c.phone.length!=11||c.phone.charAt(0)!="0")&&s.push("invalid_phone"),!c.agree&&!s.includes("agree")&&s.push("agree"),p.errors=[...s],!p.errors.length}function n(){i()&&a("forward")}return(c,u)=>{const f=d("step-title"),s=d("input-text"),x=d("HasError"),y=d("sign-checkbox"),h=d("NextButton"),P=d("BackButton");return b(),v(I,null,[e(f,{title:"Enter your contact details to claim your tax back"}),l("div",null,[l("div",Te,[e(s,{type:"email",label:"Email",modelValue:t(r).email,"onUpdate:modelValue":u[0]||(u[0]=w=>t(r).email=w)},null,8,["modelValue"]),e(x,{class:"mt-1",field:"email",errors:t(p).errors},null,8,["errors"]),e(x,{class:"mt-1",field:"invalid_email",errors:t(p).errors,message:"Invalid Email"},null,8,["errors"])]),l("div",De,[e(s,{type:"tel",label:"Phone Number",modelValue:t(r).phone,"onUpdate:modelValue":u[1]||(u[1]=w=>t(r).phone=w)},null,8,["modelValue"]),e(x,{class:"mt-1",field:"phone",errors:t(p).errors},null,8,["errors"]),e(x,{class:"mt-1",field:"invalid_phone",errors:t(p).errors,message:"Invalid Phone Number"},null,8,["errors"])]),l("div",Ye,[e(s,{label:"Address",modelValue:t(r).address,"onUpdate:modelValue":u[2]||(u[2]=w=>t(r).address=w)},null,8,["modelValue"]),e(x,{class:"mt-1",field:"address",errors:t(p).errors},null,8,["errors"])]),l("div",Re,[e(s,{label:"Postcode",modelValue:t(r).postcode,"onUpdate:modelValue":u[3]||(u[3]=w=>t(r).postcode=w)},null,8,["modelValue"]),e(x,{class:"mt-1",field:"postcode",errors:t(p).errors},null,8,["errors"])])]),l("div",ze,[e(y,{modelValue:t(r).agree,"onUpdate:modelValue":u[4]||(u[4]=w=>t(r).agree=w),value:!0,label:"I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes."},null,8,["modelValue"])]),e(x,{class:"mt-2",field:"agree",errors:t(p).errors},null,8,["errors"]),l("div",Je,[e(h,{text:"Continue",onClick:n}),e(P,{text:"Back",onClick:u[5]||(u[5]=w=>c.$emit("backward"))})])],64)}}},Ge={class:"mt-6 mb-1"},Ke=l("p",{class:"mb-1"},"Please draw your signature below in the green box.",-1),Le={class:""},Ze={class:"flex items-center justify-center flex-col mt-8"},Qe={__name:"start-claim",props:{modelValue:{type:Object,required:!0},loading:{type:Boolean,default:!1}},emits:["update:modelValue","forward"],setup(V,{emit:a}){const _=V,o=T(null);let m=U({errors:[]});function p(){o.value.clearSignature()}function r(){const{isEmpty:n,data:c}=o.value.saveSignature();if(n){m.errors.push("signature");return}i.value.signature=c,a("forward")}const i=N({get(){return _.modelValue},set(n){return new Proxy(_.modelValue,{set(c,u,f){return a("update:modelValue",{...c,[u]:f}),!0}})}});return(n,c)=>{const u=d("input-text"),f=d("VueSignaturePad"),s=d("HasError"),x=d("NextButton"),y=d("BackButton");return b(),v(I,null,[V.loading?(b(),q(se,{key:0})):B("",!0),e(xe),e(u,{label:"Do you have a referral code? (optional)",modelValue:t(i).referral_code,"onUpdate:modelValue":c[0]||(c[0]=h=>t(i).referral_code=h)},null,8,["modelValue"]),l("div",Ge,[Ke,l("div",Le,[e(f,{class:"h-40 w-full bg-white border border-green-500 rounded",ref_key:"signaturePad",ref:o},null,512),e(s,{class:"mt-2",field:"signature",errors:t(m).errors,message:"Signature required"},null,8,["errors"])])]),l("small",{class:"font-bold cursor-pointer",onClick:p},"Clear Signature"),l("div",Ze,[e(x,{disabled:V.loading,"no-icon":"",text:V.loading?"Please Wait ---":"Start Your Claim",onClick:r},null,8,["disabled","text"]),e(y,{text:"Back",onClick:c[1]||(c[1]=h=>n.$emit("backward"))})])],64)}}},Xe={data(){return{busy:!1,submitted:!1,form:{claim_id:null,covid:!1,uniform:!1}}},props:{claim_id:{type:String},url:{type:String}},methods:{async submit(){this.busy=!0,this.form.claim_id=this.claim_id,await E.post(this.url,this.form),this.submitted=!0,this.busy=!1}}},et={class:"text-3xl font-bold"},tt=l("p",{class:"text-lg font-medium"}," You could be entitled to further refunds from HMRC. To check if you are eligible, please answer the following two questions: ",-1),ot={class:"mt-6 mb-4"},lt={class:"flex my-2"},st={class:"mt-6 mb-4"},rt={class:"flex my-2"},nt={key:1,class:"my-8"},at=l("p",{class:"font-bold mb-2"},"What happens next?",-1),it=l("p",null," One of our agents will be in contact to discuss the next steps of the claim. If you have any questions or queries then please contact us on the below: ",-1),ut=l("p",{class:"font-bold mt-3"},[K(" Email: "),l("a",{href:"mailto:info@reclaimmyppitax.co.uk"},"info@reclaimmyppitax.co.uk")],-1);function dt(V,a,_,o,m,p){const r=d("question"),i=d("radio-box"),n=d("HasError"),c=d("NextButton");return b(),v("div",null,[l("p",et," Welcome to Reclaim My PPI Tax, Your Reference Number Is: "+H(_.claim_id),1),tt,m.submitted?(b(),v("p",nt," Thank You! Good luck with both claims and we will be in touch as soon as we have any updates. ")):(b(),v(I,{key:0},[l("div",ot,[e(r,{text:"Have you had to work from home due to Covid-19 (even for 1 day)?"}),l("div",lt,[e(i,{name:"covid",modelValue:m.form.covid,"onUpdate:modelValue":a[0]||(a[0]=u=>m.form.covid=u),value:!0,label:"Yes"},null,8,["modelValue"]),e(i,{name:"covid",modelValue:m.form.covid,"onUpdate:modelValue":a[1]||(a[1]=u=>m.form.covid=u),value:!1,label:"No"},null,8,["modelValue"])]),e(n,{field:"covid",errors:[]})]),l("div",st,[e(r,{text:"Do you wear a uniform at your current workplace?"}),l("div",rt,[e(i,{name:"uniform",modelValue:m.form.uniform,"onUpdate:modelValue":a[2]||(a[2]=u=>m.form.uniform=u),value:!0,label:"Yes"},null,8,["modelValue"]),e(i,{name:"uniform",modelValue:m.form.uniform,"onUpdate:modelValue":a[3]||(a[3]=u=>m.form.uniform=u),value:!1,label:"No"},null,8,["modelValue"])]),e(n,{field:"uniform",errors:[]})]),e(c,{disabled:m.busy,text:m.busy?"Submitting..":"Submit",onClick:p.submit,class:"my-8"},null,8,["disabled","text","onClick"])],64)),at,it,ut])}const mt=D(Xe,[["render",dt]]),ct={__name:"modal",setup(V){const a=$("emitter");let _=U({assessmentModal:!1});return Y(()=>{a.on("toggleModal",({name:o,show:m})=>{_[o]=m})}),(o,m)=>{const p=d("ModalMarkup"),r=d("vue-final-modal");return b(),q(r,{classes:"flex justify-center items-center","content-class":"relative flex flex-col w-[500px] max-h-full mx-4 border rounded bg-white",modelValue:t(_).assessmentModal,"onUpdate:modelValue":m[0]||(m[0]=i=>t(_).assessmentModal=i)},{default:F(({close:i})=>[e(p,{title:"Warning!!!",text:t(A).self_assessment,onClose:i},null,8,["text","onClose"])]),_:1},8,["modelValue"])}}},pt={class:"relative left-1/2 -translate-x-1/2 w-full md:w-[99vw] mt-6 md:mt-4 pt-14 overflow-hidden"},ft={class:"max-w-[1000px] mx-auto"},_t={class:"mx-auto"},bt={class:"flex items-center"},xt={class:"max-w-[700px] mx-auto mt-10 md:mt-20 bg-orange-50 py-5 px-3 lg:px-7 box-border relative"},yt={key:0,class:"swizard_page1"},vt={key:1,class:"swizard_page1"},gt={key:2,class:"swizard_page2"},Vt={key:3,class:"swizard_page3"},ht={key:4,class:"swizard_page4"},wt={key:5,class:"swizard_page5"};function kt(V,a,_,o,m,p){return b(),v(I,null,[e(o.Modal),l("div",pt,[l("div",ft,[l("div",_t,[l("div",bt,[(b(!0),v(I,null,O(o.state.steps,(r,i)=>(b(),q(o.ProgressStep,{"is-last":o.state.steps.length==i+1,key:i,title:r.title,number:r.number,step:i+1,current:o.state.step},null,8,["is-last","title","number","step","current"]))),128))]),l("div",xt,[o.state.step==1?(b(),v("div",yt,[e(o.Criteria,{modelValue:o.state.form[0],"onUpdate:modelValue":a[0]||(a[0]=r=>o.state.form[0]=r),onForward:o.stepForward},null,8,["modelValue"])])):B("",!0),o.state.step==2?(b(),v("div",vt,[e(o.Claim,{modelValue:o.state.form[1],"onUpdate:modelValue":a[1]||(a[1]=r=>o.state.form[1]=r),onForward:o.stepForward},null,8,["modelValue"])])):B("",!0),o.state.step==3?(b(),v("div",gt,[e(o.About,{modelValue:o.state.form[2],"onUpdate:modelValue":a[2]||(a[2]=r=>o.state.form[2]=r),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):B("",!0),o.state.step==4?(b(),v("div",Vt,[e(o.Contact,{modelValue:o.state.form[3],"onUpdate:modelValue":a[3]||(a[3]=r=>o.state.form[3]=r),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):B("",!0),o.state.step==5?(b(),v("div",ht,[e(o.StartClaim,{modelValue:o.state.form[4],"onUpdate:modelValue":a[4]||(a[4]=r=>o.state.form[4]=r),onForward:o.submit,onBackward:o.stepBack,loading:o.state.loading},null,8,["modelValue","loading"])])):B("",!0),o.state.step==6?(b(),v("div",wt,[e(o.ThankYou,{claim_id:o.state.claim_id,url:o.state.thanksUrl},null,8,["claim_id","url"])])):B("",!0)])])])])],64)}const Ct={__name:"App",setup(V,{expose:a}){a();function _(){g.step>=1&&g.step<=5&&(console.log("here"),g.step++,p())}function o(){g.step>1&&g.step<=5&&(g.step--,p())}async function m(){g.loading=!0;const i={externalID:window.location.href,...g.form[0],...g.form[1],...g.form[2],...g.form[3],...g.form[4]},n=await E.post(g.leadUrl,i,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Credentials":"true"}});g.loading=!1,g.step=6,g.claim_id=n.data.claimID;var c=window.location.href,u=c+(/\?/.test(c)?"&":"?")+"process=completed";window.history.pushState({path:u},"",u)}function p(){document.getElementById("app").scrollIntoView()}const r={stepForward:_,stepBack:o,submit:m,scrollUp:p,computed:N,onMounted:Y,ref:T,axios:E,state:g,Reusable:M,Criteria:Ve,Claim:je,About:He,Contact:We,StartClaim:Qe,ThankYou:mt,ProgressStep:re,Modal:ct};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},It=D(Ct,[["render",kt]]),Bt=be(),W=L(It);W.provide("emitter",Bt);W.use(Z).component("IconInfo",Q).component("IconNext",X).component("IconPrevious",ee).component("IconSelect",te).component("HasError",ne).component("NextButton",ae).component("BackButton",ie).component("VueFinalModal",oe).component("ModalMarkup",ue).component("RadioBox",de).component("Question",me).component("InputText",ce).component("InputSelect",pe).component("SignCheckbox",fe).component("StepTitle",_e).mount("#app");
