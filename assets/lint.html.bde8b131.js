const e={key:"v-6be36086",path:"/book/typescript/engineering/lint.html",title:"\u4EE3\u7801\u68C0\u67E5",lang:"zh-CN",frontmatter:{summary:"\u4EE3\u7801\u68C0\u67E5 2019 \u5E74 1 \u6708\uFF0CTypeScirpt \u5B98\u65B9\u51B3\u5B9A\u5168\u9762\u91C7\u7528 ESLint \u4F5C\u4E3A\u4EE3\u7801\u68C0\u67E5\u7684\u5DE5\u5177\uFF0C\u5E76\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u9879\u76EE typescript-eslint][]\uFF0C\u63D0\u4F9B\u4E86 TypeScript \u6587\u4EF6\u7684\u89E3\u6790\u5668 [@typescript-eslint/parser \u548C\u76F8\u5173\u7684\u914D\u7F6E\u9009\u9879 @typescript-eslint/eslint-plugin \u7B49\u3002\u800C\u4E4B\u524D",head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/vuepress2.4/book/typescript/engineering/lint.html"}],["meta",{property:"og:site_name",content:"\u9759\u5FC3"}],["meta",{property:"og:title",content:"\u4EE3\u7801\u68C0\u67E5"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}]]},excerpt:"",headers:[{level:2,title:"\u4EC0\u4E48\u662F\u4EE3\u7801\u68C0\u67E5",slug:"\u4EC0\u4E48\u662F\u4EE3\u7801\u68C0\u67E5",children:[]},{level:2,title:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7801\u68C0\u67E5",slug:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4EE3\u7801\u68C0\u67E5",children:[]},{level:2,title:"\u5728 TypeScript \u4E2D\u4F7F\u7528 ESLint",slug:"\u5728-typescript-\u4E2D\u4F7F\u7528-eslint",children:[{level:3,title:"\u5B89\u88C5 ESLint",slug:"\u5B89\u88C5-eslint",children:[]},{level:3,title:"\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6",slug:"\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u68C0\u67E5\u4E00\u4E2A ts \u6587\u4EF6",slug:"\u68C0\u67E5\u4E00\u4E2A-ts-\u6587\u4EF6",children:[]},{level:3,title:"\u68C0\u67E5\u6574\u4E2A\u9879\u76EE\u7684 ts \u6587\u4EF6",slug:"\u68C0\u67E5\u6574\u4E2A\u9879\u76EE\u7684-ts-\u6587\u4EF6",children:[]},{level:3,title:"\u5728 VSCode \u4E2D\u96C6\u6210 ESLint \u68C0\u67E5",slug:"\u5728-vscode-\u4E2D\u96C6\u6210-eslint-\u68C0\u67E5",children:[]},{level:3,title:"\u4F7F\u7528 Prettier \u4FEE\u590D\u683C\u5F0F\u9519\u8BEF",slug:"\u4F7F\u7528-prettier-\u4FEE\u590D\u683C\u5F0F\u9519\u8BEF",children:[]},{level:3,title:"\u4F7F\u7528 AlloyTeam \u7684 ESLint \u914D\u7F6E",slug:"\u4F7F\u7528-alloyteam-\u7684-eslint-\u914D\u7F6E",children:[]},{level:3,title:"\u4F7F\u7528 ESLint \u68C0\u67E5 tsx \u6587\u4EF6",slug:"\u4F7F\u7528-eslint-\u68C0\u67E5-tsx-\u6587\u4EF6",children:[]}]},{level:2,title:"Troubleshootings",slug:"troubleshootings",children:[{level:3,title:"Cannot find module '@typescript-eslint/parser'",slug:"cannot-find-module-typescript-eslint-parser",children:[]},{level:3,title:"VSCode \u6CA1\u6709\u663E\u793A\u51FA ESLint \u7684\u62A5\u9519",slug:"vscode-\u6CA1\u6709\u663E\u793A\u51FA-eslint-\u7684\u62A5\u9519",children:[]},{level:3,title:"\u4E3A\u4EC0\u4E48\u6709\u4E9B\u5B9A\u4E49\u4E86\u7684\u53D8\u91CF\uFF08\u6BD4\u5982\u4F7F\u7528 enum \u5B9A\u4E49\u7684\u53D8\u91CF\uFF09\u672A\u4F7F\u7528\uFF0CESLint \u5374\u6CA1\u6709\u62A5\u9519\uFF1F",slug:"\u4E3A\u4EC0\u4E48\u6709\u4E9B\u5B9A\u4E49\u4E86\u7684\u53D8\u91CF-\u6BD4\u5982\u4F7F\u7528-enum-\u5B9A\u4E49\u7684\u53D8\u91CF-\u672A\u4F7F\u7528-eslint-\u5374\u6CA1\u6709\u62A5\u9519",children:[]},{level:3,title:"\u542F\u7528\u4E86 noUnusedParameters \u4E4B\u540E\uFF0C\u53EA\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4F46\u662F\u53C8\u5FC5\u987B\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u5C31\u4F1A\u62A5\u9519\u4E86",slug:"\u542F\u7528\u4E86-nounusedparameters-\u4E4B\u540E-\u53EA\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570-\u4F46\u662F\u53C8\u5FC5\u987B\u4F20\u5165\u7B2C\u4E00\u4E2A\u53C2\u6570-\u8FD9\u5C31\u4F1A\u62A5\u9519\u4E86",children:[]}]}],git:{},readingTime:{minutes:10.94,words:3282},filePathRelative:"book/typescript/engineering/lint.md"};export{e as data};
