import{b as o,d as r,h as s,f as n,S as l,U as i}from"./index.81343475.js";var d=o({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:t}){const e=r(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},n(t.default))}}),v=o({name:"QCardActions",props:{...l,vertical:Boolean},setup(a,{slots:t}){const e=i(a),c=r(()=>`q-card__actions ${e.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>s("div",{class:c.value},n(t.default))}});export{d as Q,v as a};
