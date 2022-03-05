import{_ as r,r as n,o as a,d as c,e,g as s,F as i,b as l,f as t}from"./app.729977c1.js";const p={},d=l(`<h1 id="\u5B89\u88C5-typescript" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-typescript" aria-hidden="true">#</a> \u5B89\u88C5 TypeScript</h1><p>TypeScript \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u5B89\u88C5\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g typescript
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4EE5\u4E0A\u547D\u4EE4\u4F1A\u5728\u5168\u5C40\u73AF\u5883\u4E0B\u5B89\u88C5 <code>tsc</code> \u547D\u4EE4\uFF0C\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u6267\u884C <code>tsc</code> \u547D\u4EE4\u4E86\u3002</p><p>\u7F16\u8BD1\u4E00\u4E2A TypeScript \u6587\u4EF6\u5F88\u7B80\u5355\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6211\u4EEC\u7EA6\u5B9A\u4F7F\u7528 TypeScript \u7F16\u5199\u7684\u6587\u4EF6\u4EE5 <code>.ts</code> \u4E3A\u540E\u7F00\uFF0C\u7528 TypeScript \u7F16\u5199 React \u65F6\uFF0C\u4EE5 <code>.tsx</code> \u4E3A\u540E\u7F00\u3002</p><h2 id="\u7F16\u8F91\u5668" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u5668" aria-hidden="true">#</a> \u7F16\u8F91\u5668</h2><p>TypeScript \u6700\u5927\u7684\u4F18\u52BF\u4E4B\u4E00\u4FBF\u662F\u589E\u5F3A\u4E86\u7F16\u8F91\u5668\u548C IDE \u7684\u529F\u80FD\uFF0C\u5305\u62EC\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u3001\u91CD\u6784\u7B49\u3002</p>`,9),h=t("\u4E3B\u6D41\u7684\u7F16\u8F91\u5668\u90FD\u652F\u6301 TypeScript\uFF0C\u8FD9\u91CC\u6211\u63A8\u8350\u4F7F\u7528 "),_={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},u=t("Visual Studio Code"),m=t("\u3002"),b=e("p",null,"\u5B83\u662F\u4E00\u6B3E\u5F00\u6E90\uFF0C\u8DE8\u7EC8\u7AEF\u7684\u8F7B\u91CF\u7EA7\u7F16\u8F91\u5668\uFF0C\u5185\u7F6E\u4E86\u5BF9 TypeScript \u7684\u652F\u6301\u3002",-1),g=t("\u53E6\u5916\u5B83\u672C\u8EAB\u4E5F\u662F"),f={href:"https://github.com/Microsoft/vscode/",target:"_blank",rel:"noopener noreferrer"},y=t("\u7528 TypeScript \u7F16\u5199\u7684"),S=t("\u3002"),k=e("p",null,"\u4E0B\u8F7D\u5B89\u88C5\uFF1Ahttps://code.visualstudio.com/",-1),v=e("p",null,"\u83B7\u53D6\u5176\u4ED6\u7F16\u8F91\u5668\u6216 IDE \u5BF9 TypeScript \u7684\u652F\u6301\uFF1A",-1),T={href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin",target:"_blank",rel:"noopener noreferrer"},x=t("Sublime Text"),V={href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"},E=t("WebStorm"),w={href:"https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim",target:"_blank",rel:"noopener noreferrer"},B=t("Vim"),D={href:"https://github.com/ananthakumaran/tide",target:"_blank",rel:"noopener noreferrer"},I=t("Emacs"),N={href:"https://github.com/palantir/eclipse-typescript",target:"_blank",rel:"noopener noreferrer"},A=t("Eclipse"),M={href:"https://atom.io/packages/atom-typescript",target:"_blank",rel:"noopener noreferrer"},C=t("Atom"),F={href:"https://marketplace.visualstudio.com/search?term=TypeScriptTeam&target=VS&category=All%20categories&vsVersion=vs2019&sortBy=UpdatedDate",target:"_blank",rel:"noopener noreferrer"},L=t("Visual Studio 2019"),U={href:"https://marketplace.visualstudio.com/search?term=TypeScriptTeam&target=VS&category=All%20categories&vsVersion=vs15&sortBy=UpdatedDate",target:"_blank",rel:"noopener noreferrer"},j=t("Visual Studio 2017");function P(R,W){const o=n("ExternalLinkIcon");return a(),c(i,null,[d,e("p",null,[h,e("a",_,[u,s(o)]),m]),b,e("p",null,[g,e("a",f,[y,s(o)]),S]),k,v,e("ul",null,[e("li",null,[e("a",T,[x,s(o)])]),e("li",null,[e("a",V,[E,s(o)])]),e("li",null,[e("a",w,[B,s(o)])]),e("li",null,[e("a",D,[I,s(o)])]),e("li",null,[e("a",N,[A,s(o)])]),e("li",null,[e("a",M,[C,s(o)])]),e("li",null,[e("a",F,[L,s(o)])]),e("li",null,[e("a",U,[j,s(o)])])])],64)}var z=r(p,[["render",P]]);export{z as default};
