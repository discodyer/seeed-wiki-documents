"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33634],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var i=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,y=u["".concat(o,".").concat(c)]||u[c]||g[c]||r;return n?i.createElement(y,s(s({ref:t},d),{},{components:n})):i.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(9668),a=(n(96540),n(15680));const r={description:"XIAO Round Dislay Christmas Ball",title:"Create a small Christmas Ball for your Christmas Tree",keywords:["XIAO","Round Dislay","Christmas"],image:"https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif",slug:"/round_display_christmas_ball",last_update:{date:"12/08/2024",author:"Bruno Santos"}},s="Seeed Studio Round Display for XIAO Christmas Ball",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/Application/SeeedStudio_Round_Display_Christmas_ball",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/Application/SeeedStudio_Round_Display_Christmas_ball",title:"Create a small Christmas Ball for your Christmas Tree",description:"XIAO Round Dislay Christmas Ball",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/Application/SeeedStudio_Round_Display_Christmas_ball.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/Application",slug:"/round_display_christmas_ball",permalink:"/round_display_christmas_ball",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/Application/SeeedStudio_Round_Display_Christmas_ball.md",tags:[],version:"current",lastUpdatedBy:"Bruno Santos",lastUpdatedAt:1733616e3,formattedLastUpdatedAt:"Dec 8, 2024",frontMatter:{description:"XIAO Round Dislay Christmas Ball",title:"Create a small Christmas Ball for your Christmas Tree",keywords:["XIAO","Round Dislay","Christmas"],image:"https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif",slug:"/round_display_christmas_ball",last_update:{date:"12/08/2024",author:"Bruno Santos"}},sidebar:"ProductSidebar",previous:{title:"Using LVGL and TFT for all XIAO Series",permalink:"/using_lvgl_and_tft_on_round_display"},next:{title:"Quectel L76K",permalink:"/get_start_l76k_gnss"}},o={},p=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Libraries",id:"libraries",level:3},{value:"Images",id:"images",level:2},{value:"Prepare images",id:"prepare-images",level:3},{value:"Resize Images",id:"resize-images",level:4},{value:"Create the Flash Arrays",id:"create-the-flash-arrays",level:4},{value:"Code",id:"code",level:2},{value:"Headers and libraries",id:"headers-and-libraries",level:3},{value:"Background images",id:"background-images",level:3},{value:"Snow particles Simulation",id:"snow-particles-simulation",level:3},{value:"PNG Decoding",id:"png-decoding",level:3},{value:"Touch interaction",id:"touch-interaction",level:3},{value:"Setup and loop",id:"setup-and-loop",level:3},{value:"Double buffering",id:"double-buffering",level:3},{value:"Double buffering here",id:"double-buffering-here",level:4},{value:"Advantages of Using Double Buffering",id:"advantages-of-using-double-buffering",level:3}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seeed-studio-round-display-for-xiao-christmas-ball"},"Seeed Studio Round Display for XIAO Christmas Ball"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif",style:{width:400,height:"auto"}})),(0,a.yg)("p",null,"On this tutorial I'm going to show you how you can create a Christmas ball with falling snow and changing background images. "),(0,a.yg)("p",null,"The program performs the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Displays a background image stored as a C array."),(0,a.yg)("li",{parentName:"ul"},"Simulates snow particles falling over the image, with a wind effect."),(0,a.yg)("li",{parentName:"ul"},"Detects touch input and cycles through a set of background images."),(0,a.yg)("li",{parentName:"ul"},"Uses double-buffering for smooth animations.")),(0,a.yg)("h2",{id:"environment-preparation"},"Environment Preparation"),(0,a.yg)("h3",{id:"hardware"},"Hardware"),(0,a.yg)("p",null,"For the project, we're going to need:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},"Seeed Studio Round Display For XIAO")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html"},"XIAO ESP32S3"))),(0,a.yg)("p",null,"I'm using the XIAO ESP32S3 because of the memory. The PNGDEC requires a bit of memory to run ~40kbytes. "),(0,a.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.yg)("p",null,"To use the Round Display, head to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/get_start_round_display/#getting-started"},"Getting Started with Round Display for XIAO")," to install the necessary libraries. "),(0,a.yg)("p",null,"Try some of the examples to see if everything is working well."),(0,a.yg)("h3",{id:"libraries"},"Libraries"),(0,a.yg)("p",null,"For this project, we're going to use the libraries that come bundled with the ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},"Seeed Studio Round Display For XIAO")),(0,a.yg)("p",null,"Install all the libraries like specified in the tutorial ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/get_start_round_display/#getting-started"},"Getting Started with Round Display for XIAO"),".\nAfter that, you need the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"PNGdec library . "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Update LVGL library")," (or not install the one from Seeed Studio github)")),(0,a.yg)("h2",{id:"images"},"Images"),(0,a.yg)("p",null,"Our images are PNG images stored in Flash Arrays. They are displayed using PNGdec library. "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"All images must be PNG")),(0,a.yg)("p",null,"Here are the images that I've used - all are AI generated"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png",style:{width:200,height:"auto"}}),(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png",style:{width:200,height:"auto"}}),(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png",style:{width:200,height:"auto"}})),(0,a.yg)("p",null,"Our background images need to be prepared for that TFT_eSPI can display them and they fit well on the Round Display for XIAO."),(0,a.yg)("h3",{id:"prepare-images"},"Prepare images"),(0,a.yg)("h4",{id:"resize-images"},"Resize Images"),(0,a.yg)("p",null,"Our Round Display for XIAO has a 240x240 resolution. We need to resize the images.  I'm going to show how to do it using ",(0,a.yg)("a",{parentName:"p",href:"https://www.gimp.org/"},"GIMP")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Open the image")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Go to ",(0,a.yg)("strong",{parentName:"p"},"Image > Scale Image")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg",style:{width:600,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Set Width and Height to 240. Because the ",(0,a.yg)("strong",{parentName:"p"},"Keep Ratio")," is selected (the chain), once you change the ",(0,a.yg)("strong",{parentName:"p"},"width"),", the ",(0,a.yg)("strong",{parentName:"p"},"height")," should also change. "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg",style:{width:400,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press the ",(0,a.yg)("strong",{parentName:"p"},"Scale")," button. "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg",style:{width:400,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Save the image (I'm going to override the old one)"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg",style:{width:400,height:"auto"}})))),(0,a.yg)("h4",{id:"create-the-flash-arrays"},"Create the Flash Arrays"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NOTE:")," This instructions are inside the TFT_eSPI Flash_PNG example. "),(0,a.yg)("p",null,"To create the flash array, go to ",(0,a.yg)("a",{parentName:"p",href:"https://notisrac.github.io/FileToCArray/"},"File to C style array converter")),(0,a.yg)("p",null,"The steps now are:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Upload the image using ",(0,a.yg)("strong",{parentName:"p"},"Browse")," . After uploading the image"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg",style:{width:800,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"We need to set some options"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Treat as binary"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg",style:{width:800,height:"auto"}})))),(0,a.yg)("p",null,"All the other options gray out. "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg",style:{width:600,height:"auto"}})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Let's change the ",(0,a.yg)("strong",{parentName:"p"},"Data type")," to ",(0,a.yg)("strong",{parentName:"p"},"char")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg",style:{width:800,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Press convert. This will convert the image to an array. "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg",style:{width:800,height:"auto"}}))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"You can now press the button ",(0,a.yg)("strong",{parentName:"p"},"Save as file")," to save your image and add it to your Arduino Sketch or press the button ",(0,a.yg)("strong",{parentName:"p"},"Copy to clipboard"),"\nIf you ",(0,a.yg)("strong",{parentName:"p"},"Copy to clipboard"),", you'll have to press the 3 dots on the right side of the Arduino editor and choose ",(0,a.yg)("strong",{parentName:"p"},"New Tab")),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg",style:{width:400,height:"auto"}})))),(0,a.yg)("p",null,"Give it a name (generally your image name with .h extension)"),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg",style:{width:600,height:"auto"}})),(0,a.yg)("p",null,"You'll end up with all your images as ",(0,a.yg)("em",{parentName:"p"},".h")," files. "),(0,a.yg)("div",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg",style:{width:800,height:"auto"}})),(0,a.yg)("h2",{id:"code"},"Code"),(0,a.yg)("p",null,"Here's the code for the Christmas ball.\nA little explanation of the principal functions of the code.  The code also includes some comments."),(0,a.yg)("h3",{id:"headers-and-libraries"},"Headers and libraries"),(0,a.yg)("p",null,"We start by including some libraries."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <PNGdec.h>\n#include <TFT_eSPI.h>\n#include <Wire.h>\n\n#include "background1.h"\n#include "background2.h"\n#include "background3.h"\n\n#define USE_TFT_ESPI_LIBRARY\n#include "lv_xiao_round_screen.h"\n')),(0,a.yg)("p",null,"Remember that you need to have the Seeed Studio libraries installed. "),(0,a.yg)("h3",{id:"background-images"},"Background images"),(0,a.yg)("p",null,"Here are the functions to manage the background images"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"struct Background {\n  const uint8_t *data;\n  size_t size;\n};\n\nconst Background backgrounds[] = {\n    {(const uint8_t *)background1, sizeof(background1)},\n    {(const uint8_t *)background2, sizeof(background2)},\n    {(const uint8_t *)background3, sizeof(background3)},\n};\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Struct: Each background image is stored as a Background struct containing:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"data: Pointer to the PNG data."),(0,a.yg)("li",{parentName:"ul"},"size: Size of the PNG file."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Array: The backgrounds array stores all the background images. The currentBackground variable tracks the currently displayed background."))),(0,a.yg)("h3",{id:"snow-particles-simulation"},"Snow particles Simulation"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Initialization of particles")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void initParticles() {\n  for (int i = 0; i < numParticles; i++) {\n    particles[i].x = random(0, sprite.width());\n    particles[i].y = random(0, sprite.height());\n    particles[i].speed = random(3, 8);\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It initializes ",(0,a.yg)("em",{parentName:"li"},"numParticles")," with random positions and speeds. ")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Particle updates")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void updateParticles() {\n  for (int i = 0; i < numParticles; i++) {\n    particles[i].speed += random(-1, 2); // Speed variation\n    particles[i].speed = constrain(particles[i].speed, 3, 8);\n    particles[i].y += particles[i].speed; // Move down\n    particles[i].x += random(-1, 2);      // Wind effect\n    // Wrap-around logic\n    if (particles[i].y > sprite.height()) {\n      particles[i].y = 0;\n      particles[i].x = random(0, sprite.width());\n      particles[i].speed = random(3, 8);\n    }\n    if (particles[i].x < 0) particles[i].x = sprite.width();\n    if (particles[i].x > sprite.width()) particles[i].x = 0;\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Updates particle positions with:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Falling Effect: Each particle moves down."),(0,a.yg)("li",{parentName:"ul"},"Wind Effect: Adds a slight horizontal drift."),(0,a.yg)("li",{parentName:"ul"},"Wrap Around: Particles reset to the top when they exit the bottom.")))),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Rendering particles:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void renderParticlesToSprite() {\n  for (int i = 0; i < numParticles; i++) {\n    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);\n  }\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It renders each particle as a small white circle")),(0,a.yg)("h3",{id:"png-decoding"},"PNG Decoding"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,\n                           backgrounds[currentBackground].size,\n                           pngDrawToSprite);\nif (rc != PNG_SUCCESS) {\n  Serial.println("Failed to open PNG file!");\n  return;\n}\npng.decode(NULL, 0);\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Loads and decodes the current background PNG using the ",(0,a.yg)("em",{parentName:"li"},"png.openFLASH()")," function")),(0,a.yg)("h3",{id:"touch-interaction"},"Touch interaction"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"if (chsc6x_is_pressed()) {\n  currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle backgrounds\n  delay(300); // Debounce\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Detects a touch event using the ",(0,a.yg)("em",{parentName:"li"},"chsc6x_is_pressed()")," and changes the background image by incrementing ",(0,a.yg)("em",{parentName:"li"},"currentBackground"))),(0,a.yg)("h3",{id:"setup-and-loop"},"Setup and loop"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Setup:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  Serial.begin(115200);\n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n  sprite.createSprite(240, 240); // Match display size\n  pinMode(TOUCH_INT, INPUT_PULLUP);\n  Wire.begin();\n  initParticles();\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Initializes the display, touch input and snow particles")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Main loop:")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  sprite.fillScreen(TFT_BLACK);\n  // Render background and snow\n  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,\n                             backgrounds[currentBackground].size,\n                             pngDrawToSprite);\n  if (rc == PNG_SUCCESS) {\n    png.decode(NULL, 0);\n    updateParticles();\n    renderParticlesToSprite();\n    sprite.pushSprite(0, 0);\n  }\n  // Handle touch input\n  if (chsc6x_is_pressed()) {\n    currentBackground = (currentBackground + 1) % numBackgrounds;\n    delay(300);\n  }\n  delay(10); // ~100 FPS\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clears the sprite, renders the current frame (background + particles), and checks for user input. ")),(0,a.yg)("h3",{id:"double-buffering"},"Double buffering"),(0,a.yg)("p",null,"To reduce the flickering and improving animation smoothness of the snow flakes, we use ",(0,a.yg)("strong",{parentName:"p"},"double buffering"),"."),(0,a.yg)("p",null,"This allows us to draw in an off-screen buffer before displaying it on the screen."),(0,a.yg)("h4",{id:"double-buffering-here"},"Double buffering here"),(0,a.yg)("p",null,"In this project, the TFT_eSPI library's TFT_eSprite class implements double buffering."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Sprite creation"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The sprite (off-screen buffer) is created in the setup() function:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"sprite.createSprite(240, 240); // Match display size\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Drawing the buffer"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All drawing operations (background rendering and snow particle animation) are done on the sprite:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"sprite.fillScreen(TFT_BLACK); // Clear the sprite\nrenderParticlesToSprite();   // Draw snow particles\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Updating the display"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After the frame is fully drawn in the sprite, it is pushed to the display in one operation:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"sprite.pushSprite(0, 0);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This transfers the buffer's contents to the screen instantly. ")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Reuse"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The sprite is reused for every frame by clearing it at the start of the ",(0,a.yg)("em",{parentName:"li"},"loop()"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"sprite.fillScreen(TFT_BLACK);\n")),(0,a.yg)("h3",{id:"advantages-of-using-double-buffering"},"Advantages of Using Double Buffering"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Smooth Snow Animation: The falling snow particles are updated seamlessly without flickering."),(0,a.yg)("li",{parentName:"ul"},"Dynamic Background Switching: The touch-triggered background changes happen without visible delays or artifacts."),(0,a.yg)("li",{parentName:"ul"},"Efficient Rendering: Drawing in memory (RAM) is faster than directly updating the display line by line.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Here's the complete code for the project"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/**\n*\n* To create the images as C arrays, visit:\n* https://notisrac.github.io/FileToCArray/\n*\n*/\n#include <PNGdec.h>\n#include <TFT_eSPI.h>\n\n#include "background1.h"\n#include "background2.h"\n#include "background3.h"\n\n#define USE_TFT_ESPI_LIBRARY\n#include "lv_xiao_round_screen.h"\n\n// PNG decoder and TFT display instances\nPNG png;\n//TFT_eSPI tft = TFT_eSPI();\nTFT_eSprite sprite = TFT_eSprite(&tft); // Off-screen buffer\n\n#define MAX_IMAGE_WIDTH 240 \n\n// Backgrounds for the snow globe\nstruct Background {\n  const uint8_t *data;\n  size_t size;\n};\n\n// Define the backgrounds with explicit casting\nconst Background backgrounds[] = {\n    {(const uint8_t *)background1, sizeof(background1)},\n    {(const uint8_t *)background2, sizeof(background2)},\n    {(const uint8_t *)background3, sizeof(background3)},\n};\nconst size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);\n\nint currentBackground = 0; // Index of the current background\n\n// Snow particle properties\nconst int numParticles = 100; // Number of snow particles\nstruct Particle {\n  int16_t x, y;   // Position\n  int16_t speed;  // Vertical speed\n};\nParticle particles[numParticles];\n\n// Function to draw PNG to the sprite (callback for PNG decoder)\nvoid pngDrawToSprite(PNGDRAW *pDraw) {\n  uint16_t lineBuffer[MAX_IMAGE_WIDTH];\n  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);\n  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);\n}\n\n// Initialize snow particles\nvoid initParticles() {\n  for (int i = 0; i < numParticles; i++) {\n    particles[i].x = random(0, sprite.width());\n    particles[i].y = random(0, sprite.height());\n    particles[i].speed = random(3, 8); // Random speed for each snowflake\n  }\n}\n\n// Update snow particle positions\nvoid updateParticles() {\n  for (int i = 0; i < numParticles; i++) {\n    particles[i].speed += random(-1, 2); // Random variation in speed\n    particles[i].speed = constrain(particles[i].speed, 3, 8);\n    particles[i].y += particles[i].speed;\n    particles[i].x += random(-1, 2); // Wind effect\n\n    // Wrap around screen\n    if (particles[i].y > sprite.height()) {\n      particles[i].y = 0;\n      particles[i].x = random(0, sprite.width());\n      particles[i].speed = random(3, 8);\n    }\n    if (particles[i].x < 0) particles[i].x = sprite.width();\n    if (particles[i].x > sprite.width()) particles[i].x = 0;\n  }\n}\n\n// Render snow particles to the sprite\nvoid renderParticlesToSprite() {\n  for (int i = 0; i < numParticles; i++) {\n    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println("\\n\\nUsing the PNGdec library with touch interaction");\n\n  // Initialize TFT\n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n  sprite.createSprite(240, 240); // Match display size\n\n  // Initialize touch interrupt pin\n  pinMode(TOUCH_INT, INPUT_PULLUP);\n  Wire.begin();\n\n  // Initialize particles\n  initParticles();\n\n  Serial.println("Setup complete.");\n}\n\nvoid loop() {\n  // Clear the sprite for the new frame\n  sprite.fillScreen(TFT_BLACK);\n\n  // Render the current background to the sprite  \n  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,\n                           backgrounds[currentBackground].size,\n                           pngDrawToSprite);\n\n\n  if (rc != PNG_SUCCESS) {\n    Serial.println("Failed to open PNG file!");\n    return;\n  }\n  png.decode(NULL, 0); // Decode and render background\n\n  // Update and render snow particles\n  updateParticles();\n  renderParticlesToSprite();\n\n  // Push the sprite to the display\n  sprite.pushSprite(0, 0);\n\n  // Check for touch input using chsc6x_is_pressed\n  if (chsc6x_is_pressed()) {\n    currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle through backgrounds\n    delay(300); // Debounce delay\n  }\n\n  delay(10); // ~100 FPS\n}\n')),(0,a.yg)("p",null,"Now you can use your own pictures to create a magical Christmas Ball."))}g.isMDXComponent=!0}}]);