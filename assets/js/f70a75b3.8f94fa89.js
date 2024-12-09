"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28730],{15680:(e,i,t)=>{t.d(i,{xA:()=>d,yg:()=>c});var n=t(96540);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,l=function(e,i){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},d=function(e){var i=p(e.components);return n.createElement(s.Provider,{value:i},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(t),u=l,c=g["".concat(s,".").concat(u)]||g[u]||m[u]||r;return t?n.createElement(c,a(a({ref:i},d),{},{components:t})):n.createElement(c,a({ref:i},d))}));function c(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=u;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o[g]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33341:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(9668),l=(t(96540),t(15680));const r={description:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",title:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-1",last_update:{date:"3/05/2024",author:"\u91d1\u83ca"}},a="Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-1",id:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-1",title:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",description:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-1.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/cn/Wio-Terminal-TinyML-EI-1",permalink:"/cn/Wio-Terminal-TinyML-EI-1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/CN-Wio-Terminal-TinyML-EI-1.md",tags:[],version:"current",lastUpdatedBy:"\u91d1\u83ca",lastUpdatedAt:1709596800,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{description:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",title:"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-TinyML-EI-1",last_update:{date:"3/05/2024",author:"\u91d1\u83ca"}},sidebar:"CNSidebar",previous:{title:"\u4f7f\u7528 Platform IO \u6253\u9020\u8d5b\u535a\u684c\u9762 \u2014\u2014 Cursor AI \u7684\u4f7f\u7528\u548c\u5c1d\u8bd5",permalink:"/cn/CyberDeck_Wio-Terminal"},next:{title:"\u8fde\u7eed\u8fd0\u52a8\u8bc6\u522b",permalink:"/cn/Wio-Terminal-TinyML-EI-2"}},s={},p=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u8fde\u63a5\u5230 Edge Impulse",id:"\u8fde\u63a5\u5230-edge-impulse",level:2},{value:"1.  \u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230\u8ba1\u7b97\u673a",id:"1--\u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230\u8ba1\u7b97\u673a",level:3},{value:"2. \u8bbe\u7f6e\u5bc6\u94a5",id:"2-\u8bbe\u7f6e\u5bc6\u94a5",level:3},{value:"3. \u9a8c\u8bc1\u8bbe\u5907\u662f\u5426\u5df2\u8fde\u63a5",id:"3-\u9a8c\u8bc1\u8bbe\u5907\u662f\u5426\u5df2\u8fde\u63a5",level:3},{value:"\u8bad\u7ec3\u6570\u636e\u91c7\u96c6",id:"\u8bad\u7ec3\u6570\u636e\u91c7\u96c6",level:2},{value:"\u6784\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b",id:"\u6784\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b",level:2},{value:"\u90e8\u7f72\u5230 Wio Terminal",id:"\u90e8\u7f72\u5230-wio-terminal",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:p},g="wrapper";function m(e){let{components:i,...t}=e;return(0,l.yg)(g,(0,n.A)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"wio-terminal-edge-impulse-\u5165\u95e8\u6307\u5357"},"Wio Terminal Edge Impulse \u5165\u95e8\u6307\u5357"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},(0,l.yg)("strong",{parentName:"a"},"Edge Impulse"))," \u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5728\u5d4c\u5165\u5f0f\u673a\u5668\u5b66\u4e60\u9886\u57df\u521b\u5efa\u4e0b\u4e00\u4ee3\u667a\u80fd\u8bbe\u5907\u89e3\u51b3\u65b9\u6848\u3002\u5728\u8fb9\u7f18\u8fdb\u884c\u673a\u5668\u5b66\u4e60\u5c06\u80fd\u591f\u5229\u7528\u90a3\u4e9b\u7531\u4e8e\u6210\u672c\u3001\u5e26\u5bbd\u6216\u529f\u8017\u9650\u5236\u800c\u88ab\u4e22\u5f03\u7684\u4f20\u611f\u5668\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u73b0\u5728, ",(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," \u5b98\u65b9\u652f\u6301 Edge Impulse\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u5728\u8fb9\u7f18\u8bbe\u5907\u4e0a\u542f\u52a8 Wio Terminal\uff0c\u5e76\u8fdb\u884c\u673a\u5668\u5b66\u4e60\uff01"),(0,l.yg)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.yg)("p",null,"\u4e3a\u4e86\u5728 Edge Impulse \u4e2d\u8bbe\u7f6e Wio Terminal\uff0c\u60a8\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u8f6f\u4ef6\uff1a"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v12")," \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("a",{parentName:"li",href:"https://arduino.github.io/arduino-cli/latest/"},"Arduino CLI")),(0,l.yg)("li",{parentName:"ol"},"Edge Impulse CLI \u548c\u4e32\u53e3\u76d1\u89c6\u5668\u3002\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\u6216\u7ec8\u7aef\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"npm install -g edge-impulse-cli \n")),(0,l.yg)("p",null,":::\u6ce8\n\u5b89\u88c5 CLI \u65f6\u9047\u5230\u95ee\u9898\uff1f\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/cli-installation"},"\u5b89\u88c5\u548c\u6545\u969c\u6392\u9664")," \u8fdb\u884c\u66f4\u591a\u53c2\u8003\u3002\n:::"),(0,l.yg)("h2",{id:"\u8fde\u63a5\u5230-edge-impulse"},"\u8fde\u63a5\u5230 Edge Impulse"),(0,l.yg)("p",null,"\u5f53\u6240\u6709\u8f6f\u4ef6\u90fd\u51c6\u5907\u5c31\u7eea\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230 Edge Impulse\u3002"),(0,l.yg)("h3",{id:"1--\u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230\u8ba1\u7b97\u673a"},"1.  \u5c06\u5f00\u53d1\u677f\u8fde\u63a5\u5230\u8ba1\u7b97\u673a"),(0,l.yg)("p",null,"\u5c06 Wio Terminal \u8fde\u63a5\u5230\u8ba1\u7b97\u673a\u3002\u901a\u8fc7\u5feb\u901f\u6ed1\u52a8\u7535\u6e90\u5f00\u5173\u4e24\u6b21\u8fdb\u5165 bootloader \u6a21\u5f0f\u3002\u66f4\u591a\u53c2\u8003\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,l.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"\u8fd9\u91cc"),"."),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"})),(0,l.yg)("p",null,"\u60a8\u7684\u7535\u8111\u4e0a\u4f1a\u51fa\u73b0\u4e00\u4e2a\u540d\u4e3a  ",(0,l.yg)("inlineCode",{parentName:"p"},"Arduino"),"  \u7684\u5916\u90e8\u9a71\u52a8\u5668\u3002\u5c06\u4e0b\u8f7d\u7684 ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0"},(0,l.yg)("strong",{parentName:"a"},"Edge Impulse uf2 \u56fa\u4ef6\u6587\u4ef6"))," \u62d6\u653e\u5230 Arduino \u9a71\u52a8\u5668\u4e2d\u3002\u73b0\u5728\uff0cEdge Impulse \u5df2\u52a0\u8f7d\u5230 Seeeduino Wio Terminal\uff01"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6ce8:"),"  \u8fd9\u91cc\u662f ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse"},"Wio Terminal Edge Impulse \u6e90\u4ee3\u7801"),", \u60a8\u4e5f\u53ef\u4ee5\u4ece\u8fd9\u91cc\u6784\u5efa\u56fa\u4ef6\u3002"),(0,l.yg)("h3",{id:"2-\u8bbe\u7f6e\u5bc6\u94a5"},"2. \u8bbe\u7f6e\u5bc6\u94a5"),(0,l.yg)("p",null,"\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\u6216\u7ec8\u7aef\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"edge-impulse-daemon\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6ce8:"),"  \u5f53\u8fde\u63a5\u5230\u65b0\u8bbe\u5907\u65f6\uff0c\u8fd0\u884c  ",(0,l.yg)("inlineCode",{parentName:"p"},"edge-impulse-daemon --clean")," \u6e05\u9664\u4e4b\u524d\u7684\u7f13\u5b58\u3002"),(0,l.yg)("h3",{id:"3-\u9a8c\u8bc1\u8bbe\u5907\u662f\u5426\u5df2\u8fde\u63a5"},"3. \u9a8c\u8bc1\u8bbe\u5907\u662f\u5426\u5df2\u8fde\u63a5"),(0,l.yg)("p",null,"\u5c31\u662f\u8fd9\u6837\uff01\u60a8\u7684\u8bbe\u5907\u73b0\u5728\u5df2\u8fde\u63a5\u5230 Edge Impulse\u3002\u8981\u9a8c\u8bc1\u8fd9\u4e00\u70b9\uff0c\u8bf7 ",(0,l.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/studio/select-project?autoredirect=1"},"\u8f6c\u5230\u60a8\u7684 Edge Impulse \u9879\u76ee"),", \u7136\u540e\u70b9\u51fb Devices\u3002\u8bbe\u5907\u5c06\u5728\u6b64\u5904\u5217\u51fa\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"})),(0,l.yg)("p",null,"\u5bf9\u4e8e\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\uff0c\u8ba9\u6211\u4eec\u5feb\u901f\u8bad\u7ec3\u548c\u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684\u795e\u7ecf\u7f51\u7edc\uff0c\u7528\u4e8e\u901a\u8fc7\u5355\u4e2a\u5149\u4f20\u611f\u5668\u5bf9\u526a\u5200\u77f3\u5934\u5e03\u624b\u52bf\u8fdb\u884c\u5206\u7c7b\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u89c6\u9891\u6559\u7a0b\uff0c\u8bf7\u89c2\u770b\u76f8\u5e94\u7684\u89c6\u9891\uff01"),(0,l.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iCmlKyAp8eQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.yg)("h2",{id:"\u8bad\u7ec3\u6570\u636e\u91c7\u96c6"},"\u8bad\u7ec3\u6570\u636e\u91c7\u96c6"),(0,l.yg)("p",null,"\u8f6c\u5230\u6570\u636e\u91c7\u96c6\u9009\u9879\u5361\u3002\u5c06\u6837\u672c\u957f\u5ea6\u8bbe\u7f6e\u4e3a\u7ea610000\u6beb\u79d2\u621610\u79d2\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u624b\u52bf\u521b\u5efa10\u4e2a\u6837\u672c\uff0c\u5728Wio\u7ec8\u7aef\u9644\u8fd1\u6325\u52a8\u624b\u90e8\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif"})),(0,l.yg)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5c0f\u6570\u636e\u96c6\uff0c\u4f46\u6211\u4eec\u4e5f\u6709\u4e00\u4e2a\u5c0f\u578b\u795e\u7ecf\u7f51\u7edc\uff0c\u56e0\u6b64\u5728\u8fd9\u79cd\u7279\u6b8a\u60c5\u51b5\u4e0b\uff0c\u6b20\u62df\u5408\u7684\u53ef\u80fd\u6027\u6bd4\u8fc7\u62df\u5408\u66f4\u5927\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6b20\u62df\u5408"),":\n\u5f53\u7edf\u8ba1\u6a21\u578b\u6216\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u65e0\u6cd5\u6355\u6349\u6570\u636e\u7684\u6f5c\u5728\u8d8b\u52bf\u65f6\uff0c\u5373\u53d1\u751f\u6b20\u62df\u5408\uff08\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\u4e5f\u53ef\u80fd\u53d1\u751f\uff09\uff0c\u8fd9\u79cd\u60c5\u51b5\u901a\u5e38\u53d1\u751f\u5728\u6a21\u578b\u5927\u5c0f\u592a\u5c0f\uff0c\u65e0\u6cd5\u4e3a\u5177\u6709\u5927\u91cf\u566a\u58f0\u548c\u591a\u6837\u6027\u7684\u6570\u636e\u5236\u5b9a\u4e00\u822c\u89c4\u5219\u65f6\u3002"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u8fc7\u62df\u5408"),":\n\u5f53\u7edf\u8ba1\u6a21\u578b\u5f00\u59cb\u4ece\u566a\u58f0\u548c\u4e0d\u51c6\u786e\u7684\u6570\u636e\u6761\u76ee\u4e2d\u5b66\u4e60\u65f6\uff0c\u6211\u4eec\u79f0\u5176\u4e3a\u8fc7\u62df\u5408\u3002\u5f53\u60a8\u62e5\u6709\u5927\u578b\u6a21\u578b\u548c\u76f8\u5bf9\u8f83\u5c0f\u7684\u6570\u636e\u96c6\u65f6\uff0c\u6a21\u578b\u53ef\u4ee5\u53ea\u662f\u201c\u6b7b\u8bb0\u786c\u80cc\u201d\u6240\u6709\u6570\u636e\u70b9\u800c\u6ca1\u6709\u6cdb\u5316\u80fd\u529b\u3002"),(0,l.yg)("p",null,"\u5728\u6536\u96c6\u6837\u672c\u65f6\uff0c\u4e3a\u4e86\u4f7f\u6a21\u578b\u80fd\u591f\u66f4\u597d\u5730\u6cdb\u5316\uff0c\u63d0\u4f9b\u6837\u672c\u7684\u591a\u6837\u6027\u975e\u5e38\u91cd\u8981\uff0c\u4f8b\u5982\uff0c\u6837\u672c\u5177\u6709\u4e0d\u540c\u7684\u65b9\u5411\u3001\u901f\u5ea6\u548c\u8ddd\u79bb\u4f20\u611f\u5668\u7684\u8ddd\u79bb\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u7f51\u7edc\u53ea\u80fd\u4ece\u6570\u636e\u96c6\u4e2d\u5b66\u4e60\u5230\u7684\u6570\u636e\u4e2d\u5b66\u4e60 - \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u7684\u6837\u672c\u53ea\u662f\u5728\u4f20\u611f\u5668\u4e0a\u4ece\u5de6\u5411\u53f3\u79fb\u52a8\u7684\u624b\u52bf\uff0c\u90a3\u4e48\u60a8\u4e0d\u5e94\u8be5\u671f\u671b\u8bad\u7ec3\u540e\u7684\u6a21\u578b\u80fd\u591f\u8bc6\u522b\u4ece\u53f3\u5411\u5de6\u6216\u4e0a\u4e0b\u79fb\u52a8\u7684\u624b\u52bf\u3002"),(0,l.yg)("h2",{id:"\u6784\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b"},"\u6784\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b"),(0,l.yg)("p",null,'\u5728\u6536\u96c6\u6837\u672c\u540e\uff0c\u73b0\u5728\u662f\u8bbe\u8ba1\u4e00\u4e2a "impulse" \u7684\u65f6\u5019\u4e86\u3002\u8fd9\u91cc\u7684 "impulse" \u662f\u6307 Edge Impulse \u7528\u6765\u8868\u793a\u6570\u636e\u5904\u7406\u548c\u8bad\u7ec3\u6d41\u7a0b\u7684\u672f\u8bed\u3002\u70b9\u51fb\u521b\u5efa Impulse\uff0c\u5e76\u5c06\u7a97\u53e3\u957f\u5ea6\u8bbe\u7f6e\u4e3a1000\u6beb\u79d2\uff0c\u7a97\u53e3\u957f\u5ea6\u589e\u52a0\u8bbe\u7f6e\u4e3a50\u6beb\u79d2\u3002'),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/main.png"})),(0,l.yg)("p",null,"\u8fd9\u4e9b\u8bbe\u7f6e\u610f\u5473\u7740\u6bcf\u6b21\u8fdb\u884c\u63a8\u65ad\u65f6\uff0c\u6211\u4eec\u5c06\u5bf91000\u6beb\u79d2\u5185\u7684\u4f20\u611f\u5668\u6d4b\u91cf\u503c\u8fdb\u884c\u91c7\u96c6\u3002\u60a8\u7684\u8bbe\u5907\u5c06\u6839\u636e\u91c7\u6837\u9891\u7387\u8fdb\u884c\u6d4b\u91cf\u3002\u5728\u6570\u636e\u6536\u96c6\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u5c06\u91c7\u6837\u9891\u7387\u8bbe\u7f6e\u4e3a40\u8d6b\u5179\uff0c\u5373\u6bcf\u79d2\u91c7\u683740\u6b21\u3002\u56e0\u6b64\uff0c\u603b\u7ed3\u4e00\u4e0b\uff0c\u60a8\u7684\u8bbe\u5907\u5c06\u57281000\u6beb\u79d2\u7684\u65f6\u95f4\u7a97\u53e3\u5185\u6536\u96c640\u4e2a\u6570\u636e\u6837\u672c\uff0c\u7136\u540e\u5bf9\u8fd9\u4e9b\u503c\u8fdb\u884c\u9884\u5904\u7406\u5e76\u5c06\u5176\u8f93\u5165\u5230\u795e\u7ecf\u7f51\u7edc\u4e2d\u8fdb\u884c\u63a8\u65ad\u3002\u5f53\u7136\uff0c\u5728\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u6211\u4eec\u4f7f\u7528\u76f8\u540c\u7684\u7a97\u53e3\u5927\u5c0f\u3002\n\u5bf9\u4e8e\u8fd9\u4e2a\u6982\u5ff5\u9a8c\u8bc1\u9879\u76ee\uff0c\u6211\u4eec\u5c06\u5c1d\u8bd5\u4e09\u4e2a\u4e0d\u540c\u7684\u9884\u5904\u7406\u5757\uff0c\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\uff08\u9664\u4e86\u6dfb\u52a0\u4e86\u7f29\u653e\uff09 \u2013\n",(0,l.yg)("strong",{parentName:"p"},"Flatten")," \u5757\uff0c\u5b83\u5728\u65f6\u95f4\u7a97\u53e3\u5185\u8ba1\u7b97\u539f\u59cb\u6570\u636e\u7684\u5e73\u5747\u503c\u3001\u6700\u5c0f\u503c\u3001\u6700\u5927\u503c\u548c\u5176\u4ed6\u51fd\u6570\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_ZEX5ydSwOS.jpeg"})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Spectral Features")," \u5757, \u5b83\u63d0\u53d6\u4fe1\u53f7\u968f\u65f6\u95f4\u7684\u9891\u7387\u548c\u529f\u7387\u7279\u5f81"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_7uXlLwjT3E.jpeg"})),"\u548c\u539f\u59cb\u6570\u636e\u5757\uff0c\u60a8\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\uff0c\u5b83\u53ea\u662f\u5c06\u539f\u59cb\u6570\u636e\u9988\u9001\u7ed9 NN \u5b66\u4e60\u5757\uff08\u53ef\u4ee5\u9009\u62e9\u5bf9\u6570\u636e\u8fdb\u884c\u5f52\u4e00\u5316\uff09\u3002",(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image.png"})),"\u6211\u4eec\u5c06\u4ece Flatten \u5757\u5f00\u59cb\u3002\u6dfb\u52a0\u6b64\u5757\uff0c\u7136\u540e\u5c06\u795e\u7ecf\u7f51\u7edc\uff08Keras\uff09\u6dfb\u52a0\u4e3a\u5b66\u4e60\u5757\uff0c\u52fe\u9009 Flatten \u4f5c\u4e3a\u8f93\u5165\u7279\u5f81\uff0c\u7136\u540e\u70b9\u51fb\u4fdd\u5b58 Impulse\u3002\u8f6c\u5230\u4e0b\u4e00\u4e2a\u9009\u9879\u5361\uff0c\u8fd9\u4e2a\u9009\u9879\u5361\u7684\u540d\u79f0\u662f\u60a8\u9009\u62e9\u7684\u5904\u7406\u5757\u7684\u540d\u79f0 - Flatten\u3002\u5728\u7f29\u653e\u4e2d\u8f93\u51650.001\uff0c\u5176\u4ed6\u53c2\u6570\u4fdd\u6301\u4e0d\u53d8\u3002\u6309\u4e0b\u4fdd\u5b58\u53c2\u6570\uff0c\u7136\u540e\u751f\u6210\u7279\u5f81\u3002",(0,l.yg)("p",null,"\u5728 Edge Impulse \u7684 Web \u63a5\u53e3\u4e2d\uff0c\u7279\u5f81\u53ef\u89c6\u5316\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u4ee5\u56fe\u5f62\u65b9\u5f0f\u4e86\u89e3\u6570\u636e\u5728\u9884\u5904\u7406\u540e\u7684\u6837\u5b50\u3002\u4f8b\u5982\uff0c\u8fd9\u662f\u7ecf\u8fc7 Flatten \u5904\u7406\u5757\u5904\u7406\u540e\u7684\u6570\u636e\uff1a"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_4tnpR9t34s.jpeg"})),(0,l.yg)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e0d\u540c\u7c7b\u522b\u7684\u6570\u636e\u70b9\u5927\u81f4\u88ab\u5206\u5f00\uff0c\u4f46\u662f\u77f3\u5934\u548c\u5176\u4ed6\u7c7b\u522b\u4e4b\u95f4\u5b58\u5728\u5f88\u591a\u91cd\u53e0\uff0c\u8fd9\u5c06\u5bfc\u81f4\u8fd9\u4e24\u4e2a\u7c7b\u522b\u7684\u95ee\u9898\u548c\u4f4e\u51c6\u786e\u7387\u3002\u5728\u751f\u6210\u5e76\u68c0\u67e5\u7279\u5f81\u540e\uff0c\u8f6c\u5230 NN Classifier \u9009\u9879\u5361\u3002\n\u4f7f\u75282\u4e2a\u9690\u85cf\u5c42\u7684\u7b80\u5355\u5168\u8fde\u63a5\u7f51\u7edc\u8fdb\u884c\u8bad\u7ec3\uff0c\u6bcf\u4e2a\u9690\u85cf\u5c42\u670920\u4e2a\u548c10\u4e2a\u795e\u7ecf\u5143\uff0c\u8bad\u7ec3500\u4e2a epochs\uff0c\u5b66\u4e60\u7387\u4e3a1e-4\u3002\u8bad\u7ec3\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u5728\u6df7\u6dc6\u77e9\u9635\u4e2d\u770b\u5230\u6d4b\u8bd5\u7ed3\u679c\uff0c\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/flatten.png"})),"\u8fd4\u56de\u5230\u521b\u5efa Impulse \u9009\u9879\u5361\uff0c\u5220\u9664 Flatten \u5757\uff0c\u9009\u62e9 Spectral Features \u5757\uff0c\u751f\u6210\u7279\u5f81\uff08\u8bb0\u5f97\u5c06\u7f29\u653e\u8bbe\u7f6e\u4e3a0.001\uff01\uff09\uff0c\u5e76\u5728 Spectral Features \u6570\u636e\u4e0a\u8bad\u7ec3\u795e\u7ecf\u7f51\u7edc\u3002\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u7565\u5fae\u7684\u6539\u8fdb\u3002",(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/spectral.png"})),"\u5b9e\u9645\u4e0a\uff0cFlatten \u548c Spectral Features \u5757\u90fd\u4e0d\u662f\u6700\u9002\u5408\u526a\u5200\u77f3\u5934\u5e03\u624b\u52bf\u8bc6\u522b\u4efb\u52a1\u7684\u5904\u7406\u65b9\u6cd5\u3002\u5982\u679c\u6211\u4eec\u4ed4\u7ec6\u601d\u8003\uff0c\u5bf9\u4e8e\u5206\u7c7b\u526a\u5200\u77f3\u5934\u5e03\u624b\u52bf\uff0c\u6211\u4eec\u53ea\u9700\u8981\u8ba1\u7b97\u5149\u4f20\u611f\u5668\u63a5\u6536\u5230\u201c\u4f4e\u4e8e\u6b63\u5e38\u201d\u503c\u7684\u6b21\u6570\u4ee5\u53ca\u6301\u7eed\u65f6\u95f4\u3002\u5982\u679c\u662f\u4e00\u6bb5\u76f8\u5bf9\u8f83\u957f\u7684\u65f6\u95f4\uff0c\u90a3\u4e48\u5c31\u662f\u77f3\u5934\uff08\u624b\u5728\u4f20\u611f\u5668\u4e0a\u65b9\u5212\u8fc7\uff09\u3002\u5982\u679c\u662f\u4e24\u6b21\uff0c\u90a3\u4e48\u5c31\u662f\u526a\u5200\u3002\u591a\u4e8e\u4e24\u6b21\u5c31\u662f\u5e03\u3002\u542c\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4f46\u4fdd\u7559\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5bf9\u4e8e\u795e\u7ecf\u7f51\u7edc\u80fd\u591f\u5b66\u4e60\u6570\u636e\u70b9\u4e2d\u7684\u8fd9\u79cd\u5173\u7cfb\u975e\u5e38\u91cd\u8981\u3002 Flatten \u548c Spectral Features \u5904\u7406\u5757\u90fd\u4f1a\u6d88\u9664\u7a97\u53e3\u5185\u7684\u65f6\u95f4\u5173\u7cfb - Flatten \u5757\u5c06\u6700\u521d\u6309\u987a\u5e8f\u6392\u5217\u7684\u539f\u59cb\u503c\u8f6c\u6362\u4e3a\u5728\u65f6\u95f4\u7a97\u53e3\u5185\u8ba1\u7b97\u7684\u5e73\u5747\u503c\u3001\u6700\u5c0f\u503c\u3001\u6700\u5927\u503c\u7b49\u503c\uff0c\u800c\u4e0d\u8003\u8651\u5b83\u4eec\u7684\u987a\u5e8f\u3002Spectral Features \u5757\u63d0\u53d6\u9891\u7387\u548c\u529f\u7387\u7279\u5f81\uff0c\u800c\u4e3a\u4ec0\u4e48\u5b83\u5728\u8fd9\u4e2a\u7279\u5b9a\u4efb\u52a1\u4e2d\u6548\u679c\u4e0d\u597d\u53ef\u80fd\u662f\u56e0\u4e3a\u6bcf\u4e2a\u624b\u52bf\u7684\u6301\u7eed\u65f6\u95f4\u592a\u77ed\u3002 \u56e0\u6b64\uff0c\u5b9e\u73b0\u6700\u4f73\u6027\u80fd\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 Raw data \u5757\uff0c\u5b83\u5c06\u4fdd\u7559\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u3002\u8bf7\u67e5\u770b\u6211\u4eec\u4f7f\u7528 Raw data \u548c\u4e00\u7ef4\u5377\u79ef\u7f51\u7edc\uff08\u76f8\u5bf9\u4e8e\u5168\u8fde\u63a5\u7f51\u7edc\u800c\u8a00\uff0c\u8fd9\u662f\u4e00\u79cd\u66f4\u4e13\u95e8\u7684\u7f51\u7edc\u7c7b\u578b\uff09\u7684\u793a\u4f8b\u9879\u76ee\u3002\u6211\u4eec\u5728\u76f8\u540c\u7684\u6570\u636e\u4e0a\u8fbe\u5230\u4e8692.4%\u7684\u51c6\u786e\u7387\uff01",(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/raw.png"})),(0,l.yg)("p",null,"\u8bad\u7ec3\u540e\u7684\u6700\u7ec8\u7ed3\u679c\u5982\u4e0b"),(0,l.yg)("p",null,"\u2022 Flatten FC \u7cbe\u5ea6\u4e3a 69.9%"),(0,l.yg)("p",null,"\u2022 Spectral Features FC \u7cbe\u5ea6\u4e3a 70.4%"),(0,l.yg)("p",null,"\u2022 Raw Data Conv1D \u7cbe\u5ea6\u4e3a 92.4%"),(0,l.yg)("p",null,"\u8bad\u7ec3\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Live classification \u9009\u9879\u5361\u6d4b\u8bd5\u6a21\u578b\uff0c\u8be5\u9009\u9879\u5361\u5c06\u4ece\u8bbe\u5907\u4e2d\u6536\u96c6\u6570\u636e\u6837\u672c\uff0c\u5e76\u4f7f\u7528 Edge Impulse \u4e0a\u6258\u7ba1\u7684\u6a21\u578b\u8fdb\u884c\u5206\u7c7b\u3002\u6211\u4eec\u6d4b\u8bd5\u4e86\u4e09\u79cd\u4e0d\u540c\u7684\u624b\u52bf\uff0c\u5e76\u4e14\u5728\u6982\u5ff5\u9a8c\u8bc1\u65b9\u9762\u51c6\u786e\u7387\u4ee4\u4eba\u6ee1\u610f\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/live_class.png"})),(0,l.yg)("h2",{id:"\u90e8\u7f72\u5230-wio-terminal"},"\u90e8\u7f72\u5230 Wio Terminal"),(0,l.yg)("p",null,"\u63a5\u4e0b\u6765\u662f\u5728\u8bbe\u5907\u4e0a\u8fdb\u884c\u90e8\u7f72\u3002\u70b9\u51fb Deployment \u9009\u9879\u5361\uff0c\u5728 Arduino \u5e93\u4e2d\u9009\u62e9\u5e76\u4e0b\u8f7d Arduino \u5e93\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png"})),(0,l.yg)("p",null,"\u89e3\u538b\u7f29\u5b58\u6863\u6587\u4ef6\uff0c\u5e76\u5c06\u5176\u653e\u7f6e\u5728 Arduino \u5e93\u6587\u4ef6\u5939\u4e2d\u3002\u6253\u5f00 Arduino IDE\uff0c\u9009\u62e9\u9759\u6001\u7f13\u51b2\u533a\u793a\u4f8b\uff08(located in File -> Examples -> name of your project -> static_buffer)\uff0c\u5176\u4e2d\u5df2\u7ecf\u5305\u542b\u4e86\u7528\u4e8e\u5206\u7c7b\u7684\u6a21\u578b\u7684\u6240\u6709\u6837\u677f\u4ee3\u7801\u3002\u975e\u5e38\u68d2\uff01"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/example.png"})),(0,l.yg)("p",null,"\u6211\u4eec\u552f\u4e00\u9700\u8981\u586b\u5199\u7684\u662f\u8bbe\u5907\u4e0a\u7684\u6570\u636e\u91c7\u96c6\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u7684 for \u5faa\u73af\u548c\u5ef6\u8fdf\u6765\u9002\u5e94\u9891\u7387\uff08\u5982\u679c\u60a8\u8fd8\u8bb0\u5f97\uff0c\u5728\u6536\u96c6\u8bad\u7ec3\u6570\u636e\u96c6\u65f6\uff0c\u6211\u4eec\u670925\u6beb\u79d2\u7684\u5ef6\u8fdf\uff09\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-cpp"},"int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\nfloat features[40];\nfor (byte i = 0; i < 40; i = i + 1) \n    {\n    features[i]=analogRead(WIO_LIGHT);\n    delay(25);\n    }\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n")),(0,l.yg)("p",null,"\u5f53\u7136\uff0c\u6709\u66f4\u597d\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u4f8b\u5982\u4f20\u611f\u5668\u6570\u636e\u7f13\u51b2\u533a\uff0c\u8fd9\u5c06\u5141\u8bb8\u6211\u4eec\u66f4\u9891\u7e41\u5730\u8fdb\u884c\u63a8\u65ad\u3002\u4f46\u662f\u6211\u4eec\u4f1a\u5728\u672c\u7cfb\u5217\u7684\u540e\u7eed\u6587\u7ae0\u4e2d\u4ecb\u7ecd\u8fd9\u4e9b\u3002"),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif3.gif"})),(0,l.yg)("p",null,"\u5c3d\u7ba1\u8fd9\u53ea\u662f\u4e00\u4e2a\u6982\u5ff5\u9a8c\u8bc1\u6f14\u793a\uff0c\u4f46\u5b83\u786e\u5b9e\u5c55\u793a\u4e86 TinyML \u7684\u5de8\u5927\u6f5c\u529b\u3002\u60a8\u53ef\u80fd\u77e5\u9053\u4f7f\u7528\u76f8\u673a\u4f20\u611f\u5668\u53ef\u4ee5\u8bc6\u522b\u624b\u52bf\uff0c\u5373\u4f7f\u56fe\u50cf\u88ab\u5927\u5e45\u7f29\u5c0f\u3002\u4f46\u662f\u53ea\u7528\u4e00\u4e2a\u50cf\u7d20\u6765\u8bc6\u522b\u624b\u52bf\u5b8c\u5168\u662f\u53e6\u4e00\u4e2a\u5c42\u6b21\uff01"),(0,l.yg)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/15854/latest"},"Edge Impulse \u516c\u5171\u9879\u76ee"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_1_Intro"},"Project Github")))))}m.isMDXComponent=!0}}]);