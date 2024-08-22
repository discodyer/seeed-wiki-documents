"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[93035],{15680:(e,t,s)=>{s.d(t,{xA:()=>u,yg:()=>g});var r=s(96540);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,o=function(e,t){if(null==e)return{};var s,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)s=a[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):n(n({},t),e)),s},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(s),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return s?r.createElement(g,n(n({ref:t},u),{},{components:s})):r.createElement(g,n({ref:t},u))}));function g(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=s.length,n=new Array(a);n[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,n[1]=i;for(var p=2;p<a;p++)n[p]=s[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},94174:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=s(58168),o=(s(96540),s(15680));const a={description:"Learn how to set up and configure Home Assistant on a reComputer R1000",title:"reComputer R1000 with Home Assistant",keywords:["Home Assistant","reComputer R1000","Home Automation","Bookworm"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/recomputer_r1000_home_automation",last_update:{date:"08/02/2024",author:"Kasun Thushara"}},n=void 0,i={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Home-Assistant/recomputer-r1000-home-assistant",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Home-Assistant/recomputer-r1000-home-assistant",title:"reComputer R1000 with Home Assistant",description:"Learn how to set up and configure Home Assistant on a reComputer R1000",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Home-Assistant/recomputer-r1000-home-assistant.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Home-Assistant",slug:"/recomputer_r1000_home_automation",permalink:"/recomputer_r1000_home_automation",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/Home-Assistant/recomputer-r1000-home-assistant.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1722556800,formattedLastUpdatedAt:"Aug 2, 2024",frontMatter:{description:"Learn how to set up and configure Home Assistant on a reComputer R1000",title:"reComputer R1000 with Home Assistant",keywords:["Home Assistant","reComputer R1000","Home Automation","Bookworm"],image:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",slug:"/recomputer_r1000_home_automation",last_update:{date:"08/02/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Build balenaOS for reComputer R1000",permalink:"/build_balenaOS_for_reComputer_r1000"},next:{title:"reComputer R1000 and Modbus with Home Assistant",permalink:"/recomputer_r1000_home_assistant_modbus"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Why Home Assistant Supervised?",id:"why-home-assistant-supervised",level:2},{value:"Home Assistant Supervised Installation - Bookworm",id:"home-assistant-supervised-installation---bookworm",level:2},{value:"Step 1: Update and Install Dependencies",id:"step-1-update-and-install-dependencies",level:4},{value:"Step 2: Start and Enable Network Manager",id:"step-2-start-and-enable-network-manager",level:4},{value:"Step 3: Modify Boot Parameters",id:"step-3-modify-boot-parameters",level:4},{value:"Step 4: Install Docker",id:"step-4-install-docker",level:4},{value:"Step 5: Install OS Agent",id:"step-5-install-os-agent",level:4},{value:"Step 6: Install Home Assistant Supervised",id:"step-6-install-home-assistant-supervised",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...s}=e;return(0,o.yg)(d,(0,r.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"The reComputer r1000, designed for Building Automation Systems, features multiple isolated RS485 channels that support both high and low-speed communication. It is compatible with BACnet, Modbus RTU, and Modbus TCP/IP protocols, making it versatile for various automation needs. This guide provides a concise introduction to installing Home Assistant on the reComputer r1000, enabling seamless integration and control of your smart home devices."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png",style:{width:400}})),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/"},"Home Assistant")," is a free and open-source software for home automation, serving as a central control system or smart home hub for various devices. Designed with local control in mind, it ensures your Building Management System (BMS) operates independently of remote servers or internet connections, enhancing security and reliability. This means your BMS can run 24/7 without the vulnerabilities associated with cloud-connected devices, providing a robust and secure automation solution."),(0,o.yg)("h2",{id:"getting-start"},"Getting Start"),(0,o.yg)("p",null,"Before you start this project, you may need to prepare your hardware in advance as described here."),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{class:"table-nobg"},(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"During the HA installation process, we tested using wireless connectivity.")),(0,o.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("p",null,"The reComputer comes with a pre-installed Bookworm 64 bit version. This guide covers the steps for ",(0,o.yg)("strong",{parentName:"p"},"installing Home Assistant Supervised")," on that system."),(0,o.yg)("h2",{id:"why-home-assistant-supervised"},"Why Home Assistant Supervised?"),(0,o.yg)("p",null,"There are a few methods to install Home Assistant on your reComputer. You can opt for a full installation of Home Assistant, or if you plan to run Home Assistant alongside other applications on top of your operating system, the supervised method is ideal. Another option is to use Docker, but this requires setting up separate Docker containers as add-ons. This guide focuses on the more complex installation process of the ",(0,o.yg)("strong",{parentName:"p"},"Supervised method"),". Don't worry\u2014we'll walk you through it step by step."),(0,o.yg)("h2",{id:"home-assistant-supervised-installation---bookworm"},"Home Assistant Supervised Installation - Bookworm"),(0,o.yg)("h4",{id:"step-1-update-and-install-dependencies"},"Step 1: Update and Install Dependencies"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved\n")),(0,o.yg)("h4",{id:"step-2-start-and-enable-network-manager"},"Step 2: Start and Enable Network Manager"),(0,o.yg)("p",null,"Check the status of Network Manager"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status NetworkManager.service\n")),(0,o.yg)("p",null,"NetworkManager does not start, start and enable"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start NetworkManager\nsudo systemctl enable NetworkManager\n")),(0,o.yg)("h4",{id:"step-3-modify-boot-parameters"},"Step 3: Modify Boot Parameters"),(0,o.yg)("p",null,"Edit the ",(0,o.yg)("inlineCode",{parentName:"p"},"cmdline.txt")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo nano /boot/firmware/cmdline.txt\n")),(0,o.yg)("p",null,"Add the following at the end of the line:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"systemd.unified_cgroup_hierarchy=false lsm=apparmor\n")),(0,o.yg)("p",null,"Reboot the system:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo reboot\n")),(0,o.yg)("h4",{id:"step-4-install-docker"},"Step 4: Install Docker"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sudo curl -fsSL get.docker.com | sh\nsudo gpasswd -a $USER docker\nnewgrp docker\n")),(0,o.yg)("h4",{id:"step-5-install-os-agent"},"Step 5: Install OS Agent"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb\nsudo dpkg -i os-agent_1.6.0_linux_aarch64.deb\n")),(0,o.yg)("h4",{id:"step-6-install-home-assistant-supervised"},"Step 6: Install Home Assistant Supervised"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb\nsudo dpkg -i homeassistant-supervised.deb\n")),(0,o.yg)("p",null,"Upon successful correction, a blue screen will appear, allowing you to select ",(0,o.yg)("strong",{parentName:"p"},"Raspberry Pi4 64")," model."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png",style:{width:600}})),(0,o.yg)("p",null,"After a few minutes, the installation will begin."),(0,o.yg)("p",null,"You can then view the Home Assistant Dashboard UI on a web browser using ",(0,o.yg)("inlineCode",{parentName:"p"},"<your_recomputer_ip>:8123"),"."),(0,o.yg)("p",null,"It will take some time to finish the initial startup process. Once it has finished starting up, create an account and follow the initial setup instructions"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Home-Assistant/13.png",style:{width:600}})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If there are warnings in notifications, please reboot the reComputer.")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);