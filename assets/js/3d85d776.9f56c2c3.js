"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15171],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var o=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||n;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(96540),i=r(20053);const n={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:r,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,a),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>_});var o=r(9668),i=r(96540),n=r(20053),a=r(23104),l=r(56347),s=r(57485),u=r(31682),c=r(89466);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:i}}=e;return{value:t,label:r,attributes:o,default:i}}))}function d(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const o=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(o.location.search);t.set(n,e),o.replace({...o.location,search:t.toString()})}),[n,o])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,n=d(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:n}))),[s,u]=m({queryString:r,groupId:o}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,n]=(0,c.Dv)(r);return[o,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:o}),y=(()=>{const e=s??p;return h({value:e,tabValues:n})?e:null})();(0,i.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var y=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),o=u[r].value;o!==l&&(p(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:a}=e;return i.createElement("li",(0,o.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},a,{className:(0,n.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":l===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:o}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=g(e);return i.createElement("div",{className:(0,n.A)("tabs-container",f.tabList)},i.createElement(w,(0,o.A)({},e,t)),i.createElement(b,(0,o.A)({},e,t)))}function _(e){const t=(0,y.A)();return i.createElement(v,(0,o.A)({key:String(t)},e))}},76804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=r(9668),i=(r(96540),r(15680)),n=r(11470),a=r(19365);const l={description:"This wiki demonstrates pose estimation using YOLOv8 on reComputer R1000 with Raspberry-pi-AI-kit Acceleration.",title:"YOLOv8 Pose estimation on reComputer R1000 with Hailo-8L",keywords:["Edge","reComputer r1000","Object detecton"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",last_update:{date:"06/26/2024",author:"Jiahao"},no_comments:!1},s="YOLOv8 Pose Estimation on reComputer R1000 with Hailo-8L",u={unversionedId:"Edge/Raspberry_Pi_Devices/Raspberry_Pi_with_AI/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",id:"Edge/Raspberry_Pi_Devices/Raspberry_Pi_with_AI/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",title:"YOLOv8 Pose estimation on reComputer R1000 with Hailo-8L",description:"This wiki demonstrates pose estimation using YOLOv8 on reComputer R1000 with Raspberry-pi-AI-kit Acceleration.",source:"@site/docs/Edge/Raspberry_Pi_Devices/Raspberry_Pi_with_AI/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l.md",sourceDirName:"Edge/Raspberry_Pi_Devices/Raspberry_Pi_with_AI",slug:"/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",permalink:"/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/Raspberry_Pi_with_AI/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l.md",tags:[],version:"current",lastUpdatedBy:"Jiahao",lastUpdatedAt:171936e4,formattedLastUpdatedAt:"Jun 26, 2024",frontMatter:{description:"This wiki demonstrates pose estimation using YOLOv8 on reComputer R1000 with Raspberry-pi-AI-kit Acceleration.",title:"YOLOv8 Pose estimation on reComputer R1000 with Hailo-8L",keywords:["Edge","reComputer r1000","Object detecton"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l",last_update:{date:"06/26/2024",author:"Jiahao"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"YOLOv8 Object Detection on reComputer R1000 with Hailo-8L",permalink:"/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l"},next:{title:"NVIDIA\xae Jetson\u2122 Powered Edge AI Devices Guide",permalink:"/NVIDIA_Jetson"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prepare Hardware",id:"prepare-hardware",level:2},{value:"Run this project",id:"run-this-project",level:2},{value:"Step 1: Install AI kit",id:"step-1-install-ai-kit",level:3},{value:"Step 2: Update system &amp; Set pcie to gen3",id:"step-2-update-system--set-pcie-to-gen3",level:3},{value:"Updata system",id:"updata-system",level:4},{value:"Set pcie to gen3",id:"set-pcie-to-gen3",level:4},{value:"Step 3: Install Hailo Software &amp; Verify Installation",id:"step-3-install-hailo-software--verify-installation",level:3},{value:"Install Hailo Software",id:"install-hailo-software",level:4},{value:"Check Software and Hardware",id:"check-software-and-hardware",level:4},{value:"Run YOLOv8",id:"run-yolov8",level:3},{value:"Result",id:"result",level:3},{value:"Run YOLOv8",id:"run-yolov8-1",level:3},{value:"Result",id:"result-1",level:3},{value:"Result",id:"result-2",level:2},{value:"Project Outlook",id:"project-outlook",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(h,(0,o.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"yolov8-pose-estimation-on-recomputer-r1000-with-hailo-8l"},"YOLOv8 Pose Estimation on reComputer R1000 with Hailo-8L"),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/ultralytics/ultralytics"},"YOLOv8")," (You Only Look Once version 8) is the popular most YOLO series of real-time pose estimation models. It builds upon the strengths of its predecessors by introducing several advancements in speed, accuracy, and flexibility. The ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html"},"Raspberry-pi-AI-kit")," is used to accelerate inference speed, featuring a 13 tera-operations per second (TOPS) neural network inference accelerator built around the Hailo-8L chip."),(0,i.yg)("p",null,"This wiki demonstrates pose estimation using YOLOv8 on ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html"},"reComputer R1000")," with and without Raspberry-pi-AI-kit acceleration. The Raspberry Pi AI Kit enhances the performance of the Raspberry Pi and unlock its potential in artificial intelligence and machine learning applications, like smart retail, smart traffic and more. Although the Raspberry AI Kit is designed for Raspberry Pi 5, we have experimented it on our CM4-powered edge gateway. Excited about turning our edge device into an intelligent IoT gateway!"),(0,i.yg)("h2",{id:"prepare-hardware"},"Prepare Hardware"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{align:"center"},(0,i.yg)("tr",null,(0,i.yg)("th",null,"reComputer r1000"),(0,i.yg)("th",null,"Raspberry Pi AI Kit")),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg",style:{width:600,height:"auto"}}))),(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg",style:{width:600,height:"auto"}})))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h2",{id:"run-this-project"},"Run this project"),(0,i.yg)(n.A,{mdxType:"Tabs"},(0,i.yg)(a.A,{value:"Method 1",label:"Run with Hailo-8L",mdxType:"TabItem"},(0,i.yg)("h3",{id:"step-1-install-ai-kit"},"Step 1: Install AI kit"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"step-2-update-system--set-pcie-to-gen3"},"Step 2: Update system & Set pcie to gen3"),(0,i.yg)("h4",{id:"updata-system"},"Updata system"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to update your system."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo apt update\nsudo apt full-upgrade\n")),(0,i.yg)("h4",{id:"set-pcie-to-gen3"},"Set pcie to gen3"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to config reCompuer R1000."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo raspi-config\n")),(0,i.yg)("p",null,'Select option "6 Advanced Options"'),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,'Then select option "A8 PCIe Speed"'),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,'Choose "Yes" to enable PCIe Gen 3 mode'),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,'Click "Finish" to exit'),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"step-3-install-hailo-software--verify-installation"},"Step 3: Install Hailo Software & Verify Installation"),(0,i.yg)("h4",{id:"install-hailo-software"},"Install Hailo Software"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to install Hailo software."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo apt install hailo-all\nsudo reboot\n")),(0,i.yg)("h4",{id:"check-software-and-hardware"},"Check Software and Hardware"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to check if hailo-all have been installed."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hailortcli fw-control identify\n")),(0,i.yg)("p",null,"The right result show as bellow:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to check if hailo-8L have been connected."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"lspci | grep Hailo\n")),(0,i.yg)("p",null,"The right result show as bellow:"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png",alt:"pir",width:1e3,height:"auto"})),(0,i.yg)("h3",{id:"run-yolov8"},"Run YOLOv8"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to run YOLOv8."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git\ncd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L\nbash ./run.sh pose-estimation-hailo\n")),(0,i.yg)("h3",{id:"result"},"Result"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif",alt:"pir",width:1e3,height:"auto"}))),(0,i.yg)(a.A,{value:"Method 2",label:"Run without Hailo-8L",mdxType:"TabItem"},(0,i.yg)("h3",{id:"run-yolov8-1"},"Run YOLOv8"),(0,i.yg)("p",null,"Open terminal on the reCompuer R1000, and input command as follows to run YOLOv8."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git\ncd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L\nbash ./run.sh pose-estimation\n")),(0,i.yg)("h3",{id:"result-1"},"Result"),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-without-AIkit.gif",alt:"pir",width:1e3,height:"auto"})))),(0,i.yg)("h2",{id:"result-2"},"Result"),(0,i.yg)("p",null,"We compared the inference speed of YOLOv8 for pose estimation with input 640*640 resolution before and after acceleration using the AI kit. The results show that prior to acceleration, the inference speed was only 0.5 FPS, whereas after acceleration, it reached 27 FPS."),(0,i.yg)("div",{align:"center"},(0,i.yg)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/OwIrMppQzUU",title:"Raspberry Pi AI: YOLOv8 Pose Estimation on reComputer R1000(CM4-powered Edge Gateway) with Hailo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})),(0,i.yg)("h2",{id:"project-outlook"},"Project Outlook"),(0,i.yg)("p",null,"In this project, we benchmark the running speed of YOLOv8 on pose estimation with and without AI kit. The result shows that the AI kit can greatly improve the performance of the edge device. And in the future, we will benchmark the running speed of YOLOv8 in different scenarios."),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);