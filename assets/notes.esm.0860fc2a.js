var Fe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},gt=function(n){return n&&n.Math==Math&&n},w=gt(typeof globalThis=="object"&&globalThis)||gt(typeof window=="object"&&window)||gt(typeof self=="object"&&self)||gt(typeof Fe=="object"&&Fe)||function(){return this}()||Function("return this")(),ue={},C=function(n){try{return!!n()}catch{return!0}},q=!C(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Cn={},xn={}.propertyIsEnumerable,wn=Object.getOwnPropertyDescriptor,or=wn&&!xn.call({1:2},1);Cn.f=or?function(n){var e=wn(this,n);return!!e&&e.enumerable}:xn;var ie=function(n,e){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:e}},lr={}.toString,lt=function(n){return lr.call(n).slice(8,-1)},sr=lt,cr="".split,ae=C(function(){return!Object("z").propertyIsEnumerable(0)})?function(n){return sr(n)=="String"?cr.call(n,""):Object(n)}:Object,z=function(n){if(n==null)throw TypeError("Can't call method on "+n);return n},pr=ae,dr=z,st=function(n){return pr(dr(n))},O=function(n){return typeof n=="object"?n!==null:typeof n=="function"},ht=O,oe=function(n,e){if(!ht(n))return n;var t,r;if(e&&typeof(t=n.toString)=="function"&&!ht(r=t.call(n))||typeof(t=n.valueOf)=="function"&&!ht(r=t.call(n))||!e&&typeof(t=n.toString)=="function"&&!ht(r=t.call(n)))return r;throw TypeError("Can't convert object to primitive value")},fr=z,ct=function(n){return Object(fr(n))},gr=ct,hr={}.hasOwnProperty,W=function(n,e){return hr.call(gr(n),e)},Ce=O,te=w.document,Dr=Ce(te)&&Ce(te.createElement),Sn=function(n){return Dr?te.createElement(n):{}},mr=Sn,Bn=!q&&!C(function(){return Object.defineProperty(mr("div"),"a",{get:function(){return 7}}).a!=7}),vr=q,yr=Cn,kr=ie,Ar=st,Er=oe,br=W,Fr=Bn,xe=Object.getOwnPropertyDescriptor;ue.f=vr?xe:function(n,e){if(n=Ar(n),e=Er(e,!0),Fr)try{return xe(n,e)}catch{}if(br(n,e))return kr(!yr.f.call(n,e),n[e])};var j={},Cr=O,S=function(n){if(!Cr(n))throw TypeError(String(n)+" is not an object");return n},xr=q,wr=Bn,we=S,Sr=oe,Se=Object.defineProperty;j.f=xr?Se:function(n,e,t){if(we(n),e=Sr(e,!0),we(t),wr)try{return Se(n,e,t)}catch{}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(n[e]=t.value),n};var Br=j,_r=ie,pt=q?function(n,e,t){return Br.f(n,e,_r(1,t))}:function(n,e,t){return n[e]=t,n},Y={exports:{}},Be=w,Tr=pt,le=function(n,e){try{Tr(Be,n,e)}catch{Be[n]=e}return e},zr=le,se=w["__core-js_shared__"]||zr("__core-js_shared__",{}),ee=se,Ir=Function.toString;typeof ee.inspectSource!="function"&&(ee.inspectSource=function(n){return Ir.call(n)});var _n=ee.inspectSource,Rr=_n,_e=w.WeakMap,$r=typeof _e=="function"&&/native code/.test(Rr(_e)),Tt={exports:{}},Te=se;(Tt.exports=function(n,e){return Te[n]||(Te[n]=e!==void 0?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"});var Ct,tt,xt,Or=0,Pr=Math.random(),Tn=function(n){return"Symbol("+String(n===void 0?"":n)+")_"+(++Or+Pr).toString(36)},Lr=Tt.exports,jr=Tn,ze=Lr("keys"),zn=function(n){return ze[n]||(ze[n]=jr(n))},ce={},Mr=$r,Nr=O,Ur=pt,Pt=W,Lt=se,qr=zn,Zr=ce,Kr=w.WeakMap;if(Mr||Lt.state){var M=Lt.state||(Lt.state=new Kr),Jr=M.get,Ie=M.has,Hr=M.set;Ct=function(n,e){if(Ie.call(M,n))throw new TypeError("Object already initialized");return e.facade=n,Hr.call(M,n,e),e},tt=function(n){return Jr.call(M,n)||{}},xt=function(n){return Ie.call(M,n)}}else{var J=qr("state");Zr[J]=!0,Ct=function(n,e){if(Pt(n,J))throw new TypeError("Object already initialized");return e.facade=n,Ur(n,J,e),e},tt=function(n){return Pt(n,J)?n[J]:{}},xt=function(n){return Pt(n,J)}}var pe={set:Ct,get:tt,has:xt,enforce:function(n){return xt(n)?tt(n):Ct(n,{})},getterFor:function(n){return function(e){var t;if(!Nr(e)||(t=tt(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},Wr=w,Re=pt,Yr=W,Vr=le,Xr=_n,Gr=pe.get,Qr=pe.enforce,tu=String(String).split("String");(Y.exports=function(n,e,t,r){var u,i=!!r&&!!r.unsafe,l=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;typeof t=="function"&&(typeof e!="string"||Yr(t,"name")||Re(t,"name",e),(u=Qr(t)).source||(u.source=tu.join(typeof e=="string"?e:""))),n!==Wr?(i?!a&&n[e]&&(l=!0):delete n[e],l?n[e]=t:Re(n,e,t)):l?n[e]=t:Vr(e,t)})(Function.prototype,"toString",function(){return typeof this=="function"&&Gr(this).source||Xr(this)});var jt=w,Mt=w,$e=function(n){return typeof n=="function"?n:void 0},zt=function(n,e){return arguments.length<2?$e(jt[n])||$e(Mt[n]):jt[n]&&jt[n][e]||Mt[n]&&Mt[n][e]},de={},eu=Math.ceil,nu=Math.floor,dt=function(n){return isNaN(n=+n)?0:(n>0?nu:eu)(n)},ru=dt,uu=Math.min,Z=function(n){return n>0?uu(ru(n),9007199254740991):0},iu=dt,au=Math.max,ou=Math.min,fe=function(n,e){var t=iu(n);return t<0?au(t+e,0):ou(t,e)},lu=st,su=Z,cu=fe,Oe=function(n){return function(e,t,r){var u,i=lu(e),l=su(i.length),a=cu(r,l);if(n&&t!=t){for(;l>a;)if((u=i[a++])!=u)return!0}else for(;l>a;a++)if((n||a in i)&&i[a]===t)return n||a||0;return!n&&-1}},In={includes:Oe(!0),indexOf:Oe(!1)},Nt=W,pu=st,du=In.indexOf,fu=ce,Rn=function(n,e){var t,r=pu(n),u=0,i=[];for(t in r)!Nt(fu,t)&&Nt(r,t)&&i.push(t);for(;e.length>u;)Nt(r,t=e[u++])&&(~du(i,t)||i.push(t));return i},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gu=Rn,hu=ge.concat("length","prototype");de.f=Object.getOwnPropertyNames||function(n){return gu(n,hu)};var $n={};$n.f=Object.getOwnPropertySymbols;var Du=de,mu=$n,vu=S,yu=zt("Reflect","ownKeys")||function(n){var e=Du.f(vu(n)),t=mu.f;return t?e.concat(t(n)):e},ku=W,Au=yu,Eu=ue,bu=j,Fu=C,Cu=/#|\.prototype\./,ft=function(n,e){var t=wu[xu(n)];return t==Bu||t!=Su&&(typeof e=="function"?Fu(e):!!e)},xu=ft.normalize=function(n){return String(n).replace(Cu,".").toLowerCase()},wu=ft.data={},Su=ft.NATIVE="N",Bu=ft.POLYFILL="P",On=ft,Ut=w,_u=ue.f,Tu=pt,zu=Y.exports,Iu=le,Ru=function(n,e){for(var t=Au(e),r=bu.f,u=Eu.f,i=0;i<t.length;i++){var l=t[i];ku(n,l)||r(n,l,u(e,l))}},$u=On,I=function(n,e){var t,r,u,i,l,a=n.target,o=n.global,c=n.stat;if(t=o?Ut:c?Ut[a]||Iu(a,{}):(Ut[a]||{}).prototype)for(r in e){if(i=e[r],u=n.noTargetGet?(l=_u(t,r))&&l.value:t[r],!$u(o?r:a+(c?".":"#")+r,n.forced)&&u!==void 0){if(typeof i==typeof u)continue;Ru(i,u)}(n.sham||u&&u.sham)&&Tu(i,"sham",!0),zu(t,r,i,n)}},Ou=S,he=function(){var n=Ou(this),e="";return n.global&&(e+="g"),n.ignoreCase&&(e+="i"),n.multiline&&(e+="m"),n.dotAll&&(e+="s"),n.unicode&&(e+="u"),n.sticky&&(e+="y"),e},it={},Pe=C;function Le(n,e){return RegExp(n,e)}it.UNSUPPORTED_Y=Pe(function(){var n=Le("a","y");return n.lastIndex=2,n.exec("abcd")!=null}),it.BROKEN_CARET=Pe(function(){var n=Le("^r","gy");return n.lastIndex=2,n.exec("str")!=null});var Pu=he,je=it,Lu=Tt.exports,wt=RegExp.prototype.exec,ju=Lu("native-string-replace",String.prototype.replace),Pn=wt,qt=function(){var n=/a/,e=/b*/g;return wt.call(n,"a"),wt.call(e,"a"),n.lastIndex!==0||e.lastIndex!==0}(),Me=je.UNSUPPORTED_Y||je.BROKEN_CARET,Zt=/()??/.exec("")[1]!==void 0;(qt||Zt||Me)&&(Pn=function(n){var e,t,r,u,i=this,l=Me&&i.sticky,a=Pu.call(i),o=i.source,c=0,s=n;return l&&((a=a.replace("y","")).indexOf("g")===-1&&(a+="g"),s=String(n).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&n[i.lastIndex-1]!==`
`)&&(o="(?: "+o+")",s=" "+s,c++),t=new RegExp("^(?:"+o+")",a)),Zt&&(t=new RegExp("^"+o+"$(?!\\s)",a)),qt&&(e=i.lastIndex),r=wt.call(l?t:i,s),l?r?(r.input=r.input.slice(c),r[0]=r[0].slice(c),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:qt&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Zt&&r&&r.length>1&&ju.call(r[0],t,function(){for(u=1;u<arguments.length-2;u++)arguments[u]===void 0&&(r[u]=void 0)}),r});var at=Pn;I({target:"RegExp",proto:!0,forced:/./.exec!==at},{exec:at});var N,St,Kt=zt("navigator","userAgent")||"",Ne=w.process,Ue=Ne&&Ne.versions,qe=Ue&&Ue.v8;qe?St=(N=qe.split("."))[0]<4?1:N[0]+N[1]:Kt&&(!(N=Kt.match(/Edge\/(\d+)/))||N[1]>=74)&&(N=Kt.match(/Chrome\/(\d+)/))&&(St=N[1]);var Ln=St&&+St,Ze=Ln,Mu=C,jn=!!Object.getOwnPropertySymbols&&!Mu(function(){return!String(Symbol())||!Symbol.sham&&Ze&&Ze<41}),Nu=jn&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Uu=w,qu=Tt.exports,Ke=W,Zu=Tn,Je=jn,Ku=Nu,G=qu("wks"),et=Uu.Symbol,Ju=Ku?et:et&&et.withoutSetter||Zu,B=function(n){return Ke(G,n)&&(Je||typeof G[n]=="string")||(Je&&Ke(et,n)?G[n]=et[n]:G[n]=Ju("Symbol."+n)),G[n]},He=Y.exports,Hu=at,Bt=C,De=B,Wu=pt,Yu=De("species"),Jt=RegExp.prototype,Vu=!Bt(function(){var n=/./;return n.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(n,"$<a>")!=="7"}),We="a".replace(/./,"$0")==="$0",Ye=De("replace"),Ve=!!/./[Ye]&&/./[Ye]("a","$0")==="",Xu=!Bt(function(){var n=/(?:)/,e=n.exec;n.exec=function(){return e.apply(this,arguments)};var t="ab".split(n);return t.length!==2||t[0]!=="a"||t[1]!=="b"}),It=function(n,e,t,r){var u=De(n),i=!Bt(function(){var p={};return p[u]=function(){return 7},""[n](p)!=7}),l=i&&!Bt(function(){var p=!1,f=/a/;return n==="split"&&((f={}).constructor={},f.constructor[Yu]=function(){return f},f.flags="",f[u]=/./[u]),f.exec=function(){return p=!0,null},f[u](""),!p});if(!i||!l||n==="replace"&&(!Vu||!We||Ve)||n==="split"&&!Xu){var a=/./[u],o=t(u,""[n],function(p,f,D,k,y){var g=f.exec;return g===Hu||g===Jt.exec?i&&!y?{done:!0,value:a.call(f,D,k)}:{done:!0,value:p.call(D,f,k)}:{done:!1}},{REPLACE_KEEPS_$0:We,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ve}),c=o[0],s=o[1];He(String.prototype,n,c),He(Jt,u,e==2?function(p,f){return s.call(p,this,f)}:function(p){return s.call(p,this)})}r&&Wu(Jt[u],"sham",!0)},Gu=Object.is||function(n,e){return n===e?n!==0||1/n==1/e:n!=n&&e!=e},Qu=lt,ti=at,Rt=function(n,e){var t=n.exec;if(typeof t=="function"){var r=t.call(n,e);if(typeof r!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return r}if(Qu(n)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return ti.call(n,e)},ei=S,ni=z,Xe=Gu,ri=Rt;It("search",1,function(n,e,t){return[function(r){var u=ni(this),i=r==null?void 0:r[n];return i!==void 0?i.call(r,u):new RegExp(r)[n](String(u))},function(r){var u=t(e,r,this);if(u.done)return u.value;var i=ei(r),l=String(this),a=i.lastIndex;Xe(a,0)||(i.lastIndex=0);var o=ri(i,l);return Xe(i.lastIndex,a)||(i.lastIndex=a),o===null?-1:o.index}]});var ui=dt,ii=z,Ge=function(n){return function(e,t){var r,u,i=String(ii(e)),l=ui(t),a=i.length;return l<0||l>=a?n?"":void 0:(r=i.charCodeAt(l))<55296||r>56319||l+1===a||(u=i.charCodeAt(l+1))<56320||u>57343?n?i.charAt(l):r:n?i.slice(l,l+2):u-56320+(r-55296<<10)+65536}},ai={codeAt:Ge(!1),charAt:Ge(!0)}.charAt,me=function(n,e,t){return e+(t?ai(n,e).length:1)},oi=S,li=Z,si=z,ci=me,Qe=Rt;function V(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function tn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function X(n,e,t){return e&&tn(n.prototype,e),t&&tn(n,t),n}function pi(n,e){return function(t){if(Array.isArray(t))return t}(n)||function(t,r){var u=t&&(typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"]);if(u!=null){var i,l,a=[],o=!0,c=!1;try{for(u=u.call(t);!(o=(i=u.next()).done)&&(a.push(i.value),!r||a.length!==r);o=!0);}catch(s){c=!0,l=s}finally{try{o||u.return==null||u.return()}finally{if(c)throw l}}return a}}(n,e)||Mn(n,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Mn(n,e){if(n){if(typeof n=="string")return en(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?en(n,e):void 0}}function en(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Dt(n,e){var t=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Mn(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,u=function(){};return{s:u,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(o){throw o},f:u}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,l=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var o=t.next();return l=o.done,o},e:function(o){a=!0,i=o},f:function(){try{l||t.return==null||t.return()}finally{if(a)throw i}}}}It("match",1,function(n,e,t){return[function(r){var u=si(this),i=r==null?void 0:r[n];return i!==void 0?i.call(r,u):new RegExp(r)[n](String(u))},function(r){var u=t(e,r,this);if(u.done)return u.value;var i=oi(r),l=String(this);if(!i.global)return Qe(i,l);var a=i.unicode;i.lastIndex=0;for(var o,c=[],s=0;(o=Qe(i,l))!==null;){var p=String(o[0]);c[s]=p,p===""&&(i.lastIndex=ci(l,li(i.lastIndex),a)),s++}return s===0?null:c}]});var Nn={};Nn[B("toStringTag")]="z";var ve=String(Nn)==="[object z]",di=ve,Et=lt,fi=B("toStringTag"),gi=Et(function(){return arguments}())=="Arguments",hi=di?Et:function(n){var e,t,r;return n===void 0?"Undefined":n===null?"Null":typeof(t=function(u,i){try{return u[i]}catch{}}(e=Object(n),fi))=="string"?t:gi?Et(e):(r=Et(e))=="Object"&&typeof e.callee=="function"?"Arguments":r},Di=ve?{}.toString:function(){return"[object "+hi(this)+"]"},mi=ve,vi=Y.exports,yi=Di;mi||vi(Object.prototype,"toString",yi,{unsafe:!0});var ki=ct,Ai=Math.floor,Ei="".replace,bi=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Fi=/\$([$&'`]|\d{1,2})/g,Ci=It,xi=S,wi=Z,Si=dt,Bi=z,_i=me,Ti=function(n,e,t,r,u,i){var l=t+n.length,a=r.length,o=Fi;return u!==void 0&&(u=ki(u),o=bi),Ei.call(i,o,function(c,s){var p;switch(s.charAt(0)){case"$":return"$";case"&":return n;case"`":return e.slice(0,t);case"'":return e.slice(l);case"<":p=u[s.slice(1,-1)];break;default:var f=+s;if(f===0)return c;if(f>a){var D=Ai(f/10);return D===0?c:D<=a?r[D-1]===void 0?s.charAt(1):r[D-1]+s.charAt(1):c}p=r[f-1]}return p===void 0?"":p})},zi=Rt,Ii=Math.max,Ri=Math.min;Ci("replace",2,function(n,e,t,r){var u=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,l=u?"$":"$0";return[function(a,o){var c=Bi(this),s=a==null?void 0:a[n];return s!==void 0?s.call(a,c,o):e.call(String(c),a,o)},function(a,o){if(!u&&i||typeof o=="string"&&o.indexOf(l)===-1){var c=t(e,a,this,o);if(c.done)return c.value}var s=xi(a),p=String(this),f=typeof o=="function";f||(o=String(o));var D=s.global;if(D){var k=s.unicode;s.lastIndex=0}for(var y=[];;){var g=zi(s,p);if(g===null||(y.push(g),!D))break;String(g[0])===""&&(s.lastIndex=_i(p,wi(s.lastIndex),k))}for(var b,E="",m=0,_=0;_<y.length;_++){g=y[_];for(var F=String(g[0]),P=Ii(Ri(Si(g.index),p.length),0),K=[],$t=1;$t<g.length;$t++)K.push((b=g[$t])===void 0?b:String(b));var Ot=g.groups;if(f){var Ee=[F].concat(K,P,p);Ot!==void 0&&Ee.push(Ot);var be=String(o.apply(void 0,Ee))}else be=Ti(F,p,P,K,Ot,o);P>=m&&(E+=p.slice(m,P)+be,m=P+F.length)}return E+p.slice(m)}]});var $i=Y.exports,Oi=S,Pi=C,Li=he,Un=RegExp.prototype,qn=Un.toString,ji=Pi(function(){return qn.call({source:"a",flags:"b"})!="/a/b"}),Mi=qn.name!="toString";(ji||Mi)&&$i(RegExp.prototype,"toString",function(){var n=Oi(this),e=String(n.source),t=n.flags;return"/"+e+"/"+String(t===void 0&&n instanceof RegExp&&!("flags"in Un)?Li.call(n):t)},{unsafe:!0});var Ni=Rn,Ui=ge,Zn=Object.keys||function(n){return Ni(n,Ui)},qi=ct,nn=Zn;I({target:"Object",stat:!0,forced:C(function(){nn(1)})},{keys:function(n){return nn(qi(n))}});var Ht,Zi=j,Ki=S,Ji=Zn,Hi=q?Object.defineProperties:function(n,e){Ki(n);for(var t,r=Ji(e),u=r.length,i=0;u>i;)Zi.f(n,t=r[i++],e[t]);return n},Wi=zt("document","documentElement"),Yi=S,Vi=Hi,rn=ge,Xi=ce,Gi=Wi,Qi=Sn,Kn=zn("IE_PROTO"),Wt=function(){},un=function(n){return"<script>"+n+"<\/script>"},bt=function(){try{Ht=document.domain&&new ActiveXObject("htmlfile")}catch{}var n,e;bt=Ht?function(r){r.write(un("")),r.close();var u=r.parentWindow.Object;return r=null,u}(Ht):((e=Qi("iframe")).style.display="none",Gi.appendChild(e),e.src=String("javascript:"),(n=e.contentWindow.document).open(),n.write(un("document.F=Object")),n.close(),n.F);for(var t=rn.length;t--;)delete bt.prototype[rn[t]];return bt()};Xi[Kn]=!0;var ta=Object.create||function(n,e){var t;return n!==null?(Wt.prototype=Yi(n),t=new Wt,Wt.prototype=null,t[Kn]=n):t=bt(),e===void 0?t:Vi(t,e)},ea=j,ne=B("unscopables"),re=Array.prototype;re[ne]==null&&ea.f(re,ne,{configurable:!0,value:ta(null)});var na=In.includes,ra=function(n){re[ne][n]=!0};I({target:"Array",proto:!0},{includes:function(n){return na(this,n,arguments.length>1?arguments[1]:void 0)}}),ra("includes");var ua=O,ia=lt,aa=B("match"),ye=function(n){var e;return ua(n)&&((e=n[aa])!==void 0?!!e:ia(n)=="RegExp")},oa=ye,la=B("match"),sa=function(n){if(oa(n))throw TypeError("The method doesn't accept regular expressions");return n},ca=z;I({target:"String",proto:!0,forced:!function(n){var e=/./;try{"/./"[n](e)}catch{try{return e[la]=!1,"/./"[n](e)}catch{}}return!1}("includes")},{includes:function(n){return!!~String(ca(this)).indexOf(sa(n),arguments.length>1?arguments[1]:void 0)}});var pa=lt,Jn=Array.isArray||function(n){return pa(n)=="Array"},da=oe,fa=j,ga=ie,Hn=function(n,e,t){var r=da(e);r in n?fa.f(n,r,ga(0,t)):n[r]=t},ha=C,Da=Ln,ma=B("species"),ke=function(n){return Da>=51||!ha(function(){var e=[];return(e.constructor={})[ma]=function(){return{foo:1}},e[n](Boolean).foo!==1})},va=I,ya=O,an=Jn,on=fe,ka=Z,Aa=st,Ea=Hn,ba=B,Fa=ke("slice"),Ca=ba("species"),xa=[].slice,wa=Math.max;va({target:"Array",proto:!0,forced:!Fa},{slice:function(n,e){var t,r,u,i=Aa(this),l=ka(i.length),a=on(n,l),o=on(e===void 0?l:e,l);if(an(i)&&(typeof(t=i.constructor)!="function"||t!==Array&&!an(t.prototype)?ya(t)&&(t=t[Ca])===null&&(t=void 0):t=void 0,t===Array||t===void 0))return xa.call(i,a,o);for(r=new(t===void 0?Array:t)(wa(o-a,0)),u=0;a<o;a++,u++)a in i&&Ea(r,u,i[a]);return r.length=u,r}});var Sa=z,Ba=/"/g,_a=C,Ta=function(n,e,t,r){var u=String(Sa(n)),i="<"+e;return t!==""&&(i+=" "+t+'="'+String(r).replace(Ba,"&quot;")+'"'),i+">"+u+"</"+e+">"};I({target:"String",proto:!0,forced:function(n){return _a(function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})}("link")},{link:function(n){return Ta(this,"a","href",n)}});var za=C,Ia=I,Ra=st,$a=[].join,Oa=ae!=Object,Pa=function(n,e){var t=[][n];return!!t&&za(function(){t.call(null,e||function(){throw 1},1)})}("join",",");Ia({target:"Array",proto:!0,forced:Oa||!Pa},{join:function(n){return $a.call(Ra(this),n===void 0?",":n)}});var Wn=function(n){if(typeof n!="function")throw TypeError(String(n)+" is not a function");return n},La=Wn,ja=O,ln=Jn,Ma=B("species"),Yn=function(n,e){var t;return ln(n)&&(typeof(t=n.constructor)!="function"||t!==Array&&!ln(t.prototype)?ja(t)&&(t=t[Ma])===null&&(t=void 0):t=void 0),new(t===void 0?Array:t)(e===0?0:e)},Na=function(n,e,t){if(La(n),e===void 0)return n;switch(t){case 0:return function(){return n.call(e)};case 1:return function(r){return n.call(e,r)};case 2:return function(r,u){return n.call(e,r,u)};case 3:return function(r,u,i){return n.call(e,r,u,i)}}return function(){return n.apply(e,arguments)}},Ua=ae,qa=ct,Za=Z,Ka=Yn,sn=[].push,L=function(n){var e=n==1,t=n==2,r=n==3,u=n==4,i=n==6,l=n==7,a=n==5||i;return function(o,c,s,p){for(var f,D,k=qa(o),y=Ua(k),g=Na(c,s,3),b=Za(y.length),E=0,m=p||Ka,_=e?m(o,b):t||l?m(o,0):void 0;b>E;E++)if((a||E in y)&&(D=g(f=y[E],E,k),n))if(e)_[E]=D;else if(D)switch(n){case 3:return!0;case 5:return f;case 6:return E;case 2:sn.call(_,f)}else switch(n){case 4:return!1;case 7:sn.call(_,f)}return i?-1:r||u?u:_}},Ja={forEach:L(0),map:L(1),filter:L(2),some:L(3),every:L(4),find:L(5),findIndex:L(6),filterOut:L(7)}.map;I({target:"Array",proto:!0,forced:!ke("map")},{map:function(n){return Ja(this,n,arguments.length>1?arguments[1]:void 0)}});var cn=S,Ha=Wn,Wa=B("species"),Ya=It,Va=ye,Xa=S,pn=z,Ga=function(n,e){var t,r=cn(n).constructor;return r===void 0||(t=cn(r)[Wa])==null?e:Ha(t)},Qa=me,to=Z,dn=Rt,eo=at,H=it.UNSUPPORTED_Y,no=[].push,ro=Math.min;Ya("split",2,function(n,e,t){var r;return r="abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?function(u,i){var l=String(pn(this)),a=i===void 0?4294967295:i>>>0;if(a===0)return[];if(u===void 0)return[l];if(!Va(u))return e.call(l,u,a);for(var o,c,s,p=[],f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(u.sticky?"y":""),D=0,k=new RegExp(u.source,f+"g");(o=eo.call(k,l))&&!((c=k.lastIndex)>D&&(p.push(l.slice(D,o.index)),o.length>1&&o.index<l.length&&no.apply(p,o.slice(1)),s=o[0].length,D=c,p.length>=a));)k.lastIndex===o.index&&k.lastIndex++;return D===l.length?!s&&k.test("")||p.push(""):p.push(l.slice(D)),p.length>a?p.slice(0,a):p}:"0".split(void 0,0).length?function(u,i){return u===void 0&&i===0?[]:e.call(this,u,i)}:e,[function(u,i){var l=pn(this),a=u==null?void 0:u[n];return a!==void 0?a.call(u,l,i):r.call(String(l),u,i)},function(u,i){var l=t(r,u,this,i,r!==e);if(l.done)return l.value;var a=Xa(u),o=String(this),c=Ga(a,RegExp),s=a.unicode,p=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(H?"g":"y"),f=new c(H?"^(?:"+a.source+")":a,p),D=i===void 0?4294967295:i>>>0;if(D===0)return[];if(o.length===0)return dn(f,o)===null?[o]:[];for(var k=0,y=0,g=[];y<o.length;){f.lastIndex=H?0:y;var b,E=dn(f,H?o.slice(y):o);if(E===null||(b=ro(to(f.lastIndex+(H?y:0)),o.length))===k)y=Qa(o,y,s);else{if(g.push(o.slice(k,y)),g.length===D)return g;for(var m=1;m<=E.length-1;m++)if(g.push(E[m]),g.length===D)return g;y=k=b}}return g.push(o.slice(k)),g}]},H);var uo=z,_t=`[	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]`,io=RegExp("^"+_t+_t+"*"),ao=RegExp(_t+_t+"*$"),Yt=function(n){return function(e){var t=String(uo(e));return 1&n&&(t=t.replace(io,"")),2&n&&(t=t.replace(ao,"")),t}},oo={start:Yt(1),end:Yt(2),trim:Yt(3)},lo=C,fn=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,so=oo.trim;I({target:"String",proto:!0,forced:function(n){return lo(function(){return!!fn[n]()||"\u200B\x85\u180E"[n]()!="\u200B\x85\u180E"||fn[n].name!==n})}("trim")},{trim:function(){return so(this)}});var co=O,po=S,fo=function(n){if(!co(n)&&n!==null)throw TypeError("Can't set "+String(n)+" as a prototype");return n},go=Object.setPrototypeOf||("__proto__"in{}?function(){var n,e=!1,t={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),e=t instanceof Array}catch{}return function(r,u){return po(r),fo(u),e?n.call(r,u):r.__proto__=u,r}}():void 0),ho=O,gn=go,Do=zt,mo=j,vo=q,hn=B("species"),yo=q,Vn=w,ko=On,Ao=function(n,e,t){var r,u;return gn&&typeof(r=e.constructor)=="function"&&r!==t&&ho(u=r.prototype)&&u!==t.prototype&&gn(n,u),n},Eo=j.f,bo=de.f,Fo=ye,Co=he,xo=it,wo=Y.exports,So=C,Bo=pe.enforce,_o=function(n){var e=Do(n),t=mo.f;vo&&e&&!e[hn]&&t(e,hn,{configurable:!0,get:function(){return this}})},To=B("match"),T=Vn.RegExp,Vt=T.prototype,nt=/a/g,Xt=/a/g,Gt=new T(nt)!==nt,Qt=xo.UNSUPPORTED_Y;if(yo&&ko("RegExp",!Gt||Qt||So(function(){return Xt[To]=!1,T(nt)!=nt||T(Xt)==Xt||T(nt,"i")!="/a/i"}))){for(var R=function(n,e){var t,r=this instanceof R,u=Fo(n),i=e===void 0;if(!r&&u&&n.constructor===R&&i)return n;Gt?u&&!i&&(n=n.source):n instanceof R&&(i&&(e=Co.call(n)),n=n.source),Qt&&(t=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var l=Ao(Gt?new T(n,e):T(n,e),r?this:Vt,R);return Qt&&t&&(Bo(l).sticky=!0),l},zo=function(n){n in R||Eo(R,n,{configurable:!0,get:function(){return T[n]},set:function(e){T[n]=e}})},Dn=bo(T),mn=0;Dn.length>mn;)zo(Dn[mn++]);Vt.constructor=R,R.prototype=Vt,wo(Vn,"RegExp",R)}_o("RegExp");var Io=I,Ro=fe,$o=dt,Oo=Z,Po=ct,Lo=Yn,jo=Hn,Mo=ke("splice"),No=Math.max,Uo=Math.min;Io({target:"Array",proto:!0,forced:!Mo},{splice:function(n,e){var t,r,u,i,l,a,o=Po(this),c=Oo(o.length),s=Ro(n,c),p=arguments.length;if(p===0?t=r=0:p===1?(t=0,r=c-s):(t=p-2,r=Uo(No($o(e),0),c-s)),c+t-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=Lo(o,r),i=0;i<r;i++)(l=s+i)in o&&jo(u,i,o[l]);if(u.length=r,t<r){for(i=s;i<c-r;i++)a=i+t,(l=i+r)in o?o[a]=o[l]:delete o[a];for(i=c;i>c-r+t;i--)delete o[i-1]}else if(t>r)for(i=c-r;i>s;i--)a=i+t-1,(l=i+r-1)in o?o[a]=o[l]:delete o[a];for(i=0;i<t;i++)o[i+s]=arguments[i+2];return o.length=c-r+t,u}});var $={exports:{}};function qo(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}$.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:qo,changeDefaults:function(n){$.exports.defaults=n}};var Zo=/[&<>"']/,Ko=/[&<>"']/g,Jo=/[<>"']|&(?!#?\w+;)/,Ho=/[<>"']|&(?!#?\w+;)/g,Wo={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vn=function(n){return Wo[n]},Yo=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Xn(n){return n.replace(Yo,function(e,t){return(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var Vo=/(^|[^\[])\^/g,Xo=/[^\w:]/g,Go=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,mt={},Qo=/^[^:]+:\/*[^/]*$/,tl=/^([^:]+:)[\s\S]*$/,el=/^([^:]+:\/*[^/]*)[\s\S]*$/;function nl(n,e){mt[" "+n]||(Qo.test(n)?mt[" "+n]=n+"/":mt[" "+n]=Gn(n,"/",!0));var t=(n=mt[" "+n]).indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(tl,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(el,"$1")+e:n+e}function Gn(n,e,t){var r=n.length;if(r===0)return"";for(var u=0;u<r;){var i=n.charAt(r-u-1);if(i!==e||t){if(i===e||!t)break;u++}else u++}return n.substr(0,r-u)}var Ae=function(n,e){if(e){if(Zo.test(n))return n.replace(Ko,vn)}else if(Jo.test(n))return n.replace(Ho,vn);return n},rl=Xn,ul=function(n,e){n=n.source||n,e=e||"";var t={replace:function(r,u){return u=(u=u.source||u).replace(Vo,"$1"),n=n.replace(r,u),t},getRegex:function(){return new RegExp(n,e)}};return t},il=function(n,e,t){if(n){var r;try{r=decodeURIComponent(Xn(t)).replace(Xo,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}e&&!Go.test(t)&&(t=nl(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t},al={exec:function(){}},Qn=function(n){for(var e,t,r=1;r<arguments.length;r++)for(t in e=arguments[r])Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},ol=function(n,e){var t=n.replace(/\|/g,function(u,i,l){for(var a=!1,o=i;--o>=0&&l[o]==="\\";)a=!a;return a?"|":" |"}).split(/ \|/),r=0;if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(/\\\|/g,"|");return t},ll=Gn,sl=function(n,e){if(n.indexOf(e[1])===-1)return-1;for(var t=n.length,r=0,u=0;u<t;u++)if(n[u]==="\\")u++;else if(n[u]===e[0])r++;else if(n[u]===e[1]&&--r<0)return u;return-1},cl=function(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},pl=function(n,e){if(e<1)return"";for(var t="";e>1;)1&e&&(t+=n),e>>=1,n+=n;return t+n},dl=$.exports.defaults,vt=ll,yt=ol,x=Ae,fl=sl;function yn(n,e,t){var r=e.href,u=e.title?x(e.title):null,i=n[1].replace(/\\([\[\]])/g,"$1");return n[0].charAt(0)!=="!"?{type:"link",raw:t,href:r,title:u,text:i}:{type:"image",raw:t,href:r,title:u,text:x(i)}}var tr=function(){function n(e){V(this,n),this.options=e||dl}return X(n,[{key:"space",value:function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:`
`}}},{key:"code",value:function(e){var t=this.rules.block.code.exec(e);if(t){var r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:vt(r,`
`)}}}},{key:"fences",value:function(e){var t=this.rules.block.fences.exec(e);if(t){var r=t[0],u=function(i,l){var a=i.match(/^(\s+)(?:```)/);if(a===null)return l;var o=a[1];return l.split(`
`).map(function(c){var s=c.match(/^\s+/);return s===null?c:pi(s,1)[0].length>=o.length?c.slice(o.length):c}).join(`
`)}(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim():t[2],text:u}}}},{key:"heading",value:function(e){var t=this.rules.block.heading.exec(e);if(t){var r=t[2].trim();if(/#$/.test(r)){var u=vt(r,"#");this.options.pedantic?r=u.trim():u&&!/ $/.test(u)||(r=u.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r}}}},{key:"nptable",value:function(e){var t=this.rules.block.nptable.exec(e);if(t){var r={type:"table",header:yt(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[],raw:t[0]};if(r.header.length===r.align.length){var u,i=r.align.length;for(u=0;u<i;u++)/^ *-+: *$/.test(r.align[u])?r.align[u]="right":/^ *:-+: *$/.test(r.align[u])?r.align[u]="center":/^ *:-+ *$/.test(r.align[u])?r.align[u]="left":r.align[u]=null;for(i=r.cells.length,u=0;u<i;u++)r.cells[u]=yt(r.cells[u],r.header.length);return r}}}},{key:"hr",value:function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}},{key:"blockquote",value:function(e){var t=this.rules.block.blockquote.exec(e);if(t){var r=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:r}}}},{key:"list",value:function(e){var t=this.rules.block.list.exec(e);if(t){var r,u,i,l,a,o,c,s,p,f=t[0],D=t[2],k=D.length>1,y={type:"list",raw:f,ordered:k,start:k?+D.slice(0,-1):"",loose:!1,items:[]},g=t[0].match(this.rules.block.item),b=!1,E=g.length;i=this.rules.block.listItemStart.exec(g[0]);for(var m=0;m<E;m++){if(f=r=g[m],this.options.pedantic||(p=r.match(new RegExp("\\n\\s*\\n {0,"+(i[0].length-1)+"}\\S")))&&(a=r.length-p.index+g.slice(m+1).join(`
`).length,y.raw=y.raw.substring(0,y.raw.length-a),f=r=r.substring(0,p.index),E=m+1),m!==E-1){if(l=this.rules.block.listItemStart.exec(g[m+1]),this.options.pedantic?l[1].length>i[1].length:l[1].length>=i[0].length||l[1].length>3){g.splice(m,2,g[m]+(!this.options.pedantic&&l[1].length<i[0].length&&!g[m].match(/\n$/)?"":`
`)+g[m+1]),m--,E--;continue}(!this.options.pedantic||this.options.smartLists?l[2][l[2].length-1]!==D[D.length-1]:k===(l[2].length===1))&&(a=g.slice(m+1).join(`
`).length,y.raw=y.raw.substring(0,y.raw.length-a),m=E-1),i=l}u=r.length,~(r=r.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf(`
 `)&&(u-=r.length,r=this.options.pedantic?r.replace(/^ {1,4}/gm,""):r.replace(new RegExp("^ {1,"+u+"}","gm"),"")),r=vt(r,`
`),m!==E-1&&(f+=`
`),o=b||/\n\n(?!\s*$)/.test(f),m!==E-1&&(b=f.slice(-2)===`

`,o||(o=b)),o&&(y.loose=!0),this.options.gfm&&(s=void 0,(c=/^\[[ xX]\] /.test(r))&&(s=r[1]!==" ",r=r.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:f,task:c,checked:s,loose:o,text:r})}return y}}},{key:"html",value:function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):x(t[0]):t[0]}}},{key:"def",value:function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}},{key:"table",value:function(e){var t=this.rules.block.table.exec(e);if(t){var r={type:"table",header:yt(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=t[0];var u,i=r.align.length;for(u=0;u<i;u++)/^ *-+: *$/.test(r.align[u])?r.align[u]="right":/^ *:-+: *$/.test(r.align[u])?r.align[u]="center":/^ *:-+ *$/.test(r.align[u])?r.align[u]="left":r.align[u]=null;for(i=r.cells.length,u=0;u<i;u++)r.cells[u]=yt(r.cells[u].replace(/^ *\| *| *\| *$/g,""),r.header.length);return r}}}},{key:"lheading",value:function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1]}}},{key:"paragraph",value:function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1]}}},{key:"text",value:function(e){var t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}},{key:"escape",value:function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:x(t[1])}}},{key:"tag",value:function(e,t,r){var u=this.rules.inline.tag.exec(e);if(u)return!t&&/^<a /i.test(u[0])?t=!0:t&&/^<\/a>/i.test(u[0])&&(t=!1),!r&&/^<(pre|code|kbd|script)(\s|>)/i.test(u[0])?r=!0:r&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(u[0])&&(r=!1),{type:this.options.sanitize?"text":"html",raw:u[0],inLink:t,inRawBlock:r,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(u[0]):x(u[0]):u[0]}}},{key:"link",value:function(e){var t=this.rules.inline.link.exec(e);if(t){var r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;var u=vt(r.slice(0,-1),"\\");if((r.length-u.length)%2==0)return}else{var i=fl(t[2],"()");if(i>-1){var l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}var a=t[2],o="";if(this.options.pedantic){var c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],o=c[3])}else o=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(r)?a.slice(1):a.slice(1,-1)),yn(t,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0])}}},{key:"reflink",value:function(e,t){var r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){var u=(r[2]||r[1]).replace(/\s+/g," ");if(!(u=t[u.toLowerCase()])||!u.href){var i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return yn(r,u,r[0])}}},{key:"emStrong",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",u=this.rules.inline.emStrong.lDelim.exec(e);if(u&&(!u[3]||!r.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var i=u[1]||u[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){var l,a,o=u[0].length-1,c=o,s=0,p=u[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+o);(u=p.exec(t))!=null;)if(l=u[1]||u[2]||u[3]||u[4]||u[5]||u[6])if(a=l.length,u[3]||u[4])c+=a;else if(!((u[5]||u[6])&&o%3)||(o+a)%3){if(!((c-=a)>0)){if(c+s-a<=0&&!t.slice(p.lastIndex).match(p)&&(a=Math.min(a,a+c+s)),Math.min(o,a)%2)return{type:"em",raw:e.slice(0,o+u.index+a+1),text:e.slice(1,o+u.index+a)};if(Math.min(o,a)%2==0)return{type:"strong",raw:e.slice(0,o+u.index+a+1),text:e.slice(2,o+u.index+a-1)}}}else s+=a}}}},{key:"codespan",value:function(e){var t=this.rules.inline.code.exec(e);if(t){var r=t[2].replace(/\n/g," "),u=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return u&&i&&(r=r.substring(1,r.length-1)),r=x(r,!0),{type:"codespan",raw:t[0],text:r}}}},{key:"br",value:function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}},{key:"del",value:function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}},{key:"autolink",value:function(e,t){var r,u,i=this.rules.inline.autolink.exec(e);if(i)return u=i[2]==="@"?"mailto:"+(r=x(this.options.mangle?t(i[1]):i[1])):r=x(i[1]),{type:"link",raw:i[0],text:r,href:u,tokens:[{type:"text",raw:r,text:r}]}}},{key:"url",value:function(e,t){var r;if(r=this.rules.inline.url.exec(e)){var u,i;if(r[2]==="@")i="mailto:"+(u=x(this.options.mangle?t(r[0]):r[0]));else{var l;do l=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(l!==r[0]);u=x(r[0]),i=r[1]==="www."?"http://"+u:u}return{type:"link",raw:r[0],text:u,href:i,tokens:[{type:"text",raw:u,text:u}]}}}},{key:"inlineText",value:function(e,t,r){var u,i=this.rules.inline.text.exec(e);if(i)return u=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):x(i[0]):i[0]:x(this.options.smartypants?r(i[0]):i[0]),{type:"text",raw:i[0],text:u}}}]),n}(),ot=al,A=ul,U=Qn,h={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:ot,table:ot,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};h.def=A(h.def).replace("label",h._label).replace("title",h._title).getRegex(),h.bullet=/(?:[*+-]|\d{1,9}[.)])/,h.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,h.item=A(h.item,"gm").replace(/bull/g,h.bullet).getRegex(),h.listItemStart=A(/^( *)(bull) */).replace("bull",h.bullet).getRegex(),h.list=A(h.list).replace(/bull/g,h.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+h.def.source+")").getRegex(),h._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",h._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,h.html=A(h.html,"i").replace("comment",h._comment).replace("tag",h._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),h.paragraph=A(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",h._tag).getRegex(),h.blockquote=A(h.blockquote).replace("paragraph",h.paragraph).getRegex(),h.normal=U({},h),h.gfm=U({},h.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),h.gfm.nptable=A(h.gfm.nptable).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",h._tag).getRegex(),h.gfm.table=A(h.gfm.table).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",h._tag).getRegex(),h.pedantic=U({},h.normal,{html:A(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",h._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ot,paragraph:A(h.normal._paragraph).replace("hr",h.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var d={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:ot,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:ot,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};d.punctuation=A(d.punctuation).replace(/punctuation/g,d._punctuation).getRegex(),d.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,d.escapedEmSt=/\\\*|\\_/g,d._comment=A(h._comment).replace("(?:-->|$)","-->").getRegex(),d.emStrong.lDelim=A(d.emStrong.lDelim).replace(/punct/g,d._punctuation).getRegex(),d.emStrong.rDelimAst=A(d.emStrong.rDelimAst,"g").replace(/punct/g,d._punctuation).getRegex(),d.emStrong.rDelimUnd=A(d.emStrong.rDelimUnd,"g").replace(/punct/g,d._punctuation).getRegex(),d._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,d._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,d._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,d.autolink=A(d.autolink).replace("scheme",d._scheme).replace("email",d._email).getRegex(),d._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,d.tag=A(d.tag).replace("comment",d._comment).replace("attribute",d._attribute).getRegex(),d._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,d._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,d._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,d.link=A(d.link).replace("label",d._label).replace("href",d._href).replace("title",d._title).getRegex(),d.reflink=A(d.reflink).replace("label",d._label).getRegex(),d.reflinkSearch=A(d.reflinkSearch,"g").replace("reflink",d.reflink).replace("nolink",d.nolink).getRegex(),d.normal=U({},d),d.pedantic=U({},d.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:A(/^!?\[(label)\]\((.*?)\)/).replace("label",d._label).getRegex(),reflink:A(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",d._label).getRegex()}),d.gfm=U({},d.normal,{escape:A(d.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),d.gfm.url=A(d.gfm.url,"i").replace("email",d.gfm._extended_email).getRegex(),d.breaks=U({},d.gfm,{br:A(d.br).replace("{2,}","*").getRegex(),text:A(d.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var er={block:h,inline:d},gl=tr,hl=$.exports.defaults,kt=er.block,Q=er.inline,kn=pl;function Dl(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function An(n){var e,t,r="",u=n.length;for(e=0;e<u;e++)t=n.charCodeAt(e),Math.random()>.5&&(t="x"+t.toString(16)),r+="&#"+t+";";return r}var ml=function(){function n(e){V(this,n),this.tokens=[],this.tokens.links=Object.create(null),this.options=e||hl,this.options.tokenizer=this.options.tokenizer||new gl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:kt.normal,inline:Q.normal};this.options.pedantic?(t.block=kt.pedantic,t.inline=Q.pedantic):this.options.gfm&&(t.block=kt.gfm,this.options.breaks?t.inline=Q.breaks:t.inline=Q.gfm),this.tokenizer.rules=t}return X(n,[{key:"lex",value:function(e){return e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}},{key:"blockTokens",value:function(e){var t,r,u,i,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(t=this.tokenizer.space(e))e=e.substring(t.raw.length),t.type&&l.push(t);else if(t=this.tokenizer.code(e))e=e.substring(t.raw.length),(i=l[l.length-1])&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text):l.push(t);else if(t=this.tokenizer.fences(e))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.heading(e))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.nptable(e))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.hr(e))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.blockquote(e))e=e.substring(t.raw.length),t.tokens=this.blockTokens(t.text,[],a),l.push(t);else if(t=this.tokenizer.list(e)){for(e=e.substring(t.raw.length),u=t.items.length,r=0;r<u;r++)t.items[r].tokens=this.blockTokens(t.items[r].text,[],!1);l.push(t)}else if(t=this.tokenizer.html(e))e=e.substring(t.raw.length),l.push(t);else if(a&&(t=this.tokenizer.def(e)))e=e.substring(t.raw.length),this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});else if(t=this.tokenizer.table(e))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.lheading(e))e=e.substring(t.raw.length),l.push(t);else if(a&&(t=this.tokenizer.paragraph(e)))e=e.substring(t.raw.length),l.push(t);else if(t=this.tokenizer.text(e))e=e.substring(t.raw.length),(i=l[l.length-1])&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text):l.push(t);else if(e){var o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}throw new Error(o)}return l}},{key:"inline",value:function(e){var t,r,u,i,l,a,o=e.length;for(t=0;t<o;t++)switch((a=e[t]).type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},i=a.header.length,r=0;r<i;r++)a.tokens.header[r]=[],this.inlineTokens(a.header[r],a.tokens.header[r]);for(i=a.cells.length,r=0;r<i;r++)for(l=a.cells[r],a.tokens.cells[r]=[],u=0;u<l.length;u++)a.tokens.cells[r][u]=[],this.inlineTokens(l[u],a.tokens.cells[r][u]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(i=a.items.length,r=0;r<i;r++)this.inline(a.items[r].tokens)}return e}},{key:"inlineTokens",value:function(e){var t,r,u,i,l,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=arguments.length>2&&arguments[2]!==void 0&&arguments[2],c=arguments.length>3&&arguments[3]!==void 0&&arguments[3],s=e;if(this.tokens.links){var p=Object.keys(this.tokens.links);if(p.length>0)for(;(u=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)p.includes(u[0].slice(u[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,u.index)+"["+kn("a",u[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(u=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,u.index)+"["+kn("a",u[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(u=this.tokenizer.rules.inline.escapedEmSt.exec(s))!=null;)s=s.slice(0,u.index)+"++"+s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(i||(l=""),i=!1,t=this.tokenizer.escape(e))e=e.substring(t.raw.length),a.push(t);else if(t=this.tokenizer.tag(e,o,c)){e=e.substring(t.raw.length),o=t.inLink,c=t.inRawBlock;var f=a[a.length-1];f&&t.type==="text"&&f.type==="text"?(f.raw+=t.raw,f.text+=t.text):a.push(t)}else if(t=this.tokenizer.link(e))e=e.substring(t.raw.length),t.type==="link"&&(t.tokens=this.inlineTokens(t.text,[],!0,c)),a.push(t);else if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length);var D=a[a.length-1];t.type==="link"?(t.tokens=this.inlineTokens(t.text,[],!0,c),a.push(t)):D&&t.type==="text"&&D.type==="text"?(D.raw+=t.raw,D.text+=t.text):a.push(t)}else if(t=this.tokenizer.emStrong(e,s,l))e=e.substring(t.raw.length),t.tokens=this.inlineTokens(t.text,[],o,c),a.push(t);else if(t=this.tokenizer.codespan(e))e=e.substring(t.raw.length),a.push(t);else if(t=this.tokenizer.br(e))e=e.substring(t.raw.length),a.push(t);else if(t=this.tokenizer.del(e))e=e.substring(t.raw.length),t.tokens=this.inlineTokens(t.text,[],o,c),a.push(t);else if(t=this.tokenizer.autolink(e,An))e=e.substring(t.raw.length),a.push(t);else if(o||!(t=this.tokenizer.url(e,An))){if(t=this.tokenizer.inlineText(e,c,Dl))e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(l=t.raw.slice(-1)),i=!0,(r=a[a.length-1])&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):a.push(t);else if(e){var k="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(k);break}throw new Error(k)}}else e=e.substring(t.raw.length),a.push(t);return a}}],[{key:"rules",get:function(){return{block:kt,inline:Q}}},{key:"lex",value:function(e,t){return new n(t).lex(e)}},{key:"lexInline",value:function(e,t){return new n(t).inlineTokens(e)}}]),n}(),vl=$.exports.defaults,En=il,At=Ae,nr=function(){function n(e){V(this,n),this.options=e||vl}return X(n,[{key:"code",value:function(e,t,r){var u=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,u);i!=null&&i!==e&&(r=!0,e=i)}return e=e.replace(/\n$/,"")+`
`,u?'<pre><code class="'+this.options.langPrefix+At(u,!0)+'">'+(r?e:At(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:At(e,!0))+`</code></pre>
`}},{key:"blockquote",value:function(e){return`<blockquote>
`+e+`</blockquote>
`}},{key:"html",value:function(e){return e}},{key:"heading",value:function(e,t,r,u){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+u.slug(r)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}},{key:"hr",value:function(){return this.options.xhtml?`<hr/>
`:`<hr>
`}},{key:"list",value:function(e,t,r){var u=t?"ol":"ul";return"<"+u+(t&&r!==1?' start="'+r+'"':"")+`>
`+e+"</"+u+`>
`}},{key:"listitem",value:function(e){return"<li>"+e+`</li>
`}},{key:"checkbox",value:function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}},{key:"paragraph",value:function(e){return"<p>"+e+`</p>
`}},{key:"table",value:function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}},{key:"tablerow",value:function(e){return`<tr>
`+e+`</tr>
`}},{key:"tablecell",value:function(e,t){var r=t.header?"th":"td";return(t.align?"<"+r+' align="'+t.align+'">':"<"+r+">")+e+"</"+r+`>
`}},{key:"strong",value:function(e){return"<strong>"+e+"</strong>"}},{key:"em",value:function(e){return"<em>"+e+"</em>"}},{key:"codespan",value:function(e){return"<code>"+e+"</code>"}},{key:"br",value:function(){return this.options.xhtml?"<br/>":"<br>"}},{key:"del",value:function(e){return"<del>"+e+"</del>"}},{key:"link",value:function(e,t,r){if((e=En(this.options.sanitize,this.options.baseUrl,e))===null)return r;var u='<a href="'+At(e)+'"';return t&&(u+=' title="'+t+'"'),u+=">"+r+"</a>"}},{key:"image",value:function(e,t,r){if((e=En(this.options.sanitize,this.options.baseUrl,e))===null)return r;var u='<img src="'+e+'" alt="'+r+'"';return t&&(u+=' title="'+t+'"'),u+=this.options.xhtml?"/>":">"}},{key:"text",value:function(e){return e}}]),n}(),rr=function(){function n(){V(this,n)}return X(n,[{key:"strong",value:function(e){return e}},{key:"em",value:function(e){return e}},{key:"codespan",value:function(e){return e}},{key:"del",value:function(e){return e}},{key:"html",value:function(e){return e}},{key:"text",value:function(e){return e}},{key:"link",value:function(e,t,r){return""+r}},{key:"image",value:function(e,t,r){return""+r}},{key:"br",value:function(){return""}}]),n}(),ur=function(){function n(){V(this,n),this.seen={}}return X(n,[{key:"serialize",value:function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}},{key:"getNextSafeSlug",value:function(e,t){var r=e,u=0;if(this.seen.hasOwnProperty(r)){u=this.seen[e];do r=e+"-"+ ++u;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=u,this.seen[r]=0),r}},{key:"slug",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}]),n}(),yl=nr,kl=rr,Al=ur,El=$.exports.defaults,bl=rl,rt=ml,ut=function(){function n(e){V(this,n),this.options=e||El,this.options.renderer=this.options.renderer||new yl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new kl,this.slugger=new Al}return X(n,[{key:"parse",value:function(e){var t,r,u,i,l,a,o,c,s,p,f,D,k,y,g,b,E,m,_=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],F="",P=e.length;for(t=0;t<P;t++)switch((p=e[t]).type){case"space":continue;case"hr":F+=this.renderer.hr();continue;case"heading":F+=this.renderer.heading(this.parseInline(p.tokens),p.depth,bl(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":F+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",o="",i=p.header.length,r=0;r<i;r++)o+=this.renderer.tablecell(this.parseInline(p.tokens.header[r]),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(o),s="",i=p.cells.length,r=0;r<i;r++){for(o="",l=(a=p.tokens.cells[r]).length,u=0;u<l;u++)o+=this.renderer.tablecell(this.parseInline(a[u]),{header:!1,align:p.align[u]});s+=this.renderer.tablerow(o)}F+=this.renderer.table(c,s);continue;case"blockquote":s=this.parse(p.tokens),F+=this.renderer.blockquote(s);continue;case"list":for(f=p.ordered,D=p.start,k=p.loose,i=p.items.length,s="",r=0;r<i;r++)b=(g=p.items[r]).checked,E=g.task,y="",g.task&&(m=this.renderer.checkbox(b),k?g.tokens.length>0&&g.tokens[0].type==="text"?(g.tokens[0].text=m+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type==="text"&&(g.tokens[0].tokens[0].text=m+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:m}):y+=m),y+=this.parse(g.tokens,k),s+=this.renderer.listitem(y,E,b);F+=this.renderer.list(s,f,D);continue;case"html":F+=this.renderer.html(p.text);continue;case"paragraph":F+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(s=p.tokens?this.parseInline(p.tokens):p.text;t+1<P&&e[t+1].type==="text";)s+=`
`+((p=e[++t]).tokens?this.parseInline(p.tokens):p.text);F+=_?this.renderer.paragraph(s):s;continue;default:var K='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(K);throw new Error(K)}return F}},{key:"parseInline",value:function(e,t){t=t||this.renderer;var r,u,i="",l=e.length;for(r=0;r<l;r++)switch((u=e[r]).type){case"escape":i+=t.text(u.text);break;case"html":i+=t.html(u.text);break;case"link":i+=t.link(u.href,u.title,this.parseInline(u.tokens,t));break;case"image":i+=t.image(u.href,u.title,u.text);break;case"strong":i+=t.strong(this.parseInline(u.tokens,t));break;case"em":i+=t.em(this.parseInline(u.tokens,t));break;case"codespan":i+=t.codespan(u.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(u.tokens,t));break;case"text":i+=t.text(u.text);break;default:var a='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(a);throw new Error(a)}return i}}],[{key:"parse",value:function(e,t){return new n(t).parse(e)}},{key:"parseInline",value:function(e,t){return new n(t).parseInline(e)}}]),n}(),bn=tr,Fn=nr,Fl=rr,Cl=ur,Ft=Qn,ir=cl,ar=Ae,xl=$.exports.getDefaults,wl=$.exports.changeDefaults,Sl=$.exports.defaults;function v(n,e,t){if(n==null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=Ft({},v.defaults,e||{}),ir(e),t){var r,u=e.highlight;try{r=rt.lex(n,e)}catch(o){return t(o)}var i=function(o){var c;if(!o)try{c=ut.parse(r,e)}catch(s){o=s}return e.highlight=u,o?t(o):t(null,c)};if(!u||u.length<3||(delete e.highlight,!r.length))return i();var l=0;return v.walkTokens(r,function(o){o.type==="code"&&(l++,setTimeout(function(){u(o.text,o.lang,function(c,s){if(c)return i(c);s!=null&&s!==o.text&&(o.text=s,o.escaped=!0),--l===0&&i()})},0))}),void(l===0&&i())}try{var a=rt.lex(n,e);return e.walkTokens&&v.walkTokens(a,e.walkTokens),ut.parse(a,e)}catch(o){if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ar(o.message+"",!0)+"</pre>";throw o}}v.options=v.setOptions=function(n){return Ft(v.defaults,n),wl(v.defaults),v},v.getDefaults=xl,v.defaults=Sl,v.use=function(n){var e=Ft({},n);if(n.renderer&&function(){var r=v.defaults.renderer||new Fn,u=function(l){var a=r[l];r[l]=function(){for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];var p=n.renderer[l].apply(r,c);return p===!1&&(p=a.apply(r,c)),p}};for(var i in n.renderer)u(i);e.renderer=r}(),n.tokenizer&&function(){var r=v.defaults.tokenizer||new bn,u=function(l){var a=r[l];r[l]=function(){for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];var p=n.tokenizer[l].apply(r,c);return p===!1&&(p=a.apply(r,c)),p}};for(var i in n.tokenizer)u(i);e.tokenizer=r}(),n.walkTokens){var t=v.defaults.walkTokens;e.walkTokens=function(r){n.walkTokens(r),t&&t(r)}}v.setOptions(e)},v.walkTokens=function(n,e){var t,r=Dt(n);try{for(r.s();!(t=r.n()).done;){var u=t.value;switch(e(u),u.type){case"table":var i,l=Dt(u.tokens.header);try{for(l.s();!(i=l.n()).done;){var a=i.value;v.walkTokens(a,e)}}catch(D){l.e(D)}finally{l.f()}var o,c=Dt(u.tokens.cells);try{for(c.s();!(o=c.n()).done;){var s,p=Dt(o.value);try{for(p.s();!(s=p.n()).done;){var f=s.value;v.walkTokens(f,e)}}catch(D){p.e(D)}finally{p.f()}}}catch(D){c.e(D)}finally{c.f()}break;case"list":v.walkTokens(u.items,e);break;default:u.tokens&&v.walkTokens(u.tokens,e)}}}catch(D){r.e(D)}finally{r.f()}},v.parseInline=function(n,e){if(n==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");e=Ft({},v.defaults,e||{}),ir(e);try{var t=rt.lexInline(n,e);return e.walkTokens&&v.walkTokens(t,e.walkTokens),ut.parseInline(t,e)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+ar(r.message+"",!0)+"</pre>";throw r}},v.Parser=ut,v.parser=ut.parse,v.Renderer=Fn,v.TextRenderer=Fl,v.Lexer=rt,v.lexer=rt.lex,v.Tokenizer=bn,v.Slugger=Cl,v.parse=v;var Bl=v;function _l(){var n,e=null;function t(){var r;!e||e.closed?((e=window.open("about:blank","reveal.js - Notes","width=1100,height=700")).marked=Bl,e.document.write(`<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector\xA0*/
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing \u2013 Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false;

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				var connectionStatus = document.querySelector( '#connection-status' );
				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );

						}
					}

				} );

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),e?(r=setInterval(function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",url:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,state:n.getState()}),"*")},500),window.addEventListener("message",function(i){var l,a,o,c,s=JSON.parse(i.data);s&&s.namespace==="reveal-notes"&&s.type==="connected"&&(clearInterval(r),n.on("slidechanged",u),n.on("fragmentshown",u),n.on("fragmenthidden",u),n.on("overviewhidden",u),n.on("overviewshown",u),n.on("paused",u),n.on("resumed",u),u()),s&&s.namespace==="reveal-notes"&&s.type==="call"&&(l=s.methodName,a=s.arguments,o=s.callId,c=n[l].apply(n,a),e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:c,callId:o}),"*"))})):alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.")):e.focus();function u(i){var l=n.getCurrentSlide(),a=l.querySelector("aside.notes"),o=l.querySelector(".current-fragment"),c={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:n.getState()};if(l.hasAttribute("data-notes")&&(c.notes=l.getAttribute("data-notes"),c.whitespace="pre-wrap"),o){var s=o.querySelector("aside.notes");s?a=s:o.hasAttribute("data-notes")&&(c.notes=o.getAttribute("data-notes"),c.whitespace="pre-wrap",a=null)}a&&(c.notes=a.innerHTML,c.markdown=typeof a.getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(c),"*")}}return{id:"notes",init:function(r){n=r,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null&&t(),n.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){t()}))},open:t}}export{_l as default};
