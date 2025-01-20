import{b as ee,d as h,h as p,f as de,q as J,u as me,v as _e,ak as ve,al as ge,D as m,t as pe,j as he,o as c,a6 as x,C as t,a as s,w as o,a8 as y,a7 as U,c as f,V as b,a3 as d,ab as k,ac as A,r as O,ap as te,Q as B,ao as fe}from"./index.81343475.js";import{Q as be}from"./QInput.5ba249b9.js";import{Q as le,a as z,b as w,c as H,C as se}from"./ClosePopup.d454eb24.js";import{Q as T}from"./QCard.f9a97dd6.js";import{a as oe,Q as we}from"./QCardActions.6dcb59b5.js";import{Q as ae}from"./QDialog.6b315332.js";import{Q as xe}from"./QPage.110db235.js";import{u as Ce,f as ye,h as ke,i as Se,b as Q,Q as Ve,a as M,d as Y,e as Be}from"./QStepper.d24600da.js";import{u as Ie,a as qe}from"./private.use-form.2d02597f.js";import{u as De,a as Pe,b as Qe}from"./use-fullscreen.9fd36e4e.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./portal.a20ee43e.js";import"./scroll.2f6223cc.js";var Me=ee({name:"QCarouselSlide",props:{...Ce,imgSrc:String},setup(e,{slots:a}){const g=h(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:g.value},de(a.default))}});const Ae=["top","right","bottom","left"],Oe=["regular","flat","outline","push","unelevated"];var ze=ee({name:"QCarousel",props:{...Ie,...ye,...De,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Oe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ae.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Pe,...ke],setup(e,{slots:a}){const{proxy:{$q:g}}=he(),S=qe(e,g);let l=null,v;const{updatePanelsList:n,getPanelContent:i,panelDirectives:r,goToPanel:N,previousPanel:$,nextPanel:X,getEnabledPanels:ne,panelIndex:V}=Se(),{inFullscreen:L}=Qe(),ie=h(()=>L.value!==!0&&e.height!==void 0?{height:e.height}:{}),I=h(()=>e.vertical===!0?"vertical":"horizontal"),E=h(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),re=h(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(L.value===!0?" fullscreen":"")+(S.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${I.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${E.value}`:"")),K=h(()=>{const u=[e.prevIcon||g.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||g.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&g.lang.rtl===!0?u.reverse():u}),W=h(()=>e.navigationIcon||g.iconSet.carousel.navigationIcon),ue=h(()=>e.navigationActiveIcon||W.value),q=h(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));J(()=>e.modelValue,()=>{e.autoplay&&D()}),J(()=>e.autoplay,u=>{u?D():l!==null&&(clearTimeout(l),l=null)});function D(){const u=ge(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,u>=0?X():$()},u)}me(()=>{e.autoplay&&D()}),_e(()=>{l!==null&&clearTimeout(l)});function j(u,C){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${u} q-carousel__navigation--${E.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},ne().map(C))])}function ce(){const u=[];if(e.navigation===!0){const C=a["navigation-icon"]!==void 0?a["navigation-icon"]:_=>p(m,{key:"nav"+_.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${_.active===!0?"":"in"}active`,..._.btnProps,onClick:_.onClick}),P=v-1;u.push(j("buttons",(_,G)=>{const Z=_.props.name,R=V.value===G;return C({index:G,maxIndex:P,name:Z,active:R,btnProps:{icon:R===!0?ue.value:W.value,size:"sm",...q.value},onClick:()=>{N(Z)}})}))}else if(e.thumbnails===!0){const C=e.controlColor!==void 0?` text-${e.controlColor}`:"";u.push(j("thumbnails",P=>{const _=P.props;return p("img",{key:"tmb#"+_.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${_.name===e.modelValue?"":"in"}active`+C,src:_.imgSrc||_["img-src"],onClick:()=>{N(_.name)}})}))}return e.arrows===!0&&V.value>=0&&((e.infinite===!0||V.value>0)&&u.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${I.value} absolute flex flex-center`},[p(m,{icon:K.value[0],...q.value,onClick:$})])),(e.infinite===!0||V.value<v-1)&&u.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${I.value} absolute flex flex-center`},[p(m,{icon:K.value[1],...q.value,onClick:X})]))),pe(a.control,u)}return()=>(v=n(a),p("div",{class:re.value,style:ie.value},[ve("div",{class:"q-carousel__slides-container"},i(),"sl-cont",e.swipeable,()=>r.value)].concat(ce())))}}),Te="/assets/paypal.8cc6591c.svg",Ue="/assets/mastercard.56544631.svg";const Fe={props:["selectedClub"],data(){return{step:1,currentBalance:"14,00",slide:"event1",name:"Apples",message:"I like apples",club:"",cardOptions:[{value:"10",selected:!1},{value:"15",selected:!1},{value:"20",selected:!1}],selectedOption:null,selectedPayment:null,selected:!1,size:150,enableNextButton:!0,loading:!1}},methods:{selectOption(e){this.selectedOption=e,this.enableNextButton=!1},confirmPayment(){this.loading=!0}},mounted(){}},Ne=t("div",{class:"row"},[t("div",{class:"col",align:"center"},[t("div",{class:"text-h6 text-weight-bold",style:{"margin-top":"10px"}}," Verzehrkarte kaufen ")])],-1),$e={class:"row"},Xe={class:"col"},Le=t("div",{class:"row"}," Bitte w\xE4hle eine Verzehrkarte aus, um das Guthaben aufzuladen. ",-1),Ee={class:"row"},Ke={class:"col",align:"center"},We=t("div",{class:"row"},[t("div",{class:"col"},[t("img",{src:Te,alt:"",srcset:"",width:"45px"})]),t("div",{class:"col-9"},[t("div",{class:"row text-caption text-weight-bold",style:{"text-wrap":"wrap"}}," max.mustermann@email.de "),t("div",{class:"row text-caption text-weight-regular",style:{"text-wrap":"wrap"}}," Max Mustermann ")])],-1),je=t("div",{class:"row",align:"left"},[t("div",{class:"col"},[t("img",{src:Ue,alt:"",style:{"border-radius":"5px"},srcset:"",width:"45px"})]),t("div",{class:"col-9"},[t("div",{class:"row text-caption text-weight-bold",style:{"text-wrap":"wrap"}}," 5555 2XXX XXXX XXX9 "),t("div",{class:"row text-caption text-weight-regular",style:{"text-wrap":"wrap"}}," 09/24 ")])],-1),Ge={class:"text-h6 text-weight-bold",style:{"margin-top":"20px"}},Ze={class:"text-h7 text-weight-bold"},Re={class:"text-weight-regular"};function Je(e,a,g,S,l,v){return c(),x(y,null,[Ne,t("div",$e,[t("div",Xe,[s(Be,{modelValue:l.step,"onUpdate:modelValue":a[7]||(a[7]=n=>l.step=n),"header-nav":"",ref:"stepper",color:"primary",animated:""},{default:o(()=>[s(Q,{name:1,title:"",icon:"shopping_cart",done:l.step>1,"header-nav":l.step>1},{default:o(()=>[Le,t("div",Ee,[t("div",Ke,[(c(!0),x(y,null,U(l.cardOptions,n=>(c(),f(Ve,{style:{"margin-top":"20px","margin-bottom":"20px"},key:n.value,selected:l.selectedOption===n.value,"onUpdate:selected":i=>v.selectOption(n.value),color:"primary","text-color":"white",size:"large"},{default:o(()=>[b(d(n.value)+" \u20AC ",1)]),_:2},1032,["selected","onUpdate:selected"]))),128))])]),s(M,null,{default:o(()=>[s(m,{onClick:a[0]||(a[0]=()=>{e.done1=!0,l.step=2}),color:"primary",rounded:"",disable:l.enableNextButton,size:"small",label:"Weiter"},null,8,["disable"])]),_:1})]),_:1},8,["done","header-nav"]),s(Q,{name:2,title:"",icon:"credit_card",done:l.step>2,"header-nav":l.step>2},{default:o(()=>[b(" W\xE4hle bitte eine Zahlungsart aus und gebe dann deine Zahlungsdetails ein. "),s(le,null,{default:o(()=>[k((c(),f(z,{tag:"label",style:{"margin-top":"10px","border-color":"var(--q-secondary)","border-width":"1px","border-style":"solid","border-radius":"13px"}},{default:o(()=>[s(w,null,{default:o(()=>[s(H,null,{default:o(()=>[We]),_:1})]),_:1}),s(w,{avatar:""},{default:o(()=>[s(Y,{modelValue:l.selectedPayment,"onUpdate:modelValue":a[1]||(a[1]=n=>l.selectedPayment=n),val:"PayPal",color:"teal"},null,8,["modelValue"])]),_:1})]),_:1})),[[A]]),k((c(),f(z,{tag:"label",style:{"border-color":"var(--q-secondary)","border-width":"1px","border-style":"solid","margin-top":"10px","border-radius":"13px"}},{default:o(()=>[s(w,null,{default:o(()=>[s(H,null,{default:o(()=>[je]),_:1})]),_:1}),s(w,{avatar:""},{default:o(()=>[s(Y,{modelValue:l.selectedPayment,"onUpdate:modelValue":a[2]||(a[2]=n=>l.selectedPayment=n),val:"MasterCard",color:"teal"},null,8,["modelValue"])]),_:1})]),_:1})),[[A]])]),_:1}),s(M,null,{default:o(()=>[s(m,{onClick:a[3]||(a[3]=()=>{e.done2=!0,l.step=3}),color:"primary",rounded:"",size:"small",label:"Weiter"}),s(m,{flat:"",onClick:a[4]||(a[4]=n=>l.step=1),color:"primary",label:"Zur\xFCck",class:"q-ml-sm"})]),_:1})]),_:1},8,["done","header-nav"]),s(Q,{name:3,title:"",icon:"point_of_sale","header-nav":l.step>3},{default:o(()=>[b(' Kontrolliere bitte noch einmal deine Bestellung und schlie\xDFe diesen Kauf durch einen Klick auf "Bezahlen" ab. '),t("div",Ge," Betrag: "+d(l.selectedOption)+",00 \u20AC ",1),t("div",Ze,[b(" Zahlungsmittel: "),t("p",Re,d(l.selectedPayment),1)]),s(M,null,{default:o(()=>[s(m,{color:"primary",onClick:a[5]||(a[5]=n=>v.confirmPayment()),rounded:"",icon:"payments",loading:l.loading,size:"small",label:"Bezahlen"},null,8,["loading"]),s(m,{flat:"",onClick:a[6]||(a[6]=n=>l.step=2),color:"primary",label:"Zur\xFCck",class:"q-ml-sm"})]),_:1})]),_:1},8,["header-nav"])]),_:1},8,["modelValue"])])])],64)}var He=F(Fe,[["render",Je]]);const Ye={props:["selectedClub"],components:{BuyConsumptionCard:He},data(){return{showBuyConsumptionCard:!1,currentBalance:"14,00",slide:"event1",name:"Apples",message:"I like apples",club:"",events:[{id:"A23192ASD129323",title:"Fussek f\xFCr Kinder Event",description:" Fu\xDFball Event f\xFCr Kinder von 4 bis 10 Jahre. Bringt Sportsachen mit! B\xE4lle haben wir genug :)",date:"27.02.2024",time:"17:30",location:"Musterstra\xDFe 10, 444832 Musterstadt"},{id:"ADGGGDS2131",title:"Spiel, Spa\xDF und Taktiken",description:"Veranstaltung f\xFCr jedes Alter! Lerne die besten Taktiken von den Bundesligisten und absolviere ein Mannschaftsspiel!",date:"27.05.2024",time:"15:30",location:"Musterstra\xDFe 11, 444832 Musterhausen"}],size:150}},mounted(){this.club=this.selectedClub,this.events.length>0&&(this.slide=this.events[0].id)}},et={class:"row"},tt={class:"col"},lt=["src"],st={class:"col"},ot={class:"row"},at={class:"col",align:"right"},nt={class:"text-h6"},it={class:"row"},rt={class:"col",align:"right"},ut={class:"text-weight-regular text-secondary"},ct={class:"row"},dt={class:"text-weight-bold"},mt={class:"row"},_t={class:"col",align:"left"},vt={class:"row"},gt={class:"col"},pt={class:"text-caption text-weight-bold text-secondary"},ht={class:"text-weight-bold text-h6",style:{"margin-top":"10px"}},ft={class:"text-caption"},bt={class:"text-weight-bood text-caption text-secondary",style:{"margin-top":"10px"}},wt={class:"row",style:{"margin-top":"10px"}},xt={class:"col",align:"right"},Ct={class:"row",style:{"margin-top":"40px"},align:"center"},yt={class:"col"},kt={class:"text-caption text-weight-light text-secondary"},St={class:"text-caption text-weight-bold text-secondary"};function Vt(e,a,g,S,l,v){const n=O("BuyConsumptionCard"),i=O("q-card-sections");return c(),x(y,null,[t("div",et,[t("div",tt,[s(te,null,{default:o(()=>[t("img",{src:l.club.clubIcon,alt:"",srcset:""},null,8,lt)]),_:1})]),t("div",st,[t("div",ot,[t("div",at,[t("div",nt,d(l.club.name),1)])]),t("div",it,[t("div",rt,[t("div",ut,d(l.club.address),1)])])])]),t("div",ct,[t("div",dt,[s(B,{name:"calendar_month",size:"sm"}),b(" Kommende Events ")]),s(ze,{style:{"margin-top":"10px"},modelValue:l.slide,"onUpdate:modelValue":a[0]||(a[0]=r=>l.slide=r),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"",navigation:"","control-color":"secondary",height:"300px",class:"shadow-4 rounded-borders carousel_style"},{default:o(()=>[(c(!0),x(y,null,U(l.events,r=>(c(),f(Me,{key:r.id,name:r.id,style:{color:"var(--q-carousel-text)"},class:"column no-wrap flex-center"},{default:o(()=>[t("div",mt,[t("div",_t,[t("div",vt,[t("div",gt,[t("div",pt,d(r.date)+" \xB7 "+d(r.time)+" Uhr ",1),t("div",ht,d(r.title),1),t("div",ft,d(r.description),1),t("div",bt,[s(B,{name:"location_on",size:"sm"}),b(" "+d(r.location),1)])])]),t("div",wt,[t("div",xt,[s(m,{icon:"calendar_month",color:"info",outline:"",size:"small",label:"Speichern",rounded:""})])])])])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),t("div",Ct,[t("div",yt,[s(m,{color:"primary",size:"small",icon:"credit_card",rounded:"",onClick:a[1]||(a[1]=r=>l.showBuyConsumptionCard=!0),label:"Verzehrkarte kaufen"}),t("div",kt,[b(" Aktuelles Guthaben: "),t("a",St,d(l.currentBalance)+" \u20AC ",1)])])]),s(ae,{modelValue:l.showBuyConsumptionCard,"onUpdate:modelValue":a[2]||(a[2]=r=>l.showBuyConsumptionCard=r)},{default:o(()=>[s(T,{style:{width:"95vw","border-radius":"10px"}},{default:o(()=>[s(i,null,{default:o(()=>[s(n)]),_:1}),s(oe,{align:"around"},{default:o(()=>[k((c(),f(m,{color:"secondary",flat:""},{default:o(()=>[b("Abbrechen")]),_:1})),[[se]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var Bt=F(Ye,[["render",Vt]]);const It={components:{ClubDetails:Bt},name:"IndexPage",data(){return{showClubDetails:!1,input_club:"",selectedClub:null,favoriteClubs:[{id:"23FI9ASDU9098772",clubIcon:"/development/club_images/weitmar_45.jpg",name:"SC Weitmar 45",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!0},{id:"ODO0123OASD23123",clubIcon:"/development/club_images/altenbochum.jpg",name:"FC Altenbochum 1920/28 e.V.",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!0}],clubs:[{id:"23FI9ASDU9098772",clubIcon:"/development/club_images/weitmar_45.jpg",name:"SC Weitmar 45",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!0},{id:"ODO0123OASD23123",clubIcon:"/development/club_images/weitmar_09.png",name:"SV Blauwei\xDF Weitmar 09",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!0},{id:"OOTASD00123ASD",clubIcon:"/development/club_images/steinkuhl.png",name:"SV Bochum-Steinkuhl",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!1},{id:"O0123123IWD90",clubIcon:"/development/club_images/vfl_bochum.jpg",name:"VfL Bochum",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!1},{id:"GK12315ASD98932",clubIcon:"/development/club_images/bvb.png",name:"Dortmund BVB",address:"Musterstra\xDFe 10, 99999 Musterstadt",is_following:!1}],filteredClubs:[]}},watch:{input_club(e){e.length==0&&(this.filteredClubs=this.favoriteClubs)}},mounted(){this.filteredClubs=this.favoriteClubs},methods:{toggleFollowing(e){e.is_following==!1?this.favoriteClubs.push(e):this.favoriteClubs.pop(e),e.is_following=!e.is_following},searchClub(){const e=this.input_club.toLowerCase();this.filteredClubs=this.clubs.filter(a=>a.name.toLowerCase().includes(e))},openConsumptionCard(e){console.log("Opening club:",e.name)},openClubDetails(e){this.selectedClub=e,this.showClubDetails=!0}}},qt={class:"q-pa-md"},Dt={class:"row"},Pt={key:0},Qt=t("div",{class:"text-weight-regular text-secondary",style:{"text-align":"center"}}," Du folgst aktuell keinen Verein! ",-1),Mt=t("div",{style:{"text-align":"center"},class:"text-weight-regular text-secondary"}," Du kannst deinen Verein suchen und diesem folgen! ",-1),At=[Qt,Mt],Ot=["src"],zt={class:"text-body1"},Tt={class:"text-weight-regular text-secondary"};function Ut(e,a,g,S,l,v){const n=O("ClubDetails");return c(),f(xe,{style:{"overflow-y":"scroll"}},{default:o(()=>[t("div",qt,[t("div",Dt,[s(T,{flat:"",style:{"border-radius":"15px",width:"95vw","min-height":"80vh"}},{default:o(()=>[s(be,{style:{"border-radius":"15px",margin:"10px"},"bottom-slots":"",rounded:"",outlined:"","onUpdate:modelValue":[v.searchClub,a[1]||(a[1]=i=>l.input_club=i)],modelValue:l.input_club,label:"Vereinssuche"},{prepend:o(()=>[s(B,{name:"search"})]),append:o(()=>[s(B,{name:"close",onClick:a[0]||(a[0]=i=>{l.input_club="",l.filteredClubs=l.clubs}),class:"cursor-pointer"})]),_:1},8,["onUpdate:modelValue","modelValue"]),l.filteredClubs.length===0?(c(),x("div",Pt,At)):(c(),f(le,{key:1},{default:o(()=>[(c(!0),x(y,null,U(l.filteredClubs,i=>k((c(),f(z,{clickable:"",key:i.id,onClick:r=>v.openClubDetails(i)},{default:o(()=>[s(w,{side:"",left:"",avatar:""},{default:o(()=>[s(te,null,{default:o(()=>[t("img",{src:i.clubIcon},null,8,Ot)]),_:2},1024)]),_:2},1024),s(w,null,{default:o(()=>[t("div",zt,d(i.name),1),t("div",Tt,d(i.address),1)]),_:2},1024),s(w,{side:"",right:""},{default:o(()=>[s(m,{flat:"",round:"",dense:"",onClick:fe(r=>v.toggleFollowing(i),["stop"]),icon:i.is_following?"star":"star_outline",color:i.is_following?"lime-14":"grey"},null,8,["onClick","icon","color"])]),_:2},1024)]),_:2},1032,["onClick"])),[[A]])),128))]),_:1}))]),_:1})])]),s(ae,{modelValue:l.showClubDetails,"onUpdate:modelValue":a[2]||(a[2]=i=>l.showClubDetails=i)},{default:o(()=>[s(T,{style:{width:"95vw","border-radius":"10px"}},{default:o(()=>[s(we,null,{default:o(()=>[s(n,{selectedClub:l.selectedClub},null,8,["selectedClub"])]),_:1}),s(oe,null,{default:o(()=>[k((c(),f(m,{color:"secondary",flat:""},{default:o(()=>[b("Schlie\xDFen")]),_:1})),[[se]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ht=F(It,[["render",Ut]]);export{Ht as default};
