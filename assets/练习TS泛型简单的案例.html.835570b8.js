import{_ as n,a as s}from"./app.dfa7130b.js";const a={},r=s(`<h1 id="\u7EC3\u4E60ts\u6CDB\u578B\u7B80\u5355\u7684\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60ts\u6CDB\u578B\u7B80\u5355\u7684\u6848\u4F8B" aria-hidden="true">#</a> \u7EC3\u4E60TS\u6CDB\u578B\u7B80\u5355\u7684\u6848\u4F8B</h1><blockquote><p>\u5C0F\u5C0F\u6392\u5E8F\u52A0\u51FD\u6570\u91CD\u8F7D</p></blockquote><div class="language-TS ext-TS line-numbers-mode"><pre class="language-TS"><code>function isChinese(arr: any[]): Boolean {
    let pattern = /^(?:[\\u3400-\\u4DB5\\u4E00-\\u9FEA\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0])+$/
    return arr.some((item) =&gt; {
        return pattern.test(item)
    })
}


// \u8FD9\u91CC\u517C\u987E\u4E86\u82F1\u6587\u548C\u4E2D\u6587\u7684\u6392\u5E8F
function quiteSort&lt;T&gt;(arr: Array&lt;T&gt;): Array&lt;T&gt; {
    if (arr.length &lt; 2) { return arr }
    let left: Array&lt;any&gt; = [];
    var right: Array&lt;any&gt; = [];
    let mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
    for (var i = 0; i &lt; arr.length; i++) {
        if (arr[i] &lt; mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quiteSort(left).concat(mid, quiteSort(right))
}


// \u6392\u5E8F\u4E2D\u6587
function sortChinese&lt;T&gt;(arr: any[]): any[] {
    return arr.sort((i, o) =&gt; {
        return (i.localeCompare(o, &#39;zh-CN&#39;))
    })
}


// \u6392\u5E8F\u6570\u5B57
function sortNum(arr: number[]): number[] {
    return arr.sort((i, o) =&gt; i - o)
}

// \u51FD\u6570\u91CD\u8F7D
// function allSort(arr: string): string
function allSort&lt;T&gt;(arr: T): T
function allSort(arr: any): any {
    if (typeof arr === &#39;string&#39;) {
        return quiteSort(arr.split(&quot;&quot;)).join(&quot;&quot;)
    }

    if (arr instanceof Array) {
        if (isChinese(arr)) {
            return sortChinese(arr)
        }
        let newArr = arr.map(item =&gt; {
            return typeof item === &#39;string&#39; ? quiteSort(item.split(&quot;&quot;)).join(&quot;&quot;) : item;
        })
        return quiteSort(newArr as any);
    }

    return quiteSort(arr);

}

let chi = [&quot;\u5218\u5FB7\u534E&quot;, &quot;\u5218\u4EA6\u83F2&quot;, &quot;\u5468\u6770\u4F26&quot;, &quot;\u6210\u90FD&quot;]
let yinwen = [&quot;abadf&quot;, &quot;b&quot;, &quot;cccdd&quot;, &#39;bdadg&#39;]
let num = [1, 34, 4, 44, 5, 6, 2]
let str = &quot;asdfasdgagasgjlk&quot;
console.log(allSort(chi));
console.log(allSort(num));
console.log(allSort(str));
let newYi = allSort&lt;string[]&gt;(yinwen);
let newStr = allSort(str)
console.log(newYi);

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,3);function e(l,u){return r}var p=n(a,[["render",e]]);export{p as default};
