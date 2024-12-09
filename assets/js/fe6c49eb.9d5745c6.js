"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59741],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91701:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(9668),r=(t(96540),t(15680));const l={description:"Get Started with Wio Terminal and Wappsto IoT",title:"Get Started with Wio Terminal and Wappsto IoT",keywords:["Wio_terminal Easy_IoT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",last_update:{date:"1/30/2023",author:"jianjing Huang"}},i="Get Started with Wio Terminal and Wappsto IoT",o={unversionedId:"Sensor/Wio_Terminal/Application/Easy_IoT/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",id:"Sensor/Wio_Terminal/Application/Easy_IoT/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",title:"Get Started with Wio Terminal and Wappsto IoT",description:"Get Started with Wio Terminal and Wappsto IoT",source:"@site/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Get-Started-with-Wio-Terminal-and-Wappsto-IoT.md",sourceDirName:"Sensor/Wio_Terminal/Application/Easy_IoT",slug:"/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",permalink:"/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Get-Started-with-Wio-Terminal-and-Wappsto-IoT.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Get Started with Wio Terminal and Wappsto IoT",title:"Get Started with Wio Terminal and Wappsto IoT",keywords:["Wio_terminal Easy_IoT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get-Started-with-Wio-Terminal-and-Wappsto-IoT",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Connect Wio Terminal to Google Cloud IoT Core",permalink:"/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core"},next:{title:"Cyber Desk on Wio Terminal using Platform IO, powered by Cursor AI",permalink:"/CyberDeck_Wio-Terminal"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Wappsto Features",id:"wappsto-features",level:2},{value:"Dashboard features",id:"dashboard-features",level:3},{value:"Dashboard types",id:"dashboard-types",level:4},{value:"Blank and fleet management dashboard widgets",id:"blank-and-fleet-management-dashboard-widgets",level:4},{value:"Cloud automation and web APPS",id:"cloud-automation-and-web-apps",level:3},{value:"Sometimes overlooked features of Wappsto",id:"sometimes-overlooked-features-of-wappsto",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Requirement",id:"hardware-requirement",level:3},{value:"Software Requirement",id:"software-requirement",level:3},{value:"Update Wio Terminal WiFi Firmware",id:"update-wio-terminal-wifi-firmware",level:2},{value:"Wappsto Prerequisites",id:"wappsto-prerequisites",level:2},{value:"An account on Wappsto",id:"an-account-on-wappsto",level:3},{value:"Arduino IDE installed on your PC",id:"arduino-ide-installed-on-your-pc",level:3},{value:"Install ArduinoJson library",id:"install-arduinojson-library",level:4},{value:"Install this wappsto library",id:"install-this-wappsto-library",level:4},{value:"Generate certificates and id for a new device",id:"generate-certificates-and-id-for-a-new-device",level:3},{value:"wappsto_config.h",id:"wappsto_configh",level:4},{value:"Claiming and ownership - Not allowed to access values",id:"claiming-and-ownership---not-allowed-to-access-values",level:4},{value:"This Wappsto library",id:"this-wappsto-library",level:2},{value:"Required structure",id:"required-structure",level:3},{value:"Initialize Wappsto",id:"initialize-wappsto",level:3},{value:"Set the config and connect",id:"set-the-config-and-connect",level:4},{value:"Optional config parameters, log and ping",id:"optional-config-parameters-log-and-ping",level:3},{value:"Create your network",id:"create-your-network",level:3},{value:"Create a device",id:"create-a-device",level:3},{value:"Values",id:"values",level:4},{value:"Read and write data",id:"read-and-write-data",level:4},{value:"Value parameters",id:"value-parameters",level:3},{value:"Create a number value",id:"create-a-number-value",level:4},{value:"Create a string value",id:"create-a-string-value",level:4},{value:"Create a blob value",id:"create-a-blob-value",level:4},{value:"Create a xml value",id:"create-a-xml-value",level:4},{value:"Send a value report",id:"send-a-value-report",level:4},{value:"Set a control value",id:"set-a-control-value",level:4},{value:"Add wappsto in your loop function",id:"add-wappsto-in-your-loop-function",level:2},{value:"Receive a value control request",id:"receive-a-value-control-request",level:3},{value:"Receive a value refresh request (report value only)",id:"receive-a-value-refresh-request-report-value-only",level:3},{value:"Getting last data and timestamp from value",id:"getting-last-data-and-timestamp-from-value",level:3},{value:"Temperature Detecting Demo",id:"temperature-detecting-demo",level:3}],u={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-started-with-wio-terminal-and-wappsto-iot"},"Get Started with Wio Terminal and Wappsto IoT"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"The ",(0,r.yg)("strong",{parentName:"p"},"Wio Terminal")," is a SAMD51-based microcontroller with Wireless Connectivity powered by ",(0,r.yg)("strong",{parentName:"p"},"Realtek RTL8720DN")," that\u2019s compatible with Arduino and MicroPython. Currently, wireless connectivity is only supported by Arduino. It runs at ",(0,r.yg)("strong",{parentName:"p"},"120MHz")," (Boost up to 200MHz), ",(0,r.yg)("strong",{parentName:"p"},"4MB")," External Flash and ",(0,r.yg)("strong",{parentName:"p"},"192KB")," RAM. It supports both Bluetooth and Wi-Fi providing backbone for IoT projects. The Wio Terminal itself is equipped with ",(0,r.yg)("strong",{parentName:"p"},"a 2.4\u201d LCD Screen, onboard IMU(LIS3DHTR), Microphone, Buzzer, microSD card slot, Light sensor, and Infrared Emitter(IR 940nm).")," On top of that, it also has two multifunctional Grove ports for ",(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove.html"},"Grove Ecosystem")," and 40 Raspberry pi compatible pin GPIO for more add-ons."),(0,r.yg)("p",null,"Wappsto is a powerful, intelligent application which easily can be set up to automatically draw data from various sources. It has an integrated standard dashboard for monitoring and analysing your data."),(0,r.yg)("p",null,"Wappsto also offers tools that allow developers to create IoT applications as web apps with integrations and automations. Integrated in Wappsto there is also a marketplace, where developers and users can share their Apps."),(0,r.yg)("p",null,"Wappsto by Seluxit is a powerful IoT platform featuring easily customizable Dashboards that makes visualizing live or historical data a breeze and many other features including cloud automations."),(0,r.yg)("p",null,"The Wappsto APP for IOS and Android, let\u2019s you view and control devices on the fly as well."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto1.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("h2",{id:"wappsto-features"},"Wappsto Features"),(0,r.yg)("p",null,"You can operate the following function while you connecting the Wappsto. For further information, you can do more with your data ",(0,r.yg)("a",{parentName:"p",href:"https://www.seluxit.com/iot-products/iot-solution-builder/wapps"},"here"),"."),(0,r.yg)("h3",{id:"dashboard-features"},"Dashboard features"),(0,r.yg)("h4",{id:"dashboard-types"},"Dashboard types"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Blank dashboard - Static clean canvas to mix and match widgets"),(0,r.yg)("li",{parentName:"ol"},"Fleet management - Dynamic clean canvas to mix and match widgets - easily switch between devices to get an overview of possible outliers."),(0,r.yg)("li",{parentName:"ol"},"Geolocation dashboard - Map overview of devices, possible to filter based on device alarms.",(0,r.yg)("br",null),(0,r.yg)("img",{parentName:"li",src:"https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A",alt:null}))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Geolocation using filtered lists filter:\n",(0,r.yg)("img",{parentName:"li",src:"https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc",alt:null}))),(0,r.yg)("h4",{id:"blank-and-fleet-management-dashboard-widgets"},"Blank and fleet management dashboard widgets"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Filtered list - configure device value limits that trigger alarms and visual cues in the geolocation dashboard.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Historical location widget - Draws on a map based on device locations within a configured timeframe. (maximum 1 mark per minute and minimum 50 meters between marks)\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Chart widget - Choose and configure multiple data sources, timeframe, chart style and aggregation method. It can also be toggled to show live data.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Live data example:\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Value list widget - Show live data in a box together with control / desired state values.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Compass widget - Show the angle of a single device with live data.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Liquid chart widget - Show the relative level of a single device with live data.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Gauge widget - Show live data from a single value in a gauge, with configurable color scheme and limits.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Current location widget - Show the current location of one or multiple devices alongside other widgets.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA",alt:null}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Log list widget - Show logs of one or more devices or values, alongside other widgets.\n",(0,r.yg)("img",{parentName:"p",src:"https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs",alt:null})))),(0,r.yg)("h3",{id:"cloud-automation-and-web-apps"},"Cloud automation and web APPS"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Twitter integration"),(0,r.yg)("li",{parentName:"ol"},"Hue integration"),(0,r.yg)("li",{parentName:"ol"},"Shelly integration"),(0,r.yg)("li",{parentName:"ol"},"Weather forecast integration (yr.no)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Blocks - Cloud automations"),(0,r.yg)("li",{parentName:"ul"},"Blockly NoCode programming"),(0,r.yg)("li",{parentName:"ul"},"Blockly javascript programming"),(0,r.yg)("li",{parentName:"ul"},"Set up automations and interactions between all devices and services you have connected on Wappsto"),(0,r.yg)("li",{parentName:"ul"},"Twitter and Wappsto:bit cross-automation example: ",(0,r.yg)("a",{parentName:"li",href:"https://bit.wappsto.com/project/wappsto-blocks/"},"https://bit.wappsto.com/project/wappsto-blocks/"))))),(0,r.yg)("h3",{id:"sometimes-overlooked-features-of-wappsto"},"Sometimes overlooked features of Wappsto"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Distributed cloud service with multiple backups"),(0,r.yg)("li",{parentName:"ol"},"Device sharing"),(0,r.yg)("li",{parentName:"ol"},"End to end encryption (transport encryption)"),(0,r.yg)("li",{parentName:"ol"},"Device security (unique device and network keys)"),(0,r.yg)("li",{parentName:"ol"},"Data forwarding"),(0,r.yg)("li",{parentName:"ol"},"Data extraction (CSV)"),(0,r.yg)("li",{parentName:"ol"},"Smart login across platforms (email,google,facebook,apple login)"),(0,r.yg)("li",{parentName:"ol"},"Multi platform: Website + Smartphone APPs.")),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"hardware-requirement"},"Hardware Requirement"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Wio Terminal x 1"),(0,r.yg)("li",{parentName:"ul"},"Computer x 1"),(0,r.yg)("li",{parentName:"ul"},"USB Type-C Cable x 1")),(0,r.yg)("h3",{id:"software-requirement"},"Software Requirement"),(0,r.yg)("p",null,"Please check this ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#software"},"link"),"."),(0,r.yg)("h2",{id:"update-wio-terminal-wifi-firmware"},"Update Wio Terminal WiFi Firmware"),(0,r.yg)("p",null,"Please check this ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware"},"link"),"."),(0,r.yg)("h2",{id:"wappsto-prerequisites"},"Wappsto Prerequisites"),(0,r.yg)("h3",{id:"an-account-on-wappsto"},"An account on Wappsto"),(0,r.yg)("p",null,"It is also assumed you have created a account on ",(0,r.yg)("a",{parentName:"p",href:"https://wappsto.com/"},"Wappsto"),", if not please create one first."),(0,r.yg)("h3",{id:"arduino-ide-installed-on-your-pc"},"Arduino IDE installed on your PC"),(0,r.yg)("p",null,"If you do not have this, see ",(0,r.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide"},"https://www.arduino.cc/en/Guide")),(0,r.yg)("h4",{id:"install-arduinojson-library"},"Install ArduinoJson library"),(0,r.yg)("p",null,"From the library manager you need to install ArduinoJson library - see ",(0,r.yg)("a",{parentName:"p",href:"https://arduinojson.org/v6/doc/installation/"},"https://arduinojson.org/v6/doc/installation/")," for more details."),(0,r.yg)("h4",{id:"install-this-wappsto-library"},"Install this wappsto library"),(0,r.yg)("p",null,'To install this library in Arduino Ide, download this project as a zip-file, click "Code" and choose "Download ZIP".\nThen choose "Sketch"->"Include Library"->"Add .Zip Library..." See ',(0,r.yg)("a",{parentName:"p",href:"https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries"},"https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries")," for details."),(0,r.yg)("h3",{id:"generate-certificates-and-id-for-a-new-device"},"Generate certificates and id for a new device"),(0,r.yg)("p",null,"For your physical device to identify itself towards Wappsto it needs a network id, the server CA certificate, and the client certificate/key - all these has to be generated on Wappsto.com and placed in (if matching the examples) called wappsto_config.h."),(0,r.yg)("h4",{id:"wappsto_configh"},"wappsto_config.h"),(0,r.yg)("p",null,"As a help to generate this you can use the ",(0,r.yg)("strong",{parentName:"p"},"Python Script")," included in this repository in the folder generate_config_header.\nFor a first time run, you may need to install the required libraries"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd <path to downloaded arduino_wappstoiot>\ncd generate_config_header\npip install -r requirements.txt\n")),(0,r.yg)("p",null,"To generate a header file:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Go to the ",(0,r.yg)("inlineCode",{parentName:"li"},"generate_config_header")," folder:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd generate_config_header\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Use the command:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"python main.py --type arduino\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Then you will be asked to login using email and password for your user on Wappsto.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the newly generated file ",(0,r.yg)("inlineCode",{parentName:"p"},"wappsto_config.h")," to your Arduino sketch folder. Note if generated correctly it should have a valid UUID (a string similar, but different, to this ",(0,r.yg)("inlineCode",{parentName:"p"},'"d7fafe76-b020-4594-8f2a-aae11c6b6589"')," defined for the ",(0,r.yg)("inlineCode",{parentName:"p"},"const char* network_uuid =")," line."))),(0,r.yg)("p",null,"Note, if you have both pyhton2 and python3 installed you may need to use"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip3 install -r requirements.txt\npython3 main.py --type arduino\n")),(0,r.yg)("p",null,"If you get the error like belowing:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ImportError: cannot import name 'soft_unicode' from 'markupsafe' \n")),(0,r.yg)("p",null,"Which it is due to a change in dependency for another library, it can be fixed using this command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip install -U MarkupSafe==0.20\n")),(0,r.yg)("h4",{id:"claiming-and-ownership---not-allowed-to-access-values"},"Claiming and ownership - Not allowed to access values"),(0,r.yg)("p",null,'If you get a "not allowed to access" values on the device you have created, it is because you either have not claimed it, or the ownership have been reset.'),(0,r.yg)("p",null,"Since you would be the manfactorer you will still see the device on your list of networks, you can see it is online, but you will not be able to see values or control the device."),(0,r.yg)("p",null,'To claim a device, go to the "IoT Devices" tab on ',(0,r.yg)("a",{parentName:"p",href:"https://wappsto.com/devices"},"https://wappsto.com/devices"),' click the "+ Add an IoT device" button in the top right corner, and enter the network UUID int the box.'),(0,r.yg)("p",null,"If you click the delete button for a network, it will remove the ownership of the device, so it can be claimed by another user. Once a device have been claimed it can not be claimed by another."),(0,r.yg)("h2",{id:"this-wappsto-library"},"This Wappsto library"),(0,r.yg)("h3",{id:"required-structure"},"Required structure"),(0,r.yg)("p",null,"The network id is generated by ",(0,r.yg)("a",{parentName:"p",href:"https://wappsto.com/"},"Wappsto")," and is linked to the certificates."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\u251c\u2500\u2500 "Network Name"\n\u2502   \u2514\u2500\u2500 "Device 1 name"\n\u2502   |   \u2514\u2500\u2500 "Value 1 name"\n\u2502   |   \u2514\u2500\u2500 "Value 2 name"\n|   |   ...\n\u2502   \u2514\u2500\u2500 "Device 2 name"\n\u2502       \u2514\u2500\u2500 "Value 1 name"\n\u2502       \u2514\u2500\u2500 "Value 2 name"\n...\n\n')),(0,r.yg)("p",null,'Note that that "name" for device and value object have extra functionality, and rules.'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A network must not have have devices with identical names."),(0,r.yg)("li",{parentName:"ul"},"A single device must not have values with identical names. (as the example above it is allowed to use the same name under a different device.)")),(0,r.yg)("p",null,"The library will ask Wappsto if an device/value exists with that name before creating it, so it will link to the right value. If nothing have this name a new will be created. If a parent have multiple children with the same name the library will choose the first available."),(0,r.yg)("p",null,"If you change a name a new one will be created, but the old will not be delete. This you will have to do yourself, eg. using ",(0,r.yg)("a",{parentName:"p",href:"https://wappsto.com/devices"},"https://wappsto.com/devices")),(0,r.yg)("h3",{id:"initialize-wappsto"},"Initialize Wappsto"),(0,r.yg)("p",null,"Wappsto needs a reference to WiFiClientSecure when created, example."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"WiFiClientSecure client;\nWappsto wappsto(&client);\n")),(0,r.yg)("h4",{id:"set-the-config-and-connect"},"Set the config and connect"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'#include "wappsto_config.h"\n...\nwappsto.config(network_uuid, ca, client_crt, client_key);\nif(wappsto.connect()) {\n    // Connected\n} else {\n    // Failed to connect\n}\n')),(0,r.yg)("h3",{id:"optional-config-parameters-log-and-ping"},"Optional config parameters, log and ping"),(0,r.yg)("p",null,"Besides the mandatory commands you can also set ping interval and log level:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ping interval will send a short package from the device to wappsto to keep the connection alive. If your device rarely sends data, it might be a good idea to add this to avoid timeout on the connection."),(0,r.yg)("li",{parentName:"ul"},"The log level can print information from the wappsto library to the serial debug port - the following levels are possible:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"   VERBOSE\n   INFO\n   WARNING\n   ERROR\n   NO_LOGS <- Default\n")),(0,r.yg)("h3",{id:"create-your-network"},"Create your network"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'myNetwork = wappsto.createNetwork("Network Name");\n')),(0,r.yg)("h3",{id:"create-a-device"},"Create a device"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'DeviceDescription_t myDeviceDescription = {\n    .name = "Device name",\n    .product = "Product name",\n    .manufacturer = "Company name",\n    .description = "Description of the product",\n    .version = "1.0",\n    .serial = "00001",\n    .protocol = "Json-RPC",\n    .communication = "WiFi",\n};\n\nmyDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);\n')),(0,r.yg)("h4",{id:"values"},"Values"),(0,r.yg)("p",null,"Values is probably what you are mostly interessted in, and can be one of these:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Number - integers or decimals, these will be logged and shown as a graph."),(0,r.yg)("li",{parentName:"ul"},"String - a human readable string (UTF-8)"),(0,r.yg)("li",{parentName:"ul"},"Blob - data, for example a base64 encoded image, hex values, etc."),(0,r.yg)("li",{parentName:"ul"},"Xml - a complete xml document")),(0,r.yg)("h4",{id:"read-and-write-data"},"Read and write data"),(0,r.yg)("p",null,"Each value can have one or two data points:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Report: Data read on the device and reported to the server ","[READ]"),(0,r.yg)("li",{parentName:"ul"},"Control: Data sent from the server to the device to control it ","[WRITE]")),(0,r.yg)("p",null,"Your value may be one of them or both."),(0,r.yg)("h3",{id:"value-parameters"},"Value parameters"),(0,r.yg)("p",null,"To explain the parameters, we will use an example for a temperature value placed in a living room."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'name: An name for the value, here "Living room"'),(0,r.yg)("li",{parentName:"ul"},'type: Is a help for the UI to find values of the right type, here "temperature"'),(0,r.yg)("li",{parentName:"ul"},"The PERMISSION_e parameter tells the library if it should create report and/or control for this value.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"READ -> report state"),(0,r.yg)("li",{parentName:"ul"},"WRITE -> control state"),(0,r.yg)("li",{parentName:"ul"},"READ_WRITE -> report and control state"))),(0,r.yg)("li",{parentName:"ul"},"min: (Number only) lowest number (to be used by UI)"),(0,r.yg)("li",{parentName:"ul"},"max: For number highest numer, for string/blob maximum length"),(0,r.yg)("li",{parentName:"ul"},"step: (Number only) Step size for a number, for example 1 for integers, and 0.1 for decimals"),(0,r.yg)("li",{parentName:"ul"},"unit: (Numbers only) is there a unit for this number, in the temperature example it is \xb0C")),(0,r.yg)("p",null,"The first time a value is created a number will have the value NA, and the string/blob will be empty, for both control and report."),(0,r.yg)("p",null,"If the value exists, the data of the value will not change. If you want to value to update when the device reboots, you have to call report/control."),(0,r.yg)("h4",{id:"create-a-number-value"},"Create a number value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'ValueNumber_t myNumberValueParameters = {   .name = "Living room",\n                                            .type = "temperature", // value type\n                                            .permission = READ_WRITE,\n                                            .min = -20,\n                                            .max = 100,\n                                            .step = 0.1,\n                                            .unit = "\xb0C",\n                                            .si_conversion = ""};\n\nmyNumberValue = myDevice->createValueNumber(&myNumberValueParameters);\n')),(0,r.yg)("h4",{id:"create-a-string-value"},"Create a string value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'ValueString_t myStringValueParameters = { .name = "Value String Name",\n                                          .type = "value type",\n                                          .permission = READ_WRITE,\n                                          .max = 200,\n                                          .encoding = ""};\n\nmyStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);\n')),(0,r.yg)("h4",{id:"create-a-blob-value"},"Create a blob value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",\n                                       .type = "value type",\n                                       .permission = READ_WRITE,\n                                       .max = 200,\n                                       .encoding = ""};\n\nmyBlobValue = myDevice->createValueBlob(&myBlobValueParameters);\n')),(0,r.yg)("h4",{id:"create-a-xml-value"},"Create a xml value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",\n                                     .type = "value type",\n                                     .permission = READ_WRITE,\n                                     .xsd = "test",\n                                     .namespace = "test"};\n\nmyXmlValue = myDevice->createValueXml(&myXmlValueParameters);\n')),(0,r.yg)("h4",{id:"send-a-value-report"},"Send a value report"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int myInt = 123;\ndouble myDouble = 42.7;\n\nmyNumberValue.report("987");    // You can send numbers as a string you format\nmyNumberValue.report(myInt);    // Report the number as an int\nmyNumberValue.report(myDouble); // Report the number as a double\n\n\nmyStringValue.report("Example string");\n\nmyBlobValue.report("A5FF2C");\n\n')),(0,r.yg)("h4",{id:"set-a-control-value"},"Set a control value"),(0,r.yg)("p",null,"Normally the control value will only be updated from wappsto.com, but you may need to set a current value when booting or in other situations.\nSetting this is similar to report:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int myInt = 123;\ndouble myDouble = 42.7;\n\nmyNumberValue.control("987");    // You can send numbers as a string you format\nmyNumberValue.control(myInt);    // Set control as an int\nmyNumberValue.control(myDouble); // Set control as a double\n\n\nmyStringValue.control("Example string");\n\nmyBlobValue.control("A5FF2C");\n\n')),(0,r.yg)("h2",{id:"add-wappsto-in-your-loop-function"},"Add wappsto in your loop function"),(0,r.yg)("p",null,"For Wappsto to be able to receive data (control, refresh, and pings), it has to be included in your Arduino loop function - if not you will never receive any callbacks with data, and the connection may experience a timeout."),(0,r.yg)("p",null,"It is also recommended not to block the loop for extended periods of time."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"wappsto.dataAvailable();\n")),(0,r.yg)("h3",{id:"receive-a-value-control-request"},"Receive a value control request"),(0,r.yg)("p",null,"You can choose if you want the control data translated to a double, or if you want the string directly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"// Receive control with a number (double)\nvoid controlNumberCallback(Value *value, double data, String timestamp)\n{\n    // handle control request\n}\n\n// Receive control with a string\nvoid controlStringCallback(Value *value, String data, String timestamp)\n{\n    // handle control request\n}\n\n...\nmyNumberValue->onControl(&controlNumberCallback);\nmyStringValue->onControl(&controlStringCallback);\n")),(0,r.yg)("h3",{id:"receive-a-value-refresh-request-report-value-only"},"Receive a value refresh request (report value only)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"void refreshNumberCallback(Value *value)\n{\n    // handle refresh request\n}\n...\nmyNumberValue->onRefresh(&refreshNumberCallback);\n\n")),(0,r.yg)("h3",{id:"getting-last-data-and-timestamp-from-value"},"Getting last data and timestamp from value"),(0,r.yg)("p",null,"You can access the last received/send data and timestamp by using these functions.\nFor instance after a new boot, the last controlled state set in Wappsto.com will be retrieved, so your program and start with that state."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note")," retriveing numberData from an empty value will return a 0;"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"String ctrlData = myNumberValue.getControlData();\n\ndouble ctrlDataNumber = myNumberValue.getControlNumberData();\n\nString ctrlTime = myNumberValue.getControlTimestamp();\n\nString reportData = myNumberValue.getReportData();\n\ndouble reportDataNumber = myNumberValue.getReportNumberData();\n\nString reportTime = myNumberValue.getReportTimestamp();\n")),(0,r.yg)("p",null,"For futher examples see the code in the example folder, or see 'File -> Examples -> Wappsto' in Arduino IDE."),(0,r.yg)("h3",{id:"temperature-detecting-demo"},"Temperature Detecting Demo"),(0,r.yg)("p",null,"Here we are going use prodived temperature example and display on the Wappsto as you see below:"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto2.png",alt:"pir",width:500,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1"),'. After uploading the code, you can see it has shown connecting successfully at "IoT Devices" on the Wappsto website.')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto3.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2"),'. Click the "Dashboards" column at the left and select "Add widget"')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto4.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3"),'. These provided blocks can display data in serval ways, here we chose "Chart"')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto5.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4"),'. Select "Temperature Example" as we upload before and click "Next"')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto6.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 5"),'. Configure the displayed data. Here we set the data displayed in "Line"')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto7.png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 6"),". After all sets up, we are able to see the data output at the Dashboards")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg",alt:"pir",width:800,height:"auto"})))}m.isMDXComponent=!0}}]);