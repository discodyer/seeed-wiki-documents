"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64825],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>y});var n=o(96540);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),g=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=g(o),c=s,y=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return o?n.createElement(y,r(r({ref:t},p),{},{components:o})):n.createElement(y,r({ref:t},p))}));function y(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,r[1]=a;for(var g=2;g<i;g++)r[g]=o[g];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},69050:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>g});var n=o(9668),s=(o(96540),o(15680));const i={description:"Seeed Studio Iot Botton Connect To ESPHome",title:"Iot Botton Connect To ESPHome",keywords:["ESPHOME"],image:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/BUTTON/1.png",slug:"/iot_botton_connect_to_esphome",last_update:{date:"11/11/2024",author:"qiuyu wei"}},r=void 0,a={unversionedId:"Sensor/Seeed_Studio_Iot_Button/IOT_BOTTON_FOR_ESPHOME",id:"Sensor/Seeed_Studio_Iot_Button/IOT_BOTTON_FOR_ESPHOME",title:"Iot Botton Connect To ESPHome",description:"Seeed Studio Iot Botton Connect To ESPHome",source:"@site/docs/Sensor/Seeed_Studio_Iot_Button/IOT_BOTTON_FOR_ESPHOME.md",sourceDirName:"Sensor/Seeed_Studio_Iot_Button",slug:"/iot_botton_connect_to_esphome",permalink:"/iot_botton_connect_to_esphome",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeed_Studio_Iot_Button/IOT_BOTTON_FOR_ESPHOME.md",tags:[],version:"current",lastUpdatedBy:"qiuyu wei",lastUpdatedAt:1731283200,formattedLastUpdatedAt:"Nov 11, 2024",frontMatter:{description:"Seeed Studio Iot Botton Connect To ESPHome",title:"Iot Botton Connect To ESPHome",keywords:["ESPHOME"],image:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/BUTTON/1.png",slug:"/iot_botton_connect_to_esphome",last_update:{date:"11/11/2024",author:"qiuyu wei"}},sidebar:"ProductSidebar",previous:{title:"MT3620 Grove Breakout",permalink:"/MT3620_Grove_Breakout"},next:{title:"SEEED IOT BUTTON FOR AWS",permalink:"/SEEED-IOT-BUTTON-FOR-AWS"}},l={},g=[{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Install ESPHome on Home Assistant",id:"install-esphome-on-home-assistant",level:2},{value:"Adding the Iot button to ESPHome",id:"adding-the-iot-button-to-esphome",level:2},{value:"Configuring the IOT BUTTON",id:"configuring-the-iot-button",level:2},{value:"Adding programs to the IOT BUTTON",id:"adding-programs-to-the-iot-button",level:3},{value:"Adding Iot Button to the dashboard",id:"adding-iot-button-to-the-dashboard",level:3},{value:"Iot Button control Buzzer",id:"iot-button-control-buzzer",level:2},{value:"Adding programs to the BUZZER",id:"adding-programs-to-the-buzzer",level:3},{value:"Automations",id:"automations",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:g},u="wrapper";function d(e){let{components:t,...o}=e;return(0,s.yg)(u,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"getting-started"},"Getting Started"),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg",style:{width:600,height:"auto"}})),(0,s.yg)("p",null,"In this example, we will introduce how to connect the Iot Button to the home assistant and use the Iot Button to control the buzzer on and off."),(0,s.yg)("h3",{id:"materials-required"},"Materials Required"),(0,s.yg)("div",{class:"table-center"},(0,s.yg)("table",{align:"center"},(0,s.yg)("tr",null,(0,s.yg)("th",null,"Iot Button"),(0,s.yg)("th",null,"XIAO ESP32C3"),(0,s.yg)("th",null,"Expansion Board Base for XIAO")),(0,s.yg)("tr",null,(0,s.yg)("td",null,(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg",style:{width:250,height:"auto"}}))),(0,s.yg)("td",null,(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/XIAOESP32C3.png",style:{width:170,height:"auto"}}))),(0,s.yg)("td",null,(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/BOARD.jpg",style:{width:250,height:"auto"}})))),(0,s.yg)("tr",null,(0,s.yg)("td",null,(0,s.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,s.yg)("a",{class:"get_one_now_item",href:"https://files.seeedstudio.com/seeed_iot_botton_connect_to_esphome"},(0,s.yg)("strong",null,(0,s.yg)("span",null,(0,s.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,s.yg)("td",null,(0,s.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,s.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},(0,s.yg)("strong",null,(0,s.yg)("span",null,(0,s.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,s.yg)("td",null,(0,s.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,s.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,s.yg)("strong",null,(0,s.yg)("span",null,(0,s.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,s.yg)("p",null,"A powerful functional expansion board for Seeed Studio XIAO,  with its rich peripherals including buzzer. XIAO ESP32C3 was also selected as the master control, of course, you can also be based on the case of free play to create!"),(0,s.yg)("h2",{id:"install-esphome-on-home-assistant"},"Install ESPHome on Home Assistant"),(0,s.yg)("p",null," ",(0,s.yg)("strong",{parentName:"p"},"Step 1"),". ",(0,s.yg)("strong",{parentName:"p"},"Click Settings")," --\x3e ",(0,s.yg)("strong",{parentName:"p"},"Add-on")," --\x3e ",(0,s.yg)("strong",{parentName:"p"},"ADD-ON STORE"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 2"),". Search ",(0,s.yg)("strong",{parentName:"p"},"ESPHome"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 3"),". Click ",(0,s.yg)("strong",{parentName:"p"},"INSTALL"),", then click ",(0,s.yg)("strong",{parentName:"p"},"START"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 4"),". Successful installation"),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("h2",{id:"adding-the-iot-button-to-esphome"},"Adding the Iot button to ESPHome"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 5"),". Click ",(0,s.yg)("strong",{parentName:"p"},"+NEW DEVICE")),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 6"),". Click ",(0,s.yg)("strong",{parentName:"p"},"NEXT")," and give your device a name of your choice."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png",style:{width:800,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 7"),". Select your device type"),(0,s.yg)("p",null,"Here we choose the first one for now, because ESPHome doesn't support ESP32C6 at the moment, so we can't find the ESP32C6 option in the list for the time being."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png",style:{width:580,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 8"),". Add device successfully, finally click ",(0,s.yg)("strong",{parentName:"p"},"SKIP"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png",style:{width:780,height:"auto"}})),(0,s.yg)("h2",{id:"configuring-the-iot-button"},"Configuring the IOT BUTTON"),(0,s.yg)("h3",{id:"adding-programs-to-the-iot-button"},"Adding programs to the IOT BUTTON"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 9"),". The corresponding device card will appear on the ESPHome page, then click the ",(0,s.yg)("strong",{parentName:"p"},"EDIT"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 10"),". After entering the editing interface you need to configure the ",(0,s.yg)("strong",{parentName:"p"},"ESP32"),", you can copy the code directly."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"esp32:\n  board: esp32-c6-devkitc-1\n  variant: esp32c6\n  flash_size: 4MB # upload.flash_size\n  framework:\n    type: esp-idf\n    platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6\n\n    # Tasmota's release of 5.1.3 works, first-party release does not LOL\n    version: 5.1.3\n    source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip\n\n    # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)\n    # See https://github.com/esphome/issues/issues/5404\n    sdkconfig_options:\n      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y\n")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 11"),". Adding corresponding components and initialising and configuring device pins."),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"The WIFI ssid and password configuration should be the same as the server, to ensure that the connection is the same network!")),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/11.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'binary_sensor:\n  - platform: gpio\n    pin:\n      number: GPIO3\n      mode: INPUT_PULLUP\n      inverted: True\n    name: "IoT Button"\n')),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 12"),". After completing the above steps click on ",(0,s.yg)("strong",{parentName:"p"},"INSTALL")," in the upper right corner and then select ",(0,s.yg)("strong",{parentName:"p"},"Plug into this computer"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 13"),". Then please be patient, after the waiting time is over, click ",(0,s.yg)("strong",{parentName:"p"},"Download project"),", select ",(0,s.yg)("strong",{parentName:"p"},"Factory format")," to download the project file, and then click ",(0,s.yg)("strong",{parentName:"p"},"Open ESPHome Web"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 14"),". At this point you need to connect the Iot Botton to the computer via usb, and then click ",(0,s.yg)("strong",{parentName:"p"},"CONNECT")," to select the ",(0,s.yg)("strong",{parentName:"p"},"correct serial port"),"!"),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 15"),". To get the ",(0,s.yg)("strong",{parentName:"p"},"factory file")," of your ESPHome project."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 16"),". If all goes well, you will be able to see the following image."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("h3",{id:"adding-iot-button-to-the-dashboard"},"Adding Iot Button to the dashboard"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 17"),". Click on ",(0,s.yg)("strong",{parentName:"p"},"Settings")," and then select ",(0,s.yg)("strong",{parentName:"p"},"Devices & services")),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 18"),". Select the corresponding device."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 19"),". Select the Iot Button to add, you can select the region for the device and click ",(0,s.yg)("strong",{parentName:"p"},"FINISH"),"! The Iot Button appears in the ",(0,s.yg)("strong",{parentName:"p"},"dashboard")," on the homepage!"),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("h2",{id:"iot-button-control-buzzer"},"Iot Button control Buzzer"),(0,s.yg)("h3",{id:"adding-programs-to-the-buzzer"},"Adding programs to the BUZZER"),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"Please make sure you have added buzzer in home assistant, you can refer to the above process to do so.")),(0,s.yg)("p",null,"Firstly, you need to add buzzer to esphome based on the process above. Then you can start to write the programme, you can refer to the example we provided, but you need to pay attention to the difference of the actual pins."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'esphome:\n  name: buzzer\n  friendly_name: buzzer\n\nesp32:\n  board: esp32-c3-devkitm-1\n  framework:\n    type: arduino\n\n# Enable logging\nlogger:\n\n# Enable Home Assistant API\napi:\n  encryption:\n    key: "k13mbm4GBgaxe8yf5IHojn7am3imn0pFZrUwRe3IbRQ="\n\nota:\n  - platform: esphome\n    password: "ba8bb045e584ddeb1803debf2cce1311"\n\nwifi:\n  ssid: !secret wifi_ssid\n  password: !secret wifi_password\n\n  # Enable fallback hotspot (captive portal) in case wifi connection fails\n  ap:\n    ssid: "Buzzer Fallback Hotspot"\n    password: "EL0JOgoaGbQq"\n\ncaptive_portal:\n\noutput:\n  - platform: ledc\n    id: my_buzzer\n    pin: GPIO5\n\nswitch:\n  - platform: template\n    name: "Buzzer"\n    turn_on_action:\n      - output.turn_on: my_buzzer\n      - output.ledc.set_frequency:\n          id: my_buzzer\n          frequency: 1000Hz\n      - output.set_level:\n          id: my_buzzer\n          level: 50%\n    turn_off_action:\n      - output.turn_off: my_buzzer\n')),(0,s.yg)("h3",{id:"automations"},"Automations"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 20"),". Select ",(0,s.yg)("strong",{parentName:"p"},"Automations & scenes"),"."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 21"),". Click ",(0,s.yg)("strong",{parentName:"p"},"CREATE AUTOMATION"),", create new automation."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Step 22"),". You can refer to the following configuration to create your own automation."),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("div",{style:{textAlign:"center"}},(0,s.yg)("img",{src:"https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png",style:{width:1e3,height:"auto"}})),(0,s.yg)("p",null,"If you have successfully completed the above steps, when you press the button, the buzzer will successfully sound and last for two seconds."),(0,s.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,s.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,s.yg)("div",{class:"button_tech_support_container"},(0,s.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,s.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,s.yg)("div",{class:"button_tech_support_container"},(0,s.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,s.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);