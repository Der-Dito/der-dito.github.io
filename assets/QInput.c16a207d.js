import{d as x,b as ne,k as B,m as ue,u as le,h as _,q as D,T as oe,E as X,f as se,F as ce,j as ie,z as U,G as de,v as fe,H as ge,I as J}from"./index.d1e16b2e.js";import{u as p,a as me,b as ve,c as he,d as ke,e as ye,f as Se,g as we,h as ee,i as Me}from"./use-key-composition.bf5e8532.js";const xe={ratio:[String,Number]};function be(e,S){return x(()=>{const E=Number(e.ratio||(S!==void 0?S.value:void 0));return isNaN(E)!==!0&&E>0?{paddingBottom:`${100/E}%`}:null})}const Ce=1.7778;var _e=ne({name:"QImg",props:{...xe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ce},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:S,emit:E}){const b=B(e.initialRatio),s=be(e,b),f=ie(),{registerTimeout:I,removeTimeout:R}=p(),{registerTimeout:z,removeTimeout:v}=p(),w=x(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),c=x(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),V=[B(null),B(w.value)],k=B(0),A=B(!1),N=B(!1),P=x(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),Y=x(()=>({width:e.width,height:e.height})),C=x(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),W=x(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function Z(){if(v(),e.loadingShowDelay===0){A.value=!0;return}z(()=>{A.value=!0},e.loadingShowDelay)}function O(){v(),A.value=!1}function j({target:t}){X(f)===!1&&(R(),b.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,T(t,1))}function T(t,r){r===1e3||X(f)===!0||(t.complete===!0?H(t):I(()=>{T(t,r+1)},50))}function H(t){X(f)!==!0&&(k.value=k.value^1,V[k.value].value=null,O(),t.getAttribute("__qerror")!=="true"&&(N.value=!1),E("load",t.currentSrc||t.src))}function l(t){R(),O(),N.value=!0,V[k.value].value=c.value,V[k.value^1].value=w.value,E("error",t)}function n(t){const r=V[t].value,u={key:"img_"+t,class:C.value,style:W.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...r};return k.value===t?Object.assign(u,{class:u.class+"current",onLoad:j,onError:l}):u.class+="loaded",_("div",{class:"q-img__container absolute-full",key:"img"+t},_("img",u))}function i(){return A.value===!1?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},se(S[N.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},S.loading!==void 0?S.loading():e.noSpinner===!0?void 0:[_(ce,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){D(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,r=>{R(),N.value=!1,r===null?(O(),V[k.value^1].value=w.value):Z(),V[k.value].value=r},{immediate:!0})};ue.value===!0?le(t):t()}return()=>{const t=[];return s.value!==null&&t.push(_("div",{key:"filler",style:s.value})),V[0].value!==null&&t.push(n(0)),V[1].value!==null&&t.push(n(1)),t.push(_(oe,{name:"q-transition--fade"},i)),_("div",{key:"main",class:P.value,style:Y.value,role:"img","aria-label":e.alt},t)}}});const te={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},re=Object.keys(G);re.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const Fe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+re.join("")+"])|(.)","g"),ae=/[.*+?^${}()|[\]\\]/g,y=String.fromCharCode(1),Re={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Te(e,S,E,b){let s,f,I,R,z,v;const w=B(null),c=B(k());function V(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,l=>{if(l!==void 0)P(c.value,!0);else{const n=T(c.value);N(),e.modelValue!==n&&S("update:modelValue",n)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&P(c.value,!0)}),D(()=>e.unmaskedValue,()=>{w.value===!0&&P(c.value)});function k(){if(N(),w.value===!0){const l=O(T(e.modelValue));return e.fillMask!==!1?H(l):l}return e.modelValue}function A(l){if(l<s.length)return s.slice(-l);let n="",i=s;const t=i.indexOf(y);if(t!==-1){for(let r=l-i.length;r>0;r--)n+=y;i=i.slice(0,t)+n+i.slice(t)}return i}function N(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&V(),w.value===!1){R=void 0,s="",f="";return}const l=te[e.mask]===void 0?e.mask:te[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=n.replace(ae,"\\$&"),t=[],r=[],u=[];let h=e.reverseFillMask===!0,o="",d="";l.replace(Fe,(M,a,m,L,q)=>{if(L!==void 0){const F=G[L];u.push(F),d=F.negate,h===!0&&(r.push("(?:"+d+"+)?("+F.pattern+"+)?(?:"+d+"+)?("+F.pattern+"+)?"),h=!1),r.push("(?:"+d+"+)?("+F.pattern+")?")}else if(m!==void 0)o="\\"+(m==="\\"?"":m),u.push(m),t.push("([^"+o+"]+)?"+o+"?");else{const F=a!==void 0?a:q;o=F==="\\"?"\\\\\\\\":F.replace(ae,"\\\\$&"),u.push(F),t.push("([^"+o+"]+)?"+o+"?")}});const $=new RegExp("^"+t.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),K=r.length-1,g=r.map((M,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+M):a===K?new RegExp("^"+M+"("+(d===""?".":d)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+M));I=u,R=M=>{const a=$.exec(e.reverseFillMask===!0?M:M.slice(0,u.length+1));a!==null&&(M=a.slice(1).join(""));const m=[],L=g.length;for(let q=0,F=M;q<L;q++){const Q=g[q].exec(F);if(Q===null)break;F=F.slice(Q.shift().length),m.push(...Q)}return m.length!==0?m.join(""):M},s=u.map(M=>typeof M=="string"?M:y).join(""),f=s.split(y).join(n)}function P(l,n,i){const t=b.value,r=t.selectionEnd,u=t.value.length-r,h=T(l);n===!0&&N();const o=O(h),d=e.fillMask!==!1?H(o):o,$=c.value!==d;t.value!==d&&(t.value=d),$===!0&&(c.value=d),document.activeElement===t&&U(()=>{if(d===f){const g=e.reverseFillMask===!0?f.length:0;t.setSelectionRange(g,g,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const g=t.selectionEnd;let M=r-1;for(let a=z;a<=M&&a<g;a++)s[a]!==y&&M++;C.right(t,M);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const g=e.reverseFillMask===!0?r===0?d.length>o.length?1:0:Math.max(0,d.length-(d===f?0:Math.min(o.length,u)+1))+1:r;t.setSelectionRange(g,g,"forward");return}if(e.reverseFillMask===!0)if($===!0){const g=Math.max(0,d.length-(d===f?0:Math.min(o.length,u+1)));g===1&&r===1?t.setSelectionRange(g,g,"forward"):C.rightReverse(t,g)}else{const g=d.length-u;t.setSelectionRange(g,g,"backward")}else if($===!0){const g=Math.max(0,s.indexOf(y),Math.min(o.length,r)-1);C.right(t,g)}else{const g=r-1;C.right(t,g)}});const K=e.unmaskedValue===!0?T(d):d;String(e.modelValue)!==K&&(e.modelValue!==null||K!=="")&&E(K,!0)}function Y(l,n,i){const t=O(T(l.value));n=Math.max(0,s.indexOf(y),Math.min(t.length,n)),z=n,l.setSelectionRange(n,i,"forward")}const C={left(l,n){const i=s.slice(n-1).indexOf(y)===-1;let t=Math.max(0,n-1);for(;t>=0;t--)if(s[t]===y){n=t,i===!0&&n++;break}if(t<0&&s[n]!==void 0&&s[n]!==y)return C.right(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},right(l,n){const i=l.value.length;let t=Math.min(i,n+1);for(;t<=i;t++)if(s[t]===y){n=t;break}else s[t-1]===y&&(n=t);if(t>i&&s[n-1]!==void 0&&s[n-1]!==y)return C.left(l,i);l.setSelectionRange(n,n,"forward")},leftReverse(l,n){const i=A(l.value.length);let t=Math.max(0,n-1);for(;t>=0;t--)if(i[t-1]===y){n=t;break}else if(i[t]===y&&(n=t,t===0))break;if(t<0&&i[n]!==void 0&&i[n]!==y)return C.rightReverse(l,0);n>=0&&l.setSelectionRange(n,n,"backward")},rightReverse(l,n){const i=l.value.length,t=A(i),r=t.slice(0,n+1).indexOf(y)===-1;let u=Math.min(i,n+1);for(;u<=i;u++)if(t[u-1]===y){n=u,n>0&&r===!0&&n--;break}if(u>i&&t[n-1]!==void 0&&t[n-1]!==y)return C.leftReverse(l,i);l.setSelectionRange(n,n,"forward")}};function W(l){S("click",l),v=void 0}function Z(l){if(S("keydown",l),de(l)===!0||l.altKey===!0)return;const n=b.value,i=n.selectionStart,t=n.selectionEnd;if(l.shiftKey||(v=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&v===void 0&&(v=n.selectionDirection==="forward"?i:t);const r=C[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),r(n,v===i?t:i),l.shiftKey){const u=n.selectionStart;n.setSelectionRange(Math.min(v,u),Math.max(v,u),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===t?(C.left(n,i),n.setSelectionRange(n.selectionStart,t,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===t&&(C.rightReverse(n,t),n.setSelectionRange(i,n.selectionEnd,"forward"))}function O(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return j(l);const n=I;let i=0,t="";for(let r=0;r<n.length;r++){const u=l[i],h=n[r];if(typeof h=="string")t+=h,u===h&&i++;else if(u!==void 0&&h.regex.test(u))t+=h.transform!==void 0?h.transform(u):u,i++;else return t}return t}function j(l){const n=I,i=s.indexOf(y);let t=l.length-1,r="";for(let u=n.length-1;u>=0&&t!==-1;u--){const h=n[u];let o=l[t];if(typeof h=="string")r=h+r,o===h&&t--;else if(o!==void 0&&h.regex.test(o))do r=(h.transform!==void 0?h.transform(o):o)+r,t--,o=l[t];while(i===u&&o!==void 0&&h.regex.test(o));else return r}return r}function T(l){return typeof l!="string"||R===void 0?typeof l=="number"?R(""+l):l:R(l)}function H(l){return f.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?f.slice(0,-l.length)+l:l+f.slice(l.length)}return{innerValue:c,hasMask:w,moveCursorForPaste:Y,updateMaskValue:P,onMaskedKeydown:Z,onMaskedClick:W}}function Ee(e,S){function E(){const b=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(b)===b&&("length"in b?Array.from(b):[b]).forEach(f=>{s.items.add(f)}),{files:s.files}}catch{return{files:void 0}}}return S===!0?x(()=>{if(e.type==="file")return E()}):x(E)}var Ie=ne({name:"QInput",inheritAttrs:!1,props:{...me,...Re,...ve,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...he,"paste","change","keydown","click","animationend"],setup(e,{emit:S,attrs:E}){const{proxy:b}=ie(),{$q:s}=b,f={};let I=NaN,R,z,v=null,w;const c=B(null),V=ke(e),{innerValue:k,hasMask:A,moveCursorForPaste:N,updateMaskValue:P,onMaskedKeydown:Y,onMaskedClick:C}=Te(e,S,o,c),W=Ee(e,!0),Z=x(()=>ee(k.value)),O=Me(u),j=ye({changeEvent:!0}),T=x(()=>e.type==="textarea"||e.autogrow===!0),H=x(()=>T.value===!0||["text","search","url","tel","password"].includes(e.type)),l=x(()=>{const a={...j.splitAttrs.listeners.value,onInput:u,onPaste:r,onChange:$,onBlur:K,onFocus:J};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=O,A.value===!0&&(a.onKeydown=Y,a.onClick=C),e.autogrow===!0&&(a.onAnimationend=h),a}),n=x(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:V.value,...j.splitAttrs.attributes.value,id:j.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return T.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});D(()=>e.type,()=>{c.value&&(c.value.value=e.modelValue)}),D(()=>e.modelValue,a=>{if(A.value===!0){if(z===!0&&(z=!1,String(a)===I))return;P(a)}else k.value!==a&&(k.value=a,e.type==="number"&&f.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete f.value));e.autogrow===!0&&U(d)}),D(()=>e.autogrow,a=>{a===!0?U(d):c.value!==null&&E.rows>0&&(c.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&U(d)});function i(){we(()=>{const a=document.activeElement;c.value!==null&&c.value!==a&&(a===null||a.id!==j.targetUid.value)&&c.value.focus({preventScroll:!0})})}function t(){c.value!==null&&c.value.select()}function r(a){if(A.value===!0&&e.reverseFillMask!==!0){const m=a.target;N(m,m.selectionStart,m.selectionEnd)}S("paste",a)}function u(a){if(!a||!a.target)return;if(e.type==="file"){S("update:modelValue",a.target.files);return}const m=a.target.value;if(a.target.qComposing===!0){f.value=m;return}if(A.value===!0)P(m,!1,a.inputType);else if(o(m),H.value===!0&&a.target===document.activeElement){const{selectionStart:L,selectionEnd:q}=a.target;L!==void 0&&q!==void 0&&U(()=>{a.target===document.activeElement&&m.indexOf(a.target.value)===0&&a.target.setSelectionRange(L,q)})}e.autogrow===!0&&d()}function h(a){S("animationend",a),d()}function o(a,m){w=()=>{v=null,e.type!=="number"&&f.hasOwnProperty("value")===!0&&delete f.value,e.modelValue!==a&&I!==a&&(I=a,m===!0&&(z=!0),S("update:modelValue",a),U(()=>{I===a&&(I=NaN)})),w=void 0},e.type==="number"&&(R=!0,f.value=a),e.debounce!==void 0?(v!==null&&clearTimeout(v),f.value=a,v=setTimeout(w,e.debounce)):w()}function d(){requestAnimationFrame(()=>{const a=c.value;if(a!==null){const m=a.parentNode.style,{scrollTop:L}=a,{overflowY:q,maxHeight:F}=s.platform.is.firefox===!0?{}:window.getComputedStyle(a),Q=q!==void 0&&q!=="scroll";Q===!0&&(a.style.overflowY="hidden"),m.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",Q===!0&&(a.style.overflowY=parseInt(F,10)<a.scrollHeight?"auto":"hidden"),m.marginBottom="",a.scrollTop=L}})}function $(a){O(a),v!==null&&(clearTimeout(v),v=null),w!==void 0&&w(),S("change",a.target.value)}function K(a){a!==void 0&&J(a),v!==null&&(clearTimeout(v),v=null),w!==void 0&&w(),R=!1,z=!1,delete f.value,e.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=k.value!==void 0?k.value:"")})}function g(){return f.hasOwnProperty("value")===!0?f.value:k.value!==void 0?k.value:""}fe(()=>{K()}),le(()=>{e.autogrow===!0&&d()}),Object.assign(j,{innerValue:k,fieldClass:x(()=>`q-${T.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:x(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:c,emitValue:o,hasValue:Z,floatingLabel:x(()=>Z.value===!0&&(e.type!=="number"||isNaN(k.value)===!1)||ee(e.displayValue)),getControl:()=>_(T.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...l.value,...e.type!=="file"?{value:g()}:W.value}),getShadowControl:()=>_("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(T.value===!0?"":" text-no-wrap")},[_("span",{class:"invisible"},g()),_("span",e.shadowText)])});const M=Se(j);return Object.assign(b,{focus:i,select:t,getNativeElement:()=>c.value}),ge(b,"nativeEl",()=>c.value),M}});export{_e as Q,Ie as a,Ee as u};
