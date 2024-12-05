"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71142],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>u});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),g=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=g(n),h=o,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?i.createElement(u,a(a({ref:t},c),{},{components:n})):i.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,a[1]=r;for(var g=2;g<s;g++)a[g]=n[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var i=n(9668),o=(n(96540),n(15680));const s={description:"Introduces how to connect Grove Vision AI V2 to the SenseCAP Mate APP.",title:"Connect Grove Vision AI V2 to the SenseCAP Mate APP",keywords:["sensecap mate","grove vision ai v2"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/connect_vision_ai_v2_to_sensecap_mate",last_update:{date:"01/19/2024",author:"Citric"}},a="Connect Grove Vision AI V2 to the SenseCAP Mate APP",r={unversionedId:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-sensecap-app",id:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-sensecap-app",title:"Connect Grove Vision AI V2 to the SenseCAP Mate APP",description:"Introduces how to connect Grove Vision AI V2 to the SenseCAP Mate APP.",source:"@site/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-sensecap-app.md",sourceDirName:"Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application",slug:"/connect_vision_ai_v2_to_sensecap_mate",permalink:"/connect_vision_ai_v2_to_sensecap_mate",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/Application/grove-vision-ai-v2-sensecap-app.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1705622400,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{description:"Introduces how to connect Grove Vision AI V2 to the SenseCAP Mate APP.",title:"Connect Grove Vision AI V2 to the SenseCAP Mate APP",keywords:["sensecap mate","grove vision ai v2"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/connect_vision_ai_v2_to_sensecap_mate",last_update:{date:"01/19/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Using Grove Vision AI V2 with AT Commands",permalink:"/grove_vision_ai_v2_at"},next:{title:"Examples for Grove Vision AI V2 and XIAO ESP32",permalink:"/grove_vision_ai_v2_demo"}},l={},g=[{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Register for a SenseCAP account and software preparation",id:"register-for-a-sensecap-account-and-software-preparation",level:2},{value:"Step 1. Register for a SenseCAP account",id:"step-1-register-for-a-sensecap-account",level:3},{value:"Step 2. Download the SenseCAP Mate APP to your mobile phone.",id:"step-2-download-the-sensecap-mate-app-to-your-mobile-phone",level:3},{value:"Device Configuration in SenseCAP",id:"device-configuration-in-sensecap",level:2},{value:"Step 3. Add Device",id:"step-3-add-device",level:3},{value:"SenseCraft AI model preparation and MQTT configuration",id:"sensecraft-ai-model-preparation-and-mqtt-configuration",level:2},{value:"Step 4. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant",id:"step-4-connect-the-grove-vision-ai-v2-to-the-sensecraft-ai-model-assistant",level:3},{value:"Step 5. Upload a suitable model",id:"step-5-upload-a-suitable-model",level:3},{value:"Step 6. Configuring the network for Grove Vision AI V2 &amp; XIAO",id:"step-6-configuring-the-network-for-grove-vision-ai-v2--xiao",level:3},{value:"PaaS Side and SenseCAP Mate APP Observations",id:"paas-side-and-sensecap-mate-app-observations",level:2},{value:"Step 7. View the results on the Mate APP",id:"step-7-view-the-results-on-the-mate-app",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Network Issue",id:"q1-network-issue",level:3},{value:"Q2: Why can&#39;t I see the screen in Mate APP?",id:"q2-why-cant-i-see-the-screen-in-mate-app",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:g},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"connect-grove-vision-ai-v2-to-the-sensecap-mate-app"},"Connect Grove Vision AI V2 to the SenseCAP Mate APP"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://sensecap-mate-download.seeed.cn/"},"SenseCAP Mate APP"))," is a powerful APP for data visualization and remote device management."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Save time: provides a scan-and-play experience to enable users to complete the whole configuration in 4 steps"),(0,o.yg)("li",{parentName:"ul"},"Works for people with less or no technical background to get started with sensor data easily"),(0,o.yg)("li",{parentName:"ul"},"Acquire and view data on clean user interfaces"),(0,o.yg)("li",{parentName:"ul"},"Set time intervals: improve the battery efficiency"),(0,o.yg)("li",{parentName:"ul"},"Set threshold values: focus on the data you need to take action for"),(0,o.yg)("li",{parentName:"ul"},"Send alarms if data is out of the safe range")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://sensecraft.seeed.cc/"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Learn More \ud83d\uddb1\ufe0f"))))),(0,o.yg)("p",null,"This tutorial will guide you on how to access Grove Vision AI V2 and XIAO ESP32C3 to SenseCAP Mate APP."),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,"Before the tutorial content of this article begins, you may need to have the following hardware ready."),(0,o.yg)("h3",{id:"materials-required"},"Materials Required"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,o.yg)("th",null,"Grove Vision AI V2"),(0,o.yg)("th",null,"OV5647-62 FOV Camera Module",(0,o.yg)("br",null),"for Raspberry Pi 3B+4B")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png",style:{width:120,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg",style:{width:250,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png",style:{width:250,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("p",null,"You then need to connect the XIAO and Grove Vision AI V2 via the row of pins (or use the expansion board and Grove interface)."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif",style:{width:600,height:"auto"}})),(0,o.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("p",null,"Connect the XIAO ESP32C3 to your computer using a suitable USB-C cable. Ensure the device drivers are installed correctly."),(0,o.yg)("p",null,"Open the ",(0,o.yg)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool"},"SenseCraft Model Assistant Tool")," in your web browser. This might be a service provided by the manufacturer or a third-party tool designed for flashing ESP devices."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Then select ",(0,o.yg)("strong",{parentName:"p"},"XIAO ESP32S3")," and click ",(0,o.yg)("strong",{parentName:"p"},"Connect"),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Note that although the XIAO ESP32S3 is selected here, we are still using the XIAO ESP32C3!")),(0,o.yg)("p",null,"Click the button below to download the firmware file and click the ",(0,o.yg)("strong",{parentName:"p"},"Add File")," button on the web page to flash the ",(0,o.yg)("inlineCode",{parentName:"p"},"XIAO_C3_as_AT_module.bin")," firmware for the ",(0,o.yg)("inlineCode",{parentName:"p"},"0x0")," address."),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Download the file"))))),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Finally, click the ",(0,o.yg)("strong",{parentName:"p"},"Flash")," button and wait for the programme to be uploaded successfully before ",(0,o.yg)("strong",{parentName:"p"},"disconnecting")," the XIAO ESP32C3 from the computer."),(0,o.yg)("h2",{id:"register-for-a-sensecap-account-and-software-preparation"},"Register for a SenseCAP account and software preparation"),(0,o.yg)("h3",{id:"step-1-register-for-a-sensecap-account"},"Step 1. Register for a SenseCAP account"),(0,o.yg)("p",null,"If you are using SenseCAP for the first time, then you may need to register an account on the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://sensecap.seeed.cc"},"SenseCAP website")),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"After registering, please log in to the SenseCAP website."),(0,o.yg)("h3",{id:"step-2-download-the-sensecap-mate-app-to-your-mobile-phone"},"Step 2. Download the SenseCAP Mate APP to your mobile phone."),(0,o.yg)("p",null,"If you want to check your device's messages anytime, anywhere, you may want to consider installing the SenseCAP Mate APP, a mobile device that uses SenseCAP. By clicking the button below, you can choose to install the SenseCAP Mate APP in a way that suits you."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png",style:{width:500,height:"auto"}})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://sensecap-mate-download.seeed.cn/"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Download APP \ud83d\uddb1\ufe0f"))))),(0,o.yg)("h2",{id:"device-configuration-in-sensecap"},"Device Configuration in SenseCAP"),(0,o.yg)("h3",{id:"step-3-add-device"},"Step 3. Add Device"),(0,o.yg)("p",null,"Let's go back to the web side and start by adding a Grove Vision AI V2."),(0,o.yg)("p",null,"In the catalogue bar on the left side of the page, select ",(0,o.yg)("strong",{parentName:"p"},"Development Kit")," and click the ",(0,o.yg)("strong",{parentName:"p"},"Create Development Kit")," button in the middle."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Please name your device and select the device as ",(0,o.yg)("strong",{parentName:"p"},"Grove - Vision AI V2")," and click on the ",(0,o.yg)("strong",{parentName:"p"},"Confirm")," button."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png",style:{width:600,height:"auto"}})),(0,o.yg)("p",null,"After creating a new device, please click the ",(0,o.yg)("strong",{parentName:"p"},"Connect")," button on the right side of the device, and a series of pop-ups will be displayed to connect the required devices."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Please keep these credentials information, we will use them later in the network configuration."),(0,o.yg)("h2",{id:"sensecraft-ai-model-preparation-and-mqtt-configuration"},"SenseCraft AI model preparation and MQTT configuration"),(0,o.yg)("h3",{id:"step-4-connect-the-grove-vision-ai-v2-to-the-sensecraft-ai-model-assistant"},"Step 4. Connect the Grove Vision AI V2 to the SenseCraft AI Model Assistant"),(0,o.yg)("p",null,"Let's continue the steps above by clicking on the ",(0,o.yg)("strong",{parentName:"p"},"Deploy")," button in the middle of the page, at which point we will jump directly to the SenseCraft AI model deployment page."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png",style:{width:600,height:"auto"}})),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h3",{id:"step-5-upload-a-suitable-model"},"Step 5. Upload a suitable model"),(0,o.yg)("p",null,"First select ",(0,o.yg)("strong",{parentName:"p"},"Grove - Vision AI V2")," in the catalogue bar on the left, then select the model you want to use."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Once you are on the model page, you can read a detailed description of this model or deploy the model on the page. Click the ",(0,o.yg)("strong",{parentName:"p"},"Deploy Model")," button on the top right corner of the page to enter the deployment page of the model."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Connect the Grove Vision AI V2 with the XIAO ESP32C3 and camera installed to the computer via the USB-C cable."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The cable should connect the Grove Vision AI V2 to the computer, not the XIAO.")),(0,o.yg)("p",null,"Then click the ",(0,o.yg)("strong",{parentName:"p"},"Connect")," button below."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"In the new window, click ",(0,o.yg)("strong",{parentName:"p"},"Confirm")," and select the port number where the device is located. Wait for 1~2 minutes for the model to be uploaded."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"If the model flash is successful, you can see the live screen in the Preview and should also be able to see information about the model."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If there is no screen displayed in Preview or there is no information in the model information, there may be a problem with the model and you need to reselect the model or upload it again.")),(0,o.yg)("h3",{id:"step-6-configuring-the-network-for-grove-vision-ai-v2--xiao"},"Step 6. Configuring the network for Grove Vision AI V2 & XIAO"),(0,o.yg)("p",null,"Open the Model Assistant's configuration page."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Please turn on the MQTT button and enter the following information that you need to fill in the page."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"SSID & Password"),": The name and password of the network you want XIAO to connect to. XIAO only supports 2.4G WiFi, 5G network is not available.")),(0,o.yg)("p",null,"Please fill in the network configuration according to the device information of the Grove Vision AI V2 that we have added by SenseCAP in ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"#step-3-add-device"},"Step 3")),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Then click the Save button below. After saving, it ",(0,o.yg)("strong",{parentName:"p"},"does not mean that Grove Vision AI V2 has been written correctly"),", please go back to ",(0,o.yg)("strong",{parentName:"p"},"Process")," in the left menu bar and check if the IP address of the device has appeared and if the status of the MQTT connection is correct."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"When IP Address is displayed, it means there is no problem with WIFI, and Service status must be the text in the figure to represent normal, note that if WIFI is not normal, MQTT is definitely not normal; when you just switch over, it may show unconnected, and you need to wait for about 10s or so, you don't need to refresh to see the status, and it will show the newest status after the change of the status automatically.")),(0,o.yg)("p",null,"When finished, click the ",(0,o.yg)("strong",{parentName:"p"},"Stop")," button to stop reasoning, and click ",(0,o.yg)("strong",{parentName:"p"},"Disconnect")," to disconnect the serial port."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"paas-side-and-sensecap-mate-app-observations"},"PaaS Side and SenseCAP Mate APP Observations"),(0,o.yg)("h3",{id:"step-7-view-the-results-on-the-mate-app"},"Step 7. View the results on the Mate APP"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("p",null,"Now we can open our mobile and enter our account number and password to log in. The mobile will sync the PaaS device information."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Please select the correct site for which you are registered.")),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png",style:{width:400,height:"auto"}})),(0,o.yg)("p",null,"After logging in, select your newly created device."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png",style:{width:400,height:"auto"}})),(0,o.yg)("p",null,"Once you enter the device, you can observe the screen and results."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png",style:{width:400,height:"auto"}})),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("h3",{id:"q1-network-issue"},"Q1: Network Issue"),(0,o.yg)("p",null,"If you keep observing IP addresses jumping in and out of display on the Process page, then the network may be unstable. You may want to consider changing networks or replacing the antenna with a stronger one."),(0,o.yg)("h3",{id:"q2-why-cant-i-see-the-screen-in-mate-app"},"Q2: Why can't I see the screen in Mate APP?"),(0,o.yg)("p",null,"Only one of the live previews in SSCMA and the preview results in SenseCAP PaaS can be active at the same time. So keep in mind that you need to turn off the real-time screen display of inference on the Process page in SenseCraft AI."),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);