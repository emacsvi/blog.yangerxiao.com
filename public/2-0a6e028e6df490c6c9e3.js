(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{254:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r="320px",o={phone:"(min-width: "+r,phoneMini:"(min-width: 320px)",phoneSmall:"(min-width: 360px)",phoneWide:"(min-width: 384px)",phablet:"(min-width: 414px)",tablet:"(min-width: 480px)",tabletSmall:"(min-width: 480px)",tabletWide:"(min-width: 750px)",desktop:"(min-width: 900px)",desktopWide:"(min-width: 1200px)"}},255:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(0),a=n.n(i),l=n(60),u=n.n(l);n.d(t,"a",function(){return u.a}),n.d(t,"b",function(){return l.push}),n(261),o.a.createContext({}),a.a.object,a.a.string.isRequired,a.a.func,a.a.func},256:function(e,t,n){"use strict";(function(e){function r(e){return e<10?"0"+e+" ":e}function o(e){void 0===e&&(e=new Date);var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var i="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||{}}).call(this,n(263))},258:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(253),a=n(255),l=n(260),u=n(264),c=i.a.header.withConfig({displayName:"Header__Wrapper"})(["margin:0 auto;padding:0 0.5rem;"]),s=i.a.div.withConfig({displayName:"Header__Hero"})(["padding-bottom:1rem;display:flex;flex-direction:column;align-items:center;padding-top:2rem;.site{text-align:center;margin-bottom:1rem;.title{padding:0.6rem 2rem;background:#222;color:#fff;}}.slogan{color:",";margin-bottom:0.4rem;}"],Object(l.b)(.3,"#333")),d=function(e){return o.a.createElement(c,null,o.a.createElement(s,null,o.a.createElement("h1",{className:"site"},o.a.createElement(a.a,{to:"/",className:"title"},"杨二")),o.a.createElement("div",{className:"slogan"},o.a.createElement("span",null,"Machine repeats, Human creates"))),o.a.createElement(u.a,null),e.children)},f=n(29),m=n.n(f),p=n(50),h=n.n(p),g=n(0),b=n.n(g),x=n(254),v=n(256),y=i.a.div.withConfig({displayName:"Backtop__Circle"})(["width:2rem;height:2rem;border-radius:0.5rem;background:#ddd;cursor:pointer;.wrapper{position:relative;&:before,&:after{content:'';position:absolute;top:0.9rem;left:0.34rem;width:0.8rem;height:0.14rem;background:#444;}&:before{transform:rotate(45deg);left:0.82rem;}&:after{transform:rotate(-45deg);}}"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){v.a.addEventListener("scroll",n.handleScroll)},n.componentWillUnmount=function(){v.a.removeEventListener("scroll",n.handleScroll)},n.handleScroll=function(){var e=document.documentElement,t=(v.a.pageYOffset||e.scrollTop)-(e.clientTop||0)>n.props.offset;n.setState({isVisible:t})},n.scrollUp=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(v.a.requestAnimationFrame(n.scrollUp),v.a.scrollTo(0,e-e/8))},n.state={isVisible:!1},n.scrollUp=n.scrollUp.bind(h()(h()(n))),n.handleScroll=n.handleScroll.bind(h()(h()(n))),n}return m()(t,e),t.prototype.render=function(){return o.a.createElement(y,{style:{visibility:this.state.isVisible?"visible":"hidden"},onClick:this.scrollUp},o.a.createElement("div",{className:"wrapper"}))},t}(r.Component);w.propTypes={offset:b.a.number},w.defaultProps={offset:800};var E=i.a.div.withConfig({displayName:"FixContainer__Container"})(["position:fixed;right:","px;bottom:","px;display:flex;flex-direction:column;align-items:flex-end;@media ","{right:16%;}> *{margin:0.8rem 0;}"],function(e){return e.right},function(e){return e.bottom},x.a.desktop),C=function(e){var t=e.right,n=e.bottom;return o.a.createElement(E,{bottom:n,right:t},e.children)};C.propTypes={right:b.a.number,bottom:b.a.number},C.defaultProps={right:20,bottom:30};var k=C,j=i.a.footer.withConfig({displayName:"Footer__Content"})(["padding:3rem 0;display:flex;flex-direction:column;align-items:center;@media print{.power{display:none;}}"]),N=function(){return o.a.createElement(j,null,o.a.createElement("div",null,"© 2018 by Tristan Yang "),o.a.createElement("div",{className:"power"},"Powered by ",o.a.createElement("a",{href:"http://reactjs.org/"},"React.js")," & ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))},S=n(276),T=n.n(S),O=i.a.div.withConfig({displayName:"ReadHistory__Container"})(["display:flex;flex-direction:column;align-items:flex-end;z-index:999;.mask{position:fixed;top:0;left:0;right:0;bottom:0;display:",";}button{position:relative;border-radius:50%;width:2rem;height:2rem;border:1px solid #ddd;padding:0.2rem;align-items:center;justify-content:center;cursor:pointer;background:#eee;&:focus{outline:none;}&:after{content:'';position:absolute;width:0.6rem;height:0.7rem;border-left:2px solid #666;border-bottom:2px solid #666;top:0.4rem;left:0.8rem;}}.history{z-index:999;padding:0.6rem;margin-bottom:0.5rem;border:1px solid #ddd;background:#eee;border-radius:0.5rem;display:",";max-height:70vh;overflow:scroll;ul{list-style:none;margin:0.4rem 0;li{padding:0;margin:0.4rem 0;a{",";}}}}"],function(e){return e.expand?"block":"none"},function(e){return e.expand?"block":"none"},Object(l.a)("14rem")),_=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClickHandler=function(){var e=n.state.expand;n.setState({expand:!e})},n.state={expand:!1},n.hisList=o.a.createRef(),n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=v.a.JSON.parse(v.a.localStorage.getItem("read.histories"))||[];if(this.props.title){var t=this.props,n=t.title,r=t.url;e.push({title:n,url:r,ts:(new Date).getTime()}),e=T.a.sortBy(e,["ts"]),e=T.a.uniqBy(e,"url").slice(-10),v.a.localStorage.setItem("read.histories",v.a.JSON.stringify(e))}var o=e.map(function(e){return"<li>\n        <a href="+e.url+">"+e.title+"</a>\n      </li>"});this.hisList.current.innerHTML=o.join("")},n.render=function(){return o.a.createElement(O,{expand:this.state.expand},o.a.createElement("div",{className:"mask",onClick:this.onClickHandler,onKeyDown:this.onClickHandler}),o.a.createElement("div",{className:"history"},o.a.createElement("ul",{ref:this.hisList})),o.a.createElement("button",{onClick:this.onClickHandler}))},t}(r.Component),A=i.a.div.withConfig({displayName:"Wrapper__Grid"})(["margin:0 auto;padding:0;min-height:60vh;"]),L=i.a.div.withConfig({displayName:"Wrapper__Content"})(["box-shadow:0 4px 120px rgba(0,0,0,0.1);border-radius:1rem;padding:2rem 1rem;overflow:hidden;margin:0 auto;@media ","{padding:2.6rem;}@media ","{padding:3rem 6rem;max-width:75%;}background-color:",";"],x.a.tablet,x.a.desktop,function(e){return e.theme.bg});t.a=function(e){return o.a.createElement(A,null,o.a.createElement(d,null),o.a.createElement(L,null,e.children),o.a.createElement(k,null,e.title&&o.a.createElement(_,{title:e.title,url:e.url}),e.toc,o.a.createElement(w,null)),o.a.createElement(N,null))}},259:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(253).a.div.withConfig({displayName:"Subline__Line"})(["display:flex;flex-wrap:nowrap;overflow-x:auto;white-space:nowrap;font-size:0.6rem;color:",";",";",";",";",";-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}> span{padding:0.2rem 0.3rem;border:1px solid #eee;margin-right:0.2rem;margin-bottom:0.2rem;border-radius:0.2rem;.tags{margin-left:0.5rem;.tag{position:relative;margin-right:0.6rem;&:before{content:'#';position:absolute;left:-0.4rem;}}}}"],function(e){return e.theme.light},function(e){return e.sectionTitle&&"display:block"},function(e){return e.sectionTitle&&"margin-top: -.6rem"},function(e){return e.sectionTitle&&"margin-bottom: 2rem"},function(e){return e.sectionTitle&&"text-align: center"});t.a=function(e){return o.a.createElement(i,{sectionTitle:e.sectionTitle},e.children)}},261:function(e,t,n){var r;e.exports=(r=n(268))&&r.default||r},264:function(e,t,n){"use strict";n(133);var r=n(29),o=n.n(r),i=n(1),a=n.n(i),l=n(253),u=n(255),c=n(254),s=n(256),d=l.a.div.withConfig({displayName:"Button__Wrapper"})(["margin-right:0.4rem;margin-bottom:0.2rem;border-radius:0.6rem;font-size:1rem;color:white;background:#333;padding:0.3rem 0.6rem;cursor:pointer;&:active{transform:scale(1.1);transition:transform 0.5s;}"]),f=function(e){return a.a.createElement(d,{className:"btn"},e.children)};n.d(t,"a",function(){return p});var m=l.a.div.withConfig({displayName:"Navs__Container"})(["display:flex;align-items:space-between;margin:0 auto;margin-bottom:1.5rem;margin-top:",";",";max-width:90%;@media ","{max-width:",";}@media ","{max-width:",";}a{flex:1;text-align:center;margin:0 0.2rem;.btn{margin:0 auto;}&.curr{.btn{background:#666;}position:relative;&:after,&:before{top:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;}&:after{border-color:rgba(136,183,213,0);border-top-color:#666;border-width:0.6rem;margin-left:-0.6rem;}}}"],function(e){return e.isBottom?"2rem":0},function(e){return e.isBottom?"margin-bottom:0":""},c.a.tablet,function(e){return e.isBottom?"80%":"55%"},c.a.desktop,function(e){return e.isBottom?"60%":"30%"}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).container=a.a.createRef(),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=s.a.location.pathname;this.container.current.querySelectorAll("a").forEach(function(t){0===e.indexOf(t.pathname)&&t.classList.add("curr")})},n.render=function(){var e=this.props.isBottom;return a.a.createElement("div",{ref:this.container,className:"wrapper"},a.a.createElement(m,{isBottom:e},[{to:"/cates",title:"分类"},{to:"/archives",title:"归档"},{to:"/tags",title:"标签"},{to:"/about",title:"关于"}].map(function(e){return a.a.createElement(u.a,{to:e.to,key:e.to},a.a.createElement(f,null,e.title))})))},t}(i.Component)},268:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),l=n(52),u=n(3),c=function(e){var t=e.location,n=u.a.getResourcesForPathname(t.pathname);return o.a.createElement(l.a,{location:t,pageResources:n})};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},270:function(e,t,n){var r=n(364)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},280:function(e,t,n){var r=n(358).Symbol;e.exports=r},291:function(e,t,n){var r=n(359);e.exports=function(e){return null==e?"":r(e)}},346:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",o="\\d+",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",a="[^\\ud800-\\udfff"+n+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+i+"|"+a+")",d="(?:"+c+"|"+a+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+f+"(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,u].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*",p="(?:"+["[\\u2700-\\u27bf]",l,u].join("|")+")"+m,h=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,c+s,"$"].join("|")+")",c+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,p].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},347:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},348:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},349:function(e,t,n){var r=n(348),o=n(347),i=n(291),a=n(346);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}},350:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},351:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},352:function(e,t,n){var r=n(280),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[l]=n:delete e[l]),o}},353:function(e,t,n){var r=n(280),o=n(352),i=n(351),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},354:function(e,t,n){var r=n(353),o=n(350);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},355:function(e,t){var n=Array.isArray;e.exports=n},356:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},357:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(263))},358:function(e,t,n){var r=n(357),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},359:function(e,t,n){var r=n(280),o=n(356),i=n(355),a=n(354),l=r?r.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},360:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},361:function(e,t,n){var r=n(360)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},362:function(e,t,n){var r=n(361),o=n(291),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},363:function(e,t){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},364:function(e,t,n){var r=n(363),o=n(362),i=n(349),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}}}]);
//# sourceMappingURL=2-0a6e028e6df490c6c9e3.js.map