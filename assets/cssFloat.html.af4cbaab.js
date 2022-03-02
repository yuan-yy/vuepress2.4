import{_ as n,g as s}from"./app.683dc535.js";const a={},p=s(`<h1 id="css-\u4E4Bfloat\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#css-\u4E4Bfloat\u6837\u5F0F" aria-hidden="true">#</a> css \u4E4Bfloat\u6837\u5F0F</h1><h3 id="_1\u3001\u7B80\u4ECB-\u4F5C\u7528\u7684\u5BF9\u8C61\u548C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u7B80\u4ECB-\u4F5C\u7528\u7684\u5BF9\u8C61\u548C\u53C2\u6570" aria-hidden="true">#</a> 1\u3001\u7B80\u4ECB\uFF08\u4F5C\u7528\u7684\u5BF9\u8C61\u548C\u53C2\u6570)</h3><p>float:html\u7684\u6807\u7B7E</p><p>\u200B div span a em \u7B49\u7B49</p><h3 id="_2\u3001float\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2\u3001float\u7684\u7528\u6CD5" aria-hidden="true">#</a> 2\u3001float\u7684\u7528\u6CD5</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    div</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgray<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span>right
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div style=<span class="token string">&quot;background-color: red; float: left;&quot;</span> &gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div style=<span class="token string">&quot;background-color: black;&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_3\u3001float\u6837\u5F0F\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_3\u3001float\u6837\u5F0F\u5E94\u7528" aria-hidden="true">#</a> 3\u3001float\u6837\u5F0F\u5E94\u7528</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;

    .top</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>1129px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.top span</span><span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.middle</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>1129px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgray<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 1129px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.content .content-left</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>70%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgreen<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
    <span class="token selector">.content .content-right</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>30%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgoldenrod<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
        &lt;div class=<span class="token string">&quot;top&quot;</span>&gt;
            &lt;span&gt;\u9996\u9875&lt;/span&gt;
            &lt;span&gt;\u95EE\u7B54&lt;/span&gt;
            &lt;span&gt;\u6811\u6D1E&lt;/span&gt;
            &lt;span&gt;\u52A8\u7269\u56ED&lt;/span&gt;
           
            &lt;span style=<span class="token string">&quot;float:right&quot;</span>&gt;\u9C7C\u5858&lt;/span&gt;
            &lt;span style=<span class="token string">&quot;float:right&quot;</span>&gt;\u8D70\u8FB9&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=<span class="token string">&quot;middle&quot;</span>&gt;&lt;/div&gt;
        &lt;div class=<span class="token string">&quot;content&quot;</span>&gt;
            &lt;div class=<span class="token string">&quot;content-left&quot;</span>&gt;&lt;/div&gt;
            &lt;div class=<span class="token string">&quot;content-right&quot;</span>&gt;&lt;/div&gt;   
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>`,8);function t(e,l){return p}var o=n(a,[["render",t]]);export{o as default};
