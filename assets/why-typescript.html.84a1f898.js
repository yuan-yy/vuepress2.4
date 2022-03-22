import{_ as r,r as c,o as l,a,b as e,d as s,w as n,F as o,f as i,e as t}from"./app.1980143b.js";const d={},h=i('<p>\u4F60\u53EF\u80FD\u6216\u591A\u6216\u5C11\u542C\u8BF4\u8FC7\u8FD9\u6837\u7684\u8A00\u8BBA\uFF1A</p><ul><li>TypeScript \u53EA\u9002\u7528\u4E8E\u5927\u516C\u53F8\u7684\u5927\u578B\u9879\u76EE</li><li>TypeScript \u9002\u5408\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\uFF0C\u4E00\u4E2A\u4EBA\u7EF4\u62A4\u7684\u9879\u76EE\u5C31\u6CA1\u5FC5\u8981\u4F7F\u7528\u4E86</li><li>TypeScript \u5B66\u4E60\u6210\u672C\u9AD8\uFF0C\u5F00\u53D1\u6210\u672C\u9AD8</li><li>\u65E7\u9879\u76EE\u662F JavaScript\uFF0C\u6240\u4EE5\u6CA1\u5FC5\u8981\u6539\u9020\u6210 TypeScript \u4E86</li></ul><p>\u6211\u60F3\u8BF4\uFF0C\u90FD 2021 \u5E74\u4E86\uFF0C\u8D76\u7D27\u4E0A\u8F66\u5427\uFF0C\u7EDD\u5927\u90E8\u5206\u9879\u76EE\u90FD\u5E94\u8BE5\u4F7F\u7528 TypeScript\uFF01</p><p>\u5927\u578B\u9879\u76EE\u4E0D\u5FC5\u591A\u8BF4\uFF0CTypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u80FD\u591F\u96C6\u6210\u5230 IDE\uFF08\u6216\u7F16\u8F91\u5668\uFF09\u4E2D\uFF0C\u901A\u8FC7\u4EE3\u7801\u8865\u5168\u3001\u4EE3\u7801\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u7B49\u529F\u80FD\uFF0C\u6781\u5927\u7684\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\uFF0C\u964D\u4F4E bug \u7387\u3002</p><blockquote><p>\u52A8\u6001\u7C7B\u578B\u4E00\u65F6\u723D\uFF0C\u4EE3\u7801\u91CD\u6784\u706B\u846C\u573A\u3002</p></blockquote><p>\u5982\u679C\u4F60\u6CA1\u6709\u5B66\u8FC7 TypeScript\uFF0C\u90A3\u4E48\u53EF\u80FD\u8FDE\u8FD9\u6837\u7684\u63A5\u53E3\u63D0\u793A\u90FD\u770B\u4E0D\u61C2\u4E86\uFF1A</p><h2 id="\u4E3A\u4EC0\u4E48\u9009\u62E9-typescript" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9009\u62E9-typescript" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u9009\u62E9 TypeScript</h2><p>[TypeScript \u5B98\u7F51][TypeScript]\u5217\u4E3E\u4E86\u4E00\u4E9B\u4F18\u52BF\uFF0C\u4E0D\u8FC7\u6211\u66F4\u613F\u610F\u81EA\u5DF1\u603B\u7ED3\u4E00\u4E0B\uFF1A</p><h3 id="typescript-\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027" tabindex="-1"><a class="header-anchor" href="#typescript-\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027" aria-hidden="true">#</a> TypeScript \u589E\u52A0\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027</h3><ul><li>\u7C7B\u578B\u7CFB\u7EDF\u5B9E\u9645\u4E0A\u662F\u6700\u597D\u7684\u6587\u6863\uFF0C\u5927\u90E8\u5206\u7684\u51FD\u6570\u770B\u770B\u7C7B\u578B\u7684\u5B9A\u4E49\u5C31\u53EF\u4EE5\u77E5\u9053\u5982\u4F55\u4F7F\u7528\u4E86</li><li>\u53EF\u4EE5\u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u53D1\u73B0\u5927\u90E8\u5206\u9519\u8BEF\uFF0C\u8FD9\u603B\u6BD4\u5728\u8FD0\u884C\u65F6\u5019\u51FA\u9519\u597D</li><li>\u589E\u5F3A\u4E86\u7F16\u8F91\u5668\u548C IDE \u7684\u529F\u80FD\uFF0C\u5305\u62EC\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u3001\u4EE3\u7801\u91CD\u6784\u7B49</li></ul><h3 id="typescript-\u975E\u5E38\u5305\u5BB9" tabindex="-1"><a class="header-anchor" href="#typescript-\u975E\u5E38\u5305\u5BB9" aria-hidden="true">#</a> TypeScript \u975E\u5E38\u5305\u5BB9</h3>',11),y=e("li",null,[t("TypeScript \u662F JavaScript \u7684\u8D85\u96C6\uFF0C"),e("code",null,".js"),t(" \u6587\u4EF6\u53EF\u4EE5\u76F4\u63A5\u91CD\u547D\u540D\u4E3A "),e("code",null,".ts"),t(" \u5373\u53EF")],-1),u=t("\u5373\u4F7F\u4E0D\u663E\u5F0F\u7684\u5B9A\u4E49\u7C7B\u578B\uFF0C\u4E5F\u80FD\u591F\u81EA\u52A8\u505A\u51FA"),S=t("\u7C7B\u578B\u63A8\u8BBA"),_=e("li",null,"TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u56FE\u7075\u5B8C\u5907\u7684\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u4ECE\u7B80\u5355\u5230\u590D\u6742\u7684\u51E0\u4E4E\u4E00\u5207\u7C7B\u578B",-1),T=e("li",null,"\u5373\u4F7F TypeScript \u7F16\u8BD1\u62A5\u9519\uFF0C\u4E5F\u53EF\u4EE5\u751F\u6210 JavaScript \u6587\u4EF6",-1),f=e("li",null,"\u517C\u5BB9\u7B2C\u4E09\u65B9\u5E93\uFF0C\u5373\u4F7F\u7B2C\u4E09\u65B9\u5E93\u4E0D\u662F\u7528 TypeScript \u5199\u7684\uFF0C\u4E5F\u53EF\u4EE5\u7F16\u5199\u5355\u72EC\u7684\u7C7B\u578B\u6587\u4EF6\u4F9B TypeScript \u8BFB\u53D6",-1),b=i('<h3 id="typescript-\u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A" tabindex="-1"><a class="header-anchor" href="#typescript-\u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A" aria-hidden="true">#</a> TypeScript \u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A</h3><ul><li>\u5927\u90E8\u5206\u7B2C\u4E09\u65B9\u5E93\u90FD\u6709\u63D0\u4F9B\u7ED9 TypeScript \u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6</li><li>Angular\u3001Vue\u3001VS Code\u3001Ant Design \u7B49\u7B49\u8033\u719F\u80FD\u8BE6\u7684\u9879\u76EE\u90FD\u662F\u4F7F\u7528 TypeScript \u7F16\u5199\u7684</li><li>TypeScript \u62E5\u62B1\u4E86 ES6 \u89C4\u8303\uFF0C\u652F\u6301 ESNext \u8349\u6848\u4E2D\u5904\u4E8E\u7B2C\u4E09\u9636\u72B6\u6001\uFF08Stage 3\uFF09\u7684\u7279\u6027</li></ul><h3 id="typescript-\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#typescript-\u7684\u7F3A\u70B9" aria-hidden="true">#</a> TypeScript \u7684\u7F3A\u70B9</h3><p>\u4EFB\u4F55\u4E8B\u7269\u90FD\u662F\u6709\u4E24\u9762\u6027\u7684\uFF0C\u6211\u8BA4\u4E3A TypeScript \u7684\u5F0A\u7AEF\u5728\u4E8E\uFF1A</p><ul><li>\u6709\u4E00\u5B9A\u7684\u5B66\u4E60\u6210\u672C\uFF0C\u9700\u8981\u7406\u89E3\u63A5\u53E3\uFF08Interfaces\uFF09\u3001\u6CDB\u578B\uFF08Generics\uFF09\u3001\u7C7B\uFF08Classes\uFF09\u3001\u679A\u4E3E\u7C7B\u578B\uFF08Enums\uFF09\u7B49\u524D\u7AEF\u5DE5\u7A0B\u5E08\u53EF\u80FD\u4E0D\u662F\u5F88\u719F\u6089\u7684\u6982\u5FF5</li><li>\u77ED\u671F\u53EF\u80FD\u4F1A\u589E\u52A0\u4E00\u4E9B\u5F00\u53D1\u6210\u672C\uFF0C\u6BD5\u7ADF\u8981\u591A\u5199\u4E00\u4E9B\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u4E0D\u8FC7\u5BF9\u4E8E\u4E00\u4E2A\u9700\u8981\u957F\u671F\u7EF4\u62A4\u7684\u9879\u76EE\uFF0CTypeScript \u80FD\u591F\u51CF\u5C11\u5176\u7EF4\u62A4\u6210\u672C</li><li>\u96C6\u6210\u5230\u6784\u5EFA\u6D41\u7A0B\u9700\u8981\u4E00\u4E9B\u5DE5\u4F5C\u91CF</li><li>\u53EF\u80FD\u548C\u4E00\u4E9B\u5E93\u7ED3\u5408\u7684\u4E0D\u662F\u5F88\u5B8C\u7F8E</li></ul><p>\u5927\u5BB6\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u56E2\u961F\u548C\u9879\u76EE\u7684\u60C5\u51B5\u5224\u65AD\u662F\u5426\u9700\u8981\u4F7F\u7528 TypeScript\u3002</p><p>StackOverflow 2020 \u5F00\u53D1\u8005\u8C03\u67E5\u62A5\u544A\uFF0CTypeScript \u51FB\u8D25 Python</p>',7);function x(m,k){const p=c("RouterLink");return l(),a(o,null,[h,e("ul",null,[y,e("li",null,[u,s(p,{to:"/book/typescript/basics/type-inference.html"},{default:n(()=>[S]),_:1})]),_,T,f]),b],64)}var E=r(d,[["render",x]]);export{E as default};
