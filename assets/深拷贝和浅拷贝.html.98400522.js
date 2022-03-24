import{_ as n,f as s}from"./app.1179e094.js";const a={},p=s(`<h2 id="\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u95EE\u9898" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u548C\u6D45\u62F7\u8D1D\u95EE\u9898</h2><h4 id="_1\u3001\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> 1\u3001\u6DF1\u62F7\u8D1D</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span>stringify<span class="token punctuation">)</span><span class="token punctuation">;</span>


\u6DF1\u62F7\u8D1D\uFF1A\u5728\u5806\u4E2D\u91CD\u65B0\u5206\u914D\u5185\u5B58\uFF0C\u4E0D\u540C\u7684\u5730\u5740\uFF0C\u76F8\u540C\u7684\u503C\uFF0C\u4E92\u4E0D\u5F71\u54CD
\u53EF\u4EE5\u5B9E\u73B0\u6DF1\u62F7\u8D1D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_2\u3001\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> 2\u3001\u6D45\u62F7\u8D1D</h4><ul><li>\u6D45\u62F7\u8D1D\uFF1A\u4EC5\u4EC5\u662F\u590D\u5236\u4E86\u5F15\u7528\uFF0C\u5F7C\u6B64\u4E4B\u95F4\u7684\u64CD\u4F5C\u4F1A\u4E92\u76F8\u5F71\u54CD</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u7B2C\u4E00\u4E2A</span>
    <span class="token comment">// let a = [1, 2, 3, 4];</span>
    <span class="token comment">// let b = a.slice();</span>
    <span class="token comment">// console.log(System);</span>
    <span class="token comment">// console.log(System.identityHashCode(b));</span>
    <span class="token comment">// console.log(a === b);  false</span>
    <span class="token comment">// a[0] = 5;</span>
    <span class="token comment">// console.log(a); </span>
    <span class="token comment">// console.log(b); </span>
    <span class="token comment">//\u7B2C\u4E8C\u4E2A</span>
    <span class="token comment">// let a = [1, 2, 3, 4];</span>
    <span class="token comment">// let b = a.concat();</span>
    <span class="token comment">// console.log(a === b);  false</span>
    <span class="token comment">// a[0] = 5;</span>
    <span class="token comment">// console.log(a);</span>
    <span class="token comment">// console.log(b);</span>
    <span class="token comment">// // //\u7B2C\u4E09\u4E2A</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token boolean">false</span>
    a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="_3\u3001\u57FA\u672C\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u57FA\u672C\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 3\u3001\u57FA\u672C\u6570\u636E\u7C7B\u578B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ECMAScript\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u53EF\u5206\u4E3A\u4E24\u79CD\uFF1A

\u57FA\u672C\u7C7B\u578B\uFF1A<span class="token keyword">undefined</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>Boolean<span class="token punctuation">,</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">,</span>Symbol
\u5F15\u7528\u7C7B\u578B\uFF1AObject<span class="token punctuation">,</span>Array<span class="token punctuation">,</span>Date<span class="token punctuation">,</span>Function<span class="token punctuation">,</span>RegExp\u7B49

\u4E0D\u540C\u7C7B\u578B\u7684\u5B58\u50A8\u65B9\u5F0F\uFF1A

\u57FA\u672C\u7C7B\u578B\uFF1A\u57FA\u672C\u7C7B\u578B\u503C\u5728\u5185\u5B58\u4E2D\u5360\u636E\u56FA\u5B9A\u5927\u5C0F\uFF0C\u4FDD\u5B58\u5728\u6808\u5185\u5B58\u4E2D
\u5F15\u7528\u7C7B\u578B\uFF1A\u5F15\u7528\u7C7B\u578B\u7684\u503C\u662F\u5BF9\u8C61\uFF0C\u4FDD\u5B58\u5728\u5806\u5185\u5B58\u4E2D\uFF0C\u800C\u6808\u5185\u5B58\u5B58\u50A8\u7684\u662F\u5BF9\u8C61\u7684\u53D8\u91CF\u6807\u8BC6\u7B26\u4EE5\u53CA\u5BF9\u8C61\u5728\u5806\u5185\u5B58\u4E2D\u7684\u5B58\u50A8\u5730\u5740

\u4F5C\u8005\uFF1A\u68D5\u5C0F\u6E10
<span class="token literal-property property">\u94FE\u63A5\uFF1Ahttps</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>juejin<span class="token punctuation">.</span>cn<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">6844903608010407944</span>
\u6765\u6E90\uFF1A\u6398\u91D1
\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,8);function e(t,c){return p}var l=n(a,[["render",e]]);export{l as default};
