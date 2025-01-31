import{k as z,j as F,b as T,n as D}from"./use-key-composition.e65c3dea.js";import{k as L,af as R,d as l,h as d,t as E,f as K,ae as N,j as M,L as p,ag as n}from"./index.8ba13c56.js";import{u as G,o as H}from"./QSeparator.8ae66945.js";const W={...F,...N,...T,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},X=["update:modelValue"];function Y(a,h){const{props:e,slots:f,emit:V,proxy:v}=M(),{$q:x}=v,C=z(e,x),g=L(null),{refocusTargetEl:m,refocusTarget:I}=G(e,g),S=R(e,H),u=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),i=l(()=>{const t=n(e.val);return u.value===!0?e.modelValue.findIndex(o=>n(o)===t):-1}),r=l(()=>u.value===!0?i.value!==-1:n(e.modelValue)===n(e.trueValue)),s=l(()=>u.value===!0?i.value===-1:n(e.modelValue)===n(e.falseValue)),b=l(()=>r.value===!1&&s.value===!1),q=l(()=>e.disable===!0?-1:e.tabindex||0),$=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(C.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const t=r.value===!0?"truthy":s.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?r.value===!0:s.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),_=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":r.value,"^checked":r.value===!0?"checked":void 0,name:e.name,value:u.value===!0?e.val:e.trueValue}),t}),j=D(_),O=l(()=>{const t={tabindex:q.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":b.value===!0?"mixed":r.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function c(t){t!==void 0&&(p(t),I(t)),e.disable!==!0&&V("update:modelValue",w(),t)}function w(){if(u.value===!0){if(r.value===!0){const t=e.modelValue.slice();return t.splice(i.value,1),t}return e.modelValue.concat([e.val])}if(r.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(s.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&p(t)}function B(t){(t.keyCode===13||t.keyCode===32)&&c(t)}const P=h(r,b);return Object.assign(v,{toggle:c}),()=>{const t=P();e.disable!==!0&&j(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[d("div",{class:y.value,style:S.value,"aria-hidden":"true"},t)];m.value!==null&&o.push(m.value);const k=e.label!==void 0?E(f.default,[e.label]):K(f.default);return k!==void 0&&o.push(d("div",{class:`q-${a}__label q-anchor--skip`},k)),d("div",{ref:g,class:$.value,...O.value,onClick:c,onKeydown:A,onKeyup:B},o)}}export{X as a,Y as b,W as u};
