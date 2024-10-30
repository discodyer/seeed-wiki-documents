"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1383],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,u=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return n?o.createElement(u,r(r({ref:t},d),{},{components:n})):o.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(9668),a=(n(96540),n(15680));const i={description:"This tutorial will guide on how to deploy Watcher's AI service locally off the SenseCraft service to use Watcher.",title:"Deploy Watcher's AI capabilities locally",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png",slug:"/watcher_local_deploy",sidebar_position:3,last_update:{date:"10/18/2024",author:"Citric"}},r="Deploy Watcher's AI capabilities locally",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Software_Framework_Overview/sensecap_watcher_local_deploy",id:"Sensor/SenseCAP/SenseCAP_Watcher/Software_Framework_Overview/sensecap_watcher_local_deploy",title:"Deploy Watcher's AI capabilities locally",description:"This tutorial will guide on how to deploy Watcher's AI service locally off the SenseCraft service to use Watcher.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Software_Framework_Overview/sensecap_watcher_local_deploy.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Software_Framework_Overview",slug:"/watcher_local_deploy",permalink:"/watcher_local_deploy",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Software_Framework_Overview/sensecap_watcher_local_deploy.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1729209600,formattedLastUpdatedAt:"Oct 18, 2024",sidebarPosition:3,frontMatter:{description:"This tutorial will guide on how to deploy Watcher's AI service locally off the SenseCraft service to use Watcher.",title:"Deploy Watcher's AI capabilities locally",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png",slug:"/watcher_local_deploy",sidebar_position:3,last_update:{date:"10/18/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Watcher Software Service Introduction",permalink:"/watcher_software_service_framework"},next:{title:"Notifications",permalink:"/notifications_with_watcher_main_page"}},l={},c=[{value:"Software Preparation",id:"software-preparation",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Performance Considerations",id:"performance-considerations",level:3},{value:"Devices Benchmark",id:"devices-benchmark",level:3},{value:"Deployment on Windows",id:"deployment-on-windows",level:2},{value:"Deployment on MacOS",id:"deployment-on-macos",level:2},{value:"Deployment on NVIDIA\xae Jetson AGX Orin / Linux",id:"deployment-on-nvidia-jetson-agx-orin--linux",level:2},{value:"Configure the use of local AI services on the SenseCraft APP",id:"configure-the-use-of-local-ai-services-on-the-sensecraft-app",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deploy-watchers-ai-capabilities-locally"},"Deploy Watcher's AI capabilities locally"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/87.png",style:{width:800,height:"auto"}})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now")))),(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.youtube.com/watch?v=ny22Z0cAIqE"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Watcher's Video")))),(0,a.yg)("a",{class:"get_one_now_item",href:"https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Github Repository"))))),(0,a.yg)("br",null),(0,a.yg)("p",null,"SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. While Watcher can utilize SenseCraft AI services, it also provides the option to deploy AI capabilities locally on your own devices, giving you greater control, privacy, and flexibility."),(0,a.yg)("p",null,"In this comprehensive guide, we will walk you through the process of setting up and deploying Watcher's AI services on your local devices. Whether you're using a Windows PC, a MacOS machine, or an NVIDIA\xae Jetson AGX Orin, we'll provide step-by-step instructions to help you harness the power of Watcher's AI capabilities in your own environment."),(0,a.yg)("p",null,"Throughout this guide, we'll cover the necessary software and hardware preparations, the deployment process for each supported platform, and how to effectively utilize Watcher's local AI services to unlock new possibilities and enhance your productivity. By the end of this guide, you'll have a solid understanding of how to leverage Watcher's AI capabilities on your own devices, empowering you to create intelligent and personalized solutions tailored to your needs."),(0,a.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,a.yg)("p",null,"To utilize Watcher's local deployment capabilities, users first need to download the necessary software. The software package includes the Watcher application and the Device AI Service components, which enable users to set up and configure their local AI services."),(0,a.yg)("p",null,"Users can download the Watcher APP through the following download links:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"Windows"),":")),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://staticfiles.sensecraft.ai/watcher_service_latest.exe"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," For Windows \ud83d\uddb1\ufe0f"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"macOS"),": ")),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://staticfiles.sensecraft.ai/watcher_service_latest.dmg"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," For macOS \ud83d\uddb1\ufe0f"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For ",(0,a.yg)("strong",{parentName:"li"},"Linux"),": ")),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," For Linux \ud83d\uddb1\ufe0f"))))),(0,a.yg)("br",null),(0,a.yg)("p",null,"Please choose the appropriate download link based on your operating system. The Watcher APP is compatible with Windows, macOS, and major Linux distributions, ensuring a seamless experience across different platforms."),(0,a.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,a.yg)("p",null,"To ensure a smooth and optimal experience when deploying Watcher's AI capabilities locally, your device must meet the minimum hardware requirements. These requirements vary depending on your operating system. Below are the hardware requirements for each supported platform:"),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null),(0,a.yg)("th",null,"Windows"),(0,a.yg)("th",null,"Mac"),(0,a.yg)("th",null,"Linux (arm64)")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Graphics Card (Recommended Configuration)"),(0,a.yg)("td",{align:"center"},"GeForece RTX2070"),(0,a.yg)("td",{align:"center"},"Apple M1 16 GB"),(0,a.yg)("td",{align:"center"},"GeForece RTX2070")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"RAM (Minimum Configuration)"),(0,a.yg)("td",{align:"center"},"8 GB"),(0,a.yg)("td",{align:"center"},"16 GB"),(0,a.yg)("td",{align:"center"},"8 GB")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Storage (Minimum Configuration)"),(0,a.yg)("td",{align:"center"},"20 GB"),(0,a.yg)("td",{align:"center"},"20 GB"),(0,a.yg)("td",{align:"center"},"20 GB")))),(0,a.yg)("p",null,"It's important to note that these are the minimum requirements, and having higher specifications can significantly improve the performance and responsiveness of Watcher's AI services. If you plan to deploy multiple AI services simultaneously or process large amounts of data, we recommend using devices with more advanced hardware configurations."),(0,a.yg)("h3",{id:"performance-considerations"},"Performance Considerations"),(0,a.yg)("p",null,"The performance of Watcher's locally deployed AI services can vary based on your device's hardware specifications. Here are some general performance guidelines:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"RAM"),": Higher amounts of RAM allow for smoother multitasking and can handle more complex AI models and larger datasets."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Graphics Card"),": A dedicated graphics card like the RTX2070 can greatly accelerate AI computations, especially for tasks involving computer vision and deep learning."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Storage"),": Sufficient storage space is essential for storing AI models, datasets, and generated outputs. The recommended 20 GB of storage ensures ample space for Watcher's AI services.")),(0,a.yg)("p",null,"When deploying Watcher's AI services locally, it's crucial to consider your specific use case and the complexity of the AI models you intend to use. If you require real-time processing or plan to handle resource-intensive tasks, it's recommended to opt for higher-end hardware configurations to ensure optimal performance."),(0,a.yg)("p",null,"By meeting the hardware requirements and considering the performance factors mentioned above, you can ensure a smooth and efficient deployment of Watcher's AI capabilities on your local device."),(0,a.yg)("h3",{id:"devices-benchmark"},"Devices Benchmark"),(0,a.yg)("p",null,"Here's our response timeline after deploying AI services on some of our devices."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{align:"center"},(0,a.yg)("tr",null,(0,a.yg)("th",null,"Device"),(0,a.yg)("th",null,"Windows 10 32GB with GeForce RTX4060 Graphics Card"),(0,a.yg)("th",null,"Windows 10 16GB with non-Graphics Card"),(0,a.yg)("th",null,"Mac Mini M1 (16 GB)"),(0,a.yg)("th",null,"NVIDIA\xae Jetson AGX Orin 32GB")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Task Analysis Time"),(0,a.yg)("td",{align:"center"},"5s"),(0,a.yg)("td",{align:"center"},"17m14s"),(0,a.yg)("td",{align:"center"},"36s"),(0,a.yg)("td",{align:"center"},"18s")),(0,a.yg)("tr",null,(0,a.yg)("th",null,"Image Analysis Time"),(0,a.yg)("td",{align:"center"},"4s"),(0,a.yg)("td",{align:"center"},"4m10s"),(0,a.yg)("td",{align:"center"},"8s"),(0,a.yg)("td",{align:"center"},"7s")))),(0,a.yg)("p",null,"When comparing NVIDIA Jetson AGX series products to consumer-grade graphics cards like the RTX 4090 for AI-related tasks, the Jetson AGX series offers several key advantages:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Industrial-grade reliability: Jetson AGX series products are designed for industrial and commercial applications, which means they have a longer Mean Time Between Failures (MTBF). They are built to operate continuously, 24/7, without encountering issues. In contrast, consumer-grade graphics cards like the RTX 4090 are not designed for such demanding, round-the-clock operation and may not offer the same level of reliability.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Compact size and low power consumption: Jetson AGX series products are designed with embedded and edge computing applications in mind. They have a smaller form factor and consume less power compared to high-end consumer graphics cards. This makes them more suitable for deployment in space-constrained environments and reduces the overall operating costs. The lower power consumption also means less heat generation, which is crucial for embedded systems and helps to minimize cooling requirements."))),(0,a.yg)("p",null,"In addition to these advantages, the Jetson AGX series offers a comprehensive software stack optimized for AI workloads, making it easier for developers to create and deploy AI applications efficiently. The combination of industrial-grade reliability, compact size, low power consumption, and optimized software stack makes the Jetson AGX series a compelling choice for AI-related projects and applications, especially when compared to consumer-grade graphics cards like the RTX 4090."),(0,a.yg)("h2",{id:"deployment-on-windows"},"Deployment on Windows"),(0,a.yg)("p",null,"To deploy Watcher's AI capabilities on a Windows device, follow these simple steps."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Locate the downloaded ",(0,a.yg)("inlineCode",{parentName:"p"},".exe")," file in your computer's downloads folder or the specified location. Double-click on the ",(0,a.yg)("inlineCode",{parentName:"p"},".exe")," file to start the installation process. The installation wizard will guide you through the setup process. You don't need to make any additional selections or configurations during the installation."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". When the installation is finished, launch the Watcher application. Upon launching the application for the first time, you will be prompted to choose the AI models you wish to use. Watcher provides two options."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/88.png",style:{width:800,height:"auto"}})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Llama 3.1 + LLaVA: If you select this option, Watcher will automatically start downloading the required AI models and associated files. These additional downloads may take some time, as they can be around ",(0,a.yg)("strong",{parentName:"p"},"10 GB")," in size. Ensure that you have a stable and fast internet connection during the model download process to avoid any interruptions or incomplete downloads.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"OpenAI: If you prefer to use OpenAI's models, you need to prepare your OpenAI API key in advance. Make sure you have a valid API key and sufficient credits to use the OpenAI models. When prompted, enter your API key to configure Watcher to use OpenAI's services."))),(0,a.yg)("p",null,"Choose the option that best suits your needs and resources. If you have ample storage space and a reliable internet connection, the Llama 3.1 + LLaVA option provides a self-contained solution. If you prefer the flexibility and power of OpenAI's models and have an API key ready, select the OpenAI option."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/96.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,"Once the model files are downloaded and installed, Watcher will be ready to use on your Windows device."),(0,a.yg)("h2",{id:"deployment-on-macos"},"Deployment on MacOS"),(0,a.yg)("p",null,"To deploy Watcher's AI capabilities on a macOS device, follow these steps."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Locate the downloaded ",(0,a.yg)("inlineCode",{parentName:"p"},".dmg")," file in your computer's downloads folder or the specified location. Double-click on the ",(0,a.yg)("inlineCode",{parentName:"p"},".dmg")," file to open it. A new window will appear, showing the contents of the installation package."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". In the new window, you will see the Watcher application icon and an alias for the Applications folder. Click and drag the Watcher application icon onto the Applications folder alias within the window. This action will copy the Watcher application to your computer's Applications folder.\nOnce the copying process is complete, you can close the ",(0,a.yg)("inlineCode",{parentName:"p"},".dmg")," window."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/89.png",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3"),". Upon launching the application for the first time, Watcher will automatically start downloading the required AI models and associated files. These additional downloads may take some time, as they can be around 10 GB in size. Ensure that you have a stable and fast internet connection during the model download process to avoid any interruptions or incomplete downloads."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/90.png",style:{width:800,height:"auto"}})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Llama 3.1 + LLaVA: If you select this option, Watcher will automatically start downloading the required AI models and associated files. These additional downloads may take some time, as they can be around ",(0,a.yg)("strong",{parentName:"p"},"10 GB")," in size. Ensure that you have a stable and fast internet connection during the model download process to avoid any interruptions or incomplete downloads.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"OpenAI: If you prefer to use OpenAI's models, you need to prepare your OpenAI API key in advance. Make sure you have a valid API key and sufficient credits to use the OpenAI models. When prompted, enter your API key to configure Watcher to use OpenAI's services."))),(0,a.yg)("p",null,"Choose the option that best suits your needs and resources. If you have ample storage space and a reliable internet connection, the Llama 3.1 + LLaVA option provides a self-contained solution. If you prefer the flexibility and power of OpenAI's models and have an API key ready, select the OpenAI option."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/96.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,"Once the model files are downloaded and installed, Watcher will be ready to use on your macOS device."),(0,a.yg)("h2",{id:"deployment-on-nvidia-jetson-agx-orin--linux"},"Deployment on NVIDIA\xae Jetson AGX Orin / Linux"),(0,a.yg)("p",null,"To deploy Watcher's AI capabilities on an NVIDIA\xae Jetson AGX Orin or a Linux device, follow these steps."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Open a terminal window on your Jetson AGX Orin or Linux device."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". Navigate to the directory where the downloaded ",(0,a.yg)("inlineCode",{parentName:"p"},".deb")," file is located using the ",(0,a.yg)("inlineCode",{parentName:"p"},"cd")," command. Run the following command to install Watcher."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo dpkg -i watcher_service_x.x.x_arm64.deb\n")),(0,a.yg)("p",null,"Replace ",(0,a.yg)("inlineCode",{parentName:"p"},"watcher_service_x.x.x_arm64.deb")," with the actual name of the downloaded ",(0,a.yg)("inlineCode",{parentName:"p"},".deb")," file. The installation process will begin. You may be prompted to enter your system password to authorize the installation. Wait for the installation to complete. The terminal will display the progress and any additional information."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/91.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3"),". Once the installation is finished, you can launch Watcher by typing watcher in the terminal or by finding it in your application launcher."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/92.png",style:{width:800,height:"auto"}})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Llama 3.1 + LLaVA: If you select this option, Watcher will automatically start downloading the required AI models and associated files. These additional downloads may take some time, as they can be around ",(0,a.yg)("strong",{parentName:"p"},"10 GB")," in size. Ensure that you have a stable and fast internet connection during the model download process to avoid any interruptions or incomplete downloads.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"OpenAI: If you prefer to use OpenAI's models, you need to prepare your OpenAI API key in advance. Make sure you have a valid API key and sufficient credits to use the OpenAI models. When prompted, enter your API key to configure Watcher to use OpenAI's services."))),(0,a.yg)("p",null,"Choose the option that best suits your needs and resources. If you have ample storage space and a reliable internet connection, the Llama 3.1 + LLaVA option provides a self-contained solution. If you prefer the flexibility and power of OpenAI's models and have an API key ready, select the OpenAI option."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/96.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,"Similar to the Windows and macOS installations, Watcher will automatically start downloading the required AI models and associated."),(0,a.yg)("h2",{id:"configure-the-use-of-local-ai-services-on-the-sensecraft-app"},"Configure the use of local AI services on the SenseCraft APP"),(0,a.yg)("p",null,"To use the local AI services provided by Watcher in the SenseCraft APP, follow these concise steps:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1"),". Open the Watcher APP on your device and click the ",(0,a.yg)("strong",{parentName:"p"},"CLICK TO START SERVICE")," button in the middle-left section. Wait for the button to change to ",(0,a.yg)("strong",{parentName:"p"},"SERVICE IS STARTED"),"."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/94.png",style:{width:800,height:"auto"}})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2"),". In the SenseCraft APP, navigate to the Watcher interface and tap on the settings button in the top-right corner. Select ",(0,a.yg)("strong",{parentName:"p"},"Device AI Service")," from the settings menu."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3"),". Copy the URL and Token from the Watcher APP's home screen."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4"),". Paste the URL and Token into their respective fields in the ",(0,a.yg)("strong",{parentName:"p"},"Device AI Service")," settings within the SenseCraft APP."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/93.png",style:{width:250,height:"auto"}})),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5"),". You can now assign tasks to Watcher through the SenseCraft APP, and Watcher will process them using its locally deployed AI capabilities."),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/95.png",style:{width:800,height:"auto"}})),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Please note that it is important to make sure that your computer meets the recommended computer configurations in ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"#hardware-preparation"},"Hardware Preparation")),". If it is below the recommended configuration, then you may not receive the recognition results and alarm messages on time, as your computer may be in full swing analysing one of your images, at which point Watcher will appear to be in a constant state of observation.")),(0,a.yg)("p",null,"By completing these steps, you can harness the power of Watcher's AI services directly on your device, ensuring enhanced privacy and the ability to conveniently customize your own integrated system. With Watcher's AI capabilities running locally, you can perform advanced tasks, analysis, and automation securely and efficiently, all while keeping your data under your control."),(0,a.yg)("p",null,"We will continue to add tutorials on using ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_look_tool/#http-message-block"},"HTTP Message Block"))," for message push after localised deployment in the Application directory, so stay tuned!"),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}g.isMDXComponent=!0}}]);