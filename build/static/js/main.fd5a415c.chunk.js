(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{45:function(e,t,a){},56:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(47),l=a.n(i),o=a(8),c=a(10),s=(a(45),a(14)),u=a(76),h=a(77);function m(){var e=Object(n.useState)("none"),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{display:"grid",gridTemplateColumns:"repeat(5, auto)",gridGap:"10px",alignItems:"center",listStyle:"none",textAlign:"center",width:"50vw",justifyContent:"end",marginRight:"2rem"}},r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/"},"Home")),r.a.createElement("li",{onMouseEnter:function(e){i("block")},onMouseLeave:function(e){i("none")},style:{height:"80px",textAlign:"left",display:"flex"}},r.a.createElement("div",{style:{paddingTop:"26px"}},"Product ",r.a.createElement("i",{className:"fas fa-caret-down"})),r.a.createElement("ul",{style:{borderRadius:"5px",right:"0",fontSize:"1rem",width:"44rem",height:"10rem",position:"absolute",top:"80px",background:"#bbeffd",display:"".concat(a)}},r.a.createElement(u.a,{style:{paddingLeft:"2rem",paddingTop:"2rem"}},r.a.createElement(h.a,{xs:4},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product"},"3D/VR/AR")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/od"},"Object Detection")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/ocr"},"Optical Character Recognition")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/is"},"Image Synthesis"))),r.a.createElement(h.a,{xs:3},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/tts"},"Text To Speech")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/stt"},"Speech To Text")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/product/ss"},"Speech Synthesis"))),r.a.createElement(h.a,{xs:5},r.a.createElement(s.b,{to:"/product/3d"},"Natural Language Processing"))))),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/"},"Contact Us"))))}function d(e){var t=Object(n.useState)("none"),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)("none"),u=Object(c.a)(o,2),h=u[0],m=u[1];Object(n.useEffect)((function(){!0===e.click?m("block"):(m("none"),l("none"))}),[e]);return r.a.createElement("ul",{style:{paddingLeft:"1rem",position:"absolute",height:"55vh",top:"80px",width:"100%",display:"".concat(h),listStyle:"none",backgroundColor:"#002a56",left:"0"}},r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/"},"Home")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement("div",{onClick:function(e){l("none"===i?"block":"none")}},"Product ",r.a.createElement("i",{className:"fas fa-caret-down"})),r.a.createElement("ul",{style:{paddingLeft:"2rem",listStyle:"none",display:"".concat(i)}},r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product"},"3D/VR/AR")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/"},"Object Detection")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/ocr"},"Optical Character Recognition")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/is"},"Image Synthesis")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/tts"},"Text To Speech")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/stt"},"Speech To Text")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/ss"},"Speech Synthesis")),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/product/3d"},"Natural Language Processing")))),r.a.createElement("li",{style:{textAlign:"left"}},r.a.createElement(s.b,{style:{color:"white"},to:"/"},"Contact Us")))}function f(e){switch(Object(n.useEffect)((function(){}),[e]),e.responsive){case"left":return r.a.createElement(d,{click:e.click});case"center":return r.a.createElement(m,null)}}var g=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!1),s=Object(c.a)(l,2),u=(s[0],s[1],Object(n.useState)("none")),h=Object(c.a)(u,2),m=(h[0],h[1],Object(n.useState)({logo:"left"})),d=Object(c.a)(m,2),g=d[0],p=d[1];return Object(n.useEffect)((function(){function e(){window.innerWidth<960?g.logo="left":g.logo="center",p(Object(o.a)({},g))}window.addEventListener("resize",e),e()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar",style:{justifyContent:"".concat(g.logo)}},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{style:{width:"4rem",borderRadius:"50%"},src:"./raccoon.webp"}),r.a.createElement("h2",null,"PicoCat")),r.a.createElement("div",{className:"menu-icon",onClick:function(){return i(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement(f,{responsive:g.logo,click:a})))};a(67);function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"home"},"EPIC"))}var E=a(17),y=a(12),w=a(79),x=a(78),v=a(1);function b(e){var t=Object(x.a)("./chair.glb"),a=t.nodes,i=t.materials,l=["./texture/wood1.jpg","./texture/wood.jpg","./texture/wood2.jpg","./texture/wood3.jpg","./texture/grass.jpg"],o=((new v.TextureLoader).load(l[0]),Object(n.useRef)(),Object(n.useState)([{name:"back",color:(new v.TextureLoader).load(l[0]),isSelect:!1},{name:"cushions",color:(new v.TextureLoader).load(l[1]),isSelect:!1},{name:"base",color:(new v.TextureLoader).load(l[2]),isSelect:!1},{name:"legs",color:(new v.TextureLoader).load(l[3]),isSelect:!1},{name:"supports",color:(new v.TextureLoader).load(l[4]),isSelect:!1}])),s=Object(c.a)(o,2),u=s[0],h=s[1];Object(n.useEffect)((function(){var t=u.map((function(t){return!0===t.isSelect&&(t.color=(new v.TextureLoader).load(e.color)),t}));h(t)}),[e.color]);var m=function(t){var a=u.map((function(e){return e.name===t?e.isSelect=!0:e.isSelect=!1,e}));e.changeItem(t),h(a)};return r.a.createElement("group",{scale:1.2,dispose:null,position:0},r.a.createElement("mesh",{onClick:function(){m("back")},geometry:a.back.geometry,material:i.laces},r.a.createElement("meshStandardMaterial",{map:u[0].color,attach:"material"})),r.a.createElement("mesh",{onClick:function(){m("cushions")},geometry:a.cushions.geometry,material:i.laces},r.a.createElement("meshStandardMaterial",{map:u[1].color,attach:"material"})),r.a.createElement("mesh",{onClick:function(){m("base")},geometry:a.base.geometry,material:i.laces},r.a.createElement("meshStandardMaterial",{map:u[2].color,attach:"material"})),r.a.createElement("mesh",{onClick:function(){m("legs")},geometry:a.legs.geometry,material:i.laces},r.a.createElement("meshStandardMaterial",{map:u[3].color,attach:"material"})),r.a.createElement("mesh",{onClick:function(){m("supports")},geometry:a.supports.geometry,material:i.laces},r.a.createElement("meshStandardMaterial",{map:u[4].color,attach:"material"})))}var j=a(2),O=a(3),S={x:0,y:0},k=function(){function e(t,a,n,r,i,l,o,c,s){Object(j.a)(this,e),this.x=void 0,this.y=void 0,this.dx=void 0,this.dy=void 0,this.radius=1,this.c=void 0,this.w=void 0,this.h=void 0,this.color=void 0,this.maxRadius=10,this.x=t,this.y=a,this.dx=n,this.dy=r,this.c=l,this.w=o,this.h=c,this.color=s}return Object(O.a)(e,[{key:"update",value:function(){(this.x+this.radius>this.w||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>this.h||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy;var e=new Map;return this.x>S.x-200&&this.x<S.x+200&&this.y>S.y-200&&this.y<S.y+200&&(e.set("x",this.x),e.set("y",this.y)),this.draw(),e}},{key:"draw",value:function(){this.c.beginPath(),this.c.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.c.strokeStyle="white",this.c.stroke(),this.c.fillStyle="white",this.c.fill()}}]),e}();function M(e){var t,a=Object(n.useRef)(null),i=[],l=["#ed1a1a","#31ed1a","#1a20ed","#d0e714"],o="Commerce is the new way of shopping. Here highly accurate 3D models of products integrate with Augmented Reality experiences to show the customer a graphic and interactive representation of the product. It is a pleasant consequence of visual commerce. 3D technology allows customers to get in touch with the product, exactly as it happens in store. It offers a new way to interact with products. Customers can view them from any angle, rotate them, zoom in and so on. They can do everything they would do in real life. The opportunities that 3D and AR Commerce offers are innumerable.".split(" "),c=[],s=-1;!function e(){for(var t="",a=0;a<=1200&&s<o.length-1;)t+=" "+o[s+=1],a+=17*(o[s].split("").length+1);c.push(t),s<o.length-1&&e()}();return Object(n.useEffect)((function(){if(a.current){var e=a.current;if(e.width=window.innerWidth,e.height=400,null!=(t=e.getContext("2d"))){for(var n=0;n<70;n++){var r=Math.random()*window.innerWidth,o=Math.random()*e.height,s=Math.random()-.5,u=Math.random()-.5,h=l[(m=0,d=3,Math.floor(Math.random()*(d-m+1)+m))];i.push(new k(r,o,s,u,4,t,window.innerWidth,400,h))}!function e(){var a=[];t.clearRect(0,0,window.innerWidth,400);for(var n=0;n<70;n++){var r=i[n].update();0!==r.size&&a.push(r)}t.lineWidth=.1;for(var l=0;l<a.length;l++)for(var o=a.shift(),s=0;s<a.length;s++){var u=a[s];t.beginPath(),t.moveTo(o.get("x"),o.get("y")),t.lineTo(u.get("x"),u.get("y")),t.strokeStyle="white",t.stroke()}var h=window.innerWidth/7,m=90;t.fillStyle="white",t.font="30pt Times New Roman",t.fillText("3D",h,m),m+=25,t.font="17px Font name";for(var d=0;d<c.length;d++)t.fillText(c[d],h,m+25*d);requestAnimationFrame(e)}()}}var m,d}),[e]),r.a.createElement("canvas",{style:{backgroundColor:"#002a56"},onMouseMove:function(e){S.x=e.clientX,S.y=e.clientY},ref:a})}function T(e){var t,a=Object(n.useRef)(null),i=[],l=["#ed1a1a","#31ed1a","#1a20ed","#d0e714"],o="Commerce is the new way of shopping. Here highly accurate 3D models of products integrate with Augmented Reality experiences to show the customer a graphic and interactive representation of the product. It is a pleasant consequence of visual commerce. 3D technology allows customers to get in touch with the product, exactly as it happens in store. It offers a new way to interact with products. Customers can view them from any angle, rotate them, zoom in and so on. They can do everything they would do in real life. The opportunities that 3D and AR Commerce offers are innumerable.".split(" "),c=[],s=-1;return Object(n.useEffect)((function(){if(a.current){var n=a.current;if(n.width=window.innerWidth,n.height=400,t=n.getContext("2d"),function e(t){for(var a="",n=0;n<=t&&s<o.length-1;)a+=" "+o[s+=1],n+=17*(o[s].split("").length+1);c.push(a),s<o.length-1&&e(t)}(e.longestLine),null!=t){for(var r=0;r<70;r++){var u=Math.random()*window.innerWidth,h=Math.random()*n.height,m=Math.random()-.5,d=Math.random()-.5,f=l[(g=0,p=3,Math.floor(Math.random()*(p-g+1)+g))];i.push(new k(u,h,m,d,4,t,window.innerWidth,400,f))}!function e(){var a=[];t.clearRect(0,0,window.innerWidth,400);for(var n=0;n<70;n++){var r=i[n].update();0!==r.size&&a.push(r)}t.lineWidth=.1;for(var l=0;l<a.length;l++)for(var o=a.shift(),s=0;s<a.length;s++){var u=a[s];t.beginPath(),t.moveTo(o.get("x"),o.get("y")),t.lineTo(u.get("x"),u.get("y")),t.strokeStyle="white",t.stroke()}var h=window.innerWidth/2,m=90;t.textAlign="center",t.fillStyle="white",t.font="30pt Times New Roman",t.fillText("3D",h,m),m+=25,t.font="17px Font name";for(var d=0;d<c.length;d++)t.fillText(c[d],h,m+25*d);requestAnimationFrame(e)}()}}var g,p}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{style:{backgroundColor:"#002a56"},onMouseMove:function(e){S.x=e.clientX,S.y=e.clientY},ref:a}))}function C(e){switch(Object(n.useEffect)((function(){}),[e]),e.responsive){case"mobile":return r.a.createElement(T,{responsive:e.responsive,longestLine:e.longestLine});case"desktop":return r.a.createElement(M,{responsive:e.responsive,longestLine:e.longestLine})}}var A=function(){var e=Object(n.useState)("./texture/wood.jpg"),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)("back"),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement(u.a,null,r.a.createElement(h.a,null),r.a.createElement(h.a,null,r.a.createElement(u.a,{style:{textAlign:"center"}},r.a.createElement(h.a,null,r.a.createElement("h3",null,"Textures"))),r.a.createElement(u.a,null,["./texture/wood.jpg","./texture/wood1.jpg","./texture/wood2.jpg","./texture/wood3.jpg","./texture/grass.jpg","./texture/1.jpg","./texture/2.jpg"].map((function(e){return r.a.createElement(h.a,{xs:3,onClick:function(){!function(e){i(e)}(e)},style:{borderRadius:"6px",backgroundImage:"url(".concat(e,")"),height:"80px"}})})))),r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(y.a,{style:{height:"30rem",width:"34rem"},camera:{position:[0,20,0]}},r.a.createElement("ambientLight",null),r.a.createElement(b,{color:a,changeItem:function(e){m(e)}}),r.a.createElement(w.a,null)),r.a.createElement("h3",{style:{width:"34rem",textAlign:"center"}},s))),r.a.createElement(h.a,null))},R=function(){var e=Object(n.useState)("./texture/wood.jpg"),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)("back"),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginLeft:"10%",width:"80%"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",null,r.a.createElement("h3",null,"Textures"))),r.a.createElement(u.a,null,["./texture/wood.jpg","./texture/wood1.jpg","./texture/wood2.jpg","./texture/wood3.jpg","./texture/grass.jpg","./texture/1.jpg","./texture/2.jpg"].map((function(e){return r.a.createElement(h.a,{xs:3,onClick:function(){!function(e){i(e)}(e)},style:{borderRadius:"6px",backgroundImage:"url(".concat(e,")"),height:"80px"}})})))),r.a.createElement("div",null,r.a.createElement("div",{style:{marginLeft:"5%",width:"90%"}},r.a.createElement("div",{style:{textAlign:"center",borderRadius:"5px",borderWidth:"2px",borderStyle:"solid",borderColor:"#bac5d1"}},r.a.createElement(y.a,{style:{height:"30rem",width:"100%"},camera:{position:[0,20,0]}},r.a.createElement("ambientLight",null),r.a.createElement(b,{color:a,changeItem:function(e){m(e)}}),r.a.createElement(w.a,null)),r.a.createElement("h3",null,s)))))};function L(){var e=Object(n.useState)("desktop"),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(100),o=Object(c.a)(l,2),s=o[0],u=o[1],h=Object(n.useState)("./texture/wood.jpg"),m=Object(c.a)(h,2),d=(m[0],m[1],Object(n.useState)("back")),f=Object(c.a)(d,2),g=(f[0],f[1],Object(n.useState)(r.a.createElement(A,null))),p=Object(c.a)(g,2),E=p[0],y=p[1];return Object(n.useEffect)((function(){function e(){window.innerWidth<960?(a="mobile",y(r.a.createElement(R,null))):(a="desktop",y(r.a.createElement(A,null))),i(a),u(1.4*window.innerWidth)}window.addEventListener("resize",e),e()}),[]),r.a.createElement("div",null,r.a.createElement(C,{responsive:a,longestLine:s}),r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"Demo"),E),r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center"}},"Show Room")))}var W=a(16),I=a(31),P=(a(74),["color","size","scale","children"]);function D(e){var t=e.color,a=e.size,n=e.scale,i=e.children,l=Object(W.a)(e,P);return r.a.createElement("mesh",Object.assign({scale:n},l),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:a}),r.a.createElement("meshPhongMaterial",{attach:"material",color:t}),i)}function z(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)("blue"),s=Object(c.a)(o,2),u=s[0],h=s[1];return r.a.createElement(I.c,{onHover:function(){return l(!0)},onBlur:function(){return l(!1)},onSelect:function(){h(16777215*Math.random()|0)}},r.a.createElement(D,Object.assign({color:u,scale:i?[.6,.6,.6]:[.5,.5,.5],size:[.4,.1,.1]},e),"Hello react-xr!"))}function F(){return r.a.createElement("div",null,r.a.createElement(I.a,null,r.a.createElement("ambientLight",null),r.a.createElement("pointLight",{position:[10,10,10]}),r.a.createElement(z,{position:[0,.1,-.2]}),r.a.createElement(I.b,null)))}var N={x:0,y:0},H=function(){function e(t,a,n,r,i,l,o,c,s){Object(j.a)(this,e),this.x=void 0,this.y=void 0,this.dx=void 0,this.dy=void 0,this.radius=1,this.c=void 0,this.w=void 0,this.h=void 0,this.color=void 0,this.maxRadius=10,this.x=t,this.y=a,this.dx=n,this.dy=r,this.c=l,this.w=o,this.h=c,this.color=s}return Object(O.a)(e,[{key:"update",value:function(){(this.x+this.radius>this.w||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>this.h||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy;var e=new Map;return this.x>N.x-150&&this.x<N.x+150&&this.y>N.y-150&&this.y<N.y+150&&(e.set("x",this.x),e.set("y",this.y)),this.draw(),e}},{key:"draw",value:function(){this.c.beginPath(),this.c.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.c.strokeStyle="white",this.c.stroke(),this.c.fillStyle="white",this.c.fill()}}]),e}();function q(){var e,t=Object(n.useRef)(null),a=[],i=["#ed1a1a","#31ed1a","#1a20ed","#d0e714"];return Object(n.useEffect)((function(){if(t.current){var n=t.current;if(n.width=window.innerWidth,n.height=700,null!=(e=n.getContext("2d"))){for(var r=0;r<70;r++){var l=Math.random()*window.innerWidth,o=Math.random()*n.height,c=Math.random()-.5,s=Math.random()-.5,u=i[(h=0,m=3,Math.floor(Math.random()*(m-h+1)+h))];a.push(new H(l,o,c,s,4,e,window.innerWidth,700,u))}!function t(){var n=[];e.clearRect(0,0,window.innerWidth,700);for(var r=0;r<70;r++){var i=a[r].update();0!==i.size&&n.push(i)}for(var l=0;l<n.length;l++)for(var o=n.shift(),c=0;c<n.length;c++){var s=n[c];e.beginPath(),e.moveTo(o.get("x"),o.get("y")),e.lineTo(s.get("x"),s.get("y")),e.strokeStyle="#19ffff",e.stroke()}requestAnimationFrame(t)}()}}var h,m}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{style:{backgroundColor:"#002a56"},onMouseMove:function(e){N.x=e.clientX,N.y=e.clientY},ref:t}))}function B(){return r.a.createElement(s.a,null,r.a.createElement(g,null),r.a.createElement(n.Suspense,{fallback:null},r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:p}),r.a.createElement(E.a,{path:"/product",component:L}),r.a.createElement(E.a,{path:"/ar",component:F}),r.a.createElement(E.a,{path:"/animation",component:q}))))}l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.fd5a415c.chunk.js.map