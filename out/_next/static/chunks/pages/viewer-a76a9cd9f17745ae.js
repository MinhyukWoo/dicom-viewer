(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{95922:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewer",function(){return t(73295)}])},73295:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var l=t(85893),i=t(90629),o=t(86886),a=t(67294),s=t(21265),r=t(22430),d=t(66720),c=t(77651),u=t(46901),m=t(20259),h=t(72096),f=t(18972),x=t(48885),w=t(13665),j=t(59994),p=t(31727),Z=t(36833),P=t(74005);let T=(0,s.Z)({palette:{mode:"dark"}}),y=[{field:"key",headerName:"KEY",flex:1},{field:"value",headerName:"VALUE",flex:1}];function v(){let e="CT_AXIAL_STACK",n="myToolGroup",s=(0,a.useRef)(null),[v,g]=(0,a.useState)([]),[b,N]=(0,a.useState)([]),[k,E]=(0,a.useState)(!1),[C,_]=(0,a.useState)("myRenderingEngine"),[S,A]=(0,a.useState)();async function M(e){let l=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005)),{ToolGroupManager:i,Enums:o}=l;if(S!==e){let t=i.getToolGroup(n);null==t||t.setToolActive(e,{bindings:[{mouseButton:o.MouseBindings.Primary}]}),S&&(null==t||t.setToolPassive(S)),A(e)}}return(0,a.useEffect)(()=>{async function l(){let{RenderingEngine:n,Enums:l}=await Promise.all([t.e(123),t.e(610),t.e(391),t.e(42)]).then(t.bind(t,47391)),{ViewportType:i}=l,o=new n(C);if(s.current){let n=s.current,t={viewportId:e,element:n,type:i.STACK};null==o||o.enableElement(t);let l=null==o?void 0:o.getViewport(e);null==l||l.render()}}async function i(){let l=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005)),{ToolGroupManager:i,ZoomTool:o,WindowLevelTool:a,LengthTool:s,PanTool:r,utilities:d,Enums:c}=l;l.removeTool(o),l.removeTool(a),l.removeTool(s),l.removeTool(r),l.addTool(o),l.addTool(a),l.addTool(s),l.addTool(r);let u=i.createToolGroup(n);null==u||u.addTool(o.toolName),null==u||u.addTool(a.toolName),null==u||u.addTool(s.toolName),null==u||u.addTool(r.toolName),null==u||u.addViewport(e,C),null==u||u.setToolActive(a.toolName,{bindings:[{mouseButton:c.MouseBindings.Primary}]}),A(a.toolName)}(async function(){console.time("initDemo");let e=await Promise.all([t.e(123),t.e(609),t.e(610),t.e(5),t.e(391),t.e(669),t.e(876),t.e(947)]).then(t.bind(t,51765)).then(e=>e.default).catch(()=>()=>{});await e(),console.timeEnd("initDemo"),console.time("initRenderStack"),await l(),console.timeEnd("initRenderStack"),console.time("initToolGroup"),await i(),console.timeEnd("initToolGroup"),N(()=>["wadouri:I0000164.dcm"])})()},[C]),(0,a.useEffect)(()=>{async function n(){let{getRenderingEngine:n}=await Promise.all([t.e(123),t.e(610),t.e(391),t.e(42)]).then(t.bind(t,47391)),l=n(C),i=null==l?void 0:l.getViewport(e);i&&"setStack"in i&&await (null==i?void 0:i.setStack(b,0)),null==i||i.render();let{metaData:o}=await Promise.all([t.e(123),t.e(610),t.e(391),t.e(42)]).then(t.bind(t,47391)),a=["transferSyntax","sopCommonModule","imagePixelModule","voiLutModule"].map(e=>o.get(e,b[0])).filter(e=>!!e).map(e=>Object.entries(e).map(e=>{let[n,t]=e;return{key:n,value:t}})).reduce((e,n)=>[...e,...n],[]);g(()=>a.map((e,n)=>({...e,id:n})))}b.length>0?(E(!1),n()):E(!0)},[C,b]),(0,l.jsxs)(r.Z,{theme:T,children:[(0,l.jsx)(d.ZP,{}),(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("input",{type:"file",accept:"*/dicom",onChange:e=>{e.preventDefault(),e.stopPropagation(),e.target.files&&function(e){async function n(){let n=await t.e(609).then(t.t.bind(t,33245,23)),l=n.wadouri.fileManager.add(e[0]);N(()=>[l])}e&&n()}(e.target.files)}}),(0,l.jsxs)(o.ZP,{container:!0,children:[(0,l.jsx)(o.ZP,{item:!0,xs:1,children:(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(f.Z,{onClick:()=>{(async function(){let{WindowLevelTool:e}=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005));M(e.toolName)})()},children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(w.Z,{})})}),(0,l.jsx)(f.Z,{onClick:()=>{(async function(){let{PanTool:e}=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005));M(e.toolName)})()},children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(Z.Z,{})})}),(0,l.jsx)(f.Z,{onClick:()=>{(async function(){let{ZoomTool:e}=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005));M(e.toolName)})()},children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(P.Z,{})})}),(0,l.jsx)(f.Z,{onClick:()=>{(async function(){let{LengthTool:e}=await Promise.all([t.e(123),t.e(610),t.e(5),t.e(439)]).then(t.bind(t,52005));M(e.toolName)})()},children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(p.Z,{})})}),(0,l.jsx)(f.Z,{onClick:()=>{(async function(){let{getRenderingEngine:n}=await Promise.all([t.e(123),t.e(610),t.e(391),t.e(42)]).then(t.bind(t,47391)),l=n(C),i=null==l?void 0:l.getViewport(e);null==i||i.resetCamera(),i&&"resetProperties"in i&&(null==i||i.resetProperties()),null==i||i.render()})()},children:(0,l.jsx)(x.Z,{children:(0,l.jsx)(j.Z,{})})})]})}),(0,l.jsx)(o.ZP,{item:!0,xs:!0,md:!0,children:(0,l.jsx)("div",{id:"viewer",ref:s,style:{maxWidth:"40rem",aspectRatio:1,margin:"0 auto"}})})]}),v.length>0&&(0,l.jsxs)(o.ZP,{container:!0,children:[(0,l.jsx)(o.ZP,{item:!0,md:1}),(0,l.jsx)(o.ZP,{item:!0,xs:12,md:!0,children:(0,l.jsx)(m._,{rows:v,columns:y})}),(0,l.jsx)(o.ZP,{item:!0,md:1})]}),(0,l.jsx)(c.Z,{open:k,onClose:()=>{E(!1)},children:(0,l.jsx)(u.Z,{severity:"info",children:"DICOM 파일을 업로드해주세요."})})]})]})}}},function(e){e.O(0,[774,130,655,888,179],function(){return e(e.s=95922)}),_N_E=e.O()}]);