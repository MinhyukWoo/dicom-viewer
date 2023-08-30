(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{87357:function(t,e,r){"use strict";r.d(e,{Z:function(){return b}});var a=r(87462),i=r(63366),n=r(67294),o=r(90512),l=r(49731),d=r(86523),u=r(39707),s=r(96682),h=r(85893);let c=["className","component"];var v=r(37078),f=r(21265),m=r(10606);let p=(0,f.Z)(),g=function(t={}){let{themeId:e,defaultTheme:r,defaultClassName:v="MuiBox-root",generateClassName:f}=t,m=(0,l.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(d.Z),p=n.forwardRef(function(t,n){let l=(0,s.Z)(r),d=(0,u.Z)(t),{className:p,component:g="div"}=d,b=(0,i.Z)(d,c);return(0,h.jsx)(m,(0,a.Z)({as:g,ref:n,className:(0,o.Z)(p,f?f(v):v),theme:e&&l[e]||l},b))});return p}({themeId:m.Z,defaultTheme:p,defaultClassName:"MuiBox-root",generateClassName:v.Z.generate});var b=g},45929:function(t,e,r){"use strict";let a;r.d(e,{ZP:function(){return J}});var i=r(63366),n=r(87462),o=r(67294),l=r(90512),d=r(94780),u=r(24349),s=r(28442),h=r(82690),c=r(19032),v=r(99962),f=r(33703),m=r(73546),p=r(59948),g={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function b(t,e){return t-e}function w(t,e,r){return null==t?e:Math.min(Math.max(e,t),r)}function y(t,e){var r;let{index:a}=null!=(r=t.reduce((t,r,a)=>{let i=Math.abs(e-r);return null===t||i<t.distance||i===t.distance?{distance:i,index:a}:t},null))?r:{};return a}function k(t,e){if(void 0!==e.current&&t.changedTouches){for(let r=0;r<t.changedTouches.length;r+=1){let a=t.changedTouches[r];if(a.identifier===e.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:t.clientX,y:t.clientY}}function x({values:t,newValue:e,index:r}){let a=t.slice();return a[r]=e,a.sort(b)}function M({sliderRef:t,activeIndex:e,setActive:r}){var a,i,n;let o=(0,h.Z)(t.current);null!=(a=t.current)&&a.contains(o.activeElement)&&Number(null==o||null==(i=o.activeElement)?void 0:i.getAttribute("data-index"))===e||null==(n=t.current)||n.querySelector(`[type="range"][data-index="${e}"]`).focus(),r&&r(e)}function S(t,e){return"number"==typeof t&&"number"==typeof e?t===e:"object"==typeof t&&"object"==typeof e&&function(t,e,r=(t,e)=>t===e){return t.length===e.length&&t.every((t,a)=>r(t,e[a]))}(t,e)}let Z={horizontal:{offset:t=>({left:`${t}%`}),leap:t=>({width:`${t}%`})},"horizontal-reverse":{offset:t=>({right:`${t}%`}),leap:t=>({width:`${t}%`})},vertical:{offset:t=>({bottom:`${t}%`}),leap:t=>({height:`${t}%`})}},P=t=>t;function _(){return void 0===a&&(a="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),a}var A=r(41796),j=r(71657),z=r(90948),L=r(2734),O=t=>!t||!(0,s.X)(t),C=r(98216),E=r(1588),R=r(34867);function $(t){return(0,R.Z)("MuiSlider",t)}let N=(0,E.Z)("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]);var T=r(85893);let I=t=>{let{open:e}=t,r={offset:(0,l.Z)(e&&N.valueLabelOpen),circle:N.valueLabelCircle,label:N.valueLabelLabel};return r},F=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function D(t){return t}let q=(0,z.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`color${(0,C.Z)(r.color)}`],"medium"!==r.size&&e[`size${(0,C.Z)(r.size)}`],r.marked&&e.marked,"vertical"===r.orientation&&e.vertical,"inverted"===r.track&&e.trackInverted,!1===r.track&&e.trackFalse]}})(({theme:t,ownerState:e})=>(0,n.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(t.vars||t).palette[e.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===e.orientation&&(0,n.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===e.size&&{height:2},e.marked&&{marginBottom:20}),"vertical"===e.orientation&&(0,n.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===e.size&&{width:2},e.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${N.disabled}`]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},[`&.${N.dragging}`]:{[`& .${N.thumb}, & .${N.track}`]:{transition:"none"}}})),V=(0,z.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(t,e)=>e.rail})(({ownerState:t})=>(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===t.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===t.track&&{opacity:1})),B=(0,z.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t,ownerState:e})=>{let r="light"===t.palette.mode?(0,A.$n)(t.palette[e.color].main,.62):(0,A._j)(t.palette[e.color].main,.5);return(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest})},"small"===e.size&&{border:"none"},"horizontal"===e.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===e.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===e.track&&{display:"none"},"inverted"===e.track&&{backgroundColor:t.vars?t.vars.palette.Slider[`${e.color}Track`]:r,borderColor:t.vars?t.vars.palette.Slider[`${e.color}Track`]:r})}),X=(0,z.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.thumb,e[`thumbColor${(0,C.Z)(r.color)}`],"medium"!==r.size&&e[`thumbSize${(0,C.Z)(r.size)}`]]}})(({theme:t,ownerState:e})=>(0,n.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest})},"small"===e.size&&{width:12,height:12},"horizontal"===e.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===e.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":(0,n.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"small"===e.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${N.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.16)`:(0,A.Fq)(t.palette[e.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${N.active}`]:{boxShadow:`0px 0px 0px 14px ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.16)`:(0,A.Fq)(t.palette[e.color].main,.16)}`},[`&.${N.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Y=(0,z.ZP)(function(t){let{children:e,className:r,value:a}=t,i=I(t);return e?o.cloneElement(e,{className:(0,l.Z)(e.props.className)},(0,T.jsxs)(o.Fragment,{children:[e.props.children,(0,T.jsx)("span",{className:(0,l.Z)(i.offset,r),"aria-hidden":!0,children:(0,T.jsx)("span",{className:i.circle,children:(0,T.jsx)("span",{className:i.label,children:a})})})]})):null},{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(t,e)=>e.valueLabel})(({theme:t,ownerState:e})=>(0,n.Z)({[`&.${N.valueLabelOpen}`]:{transform:`${"vertical"===e.orientation?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),transform:`${"vertical"===e.orientation?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===e.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===e.orientation&&{right:"small"===e.size?"20px":"30px",top:"50%",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},"small"===e.size&&{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),W=(0,z.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:t=>(0,z.Dz)(t)&&"markActive"!==t,overridesResolver:(t,e)=>{let{markActive:r}=t;return[e.mark,r&&e.markActive]}})(({theme:t,ownerState:e,markActive:r})=>(0,n.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===e.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===e.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},r&&{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8})),H=(0,z.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:t=>(0,z.Dz)(t)&&"markLabelActive"!==t,overridesResolver:(t,e)=>e.markLabel})(({theme:t,ownerState:e,markLabelActive:r})=>(0,n.Z)({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===e.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===e.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},r&&{color:(t.vars||t).palette.text.primary})),K=t=>{let{disabled:e,dragging:r,marked:a,orientation:i,track:n,classes:o,color:l,size:u}=t,s={root:["root",e&&"disabled",r&&"dragging",a&&"marked","vertical"===i&&"vertical","inverted"===n&&"trackInverted",!1===n&&"trackFalse",l&&`color${(0,C.Z)(l)}`,u&&`size${(0,C.Z)(u)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",e&&"disabled",u&&`thumbSize${(0,C.Z)(u)}`,l&&`thumbColor${(0,C.Z)(l)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,d.Z)(s,$,o)},U=({children:t})=>t,G=o.forwardRef(function(t,e){var r,a,d,A,z,C,E,R,$,N,I,G,J,Q,tt,te,tr,ta,ti,tn,to,tl,td,tu;let ts=(0,j.Z)({props:t,name:"MuiSlider"}),th=(0,L.Z)(),tc="rtl"===th.direction,{"aria-label":tv,"aria-valuetext":tf,"aria-labelledby":tm,component:tp="span",components:tg={},componentsProps:tb={},color:tw="primary",classes:ty,className:tk,disableSwap:tx=!1,disabled:tM=!1,getAriaLabel:tS,getAriaValueText:tZ,marks:tP=!1,max:t_=100,min:tA=0,orientation:tj="horizontal",size:tz="medium",step:tL=1,scale:tO=D,slotProps:tC,slots:tE,track:tR="normal",valueLabelDisplay:t$="off",valueLabelFormat:tN=D}=ts,tT=(0,i.Z)(ts,F),tI=(0,n.Z)({},ts,{isRtl:tc,max:t_,min:tA,classes:ty,disabled:tM,disableSwap:tx,orientation:tj,marks:tP,color:tw,size:tz,step:tL,scale:tO,track:tR,valueLabelDisplay:t$,valueLabelFormat:tN}),{axisProps:tF,getRootProps:tD,getHiddenInputProps:tq,getThumbProps:tV,open:tB,active:tX,axis:tY,focusedThumbIndex:tW,range:tH,dragging:tK,marks:tU,values:tG,trackOffset:tJ,trackLeap:tQ,getThumbStyle:t0}=function(t){let{"aria-labelledby":e,defaultValue:r,disabled:a=!1,disableSwap:i=!1,isRtl:l=!1,marks:d=!1,max:u=100,min:s=0,name:A,onChange:j,onChangeCommitted:z,orientation:L="horizontal",rootRef:O,scale:C=P,step:E=1,tabIndex:R,value:$}=t,N=o.useRef(),[T,I]=o.useState(-1),[F,D]=o.useState(-1),[q,V]=o.useState(!1),B=o.useRef(0),[X,Y]=(0,c.Z)({controlled:$,default:null!=r?r:s,name:"Slider"}),W=j&&((t,e,r)=>{let a=t.nativeEvent||t,i=new a.constructor(a.type,a);Object.defineProperty(i,"target",{writable:!0,value:{value:e,name:A}}),j(i,e,r)}),H=Array.isArray(X),K=H?X.slice().sort(b):[X];K=K.map(t=>w(t,s,u));let U=!0===d&&null!==E?[...Array(Math.floor((u-s)/E)+1)].map((t,e)=>({value:s+E*e})):d||[],G=U.map(t=>t.value),{isFocusVisibleRef:J,onBlur:Q,onFocus:tt,ref:te}=(0,v.Z)(),[tr,ta]=o.useState(-1),ti=o.useRef(),tn=(0,f.Z)(te,ti),to=(0,f.Z)(O,tn),tl=t=>e=>{var r;let a=Number(e.currentTarget.getAttribute("data-index"));tt(e),!0===J.current&&ta(a),D(a),null==t||null==(r=t.onFocus)||r.call(t,e)},td=t=>e=>{var r;Q(e),!1===J.current&&ta(-1),D(-1),null==t||null==(r=t.onBlur)||r.call(t,e)};(0,m.Z)(()=>{if(a&&ti.current.contains(document.activeElement)){var t;null==(t=document.activeElement)||t.blur()}},[a]),a&&-1!==T&&I(-1),a&&-1!==tr&&ta(-1);let tu=t=>e=>{var r;null==(r=t.onChange)||r.call(t,e);let a=Number(e.currentTarget.getAttribute("data-index")),n=K[a],o=G.indexOf(n),l=e.target.valueAsNumber;if(U&&null==E){let t=G[G.length-1];l=l>t?t:l<G[0]?G[0]:l<n?G[o-1]:G[o+1]}if(l=w(l,s,u),H){i&&(l=w(l,K[a-1]||-1/0,K[a+1]||1/0));let t=l;l=x({values:K,newValue:l,index:a});let e=a;i||(e=l.indexOf(t)),M({sliderRef:ti,activeIndex:e})}Y(l),ta(a),W&&!S(l,X)&&W(e,l,a),z&&z(e,l)},ts=o.useRef(),th=L;l&&"horizontal"===L&&(th+="-reverse");let tc=({finger:t,move:e=!1})=>{let r,a;let{current:n}=ti,{width:o,height:l,bottom:d,left:h}=n.getBoundingClientRect();if(r=0===th.indexOf("vertical")?(d-t.y)/l:(t.x-h)/o,-1!==th.indexOf("-reverse")&&(r=1-r),a=(u-s)*r+s,E)a=function(t,e,r){let a=Math.round((t-r)/e)*e+r;return Number(a.toFixed(function(t){if(1>Math.abs(t)){let e=t.toExponential().split("e-"),r=e[0].split(".")[1];return(r?r.length:0)+parseInt(e[1],10)}let e=t.toString().split(".")[1];return e?e.length:0}(e)))}(a,E,s);else{let t=y(G,a);a=G[t]}a=w(a,s,u);let c=0;if(H){c=e?ts.current:y(K,a),i&&(a=w(a,K[c-1]||-1/0,K[c+1]||1/0));let t=a;a=x({values:K,newValue:a,index:c}),i&&e||(c=a.indexOf(t),ts.current=c)}return{newValue:a,activeIndex:c}},tv=(0,p.Z)(t=>{let e=k(t,N);if(!e)return;if(B.current+=1,"mousemove"===t.type&&0===t.buttons){tf(t);return}let{newValue:r,activeIndex:a}=tc({finger:e,move:!0});M({sliderRef:ti,activeIndex:a,setActive:I}),Y(r),!q&&B.current>2&&V(!0),W&&!S(r,X)&&W(t,r,a)}),tf=(0,p.Z)(t=>{let e=k(t,N);if(V(!1),!e)return;let{newValue:r}=tc({finger:e,move:!0});I(-1),"touchend"===t.type&&D(-1),z&&z(t,r),N.current=void 0,tp()}),tm=(0,p.Z)(t=>{if(a)return;_()||t.preventDefault();let e=t.changedTouches[0];null!=e&&(N.current=e.identifier);let r=k(t,N);if(!1!==r){let{newValue:e,activeIndex:a}=tc({finger:r});M({sliderRef:ti,activeIndex:a,setActive:I}),Y(e),W&&!S(e,X)&&W(t,e,a)}B.current=0;let i=(0,h.Z)(ti.current);i.addEventListener("touchmove",tv),i.addEventListener("touchend",tf)}),tp=o.useCallback(()=>{let t=(0,h.Z)(ti.current);t.removeEventListener("mousemove",tv),t.removeEventListener("mouseup",tf),t.removeEventListener("touchmove",tv),t.removeEventListener("touchend",tf)},[tf,tv]);o.useEffect(()=>{let{current:t}=ti;return t.addEventListener("touchstart",tm,{passive:_()}),()=>{t.removeEventListener("touchstart",tm,{passive:_()}),tp()}},[tp,tm]),o.useEffect(()=>{a&&tp()},[a,tp]);let tg=t=>e=>{var r;if(null==(r=t.onMouseDown)||r.call(t,e),a||e.defaultPrevented||0!==e.button)return;e.preventDefault();let i=k(e,N);if(!1!==i){let{newValue:t,activeIndex:r}=tc({finger:i});M({sliderRef:ti,activeIndex:r,setActive:I}),Y(t),W&&!S(t,X)&&W(e,t,r)}B.current=0;let n=(0,h.Z)(ti.current);n.addEventListener("mousemove",tv),n.addEventListener("mouseup",tf)},tb=((H?K[0]:s)-s)*100/(u-s),tw=(K[K.length-1]-s)*100/(u-s)-tb,ty=t=>e=>{var r;null==(r=t.onMouseOver)||r.call(t,e);let a=Number(e.currentTarget.getAttribute("data-index"));D(a)},tk=t=>e=>{var r;null==(r=t.onMouseLeave)||r.call(t,e),D(-1)};return{active:T,axis:th,axisProps:Z,dragging:q,focusedThumbIndex:tr,getHiddenInputProps:(r={})=>{var i;let o={onChange:tu(r||{}),onFocus:tl(r||{}),onBlur:td(r||{})},d=(0,n.Z)({},r,o);return(0,n.Z)({tabIndex:R,"aria-labelledby":e,"aria-orientation":L,"aria-valuemax":C(u),"aria-valuemin":C(s),name:A,type:"range",min:t.min,max:t.max,step:null===t.step&&t.marks?"any":null!=(i=t.step)?i:void 0,disabled:a},d,{style:(0,n.Z)({},g,{direction:l?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(t={})=>{let e={onMouseDown:tg(t||{})},r=(0,n.Z)({},t,e);return(0,n.Z)({ref:to},r)},getThumbProps:(t={})=>{let e={onMouseOver:ty(t||{}),onMouseLeave:tk(t||{})};return(0,n.Z)({},t,e)},marks:U,open:F,range:H,rootRef:to,trackLeap:tw,trackOffset:tb,values:K,getThumbStyle:t=>({pointerEvents:-1!==T&&T!==t?"none":void 0})}}((0,n.Z)({},tI,{rootRef:e}));tI.marked=tU.length>0&&tU.some(t=>t.label),tI.dragging=tK,tI.focusedThumbIndex=tW;let t2=K(tI),t1=null!=(r=null!=(a=null==tE?void 0:tE.root)?a:tg.Root)?r:q,t5=null!=(d=null!=(A=null==tE?void 0:tE.rail)?A:tg.Rail)?d:V,t4=null!=(z=null!=(C=null==tE?void 0:tE.track)?C:tg.Track)?z:B,t9=null!=(E=null!=(R=null==tE?void 0:tE.thumb)?R:tg.Thumb)?E:X,t8=null!=($=null!=(N=null==tE?void 0:tE.valueLabel)?N:tg.ValueLabel)?$:Y,t3=null!=(I=null!=(G=null==tE?void 0:tE.mark)?G:tg.Mark)?I:W,t6=null!=(J=null!=(Q=null==tE?void 0:tE.markLabel)?Q:tg.MarkLabel)?J:H,t7=null!=(tt=null!=(te=null==tE?void 0:tE.input)?te:tg.Input)?tt:"input",et=null!=(tr=null==tC?void 0:tC.root)?tr:tb.root,ee=null!=(ta=null==tC?void 0:tC.rail)?ta:tb.rail,er=null!=(ti=null==tC?void 0:tC.track)?ti:tb.track,ea=null!=(tn=null==tC?void 0:tC.thumb)?tn:tb.thumb,ei=null!=(to=null==tC?void 0:tC.valueLabel)?to:tb.valueLabel,en=null!=(tl=null==tC?void 0:tC.mark)?tl:tb.mark,eo=null!=(td=null==tC?void 0:tC.markLabel)?td:tb.markLabel,el=null!=(tu=null==tC?void 0:tC.input)?tu:tb.input,ed=(0,u.y)({elementType:t1,getSlotProps:tD,externalSlotProps:et,externalForwardedProps:tT,additionalProps:(0,n.Z)({},O(t1)&&{as:tp}),ownerState:(0,n.Z)({},tI,null==et?void 0:et.ownerState),className:[t2.root,tk]}),eu=(0,u.y)({elementType:t5,externalSlotProps:ee,ownerState:tI,className:t2.rail}),es=(0,u.y)({elementType:t4,externalSlotProps:er,additionalProps:{style:(0,n.Z)({},tF[tY].offset(tJ),tF[tY].leap(tQ))},ownerState:(0,n.Z)({},tI,null==er?void 0:er.ownerState),className:t2.track}),eh=(0,u.y)({elementType:t9,getSlotProps:tV,externalSlotProps:ea,ownerState:(0,n.Z)({},tI,null==ea?void 0:ea.ownerState),className:t2.thumb}),ec=(0,u.y)({elementType:t8,externalSlotProps:ei,ownerState:(0,n.Z)({},tI,null==ei?void 0:ei.ownerState),className:t2.valueLabel}),ev=(0,u.y)({elementType:t3,externalSlotProps:en,ownerState:tI,className:t2.mark}),ef=(0,u.y)({elementType:t6,externalSlotProps:eo,ownerState:tI,className:t2.markLabel}),em=(0,u.y)({elementType:t7,getSlotProps:tq,externalSlotProps:el,ownerState:tI});return(0,T.jsxs)(t1,(0,n.Z)({},ed,{children:[(0,T.jsx)(t5,(0,n.Z)({},eu)),(0,T.jsx)(t4,(0,n.Z)({},es)),tU.filter(t=>t.value>=tA&&t.value<=t_).map((t,e)=>{let r;let a=(t.value-tA)*100/(t_-tA),i=tF[tY].offset(a);return r=!1===tR?-1!==tG.indexOf(t.value):"normal"===tR&&(tH?t.value>=tG[0]&&t.value<=tG[tG.length-1]:t.value<=tG[0])||"inverted"===tR&&(tH?t.value<=tG[0]||t.value>=tG[tG.length-1]:t.value>=tG[0]),(0,T.jsxs)(o.Fragment,{children:[(0,T.jsx)(t3,(0,n.Z)({"data-index":e},ev,!(0,s.X)(t3)&&{markActive:r},{style:(0,n.Z)({},i,ev.style),className:(0,l.Z)(ev.className,r&&t2.markActive)})),null!=t.label?(0,T.jsx)(t6,(0,n.Z)({"aria-hidden":!0,"data-index":e},ef,!(0,s.X)(t6)&&{markLabelActive:r},{style:(0,n.Z)({},i,ef.style),className:(0,l.Z)(t2.markLabel,ef.className,r&&t2.markLabelActive),children:t.label})):null]},e)}),tG.map((t,e)=>{let r=(t-tA)*100/(t_-tA),a=tF[tY].offset(r),i="off"===t$?U:t8;return(0,T.jsx)(i,(0,n.Z)({},!(0,s.X)(i)&&{valueLabelFormat:tN,valueLabelDisplay:t$,value:"function"==typeof tN?tN(tO(t),e):tN,index:e,open:tB===e||tX===e||"on"===t$,disabled:tM},ec,{children:(0,T.jsx)(t9,(0,n.Z)({"data-index":e},eh,{className:(0,l.Z)(t2.thumb,eh.className,tX===e&&t2.active,tW===e&&t2.focusVisible),style:(0,n.Z)({},a,t0(e),eh.style),children:(0,T.jsx)(t7,(0,n.Z)({"data-index":e,"aria-label":tS?tS(e):tv,"aria-valuenow":tO(t),"aria-labelledby":tm,"aria-valuetext":tZ?tZ(tO(t),e):tf,value:tG[e]},em))}))}),e)})]}))});var J=G},99496:function(t,e,r){"use strict";r.d(e,{AR:function(){return u},mK:function(){return d}});var a=r(67294),i=(0,a.createContext)();i.Consumer;var n=i.Provider,o="opencv-react",l={wasmBinaryFile:"opencv_js.wasm",usingWasm:!0},d=function(t){var e=t.openCvVersion,r=void 0===e?"3.4.16":e,i=t.openCvPath,d=void 0===i?"":i,u=t.children,s=(0,a.useState)({loaded:!1,cv:void 0}),h=s[0],c=s[1];return(0,a.useEffect)(function(){var t;document.getElementById(o)||window.cv||(l.onRuntimeInitialized=function(){c({loaded:!0,cv:window.cv})},window.Module=l,document.body.appendChild(((t=document.createElement("script")).id=o,t.src=d||"https://docs.opencv.org/"+r+"/opencv.js",t.nonce=!0,t.defer=!0,t.async=!0,t)))},[d,r]),(0,a.createElement)(n,{value:h},u)},u=function(){return(0,a.useContext)(i)}},10556:function(t){var e,r;self,t.exports=(e={132:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bezkrovnySsim=void 0;var a=r(490),i=r(971);e.bezkrovnySsim=function(t,e,r){for(var n=r.windowSize,o=Math.ceil(t.width/n),l=Math.ceil(t.height/n),d=Array(o*l),u=0,s=0;s<t.height;s+=n)for(var h=0;h<t.width;h+=n){var c=Math.min(n,t.width-h),v=Math.min(n,t.height-s),f=i.sub(t,h,v,s,c),m=i.sub(e,h,v,s,c);d[u++]=function(t,e,r){var i=t.data,n=e.data,o=r.bitDepth,l=r.k1,d=r.k2,u=Math.pow(2,o)-1,s=Math.pow(l*u,2),h=Math.pow(d*u,2),c=a.average(i),v=a.average(n),f=a.variance(i,c),m=a.variance(n,v);return(2*c*v+s)*(2*a.covariance(i,n,c,v)+h)/((Math.pow(c,2)+Math.pow(v,2)+s)*(f+m+h))}(f,m,r)}return{data:d,width:o,height:l}}},63:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.defaults=void 0,e.defaults={windowSize:11,k1:.01,k2:.03,bitDepth:8,downsample:"original",ssim:"weber",maxSize:256,rgb2grayVersion:"integer"}},441:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.downsample=void 0;var a=r(490),i=r(971);function n(t,e,r){var a=i.imfilter(t,e,"symmetric","same");return i.skip2d(a,[0,r,a.height],[0,r,a.width])}e.downsample=function(t,e){return"original"===e.downsample?function(t,e,r){void 0===r&&(r=256);var o=Math.round(Math.min(t.width,e.height)/r);if(o>1){var l=i.ones(o);t=n(t,l=a.divide2d(l,a.sum2d(l)),o),e=n(e,l,o)}return[t,e]}(t[0],t[1],e.maxSize):t}},607:function(t,e,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=e.getOptions=void 0;var i=r(971),n=r(490),o=r(773),l=r(595),d=r(132),u=r(441),s=r(63),h=r(535),c={fast:o.ssim,original:l.originalSsim,bezkrovny:d.bezkrovnySsim,weber:h.weberSsim};function v(t){var e=a(a({},s.defaults),t);return function(t){if(Object.keys(t).forEach(function(t){if(!(t in s.defaults))throw Error('"'+t+'" is not a valid option')}),"k1"in t&&("number"!=typeof t.k1||t.k1<0))throw Error("Invalid k1 value. Default is "+s.defaults.k1);if("k2"in t&&("number"!=typeof t.k2||t.k2<0))throw Error("Invalid k2 value. Default is "+s.defaults.k2);if(!(t.ssim in c))throw Error("Invalid ssim option (use: "+Object.keys(c).join(", ")+")")}(e),e}function f(t,e,r){var a,o,l,d,s,h,f,m,p,g,b,w,y,k=(new Date).getTime(),x=(f=(o=(b=(g=function(t){var e=t[0],r=t[1],a=t[2];if(e.width!==r.width||e.height!==r.height)throw Error("Image dimensions do not match");return[e,r,a]}([t,e,v(r)]))[0],w=g[1],a="original"===(y=g[2]).rgb2grayVersion?[i.rgb2gray(b),i.rgb2gray(w),y]:[i.rgb2grayInteger(b),i.rgb2grayInteger(w),y])[0],l=a[1],d=a[2],h=[(s=u.downsample([o,l],d))[0],s[1],d])[0],m=h[1],c[(p=h[2]).ssim](f,m,p));return{mssim:void 0!==x.mssim?x.mssim:n.mean2d(x),ssim_map:x,performance:(new Date).getTime()-k}}e.getOptions=v,e.ssim=f,e.default=f},490:(t,e)=>{function r(t){return a(t)/t.length}function a(t){for(var e=0,r=0;r<t.length;r++)e+=t[r];return e}function i(t){for(var e=t.data,r=0,a=0;a<e.length;a++)r+=e[a];return r}function n(t,e){for(var r=t.data,a=t.width,i=t.height,n=Array(r.length),o=0;o<r.length;o++)n[o]=r[o]+e;return{data:n,width:a,height:i}}function o(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,a=t.width,i=t.height,n=Array(r.length),o=0;o<r.length;o++)n[o]=r[o]*e;return{data:n,width:a,height:i}}(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,o=Array(r.length),l=0;l<r.length;l++)o[l]=r[l]*n[l];return{data:o,width:a,height:i}}(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.covariance=e.variance=e.mean2d=e.square2d=e.multiply2d=e.divide2d=e.subtract2d=e.add2d=e.sum2d=e.floor=e.sum=e.average=void 0,e.average=r,e.sum=a,e.floor=function(t){for(var e=Array(t.length),r=0;r<t.length;r++)e[r]=Math.floor(t[r]);return e},e.sum2d=i,e.add2d=function(t,e){return"number"==typeof e?n(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,o=Array(r.length),l=0;l<i;l++)for(var d=l*a,u=0;u<a;u++)o[d+u]=r[d+u]+n[d+u];return{data:o,width:a,height:i}}(t,e)},e.subtract2d=function(t,e){return"number"==typeof e?n(t,-e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,o=Array(r.length),l=0;l<i;l++)for(var d=l*a,u=0;u<a;u++)o[d+u]=r[d+u]-n[d+u];return{data:o,width:a,height:i}}(t,e)},e.divide2d=function(t,e){return"number"==typeof e?function(t,e){for(var r=t.data,a=t.width,i=t.height,n=Array(r.length),o=0;o<r.length;o++)n[o]=r[o]/e;return{data:n,width:a,height:i}}(t,e):function(t,e){for(var r=t.data,a=t.width,i=t.height,n=e.data,o=Array(r.length),l=0;l<r.length;l++)o[l]=r[l]/n[l];return{data:o,width:a,height:i}}(t,e)},e.multiply2d=o,e.square2d=function(t){return o(t,t)},e.mean2d=function(t){return i(t)/t.data.length},e.variance=function(t,e){void 0===e&&(e=r(t));for(var a=0,i=t.length;i--;)a+=Math.pow(t[i]-e,2);return a/t.length},e.covariance=function(t,e,a,i){void 0===a&&(a=r(t)),void 0===i&&(i=r(e));for(var n=0,o=t.length;o--;)n+=(t[o]-a)*(e[o]-i);return n/t.length}},687:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.conv2=void 0;var a=r(490),i=r(298),n=r(118),o=r(799);function l(t,e,r){var a=t.data,i=t.width,n=t.height;void 0===r&&(r="full");for(var l=i+e.width-1,d=n+e.height-1,u=o.zeros(d,l).data,h=0;h<e.height;h++)for(var c=0;c<e.width;c++){var v=e.data[h*e.width+c];if(v)for(var f=0;f<n;f++)for(var m=0;m<i;m++)u[(f+h)*l+m+c]+=a[f*i+m]*v}return s({data:u,width:l,height:d},r,n,e.height,i,e.width)}function d(t,e,r){var n=e.width,o=e.height;void 0===r&&(r="full");var l=u(t,i.ones(o,1),i.ones(1,n),r);return a.multiply2d(l,e.data[0])}function u(t,e,r,a){void 0===a&&(a="full");var i=Math.max(e.height,e.width),n=Math.max(r.height,r.width),o=l(t,e,"full");return s(l(o,r,"full"),a,t.height,i,t.width,n)}function s(t,e,r,a,i,o){if("full"===e)return t;if("same"===e){var l=Math.ceil((t.height-r)/2),d=Math.ceil((t.width-i)/2);return n.sub(t,l,r,d,i)}return n.sub(t,a-1,r-a+1,o-1,i-o+1)}e.conv2=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[2]&&t[2].data?u.apply(void 0,t):!function(t){for(var e=t.data,r=e[0],a=1;a<e.length;a++)if(e[a]!==r)return!1;return!0}(t[1])?l.apply(void 0,t):d.apply(void 0,t)}},346:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.filter2=void 0;var a=r(687);e.filter2=function(t,e,r){return void 0===r&&(r="same"),a.conv2(e,function(t){for(var e=t.data,r=t.width,a=t.height,i=Array(e.length),n=0;n<a;n++)for(var o=0;o<r;o++)i[n*r+o]=e[(a-1-n)*r+r-1-o];return{data:i,width:r,height:a}}(t),r)}},470:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.fspecial=void 0;var a=r(490);e.fspecial=function(t,e,r){void 0===e&&(e=3),void 0===r&&(r=1.5);var i=function(t,e){for(var r=t.data,a=t.width,i=t.height,n=Array(r.length),o=0;o<r.length;o++)n[o]=Math.exp(-r[o]/(2*Math.pow(e,2)));return{data:n,width:a,height:i}}(function(t){for(var e=2*t+1,r=Array(Math.pow(e,2)),a=0;a<e;a++)for(var i=0;i<e;i++)r[a*e+i]=Math.pow(a-t,2)+Math.pow(i-t,2);return{data:r,width:e,height:e}}(e=(e-1)/2),r),n=a.sum2d(i);return a.divide2d(i,n)}},521:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.imfilter=void 0;var a=r(20),i=r(389),n=r(490),o=r(346);e.imfilter=function(t,e,r,l){var d;return void 0===r&&(r="symmetric"),void 0===l&&(l="same"),t=function(t,e,r,o){if(t=i.padarray(t,n.floor([e/2,r/2]),o),0===a.mod(e,2)&&(t.data=t.data.slice(0,-t.width),t.height--),0===a.mod(r,2)){for(var l=[],d=0;d<t.data.length;d++)(d+1)%t.width!=0&&l.push(t.data[d]);t.data=l,t.width--}return t}(t,e.width,e.height,r),"same"===(d=l)&&(d="valid"),l=d,o.filter2(e,t,l)}},971:function(t,e,r){var a=this&&this.__createBinding||(Object.create?function(t,e,r,a){void 0===a&&(a=r),Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,a){void 0===a&&(a=r),t[a]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||a(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),i(r(687),e),i(r(346),e),i(r(470),e),i(r(521),e),i(r(150),e),i(r(298),e),i(r(389),e),i(r(582),e),i(r(439),e),i(r(118),e),i(r(240),e),i(r(799),e)},928:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.numbers=void 0,e.numbers=function(t,e,r){for(var a=e*t,i=Array(a),n=0;n<a;n++)i[n]=r;return{data:i,width:e,height:t}}},20:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.mod=void 0,e.mod=function(t,e){return t-e*Math.floor(t/e)}},150:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.normpdf=void 0,e.normpdf=function(t,e,r){var a=t.data,i=t.width,n=t.height;void 0===e&&(e=0),void 0===r&&(r=1);for(var o=Array(a.length),l=0;l<a.length;l++){var d=(a[l]-e)/r;o[l]=Math.exp(-Math.pow(d,2)/2)/(2.5066282746310007*r)}return{data:o,width:i,height:n}}},298:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ones=void 0;var a=r(928);e.ones=function(t,e){return void 0===e&&(e=t),a.numbers(t,e,1)}},389:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.padarray=void 0;var a=r(20);e.padarray=function(t,e,r,i){var n=e[0],o=e[1];return t.height>=n&&t.width>=o?function(t,e){for(var r=e[0],a=e[1],i=t.width+2*a,n=t.height+2*r,o=Array(i*n),l=-r;l<0;l++){for(var d=-a;d<0;d++)o[(l+r)*i+d+a]=t.data[(Math.abs(l)-1)*t.width+Math.abs(d)-1];for(d=0;d<t.width;d++)o[(l+r)*i+d+a]=t.data[(Math.abs(l)-1)*t.width+d];for(d=t.width;d<t.width+a;d++)o[(l+r)*i+d+a]=t.data[(Math.abs(l)-1)*t.width+2*t.width-d-1]}for(l=0;l<t.height;l++){for(d=-a;d<0;d++)o[(l+r)*i+d+a]=t.data[l*t.width+Math.abs(d)-1];for(d=0;d<t.width;d++)o[(l+r)*i+d+a]=t.data[l*t.width+d];for(d=t.width;d<t.width+a;d++)o[(l+r)*i+d+a]=t.data[l*t.width+2*t.width-d-1]}for(l=t.height;l<t.height+r;l++){for(d=-a;d<0;d++)o[(l+r)*i+d+a]=t.data[(2*t.height-l-1)*t.width+Math.abs(d)-1];for(d=0;d<t.width;d++)o[(l+r)*i+d+a]=t.data[(2*t.height-l-1)*t.width+d];for(d=t.width;d<t.width+a;d++)o[(l+r)*i+d+a]=t.data[(2*t.height-l-1)*t.width+2*t.width-d-1]}return{data:o,width:i,height:n}}(t,[n,o]):function(t,e){for(var r,i=(r=function(t){for(var e=t.data,r=t.width,a=t.height,i=Array(e.length),n=0;n<a;n++)for(var o=0;o<r;o++)i[n*r+o]=e[(a-1-n)*r+o];return{data:i,width:r,height:a}}(t),{data:t.data.concat(r.data),height:t.height+r.height,width:t.width}),n=t.height+2*e,o=Array(t.width*n),l=-e;l<t.height+e;l++)for(var d=0;d<t.width;d++)o[(l+e)*t.width+d]=i.data[a.mod(l,i.height)*t.width+d];return{data:o,width:t.width,height:n}}(function(t,e){for(var r=t.width+2*e,i=Array(r*t.height),n=function(t,e){for(var r=t.width+e.width,a=Array(t.height*r),i=0;i<t.height;i++){for(var n=0;n<t.width;n++)a[i*r+n]=t.data[i*t.width+n];for(n=0;n<e.width;n++)a[i*r+n+t.width]=e.data[i*e.width+n]}return{data:a,width:r,height:t.height}}(t,function(t){for(var e=t.data,r=t.width,a=t.height,i=Array(e.length),n=0;n<a;n++)for(var o=0;o<r;o++)i[n*r+o]=e[n*r+r-1-o];return{data:i,width:r,height:a}}(t)),o=0;o<t.height;o++)for(var l=-e;l<t.width+e;l++)i[o*r+l+e]=n.data[o*n.width+a.mod(l,n.width)];return{data:i,width:r,height:t.height}}(t,o),n)}},582:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.rgb2grayInteger=e.rgb2gray=void 0,e.rgb2gray=function(t){for(var e=t.data,r=t.width,a=t.height,i=new Uint8Array(r*a),n=0;n<e.length;n+=4)i[n/4]=.29894*e[n]+.58704*e[n+1]+.11402*e[n+2]+.5;return{data:Array.from(i),width:r,height:a}},e.rgb2grayInteger=function(t){for(var e=t.data,r=t.width,a=t.height,i=Array(r*a),n=0;n<e.length;n+=4)i[n/4]=77*e[n]+150*e[n+1]+29*e[n+2]+128>>8;return{data:i,width:r,height:a}}},439:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.skip2d=void 0,e.skip2d=function(t,e,r){for(var a=e[0],i=e[1],n=e[2],o=r[0],l=r[1],d=r[2],u=Math.ceil((d-o)/l),s=Math.ceil((n-a)/i),h=Array(u*s),c=0;c<s;c++)for(var v=0;v<u;v++){var f=a+c*i,m=o+v*l;h[c*u+v]=t.data[f*t.width+m]}return{data:h,width:u,height:s}}},118:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.sub=void 0,e.sub=function(t,e,r,a,i){for(var n=t.data,o=t.width,l=Array(i*r),d=0;d<r;d++)for(var u=0;u<i;u++)l[d*i+u]=n[(a+d)*o+e+u];return{data:l,width:i,height:r}}},240:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.transpose=void 0,e.transpose=function(t){for(var e=t.data,r=t.width,a=t.height,i=Array(r*a),n=0;n<a;n++)for(var o=0;o<r;o++)i[o*a+n]=e[n*r+o];return{data:i,height:r,width:a}}},799:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.zeros=void 0;var a=r(928);e.zeros=function(t,e){return void 0===e&&(e=t),a.numbers(t,e,0)}},595:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.originalSsim=void 0;var a=r(490),i=r(971);e.originalSsim=function(t,e,r){var n=i.fspecial("gaussian",r.windowSize,1.5),o=Math.pow(2,r.bitDepth)-1,l=Math.pow(r.k1*o,2),d=Math.pow(r.k2*o,2);n=a.divide2d(n,a.sum2d(n));var u=i.filter2(n,t,"valid"),s=i.filter2(n,e,"valid"),h=a.square2d(u),c=a.square2d(s),v=a.multiply2d(u,s),f=a.square2d(t),m=a.square2d(e),p=a.subtract2d(i.filter2(n,f,"valid"),h),g=a.subtract2d(i.filter2(n,m,"valid"),c),b=a.subtract2d(i.filter2(n,a.multiply2d(t,e),"valid"),v);if(l>0&&d>0){var w=a.add2d(a.multiply2d(v,2),l),y=a.add2d(a.multiply2d(b,2),d),k=a.add2d(a.add2d(h,c),l),x=a.add2d(a.add2d(p,g),d);return a.divide2d(a.multiply2d(w,y),a.multiply2d(k,x))}var M=a.multiply2d(v,2),S=a.multiply2d(b,2),Z=a.add2d(h,c),P=a.add2d(p,g);return a.divide2d(a.multiply2d(M,S),a.multiply2d(Z,P))}},773:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ssim=void 0;var a=r(490),i=r(971);e.ssim=function(t,e,r){var n,o,l,d,u,s,h,c,v=i.normpdf(function(t){for(var e=Math.floor(t/2),r=Array(2*e+1),a=-e;a<=e;a++)r[a+e]=Math.abs(a);return{data:r,width:r.length,height:1}}(r.windowSize),0,1.5),f=Math.pow(2,r.bitDepth)-1,m=Math.pow(r.k1*f,2),p=Math.pow(r.k2*f,2);v=a.divide2d(v,a.sum2d(v));var g=i.transpose(v),b=i.conv2(t,v,g,"valid"),w=i.conv2(e,v,g,"valid"),y=a.square2d(b),k=a.square2d(w),x=a.multiply2d(b,w),M=a.square2d(t),S=a.square2d(e),Z=a.subtract2d(i.conv2(M,v,g,"valid"),y),P=a.subtract2d(i.conv2(S,v,g,"valid"),k),_=a.subtract2d(i.conv2(a.multiply2d(t,e),v,g,"valid"),x);return m>0&&p>0?(n=a.add2d(a.multiply2d(x,2),m),o=a.add2d(a.multiply2d(_,2),p),l=a.add2d(a.add2d(y,k),m),d=a.add2d(a.add2d(Z,P),p),a.divide2d(a.multiply2d(n,o),a.multiply2d(l,d))):(u=a.multiply2d(x,2),s=a.multiply2d(_,2),h=a.add2d(y,k),c=a.add2d(Z,P),a.divide2d(a.multiply2d(u,s),a.multiply2d(h,c)))}},535:function(t,e){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,r=1,a=arguments.length;r<a;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function a(t,e,r,a){return{rightEdge:r[e*a+t+1],bottomEdge:r[(e+1)*a+t],bottomRightEdge:r[(e+1)*a+t+1]}}function i(t,e){for(var r=t.width,i=t.height,n=t.data,o=r+1,l=i+1,d=new Int32Array(o*l),u=i-1;u>=0;--u)for(var s=r-1;s>=0;--s){var h=a(s,u,d,o),c=h.rightEdge,v=h.bottomEdge,f=h.bottomRightEdge;d[u*o+s]=e(n[u*r+s],s,u)+c+v-f}return{data:d,height:l,width:o}}function n(t,e,r){for(var i=t.width,n=t.height,o=t.data,l=e.data,d=i+1,u=n+1,s=new Int32Array(d*u),h=n-1;h>=0;--h)for(var c=i-1;c>=0;--c){var v=a(c,h,s,d),f=v.rightEdge,m=v.bottomEdge,p=v.bottomRightEdge,g=h*i+c;s[h*d+c]=r(o[g],l[g],c,h)+f+m-p}return{data:s,height:u,width:d}}function o(t,e,r){for(var a=t.width,i=t.height,n=t.data,o=a-1,l=i-1,d=o-e+1,u=l-e+1,s=new Int32Array(d*u),h=0;h<l;++h)for(var c=0;c<o;++c)if(c<d&&h<u){var v=n[a*h+c]-n[a*h+c+e]-n[a*(h+e)+c]+n[a*(h+e)+c+e];s[h*d+c]=v/r}return{height:u,width:d,data:s}}function l(t,e){return o(i(t,function(t){return t}),e,1)}function d(t,e,r){for(var a=r*r,n=o(i(t,function(t){return t*t}),r,1),l=0;l<e.data.length;++l){var d=e.data[l]/a,u=n.data[l]/a,s=d*d;n.data[l]=1024*(u-s)}return n}function u(t,e,r,a,i){for(var l=i*i,d=o(n(t,e,function(t,e){return t*e}),i,1),u=0;u<r.data.length;++u)d.data[u]=1024*(d.data[u]/l-r.data[u]/l*(a.data[u]/l));return d}Object.defineProperty(e,"__esModule",{value:!0}),e.weberSsim=e.windowCovariance=e.windowVariance=e.windowSums=e.windowMatrix=e.partialSumMatrix2=e.partialSumMatrix1=void 0,e.partialSumMatrix1=i,e.partialSumMatrix2=n,e.windowMatrix=o,e.windowSums=l,e.windowVariance=d,e.windowCovariance=u,e.weberSsim=function(t,e,a){for(var i=a.bitDepth,n=a.k1,o=a.k2,s=a.windowSize,h=Math.pow(2,i)-1,c=n*h*(n*h),v=o*h*(o*h),f=s*s,m=r(r({},t),{data:Int32Array.from(t.data,function(t){return t+.5})}),p=r(r({},e),{data:Int32Array.from(e.data,function(t){return t+.5})}),g=l(m,s),b=d(m,g,s),w=l(p,s),y=d(p,w,s),k=u(m,p,g,w,s),x=g.data.length,M=0,S=Array(x),Z=0;Z<x;++Z){var P=g.data[Z]/f,_=w.data[Z]/f,A=b.data[Z]/1024,j=y.data[Z]/1024,z=(2*P*_+c)*(k.data[Z]/1024*2+v)/(P*P+_*_+c)/(A+j+v);S[Z]=z,0==Z?M=z:M+=(z-M)/(Z+1)}return{data:S,width:g.width,height:g.height,mssim:M}}}},r={},function t(a){if(r[a])return r[a].exports;var i=r[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}(607))}}]);