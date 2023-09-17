"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,m=d["".concat(l,".").concat(p)]||d[p]||g[p]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Language Learning Discord Bot",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-language-learning-discord-bot/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-language-learning-discord-bot/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Barry Doan",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-language-learning-discord-bot/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-language-learning-discord-bot/docs/requirements/system-block-diagram"}},l={},c=[{value:"Language Learning Discord Bot",id:"language-learning-discord-bot",level:2},{value:"Project Abstract",id:"project-abstract",level:3},{value:"High-Level Requirement",id:"high-level-requirement",level:3},{value:"Conceptual Design",id:"conceptual-design",level:3},{value:"Background",id:"background",level:3},{value:"Required Resources",id:"required-resources",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-overview"},"System Overview"),(0,i.kt)("h2",{id:"language-learning-discord-bot"},"Language Learning Discord Bot"),(0,i.kt)("h3",{id:"project-abstract"},"Project Abstract"),(0,i.kt)("p",null,"This document proposes a language-learning chatbot integrated with the Discord platform, i.e., a Discord bot. The bot is a language learning assistant designed to help users learn a new language effectively. It offers a wide range of features to support language acquisition and practice, including providing interactive lessons, vocabulary practice, language quizzes, pronunciation testing, reading with audio and translation, syntax and spelling checks, and more. Users will be able to start learning sessions, access learning materials, and conversation practice, all while being guided and assisted by the bot. "),(0,i.kt)("h3",{id:"high-level-requirement"},"High-Level Requirement"),(0,i.kt)("p",null,"Users should be able to easily install the Discord bot to a server of choice. Users should also be able to initiate language learning sessions and specify their chosen language, i.e., Japanese, Spanish, etc. The bot must offer a comprehensive set of interactive lessons, possibly including text-based content, vocabulary quizzes, and pronunciation exercises. It may also have features such as progress tracking and user profiles which are saved in a database. Additionally, the bot will provide resources and explanations to user requests.  "),(0,i.kt)("h3",{id:"conceptual-design"},"Conceptual Design"),(0,i.kt)("p",null,"This project will be developed with Python utilizing the Discord library. The bot will function as a \u201cbot account\u201d within Discord servers, offering users the ability to interact while on the phone or the web. User progress must be saved, so it will most likely be managed by a database system, allowing personalized learning journeys (Save progress for different languages)."),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"Learning new languages is a significant educational need, and Discord provides a user-friendly platform for this interactive bot. Now, of course, while there are language-learning apps and websites, imagine all of those resources integrated within a Discord bot for simplicity and easy engagement. This project aims to combine Discord\u2019s chat feature with educational content to offer a simple and easy language learning solution. "),(0,i.kt)("p",null,"Existing language learning bots do exist, but the only known bot for this is the GPT-powered bot, \u201cMemrise\u201d. From what I read, the bot utilizes GPT (the AI model behind ChatGPT) to allow users to learn new languages. The bot simply allows you to learn a language while talking to the bot itself, i.e., having a conversation. This project seeks to further what Memrise does by offering more ways to learn by providing users with quizzes, pronunciation exercises, and other resourceful tools."),(0,i.kt)("h3",{id:"required-resources"},"Required Resources"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Experience in Python & Discord (Have them installed) "),(0,i.kt)("li",{parentName:"ol"},"Access to a Discord account and API token "),(0,i.kt)("li",{parentName:"ol"},"Knowledge of database systems (This feature is a possibility) "),(0,i.kt)("li",{parentName:"ol"},"Server or Cloud Hosting "),(0,i.kt)("li",{parentName:"ol"},"Possibly utilize GPT")))}d.isMDXComponent=!0}}]);