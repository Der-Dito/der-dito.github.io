import{r as _,o as i,a6 as m,a as t,w as r,a8 as u,C as e,a7 as w,ab as f,c as h,aw as g,a3 as a,Q as v,ac as G}from"./index.d1e16b2e.js";import{Q as b,a as x,c as n}from"./QSeparator.88a74a46.js";import{Q}from"./QCardActions.59ceacb1.js";import{Q as y}from"./QCard.c1fbb0a8.js";import{Q as A}from"./QPage.90bb9e98.js";import{Q as S}from"./QDialog.498a462c.js";import{G as C}from"./GroupViewOwner.6dea606c.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-key-composition.bf5e8532.js";import"./scroll.f153c9e7.js";import"./QInput.c16a207d.js";import"./QStepper.fba4bd62.js";import"./QResizeObserver.b7181d55.js";import"./selection.cec858f2.js";import"./ClosePopup.b8bd7091.js";import"./QTable.52a73a31.js";import"./use-checkbox.b19ed45d.js";import"./QToggle.8ff213bf.js";const V={components:{GroupViewOwner:C},data(){return{showGroup:!1,groups:[{id:"23FI9ASDU9098772",groupIcon:"/development/group_images/weitmar_45.jpg",groupName:"SC Weitmar 45",owner:"Siegfried Meier",members:12,maximumMembers:30},{id:"23FI9ASDU9098772",groupIcon:"/development/group_images/altenbochum.jpg",groupName:"FC Altenbochum 1920/28 e.V.",owner:"Deine Gruppe",members:142,maximumMembers:300}],currentSelectedGroupAdmin:null}},methods:{openGroupOwner(l){this.currentSelectedGroupAdmin=l,this.showGroup=!0}}},k={class:"q-pa-md row-column-width"},D=e("div",{class:"row"},[e("div",{class:"col"},[e("div",{class:"text-h6"},"Meine Gruppen"),e("div",{class:"text-subtitle"}," Dies sind deine Gruppen, in denen du entweder Inhaber oder Administrator bist. ")])],-1),M={class:"row"},N={class:"col"},O=e("div",{class:"row"},[e("div",{class:"col"},[e("div",{class:"text-weight-regular text-secondary",style:{"margin-bottom":"10px"}}," Gruppen ")])],-1),B=["src"],F={class:"text-body1"},U={class:"text-weight-regular text-secondary"};function j(l,d,L,q,s,c){const p=_("GroupViewOwner");return i(),m(u,null,[t(A,{style:{"overflow-y":"scroll"}},{default:r(()=>[e("div",k,[D,e("div",M,[e("div",N,[t(y,{flat:"",style:{"border-radius":"10px"}},{default:r(()=>[t(Q,null,{default:r(()=>[O,t(b,null,{default:r(()=>[(i(!0),m(u,null,w(s.groups,o=>f((i(),h(x,{clickable:"",key:o.id,onClick:z=>c.openGroupOwner(o)},{default:r(()=>[t(n,{side:"",left:"",avatar:""},{default:r(()=>[t(g,null,{default:r(()=>[e("img",{src:o.groupIcon},null,8,B)]),_:2},1024)]),_:2},1024),t(n,null,{default:r(()=>[e("div",F,a(o.groupName),1),e("div",U,a(o.members)+" / "+a(o.maximumMembers)+" Mitglieder ",1)]),_:2},1024),t(n,{side:"",right:""},{default:r(()=>[t(v,{name:"keyboard_arrow_right",class:"text-secondary",style:{"font-size":"3rem"}})]),_:1})]),_:2},1032,["onClick"])),[[G]])),128))]),_:1})]),_:1})]),_:1})])])])]),_:1}),t(S,{"transition-show":"slide-up","transition-hide":"slide-down","full-width":"","full-height":"",modelValue:s.showGroup,"onUpdate:modelValue":d[0]||(d[0]=o=>s.showGroup=o)},{default:r(()=>[t(p,{selectedGroupAdmin:s.currentSelectedGroupAdmin},null,8,["selectedGroupAdmin"])]),_:1},8,["modelValue"])],64)}var ae=I(V,[["render",j]]);export{ae as default};
