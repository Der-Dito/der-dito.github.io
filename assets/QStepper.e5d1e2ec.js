import{h as l,b as w,at as J,au as Z,k as $,d as v,Q as N,t as ee,f as P,j as I,L as T,av as U,v as ve,T as te,ab as fe,ac as ne,aw as pe,ae as me,P as B,x as he,af as ge,ag as L,ah as j,ai as H,aj as V,q as be,z as ye,ax as qe,ay as ae,i as Se,e as z,az as ie,ak as re,aA as _e,p as Ce}from"./index.186e0d1a.js";import{u as D,b as xe,a as Q,d as ke}from"./private.use-form.f0049ac1.js";import{o as Pe,u as we}from"./ClosePopup.ee1e5a64.js";const Te=l("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[l("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),l("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var Fe=w({name:"QRadio",props:{...D,...J,...xe,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:o}){const{proxy:d}=I(),r=Q(e,d.$q),n=Z(e,Pe),i=$(null),{refocusTargetEl:s,refocusTarget:g}=we(e,i),m=v(()=>U(e.modelValue)===U(e.val)),p=v(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(r.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),b=v(()=>{const y=e.color!==void 0&&(e.keepColor===!0||m.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${m.value===!0?"truthy":"falsy"}${y}`}),h=v(()=>(m.value===!0?e.checkedIcon:e.uncheckedIcon)||null),S=v(()=>e.disable===!0?-1:e.tabindex||0),C=v(()=>{const y={type:"radio"};return e.name!==void 0&&Object.assign(y,{".checked":m.value===!0,"^checked":m.value===!0?"checked":void 0,name:e.name,value:e.val}),y}),u=ke(C);function a(y){y!==void 0&&(T(y),g(y)),e.disable!==!0&&m.value!==!0&&o("update:modelValue",e.val,y)}function c(y){(y.keyCode===13||y.keyCode===32)&&T(y)}function _(y){(y.keyCode===13||y.keyCode===32)&&a(y)}return Object.assign(d,{set:a}),()=>{const y=h.value!==null?[l("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[l(N,{class:"q-radio__icon",name:h.value})])]:[Te];e.disable!==!0&&u(y,"unshift"," q-radio__native q-ma-none q-pa-none");const k=[l("div",{class:b.value,style:n.value,"aria-hidden":"true"},y)];s.value!==null&&k.push(s.value);const R=e.label!==void 0?ee(t.default,[e.label]):P(t.default);return R!==void 0&&k.push(l("div",{class:"q-radio__label q-anchor--skip"},R)),l("div",{ref:i,class:p.value,tabindex:S.value,role:"radio","aria-label":e.label,"aria-checked":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:a,onKeydown:c,onKeyup:_},k)}}}),Ie=w({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:o}){let d=!1,r,n,i=null,s=null,g,m;function p(){r&&r(),r=null,d=!1,i!==null&&(clearTimeout(i),i=null),s!==null&&(clearTimeout(s),s=null),n!==void 0&&n.removeEventListener("transitionend",g),g=null}function b(u,a,c){a!==void 0&&(u.style.height=`${a}px`),u.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,r=c}function h(u,a){u.style.overflowY=null,u.style.height=null,u.style.transition=null,p(),a!==m&&o(a)}function S(u,a){let c=0;n=u,d===!0?(p(),c=u.offsetHeight===u.scrollHeight?0:void 0):(m="hide",u.style.overflowY="hidden"),b(u,c,a),i=setTimeout(()=>{i=null,u.style.height=`${u.scrollHeight}px`,g=_=>{s=null,(Object(_)!==_||_.target===u)&&h(u,"show")},u.addEventListener("transitionend",g),s=setTimeout(g,e.duration*1.1)},100)}function C(u,a){let c;n=u,d===!0?p():(m="show",u.style.overflowY="hidden",c=u.scrollHeight),b(u,c,a),i=setTimeout(()=>{i=null,u.style.height=0,g=_=>{s=null,(Object(_)!==_||_.target===u)&&h(u,"hide")},u.addEventListener("transitionend",g),s=setTimeout(g,e.duration*1.1)},100)}return ve(()=>{d===!0&&p()}),()=>l(te,{css:!1,appear:e.appear,onEnter:S,onLeave:C},t.default)}}),oe=w({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:t}){const{proxy:{$q:o}}=I(),d=$(null),r=v(()=>e.stepper.modelValue===e.step.name),n=v(()=>{const a=e.step.disable;return a===!0||a===""}),i=v(()=>{const a=e.step.error;return a===!0||a===""}),s=v(()=>{const a=e.step.done;return n.value===!1&&(a===!0||a==="")}),g=v(()=>{const a=e.step.headerNav,c=a===!0||a===""||a===void 0;return n.value===!1&&e.stepper.headerNav&&c}),m=v(()=>e.step.prefix&&(r.value===!1||e.stepper.activeIcon==="none")&&(i.value===!1||e.stepper.errorIcon==="none")&&(s.value===!1||e.stepper.doneIcon==="none")),p=v(()=>{const a=e.step.icon||e.stepper.inactiveIcon;if(r.value===!0){const c=e.step.activeIcon||e.stepper.activeIcon;return c==="none"?a:c||o.iconSet.stepper.active}if(i.value===!0){const c=e.step.errorIcon||e.stepper.errorIcon;return c==="none"?a:c||o.iconSet.stepper.error}if(n.value===!1&&s.value===!0){const c=e.step.doneIcon||e.stepper.doneIcon;return c==="none"?a:c||o.iconSet.stepper.done}return a}),b=v(()=>{const a=i.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(r.value===!0){const c=e.step.activeColor||e.stepper.activeColor||e.step.color;return c!==void 0?c:a}return a!==void 0?a:n.value===!1&&s.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),h=v(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(b.value!==void 0?` text-${b.value}`:"")+(i.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(m.value===!0?"prefix":"icon"):"")+(r.value===!0?" q-stepper__tab--active":"")+(s.value===!0?" q-stepper__tab--done":"")+(g.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(n.value===!0?" q-stepper__tab--disabled":"")),S=v(()=>e.stepper.headerNav!==!0?!1:g.value);function C(){d.value!==null&&d.value.focus(),r.value===!1&&e.goToPanel(e.step.name)}function u(a){a.keyCode===13&&r.value===!1&&e.goToPanel(e.step.name)}return()=>{const a={class:h.value};g.value===!0&&(a.onClick=C,a.onKeyup=u,Object.assign(a,n.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:t.tabindex||0}));const c=[l("div",{class:"q-focus-helper",tabindex:-1,ref:d}),l("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[l("span",{class:"row flex-center"},[m.value===!0?e.step.prefix:l(N,{name:p.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const _=[l("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&_.push(l("div",{class:"q-stepper__caption"},e.step.caption)),c.push(l("div",{class:"q-stepper__label q-stepper__line relative-position"},_))}return fe(l("div",a,c),[[ne,S.value]])}}});const O={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ae=Object.keys(O);O.all=!0;function W(e){const t={};for(const o of Ae)e[o]===!0&&(t[o]=!0);return Object.keys(t).length===0?O:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Be=["INPUT","TEXTAREA"];function Y(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Be.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Ne(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),pe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function $e(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,d)=>{const r=parseFloat(o);r&&(t[d]=r)}),t}var Re=me({name:"touch-swipe",beforeMount(e,{value:t,arg:o,modifiers:d}){if(d.mouse!==!0&&B.has.touch!==!0)return;const r=d.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:$e(o),direction:W(d),noop:he,mouseStart(i){Y(i,n)&&ge(i)&&(L(n,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(Y(i,n)){const s=i.target;L(n,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,s){B.is.firefox===!0&&j(e,!0);const g=H(i);n.event={x:g.left,y:g.top,time:Date.now(),mouse:s===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){T(i);return}const s=Date.now()-n.event.time;if(s===0)return;const g=H(i),m=g.left-n.event.x,p=Math.abs(m),b=g.top-n.event.y,h=Math.abs(b);if(n.event.mouse!==!0){if(p<n.sensitivity[1]&&h<n.sensitivity[1]){n.end(i);return}}else if(window.getSelection().toString()!==""){n.end(i);return}else if(p<n.sensitivity[2]&&h<n.sensitivity[2])return;const S=p/s,C=h/s;n.direction.vertical===!0&&p<h&&p<100&&C>n.sensitivity[0]&&(n.event.dir=b<0?"up":"down"),n.direction.horizontal===!0&&p>h&&h<100&&S>n.sensitivity[0]&&(n.event.dir=m<0?"left":"right"),n.direction.up===!0&&p<h&&b<0&&p<100&&C>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&p<h&&b>0&&p<100&&C>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&p>h&&m<0&&h<100&&S>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&p>h&&m>0&&h<100&&S>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(T(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ne(),n.styleCleanup=u=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const a=()=>{document.body.classList.remove("no-pointer-events--children")};u===!0?setTimeout(a,50):a()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:s,distance:{x:p,y:h}})):n.end(i)},end(i){n.event!==void 0&&(V(n,"temp"),B.is.firefox===!0&&j(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&T(i),n.event=void 0)}};if(e.__qtouchswipe=n,d.mouse===!0){const i=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";L(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}B.has.touch===!0&&L(n,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchswipe;o!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&o.end(),o.handler=t.value),o.direction=W(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(V(t,"main"),V(t,"temp"),B.is.firefox===!0&&j(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function le(){let e=Object.create(null);return{getCache:(t,o)=>e[t]===void 0?e[t]=typeof o=="function"?o():o:e[t],setCache(t,o){e[t]=o},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Ee={name:{required:!0},disable:Boolean},X={setup(e,{slots:t}){return()=>l("div",{class:"q-panel scroll",role:"tabpanel"},P(t.default))}},Le={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},je=["update:modelValue","beforeTransition","transition"];function Ve(){const{props:e,emit:t,proxy:o}=I(),{getCache:d}=le();let r,n;const i=$(null),s=$(null);function g(f){const q=e.vertical===!0?"up":"left";A((o.$q.lang.rtl===!0?-1:1)*(f.direction===q?1:-1))}const m=v(()=>[[Re,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),p=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),S=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),u=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);be(()=>e.modelValue,(f,q)=>{const x=y(f)===!0?k(f):-1;n!==!0&&K(x===-1?0:x<k(q)?-1:1),i.value!==x&&(i.value=x,t("beforeTransition",f,q),ye(()=>{t("transition",f,q)}))});function a(){A(1)}function c(){A(-1)}function _(f){t("update:modelValue",f)}function y(f){return f!=null&&f!==""}function k(f){return r.findIndex(q=>q.props.name===f&&q.props.disable!==""&&q.props.disable!==!0)}function R(){return r.filter(f=>f.props.disable!==""&&f.props.disable!==!0)}function K(f){const q=f!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(f===-1?p.value:b.value):null;s.value!==q&&(s.value=q)}function A(f,q=i.value){let x=q+f;for(;x!==-1&&x<r.length;){const E=r[x];if(E!==void 0&&E.props.disable!==""&&E.props.disable!==!0){K(f),n=!0,t("update:modelValue",E.props.name),setTimeout(()=>{n=!1});return}x+=f}e.infinite===!0&&r.length!==0&&q!==-1&&q!==r.length&&A(f,f===-1?r.length:-1)}function M(){const f=k(e.modelValue);return i.value!==f&&(i.value=f),!0}function F(){const f=y(e.modelValue)===!0&&M()&&r[i.value];return e.keepAlive===!0?[l(ae,C.value,[l(u.value===!0?d(S.value,()=>({...X,name:S.value})):X,{key:S.value,style:h.value},()=>f)])]:[l("div",{class:"q-panel scroll",style:h.value,key:S.value,role:"tabpanel"},[f])]}function se(){if(r.length!==0)return e.animated===!0?[l(te,{name:s.value},F)]:F()}function ce(f){return r=qe(P(f.default,[])).filter(q=>q.props!==null&&q.props.slot===void 0&&y(q.props.name)===!0),r.length}function de(){return r}return Object.assign(o,{next:a,previous:c,goTo:_}),{panelIndex:i,panelDirectives:m,updatePanelsList:ce,updatePanelIndex:M,getPanelContent:se,getEnabledPanels:R,getPanels:de,isValidPanelName:y,keepAliveProps:C,needsUniqueKeepAliveWrapper:u,goToPanelByOffset:A,goToPanel:_,nextPanel:a,previousPanel:c}}function ue(e){return l("div",{class:"q-stepper__step-content"},[l("div",{class:"q-stepper__step-inner"},P(e.default))])}const G={setup(e,{slots:t}){return()=>ue(t)}};var Ue=w({name:"QStep",props:{...Ee,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:t,emit:o}){const{proxy:{$q:d}}=I(),r=Se(ie,z);if(r===z)return console.error("QStep needs to be a child of QStepper"),z;const{getCache:n}=le(),i=$(null),s=v(()=>r.value.modelValue===e.name),g=v(()=>d.platform.is.ios!==!0&&d.platform.is.chrome===!0||s.value!==!0||r.value.vertical!==!0?{}:{onScroll(b){const{target:h}=b;h.scrollTop>0&&(h.scrollTop=0),e.onScroll!==void 0&&o("scroll",b)}}),m=v(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function p(){const b=r.value.vertical;return b===!0&&r.value.keepAlive===!0?l(ae,r.value.keepAliveProps.value,s.value===!0?[l(r.value.needsUniqueKeepAliveWrapper.value===!0?n(m.value,()=>({...G,name:m.value})):G,{key:m.value},t.default)]:void 0):b!==!0||s.value===!0?ue(t):void 0}return()=>l("div",{ref:i,class:"q-stepper__step",role:"tabpanel",...g.value},r.value.vertical===!0?[l(oe,{stepper:r.value,step:e,goToPanel:r.value.goToPanel}),r.value.animated===!0?l(Ie,p):p()]:[p()])}});const ze={xs:8,sm:10,md:14,lg:20,xl:24};var He=w({name:"QChip",props:{...D,...J,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:o}){const{proxy:{$q:d}}=I(),r=Q(e,d),n=Z(e,ze),i=v(()=>e.selected===!0||e.icon!==void 0),s=v(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),g=v(()=>e.iconRemove||d.iconSet.chip.remove),m=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),p=v(()=>{const a=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(a?` text-${a} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(m.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),b=v(()=>{const a=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},c={...a,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||d.lang.label.remove};return{chip:a,remove:c}});function h(a){a.keyCode===13&&S(a)}function S(a){e.disable||(o("update:selected",!e.selected),o("click",a))}function C(a){(a.keyCode===void 0||a.keyCode===13)&&(T(a),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function u(){const a=[];m.value===!0&&a.push(l("div",{class:"q-focus-helper"})),i.value===!0&&a.push(l(N,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const c=e.label!==void 0?[l("div",{class:"ellipsis"},[e.label])]:void 0;return a.push(l("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},_e(t.default,c))),e.iconRight&&a.push(l(N,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&a.push(l(N,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...b.value.remove,onClick:C,onKeyup:C})),a}return()=>{if(e.modelValue===!1)return;const a={class:p.value,style:n.value};return m.value===!0&&Object.assign(a,b.value.chip,{onClick:S,onKeyup:h}),re("div",a,u(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ne,e.ripple]])}}}),We=w({name:"QStepperNavigation",setup(e,{slots:t}){return()=>l("div",{class:"q-stepper__nav"},P(t.default))}});const De=/(-\w)/g;function Qe(e){const t={};for(const o in e){const d=o.replace(De,r=>r[1].toUpperCase());t[d]=e[o]}return t}var Ye=w({name:"QStepper",props:{...D,...Le,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:je,setup(e,{slots:t}){const o=I(),d=Q(e,o.proxy.$q),{updatePanelsList:r,isValidPanelName:n,updatePanelIndex:i,getPanelContent:s,getPanels:g,panelDirectives:m,goToPanel:p,keepAliveProps:b,needsUniqueKeepAliveWrapper:h}=Ve();Ce(ie,v(()=>({goToPanel:p,keepAliveProps:b,needsUniqueKeepAliveWrapper:h,...e})));const S=v(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(d.value===!0?" q-stepper--dark q-dark":"")),C=v(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function u(){const a=P(t.message,[]);if(e.vertical===!0){n(e.modelValue)&&i();const c=l("div",{class:"q-stepper__content"},P(t.default));return a===void 0?[c]:a.concat(c)}return[l("div",{class:C.value},g().map(c=>{const _=Qe(c.props);return l(oe,{key:_.name,stepper:e,step:_,goToPanel:p})})),a,re("div",{class:"q-stepper__content q-panel-parent"},s(),"cont",e.swipeable,()=>m.value)]}return()=>(r(t),l("div",{class:S.value},ee(t.navigation,u())))}});export{He as Q,We as a,Ue as b,Ne as c,Fe as d,Ye as e,Le as f,W as g,je as h,Ve as i,Y as s,Ee as u};
