import{Q as u,a as i}from"./QInput.423eebcf.js";import{o as d,c as m,w as o,C as p,a as e,Q as l,D as a}from"./index.8ba13c56.js";import{Q as c}from"./QForm.610668ca.js";import{Q as f,a as w}from"./QCardActions.f7f7ad28.js";import{Q as _}from"./QPage.c8a02d65.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.e65c3dea.js";const b={name:"LoginUser",data(){return{username:"",password:"",isPwd:!0}},methods:{onSubmit(){!this.username||!this.password||(localStorage.setItem("token","dummy-token"),this.$router.push("/"))}}},h={class:"q-pa-lg",style:{"max-width":"400px",width:"100%",margin:"auto"}};function y(x,r,Q,v,t,n){return d(),m(_,{class:"flex flex-center",style:{width:"100vw"}},{default:o(()=>[p("div",h,[e(f,{class:"text-center full-width"},{default:o(()=>[e(u,{src:"/icons/App Logo/logo_badge_blue.svg","spinner-color":"white",style:{"max-width":"80px","margin-bottom":"50px"},class:"full-width"}),e(c,{onSubmit:n.onSubmit,class:"q-gutter-md full-width"},{default:o(()=>[e(i,{filled:"",label:"Benutzername",modelValue:t.username,"onUpdate:modelValue":r[0]||(r[0]=s=>t.username=s),type:"text",rules:[s=>!!s||"Bitte gebe einen Benutzernamen ein!"],clearable:"",class:"full-width"},{prepend:o(()=>[e(l,{name:"person"})]),_:1},8,["modelValue","rules"]),e(i,{filled:"",label:"Passwort",modelValue:t.password,"onUpdate:modelValue":r[2]||(r[2]=s=>t.password=s),type:t.isPwd?"password":"text",rules:[s=>!!s||"Bitte gebe ein Passwort ein!"],class:"full-width"},{prepend:o(()=>[e(l,{name:"key"})]),append:o(()=>[e(l,{name:t.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:r[1]||(r[1]=s=>t.isPwd=!t.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),e(a,{push:"",rounded:"",label:"Login",color:"primary",type:"submit",class:"full-width"})]),_:1},8,["onSubmit"])]),_:1}),e(w,{align:"center"},{default:o(()=>[e(a,{flat:"",style:{"font-weight":"900"},label:"Noch kein Dito Konto?",color:"primary",to:"/auth/register"}),e(a,{flat:"",label:"Passwort vergessen",color:"primary",to:"/auth/forgotpassword"})]),_:1})])]),_:1})}var L=g(b,[["render",y],["__scopeId","data-v-c82068b0"]]);export{L as default};
