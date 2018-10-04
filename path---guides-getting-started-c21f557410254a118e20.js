webpackJsonp([0xdb13a78d1b5e],{508:function(e,t){e.exports={data:{markdownRemark:{html:'<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<pre><code class="language-term">npm install @ezcater/recipe --save\n</code></pre>\n<p>After installing recipe in your new application you may need to install some additional peer dependencies, check the warnings in your terminal for what those are as well as the <code>package.json</code> file. There is a section specifically for <code>peerDependencies</code> which need to be installed by the parent application.  </p>\n<h2 id="importing-components-in-downstream-projects"><a href="#importing-components-in-downstream-projects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing components in downstream projects</h2>\n<p>Import the Recipe package, just as you would any other package dependency:</p>\n<pre><code class="language-js">import {EzButton} from \'@ezcater/recipe\';\n\nexport const MyComponent = () => (\n  &#x3C;div>\n    &#x3C;EzButton use="primary" onClick={() => alert(\'You clicked me!\')}>\n      Click Me!\n    &#x3C;/EzButton>\n  &#x3C;/div>\n);\n</code></pre>\n<h3 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h3>\n<p>If you\'re interested in contributing, check out our <a href="/recipe/guides/contributing">contributing guidelines</a> to get started.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{id:"installation"},children:[{type:"element",tagName:"a",properties:{href:"#installation",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Installation"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-term"]},children:[{type:"text",value:"npm install @ezcater/recipe --save\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After installing recipe in your new application you may need to install some additional peer dependencies, check the warnings in your terminal for what those are as well as the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:" file. There is a section specifically for "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"peerDependencies"}]},{type:"text",value:" which need to be installed by the parent application.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"importing-components-in-downstream-projects"},children:[{type:"element",tagName:"a",properties:{href:"#importing-components-in-downstream-projects",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Importing components in downstream projects"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Import the Recipe package, just as you would any other package dependency:"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"import {EzButton} from '@ezcater/recipe';\n\nexport const MyComponent = () => (\n  <div>\n    <EzButton use=\"primary\" onClick={() => alert('You clicked me!')}>\n      Click Me!\n    </EzButton>\n  </div>\n);\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"contributing"},children:[{type:"element",tagName:"a",properties:{href:"#contributing",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Contributing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you're interested in contributing, check out our "},{type:"element",tagName:"a",properties:{href:"/recipe/guides/contributing"},children:[{type:"text",value:"contributing guidelines"}]},{type:"text",value:" to get started."}]}],data:{quirksMode:!1}},frontmatter:{path:"/guides/getting-started",title:"Getting Started"}}},pathContext:{}}}});
//# sourceMappingURL=path---guides-getting-started-c21f557410254a118e20.js.map