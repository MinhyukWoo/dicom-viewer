(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{62481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filter",function(){return n(57944)}])},57944:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var a=n(85893),l=n(99496),i=n(90629),s=n(86886),o=n(67294),r=n(21265),d=n(22430),c=n(66720),u=n(77651),m=n(46901),x=n(85739),h=n(72096),j=n(18972),Z=n(48885),p=n(13665),w=n(59994),f=n(31727),v=n(36833),P=n(74005),C=n(51233),y=n(87357),g=n(45929),S=n(72852),b=n(83321);let _=(e,t,n)=>{t.convertTo(t,e.CV_64F),e.pow(t,1/n,t),t.convertTo(t,e.CV_8U)},T=(e,t,n)=>{let a=new e.Scalar(1),l=new e.Mat(t.rows,t.cols,e.CV_64FC1,a);t.convertTo(t,e.CV_64F),e.multiply(t,l,t,n),t.convertTo(t,e.CV_8U),l.delete()},E=(e,t,n)=>{let a=t.clone(),l=new e.Scalar(255),i=new e.Scalar(1),s=new e.Scalar(0),o=new e.Mat(t.rows,t.cols,e.CV_8UC1,l),r=new e.Mat(t.rows,t.cols,e.CV_64FC1,i),d=new e.Mat(t.rows,t.cols,e.CV_8UC1,s);e.subtract(o,t,t),e.add(t,d,t),t.convertTo(t,e.CV_64F),e.multiply(t,r,t,1-n),t.convertTo(t,e.CV_8U),e.add(a,t,t),o.delete(),r.delete(),d.delete(),a.delete()},M=(e,t,n,a)=>{let l=(1-n)/(a*a-1),i=Array(a*a).fill(l),s=(1+a*a)/2;i[s]=n;let o=e.matFromArray(a,a,e.CV_64FC1,i),r=new e.Point(-1,-1);e.filter2D(t,t,e.CV_8U,o,r,0,e.BORDER_DEFAULT),o.delete()},k=(e,t)=>{e.equalizeHist(t,t)},V=(e,t,n,a)=>{let l=new e.Mat;e.equalizeHist(t,l);let i=new e.CLAHE(a,new e.Size(n,n));i.apply(t,t),l.delete(),i.delete()},N=(e,t,n,a)=>{let l=new e.Mat,i=new e.Size(n,n);e.GaussianBlur(t,l,i,0,0,e.BORDER_DEFAULT),e.addWeighted(t,1-a,l,a,0,t),l.delete()},L=(e,t,n)=>{let a=new e.Mat(t.rows,t.cols,e.CV_8U),l=e.matFromArray(1,1,e.CV_64F,[0]),i=e.matFromArray(1,1,e.CV_64F,[n]);e.randn(a,l,i),e.add(t,a,t),a.delete(),l.delete(),i.delete()};var A=n(10556),F=n.n(A);let D=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:255,l=new e.Mat,i=new e.Mat,s=new e.Mat;t.convertTo(l,e.CV_64F),n.convertTo(i,e.CV_64F),e.subtract(l,i,s),e.multiply(s,s,s);let o=Math.max(Number.EPSILON,e.mean(s)[0]);return s.delete(),l.delete(),i.delete(),20*Math.log10(a/Math.sqrt(o))},R=(e,t)=>{let n=document.getElementById(e),a=document.getElementById(t);if(!(n instanceof HTMLCanvasElement&&a instanceof HTMLCanvasElement))return NaN;{let e=n.getContext("2d"),t=a.getContext("2d"),l=null==e?void 0:e.getImageData(0,0,n.width,n.height),i=null==t?void 0:t.getImageData(0,0,a.width,a.height),{mssim:s}=l&&i?F()(l,i):{mssim:NaN};return s}},B=(e,t)=>{let n=new e.Mat;t.convertTo(n,e.CV_64F);let a=new e.Mat,l=new e.Mat;e.Sobel(n,a,e.CV_64F,1,0),e.Sobel(n,l,e.CV_64F,0,1),e.multiply(a,a,a),e.multiply(l,l,l),e.add(a,l,n),e.sqrt(n,n);let i=e.mean(n)[0];return n.delete(),a.delete(),l.delete(),console.log(i),i},I="canvas-input",U="canvas-output";function G(){let e=(0,l.AR)(),[t,n]=(0,o.useState)(9),[i,r]=(0,o.useState)(3),[d,c]=(0,o.useState)(1),[u,m]=(0,o.useState)(1),[x,h]=(0,o.useState)(1),[j,Z]=(0,o.useState)(!1),[p,w]=(0,o.useState)(!1),[f,v]=(0,o.useState)(!1),[P,A]=(0,o.useState)(!1),[F,G]=(0,o.useState)(40),[O,z]=(0,o.useState)(8),[q,H]=(0,o.useState)(3),[K,W]=(0,o.useState)(1),[X,Y]=(0,o.useState)(!1),[J,Q]=(0,o.useState)(20),[$,ee]=(0,o.useState)(0),[et,en]=(0,o.useState)(0),[ea,el]=(0,o.useState)(0);async function ei(){if(e&&e.loaded){let{cv:n}=e,a=document.querySelector("#viewer canvas");if(a){let e=await n.imread(I);n.cvtColor(e,e,n.COLOR_RGBA2GRAY,0);let a=e.clone();await _(n,e,d),await T(n,e,u),await E(n,e,x),p&&await k(n,e),f&&await V(n,e,O,F),X&&await L(n,e,J),P&&await N(n,e,q,K),j&&await M(n,e,t,i),await n.imshow(U,e),await ee(D(n,a,e)),await el(B(n,e)),await en(R(I,U)),a.delete(),e.delete()}}}return(0,o.useEffect)(()=>{ei()},[t,i,d,u,x,j,p,f,P,F,O,q,K,X,J]),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,md:2}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:!0,children:(0,a.jsxs)(C.Z,{children:[(0,a.jsxs)(y.Z,{children:["Gamma Corrected",(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:.01,min:.5,max:1.5,value:"number"==typeof d?d:1,onChange:(e,t)=>{c(t)}})]}),(0,a.jsxs)(y.Z,{children:["Black Compression",(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:.01,min:.5,max:1.5,value:"number"==typeof u?u:1,onChange:(e,t)=>{m(t)}})]}),(0,a.jsxs)(y.Z,{children:["White Compression",(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:.01,min:0,max:1,value:"number"==typeof x?x:1,onChange:(e,t)=>{h(t)}})]}),(0,a.jsxs)(y.Z,{children:["Histogram Equalization",(0,a.jsx)(S.Z,{checked:p,onChange:e=>{w(e.target.checked)}})]}),(0,a.jsxs)(y.Z,{children:["CLAHE",(0,a.jsx)(S.Z,{checked:f,onChange:e=>{v(e.target.checked)}}),f&&(0,a.jsxs)(C.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Tile Grid Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:16,value:"number"==typeof O?O:8,onChange:(e,t)=>{z(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Clip Limit"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:255,value:"number"==typeof F?F:40,onChange:(e,t)=>{G(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Noise Adjustment",(0,a.jsx)(S.Z,{checked:X,onChange:e=>{Y(e.target.checked)}}),X&&(0,a.jsx)(C.Z,{children:(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Scale"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:1,min:0,max:100,value:"number"==typeof J?J:20,onChange:(e,t)=>{Q(t)}})})]})})]}),(0,a.jsxs)(y.Z,{children:["Definition Enhancement",(0,a.jsx)(S.Z,{checked:P,onChange:e=>{A(e.target.checked)}}),P&&(0,a.jsxs)(C.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Kernel Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:2,min:3,max:15,value:"number"==typeof q?q:3,onChange:(e,t)=>{H(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Blur Weight"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:.1,min:-1,max:1,value:"number"==typeof K?K:1,onChange:(e,t)=>{W(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Sharpen Filter",(0,a.jsx)(S.Z,{checked:j,onChange:e=>{Z(e.target.checked)}}),j&&(0,a.jsxs)(C.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Median Value"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:20,value:"number"==typeof t?t:9,onChange:(e,t)=>{n(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Kerenl Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(g.ZP,{valueLabelDisplay:"auto",step:2,min:3,max:15,value:"number"==typeof i?i:3,onChange:(e,t)=>{r(t)}})})]})]})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(b.Z,{variant:"outlined",color:"error",onClick:function(){Z(!1),w(!1),v(!1),n(9),r(3),c(1),m(1),h(1),A(!1),z(8),G(40),H(3),W(1),Y(!1),Q(20)},children:"Reset"})}),(0,a.jsx)(s.ZP,{item:!0,children:(0,a.jsx)(b.Z,{variant:"contained",color:"primary",onClick:ei,children:"Apply"})})]}),(0,a.jsxs)(C.Z,{children:[(0,a.jsx)(y.Z,{children:"Score"}),(0,a.jsxs)(y.Z,{children:["- PSNR: ",$.toFixed(5)]}),(0,a.jsxs)(y.Z,{children:["- SSIM: ",et.toFixed(5)]}),(0,a.jsxs)(y.Z,{children:["- AGM: ",ea.toFixed(5)]})]})]})}),(0,a.jsx)(s.ZP,{item:!0,md:2})]})}let O=(0,r.Z)({palette:{mode:"dark"}}),z=[{field:"key",headerName:"KEY",flex:1},{field:"value",headerName:"VALUE",flex:1}];function q(){let e="CT_AXIAL_STACK",t="myToolGroup",r=(0,o.useRef)(null),[C,y]=(0,o.useState)([]),[g,S]=(0,o.useState)([]),[b,_]=(0,o.useState)(!1),[T,E]=(0,o.useState)("myRenderingEngine"),[M,k]=(0,o.useState)(),V=(0,l.AR)();async function N(e){let a=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005)),{ToolGroupManager:l,Enums:i}=a;if(M!==e){let n=l.getToolGroup(t);null==n||n.setToolActive(e,{bindings:[{mouseButton:i.MouseBindings.Primary}]}),M&&(null==n||n.setToolPassive(M)),k(e)}}return(0,o.useEffect)(()=>{async function a(){let{RenderingEngine:t,Enums:a}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),{ViewportType:l}=a,i=new t(T);if(r.current){let t=r.current,n={viewportId:e,element:t,type:l.STACK};null==i||i.enableElement(n);let a=null==i?void 0:i.getViewport(e);null==a||a.render()}}async function l(){let a=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005)),{ToolGroupManager:l,ZoomTool:i,WindowLevelTool:s,LengthTool:o,PanTool:r,utilities:d,Enums:c}=a;a.removeTool(i),a.removeTool(s),a.removeTool(o),a.removeTool(r),a.addTool(i),a.addTool(s),a.addTool(o),a.addTool(r);let u=l.createToolGroup(t);null==u||u.addTool(i.toolName),null==u||u.addTool(s.toolName),null==u||u.addTool(o.toolName),null==u||u.addTool(r.toolName),null==u||u.addViewport(e,T),null==u||u.setToolActive(s.toolName,{bindings:[{mouseButton:c.MouseBindings.Primary}]}),k(s.toolName)}(async function(){let e=await Promise.all([n.e(123),n.e(609),n.e(610),n.e(5),n.e(391),n.e(669),n.e(625)]).then(n.bind(n,51765)).then(e=>e.default).catch(()=>()=>{});await e(),await a(),await l(),S(()=>["wadouri:I0000164.dcm"])})()},[T]),(0,o.useEffect)(()=>{async function t(){let{getRenderingEngine:t}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),a=t(T),l=null==a?void 0:a.getViewport(e);l&&"setStack"in l&&await (null==l?void 0:l.setStack(g,0)),null==l||l.render();let{metaData:i}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),s=["transferSyntax","sopCommonModule","imagePixelModule","voiLutModule"].map(e=>i.get(e,g[0])).filter(e=>!!e).map(e=>Object.entries(e).map(e=>{let[t,n]=e;return{key:t,value:n}})).reduce((e,t)=>[...e,...t],[]);y(()=>s.map((e,t)=>({...e,id:t})))}g.length>0?(_(!1),t()):_(!0)},[T,g]),(0,o.useEffect)(()=>{if(V&&V.loaded){let{cv:e}=V,t=document.querySelector("#viewer canvas");if(t){t.id="canvas-input";let n=e.imread("canvas-input");e.imshow("canvas-output",n),n.delete()}}},[T,g,V]),(0,a.jsxs)(d.Z,{theme:O,children:[(0,a.jsx)(c.ZP,{}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)("input",{type:"file",accept:"*/dicom",onChange:e=>{e.preventDefault(),e.stopPropagation(),e.target.files&&function(e){async function t(){let t=await n.e(609).then(n.t.bind(n,33245,23)),a=t.wadouri.fileManager.add(e[0]);S(()=>[a])}e&&t()}(e.target.files)},style:{width:"100%"}}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:1,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{WindowLevelTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));N(e.toolName)})()},children:(0,a.jsx)(Z.Z,{children:(0,a.jsx)(p.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{PanTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));N(e.toolName)})()},children:(0,a.jsx)(Z.Z,{children:(0,a.jsx)(v.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{ZoomTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));N(e.toolName)})()},children:(0,a.jsx)(Z.Z,{children:(0,a.jsx)(P.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{LengthTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));N(e.toolName)})()},children:(0,a.jsx)(Z.Z,{children:(0,a.jsx)(f.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{getRenderingEngine:t}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),a=t(T),l=null==a?void 0:a.getViewport(e);null==l||l.resetCamera(),l&&"resetProperties"in l&&(null==l||l.resetProperties()),null==l||l.render()})()},children:(0,a.jsx)(Z.Z,{children:(0,a.jsx)(w.Z,{})})})]})}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,md:!0,children:(0,a.jsx)("div",{id:"viewer",ref:r,style:{maxWidth:"30rem",aspectRatio:1,margin:"0 auto"}})}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,md:!0,children:(0,a.jsx)("canvas",{id:"canvas-output",style:{maxWidth:"30rem",aspectRatio:1,margin:"0 auto"}})}),(0,a.jsx)(s.ZP,{item:!0,xs:3,children:(0,a.jsx)(G,{})})]}),C.length>0&&(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,md:1}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:!0,children:(0,a.jsx)(x._,{rows:C,columns:z})}),(0,a.jsx)(s.ZP,{item:!0,md:1})]}),(0,a.jsx)(u.Z,{open:b,onClose:()=>{_(!1)},children:(0,a.jsx)(m.Z,{severity:"info",children:"DICOM 파일을 업로드해주세요."})})]})]})}function H(){return(0,a.jsx)(l.mK,{onLoad:e=>{console.log("opencv loaded",e)},openCvPath:"opencv.js",children:(0,a.jsx)(q,{})})}}},function(e){e.O(0,[774,97,621,888,179],function(){return e(e.s=62481)}),_N_E=e.O()}]);