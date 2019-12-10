(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1161:function(e){e.exports={name:"@ezcater/recipe",version:"7.1.2",description:"ezCater's React UI Component library",main:"lib/index.js",peerDependencies:{emotion:"^9.2.3",react:"^16.8.2","react-dom":"^16.8.2","react-emotion":"^9.2.3","emotion-theming":"^9.2.3"},devDependencies:{"@babel/cli":"^7.2.3","@babel/core":"^7.3.3","@babel/plugin-proposal-class-properties":"^7.3.3","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.3.1","@babel/preset-react":"^7.0.0","@babel/preset-stage-1":"^7.0.0","@babel/preset-typescript":"^7.3.3","@ezcater/ez-scripts":"^1.0.2","@types/cheerio":"^0.22.10","@types/enzyme":"^3.1.18","@types/enzyme-adapter-react-16":"^1.0.4","@types/jest":"^24.0.6","@types/jest-axe":"^2.2.3","@types/react":"^16.8.20","@types/react-dom":"^16.8.2","@types/react-test-renderer":"^16.8.1","babel-core":"^6.26.3","babel-jest":"^24.1.0","babel-plugin-emotion":"^9.2.4","babel-plugin-transform-inline-environment-variables":"^0.4.3",concurrently:"^4.1.0","create-emotion":"^9.2.12",emotion:"^9.2.12","emotion-theming":"^9.2.3",enzyme:"^3.9.0","enzyme-adapter-react-16":"^1.9.1",jest:"^24.1.0","jest-axe":"^3.2.0","jest-cli":"^24.1.0","jest-dom":"^3.1.2","jest-emotion":"^9.2.11","jest-enzyme":"^7.0.1","jest-raw-loader":"^1.0.1",jsdom:"^15.1.1",plop:"^2.2.1",prettier:"^1.16.4",react:"^16.8.2","react-component-component":"^1.2.1","react-dom":"^16.8.2","react-emotion":"^9.2.12","react-router-dom":"^5.0.0","react-test-renderer":"^16.8.2","react-testing-library":"^5.9.0",sosia:"^1.2.5","sosia-markdown":"^1.1.1","sosia-remote-puppeteer":"^1.1.3","sosia-types":"^1.0.3","ts-jest":"^24.0.0",tslint:"^5.12.1",typescript:"^3.5.2"},scripts:{start:'concurrently "npm run build:watch" "(cd doc-site/ && npm run develop)" --kill-others',"type-check":"tsc --noEmit","type-check:watch":"npm run type-check -- --watch",build:"npm run build:types && npm run build:js","build:types":"tsc --emitDeclarationOnly","build:js":'babel src --out-dir lib --extensions ".ts,.tsx" --source-maps inline',"build:watch":"npm run build:js -- --watch","create-component":"plop component",test:"jest --coverage --no-cache","test:watch":"npm test -- --watch",lint:"ez-scripts lint","lint:fix":"ez-scripts lint --fix"},dependencies:{"@emotion/is-prop-valid":"^0.7.3","@reach/dialog":"^0.1.3",csstype:"^2.6.3",dayjs:"^1.8.14",reakit:"^1.0.0-beta.2","styled-component-variant":"^1.0.1"}}},144:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(30),o=a.n(i),l=a(384),c=a.n(l),s=a(1161),p=a(169),m=a(387),d=a(160),u=Object(d.d)("0%,100%{transform:rotate(0);}20%,60%{transform:rotate(-25deg);}40%,80%{transform:rotate(10deg);}"),b=Object(d.b)("a",{target:"e1uujhxh0"})("&:hover .octo-arm{animation:",u," 560ms ease-in-out;}& .octo-arm{transform-origin:130px 106px;}@media screen and (max-width:500px){&:hover .octo-arm{animation:none;}& .octo-arm{animation:",u," 560ms ease-in-out;}}"),h=Object(d.b)("svg",{target:"e1uujhxh1"})("z-index:99;fill:#fff;color:#88bb40;position:absolute;top:0;border:0;right:0;"),g=function(e){var t=e.repository;return r.a.createElement(b,{href:t,target:"_blank","aria-label":"View source on Github"},r.a.createElement(h,{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{className:"octo-arm",fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}),r.a.createElement("path",{className:"octo-body",fill:"currentColor",d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"})))};Object(d.c)("p{margin:0 0 1.45rem;}");var E=Object.assign({},p.themes.standard),f=Object(d.b)("div",{target:"eswa3xa0"})("color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#88bb40 url(https://www.ezcater.com/ezrails/patterns/food_pattern-e104391a85399cde4594e0009d17d5db58732efa36de049a87ccd812a83666b4.svg) 0 0 repeat;padding:64px;> h1{font-size:100px;font-weight:300;margin:0.67em 0;line-height:1.1;}> p{font-size:20px;}"),y=Object(d.a)("content:'';width:25px;height:25px;background-color:#f3f7f8;border-radius:25px;border:4px solid #76ac2c;position:absolute;top:-15px;"),w=Object(d.b)("div",{target:"eswa3xa1"})("border-top:solid 3px #76ad2c;width:100%;position:relative;margin-top:20px;padding-top:20px;display:flex;justify-content:center;:before{",y,";left:calc(75% - 12.5px);}a:before{",y,";left:calc(50% - 12.5px);}a:after{",y,";left:calc(25% - 12.5px);}"),z=Object(d.b)(p.EzCard,{target:"eswa3xa2"})("&& > *{flex-wrap:wrap;> *{flex-basis:50%;}}@media screen and (min-width:",function(e){return e.theme.breakpoints.large},"){&& > * > *{flex-basis:0;}}");t.default=function(){return r.a.createElement(p.EzAppLayout,{layout:"centered"},r.a.createElement(c.a,{title:"Recipe",meta:[{name:"description",content:"Recipe Design System"},{name:"keywords",content:"Recipe Design System EzCater"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i",rel:"stylesheet"})),r.a.createElement(g,{repository:"https://github.com/ezcater/recipe"}),r.a.createElement(m.a,{theme:E},r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement("h1",null,"Recipe"),r.a.createElement("p",null,'"Now that I’ve worked with Recipe, I don’t want to go back to working without Recipe."'),r.a.createElement("p",null,"-Jesse Belanger")),r.a.createElement(p.EzPage,null,r.a.createElement(p.EzFlashMessage,{use:"info",headline:"Want to contribute to Recipe?"},r.a.createElement("p",null,"Your contributions will help all the squads that use Recipe. Check out our"," ",r.a.createElement(p.EzLink,{to:"/guides/contributing/",as:o.a},"contributing guidelines")," ","to get started.")),r.a.createElement(z,{horizontal:!0},r.a.createElement(p.EzCardSection,null,r.a.createElement(p.EzHeading,{size:"3"},"Getting started"),r.a.createElement("p",null,"Onboarding for designers and developers who are using Recipe for the first time."),r.a.createElement("p",null,r.a.createElement(p.EzLink,{to:"/guides/getting-started/",as:o.a},"View quick start guide"))),r.a.createElement(p.EzCardSection,null,r.a.createElement(p.EzHeading,{size:"3"},"Components"),r.a.createElement("p",null,"Explore the building blocks of our component library with code examples and guidelines."),r.a.createElement(p.EzLayout,{layout:"basic"},r.a.createElement(p.EzLink,{to:"/components",as:o.a},"View components"))),r.a.createElement(p.EzCardSection,null,r.a.createElement(p.EzHeading,{size:"3"},"Style"),r.a.createElement("p",null,"Guidance on how to approach the visual elements of our applications."),r.a.createElement("p",null,r.a.createElement(p.EzLink,{to:"/styles/colors",as:o.a},"View styles"))),r.a.createElement(p.EzCardSection,null,r.a.createElement(p.EzHeading,{size:"3"},"Principles"),r.a.createElement("p",null,"Explore our approach for building the design system."),r.a.createElement("p",null,r.a.createElement(p.EzLink,{to:"/guides/principles/",as:o.a},"View design guidelines")))),r.a.createElement("br",null),r.a.createElement(w,null,r.a.createElement(p.EzLink,{to:"/timeline/",as:o.a},"Roadmap/Timeline")),r.a.createElement(p.EzCard,{title:"What’s new?",subtitle:"Recipe v"+s.version,accent:"info"},r.a.createElement("p",null,"A new and improved version of the Recipe React component library. Upgrade to v",s.version," today to take advantage of our new features in your apps and projects."),r.a.createElement("p",null,r.a.createElement(p.EzLink,{to:"/changelog/",as:o.a},"View all Recipe updates")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-adcbe2a94186677b5bf5.js.map