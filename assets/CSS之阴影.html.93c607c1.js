import{_ as s,f as n}from"./app.1179e094.js";const a={},e=n(`<h1 id="css\u4E4B\u9634\u5F71" tabindex="-1"><a class="header-anchor" href="#css\u4E4B\u9634\u5F71" aria-hidden="true">#</a> CSS\u4E4B\u9634\u5F71</h1><h2 id="box-shadow-\u5E38\u89C4\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#box-shadow-\u5E38\u89C4\u7528\u6CD5" aria-hidden="true">#</a> box-shadow \u5E38\u89C4\u7528\u6CD5</h2><p><code>box-shadow</code> \u5C5E\u6027\u5411\u6846\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u9634\u5F71\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>box-shadow: h-shadow v-shadow blur spread color inset;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u50CF\u8FD9\u6837 <code>box-shadow: 10px 10px 5px #888888;</code> \u9664\u6B64\u4E4B\u5916\uFF0C\u6211\u4EEC\u8981\u77E5\u9053\uFF0Cbox-shadow \u662F\u5206\u5916 shadow \u548C\u5185 shadow \u7684\uFF0C\u5185\u9634\u5F71\u5373\u662F\u5728\u5C5E\u6027\u4E0A\u6DFB\u52A0 inset \u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>   <span class="token property">box-shadow</span><span class="token punctuation">:</span>
            <span class="token comment">/* \u53F3\u9634\u5F71 */</span>
            10px 0 1px #eeeeee<span class="token punctuation">,</span>
            <span class="token comment">/* \u5DE6\u9634\u5F71 */</span>
            -10px 0 1px #eeeeee<span class="token punctuation">,</span>
            <span class="token comment">/* \u4E0B\u9634\u5F71 */</span>
            0px 10px 1px #eeeeee<span class="token punctuation">,</span>
            <span class="token comment">/* \u4E0A\u9634\u5F71 */</span>
            0px -10px 1px #eeeeee<span class="token punctuation">;</span>

        <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>nth-child
\u6309\u7167\u4E2A\u6570\u6765\u7B97\u3002

nth-of-type
\u6309\u7167\u7C7B\u578B\u6765\u8BA1\u7B97\uFF0C\u5982\u679C\u662Fclass\u90A3\u4E48\u78B0\u5230\u4E0D\u540C\u7C7B\u578B\u7684\uFF0C\u5355\u72EC\u4E00\u7C7B\uFF0C\u7B26\u5408\u6761\u4EF6\u7684\u9009\u4E2D\u30020
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7);function p(c,r){return e}var o=s(a,[["render",p]]);export{o as default};
