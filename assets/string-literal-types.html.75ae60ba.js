import{_ as t,r as o,o as p,a as c,b as n,d as e,F as l,f as r,e as s}from"./app.1980143b.js";const i={},u=r(`<h1 id="\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B</h1><p>\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u7528\u6765\u7EA6\u675F\u53D6\u503C\u53EA\u80FD\u662F\u67D0\u51E0\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A\u3002</p><h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;scroll&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;scroll&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6CA1\u95EE\u9898</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;dblclick&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519\uFF0Cevent \u4E0D\u80FD\u4E3A &#39;dblclick&#39;</span>

<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dblclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>type</code> \u5B9A\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B <code>EventNames</code>\uFF0C\u5B83\u53EA\u80FD\u53D6\u4E09\u79CD\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u79CD\u3002</p><p>\u6CE8\u610F\uFF0C<strong>\u7C7B\u578B\u522B\u540D\u4E0E\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u90FD\u662F\u4F7F\u7528 <code>type</code> \u8FDB\u884C\u5B9A\u4E49\u3002</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,7),d={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},k=s("Advanced Types # Type Aliases"),m=s("\uFF08"),h={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},b=s("\u4E2D\u6587\u7248"),_=s("\uFF09");function g(f,E){const a=o("ExternalLinkIcon");return p(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,e(a)]),m,n("a",h,[b,e(a)]),_])])],64)}var y=t(i,[["render",g]]);export{y as default};
