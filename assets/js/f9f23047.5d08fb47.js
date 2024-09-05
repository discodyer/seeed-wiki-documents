"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73386],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),y=n,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),n=r(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,l),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(9668),n=r(96540),i=r(20053),l=r(23104),o=r(56347),s=r(57485),u=r(31682),p=r(89466);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function y(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=d(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=m({queryString:r,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=s??c;return y({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var g=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==o&&(c(t),s(a))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},l,{className:(0,i.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return n.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},n.createElement(b,(0,a.A)({},e,t)),n.createElement(w,(0,a.A)({},e,t)))}function k(e){const t=(0,g.A)();return n.createElement(v,(0,a.A)({key:String(t)},e))}},22433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(9668),n=(r(96540),r(15680)),i=r(11470),l=r(19365);const o={description:"Wio Tracker Meshtastic\xae Kit Firmware Flashing",title:"Flash Firmware",keywords:["Meshtastic","Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/flash_meshtastic_kit",last_update:{date:"6/17/2024",author:"Jessie"}},s=void 0,u={unversionedId:"Network/Meshtastic_Network/wio_tracker_kit/flash_meshtastic_kit",id:"Network/Meshtastic_Network/wio_tracker_kit/flash_meshtastic_kit",title:"Flash Firmware",description:"Wio Tracker Meshtastic\xae Kit Firmware Flashing",source:"@site/docs/Network/Meshtastic_Network/wio_tracker_kit/flash_meshtastic_kit.md",sourceDirName:"Network/Meshtastic_Network/wio_tracker_kit",slug:"/flash_meshtastic_kit",permalink:"/flash_meshtastic_kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/Meshtastic_Network/wio_tracker_kit/flash_meshtastic_kit.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1718582400,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{description:"Wio Tracker Meshtastic\xae Kit Firmware Flashing",title:"Flash Firmware",keywords:["Meshtastic","Tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/flash_meshtastic_kit",last_update:{date:"6/17/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Meshtastic\xae Kit",permalink:"/meshtastic_kit_wio_tracker_1110"},next:{title:"T1000-E Tracker Introduction",permalink:"/t1000_e_intro"}},p={},c=[{value:"Preparation",id:"preparation",level:3},{value:"Wiring",id:"wiring",level:3},{value:"Flash the bootloader",id:"flash-the-bootloader",level:3},{value:"Download the application",id:"download-the-application",level:3}],d={toc:c},y="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(y,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This tutorial will guide users to flash the ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html"},"Wio Tracker 1110 Dev Board")," to the Meshtastic version, for those who want to use the Meshtastic network."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If you want to flash the board back to the LoRaWAN version, please check this ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/flash_to_wio_tracker/"},"tutorial"),".")),(0,n.yg)("h3",{id:"preparation"},"Preparation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Wio Tracker 1110 Board x 1"),(0,n.yg)("li",{parentName:"ul"},"Computer x 1"),(0,n.yg)("li",{parentName:"ul"},"USB Type-C Cable x 1")),(0,n.yg)("h3",{id:"wiring"},"Wiring"),(0,n.yg)("p",null,"Connect the Dev Board to your PC via the USB cable."),(0,n.yg)("h3",{id:"flash-the-bootloader"},"Flash the bootloader"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"uf2",label:"UF2",mdxType:"TabItem"},(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2"},"Bootloader download"))),(0,n.yg)("p",null,"Double click the ",(0,n.yg)("inlineCode",{parentName:"p"},"Reset")," button, there should be a ",(0,n.yg)("inlineCode",{parentName:"p"},"WM1110_BOOT")," drive on your PC."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"Drag the ",(0,n.yg)("inlineCode",{parentName:"p"},"update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2")," file to the driver. The download will run automatically, then the driver will log out.")),(0,n.yg)(l.A,{value:"serial",label:"Serial",mdxType:"TabItem"},(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip"},"Bootloader download"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step1: Adafruit-nrfutil Installation")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Prerequisites")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python3")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/installation/"},"pip3"))),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"pypi",label:"Installing from PyPI",mdxType:"TabItem"},(0,n.yg)("p",null,"This is recommended method, to install latest version:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pip3 install --user adafruit-nrfutil\n"))),(0,n.yg)(l.A,{value:"sou",label:"Installing from Source",mdxType:"TabItem"},(0,n.yg)("p",null,"Use this method if you have issue installing with PyPi or want to modify the tool. First clone this repo and go into its folder."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git\ncd Adafruit_nRF52_nrfutil\n")),(0,n.yg)("p",null,"Note: following commands use ",(0,n.yg)("inlineCode",{parentName:"p"},"python3"),", however if you are on Windows, you may need to change it to ",(0,n.yg)("inlineCode",{parentName:"p"},"python")," since windows installation of python 3.x still uses the name python.exe"),(0,n.yg)("p",null,"To install in user space in your home directory:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pip3 install -r requirements.txt\npython3 setup.py install\n")),(0,n.yg)("p",null,"If you get permission errors when running ",(0,n.yg)("inlineCode",{parentName:"p"},"pip3 install"),", your ",(0,n.yg)("inlineCode",{parentName:"p"},"pip3")," is older\nor is set to try to install in the system directories. In that case use the\n",(0,n.yg)("inlineCode",{parentName:"p"},"--user")," flag:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pip3 install -r --user requirements.txt\npython3 setup.py install\n")),(0,n.yg)("p",null,"If you want to install in system directories (generally not recommended):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo pip3 install -r requirements.txt\nsudo python3 setup.py install\n")),(0,n.yg)("p",null,"To generate a self-contained executable binary of the utility (Windows and MacOS), run these commands:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"pip3 install pyinstaller\ncd Adafruit_nRF52_nrfutil\npip3 install -r requirements.txt\ncd Adafruit_nRF52_nrfutil\\nordicsemi\npyinstaller __main__.py --onefile --clean --name adafruit-nrfutil\n")),(0,n.yg)("p",null,"You will find the .exe in ",(0,n.yg)("inlineCode",{parentName:"p"},"Adafruit_nRF52_nrfutil\\nordicsemi\\dist\\adafruit-nrfutil")," ( with ",(0,n.yg)("inlineCode",{parentName:"p"},".exe")," if you are on windows).\nCopy or move it elsewhere for your convenience, such as directory in your %PATH%."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step2: Flash the bootloader")),(0,n.yg)("p",null,"Double click the ",(0,n.yg)("inlineCode",{parentName:"p"},"Reset")," button on the board and run the following command:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"For Windows"),": ")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"For others"),": ")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200\n")),(0,n.yg)("p",null,"Replace the serial port with your device port. Example:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("h3",{id:"download-the-application"},"Download the application"),(0,n.yg)("p",null,"You may use the ",(0,n.yg)("a",{parentName:"p",href:"https://flasher.meshtastic.org/"},"Meshtastic Web Flasher")," to download and copy firmware."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)("p",null,"Select the device to ",(0,n.yg)("inlineCode",{parentName:"p"},"Seeed Wio WM1110 Tracker")," and the latest firmware, and download the ",(0,n.yg)("inlineCode",{parentName:"p"},"UF2")," file."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png",alt:"pir",width:800,height:"auto"})),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"uf2",label:"UF2",mdxType:"TabItem"},(0,n.yg)("p",null,"Double click the ",(0,n.yg)("inlineCode",{parentName:"p"},"Reset")," button, there should be a ",(0,n.yg)("inlineCode",{parentName:"p"},"WM1110_BOOT")," driver on your PC."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"Drag the ",(0,n.yg)("inlineCode",{parentName:"p"},".uf2")," file to the driver. The download will run automatically, then the driver will log out."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Just ignore this error prompt, the device has actually been upgraded successfully."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)(l.A,{value:"serial",label:"Serial",mdxType:"TabItem"},(0,n.yg)("p",null,"Double click the ",(0,n.yg)("inlineCode",{parentName:"p"},"Reset")," button on the board and run the following command:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"For Windows"),": ")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"For others"),":")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200\n")),(0,n.yg)("p",null,"Flash successfully:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png",alt:"pir",width:800,height:"auto"})))))}m.isMDXComponent=!0}}]);