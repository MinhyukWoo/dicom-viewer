(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{62481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filter",function(){return n(207)}])},207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var a=n(85893),l=n(99496),i=n(90629),s=n(86886),o=n(67294),r=n(21265),d=n(22430),c=n(66720),u=n(77651),m=n(46901),x=n(20259),h=n(72096),j=n(18972),w=n(48885),Z=n(13665),C=n(59994),p=n(31727),v=n(36833),P=n(74005),g=n(51233),f=n(61903),y=n(87357),S=n(45929),b=n(72852),_=n(83321);let T=(e,t,n,a)=>{t.convertTo(t,e.CV_64F),e.pow(t,1/n,t),t.convertTo(t,a)},F=(e,t,n,a)=>{let l=new e.Scalar(1),i=new e.Mat(t.rows,t.cols,e.CV_64FC1,l);t.convertTo(t,e.CV_64F),e.multiply(t,i,t,n),t.convertTo(t,a),i.delete()},V=(e,t,n,a)=>{let l=t.clone(),i=new e.Scalar(255),s=new e.Scalar(1),o=new e.Scalar(0),r=new e.Mat(t.rows,t.cols,a,i),d=new e.Mat(t.rows,t.cols,e.CV_64FC1,s),c=new e.Mat(t.rows,t.cols,a,o);e.subtract(r,t,t),e.add(t,c,t),t.convertTo(t,e.CV_64F),e.multiply(t,d,t,1-n),t.convertTo(t,a),e.add(l,t,t),r.delete(),d.delete(),c.delete(),l.delete()},E=(e,t,n,a,l)=>{let i=(1-n)/(a*a-1),s=Array(a*a).fill(i),o=(1+a*a)/2-1;s[o]=n;let r=e.matFromArray(a,a,e.CV_64FC1,s),d=new e.Point(-1,-1);e.filter2D(t,t,e.CV_64F,r,d,0,e.BORDER_DEFAULT),t.convertTo(t,l),r.delete()},M=(e,t,n)=>{let a=[-4,-1,0,-1,-4,-1,2,3,2,-1,0,3,4,3,0,-1,2,3,2,-1,-4,-1,0,-1,-4];a[12]+=1;let l=e.matFromArray(5,5,e.CV_64FC1,a),i=new e.Point(-1,-1);e.filter2D(t,t,e.CV_64F,l,i,0,e.BORDER_DEFAULT),t.convertTo(t,n),l.delete()},k=(e,t,n)=>{let a=[0,0,-1,0,0,0,-1,-2,-1,0,-1,-2,16,-2,-1,0,-1,-2,-1,0,0,0,-1,0,0];a[12]+=1;let l=e.matFromArray(5,5,e.CV_64FC1,a),i=new e.Point(-1,-1);e.filter2D(t,t,e.CV_64F,l,i,0,e.BORDER_DEFAULT),t.convertTo(t,n),l.delete()},L=(e,t,n)=>{if(n===e.CV_8U)e.equalizeHist(t,t);else throw Error("Histogram Equalization은 8bit unsigned인 DICOM 영상만 적용 가능합니다.")},D=(e,t,n,a,l)=>{if(l===e.CV_8U){let l=new e.Mat;e.equalizeHist(t,l);let i=new e.CLAHE(a,new e.Size(n,n));i.apply(t,t),l.delete(),i.delete()}else throw Error("CLAHE는 8bit unsigned인 DICOM 영상만 적용 가능합니다.")},A=(e,t,n,a,l)=>{let i=new e.Mat,s=new e.Size(n,n);e.GaussianBlur(t,t,s,l,l,e.BORDER_DEFAULT),i.delete()},N=(e,t,n,a)=>{let l=new e.Mat(t.rows,t.cols,a),i=e.matFromArray(1,1,e.CV_64F,[0]),s=e.matFromArray(1,1,e.CV_64F,[n]);e.randn(l,i,s),e.add(t,l,t),l.delete(),i.delete(),s.delete()},I=(e,t,n,a,l)=>{t.convertTo(t,e.CV_64F);let i=new e.Scalar(n-.5,0,0,0),s=new e.Scalar(a-1,0,0,0),o=new e.Scalar(.5,0,0,0),r=new e.Scalar(0,0,0,0),d=new e.Scalar(255,0,0,0),c=new e.Mat(t.rows,t.cols,e.CV_64F,i),u=new e.Mat(t.rows,t.cols,e.CV_64F,s),m=new e.Mat(t.rows,t.cols,e.CV_64F,o),x=new e.Mat(t.rows,t.cols,e.CV_64F,r),h=new e.Mat(t.rows,t.cols,e.CV_64F,d);e.subtract(t,c,t),e.divide(t,u,t),e.add(t,m,t),e.multiply(t,h,t),e.max(t,x,t),e.min(t,h,t),t.convertTo(t,l),c.delete(),u.delete(),m.delete(),x.delete(),h.delete()},R=(e,t,n,a,l)=>{let i=new e.Mat;e.Laplacian(t,i,-1,n,a);let s=new e.Scalar(-1,0,0,0),o=new e.Mat(t.rows,t.cols,e.CV_32S,s);i.convertTo(i,e.CV_32S),e.multiply(i,o,i),t.convertTo(t,e.CV_32S),e.add(t,i,t),t.convertTo(t,l),i.delete(),o.delete()};var B=n(67937);let O=(e,t)=>({hasError:e,message:t});function U(e){let t=(0,l.AR)(),[i,r]=(0,o.useState)(9),[d,c]=(0,o.useState)(3),[x,h]=(0,o.useState)(1),[j,w]=(0,o.useState)(1),[Z,C]=(0,o.useState)(1),[p,v]=(0,o.useState)(!1),[P,U]=(0,o.useState)(!1),[z,G]=(0,o.useState)(!1),[H,q]=(0,o.useState)(!1),[W,K]=(0,o.useState)(40),[X,Y]=(0,o.useState)(8),[J,Q]=(0,o.useState)(3),[$,ee]=(0,o.useState)(1),[et,en]=(0,o.useState)(!1),[ea,el]=(0,o.useState)(20),[ei,es]=(0,o.useState)(0),[eo,er]=(0,o.useState)(0),[ed,ec]=(0,o.useState)(0),[eu,em]=(0,o.useState)(O(!1,"")),[ex,eh]=(0,o.useState)(0),[ej,ew]=(0,o.useState)(!1),[eZ,eC]=(0,o.useState)(0),[ep,ev]=(0,o.useState)(0),[eP,eg]=(0,o.useState)(!1),[ef,ey]=(0,o.useState)(!1),[eS,eb]=(0,o.useState)(!1),[e_,eT]=(0,o.useState)(1),[eF,eV]=(0,o.useState)(3);async function eE(){if(em(O(!1,"")),t&&t.loaded){var a,l;let{imageLoader:s,metaData:o}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),r=await s.loadImage(e.imageId),c=await o.get("imagePixelModule",e.imageId),{cv:u}=t,m=8===c.bitsStored?u.CV_8U:u.CV_16U,h="canvas-output";null===(a=document.getElementById(h))||void 0===a||a.remove();let w=document.createElement("canvas");if(w.id=h,w.setAttribute("style","max-width: 30rem;\n        margin: 0 auto;"),null===(l=document.getElementById("canvas-output-container"))||void 0===l||l.appendChild(w),r){let e=await new u.matFromArray(r.rows,r.columns,m,r.getPixelData()),t=e.clone();if(await T(u,e,x,m),await F(u,e,j,m),await V(u,e,Z,m),P)try{await L(u,e,m)}catch(e){em(O(!0,e.message))}if(z)try{await D(u,e,X,W,m)}catch(e){em(O(!0,e.message))}et&&await N(u,e,ea,m),H&&await A(u,e,J,$,ex),p?await E(u,e,i,d,m):eS?await k(u,e,m):eP?await M(u,e,m):ef&&await R(u,e,eF,e_,m);let n=e.clone();I(u,n,ej?eZ:r.windowCenter,ej?ep:r.windowWidth,m),m===u.CV_16U&&n.convertTo(n,u.CV_8U),u.cvtColor(n,n,u.COLOR_GRAY2RGB,0),await u.imshow(h,n),await es((0,B.Tr)(u,t,e)),await ec((0,B.Z5)(u,n));let a=await document.createElement("canvas");a.id="tmp-canvas",a.style.display="none",document.body.appendChild(a),I(u,t,ej?eZ:r.windowCenter,ej?ep:r.windowWidth,m),m===u.CV_16U&&t.convertTo(t,u.CV_8U),await u.imshow(a.id,t),await er((0,B.TI)(a.id,h)),a.remove(),t.delete(),e.delete(),n.delete()}}}return(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,md:2}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:!0,children:(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(y.Z,{children:["Gamma Corrected",(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:.01,min:.5,max:1.5,value:"number"==typeof x?x:1,onChange:(e,t)=>{h(t)}})]}),(0,a.jsxs)(y.Z,{children:["Black Compression",(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:.01,min:.5,max:1.5,value:"number"==typeof j?j:1,onChange:(e,t)=>{w(t)}})]}),(0,a.jsxs)(y.Z,{children:["White Compression",(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:.01,min:0,max:1,value:"number"==typeof Z?Z:1,onChange:(e,t)=>{C(t)}})]}),(0,a.jsxs)(y.Z,{children:["Histogram Equalization",(0,a.jsx)(b.Z,{checked:P,onChange:e=>{U(e.target.checked)}})]}),(0,a.jsxs)(y.Z,{children:["CLAHE",(0,a.jsx)(b.Z,{checked:z,onChange:e=>{G(e.target.checked)}}),z&&(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Tile Grid Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:16,value:"number"==typeof X?X:8,onChange:(e,t)=>{Y(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Clip Limit"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:255,value:"number"==typeof W?W:40,onChange:(e,t)=>{K(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Noise Adjustment",(0,a.jsx)(b.Z,{checked:et,onChange:e=>{en(e.target.checked)}}),et&&(0,a.jsx)(g.Z,{children:(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Scale"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:1,min:0,max:100,value:"number"==typeof ea?ea:20,onChange:(e,t)=>{el(t)}})})]})})]}),(0,a.jsxs)(y.Z,{children:["Gaussian Blur",(0,a.jsx)(b.Z,{checked:H,onChange:e=>{q(e.target.checked)}}),H&&(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Kernel Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:2,min:3,max:15,value:"number"==typeof J?J:3,onChange:(e,t)=>{Q(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Sigma"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:.1,min:0,max:3,value:"number"==typeof ex?ex:0,onChange:(e,t)=>{eh(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Sharpen Filter",(0,a.jsx)(b.Z,{checked:p,onChange:e=>{v(e.target.checked)}}),p&&(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Center Value"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:1,min:1,max:50,value:"number"==typeof i?i:9,onChange:(e,t)=>{r(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Kerenl Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:2,min:3,max:15,value:"number"==typeof d?d:3,onChange:(e,t)=>{c(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Negative LoG 5x5",(0,a.jsx)(b.Z,{checked:eS,onChange:e=>{eb(e.target.checked)}})]}),(0,a.jsxs)(y.Z,{children:["Fred 5x5 Sharpen Filter",(0,a.jsx)(b.Z,{checked:eP,onChange:e=>{eg(e.target.checked)}})]}),(0,a.jsxs)(y.Z,{children:["Laplacian Filter",(0,a.jsx)(b.Z,{checked:ef,onChange:e=>{ey(e.target.checked)}}),ef&&(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Scale"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:.01,min:-1,max:1,value:"number"==typeof e_?e_:3,onChange:(e,t)=>{eT(t)}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Kerenl Size"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(S.ZP,{valueLabelDisplay:"auto",step:2,min:3,max:15,value:"number"==typeof eF?eF:3,onChange:(e,t)=>{eV(t)}})})]})]})]}),(0,a.jsxs)(y.Z,{children:["Customize Window Leveling",(0,a.jsx)(b.Z,{checked:ej,onChange:e=>{ew(e.target.checked)}}),ej&&(0,a.jsxs)(g.Z,{children:[(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Window Center"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(f.Z,{type:"number",variant:"standard",defaultValue:eZ,onChange:e=>{eC(Number.parseFloat(e.target.value))}})})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:"- Window Width"}),(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(f.Z,{type:"number",variant:"standard",defaultValue:ep,onChange:e=>{ev(Number.parseFloat(e.target.value))}})})]})]})]}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,children:(0,a.jsx)(_.Z,{variant:"outlined",color:"error",onClick:function(){v(!1),U(!1),G(!1),r(9),c(3),h(1),w(1),C(1),q(!1),Y(8),K(40),Q(3),ee(1),en(!1),el(20),eh(0),ew(!1),eC(0),ev(0),eg(!1),ey(!1),eb(!1)},children:"Reset"})}),(0,a.jsx)(s.ZP,{item:!0,children:(0,a.jsx)(_.Z,{variant:"contained",color:"primary",onClick:eE,children:"Apply"})})]}),(0,a.jsxs)(g.Z,{children:[(0,a.jsx)(y.Z,{children:"Score"}),(0,a.jsxs)(y.Z,{children:["- PSNR: ",ei.toFixed(5)]}),(0,a.jsxs)(y.Z,{children:["- SSIM: ",eo.toFixed(5)]}),(0,a.jsxs)(y.Z,{children:["- AGM: ",ed.toFixed(5)]})]}),(0,a.jsx)(u.Z,{open:eu.hasError,onClose:()=>{em(O(!1,""))},anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,a.jsx)(m.Z,{severity:"warning",onClose:()=>{em(O(!1,""))},children:eu.message})})]})}),(0,a.jsx)(s.ZP,{item:!0,md:2})]})}let z=(0,r.Z)({palette:{mode:"dark"}}),G=[{field:"key",headerName:"KEY",flex:1},{field:"value",headerName:"VALUE",flex:1}];function H(){let e="CT_AXIAL_STACK",t="myToolGroup",r=(0,o.useRef)(null),[g,f]=(0,o.useState)([]),[y,S]=(0,o.useState)([]),[b,_]=(0,o.useState)(!1),[T,F]=(0,o.useState)("myRenderingEngine"),[V,E]=(0,o.useState)();async function M(e){let a=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005)),{ToolGroupManager:l,Enums:i}=a;if(V!==e){let n=l.getToolGroup(t);null==n||n.setToolActive(e,{bindings:[{mouseButton:i.MouseBindings.Primary}]}),V&&(null==n||n.setToolPassive(V)),E(e)}}return(0,l.AR)(),(0,o.useEffect)(()=>{async function a(){let{RenderingEngine:t,Enums:a}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),{ViewportType:l}=a,i=new t(T);if(r.current){let t=r.current,n={viewportId:e,element:t,type:l.STACK};null==i||i.enableElement(n);let a=null==i?void 0:i.getViewport(e);null==a||a.render()}}async function l(){let a=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005)),{ToolGroupManager:l,ZoomTool:i,WindowLevelTool:s,LengthTool:o,PanTool:r,utilities:d,Enums:c}=a;a.removeTool(i),a.removeTool(s),a.removeTool(o),a.removeTool(r),a.addTool(i),a.addTool(s),a.addTool(o),a.addTool(r);let u=l.createToolGroup(t);null==u||u.addTool(i.toolName),null==u||u.addTool(s.toolName),null==u||u.addTool(o.toolName),null==u||u.addTool(r.toolName),null==u||u.addViewport(e,T),null==u||u.setToolActive(s.toolName,{bindings:[{mouseButton:c.MouseBindings.Primary}]}),E(s.toolName)}(async function(){let e=await Promise.all([n.e(123),n.e(609),n.e(610),n.e(5),n.e(391),n.e(669),n.e(876),n.e(625)]).then(n.bind(n,51765)).then(e=>e.default).catch(()=>()=>{});await e(),await a(),await l(),S(()=>["wadouri:I0000164.dcm"])})()},[T]),(0,o.useEffect)(()=>{async function t(){let{getRenderingEngine:t}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),a=t(T),l=null==a?void 0:a.getViewport(e);l&&"setStack"in l&&await (null==l?void 0:l.setStack(y,0)),null==l||l.render();let{metaData:i}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),s=["transferSyntax","sopCommonModule","imagePixelModule","voiLutModule"].map(e=>i.get(e,y[0])).filter(e=>!!e).map(e=>Object.entries(e).map(e=>{let[t,n]=e;return{key:t,value:n}})).reduce((e,t)=>[...e,...t],[]);f(()=>s.map((e,t)=>({...e,id:t})))}y.length>0?(_(!1),t()):_(!0)},[T,y]),(0,a.jsxs)(d.Z,{theme:z,children:[(0,a.jsx)(c.ZP,{}),(0,a.jsxs)(i.Z,{children:[(0,a.jsx)("input",{type:"file",accept:"*/dicom",onChange:e=>{e.preventDefault(),e.stopPropagation(),e.target.files&&function(e){async function t(){let t=await n.e(609).then(n.t.bind(n,33245,23)),a=t.wadouri.fileManager.add(e[0]);S(()=>[a])}e&&t()}(e.target.files)},style:{width:"100%"}}),(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,xs:1,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{WindowLevelTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));M(e.toolName)})()},children:(0,a.jsx)(w.Z,{children:(0,a.jsx)(Z.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{PanTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));M(e.toolName)})()},children:(0,a.jsx)(w.Z,{children:(0,a.jsx)(v.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{ZoomTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));M(e.toolName)})()},children:(0,a.jsx)(w.Z,{children:(0,a.jsx)(P.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{LengthTool:e}=await Promise.all([n.e(123),n.e(610),n.e(5),n.e(42)]).then(n.bind(n,52005));M(e.toolName)})()},children:(0,a.jsx)(w.Z,{children:(0,a.jsx)(p.Z,{})})}),(0,a.jsx)(j.Z,{onClick:()=>{(async function(){let{getRenderingEngine:t}=await Promise.all([n.e(123),n.e(610),n.e(391),n.e(439)]).then(n.bind(n,47391)),a=t(T),l=null==a?void 0:a.getViewport(e);null==l||l.resetCamera(),l&&"resetProperties"in l&&(null==l||l.resetProperties()),null==l||l.render()})()},children:(0,a.jsx)(w.Z,{children:(0,a.jsx)(C.Z,{})})})]})}),(0,a.jsxs)(s.ZP,{item:!0,xs:!0,md:!0,container:!0,alignItems:"center",children:[(0,a.jsx)(s.ZP,{item:!0,xs:!0,md:!0,children:(0,a.jsx)("div",{id:"viewer",ref:r,style:{maxWidth:"30rem",aspectRatio:1,margin:"0 auto"}})}),(0,a.jsx)(s.ZP,{id:"canvas-output-container",item:!0,xs:!0,md:!0})]}),(0,a.jsx)(s.ZP,{item:!0,xs:3,children:(0,a.jsx)(U,{imageId:y[0]})})]}),g.length>0&&(0,a.jsxs)(s.ZP,{container:!0,children:[(0,a.jsx)(s.ZP,{item:!0,md:1}),(0,a.jsx)(s.ZP,{item:!0,xs:12,md:!0,children:(0,a.jsx)(x._,{rows:g,columns:G})}),(0,a.jsx)(s.ZP,{item:!0,md:1})]}),(0,a.jsx)(u.Z,{open:b,onClose:()=>{_(!1)},children:(0,a.jsx)(m.Z,{severity:"info",children:"DICOM 파일을 업로드해주세요."})})]})]})}function q(){return(0,a.jsx)(l.mK,{onLoad:e=>{console.log("opencv loaded",e)},openCvPath:"opencv.js",children:(0,a.jsx)(H,{})})}},67937:function(e,t,n){"use strict";n.d(t,{TI:function(){return s},Tr:function(){return i},Z5:function(){return o}});var a=n(10556),l=n.n(a);let i=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:255,l=new e.Mat,i=new e.Mat,s=new e.Mat;t.convertTo(l,e.CV_64F),n.convertTo(i,e.CV_64F),e.subtract(l,i,s),e.multiply(s,s,s);let o=Math.max(Number.EPSILON,e.mean(s)[0]);return s.delete(),l.delete(),i.delete(),20*Math.log10(a/Math.sqrt(o))},s=(e,t)=>{let n=document.getElementById(e),a=document.getElementById(t);if(!(n instanceof HTMLCanvasElement&&a instanceof HTMLCanvasElement))return NaN;{let e=n.getContext("2d",{willReadFrequently:!0}),t=a.getContext("2d",{willReadFrequently:!0}),i=null==e?void 0:e.getImageData(0,0,n.width,n.height),s=null==t?void 0:t.getImageData(0,0,a.width,a.height),{mssim:o}=i&&s?l()(i,s):{mssim:NaN};return o}},o=(e,t)=>{let n=new e.Mat;t.convertTo(n,e.CV_64F);let a=new e.Mat,l=new e.Mat;e.Sobel(n,a,e.CV_64F,1,0),e.Sobel(n,l,e.CV_64F,0,1),e.multiply(a,a,a),e.multiply(l,l,l),e.add(a,l,n),e.sqrt(n,n);let i=e.mean(n)[0];return n.delete(),a.delete(),l.delete(),i}}},function(e){e.O(0,[774,130,655,621,888,179],function(){return e(e.s=62481)}),_N_E=e.O()}]);