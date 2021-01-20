(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{23:function(t,e,c){},25:function(t,e,c){},26:function(t,e,c){},27:function(t,e,c){},28:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),r=c.n(s),o=c(14),a=c.n(o),i=(c(23),c(5)),l=c.n(i),j=c(15),d=c(3),u=(c(25),c(26),function(t){var e=Object(s.useState)(""),c=Object(d.a)(e,2),r=c[0],o=c[1],a=Object(s.useState)(""),i=Object(d.a)(a,2),l=i[0],j=i[1],u=Object(s.useState)("newer"),h=Object(d.a)(u,2),b=h[0],p=h[1],O=function(e,c){var n=c.toLowerCase(),s=new RegExp(".*".concat(n,".*")),r=new RegExp("^(?=.*".concat(e,").*$"));return t.contestsList.filter((function(t){t.title.toLowerCase();return s.test("".concat(t.start).concat(t.duration_second,"toLowerTitle").concat(t.url).concat(t.rate_change))&&r.test("".concat(t.id))}))},x=function(t,e){return"newer"===e?t.slice().sort((function(t,e){return t.start_epoch_second>e.start_epoch_second?-1:1})):"older"===e?t.slice().sort((function(t,e){return t.start_epoch_second<e.start_epoch_second?-1:1})):"abcSort"===e?t.slice().sort((function(t,e){return t.title<e.title?-1:1})):void 0};return Object(n.jsxs)("div",{class:"header",children:[Object(n.jsx)("h1",{class:"header-logo",children:"Atcoder Contests Information"}),Object(n.jsxs)("div",{class:"drawer",children:[Object(n.jsx)("input",{type:"checkbox",id:"drawer-check",class:"drawer-hidden"}),Object(n.jsx)("label",{for:"drawer-check",class:"drawer-open",children:Object(n.jsx)("span",{})}),Object(n.jsxs)("div",{class:"forms",children:[Object(n.jsx)("div",{class:"form select",children:Object(n.jsxs)("select",{onChange:function(e){o(e.target.value);var c=O(e.target.value,l),n=x(c,b);t.setDisplayList(n),x(b)},value:r,children:[Object(n.jsx)("option",{value:"",children:"ALL"}),Object(n.jsx)("option",{value:"abc",children:"ABC"}),Object(n.jsx)("option",{value:"arc",children:"ARC"}),Object(n.jsx)("option",{value:"agc",children:"AGC"}),Object(n.jsx)("option",{value:"past",children:"PAST"}),Object(n.jsx)("option",{value:"joi",children:"JOI"}),Object(n.jsx)("option",{value:"jag",children:"JAG"})]})}),Object(n.jsx)("div",{class:"form select",children:Object(n.jsxs)("select",{onChange:function(e){t.setDisplayCount(+e.target.value)},value:t.displayCount,children:[Object(n.jsx)("option",{value:"10",children:"10\u4ef6\u8868\u793a"}),Object(n.jsx)("option",{value:"50",children:"50\u4ef6\u8868\u793a"}),Object(n.jsx)("option",{value:"100",children:"100\u4ef6\u8868\u793a"}),Object(n.jsx)("option",{value:t.displayList.length,children:"\u5168\u4ef6\u8868\u793a"})]})}),Object(n.jsx)("div",{class:"form select",children:Object(n.jsxs)("select",{onChange:function(e){p(e.target.value);var c=x(t.displayList,e.target.value);t.setDisplayList(c)},value:b,class:"sort-select",children:[Object(n.jsx)("option",{value:"newer",children:"\u65b0\u3057\u3044\u9806"}),Object(n.jsx)("option",{value:"older",children:"\u53e4\u3044\u9806"}),Object(n.jsx)("option",{value:"abcSort",children:"\u4e94\u5341\u97f3\u9806"})]})}),Object(n.jsxs)("div",{class:"form",children:[Object(n.jsx)("label",{class:"form-focus",children:Object(n.jsx)("input",{type:"text",value:l,placeholder:"\u691c\u7d22",onChange:function(e){!function(e){j(e.target.value);var c=O(r,e.target.value),n=x(c,b);t.setDisplayList(n)}(e)}})}),Object(n.jsx)("span",{class:"focus_line"})]})]})]})]})}),h=(c(27),function(t){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"contests-table",children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:t.contest.url,class:"contest-title",target:"_blank",rel:"noopener noreferrer",children:t.contest.title})}),Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u958b\u59cb\u6642\u523b"}),Object(n.jsx)("td",{children:t.contest.start})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u30b3\u30f3\u30c6\u30b9\u30c8\u6642\u9593"}),Object(n.jsx)("td",{children:t.contest.duration_second})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u5909\u5316"}),Object(n.jsx)("td",{children:t.contest.rate_change})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\u30b3\u30f3\u30c6\u30b9\u30c8\u30da\u30fc\u30b8"}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:t.contest.url,target:"_blank",rel:"noopener noreferrer",children:t.contest.url})})]})]})})]})})}),b=(c(28),function(t){return Object(n.jsxs)("div",{class:"main",children:[Object(n.jsx)("div",{class:"title",children:Object(n.jsx)("h2",{children:"Information about the contests"})}),t.displayList.map((function(e,c){return c>=t.displayCount?null:Object(n.jsx)(h,{contest:e})})),t.displayCount<t.displayList.length&&Object(n.jsx)("button",{class:"show-more-button",onClick:function(){t.setDisplayCount(t.displayCount+10)},children:"\u3082\u3063\u3068\u898b\u308b"}),t.displayCount>=t.displayList.length&&Object(n.jsx)("p",{class:"no-more",children:"\u3053\u308c\u4ee5\u4e0a\u8a72\u5f53\u30da\u30fc\u30b8\u306f\u3042\u308a\u307e\u305b\u3093"})]})}),p=c(16),O=c.n(p),x=c(17),f=c.n(x),v=function(){var t=Object(s.useState)([]),e=Object(d.a)(t,2),c=e[0],r=e[1],o=Object(s.useState)([]),a=Object(d.a)(o,2),i=a[0],h=a[1],p=Object(s.useState)(10),x=Object(d.a)(p,2),v=x[0],g=x[1],y=function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("https://kenkoooo.com/atcoder/resources/contests.json");case 3:(e=t.sent).data.sort((function(t,e){return t.start_epoch_second>e.start_epoch_second?-1:1})),C(e.data),r(e.data),h(e.data),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error!!");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),C=function(t){return t.map((function(t){return t.start=f.a.unix(t.start_epoch_second).format("YYYY-MM-DD HH:mm"),t.duration_second=t.duration_second/60+"\u5206",t.url="https://atcoder.jp/contests/".concat(t.id),t}))};return Object(s.useEffect)((function(){y()}),[]),Object(n.jsxs)("div",{class:"App",children:[Object(n.jsx)(u,{contestsList:c,setContestsList:r,displayList:i,setDisplayList:h,displayCount:v,setDisplayCount:g}),Object(n.jsx)(b,{contestsList:c,setContestsList:r,displayList:i,setDisplayList:h,displayCount:v,setDisplayCount:g})]})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),n(t),s(t),r(t),o(t)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.ff20bd12.chunk.js.map