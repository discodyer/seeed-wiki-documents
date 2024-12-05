"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75703],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>h});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),y=o,h=u["".concat(l,".").concat(y)]||u[y]||g[y]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},28774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(9668),o=(a(96540),a(15680));const r={description:"Dashboard Basics",title:"Dashboard Basics",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s="Dashboard Basics",i={unversionedId:"Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics",id:"Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics",title:"Dashboard Basics",description:"Dashboard Basics",source:"@site/docs/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics.md",sourceDirName:"Cloud_Chain/SenseCAP_Dashboard",slug:"/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics",permalink:"/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Dashboard Basics",title:"Dashboard Basics",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"XIAO ESP32S3 Workspace on SenseCraft AI Platform",permalink:"/xiao_esp32s3_workspace"},next:{title:"Dashboard Registration",permalink:"/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Registration"}},l={},p=[{value:"<strong>Hotspot Details</strong>",id:"hotspot-details",level:2},{value:"<strong>Additional Hotspot Details Continued</strong>",id:"additional-hotspot-details-continued",level:2},{value:"<strong>Antenna &amp; Region Details</strong>",id:"antenna--region-details",level:2},{value:"<strong>Additional Details</strong>",id:"additional-details",level:2},{value:"<strong>Additional Network Details</strong>",id:"additional-network-details",level:2},{value:"<strong>Hotspot Hardware Details</strong>",id:"hotspot-hardware-details",level:2},{value:"<strong>Hotspot Reward Details</strong>",id:"hotspot-reward-details",level:2},{value:"<strong>Useful Links Details</strong>",id:"useful-links-details",level:2},{value:"<strong>Account Details</strong>",id:"account-details",level:2}],d={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,o.yg)(u,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"dashboard-basics"},"Dashboard Basics"),(0,o.yg)("h1",{id:"main-dashboard-screen"},(0,o.yg)("strong",{parentName:"h1"},"Main Dashboard Screen")),(0,o.yg)("p",null,"Once you\u2019ve registered your hotspot to the dashboard, you will find the following (see screenshot below)."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/sensecap-m1-dashboard.png",alt:"SenseCAP M1 Dashboard"})),(0,o.yg)("p",null,"You will quickly be able to see all status updates of the hotspot on this page. If you register more than 1 hotspot, they will be added as separate rows."),(0,o.yg)("p",null,"Simply click the hotspot name or SN to view further details explained below."),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"what-information-you-can-find"},(0,o.yg)("strong",{parentName:"h1"},"What Information You Can Find")),(0,o.yg)("p",null,"The dashboard allows you to monitor your hotspots settings, including ",(0,o.yg)("strong",{parentName:"p"},"CPU temperature, network settings"),", ",(0,o.yg)("strong",{parentName:"p"},"blockchain syncing progress, and much more"),". Below is a breakdown of what each setting represents."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note"),": The information presented inside the dashboard is updated every 5 minutes. If you update network configuration changes,\xa0 refreshing the dashboard in 5 minutes will provide updated data."),(0,o.yg)("h2",{id:"hotspot-details"},(0,o.yg)("strong",{parentName:"h2"},"Hotspot Details")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"SN"),": Your registered hotspot serial number."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Hotspot Name"),": Name of your registered hotspot on the blockchain."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Hotspot Online")," Status: Based on your hotspot."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Helium Online")," Status: Hotspot status is strictly based on helium API or ETL-API, depending on which P2P data is up-to-date."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Hotspot Address"),": The blockchain address of your hotspot. You can click the hotspot address to view your hotspot on the Helium Explorer website."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Hotspot Owner"),": Your wallet (whom the hotspot is registered to on the \u2018Helium App\u2019) You can click the hotspot owner to view details of your entire account on the Helium Explorer website."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Public IP Address:"),"\xa0Your Hotspots public IP address.")),(0,o.yg)("h2",{id:"additional-hotspot-details-continued"},(0,o.yg)("strong",{parentName:"h2"},"Additional Hotspot Details Continued")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Collection Time"),": Last the data was collected from the hotspot. -UTC7."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Added to Helium Network"),": Displays when the hotspot was registered on the Helium blockchain. -UTC7."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Production Time"),": Displays when the hotspot was manufactured. -UTC7.")),(0,o.yg)("h2",{id:"antenna--region-details"},(0,o.yg)("strong",{parentName:"h2"},"Antenna & Region Details")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Antenna"),': The gain of antenna data is from Helium APP. If you\'ve changed the antenna, you will need to complete the "Update Antenna" process in the Helium APP to show the correct gain here.'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Region"),": This region is based on the asserted location of the hotspot in the Helium APP.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'You may not see a "',(0,o.yg)("strong",{parentName:"li"},"Region"),'" until you assert a location, it may result in "Unknown".'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Coordinates"),": Displays the GPS coordinates of your Hotspots asserted location.")),(0,o.yg)("h2",{id:"additional-details"},(0,o.yg)("strong",{parentName:"h2"},"Additional Details")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Batch Name"),": Manufactured date of the hotspot."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Custom Tag"),": Any custom tag you've associated with this Hotspot.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"If you are running multiple hotspots in different locations, we\u2019ve made it easier for you to tag each hotspot and sort by tags within the dashboard. Simply add a custom tag to differentiate hotspots between different locations/hosts.")))),(0,o.yg)("h2",{id:"additional-network-details"},(0,o.yg)("strong",{parentName:"h2"},"Additional Network Details")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Wi-fi Name"),": If the hotspot is connected via Wi-Fi, it will display the Wi-Fi name here, if it is connected via Ethernet cable, it will not display anything."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Wi-Fi IP Address"),": If your Hotspot is connected with Wi-Fi, you will see your internal network's IP address here."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"LAN IP Address"),": If your Hotspot is connected with an Ethernet cable, you will see your internal network address here.")),(0,o.yg)("h2",{id:"hotspot-hardware-details"},(0,o.yg)("strong",{parentName:"h2"},"Hotspot Hardware Details")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Firmware Version"),": Current firmware version installed on your Hotspot."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Uptime"),": Uptime indicates the duration time started from last power-on time of the hotspot, which will be updated when there is internet connection. If we cannot detect a status within 30 mins, the uptime would show ",(0,o.yg)("strong",{parentName:"li"},"NONE"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"CPU ID:")," The CPU ID # of your hotspots CPU.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The CPU ID will be required to enter when you wish to ",(0,o.yg)("strong",{parentName:"li"},"TurboSync")," your device. You may click the icon to the right of the CPU ID to copy."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"CPU Temperature"),": Current running temperature of your CPU."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Fan Status"),": Displays if the fan is running with date + timestamp of the last status when it was ON or OFF.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The fan will automatically turn on when the CPU temperature is above 70\u2103, and will not turn off until it is cooled down to 45\u2103."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"CPU Usage"),": Displays the current usage of the CPU in % units."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Memory Usage"),": Displays the current memory usage in % units."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Note"),": Depending on the model you purchase, you may see different memory details.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"1900 MB = 2GB Raspberry Pi"),(0,o.yg)("li",{parentName:"ul"},"3845 MB = 4GB Raspberry Pi"),(0,o.yg)("li",{parentName:"ul"},"7690 MB = 8GB Raspberry Pi"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"SD Usage"),": Displays the current SD Card memory usage.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"58776 MB = 64GB SD card")))),(0,o.yg)("h2",{id:"hotspot-reward-details"},(0,o.yg)("strong",{parentName:"h2"},"Hotspot Reward Details")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Hotspot Rewards"),": Displays your HNT rewards."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Last 24H"),": What your last 24-hour reward was (rolling 24H window)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Last 7D"),": What your last 7-day reward was (rolling 7D window)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Last 30D:")," What your last 30-day reward was (rolling 30D window)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Total"),": Displays total HNT rewarded since online.")),(0,o.yg)("p",null,"There is a complex mechanism for the rewards. As long as the network settings, hotspot placement, antenna, internet connection and hotspot status are in good standing/healthy, the device will perform accordingly. The Helium Doc is always a great place to learn more on the rewards mechanism. >>",(0,o.yg)("a",{parentName:"p",href:"https://docs.helium.com/blockchain/mining"},(0,o.yg)("strong",{parentName:"a"},"https://docs.helium.com/blockchain/"))),(0,o.yg)("h2",{id:"useful-links-details"},(0,o.yg)("strong",{parentName:"h2"},"Useful Links Details")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/useful-links-1.png",alt:"Useful Links"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Doc Center"),": >> Link to SenseCAP Document/Support Center"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Port Checker"),": Link to >> PortChecker.co to determine if your PORT is open."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Find IP Address"),": Link to WhatIsMyIPAddress.com to display your current IP.")),(0,o.yg)("h2",{id:"account-details"},(0,o.yg)("strong",{parentName:"h2"},"Account Details")),(0,o.yg)("p",null,"After you log-in to your dashboard, you should be presented with a navigation pane on the left side as follows."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/image-13-1.png",alt:"SenseCAP Dashboard"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Dashboard"),": Dashboard home page."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Hotspot"),": List\u2019s all your hotspots that are registered."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Account"),": Account management page, including API credentials, password resets, etc.")))}g.isMDXComponent=!0}}]);