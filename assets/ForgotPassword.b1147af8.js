import{Q as a,a as u}from"./QCardActions.6dcb59b5.js";import{Q as m}from"./QImg.f1cb3aee.js";import{o as c,c as p,w as t,C as i,a as e,Q as f,D as r,V as d,a3 as g}from"./index.81343475.js";import{Q as h}from"./QInput.5ba249b9.js";import{Q as _}from"./QForm.a3b6ac93.js";import{Q as b}from"./QCard.f9a97dd6.js";import{Q as w}from"./QDialog.6b315332.js";import{Q}from"./QPage.110db235.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./private.use-form.2d02597f.js";import"./portal.a20ee43e.js";import"./scroll.2f6223cc.js";const V={data(){return{email:"",dialogVisible:!1}},methods:{onSubmit(){this.dialogVisible=!0,setTimeout(()=>{this.closeDialog(),this.$router.push("/auth/login")},1e4)},closeDialog(){this.dialogVisible=!1,this.$router.push("/login")}}},k={class:"q-pa-lg",style:{"max-width":"400px",width:"100%"}},z=i("div",{class:"text-caption"}," Bitte gebe deine E-Mail Adresse ein, damit das Passwort zur\xFCckgesetzt wird. ",-1),y=i("div",{class:"text-h6"},"E-Mail versandt",-1),v=i("br",null,null,-1),S=i("br",null,null,-1);function C(D,s,B,E,o,n){return c(),p(Q,{class:"flex flex-center"},{default:t(()=>[i("div",k,[e(a),e(a,{class:"text-center full-width"},{default:t(()=>[e(m,{src:"/icons/App Logo/logo_badge_blue.svg","spinner-color":"white",style:{"max-width":"80px","margin-bottom":"50px"},class:"full-width"}),e(_,{onSubmit:n.onSubmit,class:"q-gutter-md full-width"},{default:t(()=>[z,e(h,{filled:"",label:"E-Mail",modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.email=l),type:"email",rules:[l=>!!l||"Bitte gebe eine E-Mail ein!",l=>/.+@.+\..+/.test(l)||"Ung\xFCltiges E-Mail-Format!"],clearable:"",class:"full-width"},{prepend:t(()=>[e(f,{name:"email"})]),_:1},8,["modelValue","rules"]),e(r,{push:"",rounded:"",label:"Passwort zur\xFCcksetzen",color:"primary",type:"submit",class:"full-width"})]),_:1},8,["onSubmit"])]),_:1}),e(u,{align:"center"},{default:t(()=>[e(r,{flat:"",style:{"font-weight":"900"},label:"Zur\xFCck zum Login",color:"primary",to:"/auth/login"})]),_:1})]),e(w,{modelValue:o.dialogVisible,"onUpdate:modelValue":s[1]||(s[1]=l=>o.dialogVisible=l)},{default:t(()=>[e(b,null,{default:t(()=>[e(a,null,{default:t(()=>[y,i("div",null,[d(" Sollte die E-mail "+g(o.email)+" mit einem Nutzerkonto verkn\xFCpft sein, dann erh\xE4ltst du einen Link zum zur\xFCcksetzen deines Passworts. ",1),v,S,d(" Du wirst in 10 Sekunden zur\xFCck zum Login weitergeleitet. ")])]),_:1}),e(u,{align:"center"},{default:t(()=>[e(r,{label:"Zur\xFCck zum Login",color:"primary",onClick:n.closeDialog},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var G=x(V,[["render",C]]);export{G as default};
