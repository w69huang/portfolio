(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{129:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),l=c.n(s),a=c(42),i=c.n(a),r=(c(51),c(10)),o=c(3),j=c.p+"static/media/waves.8f8bd93b.jpg";function x(){return Object(n.jsxs)("main",{children:[Object(n.jsx)("img",{src:j,alt:"Waves",className:"absolute object-cover w-full h-full"}),Object(n.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(n.jsx)("h1",{className:"text-6xl text-white font-bold wacky leading-none lg:leading-snug home-name",children:" Welcome!"})})]})}var h=c(16),b=c(43),d=c.n(b)()({projectId:"uh4mciun",dataset:"production"}),m=c.p+"static/media/sapling.02ba2618.jpg",u=c(22),p=c.n(u),f=c(44),g=c.n(f),O=p()(d);function v(){var e,t=Object(s.useState)(null),c=Object(h.a)(t,2),l=c[0],a=c[1];return Object(s.useEffect)((function(){d.fetch('*[_type== "author"] {\n            name,\n            bio,\n            "authorImage": image.asset->url,\n            skills,\n\n        }').then((function(e){return a(e[0])})).catch(console.error)}),[]),l?Object(n.jsxs)("main",{className:"relative",children:[Object(n.jsx)("img",{src:m,alt:"Sapling",className:"absolute w-full"}),Object(n.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(n.jsxs)("section",{className:"bg-blue-500 rounded-lg shadow-2xl lg:flex p-20",children:[Object(n.jsx)("img",{src:(e=l.authorImage,O.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:l.name}),Object(n.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(n.jsxs)("h1",{className:"wacky text-6xl text-blue-400 mb-4",children:["Hey! I'm "," ",Object(n.jsxs)("span",{className:"text-blue-200",children:[" ",l.name," "]})]}),Object(n.jsx)("div",{className:"prose lg:prose-xl text-white text-lg",children:Object(n.jsx)(g.a,{blocks:l.bio,projectId:"uh4mciun",dataset:"production"})})]})]})})]}):Object(n.jsx)("div",{children:"Loading..."})}function w(){var e=Object(s.useState)(null),t=Object(h.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){d.fetch('*[_type == "project"]{\n            title,\n            date,\n            description,\n            projectType,\n            link,\n            tags,\n        }').then((function(e){return l(e)})).catch(console.error)}),[]),Object(n.jsx)("main",{className:"bg-blue-200 min-h-screen p-12",children:Object(n.jsxs)("section",{className:"container mx-auto",children:[Object(n.jsx)("h1",{className:"text-5xl flex justify-center wacky",children:" My Projects"}),Object(n.jsx)("h2",{className:"text-lg text-grey-600 flex justify-center mb-12",children:"Welcome to my Projects!"}),Object(n.jsx)("section",{className:" grid grid-cols-2 gap-8",children:c&&c.map((function(e,t){return Object(n.jsxs)("article",{className:"relative rounded-lg shadow-xl bg-white p-16",children:[Object(n.jsx)("h3",{className:"text-grey-800 text-3xl font-bold mb-2 hover:text-black",children:Object(n.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"nooperner noreffer",children:e.title})}),Object(n.jsxs)("div",{className:"text-grey-500 text-xs space-x-4",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("strong",{className:"font-bold",children:"Finished On"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("strong",{className:"font-bold",children:"Type"}),": "," ",e.projectType]}),Object(n.jsx)("p",{className:"my-6 text-lg text-grey-700 leading-relaxed",children:e.description}),Object(n.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-blue-600 font-bold hover:underline wacky hover:text-white text-md",children:["View The Project "," ",Object(n.jsx)("span",{role:"img","aria-label":"left pointer",children:"\ud83d\udc48\ud83c\udffb"})]})]})]})}))})]})})}function y(){return Object(n.jsx)("h1",{children:"Resume!"})}var N=c(23);function k(){return Object(n.jsx)("header",{className:"bg-blue-500",children:Object(n.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(n.jsxs)("nav",{className:"flex",children:[Object(n.jsx)(r.b,{to:"/",exact:!0,activeClassName:"text-white",className:"inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-white text-4xl font-bold wacky tracking-widest",children:"Will Huang"}),Object(n.jsx)(r.b,{to:"/project",activeClassName:"text-white bg-blue-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white",children:"Projects"}),Object(n.jsx)(r.b,{to:"/resume",activeClassName:"text-white bg-blue-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white",children:"Resume"}),Object(n.jsx)(r.b,{to:"/about",activeClassName:"text-white bg-blue-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white",children:"About Me!"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(N.SocialIcon,{url:"http://linkedin.com/in/will-huang123",className:"inline-flex items-center py-3 px-3 my-6 mr-4 rounded  hover:text-white",style:{height:50,width:50},target:"_blank",fgColor:"#fff"}),Object(n.jsx)(N.SocialIcon,{url:"http://github.com/w69huang",className:"inline-flex items-center py-3 px-3 my-6 mr-4 rounded  hover:text-white",style:{height:50,width:50},target:"_blank",fgColor:"#fff"})]})]})})}var C=function(){return Object(n.jsxs)(r.a,{children:[Object(n.jsx)(k,{}),Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{component:x,path:"/",exact:!0}),Object(n.jsx)(o.a,{component:v,path:"/about"}),Object(n.jsx)(o.a,{component:w,path:"/project"}),Object(n.jsx)(o.a,{component:y,path:"/resume"})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,130)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),l(e),a(e)}))};i.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),I()},51:function(e,t,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.7b0e81c6.chunk.js.map