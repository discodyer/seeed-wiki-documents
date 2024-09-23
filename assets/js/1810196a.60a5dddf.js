"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81530],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=i,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(9668),i=(n(96540),n(15680));const r={description:"This article introduces how to use Gapi on NVIDIA Jetson devices, an embeddable API gateway designed to rapidly transform the achievements of the Jetson AI Lab into real-world applications through a low-code workflow engine and microservice framework.",title:"Getting Started with Gapi",tags:["AI model optimize"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/gapi_getting_started-with_jetson",last_update:{date:"09/20/2024",author:"Youjiang"}},a="Getting Started with Gapi on NVIDIA\xae Jetson Devices",s={unversionedId:"Edge/NVIDIA_Jetson/Application/Developer_Tools/Gapi-Jetson-Getting-Started",id:"Edge/NVIDIA_Jetson/Application/Developer_Tools/Gapi-Jetson-Getting-Started",title:"Getting Started with Gapi",description:"This article introduces how to use Gapi on NVIDIA Jetson devices, an embeddable API gateway designed to rapidly transform the achievements of the Jetson AI Lab into real-world applications through a low-code workflow engine and microservice framework.",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Developer_Tools/Gapi-Jetson-Getting-Started.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Developer_Tools",slug:"/gapi_getting_started-with_jetson",permalink:"/gapi_getting_started-with_jetson",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Developer_Tools/Gapi-Jetson-Getting-Started.md",tags:[{label:"AI model optimize",permalink:"/tags/ai-model-optimize"}],version:"current",lastUpdatedBy:"Youjiang",lastUpdatedAt:1726790400,formattedLastUpdatedAt:"Sep 20, 2024",frontMatter:{description:"This article introduces how to use Gapi on NVIDIA Jetson devices, an embeddable API gateway designed to rapidly transform the achievements of the Jetson AI Lab into real-world applications through a low-code workflow engine and microservice framework.",title:"Getting Started with Gapi",tags:["AI model optimize"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/gapi_getting_started-with_jetson",last_update:{date:"09/20/2024",author:"Youjiang"}},sidebar:"ProductSidebar",previous:{title:"OTA Update NVIDIA Jetson Using Allxon",permalink:"/Update-Jetson-Linux-OTA-Using-Allxon"},next:{title:"Getting Started with alwaysAI",permalink:"/alwaysAI-Jetson-Getting-Started"}},l={},c=[{value:"Gapi Server",id:"gapi-server",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Install Gapi on Jetson",id:"install-gapi-on-jetson",level:2},{value:"Workflows",id:"workflows",level:2},{value:"Micro Services",id:"micro-services",level:2},{value:"Running the Community Micro Services",id:"running-the-community-micro-services",level:2},{value:"Congrats! You Can Go Through the Workflow Tips Now",id:"congrats-you-can-go-through-the-workflow-tips-now",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"getting-started-with-gapi-on-nvidia-jetson-devices"},"Getting Started with Gapi on NVIDIA\xae Jetson Devices"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://genainerds.com/#/Gapi"},"Gapi")," is an embeddable API gateway that creates streaming integrations between AI micro services and the systems that users leverage everyday."),(0,i.yg)("p",null,"The project's goal is to accelerate the speed of creating pilots and demos of Jetson AI Lab achievements into real world environments. \"On Device\" generative AI doesn't mean it has to live on an island!"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/GapiGIF.gif"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Workflow engine with low code UI with dozens of open integrations and customizable clients for mobile web and desktop."),(0,i.yg)("li",{parentName:"ul"},"Micro service framework for wrapping Jetson containers (Ollama, Whisper, Piper TTS, etc. are done, with more coming). Or wrap your own models/code and integrate it into Workflows."),(0,i.yg)("li",{parentName:"ul"},"Real-time, hybrid, binary+json messaging smoothens intra-service calls and reduced latency."),(0,i.yg)("li",{parentName:"ul"},"A fast path to proving generative AI value to stakeholders in their actual environment.")),(0,i.yg)("h2",{id:"gapi-server"},"Gapi Server"),(0,i.yg)("p",null,"Embeddable API gateway software that runs in the background with a low code workflow UI for testing. The server is a message hub and state machine for workflow 'nodes' that talk to Micro Services. Think of it as connective-tissue for applications."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/GapiDiagram3.png"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"A Micro Service is a process that runs some wrapper python scripts that integrates custom code/models into Workflows using a streaming API.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Gapi Server can run on any Jetson Orin or really any computer as the Micro Services connect outbound over secure web sockets. It doesn't use any GPU resources. There is also a little demo version to skip the Server install (but you'll still need to run your own Micro Services)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://genainerds.com/#/Gapi"},"Gapi Project Page")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/GenAI-Nerds/Gapi/"},"Gapi Github")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://genainerds.com/#/Docs"},"Gapi Docs")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://genaigapi.com/"},"Gapi Hosted Demo"))),(0,i.yg)("h2",{id:"requirements"},"Requirements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Any NVIDIA Jetson Orin"),(0,i.yg)("li",{parentName:"ul"},"Docker"),(0,i.yg)("li",{parentName:"ul"},"Sufficient Storage Space: 1.3GB")),(0,i.yg)("h2",{id:"install-gapi-on-jetson"},"Install Gapi on Jetson"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Run These Steps to install Gapi on Jetson:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'mkdir ~/gapiData && cd ~/gapiData\ncurl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip\nunzip -q gapiConfigs.zip\ndocker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"\necho "You may need to hit Enter now. Afterwards the Docker container \'gapi\' s\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Log In")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Browse in: http://","[host-device-ip]",":8090"),(0,i.yg)("li",{parentName:"ul"},"User: root"),(0,i.yg)("li",{parentName:"ul"},"Pass: !gapi2024"),(0,i.yg)("li",{parentName:"ul"},"Change password in Settings! Docs shows how to add SSL cert.")),(0,i.yg)("h2",{id:"workflows"},"Workflows"),(0,i.yg)("p",null,"Workflows visually connect the execution and flow of data between Nodes. "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/gapi-diagram-pic.png"})),(0,i.yg)("p",null,'A Transaction (or single firing) has "Rolling Input" data it accumulates as Node to Node steps each talk to Micro Services and APIs. All Nodes enjoy variables and flow control using familiar json and javascript concepts.'),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/switchproperties.png"})),(0,i.yg)("p",null,"Each Node can append or reference the rolling data in the Transaction while making decisions along the way."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/visualfeedback.png"})),(0,i.yg)("p",null,"Watch live Transactions as they start from clients, webhooks and published messages from Micro Services with visual feedback and debugging."),(0,i.yg)("h2",{id:"micro-services"},"Micro Services"),(0,i.yg)("p",null,"A Micro Service is a process that runs a wrapper python script that integrates your custom code/models so they can integrate into Gapi Workflows."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/MicroServices2.png"})),(0,i.yg)("p",null,"You can run a Micro Service wherever you like and connect it to a Gapi Server via the streaming, hybrid binary+json message protocol."),(0,i.yg)("p",null,'There are some out-of-the-box \u201cCommunity Micro Services" that we integrate, test and pack into Docker images. When you run them, they auto integrate, load NVIDIA layers correctly and offer logging to the host system.'),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/MicroServices3.png"})),(0,i.yg)("p",null,"Even better, create your own! Just implement an on_message Python handler to process requests and respond. The rest is handled for you."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/MicroServices4.png"})),(0,i.yg)("p",null,"Think of a Micro Service as a simple wrapper to some code or model you have. It works the same as any other Node inside a Workflow. When it's your Micro Service Node's turn your on_message function will be called. Your script gets the rolling Transaction data for context and you then publish your data directly back into the flow."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"800",src:"https://genainerds.com/assets/img/MicroServices1.png"})),(0,i.yg)("h2",{id:"running-the-community-micro-services"},"Running the Community Micro Services"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Requirements for Community Micro Services")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Any NVIDIA Jetson Orin"),(0,i.yg)("li",{parentName:"ol"},"Sufficient Storage Space:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Literally 4KB for your own Micro Service"),(0,i.yg)("li",{parentName:"ul"},"Anywhere from ~4GB to ~10GB for each Community Micro Service")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Steps:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Login and go to the Micro Services tab"),(0,i.yg)("li",{parentName:"ol"},"Follow the instructions in the blue box on that page to download your custom configuration"),(0,i.yg)("li",{parentName:"ol"},"Then follow the instructions below that for installing the Micro Service you want")),(0,i.yg)("h2",{id:"congrats-you-can-go-through-the-workflow-tips-now"},"Congrats! You Can Go Through the Workflow Tips Now"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"1000",src:"https://genainerds.com/assets/img/WorkflowsHome.png"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);