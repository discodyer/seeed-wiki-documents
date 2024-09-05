"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80993],{15680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>m});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),y=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},p=function(t){var e=y(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=y(n),s=r,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return n?a.createElement(m,g(g({ref:e},p),{},{components:n})):a.createElement(m,g({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,g[1]=i;for(var y=2;y<l;y++)g[y]=n[y];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94112:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var a=n(9668),r=(n(96540),n(15680));const l={description:"SenseCAP Card Tracker T1000-E for Meshtastic Introduction",title:"T1000-E Tracker Introduction",keywords:["Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/t1000_e_intro",last_update:{date:"7/1/2024",author:"Jessie"}},g=void 0,i={unversionedId:"Network/Meshtastic_Network/T1000-E/t1000_e_intro",id:"Network/Meshtastic_Network/T1000-E/t1000_e_intro",title:"T1000-E Tracker Introduction",description:"SenseCAP Card Tracker T1000-E for Meshtastic Introduction",source:"@site/docs/Network/Meshtastic_Network/T1000-E/t1000_e_intro.md",sourceDirName:"Network/Meshtastic_Network/T1000-E",slug:"/t1000_e_intro",permalink:"/t1000_e_intro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/Meshtastic_Network/T1000-E/t1000_e_intro.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719792e3,formattedLastUpdatedAt:"Jul 1, 2024",frontMatter:{description:"SenseCAP Card Tracker T1000-E for Meshtastic Introduction",title:"T1000-E Tracker Introduction",keywords:["Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/t1000_e_intro",last_update:{date:"7/1/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Flash Firmware",permalink:"/flash_meshtastic_kit"},next:{title:"Get Started with T1000-E Tracker",permalink:"/sensecap_t1000_e"}},o={},y=[{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"Hardware overview",id:"hardware-overview",level:3},{value:"PIN",id:"pin",level:3},{value:"Button",id:"button",level:3},{value:"Get Started",id:"get-started",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Device Connection",id:"device-connection",level:4}],p={toc:y},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.yg)(d,(0,a.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",null,"It is a high-performance tracker designed for Meshtastic, as small as a credit card, effortlessly fitting in your pocket or attaching to your assets. It embeds Semtech's LR1110, Nordic's nRF52840, and Mediatek's AG3335 GPS module, providing Meshtastic users with a high-precision, low-power positioning and communication solution."),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("br",null),(0,r.yg)("admonition",{title:"Version Comparison",type:"tip"}),(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Feature"),(0,r.yg)("td",null,(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html"},"T1000-A")),(0,r.yg)("td",null,(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html"},"T1000-B")),(0,r.yg)("td",null,(0,r.yg)("a",{href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html"},"T1000-E")))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Compatible Network"),(0,r.yg)("td",null,(0,r.yg)("ul",null,(0,r.yg)("li",null,"LoRaWAN"),(0,r.yg)("li",null,"Helium"))),(0,r.yg)("td",null,(0,r.yg)("ul",null,(0,r.yg)("li",null,"LoRaWAN"),(0,r.yg)("li",null,"Helium"))),(0,r.yg)("td",null,(0,r.yg)("ul",null,(0,r.yg)("li",null,"Meshtastic")))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Temperature Sensor"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705"))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Light Sensor"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705"))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Accelerometer"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705"))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"GPS"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705"))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Bluetooth"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"\u2705"))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Battery Capacity"),(0,r.yg)("td",{colspan:"3",Align:"center"},"700mAh")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"IP Rating"),(0,r.yg)("td",{colspan:"3",Align:"center"},"IP65")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Dimensions"),(0,r.yg)("td",{colspan:"3",Align:"center"},"85 x 55 x 6.5 mm")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Weight"),(0,r.yg)("td",{colspan:"3",Align:"center"},"32g")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Operating Temperature"),(0,r.yg)("td",{colspan:"3",Align:"center"},"-20\xb0C to +60\xb0C")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Main Chip"),(0,r.yg)("td",{colspan:"3",Align:"center"},"LR1110 + nRF52840")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Compatible APP"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"SenseCraft")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"SenseCraft")),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},"Meshtastic"))))),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Multi-Protocol Support"),": Featuring nRF52840 and LR1110, it supports Bluetooth 5.0, Thread, Zigbee, and LoRa, ensuring compatibility with a wide range of devices and networks."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Powerful Positioning Capabilities"),": Integrated with the Mediatek\u2018s AG3335 GPS chip, it provides high-precision positioning services."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Expandable Interfaces"),": Designed with four pogo pins, it supports USB interface for DFU (Device Firmware Upgrade), serial logging, and API interface, simplifying device management and debugging."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Open Source Support"),": Compatible with the Meshtastic open-source mesh networking protocol, suitable for long-range and low-power communication needs.")),(0,r.yg)("h3",{id:"specification"},"Specification"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"General")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"th"},"Network protocol")),(0,r.yg)("th",{parentName:"tr",align:"left"},"LoRa, Bluetooth v5.1"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Temperature")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("p",null,"Range: -20 to 60\u2103;"),(0,r.yg)("p",null,"Accuracy: \xb1 1\u2103 (min \xb10.5\u2103, max \xb11\u2103)"),(0,r.yg)("p",null,"Resolution: 0.1\u2103"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Light")),(0,r.yg)("td",{parentName:"tr",align:"left"},"0 to 100% (0% is dark, 100% is brightest)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"LED and Buzzer")),(0,r.yg)("td",{parentName:"tr",align:"left"},"1","*","LED and 1","*"," buzzer to indicate status")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Button")),(0,r.yg)("td",{parentName:"tr",align:"left"},"1","*"," Button to operate")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Antenna")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Internal (GNSS/LoRa/Wi-Fi/BLE)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Communication Distance")),(0,r.yg)("td",{parentName:"tr",align:"left"},"2 to 5km (depending on antenna, installation, and environments)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"IP Rating")),(0,r.yg)("td",{parentName:"tr",align:"left"},"IP65")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Dimensions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"85 ","*"," 55 ","*"," 6.5 mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Device Weight")),(0,r.yg)("td",{parentName:"tr",align:"left"},"32g")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Operating Temperature")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-20\u2103 to +60\u2103")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Operating Humidity")),(0,r.yg)("td",{parentName:"tr",align:"left"},"5% - 95% (No condensation)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Certification")),(0,r.yg)("td",{parentName:"tr",align:"left"},"CE /FCC")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Battery")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"th"},"Battey Capacity")),(0,r.yg)("th",{parentName:"tr",align:"left"},"Rechargeable lithium battery, 700mAh"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Battery Life Monitoring")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Periodic uplink battery level")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"td"},"Charge Cable")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"td"},"(Adapter not included)"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"USB magnetic charging cable, 1 meter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Power Input Voltage")),(0,r.yg)("td",{parentName:"tr",align:"left"},"4",".","7 to 5.5V DC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Charging Temperature Limit")),(0,r.yg)("td",{parentName:"tr",align:"left"},"0 to +45\u2103")))),(0,r.yg)("h3",{id:"hardware-overview"},"Hardware overview"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000-e.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h3",{id:"pin"},"PIN"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Power to Sensor"),(0,r.yg)("th",{parentName:"tr",align:null},"P0.4"),(0,r.yg)("th",{parentName:"tr",align:null},"GPIO"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"P0.31"),(0,r.yg)("td",{parentName:"tr",align:null},"NTC (analog)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Light"),(0,r.yg)("td",{parentName:"tr",align:null},"P0.29"),(0,r.yg)("td",{parentName:"tr",align:null},"LUX(analog)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3-Axis Accelerometer",(0,r.yg)("br",null),"(Not currently used in the Meshtastic firmware)"),(0,r.yg)("td",{parentName:"tr",align:null},"SDA: P0.26",(0,r.yg)("br",null),"SCL: P0.27"),(0,r.yg)("td",{parentName:"tr",align:null},"Via IIC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power to Accelerometer"),(0,r.yg)("td",{parentName:"tr",align:null},"P1.7"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LED"),(0,r.yg)("td",{parentName:"tr",align:null},"P0.24"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Buzzer"),(0,r.yg)("td",{parentName:"tr",align:null},"P0.25"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Enable Buzzer"),(0,r.yg)("td",{parentName:"tr",align:null},"P1.05"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Button"),(0,r.yg)("td",{parentName:"tr",align:null},"P0.6"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power to sensor"),(0,r.yg)("td",{parentName:"tr",align:null},"P1.6"),(0,r.yg)("td",{parentName:"tr",align:null},"GPIO")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LR1110"),(0,r.yg)("td",{parentName:"tr",align:null},"P1.08: SPI MISO",(0,r.yg)("br",null),"P1.09: SPI MOSI",(0,r.yg)("br",null),"P0.11: SPI Clock",(0,r.yg)("br",null),"P0.12: SPI NSS",(0,r.yg)("br",null),"P1.10: LoRa Reset",(0,r.yg)("br",null),"P1.01: LoRa DIO1",(0,r.yg)("br",null),"P0.07: LoRa DIO2",(0,r.yg)("br",null),"LR11X0","_","DIO3","_","TCXO","_","VOLT",(0,r.yg)("br",null),"AGE 1.6V"),(0,r.yg)("td",{parentName:"tr",align:null},"SPI")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GPS"),(0,r.yg)("td",{parentName:"tr",align:null},"RX: P0.14",(0,r.yg)("br",null),"TX: P0.13"),(0,r.yg)("td",{parentName:"tr",align:null},"Serial1 ",(0,r.yg)("br",null),"BAUDRATE:115200")))),(0,r.yg)("h3",{id:"button"},"Button"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Button action"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Buzzer"),(0,r.yg)("th",{parentName:"tr",align:null},"LED"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Press once"),(0,r.yg)("td",{parentName:"tr",align:null},"Power on"),(0,r.yg)("td",{parentName:"tr",align:null},"Rising melody"),(0,r.yg)("td",{parentName:"tr",align:null},"The led lights up and then flashes quickly")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Press twice"),(0,r.yg)("td",{parentName:"tr",align:null},"Update node/location info"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Press three times"),(0,r.yg)("td",{parentName:"tr",align:null},"Switch on/off the GPS"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Press and hold for 5s"),(0,r.yg)("td",{parentName:"tr",align:null},"Power off"),(0,r.yg)("td",{parentName:"tr",align:null},"Falling melody"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"get-started"},"Get Started"),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"Press the button once to power on the T1000-E tracker, the Bluetooth pairing will be activated automatically."),(0,r.yg)("h4",{id:"device-connection"},"Device Connection"))}u.isMDXComponent=!0}}]);