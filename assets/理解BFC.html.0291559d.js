import{_ as n,b as s}from"./app.9bbaea34.js";const a={},p=s(`<h3 id="\u5982\u4F55\u53BB\u89E6\u53D1bfc" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u53BB\u89E6\u53D1bfc" aria-hidden="true">#</a> \u5982\u4F55\u53BB\u89E6\u53D1bfc</h3><p>1.float\u4E0D\u4E3Anone</p><p>2.position\u4E0D\u4E3Arelative\u548Cstatic</p><p>3.overflow\u4E3Aauto scroll\u548Chidden</p><p>4.display\u7684\u503C\u4E3Atable-cell\u6216inline-block</p><h3 id="\u901A\u8FC7\u89E6\u53D1bfc\u89E3\u6B21\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u89E6\u53D1bfc\u89E3\u6B21\u7684\u95EE\u9898" aria-hidden="true">#</a> \u901A\u8FC7\u89E6\u53D1bfc\u89E3\u6B21\u7684\u95EE\u9898</h3><h4 id="_1\u3001\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677" aria-hidden="true">#</a> 1\u3001\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    .box &gt; div</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkcyan<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
    <span class="token selector">.box</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token comment">/* \u5229\u7528postion\u6765\u89E6\u53D1BFC */</span>
        <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;box&quot;</span>&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="_2\u3001\u4E24\u680F\u81EA\u9002\u5E94\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E24\u680F\u81EA\u9002\u5E94\u5E03\u5C40" aria-hidden="true">#</a> 2\u3001\u4E24\u680F\u81EA\u9002\u5E94\u5E03\u5C40</h4><p>\u200B 1\u3001\u5DE6\u8FB9\u98D8\u8D77\u6765\uFF0C\u53F3\u8FB9\u4F7F\u7528\u5B9A\u4F4D \u5229\u7528margin-left</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    .left</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkblue<span class="token punctuation">;</span>
        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkkhaki<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;left&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;right&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="_2\u3001\u5DE6\u8FB9\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D-\u53F3\u8FB9\u4F7F\u7528margin-left" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5DE6\u8FB9\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D-\u53F3\u8FB9\u4F7F\u7528margin-left" aria-hidden="true">#</a> 2\u3001\u5DE6\u8FB9\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D \u53F3\u8FB9\u4F7F\u7528margin-left</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt; 
    *</span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
         <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
         <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span><span class="token punctuation">{</span>

        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>        
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkmagenta<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;left&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;right&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="_3\u3001\u5DE6\u53F3\u4E24\u8FB9\u90FD\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4Dpositon-absolute" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5DE6\u53F3\u4E24\u8FB9\u90FD\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4Dpositon-absolute" aria-hidden="true">#</a> 3\u3001\u5DE6\u53F3\u4E24\u8FB9\u90FD\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4Dpositon:absolute</h4><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    *</span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.left</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
         <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
         <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        
        <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.right</span><span class="token punctuation">{</span>

     <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
     <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
     <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
     <span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
     <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
    &lt;div class=<span class="token string">&quot;left&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;right&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt; 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>3\u3001\u5916\u8FB9\u8DDD\u5782\u76F4\u65B9\u5411\u91CD\u5408</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
    .box1,.box2</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgoldenrod<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box3</span> <span class="token punctuation">{</span>
        <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box1</span><span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;

    &lt;div class=<span class="token string">&quot;box1&quot;</span>&gt;&lt;/div&gt;
    &lt;div class=<span class="token string">&quot;box3&quot;</span>&gt;
        &lt;div class=<span class="token string">&quot;box2&quot;</span>&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,17);function t(e,l){return p}var o=n(a,[["render",t]]);export{o as default};
