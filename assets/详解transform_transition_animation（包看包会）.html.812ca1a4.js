import{_ as n,f as s}from"./app.1179e094.js";const a={},p=s(`<h1 id="\u8BE6\u89E3transform-transition-animation-\u5305\u770B\u5305\u4F1A" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u89E3transform-transition-animation-\u5305\u770B\u5305\u4F1A" aria-hidden="true">#</a> \u8BE6\u89E3transform+transition+animation\uFF08\u5305\u770B\u5305\u4F1A\uFF09</h1><h2 id="_1\u3001transform-\u53D8\u5F62" tabindex="-1"><a class="header-anchor" href="#_1\u3001transform-\u53D8\u5F62" aria-hidden="true">#</a> 1\u3001transform(\u53D8\u5F62)</h2><p>\u5BF9\u5143\u7D20\u8FDB\u884C\u79FB\u52A8\u3001\u7F29\u653E\u3001\u8F6C\u52A8\u3001\u62C9\u957F\u6216\u62C9\u4F38</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>\u53C2\u6570\uFF1A<span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span> \u5411\u53F3\u79FB\u52A8\u79FB\u52A8
	 <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span>   x\u8F74\u6269\u5927\u52301.5\u500D\uFF0Cy\u8F74\u6269\u5927\u52300.5\u500D
	 <span class="token function">skew</span><span class="token punctuation">(</span>20deg<span class="token punctuation">,</span>20deg<span class="token punctuation">)</span>  \u6839\u636E\u7ED9\u5B9A\u7684\u6C34\u5E73\u7EBF\uFF08X \u8F74\uFF09\u548C\u5782\u76F4\u7EBF\uFF08Y \u8F74\uFF09\u53C2\u6570
	 skew\u51FD\u6570\u901A\u8FC7\u4F7F\u7528\u4E00\u4E2A\u6216\u4E24\u4E2A\u89D2\u5EA6\u503C\u6765\u503E\u659C\u5143\u7D20\u3002\u5982\u679C\u5B9A\u4E49\u4E86<span class="token function">skewX</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span>\uFF0C\u5143\u7D20\u7684\u9876\u90E8\u548C\u5E95\u90E8\u8FB9\u7F18\u5C06\u4FDD\u6301\u6C34\u5E73\uFF0C\u4F46\u5DE6\u53F3\u8FB9\u7F18\u5C06\u5411\u5DE6\u503E\u659C45\u5EA6\u3002\u5982\u679C\u5B9A\u4E49\u4E86<span class="token function">skewY</span><span class="token punctuation">(</span>30deg<span class="token punctuation">)</span>\uFF0C\u90A3\u4E48\u5143\u7D20\u7684\u5DE6\u3001\u53F3\u8FB9\u7F18\u5C06\u4FDD\u6301\u5782\u76F4\uFF0C\u4F46\u9876\u90E8\u548C\u5E95\u90E8\u8FB9\u7F18\u5C06\u5411\u53F3\u503E\u659C30\u5EA6\u3002
	 <span class="token property">transform-origin</span><span class="token punctuation">:</span>left top  \u89C4\u5B9A\u53D8\u5F62\u7684\u4F4D\u7F6E
	 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u56FE\u6240\u793A\uFF0C\u4E3Ascale\u5BF9\u5143\u7D20\u8FDB\u884C\u7F29\u653E</p><h2 id="_2\u3001transition-\u8FC7\u5EA6" tabindex="-1"><a class="header-anchor" href="#_2\u3001transition-\u8FC7\u5EA6" aria-hidden="true">#</a> 2\u3001transition\uFF08\u8FC7\u5EA6)</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">\u53C2\u6570\uFF1A transition-property:\u6307\u5B9ACSS\u5C5E\u6027\u7684name\uFF0Ctransition\u6548\u679C
			none     \u6CA1\u6709\u5C5E\u6027
			all      \u6240\u6709\u5C5E\u6027
			property \u5B9A\u4E49\u5E94\u7528\u8FC7\u6E21\u6548\u679C\u7684 CSS \u5C5E\u6027\u540D\u79F0\u5217\u8868\uFF0C\u5217\u8868\u4EE5\u9017\u53F7\u5206\u9694\u3002
	  transition-delay:	\u5B9A\u4E49transition\u6548\u679C\u5F00\u59CB\u7684\u65F6\u5019,\u4E5F\u5C31\u662F\u53CD\u5E94\u65F6\u95F4\u3002
      		.4s     \u4E3A0.4\u79D2
	  transition-duration: \u52A8\u753B\u7684\u6301\u7EED\u65F6\u95F4
	  		5s       \u4E3A5\u79D2
	  transition-timing-function:\u52A8\u753B\u7684\u65B9\u5F0F
	  		linear	\u89C4\u5B9A\u4EE5\u76F8\u540C\u901F\u5EA6\u5F00\u59CB\u81F3\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C
            ease	\u89C4\u5B9A\u6162\u901F\u5F00\u59CB\uFF0C\u7136\u540E\u53D8\u5FEB\uFF0C\u7136\u540E\u6162\u901F\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C\u3002
            ease-in	\u89C4\u5B9A\u4EE5\u6162\u901F\u5F00\u59CB\u7684\u8FC7\u6E21\u6548\u679C
            ease-out	\u89C4\u5B9A\u4EE5\u6162\u901F\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C
            ease-in-out	\u89C4\u5B9A\u4EE5\u6162\u901F\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u8FC7\u6E21\u6548\u679C
            cubic-bezier(n,n,n,n):\u5728 cubic-bezier \u51FD\u6570\u4E2D\u5B9A\u4E49\u81EA\u5DF1\u7684\u503C\u3002\u53EF\u80FD\u7684\u503C\u662F 0 \u81F3 1 \u4E4B\u95F4\u7684\u6570\u503C\u3002		
            
       \u7406\u89E3\u5173\u952E\u7684\u7F51\u7AD9:https://cubic-bezier.com/
       \u53EF\u4EE5\u628A\u53C2\u6570\u90FD\u5199\u5728\u4E00\u8D77\uFF1A
		transition</span><span class="token punctuation">{</span> transition-property  transition-duration  transition-timing-function  transition-delay<span class="token punctuation">}</span>\u6765\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u9644\u4E00\uFF1A\u81EA\u5DF1\u8C03\u8BD5\u4EE3\u7801\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u60F3\u8981\u7684\u60C5\u51B5\uFF0C\u5220\u9664\u6216\u589E\u52A0\u6CE8\u91CA\u3002\uFF08\u770B\u4E0D\u61C2\uFF0C\u76F4\u63A5\u53BB\u5403\u5C4E\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>   <span class="token selector">.box2</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> darkgoldenrod<span class="token punctuation">;</span>
        <span class="token comment">/* transform: skew(20deg,20deg); */</span>
        <span class="token comment">/* transition-property: width; */</span>
        <span class="token property">transition-property</span><span class="token punctuation">:</span> all<span class="token punctuation">;</span>
        <span class="token property">transition-delay</span><span class="token punctuation">:</span> .4s <span class="token punctuation">;</span>
        <span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">transition-timing-function</span><span class="token punctuation">:</span><span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.19<span class="token punctuation">,</span>-0.97<span class="token punctuation">,</span>.82<span class="token punctuation">,</span>1.86<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box2:hover</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;
&lt;body&gt;
        &lt;div class=<span class="token string">&quot;box2&quot;</span>&gt;&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_3\u3001animation-\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#_3\u3001animation-\u52A8\u753B" aria-hidden="true">#</a> 3\u3001animation\uFF08\u52A8\u753B)</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>\u53C2\u6570\uFF1A
	<span class="token property">animation-name</span><span class="token punctuation">:</span>name  \u5B9A\u4E49\u52A8\u753B\u7684\u540D\u5B57
	<span class="token property">animation-duration</span><span class="token punctuation">:</span>5s \u52A8\u753B\u6574\u4E2A\u8FC7\u7A0B\u9700\u8981\u7684\u65F6\u95F4
	<span class="token property">animation-delay</span><span class="token punctuation">:</span>.9s   \u52A8\u753B\u5F00\u59CB\u65F6\u7684\u53CD\u5E94\u65F6\u95F4
	<span class="token property">animation-direction</span><span class="token punctuation">:</span>normal \u52A8\u753B\u7684\u65B9\u5411
		normal \u9ED8\u8BA4\u503C
		alternate \u52A8\u753B\u5E94\u8BE5\u8F6E\u6D41\u53CD\u5411\u64AD\u653E
		
	<span class="token property">animation-timing-function</span><span class="token punctuation">:</span><span class="token function">cubic-bezier</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">,</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> \u52A8\u753B\u6267\u884C\u7684\u65B9\u5F0F
	<span class="token property">animation-iteration-count</span><span class="token punctuation">:</span>infinite \u65E0\u9650\u6B21\u5FAA\u73AF\u52A8\u753B \u53EF\u4EE5\u7528\u6570\u5B57\u4E0D\u80FD\u75280 \u6216\u8005\u8D1F\u6570 
	
	animation-play-stae \u89C4\u5B9A\u52A8\u753B\u662F\u5426\u6B63\u5728\u8FD0\u884C\u6216\u6682\u505C
		--running \u64AD\u653E
		--paused  \u89C4\u5B9A\u52A8\u753B\u5DF2\u6682\u505C

	

\u5B98\u65B9\u63D0\u51FA\uFF1A
\u7728\u773C\u548C\u95EA\u70C1\u7684\u52A8\u753B\u5BF9\u4E8E\u6709\u8BA4\u77E5\u95EE\u9898\u7684\u4EBA\u6765\u8BF4\u662F\u6709\u95EE\u9898\u7684\uFF0C\u6BD4\u5982\u6CE8\u610F\u529B\u7F3A\u9677\u591A\u52A8\u969C\u788D<span class="token punctuation">(</span>ADHD<span class="token punctuation">)</span>\u3002\u6B64\u5916\uFF0C\u67D0\u4E9B\u52A8\u753B\u6548\u679C\u53EF\u4EE5\u89E6\u53D1\u524D\u5EAD\u795E\u7ECF\u7D0A\u4E71\u3001\u766B\u75EB\u3001\u504F\u5934\u75DB\u548C\u6697\u70B9\u654F\u611F\u6027\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,11);function t(e,c){return p}var i=n(a,[["render",t]]);export{i as default};
