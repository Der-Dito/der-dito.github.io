import{Q as i}from"./QTable.52a73a31.js";import{Q as n}from"./QPage.90bb9e98.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as s,w as l,C as a,a as m}from"./index.d1e16b2e.js";import"./QSeparator.88a74a46.js";import"./use-key-composition.bf5e8532.js";import"./selection.cec858f2.js";import"./scroll.f153c9e7.js";import"./QDialog.498a462c.js";import"./use-checkbox.b19ed45d.js";const c={props:["selectedUser"],data(){return{showRevertTransactions:!1,historyColumns:[{name:"desc",required:!0,label:"Datum",align:"left",field:e=>e.transactionDate,format:e=>`${e}`,sortable:!0},{name:"groupName",align:"left",label:"Gruppe",field:"groupName",sortable:!0},{name:"itemName",align:"left",label:"Artikel",field:"itemName",sortable:!0},{name:"quantity",label:"Menge",align:"center",field:"quantity",sortable:!0},{name:"chargedAmount",label:"DITOs",align:"center",field:"chargedAmount",sortable:!0}],historyData:[{transactionID:"AS213D",itemName:"Fiege Pils 0,33",quantity:2,chargedAmount:4,groupName:"SC Weitmar 45",transactionDate:"15.01.2025"},{transactionID:"AS253D",itemName:"Fiege Pils 0,33",quantity:2,chargedAmount:4,groupName:"VfL Bochum",transactionDate:"18.01.2025"},{transactionID:"AS273D",itemName:"Fiege Pils 0,33",quantity:2,chargedAmount:4,groupName:"SC Weitmar 45",transactionDate:"02.01.2025"}],initialPagination:{sortBy:"desc",descending:!0,page:1,rowsPerPage:10}}}},u={class:"col",align:"center"},d=a("div",{class:"row"},[a("div",{class:"text-caption",style:{padding:"20px"}}," Dies sind alle Transaktionen die du in Gruppen get\xE4tigt hast. Sollte eine Transaktion fehlerhaft sein, dann wende dich bitte an den Administrator der Gruppe, um diese Transaktion r\xFCckg\xE4ngig machen zu lassen. ")],-1);function p(e,g,f,h,t,D){return o(),s(n,{style:{"overflow-y":"scroll"}},{default:l(()=>[a("div",u,[m(i,{title:"Transaktionen",pagination:t.initialPagination,style:{"margin-top":"20px",width:"90vw",height:"70vh"},rows:t.historyData,columns:t.historyColumns,"row-key":"transactionID"},null,8,["pagination","rows","columns"])]),d]),_:1})}var x=r(c,[["render",p]]);export{x as default};
