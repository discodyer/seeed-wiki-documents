"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6018],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,y=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>S});var n=r(58168),a=r(96540),o=r(20053),i=r(23104),l=r(56347),s=r(57485),u=r(31682),d=r(89466);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:r,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=s??c;return g({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var h=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function A(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),p=e=>{const t=e.currentTarget,r=d.indexOf(t),n=u[r].value;n!==l&&(c(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:p},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(A,(0,n.A)({},e,t)),a.createElement(b,(0,n.A)({},e,t)))}function S(e){const t=(0,h.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},30946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));r(11470),r(19365);const o={title:"Getting Started with Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - Smallest Dev Borad Based on 32-bit Renesas RA4M1, Arduino IDE-Ready, 19 GPIOs, RGB LED, CAN BUS, USB 2.0\n",image:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg",slug:"/getting-started-xiao-ra4m1",keywords:["XIAO","RA4M1"],author:"Spencer",last_update:{date:"08/15/2024"},sidebar_position:0},i=void 0,l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1/XIAO-RA4M1",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1/XIAO-RA4M1",title:"Getting Started with Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - Smallest Dev Borad Based on 32-bit Renesas RA4M1, Arduino IDE-Ready, 19 GPIOs, RGB LED, CAN BUS, USB 2.0\n",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1/XIAO-RA4M1.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1",slug:"/getting-started-xiao-ra4m1",permalink:"/getting-started-xiao-ra4m1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RA4M1/XIAO-RA4M1.md",tags:[],version:"current",lastUpdatedBy:"Citric Lee",lastUpdatedAt:172368e4,formattedLastUpdatedAt:"Aug 15, 2024",sidebarPosition:0,frontMatter:{title:"Getting Started with Seeed Studio XIAO RA4M1",description:"XIAO RA4M1 - Smallest Dev Borad Based on 32-bit Renesas RA4M1, Arduino IDE-Ready, 19 GPIOs, RGB LED, CAN BUS, USB 2.0\n",image:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg",slug:"/getting-started-xiao-ra4m1",keywords:["XIAO","RA4M1"],author:"Spencer",last_update:{date:"08/15/2024"},sidebar_position:0},sidebar:"ProductSidebar",previous:{title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",permalink:"/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"},next:{title:"Getting Started with Seeed Studio XIAO RP2040",permalink:"/XIAO-RP2040"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"Hardware Overview",id:"hardware-overview",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg",style:{width:480,height:"auto","border-radius":"12.8px"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The XIAO RA4M1 integrates Renesas' RA4M1 chip (32-bit ARM\xae Cortex\xae-M4 MCU up to 48 MHz) into the classic XIAO form factor. This development board offers 256KB Flash, 32KB SRAM, 8KB EEPROM, a USB 2.0 connector, reset and boot buttons, 3 LEDs, a 14-bit A/D converter, a 12-bit D/A converter, and a CAN BUS interface. With onboard charging circuitry and low-power modes (as low as 45\u03bcA), it\u2019s ideal for battery-powered applications. Sharing the same 32-bit R7FA4M1AB3CFM microcontroller as the Arduino Uno R4, it's natively compatible with Arduino IDE and the extensive XIAO accessories, making it the perfect starting point for electronics projects."),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Popular Microcontroller Onboard:")," Powered by Renesas RA4M1, an 32-bit ARM\xae Cortex\xae-M4 R7FA4M1AB3CFM MCU operating at up to 48 MHz, 256 KB of Flash memory, and 32 KB of SRAM."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Highlighted Onboard Resources:")," Equipped with a 14-bit ADC, 12-bit DAC, CAN BUS, USB 2.0, and an onboard RGB LED."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Expanded 8 New IOs:")," Adds 8 new IO pins on the back compared to previous XIAO boards (19 GPIOs in total), enabling more complex applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Powerful Security Features:")," Built-in hardware encryption, secure boot, key storage, and other functions to ensure application security."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Software Compatibility:")," Fully compatible with Arduino IDE for seamless project development and prototyping."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Efficient Power Design:")," Offers 4 operating modes with power consumption as low as 45\u03bcA in deep sleep, and supports lithium battery charge management."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Compact Thumb-Sized Design:")," Measuring 21 x 17.8mm, adopting Seeed Studio's classic XIAO form factor, ideal for space-conscious applications."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Production-Friendly:")," Surface Mount Device (SMD) design with all components on the front and stamp holes on both sides, facilitating efficient mass production.")),(0,a.yg)("h3",{id:"specification"},"Specification"),(0,a.yg)("table",null,(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Product"),(0,a.yg)("th",null,"XIAO RA4M1"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("th",{rowspan:"2"},"Processor"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi"},"Renesas RA4M1"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"48-MHz Arm\xae Cortex\xae-M4 Core")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"RAM"),(0,a.yg)("td",null,"32 KB SRAM")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Flash"),(0,a.yg)("td",null,"256 KB")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"LEDs"),(0,a.yg)("td",null,"1 User LED, 1 Power LED, 1 RGB LED")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Interfaces"),(0,a.yg)("td",null,"19 Pins:14x Analog,19x Digital, 2x IIC, 2x UART, 2x SPI")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Buttons"),(0,a.yg)("td",null,"1 RESET Button, 1 BOOT Button")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Security"),(0,a.yg)("td",null,"AES128/256")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Low Power"),(0,a.yg)("td",null,"45\u03bcA")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Software Compatibility"),(0,a.yg)("td",null,"Arduino IDE")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Working Temperature"),(0,a.yg)("td",null,"-20\xb0C-70\xb0C")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Dimensions"),(0,a.yg)("td",null,"21x17.8 mm")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Power"),(0,a.yg)("td",null,"Type-C: 5V",(0,a.yg)("br",null),"BAT: 3.8V")))),(0,a.yg)("h3",{id:"hardware-overview"},"Hardware Overview"),(0,a.yg)("p",null,"Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Seeed Studio XIAO RA4M1."),(0,a.yg)("table",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO RA4M1 front indication diagram")),(0,a.yg)("tr",null,(0,a.yg)("br",null),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-components.png",style:{width:380,height:"auto"}})),(0,a.yg)("br",null)),(0,a.yg)("tr",null,(0,a.yg)("th",null,"XIAO RA4M1 Pin List")),(0,a.yg)("tr",null,(0,a.yg)("br",null),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO-RA4M1-pinout.png",style:{width:880,height:"auto"}})),(0,a.yg)("br",null))),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,a.yg)("p",null,"You need to prepare the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"1 x ",(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1"},"Seeed Studio XIAO RA4M1")),(0,a.yg)("li",{parentName:"ul"},"1 x Computer"),(0,a.yg)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Seeed USB Type-C support USB 3.1"),".")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Solder header")),(0,a.yg)("p",null,"XIAO RA4M1 is shipped without pin headers by default, you need to prepare your own pin headers and solder it to the corresponding pins of XIAO so that you can connect to the expansion board or sensor."),(0,a.yg)("p",null,"Due to the miniature size of XIAO RA4M1, please be careful when soldering headers, do not stick different pins together, and do not stick solder to the shield or other components. Otherwise, it may cause XIAO to short circuit or not work properly, and the consequences caused by this will be borne by the user."),(0,a.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.yg)("p",null,"The recommended programming tool for the XIAO RA4M1 is the Arduino IDE, so as part of the software preparation, you will need to complete the Arduino installation."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Download and Install the stable version of Arduino IDE according to your operating system.")),(0,a.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Add RA4M1 board package to your Arduino IDE."),(0,a.yg)("p",{parentName:"li"},"  Navigate to ",(0,a.yg)("strong",{parentName:"p"},"File > Preferences"),", and fill ",(0,a.yg)("strong",{parentName:"p"},'"Additional Boards Manager URLs"')," with the url below:\n",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("a",{parentName:"em",href:"https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json"},"https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json"))),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",{parentName:"li"},"  Navigate to ",(0,a.yg)("strong",{parentName:"p"},"Tools > Board > Boards Manager..."),", type the keyword ",(0,a.yg)("strong",{parentName:"p"},"RA4M1")," in the search box, select the latest version of ",(0,a.yg)("strong",{parentName:"p"},"Seeed Renesas Board"),", and install it."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png",style:{width:700,height:"auto"}}))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Select your board and port."),(0,a.yg)("p",{parentName:"li"},"  On top of the Arduino IDE, you can select the port directly. Also, search for xiao in the development board on the left. select XIAO_RA4M1."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png",style:{width:600,height:"auto"}})))),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet"},"RA4M1 datasheet")),(0,a.yg)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,a.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO-RA4M1_SCH_PDF_v1.0_240719.pdf"},"Seeed Studio XIAO RA4M1 Schematic"))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);