(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{177:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(186),o=a(184),s=a(1),c=a(183),l=a.n(c),u=a(128),d=a.n(u),m=a(11),p=a.n(m),g=function(e){var t=e.id,a=e.title,i=e.description,n=e.uri,o=e.handleClick;return r.a.createElement("div",{className:l()("col col--3 me-need-help-container-3d cta-nhc bg-nhc",d.a.category),onClick:function(e){return o(e,n)}},r.a.createElement("h2",null,t,". ",a),r.a.createElement("p",null,i))};g.defaultProps={id:1,title:"Default Title",description:"Default Description",uri:"/default/uri",handleClick:function(){}},g.propTypes={id:p.a.number.isRequired,title:p.a.string.isRequired,description:p.a.string.isRequired,uri:p.a.string.isRequired,handleClick:p.a.func.isRequired};var f=g,h=a(191),b=(a(227),a(201)),v=a.n(b),y=function(e){var t,a=e.homepageCategories,n=Object(i.useState)(8),o=n[0],c=(n[1],Object(i.useState)(!1)),u=(c[0],c[1],Object(h.b)());Object(i.useEffect)((function(){return function(){clearTimeout(t)}}),[]);var m=function(e,t){e.preventDefault(),u.push(t)};return a&&a.length?r.a.createElement("section",{className:d.a.categories},r.a.createElement("div",{className:l()("container")},r.a.createElement("div",{className:"row"},a.filter((function(e,t){return t>=0&&t<=o})).map((function(e,t){return r.a.createElement(f,Object(s.a)({key:t,handleClick:m},e))}))))):r.a.createElement("div",{className:d.a.postCategoryAction},r.a.createElement("h3",null,"No categories to load"))};y.defaultProps={homepageCategories:v.a},y.propTypes={homepageCategories:p.a.array.isRequired};var k=y,E=(a(185),a(187),a(168)),w=a.n(E),C=function(e){var t=e.siteConfig;e.btnText,e.uri;return r.a.createElement("header",{className:l()("hero hero--primary",w.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t&&t.title),r.a.createElement("p",{className:"hero__subtitle"},t&&t.tagline)))};C.defaultProps={siteConfig:{},btnText:"Get Started",uri:"/"},C.propTypes={siteConfig:p.a.object.isRequired,btnText:p.a.string.isRequired,uri:p.a.string.isRequired};var T=C,N=a(169),R=a.n(N),x=a(233),q=function(e){var t=e.text,a=e.image,i=e.url;return r.a.createElement("div",{className:l()(R.a.heroTabContainer),style:{backgroundImage:"url("+a+")"},onClick:function(e){e.preventDefault(),window.location.href=i}},t,r.a.createElement(x.a,{size:40,className:l()(R.a.iconArrow)}))};q.propTypes={text:p.a.string.isRequired,image:p.a.string,url:p.a.string.isRequired};var O=q,j=a(170),H=a.n(j),S=function(e){var t=e.items;return r.a.createElement("div",{className:l()(H.a.splitViewContainer)},t&&t.length&&t.map((function(e,t){return r.a.createElement(O,Object(s.a)({key:t},e))})))};S.defaultProps={items:[]},S.propTypes={items:p.a.array.isRequired};var _=S,M=a(171),D=a.n(M),G=function(e){var t=e.text;return r.a.createElement("div",{className:l()(D.a.bannerContainer,D.a.dark)},r.a.createElement("div",null,t))};G.defaultProps={text:"Banner Text"},G.propTypes={text:p.a.string.isRequired};var P=G;t.default=function(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(n.a,{title:t.title,description:"Official documentation site for TryHackMe"},r.a.createElement(T,{siteConfig:t,btnText:"Get Started",uri:"/docs/introduction/welcome"}),r.a.createElement(_,{items:[{text:"Latest blog posts",image:"https://blog.tryhackme.com/content/images/size/w1000/2020/02/TryHackMe_Red_Blue_borderless.png",url:"https://blog.tryhackme.com"},{text:"See Hackback 2",image:"https://blog.tryhackme.com/content/images/size/w1000/2019/12/IMG_20191026_101233.jpg",url:"https://tryhackme.com/hackback2"}]}),r.a.createElement(P,{text:"Select a documentation category from the listings below."}),r.a.createElement("main",null,r.a.createElement(k,{homepageCategories:v.a})))}},201:function(e,t){e.exports=[{id:1,title:"General",description:"Just getting started with TryHackMe? Start here for a detailed introduction to our platform.",uri:"/docs/general/welcome"},{id:2,title:"OpenVPN",description:"Guides on setting up, connecting and troubleshooting OpenVPN connections.",uri:"/docs/openvpn/why-openvpn"},{id:3,title:"Completing Rooms",description:"Guides on how to use and complete TryHackMe rooms.",uri:"/docs/rooms/what-are-rooms"},{id:4,title:"Room Creation",description:"How to create your own TryHackMe rooms for training, workshops and assessments.",uri:"/docs/room-creation/room-creation-getting-started"},{id:5,title:"Sales and Billing",description:"Information on sales and billing.",uri:"/docs/sales-billing/sales-billing-student"},{id:6,title:"TryHackMe for Teaching",description:"Guides on managing students, virtual labs and teaching content for Cybersecurity training.",uri:"/docs/teaching/teaching-getting-started"},{id:7,title:"Discord",description:"FAQs related to the TryHackMe Discord Server.",uri:"/docs/discord/discord-getting-started"}]}}]);