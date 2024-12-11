"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21563],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),g=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(a),y=r,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(9668),r=a(96540),i=a(20053),l=a(23104),o=a(56347),p=a(57485),g=a(31682),s=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,g.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function c(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[p,g]=m({queryString:a,groupId:n}),[d,c]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,s.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=p??d;return y({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),g(e),c(e)}),[g,c,i]),tabValues:i}}var f=a(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:g}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=g[a].value;n!==o&&(d(t),p(n))},y=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:y,onClick:u},l,{className:(0,i.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=c(e);return r.createElement("div",{className:(0,i.A)("tabs-container",h.tabList)},r.createElement(N,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function v(e){const t=(0,f.A)();return r.createElement(S,(0,n.A)({key:String(t)},e))}},48617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>g,toc:()=>d});var n=a(9668),r=(a(96540),a(15680)),i=a(11470),l=a(19365);const o={description:"Getting Started with ReSpeaker Lite",title:"Getting Started with ReSpeaker Lite",keywords:["ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_usb_v3",last_update:{date:"6/28/2024",author:"Jessie"}},p=void 0,g={unversionedId:"Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction",id:"Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction",title:"Getting Started with ReSpeaker Lite",description:"Getting Started with ReSpeaker Lite",source:"@site/docs/Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction.md",sourceDirName:"Sensor/ReSpeaker_Lite",slug:"/reSpeaker_usb_v3",permalink:"/reSpeaker_usb_v3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719532800,formattedLastUpdatedAt:"Jun 28, 2024",frontMatter:{description:"Getting Started with ReSpeaker Lite",title:"Getting Started with ReSpeaker Lite",keywords:["ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_usb_v3",last_update:{date:"6/28/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"How to Distinguish ReSpeaker 2-Mics Pi HAT Hardware Revisions",permalink:"/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions"},next:{title:"ReSpeaker Lite Voice Assistant Kit",permalink:"/xiao_respeaker"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Out of Box Usage",id:"out-of-box-usage",level:3},{value:"Update firmware",id:"update-firmware",level:3},{value:"Firmware Download",id:"firmware-download",level:4},{value:"Wiring",id:"wiring",level:4},{value:"Install DFU Util",id:"install-dfu-util",level:4},{value:"Flash Firmware",id:"flash-firmware",level:4},{value:"Comparison",id:"comparison",level:2},{value:"FAQ",id:"faq",level:3},{value:"Resource",id:"resource",level:3}],u={toc:d},y="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg",alt:"pir",width:600,height:"auto"})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("p",null,"Powered by XMOS XU316 AI Sound and Audio chipset, this dev board excels in audio processing with its integrated dual microphone array, ideal for speech recognition and voice control. Featuring advanced onboard audio front-end algorithms, the XU316 chip provides interference cancellation, echo cancellation, and noise suppression. It supports I2S and USB connections and is compatible with Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi, and PC."),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Dual Microphone Array for Far-Field Voice Capture"),": The 2 high performance digital microphones capture and extract far-field speech and voice (up to 3 meters) even in noisy environments as it cancels point noise using two microphone input."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Onboard AI ASR Algorithms"),": Powered by XMOS XU-316 AI sound and audio chip, the kit includes Natural Language Understanding algorithms for Interference Cancellation (IC) , Acoustic Echo Cancellation, Noise Suppression, Voice-to-Noise Ratio (VNR), and Automatic Gain Control (AGC), enabling high quality voice capture."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Embracing Open Source"),"\uff1aThis board is compatible with popular hardware platforms (XIAO ESP32S3 (Sense), Adafruit QT Py) via I2S, and compatible with Raspberry Pi, PC via USB (Audio Class 2.0 (UAC2))."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Onboard RGB LED"),": the board features a programmable WS2812 RGB LED, supporting custom effects and offering a visual interface for your applications."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"External Power Supply Support"),": this board supports external 5V power supply, which can be flexibly applied in different scenarios."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"DFU for Custom Development"),": the board supports custom firmware update via DFU-Util.")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"th"},"Core Chip")),(0,r.yg)("th",{parentName:"tr",align:"left"},"XMOS XU316"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Digital Microphones")),(0,r.yg)("td",{parentName:"tr",align:"left"},"High-Performance Digital Microphones ","*"," 2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Sensitivity")),(0,r.yg)("td",{parentName:"tr",align:"left"},"-26 dBFS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Acoustic Overload Point")),(0,r.yg)("td",{parentName:"tr",align:"left"},"120 dBL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"SNR")),(0,r.yg)("td",{parentName:"tr",align:"left"},"64 dBA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Power Supply")),(0,r.yg)("td",{parentName:"tr",align:"left"},"USB 5V, External 5V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Dimensions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"35","*","86 mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Audio Output")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Speaker Connector / 3.5mm Headphone Jack")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Maximum Sampling Rate")),(0,r.yg)("td",{parentName:"tr",align:"left"},"16Khz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Speaker")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Supports 5W Amplifier Speakers.")))),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("h2",{id:"pin-out"},"Pin Out"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"th"},"1")),(0,r.yg)("th",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"th"},"Dual Microphone Array")),(0,r.yg)("th",{parentName:"tr",align:"left"},"Provides high-quality audio input."))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"2")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Power Indicator Light")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Illuminates when powered on.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"3")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"RGB Light")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Programmable\xa0WS2812, provides visual\xa0interface")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"4")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Mute Indicator Light")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Lights up red when the mute button is pressed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"5")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"USR Button")),(0,r.yg)("td",{parentName:"tr",align:"left"},"User-defined button.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"6")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Mute Button")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Mutes audio input when pressed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"7")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"XIAO ESP32S3"),"\xa0",(0,r.yg)("strong",{parentName:"td"},"(optional)")),(0,r.yg)("td",{parentName:"tr",align:"left"},"For further development and integration.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"8")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"XU316 Core Processor")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Responsible for audio processing and transmission.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"9")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"External Power Supply Solder Pad")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Supports external 5V power supply.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"10")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"USB Type-C Port")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Used for power and data transmission.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"11")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"Speaker Connector")),(0,r.yg)("td",{parentName:"tr",align:"left"},"For audio output. Supports 5W amplifier speakers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"12")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"3.5mm Headphone jack")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Output audio, We can plug active speakers or Headphones into this port.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"13")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"External power pad 1")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Unused IO pins on the XIAO ESP32.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"14")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"External power pad 2")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Unused IO pins on the XU316.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"15")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"JTAG")),(0,r.yg)("td",{parentName:"tr",align:"left"},"For debugging and programming the XU316.")))),(0,r.yg)("h2",{id:"get-started"},"Get Started"),(0,r.yg)("h3",{id:"out-of-box-usage"},"Out of Box Usage"),(0,r.yg)("p",null,"ReSpeaker Lite is a plug-and-play modular voice interface, no driver required, just plug it to your PC, you will see a voice device named 'ReSpeaker Lite'."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("h3",{id:"update-firmware"},"Update firmware"),(0,r.yg)("h4",{id:"firmware-download"},(0,r.yg)("a",{parentName:"h4",href:"https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares"},"Firmware Download")),(0,r.yg)("admonition",{title:"note",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"There are 2 versions for the ReSpeaker Lite board:"),(0,r.yg)("p",{parentName:"admonition"},"To use it as a USB sound device, please flash the USB version firmware(default firmware)."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png",alt:"pir",width:300,height:"auto"})),(0,r.yg)("p",{parentName:"admonition"},"To use it with XIAO ESP32S3, please flash the I2S version firmware."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png",alt:"pir",width:300,height:"auto"}))),(0,r.yg)("h4",{id:"wiring"},"Wiring"),(0,r.yg)("p",null,"Connect the ReSpeaker Lite Board to your PC via the USB cable."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("h4",{id:"install-dfu-util"},"Install DFU Util"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"http://dfu-util.sourceforge.net/"},"dfu-util")," is a command line tool for Device Firmware Upgrade via USB port."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"dfu-util-0.11-binaries.tar.xz")," and extract it to your local system,\ne.g., D:\\")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Change directory to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dfu-util.exe"),(0,r.yg)("br",null),"\ne.g., D:\\dfu-util-0.11-binaries\\win64","(","if you are using win32, please change win64 to win32)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Append the path of the ",(0,r.yg)("inlineCode",{parentName:"p"},"dfu-util.exe")," to the system environment variable Path: ",(0,r.yg)("inlineCode",{parentName:"p"},"My Computer")," > ",(0,r.yg)("inlineCode",{parentName:"p"},"Properties")," > ",(0,r.yg)("inlineCode",{parentName:"p"},"Advanced")," > ",(0,r.yg)("inlineCode",{parentName:"p"},"Environment Variables")," > ",(0,r.yg)("inlineCode",{parentName:"p"},"Path"),".",(0,r.yg)("br",{parentName:"p"}),"\n","Please note that paths in the variable Path are seperated by semicolon ;.\nThis will allow dfu-util to be executed globally in command prompt.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Open the start menu and type cmd. Press the enter key. In the terminal that comes up, check if dfu-util.exe path is set with dfu-util -V command:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"C:\\Users\\yiping>dfu-util -V\ndfu-util 0.11\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2021 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"dfu-util -l")," to check if ReSpeaker Lite is detected: ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'C:\\Users\\yiping>dfu-util -l\ndfu-util 0.11\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2021 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n\nFound DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"\n')),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},'If you get a "Cannot open DFU device" error like this, please keep following this step. If not, please go to Step 3 to flash firmware.')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"C:\\Users\\yiping>dfu-util -l\ndfu-util 0.11\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2021 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n\nCannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install ",(0,r.yg)("a",{parentName:"p",href:"https://zadig.akeo.ie/"},"Zadig")," and open it. Click ",(0,r.yg)("inlineCode",{parentName:"p"},"Options")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"List All Devices"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Find ",(0,r.yg)("inlineCode",{parentName:"p"},"ReSpeaker 2 Mics Array")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"ReSpeaker Lite")," or DFU ",(0,r.yg)("inlineCode",{parentName:"p"},"FACTORY (Interface 3)")," from the device list, install ",(0,r.yg)("inlineCode",{parentName:"p"},"WINUSB v6.x.xxxx.xxxxx")," driver. "))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After installation is completed(that will take a few minutes), please do power-cycle and run ",(0,r.yg)("inlineCode",{parentName:"li"},"dfu-util -l")," again, ReSpeaker Lite should be detected right now"))),(0,r.yg)(l.A,{value:"mac",label:"MacOS",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install dfu-util with ",(0,r.yg)("a",{parentName:"p",href:"https://brew.sh/"},"brew"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"brew install dfu-util"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"dfu-util -l")," to check if ReSpeaker Lite is detected: "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\u279c  ~ dfu-util -l\ndfu-util 0.11\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2021 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n\nFound DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"\n'))),(0,r.yg)(l.A,{value:"lin",label:"Linux",mdxType:"TabItem"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Install dfu-util with apt: ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo apt install dfu-util"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Run ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo dfu-util -l")," to check if ReSpeaker Lite is detected: "))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'pi@raspberrypi:~ $ sudo dfu-util -l\ndfu-util 0.9\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2016 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n\nFound DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"\nFound DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"\n')))),(0,r.yg)("h4",{id:"flash-firmware"},"Flash Firmware"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Connect the ReSpeaker board to your PC.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Run the following command ",(0,r.yg)("inlineCode",{parentName:"li"},"dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin"),":",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"On Linux please run ",(0,r.yg)("inlineCode",{parentName:"li"},"sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin"))))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"C:\\Users\\yiping>dfu-util -R -e -a 1 -D D:\\Downloads\\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin\ndfu-util 0.11\n\nCopyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.\nCopyright 2010-2021 Tormod Volden and Stefan Schmidt\nThis program is Free Software and has ABSOLUTELY NO WARRANTY\nPlease report bugs to http://sourceforge.net/p/dfu-util/tickets/\n\nWarning: Invalid DFU suffix signature\nA valid DFU suffix will be required in a future dfu-util release\nOpening DFU capable USB device...\nDevice ID 2886:0019\nDevice DFU version 0101\nClaiming USB DFU Interface...\nSetting Alternate Interface #1 ...\nDetermining device status...\nDFU state(2) = dfuIDLE, status(0) = No error condition is present\nDFU mode device DFU version 0101\nDevice returned transfer size 4096\nCopying data from PC to DFU device\nDownload        [=========================] 100%       270336 bytes\nDownload done.\nDFU state(7) = dfuMANIFEST, status(0) = No error condition is present\nDFU state(2) = dfuIDLE, status(0) = No error condition is present\nDone!\nResetting USB to switch back to Run-Time mode\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"After flashing is completed, please restart the board.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Check the firmware version:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"dfu-util -l\n")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h2",{id:"comparison"},"Comparison"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html"},"ReSpeaker Lite")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html"},"ReSpeaker Mic Array v2.0")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"th",href:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"},"reSpeaker 2-Mics Pi HAT")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png",alt:"pir",width:150,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png",alt:"pir",width:150,height:"auto"}))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png",alt:"pir",width:150,height:"auto"})))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Core Chip")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"XMOS XU316")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"XMOS XVF-3000")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Microphones")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"PDM MEMS Microphones x2")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"PDM MEMS Microphones x4")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Analog MEMS Microphones x2"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Voice Capture Distance")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"3m")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"5m")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"3m"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Sensitivity")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-26 dBFS")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-26 dBFS")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Acoustic Overload Point")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"120 dBSPL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"120 dBSPL")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"SNR")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"64 dB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"63 dB")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Onboard Audio Processing Algorithms")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"Acoustic Echo Cancellation (AEC)"),(0,r.yg)("li",null,"Automatic Gain Control (AGC)"),(0,r.yg)("li",null,"Noise Suppression (NS)"),(0,r.yg)("li",null,"Interference Cancellation (IC)"),(0,r.yg)("li",null,"Voice-to-Noise Ratio (VNR)"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"Acoustic Echo Cancellation (AEC)"),(0,r.yg)("li",null,"Automatic Gain Control (AGC)"),(0,r.yg)("li",null,"Noise Suppression (NS)"),(0,r.yg)("li",null,"Beamforming"),(0,r.yg)("li",null,"Direction of Arrival (DoA)"),(0,r.yg)("li",null,"De-Reverberation"),(0,r.yg)("li",null,"Voice Activity Detection (VAD)"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"-"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Compatible Hardware")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"XIAO ESP32S3(Sense)"),(0,r.yg)("li",null,"Adafruit QT Py via I2S"),(0,r.yg)("li",null,"Raspberry Pi"),(0,r.yg)("li",null,"Any computer or SBC running Linux, macOS, and Windows via USB"))),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("ul",null,(0,r.yg)("li",null,"Raspberry Pi"),(0,r.yg)("li",null,"Any computer or SBC running Linux, macOS, and Windows via USB"))),(0,r.yg)("td",{parentName:"tr",align:null},"Raspberry Pi ONLY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("p",{style:{textAlign:"center"}},"Perfect for")),(0,r.yg)("td",{parentName:"tr",align:null},"Directional sound capture, ideal for linear or elongated setups"),(0,r.yg)("td",{parentName:"tr",align:null},"Omnidirectional sound capture and localization, best placed in the center of open and multi-directional environments"),(0,r.yg)("td",{parentName:"tr",align:null},"Directional sound capture, ideal for linear or elongated setups")))),(0,r.yg)("h3",{id:"faq"},"FAQ"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Can't find the ",(0,r.yg)("inlineCode",{parentName:"strong"},"ReSpeaker Lite")," sound device.")),(0,r.yg)("p",{parentName:"li"},"Check the firmware version, make sure the firmware is USB version and above",(0,r.yg)("inlineCode",{parentName:"p"},"2.0.5"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"dfu-util -l\n")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{parentName:"li"},"If it's not USB version, please follow ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reSpeaker_usb_v3/#flash-firmware"},"this step")," to flash the firmware."))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Can't detect ReSpeaker Lite USB sound device on Windows after flashing USB firmware?"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Open the start menu and type ",(0,r.yg)("inlineCode",{parentName:"p"},"Device manager"),". Press the enter key. Find ",(0,r.yg)("inlineCode",{parentName:"p"},"ReSpeaker Lite")," device, right click it and select ",(0,r.yg)("inlineCode",{parentName:"p"},"Uninstall device"),". Select   ",(0,r.yg)("inlineCode",{parentName:"p"},"Delete the driver software for this device")," and click ",(0,r.yg)("inlineCode",{parentName:"p"},"Uninstall"),". After that, restart the device and Windows will re-install the right sound card driver for it."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png",alt:"pir",width:600,height:"auto"})))),(0,r.yg)("h3",{id:"resource"},"Resource"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares"},"ReSpeaker Lite XMOS Firmware")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/respeaker/ReSpeaker_Lite/"},"ReSpeaker Lite Github")))}m.isMDXComponent=!0}}]);