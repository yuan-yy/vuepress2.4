import{_ as a,r as t,o as i,d as r,e,g as p,F as c,b as o,f as s}from"./app.729977c1.js";var l="/vuepress2.4/assets/what-is-typescript-vscode.213bac31.png",d="/vuepress2.4/assets/what-is-typescript-vue.50ecdffe.png",u="/vuepress2.4/assets/what-is-typescript-react.f31faf69.png";const h={},y=o(`<h1 id="\u4EC0\u4E48\u662F-typescript" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-typescript" aria-hidden="true">#</a> \u4EC0\u4E48\u662F TypeScript</h1><blockquote><p>Typed JavaScript at Any Scale.<br> \u6DFB\u52A0\u4E86\u7C7B\u578B\u7CFB\u7EDF\u7684 JavaScript\uFF0C\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21\u7684\u9879\u76EE\u3002</p></blockquote><p>\u4EE5\u4E0A\u63CF\u8FF0\u662F\u5B98\u7F51<sup><a href="#link-1">[1]</a></sup>\u5BF9\u4E8E TypeScript \u7684\u5B9A\u4E49\u3002</p><p>\u5B83\u5F3A\u8C03\u4E86 TypeScript \u7684\u4E24\u4E2A\u6700\u91CD\u8981\u7684\u7279\u6027\u2014\u2014\u7C7B\u578B\u7CFB\u7EDF\u3001\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21\u3002</p><h2 id="typescript-\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#typescript-\u7684\u7279\u6027" aria-hidden="true">#</a> TypeScript \u7684\u7279\u6027</h2><h3 id="\u7C7B\u578B\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u7CFB\u7EDF" aria-hidden="true">#</a> \u7C7B\u578B\u7CFB\u7EDF</h3><p>\u4ECE TypeScript \u7684\u540D\u5B57\u5C31\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u300C\u7C7B\u578B\u300D\u662F\u5176\u6700\u6838\u5FC3\u7684\u7279\u6027\u3002</p><p>\u6211\u4EEC\u77E5\u9053\uFF0CJavaScript \u662F\u4E00\u95E8\u975E\u5E38\u7075\u6D3B\u7684\u7F16\u7A0B\u8BED\u8A00\uFF1A</p><ul><li>\u5B83\u6CA1\u6709\u7C7B\u578B\u7EA6\u675F\uFF0C\u4E00\u4E2A\u53D8\u91CF\u53EF\u80FD\u521D\u59CB\u5316\u65F6\u662F\u5B57\u7B26\u4E32\uFF0C\u8FC7\u4E00\u4F1A\u513F\u53C8\u88AB\u8D4B\u503C\u4E3A\u6570\u5B57\u3002</li><li>\u7531\u4E8E\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u7684\u5B58\u5728\uFF0C\u6709\u7684\u53D8\u91CF\u7684\u7C7B\u578B\u5F88\u96BE\u5728\u8FD0\u884C\u524D\u5C31\u786E\u5B9A\u3002</li><li>\u57FA\u4E8E\u539F\u578B\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u4F7F\u5F97\u539F\u578B\u4E0A\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u88AB\u4FEE\u6539\u3002</li><li>\u51FD\u6570\u662F JavaScript \u4E2D\u7684\u4E00\u7B49\u516C\u6C11<sup><a href="#link-2">[2]</a></sup>\uFF0C\u53EF\u4EE5\u8D4B\u503C\u7ED9\u53D8\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u4F5C\u53C2\u6570\u6216\u8FD4\u56DE\u503C\u3002</li></ul><p>\u8FD9\u79CD\u7075\u6D3B\u6027\u5C31\u50CF\u4E00\u628A\u53CC\u5203\u5251\uFF0C\u4E00\u65B9\u9762\u4F7F\u5F97 JavaScript \u84EC\u52C3\u53D1\u5C55\uFF0C\u65E0\u6240\u4E0D\u80FD\uFF0C\u4ECE 2013 \u5E74\u5F00\u59CB\u5C31\u4E00\u76F4\u8749\u8054\u6700\u666E\u904D\u4F7F\u7528\u7684\u7F16\u7A0B\u8BED\u8A00\u6392\u884C\u699C\u51A0\u519B<sup><a href="#link-3">[3]</a></sup>\uFF1B\u53E6\u4E00\u65B9\u9762\u4E5F\u4F7F\u5F97\u5B83\u7684\u4EE3\u7801\u8D28\u91CF\u53C2\u5DEE\u4E0D\u9F50\uFF0C\u7EF4\u62A4\u6210\u672C\u9AD8\uFF0C\u8FD0\u884C\u65F6\u9519\u8BEF\u591A\u3002</p><p>\u800C TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u5F25\u8865\u4E86 JavaScript \u7684\u7F3A\u70B9\u3002</p><h4 id="typescript-\u662F\u9759\u6001\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#typescript-\u662F\u9759\u6001\u7C7B\u578B" aria-hidden="true">#</a> TypeScript \u662F\u9759\u6001\u7C7B\u578B</h4><p>\u7C7B\u578B\u7CFB\u7EDF\u6309\u7167\u300C\u7C7B\u578B\u68C0\u67E5\u7684\u65F6\u673A\u300D\u6765\u5206\u7C7B\uFF0C\u53EF\u4EE5\u5206\u4E3A\u52A8\u6001\u7C7B\u578B\u548C\u9759\u6001\u7C7B\u578B\u3002</p><p>\u52A8\u6001\u7C7B\u578B\u662F\u6307\u5728\u8FD0\u884C\u65F6\u624D\u4F1A\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u8FD9\u79CD\u8BED\u8A00\u7684\u7C7B\u578B\u9519\u8BEF\u5F80\u5F80\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u3002JavaScript \u662F\u4E00\u95E8\u89E3\u91CA\u578B\u8BED\u8A00<sup><a href="#link-4">[4]</a></sup>\uFF0C\u6CA1\u6709\u7F16\u8BD1\u9636\u6BB5\uFF0C\u6240\u4EE5\u5B83\u662F\u52A8\u6001\u7C7B\u578B\uFF0C\u4EE5\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u5728\u8FD0\u884C\u65F6\u624D\u4F1A\u62A5\u9519\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: foo.split is not a function</span>
<span class="token comment">// \u8FD0\u884C\u65F6\u4F1A\u62A5\u9519\uFF08foo.split \u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\uFF09\uFF0C\u9020\u6210\u7EBF\u4E0A bug</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u9759\u6001\u7C7B\u578B\u662F\u6307\u7F16\u8BD1\u9636\u6BB5\u5C31\u80FD\u786E\u5B9A\u6BCF\u4E2A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u8FD9\u79CD\u8BED\u8A00\u7684\u7C7B\u578B\u9519\u8BEF\u5F80\u5F80\u4F1A\u5BFC\u81F4\u8BED\u6CD5\u9519\u8BEF\u3002TypeScript \u5728\u8FD0\u884C\u524D\u9700\u8981\u5148\u7F16\u8BD1\u4E3A JavaScript\uFF0C\u800C\u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5\uFF0C\u6240\u4EE5 <strong>TypeScript \u662F\u9759\u6001\u7C7B\u578B</strong>\uFF0C\u8FD9\u6BB5 TypeScript \u4EE3\u7801\u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u4F1A\u62A5\u9519\u4E86\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property &#39;split&#39; does not exist on type &#39;number&#39;.</span>
<span class="token comment">// \u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519\uFF08\u6570\u5B57\u6CA1\u6709 split \u65B9\u6CD5\uFF09\uFF0C\u65E0\u6CD5\u901A\u8FC7\u7F16\u8BD1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F60\u53EF\u80FD\u4F1A\u5947\u602A\uFF0C\u8FD9\u6BB5 TypeScript \u4EE3\u7801\u770B\u4E0A\u53BB\u548C JavaScript \u6CA1\u6709\u4EC0\u4E48\u533A\u522B\u5440\u3002</p><p>\u6CA1\u9519\uFF01\u5927\u90E8\u5206 JavaScript \u4EE3\u7801\u90FD\u53EA\u9700\u8981\u7ECF\u8FC7\u5C11\u91CF\u7684\u4FEE\u6539\uFF08\u6216\u8005\u5B8C\u5168\u4E0D\u7528\u4FEE\u6539\uFF09\u5C31\u53D8\u6210 TypeScript \u4EE3\u7801\uFF0C\u8FD9\u5F97\u76CA\u4E8E TypeScript \u5F3A\u5927\u7684[\u7C7B\u578B\u63A8\u8BBA][]\uFF0C\u5373\u4F7F\u4E0D\u53BB\u624B\u52A8\u58F0\u660E\u53D8\u91CF <code>foo</code> \u7684\u7C7B\u578B\uFF0C\u4E5F\u80FD\u5728\u53D8\u91CF\u521D\u59CB\u5316\u65F6\u81EA\u52A8\u63A8\u8BBA\u51FA\u5B83\u662F\u4E00\u4E2A <code>number</code> \u7C7B\u578B\u3002</p><p>\u5B8C\u6574\u7684 TypeScript \u4EE3\u7801\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property &#39;split&#39; does not exist on type &#39;number&#39;.</span>
<span class="token comment">// \u7F16\u8BD1\u65F6\u4F1A\u62A5\u9519\uFF08\u6570\u5B57\u6CA1\u6709 split \u65B9\u6CD5\uFF09\uFF0C\u65E0\u6CD5\u901A\u8FC7\u7F16\u8BD1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="typescript-\u662F\u5F31\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#typescript-\u662F\u5F31\u7C7B\u578B" aria-hidden="true">#</a> TypeScript \u662F\u5F31\u7C7B\u578B</h4><p>\u7C7B\u578B\u7CFB\u7EDF\u6309\u7167\u300C\u662F\u5426\u5141\u8BB8\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u300D\u6765\u5206\u7C7B\uFF0C\u53EF\u4EE5\u5206\u4E3A\u5F3A\u7C7B\u578B\u548C\u5F31\u7C7B\u578B\u3002</p><p>\u4EE5\u4E0B\u8FD9\u6BB5\u4EE3\u7801\u4E0D\u7BA1\u662F\u5728 JavaScript \u4E2D\u8FD8\u662F\u5728 TypeScript \u4E2D\u90FD\u662F\u53EF\u4EE5\u6B63\u5E38\u8FD0\u884C\u7684\uFF0C\u8FD0\u884C\u65F6\u6570\u5B57 <code>1</code> \u4F1A\u88AB\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32 <code>&#39;1&#39;</code>\uFF0C\u52A0\u53F7 <code>+</code> \u88AB\u8BC6\u522B\u4E3A\u5B57\u7B26\u4E32\u62FC\u63A5\uFF0C\u6240\u4EE5\u6253\u5370\u51FA\u7ED3\u679C\u662F\u5B57\u7B26\u4E32 <code>&#39;11&#39;</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6253\u5370\u51FA\u5B57\u7B26\u4E32 &#39;11&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>TypeScript \u662F\u5B8C\u5168\u517C\u5BB9 JavaScript \u7684\uFF0C\u5B83\u4E0D\u4F1A\u4FEE\u6539 JavaScript \u8FD0\u884C\u65F6\u7684\u7279\u6027\uFF0C\u6240\u4EE5<strong>\u5B83\u4EEC\u90FD\u662F\u5F31\u7C7B\u578B</strong>\u3002</p><p>\u4F5C\u4E3A\u5BF9\u6BD4\uFF0CPython \u662F\u5F3A\u7C7B\u578B\uFF0C\u4EE5\u4E0B\u4EE3\u7801\u4F1A\u5728\u8FD0\u884C\u65F6\u62A5\u9519\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># TypeError: unsupported operand type(s) for +: &#39;int&#39; and &#39;str&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u82E5\u8981\u4FEE\u590D\u8BE5\u9519\u8BEF\uFF0C\u9700\u8981\u8FDB\u884C\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># \u6253\u5370\u51FA\u5B57\u7B26\u4E32 &#39;11&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u5F3A/\u5F31\u662F\u76F8\u5BF9\u7684\uFF0CPython \u5728\u5904\u7406\u6574\u578B\u548C\u6D6E\u70B9\u578B\u76F8\u52A0\u65F6\uFF0C\u4F1A\u5C06\u6574\u578B\u9690\u5F0F\u8F6C\u6362\u4E3A\u6D6E\u70B9\u578B\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u5F71\u54CD Python \u662F\u5F3A\u7C7B\u578B\u7684\u7ED3\u8BBA\uFF0C\u56E0\u4E3A\u5927\u90E8\u5206\u60C5\u51B5\u4E0B Python \u5E76\u4E0D\u4F1A\u8FDB\u884C\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u3002\u76F8\u6BD4\u800C\u8A00\uFF0CJavaScript \u548C TypeScript \u4E2D\u4E0D\u7BA1\u52A0\u53F7\u4E24\u4FA7\u662F\u4EC0\u4E48\u7C7B\u578B\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u8BA1\u7B97\u51FA\u4E00\u4E2A\u7ED3\u679C\u2014\u2014\u800C\u4E0D\u662F\u62A5\u9519\u2014\u2014\u6240\u4EE5 JavaScript \u548C TypeScript \u90FD\u662F\u5F31\u7C7B\u578B\u3002</p></blockquote><blockquote><p>\u867D\u7136 TypeScript \u4E0D\u9650\u5236\u52A0\u53F7\u4E24\u4FA7\u7684\u7C7B\u578B\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 TypeScript \u63D0\u4F9B\u7684\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u4EE5\u53CA ESLint \u63D0\u4F9B\u7684\u4EE3\u7801\u68C0\u67E5\u529F\u80FD\uFF0C\u6765\u9650\u5236\u52A0\u53F7\u4E24\u4FA7\u5FC5\u987B\u540C\u4E3A\u6570\u5B57\u6216\u540C\u4E3A\u5B57\u7B26\u4E32<sup><a href="#link-5">[5]</a></sup>\u3002\u8FD9\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4F7F\u5F97 TypeScript \u5411\u300C\u5F3A\u7C7B\u578B\u300D\u66F4\u8FD1\u4E00\u6B65\u4E86\u2014\u2014\u5F53\u7136\uFF0C\u8FD9\u79CD\u9650\u5236\u662F\u53EF\u9009\u7684\u3002</p></blockquote><p>\u8FD9\u6837\u7684\u7C7B\u578B\u7CFB\u7EDF\u4F53\u73B0\u4E86 TypeScript \u7684\u6838\u5FC3\u8BBE\u8BA1\u7406\u5FF5<sup><a href="#link-6">[6]</a></sup>\uFF1A\u5728\u5B8C\u6574\u4FDD\u7559 JavaScript \u8FD0\u884C\u65F6\u884C\u4E3A\u7684\u57FA\u7840\u4E0A\uFF0C\u901A\u8FC7\u5F15\u5165\u9759\u6001\u7C7B\u578B\u7CFB\u7EDF\u6765\u63D0\u9AD8\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\uFF0C\u51CF\u5C11\u53EF\u80FD\u51FA\u73B0\u7684 bug\u3002</p><h3 id="\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21" aria-hidden="true">#</a> \u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21</h3><p>TypeScript \u975E\u5E38\u9002\u7528\u4E8E\u5927\u578B\u9879\u76EE\u2014\u2014\u8FD9\u662F\u663E\u800C\u6613\u89C1\u7684\uFF0C\u7C7B\u578B\u7CFB\u7EDF\u53EF\u4EE5\u4E3A\u5927\u578B\u9879\u76EE\u5E26\u6765\u66F4\u9AD8\u7684\u53EF\u7EF4\u62A4\u6027\uFF0C\u4EE5\u53CA\u66F4\u5C11\u7684 bug\u3002</p><p>\u5728\u4E2D\u5C0F\u578B\u9879\u76EE\u4E2D\u63A8\u884C TypeScript \u7684\u6700\u5927\u969C\u788D\u5C31\u662F\u8BA4\u4E3A\u4F7F\u7528 TypeScript \u9700\u8981\u5199\u989D\u5916\u7684\u4EE3\u7801\uFF0C\u964D\u4F4E\u5F00\u53D1\u6548\u7387\u3002\u4F46\u4E8B\u5B9E\u4E0A\uFF0C\u7531\u4E8E\u6709[\u7C7B\u578B\u63A8\u8BBA][]\uFF0C\u5927\u90E8\u5206\u7C7B\u578B\u90FD\u4E0D\u9700\u8981\u624B\u52A8\u58F0\u660E\u4E86\u3002\u76F8\u53CD\uFF0CTypeScript \u589E\u5F3A\u4E86\u7F16\u8F91\u5668\uFF08IDE\uFF09\u7684\u529F\u80FD\uFF0C\u5305\u62EC\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u3001\u4EE3\u7801\u91CD\u6784\u7B49\uFF0C\u8FD9\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\u3002\u800C\u4E14 TypeScript \u6709\u8FD1\u767E\u4E2A[\u7F16\u8BD1\u9009\u9879][]\uFF0C\u5982\u679C\u4F60\u8BA4\u4E3A\u7C7B\u578B\u68C0\u67E5\u8FC7\u4E8E\u4E25\u683C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u7F16\u8BD1\u9009\u9879\u6765\u964D\u4F4E\u7C7B\u578B\u68C0\u67E5\u7684\u6807\u51C6\u3002</p><p>TypeScript \u8FD8\u53EF\u4EE5\u548C JavaScript \u5171\u5B58\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u4F7F\u7528 JavaScript \u5F00\u53D1\u7684\u65E7\u9879\u76EE\uFF0C\u53C8\u60F3\u4F7F\u7528 TypeScript \u7684\u7279\u6027\uFF0C\u90A3\u4E48\u4F60\u4E0D\u9700\u8981\u6025\u7740\u628A\u6574\u4E2A\u9879\u76EE\u90FD\u8FC1\u79FB\u5230 TypeScript\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 TypeScript \u7F16\u5199\u65B0\u6587\u4EF6\uFF0C\u7136\u540E\u5728\u540E\u7EED\u66F4\u8FED\u4E2D\u9010\u6B65\u8FC1\u79FB\u65E7\u6587\u4EF6\u3002\u5982\u679C\u4E00\u4E9B JavaScript \u6587\u4EF6\u7684\u8FC1\u79FB\u6210\u672C\u592A\u9AD8\uFF0CTypeScript \u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6848\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u4FEE\u6539 JavaScript \u6587\u4EF6\u7684\u524D\u63D0\u4E0B\uFF0C\u7F16\u5199\u4E00\u4E2A[\u7C7B\u578B\u58F0\u660E\u6587\u4EF6][]\uFF0C\u5B9E\u73B0\u65E7\u9879\u76EE\u7684\u6E10\u8FDB\u5F0F\u8FC1\u79FB\u3002</p><p>\u4E8B\u5B9E\u4E0A\uFF0C\u5C31\u7B97\u4F60\u4ECE\u6765\u6CA1\u5B66\u4E60\u8FC7 TypeScript\uFF0C\u4F60\u4E5F\u53EF\u80FD\u5DF2\u7ECF\u5728\u4E0D\u77E5\u4E0D\u89C9\u4E2D\u4F7F\u7528\u5230\u4E86 TypeScript\u2014\u2014\u5728 VSCode \u7F16\u8F91\u5668\u4E2D\u7F16\u5199 JavaScript \u65F6\uFF0C\u4EE3\u7801\u8865\u5168\u548C\u63A5\u53E3\u63D0\u793A\u7B49\u529F\u80FD\u5C31\u662F\u901A\u8FC7 TypeScript Language Service \u5B9E\u73B0\u7684<sup><a href="#link-7">[7]</a></sup>\uFF1A</p><p><img src="`+l+'" alt="what-is-typescript-vscode" loading="lazy"></p><p>\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u539F\u751F\u652F\u6301\u4E86 TypeScript\uFF0C\u5728\u4F7F\u7528\u65F6\u5C31\u80FD\u83B7\u5F97\u4EE3\u7801\u8865\u5168\u4E86\uFF0C\u6BD4\u5982 Vue 3.0<sup><a href="#link-8">[8]</a></sup>\uFF1A</p><p><img src="'+d+'" alt="what-is-typescript-vue" loading="lazy"></p><p>\u6709\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u539F\u751F\u4E0D\u652F\u6301 TypeScript\uFF0C\u4F46\u662F\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u793E\u533A\u7EF4\u62A4\u7684\u7C7B\u578B\u58F0\u660E\u5E93<sup><a href="#link-9">[9]</a></sup>\uFF08\u6BD4\u5982\u901A\u8FC7\u8FD0\u884C <code>npm install --save-dev @types/react</code> \u6765\u5B89\u88C5 React \u7684\u7C7B\u578B\u58F0\u660E\u5E93\uFF09\u6765\u83B7\u5F97\u4EE3\u7801\u8865\u5168\u80FD\u529B\u2014\u2014\u4E0D\u7BA1\u662F\u5728 JavaScript \u9879\u76EE\u4E2D\u8FD8\u662F\u5728 TypeScript \u4E2D\u9879\u76EE\u4E2D\u90FD\u662F\u652F\u6301\u7684\uFF1A</p><p><img src="'+u+'" alt="what-is-typescript-react" loading="lazy"></p><p>\u7531\u6B64\u53EF\u89C1\uFF0CTypeScript \u7684\u53D1\u5C55\u5DF2\u7ECF\u6DF1\u5165\u5230\u524D\u7AEF\u793E\u533A\u7684\u65B9\u65B9\u9762\u9762\u4E86\uFF0C\u4EFB\u4F55\u89C4\u6A21\u7684\u9879\u76EE\u90FD\u6216\u591A\u6216\u5C11\u5F97\u5230\u4E86 TypeScript \u7684\u652F\u6301\u3002</p><h3 id="\u4E0E\u6807\u51C6\u540C\u6B65\u53D1\u5C55" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u6807\u51C6\u540C\u6B65\u53D1\u5C55" aria-hidden="true">#</a> \u4E0E\u6807\u51C6\u540C\u6B65\u53D1\u5C55</h3><p>TypeScript \u7684\u53E6\u4E00\u4E2A\u91CD\u8981\u7684\u7279\u6027\u5C31\u662F\u575A\u6301\u4E0E ECMAScript \u6807\u51C6<sup><a href="#link-10">[10]</a></sup>\u540C\u6B65\u53D1\u5C55\u3002</p><p>ECMAScript \u662F JavaScript \u6838\u5FC3\u8BED\u6CD5\u7684\u6807\u51C6\uFF0C\u81EA 2015 \u5E74\u8D77\uFF0C\u6BCF\u5E74\u90FD\u4F1A\u53D1\u5E03\u4E00\u4E2A\u65B0\u7248\u672C\uFF0C\u5305\u542B\u4E00\u4E9B\u65B0\u7684\u8BED\u6CD5\u3002</p><p>\u4E00\u4E2A\u65B0\u7684\u8BED\u6CD5\u4ECE\u63D0\u6848\u5230\u53D8\u6210\u6B63\u5F0F\u6807\u51C6\uFF0C\u9700\u8981\u7ECF\u5386\u4EE5\u4E0B\u51E0\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>Stage 0\uFF1A\u5C55\u793A\u9636\u6BB5\uFF0C\u4EC5\u4EC5\u662F\u63D0\u51FA\u4E86\u8BA8\u8BBA\u3001\u60F3\u6CD5\uFF0C\u5C1A\u672A\u6B63\u5F0F\u63D0\u6848\u3002</li><li>Stage 1\uFF1A\u5F81\u6C42\u610F\u89C1\u9636\u6BB5\uFF0C\u63D0\u4F9B\u62BD\u8C61\u7684 API \u63CF\u8FF0\uFF0C\u8BA8\u8BBA\u53EF\u884C\u6027\uFF0C\u5173\u952E\u7B97\u6CD5\u7B49\u3002</li><li>Stage 2\uFF1A\u8349\u6848\u9636\u6BB5\uFF0C\u4F7F\u7528\u6B63\u5F0F\u7684\u89C4\u8303\u8BED\u8A00\u7CBE\u786E\u63CF\u8FF0\u5176\u8BED\u6CD5\u548C\u8BED\u4E49\u3002</li><li>Stage 3\uFF1A\u5019\u9009\u4EBA\u9636\u6BB5\uFF0C\u8BED\u6CD5\u7684\u8BBE\u8BA1\u5DE5\u4F5C\u5DF2\u5B8C\u6210\uFF0C\u9700\u8981\u6D4F\u89C8\u5668\u3001Node.js \u7B49\u73AF\u5883\u652F\u6301\uFF0C\u641C\u96C6\u7528\u6237\u7684\u53CD\u9988\u3002</li><li>Stage 4\uFF1A\u5B9A\u6848\u9636\u6BB5\uFF0C\u5DF2\u51C6\u5907\u597D\u5C06\u5176\u6DFB\u52A0\u5230\u6B63\u5F0F\u7684 ECMAScript \u6807\u51C6\u4E2D\u3002</li></ul><p>\u4E00\u4E2A\u8BED\u6CD5\u8FDB\u5165\u5230 Stage 3 \u9636\u6BB5\u540E\uFF0CTypeScript \u5C31\u4F1A\u5B9E\u73B0\u5B83\u3002\u4E00\u65B9\u9762\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u5C3D\u65E9\u7684\u4F7F\u7528\u5230\u6700\u65B0\u7684\u8BED\u6CD5\uFF0C\u5E2E\u52A9\u5B83\u8FDB\u5165\u5230\u4E0B\u4E00\u4E2A\u9636\u6BB5\uFF1B\u53E6\u4E00\u65B9\u9762\uFF0C\u5904\u4E8E Stage 3 \u9636\u6BB5\u7684\u8BED\u6CD5\u5DF2\u7ECF\u6BD4\u8F83\u7A33\u5B9A\u4E86\uFF0C\u57FA\u672C\u4E0D\u4F1A\u6709\u8BED\u6CD5\u7684\u53D8\u66F4\uFF0C\u8FD9\u4F7F\u5F97\u6211\u4EEC\u80FD\u591F\u653E\u5FC3\u7684\u4F7F\u7528\u5B83\u3002</p><p>\u9664\u4E86\u5B9E\u73B0 ECMAScript \u6807\u51C6\u4E4B\u5916\uFF0CTypeScript \u56E2\u961F\u4E5F\u63A8\u8FDB\u4E86\u8BF8\u591A\u8BED\u6CD5\u63D0\u6848\uFF0C\u6BD4\u5982\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\uFF08<code>?.</code>\uFF09<sup><a href="#link-11">[11]</a></sup>\u3001\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\uFF08<code>??</code>\uFF09<sup><a href="#link-12">[12]</a></sup>\u3001Throw \u8868\u8FBE\u5F0F<sup><a href="#link-13">[13]</a></sup>\u3001\u6B63\u5219\u5339\u914D\u7D22\u5F15<sup><a href="#link-14">[14]</a></sup>\u7B49\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4EC0\u4E48\u662F TypeScript\uFF1F</p><ul><li>TypeScript \u662F\u6DFB\u52A0\u4E86\u7C7B\u578B\u7CFB\u7EDF\u7684 JavaScript\uFF0C\u9002\u7528\u4E8E\u4EFB\u4F55\u89C4\u6A21\u7684\u9879\u76EE\u3002</li><li>TypeScript \u662F\u4E00\u95E8\u9759\u6001\u7C7B\u578B\u3001\u5F31\u7C7B\u578B\u7684\u8BED\u8A00\u3002</li><li>TypeScript \u662F\u5B8C\u5168\u517C\u5BB9 JavaScript \u7684\uFF0C\u5B83\u4E0D\u4F1A\u4FEE\u6539 JavaScript \u8FD0\u884C\u65F6\u7684\u7279\u6027\u3002</li><li>TypeScript \u53EF\u4EE5\u7F16\u8BD1\u4E3A JavaScript\uFF0C\u7136\u540E\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u3001Node.js \u7B49\u4EFB\u4F55\u80FD\u8FD0\u884C JavaScript \u7684\u73AF\u5883\u4E2D\u3002</li><li>TypeScript \u62E5\u6709\u5F88\u591A\u7F16\u8BD1\u9009\u9879\uFF0C\u7C7B\u578B\u68C0\u67E5\u7684\u4E25\u683C\u7A0B\u5EA6\u7531\u4F60\u51B3\u5B9A\u3002</li><li>TypeScript \u53EF\u4EE5\u548C JavaScript \u5171\u5B58\uFF0C\u8FD9\u610F\u5473\u7740 JavaScript \u9879\u76EE\u80FD\u591F\u6E10\u8FDB\u5F0F\u7684\u8FC1\u79FB\u5230 TypeScript\u3002</li><li>TypeScript \u589E\u5F3A\u4E86\u7F16\u8F91\u5668\uFF08IDE\uFF09\u7684\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u3001\u4EE3\u7801\u91CD\u6784\u7B49\u80FD\u529B\u3002</li><li>TypeScript \u62E5\u6709\u6D3B\u8DC3\u7684\u793E\u533A\uFF0C\u5927\u591A\u6570\u5E38\u7528\u7684\u7B2C\u4E09\u65B9\u5E93\u90FD\u63D0\u4F9B\u4E86\u7C7B\u578B\u58F0\u660E\u3002</li><li>TypeScript \u4E0E\u6807\u51C6\u540C\u6B65\u53D1\u5C55\uFF0C\u7B26\u5408\u6700\u65B0\u7684 ECMAScript \u6807\u51C6\uFF08stage 3\uFF09\u3002</li></ul><h2 id="\u9644-typescript-\u7684\u53D1\u5C55\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#\u9644-typescript-\u7684\u53D1\u5C55\u5386\u53F2" aria-hidden="true">#</a> \u9644\uFF1ATypeScript \u7684\u53D1\u5C55\u5386\u53F2</h2><ul><li>2012-10\uFF1A\u5FAE\u8F6F\u53D1\u5E03\u4E86 TypeScript \u7B2C\u4E00\u4E2A\u7248\u672C\uFF080.8\uFF09\uFF0C\u6B64\u524D\u5DF2\u7ECF\u5728\u5FAE\u8F6F\u5185\u90E8\u5F00\u53D1\u4E86\u4E24\u5E74\u3002</li><li>2014-04\uFF1ATypeScript \u53D1\u5E03\u4E86 1.0 \u7248\u672C\u3002</li><li>2014-10\uFF1AAngular \u53D1\u5E03\u4E86 2.0 \u7248\u672C\uFF0C\u5B83\u662F\u4E00\u4E2A\u57FA\u4E8E TypeScript \u5F00\u53D1\u7684\u524D\u7AEF\u6846\u67B6\u3002</li><li>2015-01\uFF1Ats-loader \u53D1\u5E03\uFF0Cwebpack \u53EF\u4EE5\u7F16\u8BD1 TypeScript \u6587\u4EF6\u4E86\u3002</li><li>2015-04\uFF1A\u5FAE\u8F6F\u53D1\u5E03\u4E86 Visual Studio Code\uFF0C\u5B83\u5185\u7F6E\u4E86\u5BF9 TypeScript \u8BED\u8A00\u7684\u652F\u6301\uFF0C\u5B83\u81EA\u8EAB\u4E5F\u662F\u7528 TypeScript \u5F00\u53D1\u7684\u3002</li><li>2016-05\uFF1A<code>@types/react</code> \u53D1\u5E03\uFF0CTypeScript \u53EF\u4EE5\u5F00\u53D1 React \u5E94\u7528\u4E86\u3002</li><li>2016-05\uFF1A<code>@types/node</code> \u53D1\u5E03\uFF0CTypeScript \u53EF\u4EE5\u5F00\u53D1 Node.js \u5E94\u7528\u4E86\u3002</li><li>2016-09\uFF1ATypeScript \u53D1\u5E03\u4E86 2.0 \u7248\u672C\u3002</li><li>2018-06\uFF1ATypeScript \u53D1\u5E03\u4E86 3.0 \u7248\u672C\u3002</li><li>2019-02\uFF1ATypeScript \u5BA3\u5E03\u7531\u5B98\u65B9\u56E2\u961F\u6765\u7EF4\u62A4 typescript-eslint\uFF0C\u4EE5\u652F\u6301\u5728 TypeScript \u6587\u4EF6\u4E2D\u8FD0\u884C ESLint \u68C0\u67E5\u3002</li><li>2020-05\uFF1ADeno \u53D1\u5E03\u4E86 1.0 \u7248\u672C\uFF0C\u5B83\u662F\u4E00\u4E2A JavaScript \u548C TypeScript \u8FD0\u884C\u65F6\u3002</li><li>2020-08\uFF1ATypeScript \u53D1\u5E03\u4E86 4.0 \u7248\u672C\u3002</li><li>2020-09\uFF1AVue \u53D1\u5E03\u4E86 3.0 \u7248\u672C\uFF0C\u5B98\u65B9\u652F\u6301 TypeScript\u3002</li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',57),S={id:"link-1"},_={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},k=s("TypeScript \u5B98\u7F51"),b={id:"link-2"},g={href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch2.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u7B2C 2 \u7AE0: \u4E00\u7B49\u516C\u6C11\u7684\u51FD\u6570"),T=s(" \xB7 \u51FD\u6570\u5F0F\u7F16\u7A0B\u6307\u5317"),f={id:"link-3"},v={href:"https://insights.stackoverflow.com/survey/2020",target:"_blank",rel:"noopener noreferrer"},J=s("StackOverflow 2020 \u5F00\u53D1\u8005\u8C03\u67E5\u62A5\u544A"),x={id:"link-4"},w={href:"https://web.stanford.edu/class/cs98si/slides/overview.html",target:"_blank",rel:"noopener noreferrer"},E=s("\u65AF\u5766\u798F JavaScript \u7B2C\u4E00\u8BFE"),j={id:"link-5"},C={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md",target:"_blank",rel:"noopener noreferrer"},V=s("TypeScript ESLint \u89C4\u5219 "),A=e("code",null,"restrict-plus-operands",-1),q={id:"link-6"},D={href:"https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals",target:"_blank",rel:"noopener noreferrer"},N=s("TypeScript \u8BBE\u8BA1\u7406\u5FF5"),P={id:"link-7"},I={href:"https://code.visualstudio.com/docs/languages/typescript",target:"_blank",rel:"noopener noreferrer"},L=s("Visual Studio Code \u4E2D\u96C6\u6210\u4E86 TypeScript"),M={id:"link-8"},z={href:"https://v3.vuejs.org/guide/typescript-support.html",target:"_blank",rel:"noopener noreferrer"},B=s("Vue 3.0 \u652F\u6301 TypeScript"),F={id:"link-9"},R={href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"},G=s("Definitely Typed"),O=s("\u2014\u2014TypeScript \u56E2\u961F\u5E2E\u52A9\u7EF4\u62A4\u7684\u7C7B\u578B\u5B9A\u4E49\u4ED3\u5E93"),U={id:"link-10"},H={href:"https://tc39.es/process-document/",target:"_blank",rel:"noopener noreferrer"},K=s("ECMAScript \u6807\u51C6"),Q={id:"link-11"},W={href:"https://github.com/tc39/proposal-optional-chaining",target:"_blank",rel:"noopener noreferrer"},X=s("\u53EF\u9009\u94FE\u64CD\u4F5C\u7B26\uFF08"),Y=e("code",null,"?.",-1),Z=s("\uFF09"),$={id:"link-12"},ee={href:"https://github.com/tc39/proposal-nullish-coalescing",target:"_blank",rel:"noopener noreferrer"},se=s("\u7A7A\u503C\u5408\u5E76\u64CD\u4F5C\u7B26\uFF08"),ne=e("code",null,"??",-1),pe=s("\uFF09"),ae={id:"link-13"},te={href:"https://github.com/tc39/proposal-throw-expressions",target:"_blank",rel:"noopener noreferrer"},ie=s("Throw \u8868\u8FBE\u5F0F"),re={id:"link-14"},ce={href:"https://github.com/tc39/proposal-regexp-match-indices",target:"_blank",rel:"noopener noreferrer"},oe=s("\u6B63\u5219\u5339\u914D\u7D22\u5F15");function le(de,ue){const n=t("ExternalLinkIcon");return i(),r(c,null,[y,e("ol",null,[e("li",null,[e("span",S,[e("a",_,[k,p(n)])])]),e("li",null,[e("span",b,[e("a",g,[m,p(n)]),T])]),e("li",null,[e("span",f,[e("a",v,[J,p(n)])])]),e("li",null,[e("span",x,[e("a",w,[E,p(n)])])]),e("li",null,[e("span",j,[e("a",C,[V,A,p(n)])])]),e("li",null,[e("span",q,[e("a",D,[N,p(n)])])]),e("li",null,[e("span",P,[e("a",I,[L,p(n)])])]),e("li",null,[e("span",M,[e("a",z,[B,p(n)])])]),e("li",null,[e("span",F,[e("a",R,[G,p(n)]),O])]),e("li",null,[e("span",U,[e("a",H,[K,p(n)])])]),e("li",null,[e("span",Q,[e("a",W,[X,Y,Z,p(n)])])]),e("li",null,[e("span",$,[e("a",ee,[se,ne,pe,p(n)])])]),e("li",null,[e("span",ae,[e("a",te,[ie,p(n)])])]),e("li",null,[e("span",re,[e("a",ce,[oe,p(n)])])])])],64)}var ye=a(h,[["render",le]]);export{ye as default};
