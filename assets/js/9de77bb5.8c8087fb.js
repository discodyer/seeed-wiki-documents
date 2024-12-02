"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69320],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>h});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(o),g=i,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<r;d++)s[d]=o[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},81802:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(9668),i=(o(96540),o(15680));const r={description:"How to use a model for XIAO ESP32S3 Sense",title:"for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png",slug:"/sensecraft_ai_pretrained_models_for_xiao",sidebar_position:1,last_update:{date:"12/02/2024",author:"Citric"}},s="Using a model for XIAO ESP32S3 Sense",a={unversionedId:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_XIAO_ESP32S3",id:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_XIAO_ESP32S3",title:"for XIAO ESP32S3 Sense",description:"How to use a model for XIAO ESP32S3 Sense",source:"@site/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_XIAO_ESP32S3.md",sourceDirName:"Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models",slug:"/sensecraft_ai_pretrained_models_for_xiao",permalink:"/sensecraft_ai_pretrained_models_for_xiao",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCraft/SenseCraft_AI/Pretrained_Models/SenseCraft_Pretrained_XIAO_ESP32S3.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1733097600,formattedLastUpdatedAt:"Dec 2, 2024",sidebarPosition:1,frontMatter:{description:"How to use a model for XIAO ESP32S3 Sense",title:"for XIAO ESP32S3 Sense",image:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png",slug:"/sensecraft_ai_pretrained_models_for_xiao",sidebar_position:1,last_update:{date:"12/02/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/sensecraft_ai_overview"},next:{title:"for Grove Vision AI V2",permalink:"/sensecraft_ai_pretrained_models_for_grove_visionai_v2"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1. Filtering models for XIAO ESP32S3 Sense",id:"step-1-filtering-models-for-xiao-esp32s3-sense",level:2},{value:"Step 2. Choose a Model",id:"step-2-choose-a-model",level:2},{value:"Step 3. Connect Your Device",id:"step-3-connect-your-device",level:2},{value:"Step 4. Model Upload",id:"step-4-model-upload",level:2},{value:"Step 5. Model Preview",id:"step-5-model-preview",level:2},{value:"Fine-tuning the Model (Optional)",id:"fine-tuning-the-model-optional",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"using-a-model-for-xiao-esp32s3-sense"},"Using a model for XIAO ESP32S3 Sense"),(0,i.yg)("p",null,"SenseCraft AI is a powerful platform that provides a vast repository of AI models compatible with various devices. It allows developers and enthusiasts to easily deploy and experiment with different AI models on their hardware. In this comprehensive tutorial, we will guide you through the process of using a SenseCraft AI model on the XIAO ESP32S3 Sense board and previewing the model's output. We will also delve into some key concepts and settings to help you understand and optimize the model's performance."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("p",null,"Before getting started, ensure that you have the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"XIAO ESP32S3 Sense board"),": This is a compact and versatile development board that combines the power of the ESP32-S3 microcontroller with a range of sensors and peripherals.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"USB-C cable"),": You'll need a USB cable to connect the XIAO ESP32S3 Sense board to your computer for programming and power supply.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Access to the SenseCraft AI model repository webpage"),": Make sure you have a stable internet connection and can access the SenseCraft AI website."))),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{align:"center"},(0,i.yg)("tr",null,(0,i.yg)("th",null,"XIAO ESP32S3 Sense")),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",style:{width:250,height:"auto"}})))),(0,i.yg)("tr",null,(0,i.yg)("td",null,(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h2",{id:"step-1-filtering-models-for-xiao-esp32s3-sense"},"Step 1. Filtering models for XIAO ESP32S3 Sense"),(0,i.yg)("p",null,"Open your web browser and navigate to the SenseCraft AI model repository."),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://sensecraft.seeed.cc/ai/#/model"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"},"One-Click Direct \ud83d\uddb1\ufe0f"))))),(0,i.yg)("br",null),(0,i.yg)("p",null,"The model repository page displays a wide range of AI models available for different devices and applications."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/13.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"On the left sidebar of the webpage, locate the ",(0,i.yg)("strong",{parentName:"p"},"Supported Devices")," section. From the list of devices, click on ",(0,i.yg)("strong",{parentName:"p"},"XIAO ESP32S3 Sense")," to filter the models compatible with your specific device."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/14.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"This step ensures that you only see the models that can be deployed and run on the XIAO ESP32S3 Sense board."),(0,i.yg)("h2",{id:"step-2-choose-a-model"},"Step 2. Choose a Model"),(0,i.yg)("p",null,"For the purpose of this tutorial, we will use the ",(0,i.yg)("strong",{parentName:"p"},"Face Detection")," model as an example. However, feel free to explore and experiment with other models based on your interests and requirements."),(0,i.yg)("p",null,"Click on the ",(0,i.yg)("strong",{parentName:"p"},"Face Detection")," model to open its dedicated page."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/15.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"On the model page, you will find detailed information about the model, including its description, Model Precision, and Model Format."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/16.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"On the model's page, click the ",(0,i.yg)("strong",{parentName:"p"},"Deploy Model")," button located at the top of the page."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/17.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"This action will initiate the deployment process for the selected model, preparing it to be downloaded and run on your XIAO ESP32S3 Sense board."),(0,i.yg)("h2",{id:"step-3-connect-your-device"},"Step 3. Connect Your Device"),(0,i.yg)("p",null,"After clicking Deploy Model button, click on the ",(0,i.yg)("strong",{parentName:"p"},"Connect Device")," button that appears below the deployment page."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/18.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"A new page will open, at this point, please connect your XIAO ESP32S3 Sense to your computer via USB-C cable."),(0,i.yg)("p",null,"On the device connection page, you will see a summary of the model information, including its name and model id. Review the details carefully to ensure that the correct model is selected for your XIAO ESP32S3 Sense board. If the information is accurate, click the ",(0,i.yg)("strong",{parentName:"p"},"Confirm")," button to proceed with the model deployment."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/19.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("p",null,"After confirming the model information, a window will pop up asking you to select the serial port for your XIAO board. The serial port is the communication channel between your computer and the XIAO ESP32S3 Sense board. Choose the correct port number corresponding to your XIAO ESP32S3 Sense. If you are unsure, you can refer to your operating system's device manager or the board's documentation to identify the correct port."),(0,i.yg)("p",null,"Click the ",(0,i.yg)("strong",{parentName:"p"},"Connect")," button to establish the connection between your computer and the XIAO board."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"step-4-model-upload"},"Step 4. Model Upload"),(0,i.yg)("p",null,"Once the connection is established, the selected model will start downloading to your XIAO board. The model upload process may take approximately 1-2 minutes, depending on the size of the model and the speed of your internet connection. During this step, the necessary model files and dependencies are transferred to the XIAO ESP32S3 Sense board, preparing it for running the AI model locally."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/21.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"step-5-model-preview"},"Step 5. Model Preview"),(0,i.yg)("p",null,"After the model upload is successful, the preview feature will automatically start. The preview window will display a real-time video feed from your XIAO ESP32S3 Sense's camera, along with the model's detection results overlaid on the video. In the case of the Face Detection model, you will see bounding boxes drawn around the detected faces in the video stream. Each bounding box represents a face that the model has identified. The preview feature allows you to see the model's output in real-time, giving you an immediate visual feedback of its performance."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/22.png",style:{width:1e3,height:"auto"}})),(0,i.yg)("h2",{id:"fine-tuning-the-model-optional"},"Fine-tuning the Model (Optional)"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"If you want to optimize the model's performance or adapt it to your specific use case, you can fine-tune the model's settings using the options available below the preview section.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Two important parameters that you can adjust are the "Confidence Threshold" and the "Intersection over Union (IoU) Threshold".'),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Confidence Threshold"),": This value determines the minimum confidence level required for the model to consider a detection as valid. A higher confidence threshold will result in fewer detections but with higher certainty, while a lower threshold will allow more detections but may include some false positives.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/confi.gif",style:{width:600,height:"auto"}})),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"IoU Threshold"),": IoU is a metric that measures the overlap between the predicted bounding box and the ground truth bounding box. It is used to determine the accuracy of the object detection. The IoU threshold sets the minimum IoU value required for a detection to be considered a true positive. Adjusting this threshold can help in fine-tuning the model's precision and recall.")),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/iou.gif",style:{width:600,height:"auto"}})))),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Experiment with different values for the Confidence Threshold and IoU Threshold to find the optimal balance between detecting faces accurately and minimizing false positives. The best settings may vary depending on your specific application and the characteristics of the images or video feed.")),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"Congratulations! You have successfully deployed a SenseCraft AI Face Detection model on your XIAO ESP32S3 Sense board, previewed its output, and learned how to fine-tune the model's performance."),(0,i.yg)("p",null,"By following the steps outlined in this tutorial, you can easily explore and experiment with various AI models available in the SenseCraft AI repository on your XIAO ESP32S3 Sense. The SenseCraft AI platform provides a user-friendly interface and a wide range of models to choose from, making it accessible for both beginners and experienced developers."),(0,i.yg)("p",null,"Remember to refer to the documentation and resources provided by SenseCraft AI and the XIAO ESP32S3 Sense board for more information on supported models, their capabilities, and any additional configuration options available."),(0,i.yg)("p",null,"Feel free to explore other models, experiment with different settings, and adapt them to your specific projects or applications. The possibilities are endless with the combination of SenseCraft AI and the XIAO ESP32S3 Sense board."),(0,i.yg)("p",null,"Happy experimenting and creating with SenseCraft AI models on your XIAO ESP32S3 Sense!"),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);