(this.webpackJsonpstuff=this.webpackJsonpstuff||[]).push([[0],{24:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t(4),i=t(6),o=t(5),c=t(7),l=t(0),u=t.n(l),s=t(11),d=t.n(s),f=t(21),h=t(1),m=t(2),p={screenSizes:{MOBILE:"600px"},colours:{DARKEST_PURPLE:"#2c0b40",EVEN_DARKER_PURPLE:"#6c3096",DARKER_PURPLE:"#9866cc",DARK_PURPLE:"#aa84d1",LOW_OPC_PURPLE:"rgba(66, 24, 84, 0.5)",TYPING_PURPLE:"#d7abff",LIGHT_PURPLE:"#f5ebff",LIGHTER_PURPLE:"#fbf7ff",GRAY:"#4d4d4d",DARK_GRAY:"#383838",LIGHT_GRAY:"#e0e0e0",LOW_OPC_GRAY:"rgba(50, 50, 50, 0.5)",LOW_OPC_BLACK:"rgba(0, 0, 0, 0.5)",TAN:"#CCA056"},NAVBAR_HEIGHT:"80px"},g=p.screenSizes,b=p.colours,E=p;function w(){var n=Object(h.a)(["\n  background-color: transparent;\n  border: 1px solid ",";\n  line-height: 34px;\n  color: white;\n  padding: 1%;\n  font-family: Verdana, sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  \n"]);return w=function(){return n},n}function v(){var n=Object(h.a)(["\n  text-align: center;\n  grid-column: 1;\n  grid-row: 5;\n  margin: 0px 10px;\n\n  @media all and (min-width: ",") {\n    grid-column: 2 /span 3;\n    grid-row: 4;\n    margin: 0;\n    text-align: left;\n  }\n"]);return v=function(){return n},n}var x=["Hello world",":DDDD","I like Javascript","Contest programming/algorithm is hard","This website took me so long to make from scratch (no template)","I wish I knew the existence of Next.js before finishing the entire site","Frontend is hmmmmm","I like backend better :D","I like food, lots of different food","This typing component is cool","I never thought I'd one day use classes in JS (not prototypes)"],O=m.a.div(v(),g.MOBILE),j=m.a.span(w(),b.TYPING_PURPLE),I=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).state={typedWord:"",addingLetters:!0},t.adding={id:"",speed:100},t.deleting={id:"",speed:function(){return Math.floor(20*Math.random())+20}},t.signatures=x,t.used=[],t.curIndex=[Math.floor(Math.random()*t.signatures.length),0],t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"newIndex",value:function(){if(this.used.push(this.curIndex[0]),this.used.length===this.signatures.length)return this.used=[],Math.floor(Math.random()*this.signatures.length);for(var n=Math.floor(Math.random()*this.signatures.length);-1!==this.used.indexOf(n);)n=Math.floor(Math.random()*this.signatures.length);return n}},{key:"addingLetters",value:function(){var n=this;this.curIndex[1]-1===this.signatures[this.curIndex[0]].length?(this.setState((function(n){return{addingLetters:!1}})),clearInterval(this.typingID),this.typingID=setInterval((function(){n.updateLetters()}),this.deleting.speed())):this.curIndex[1]++}},{key:"deletingLetters",value:function(){var n=this;1===this.curIndex[1]?(this.setState((function(n){return{addingLetters:!0}})),this.curIndex[0]=this.newIndex(),clearInterval(this.typingID),this.typingID=setInterval((function(){n.updateLetters()}),this.adding.speed)):this.curIndex[1]--}},{key:"updateLetters",value:function(){var n=this;this.state.addingLetters?this.addingLetters():this.deletingLetters(),this.setState((function(e){return{typedWord:n.signatures[n.curIndex[0]].slice(0,n.curIndex[1])}}))}},{key:"componentDidMount",value:function(){var n=this;this.typingID=setInterval((function(){n.updateLetters()}),this.adding.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.typingID)}},{key:"render",value:function(){return u.a.createElement(O,null,u.a.createElement(j,null,this.state.typedWord,"|"))}}]),e}(l.Component);function y(){var n=Object(h.a)(["\n  grid-column: 1;\n  grid-row: 4;\n  font-family: Helvetica, Arial, sans-serif;\n  color: white;\n  align-self: end;\n  text-align: center;\n\n  @media all and (min-width: ",") {\n    grid-column: 2 / col-end;\n    grid-row: 3;\n    text-align: left;\n  }\n\n"]);return y=function(){return n},n}function L(){var n=Object(h.a)(["\n  border-radius: 40%;\n  grid-column: 1;\n  grid-row: 2 / span 2;\n  max-width: 100%;\n  max-height: 100%;\n\n  @media all and (min-width: ",") {\n    grid-column: 3;\n    grid-row: 2 / span 2;\n  }\n"]);return L=function(){return n},n}function k(){var n=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n  width: 100%;\n  min-height: 100vh;\n  background-image: radial-gradient(",", ","), url('https://wallpaperaccess.com//full/51426.jpg');\n  background-size: cover;\n\n  \n  @media all and (min-width: ",") {\n    grid-template-columns: 4fr 4fr 2fr 3fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n\n    &:after {\n      grid-column: 1 / span 4;\n    }\n  }\n\n"]);return k=function(){return n},n}var R=m.a.div(k(),b.LOW_OPC_GRAY,b.LOW_OPC_BLACK,g.MOBILE),P=m.a.img(L(),g.MOBILE),_=m.a.div(y(),g.MOBILE),A=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(R,{id:this.props.id,onScroll:function(){console.log("hi")}},u.a.createElement(_,null,u.a.createElement("p",{style:{"font-size":"20px"}},"HELLO, MY NAME IS "),u.a.createElement("p",{style:{"font-size":"80px"}},"Shari Sun")),u.a.createElement(I,null),u.a.createElement(P,{src:"https://d3kqdc25i4tl0t.cloudfront.net/articles/content/92_408268_151204profilepicture_hero.jpg",alt:"uh oh something went wrong D:"}))}}]),e}(l.Component);function D(){var n=Object(h.a)(["\n  font-family: Nunito, sans-serif;\n  font-size: 120%;\n  padding-top: 20px;\n"]);return D=function(){return n},n}function M(){var n=Object(h.a)(["\n  border: 1px solid ",";\n  width: 70%;\n  margin: auto;\n"]);return M=function(){return n},n}function C(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 150%;\n"]);return C=function(){return n},n}function U(){var n=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  font-family: Raleway, sans-serif;\n  color: white;\n  background-color: ",";\n\n  border: 10px solid ",";\n  border-radius: 50px 50px 50px 0px;\n\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  @media all and (min-width: ",") {\n    width: 20%;\n    height: 20%;\n    margin-right: 5%;\n    margin-top: 0;\n\n  }\n"]);return U=function(){return n},n}var B=m.a.div(U(),b.DARK_PURPLE,b.DARK_PURPLE,g.MOBILE),K=m.a.div(C()),H=m.a.hr(M(),b.EVEN_DARKER_PURPLE),S=m.a.div(D()),T=function(n){return u.a.createElement(K,null,u.a.createElement(H,null),n.children,u.a.createElement(H,null))},N=function(n){return u.a.createElement(S,null,n.children)},G=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(B,{id:this.props.id},u.a.createElement(T,null,this.props.heading),u.a.createElement(N,null,this.props.content))}}]),e}(l.Component);function z(){var n=Object(h.a)(["\n  width: 40%;\n  margin: auto;\n  border: 2px solid ",";\n  border-radius: 2px;\n\n  @media all and (min-width: ",") {\n    width: 7%\n    margin: 0;\n  }\n"]);return z=function(){return n},n}function Y(){var n=Object(h.a)(["\n  width: 100%;\n  text-align: center;\n  font-family: Montserrat, Arial, sans-serif;\n  color: ",";\n  font-size: 300%;\n  margin-bottom: 30px;\n\n  @media all and (min-width: ",") {\n    text-align: left;\n    margin-left: 5%;\n  }\n"]);return Y=function(){return n},n}function W(){var n=Object(h.a)(["\n  width: 100%;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 150%;\n  color: ",";\n\n  padding-left: 5%;\n  padding-right: 5%;\n\n  overflow-wrap: break-word;\n\n  @media all and (min-width: ",") {\n    width: 40%\n    padding: 0;\n    margin-left: 5%;\n    margin-right: auto;\n  }\n"]);return W=function(){return n},n}function V(){var n=Object(h.a)(["\n  display: inline-block;\n  color: white;\n  padding: 20px 10px;\n  text-decoration: none;\n  background-color: ",";\n"]);return V=function(){return n},n}function J(){var n=Object(h.a)(["\n  text-align: center;\n  margin-top: 20px;\n"]);return J=function(){return n},n}function F(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  background-color: ",";\n\n  padding-top: ",";\n  padding-bottom: 30px;\n\n  @media all and (min-width: ",") {\n    flex-flow: row wrap;\n  }\n"]);return F=function(){return n},n}var q="NodeJs",Q="I have two weeks of experience\n            flaksdjflasdfjlksfj asdfj las s\n            adf sdf d d df d fd sds f fd f sd\n             adsf as fsd fds fsd fds sd fsdf s",X="Digital Art",Z="I'll change all of these later\n            sadfjasl so hahhah h hh ah\n            sdfsadf fdf hello sdf ssd f\n            sd fsd fsd asdf sdf ds fds ff",$=m.a.div(F(),b.LIGHTER_PURPLE,E.NAVBAR_HEIGHT,g.MOBILE),nn=m.a.p(J()),en=m.a.a(V(),b.DARK_PURPLE),tn=m.a.div(W(),b.EVEN_DARKER_PURPLE,g.MOBILE),rn=m.a.h1(Y(),b.DARK_GRAY,g.MOBILE),an=m.a.hr(z(),b.DARK_PURPLE,g.MOBILE),on=function(n){return u.a.createElement(rn,null,n.children,u.a.createElement(an,null))},cn=function(n){return u.a.createElement(tn,null,"\n  || Hello, there's not much to say about me. I'm currently a grade 11\n  student at RHHS and I like many things. I like drawing, painting,\n  cooking, baking, etc. This September, after going to my first Hackathon,\n  I realized how much I lack in terms of skills. I did not know the existence\n  of servers, dynamic pages, algorithms, etc. I barely knew anything.\n  For the entire time, all I could make was only a .html file with \n  some info and pictures. However, I learned how much I didn't know. After that\n  first week of September, I was motivated to improve and catch up to everyone.\n  I know I'm late by several years, but I'll do whatever I can to catch up :D\n",u.a.createElement(nn,null,u.a.createElement(en,{href:"./resources/resume.txt",target:"_blank"},"Resume")))},ln=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement($,{id:this.props.id},u.a.createElement(on,null,"About Me"),u.a.createElement(cn,null),u.a.createElement(G,{heading:q,content:Q}),u.a.createElement(G,{heading:X,content:Z}))}}]),e}(l.Component);function un(){var n=Object(h.a)(["\n  list-style-type: none;\n"]);return un=function(){return n},n}function sn(){var n=Object(h.a)(["\n  width: 50%;\n  margin: 5px 0 15px 0;\n  border: 1px solid ",";\n  border-radius: 1px;\n"]);return sn=function(){return n},n}function dn(){var n=Object(h.a)(["\n  font-size: 10vw;\n  text-decoration: none;\n  color: ",";\n\n  \n\n  @media all and (min-width: ",") {\n    font-size: 200%;\n\n    &:hover {\n      color: ",";\n      cursor: pointer;\n    }\n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(h.a)(["\n  background-color: white;\n  margin-right: auto;\n  border: 2px solid ",";\n  border-radius: 0 10px 10px 10px;\n  padding: 10px;\n  width: 100%;\n"]);return fn=function(){return n},n}function hn(){var n=Object(h.a)(["\n  background-color: white;\n  font-size: 250%;\n  margin-bottom: auto;\n  margin-left: auto;\n  padding: 0 5px;\n  height: 42%vw;\n  border: 2px solid ",";\n  border-radius: 10px 0 0 0;\n  border-width: 2px 0 2px 2px;\n\n"]);return hn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 10px 10px 30px 10px;\n  width: 100%;\n  font-family: Raleway, sans-serif;\n  text-align: left;\n  \n\n  color: ",";\n  \n  @media all and (min-width: ",") {\n    width: 30%;\n  }\n"]);return mn=function(){return n},n}var pn=m.a.div(mn(),b.EVEN_DARKER_PURPLE,g.MOBILE),gn=m.a.div(hn(),b.DARK_PURPLE),bn=m.a.div(fn(),b.DARK_PURPLE),En=m.a.a(dn(),b.EVEN_DARKER_PURPLE,g.MOBILE,b.DARKEST_PURPLE),wn=m.a.hr(sn(),b.DARK_PURPLE),vn=m.a.ul(un()),xn=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).parseContent=function(){return t.content.map((function(n){return u.a.createElement("li",null,"> "+n)}))},t.content=t.props.content,t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(pn,null,u.a.createElement(gn,null,u.a.createElement("i",{className:this.props.icon})),u.a.createElement(bn,null,u.a.createElement(En,{href:this.props.href,target:"_blank"},this.props.heading),u.a.createElement(wn,null),u.a.createElement(vn,null,this.parseContent())))}}]),e}(l.Component);function On(){var n=Object(h.a)(["\n  margin: auto;\n  width: 150px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  margin-bottom: 50px;\n"]);return On=function(){return n},n}function jn(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 250%;\n  margin-bottom: 10px;\n  font-family: Montserrat, Mukta, sans-serif;\n"]);return jn=function(){return n},n}function In(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  margin: auto;\n  text-align: center;\n  max-width: 1400px;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  @media all and (min-width: ",") {\n    flex-flow: row wrap;\n  }\n"]);return In=function(){return n},n}function yn(){var n=Object(h.a)(["\n  padding-top: ",";\n  padding-bottom: 50px;\n  background-color: ",";\n"]);return yn=function(){return n},n}var Ln=m.a.div(yn(),E.NAVBAR_HEIGHT,b.LIGHT_PURPLE),kn=m.a.div(In(),g.MOBILE),Rn=m.a.div(jn()),Pn=m.a.hr(On(),b.TYPING_PURPLE),_n={icon:"fa fa-code",heading:"The STEAM project",content:["Camp counsellor","Junior robotics instructor"],href:"http://www.thesteamproject.ca"},An={icon:"fa fa-code",heading:"Hatch Canada",content:["Leader In Training (LIT) program coordinator","Project creator/editor","Alpha curriculum (Gr9+) developer"],href:"http://www.hatchcoding.com"},Dn={icon:"fa fa-code",heading:"Dairy Queen",content:["Basic crew member"]},Mn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(Ln,{id:this.props.id},u.a.createElement(Rn,null,"Things I've Done"),u.a.createElement(Pn,null),u.a.createElement(kn,null,u.a.createElement(xn,{icon:_n.icon,heading:_n.heading,content:_n.content,href:_n.href}),u.a.createElement(xn,{icon:An.icon,heading:An.heading,content:An.content,href:An.href}),u.a.createElement(xn,{icon:Dn.icon,heading:Dn.heading,content:Dn.content})))}}]),e}(l.Component);function Cn(){var n=Object(h.a)(["\n  width: 5%;\n  margin: auto;\n  border: 1px solid white;\n  border-radius: 2px;\n  margin-bottom: 10px;\n"]);return Cn=function(){return n},n}function Un(){var n=Object(h.a)(["\n  font-size: 300%;\n  margin: 10px;\n  color: white;\n\n  &:hover {\n    color: gray;\n    transition: color 500ms ease;\n  }\n"]);return Un=function(){return n},n}function Bn(){var n=Object(h.a)(["\n  font-family: Nunito, sans-serif;\n  font-size: 240%;\n  width: 100%;\n"]);return Bn=function(){return n},n}function Kn(){var n=Object(h.a)(["\n  max-width: 1400px;\n  text-align: center;\n  margin: auto;\n  color: white;\n"]);return Kn=function(){return n},n}function Hn(){var n=Object(h.a)(["\n  padding: 50px 10px 30px 10px;\n  background-color: ",";\n"]);return Hn=function(){return n},n}var Sn=m.a.div(Hn(),b.DARK_GRAY),Tn=m.a.div(Kn()),Nn=m.a.p(Bn()),Gn=m.a.i(Un()),zn=m.a.hr(Cn()),Yn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(Sn,{id:this.props.id},u.a.createElement(Tn,null,u.a.createElement(Nn,null,"Contact Me"),u.a.createElement(zn,null),u.a.createElement("a",{href:"https://www.instagram.com/shari09x/",target:"_blank"},u.a.createElement(Gn,{className:"fa fa-instagram"})),u.a.createElement("a",{href:"https://github.com/shari09",target:"_blank"},u.a.createElement(Gn,{className:"fa fa-github"})),u.a.createElement("a",{href:"mailto: shari.s093w@gmail.com subject=subject text"},u.a.createElement(Gn,{className:"fa fa-envelope"}))))}}]),e}(l.Component),Wn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{id:"homePage"},u.a.createElement(A,{id:"home"}),u.a.createElement(ln,{id:"aboutMe"}),u.a.createElement(Mn,{id:"experience"}))}}]),e}(l.Component);function Vn(){var n=Object(h.a)(["\n  display: none;\n  \n  @media all and (min-width: ",") {\n    display: block;\n    width: 70px;\n    order: 3;\n  }\n\n"]);return Vn=function(){return n},n}function Jn(){var n=Object(h.a)(["\n  color: white;\n  margin-left: 20px;\n  font-size: 25px;\n  \n  @media all and (min-width: ",") {\n    order: 0;\n    margin-right: auto;\n    margin-left: 20%;\n  }\n"]);return Jn=function(){return n},n}function Fn(){var n=Object(h.a)(["\n  padding: 20px 10px;\n  \n  color: white;\n  text-decoration: none;\n  display: block;\n\n  @media all and (max-width: ",") {\n    background-color: ",";\n  }\n\n"]);return Fn=function(){return n},n}function qn(){var n=Object(h.a)(["\n  font-size: 20px;\n  white-space: nowrap;\n\n  order: 2;\n  text-align: center;\n  width: 100%;\n  display: ",";\n  \n\n  &:hover {\n    background-color: ",";\n    transition: background-color 300ms ease;\n    cursor: pointer;\n    border: ",";\n    transition: border 300ms ease;\n  }\n\n  @media all and (min-width: ",") {\n    width: auto;\n    display: block;\n    order: 1;\n  }\n"]);return qn=function(){return n},n}function Qn(){var n=Object(h.a)(["\n  font-size: 25px;\n  order: 1;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media all and (min-width: ",") {\n    display: none;\n  }\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(h.a)(["\n  font-family: Helvetica, Arial, sans-serif;\n  box-shadow: 0 0 4px ",";\n  background-color: ",";\n  transition: background-color 500ms ease;\n  position: fixed;\n  width: 100%;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(h.a)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  \n"]);return Zn=function(){return n},n}var $n={home:"Home",aboutMe:"About Me",experience:"Experience",contact:"Contact"},ne=m.a.ul(Zn()),ee=m.a.nav(Xn(),b.DARK_GRAY,(function(n){return n.transparent?"transparent":b.DARK_PURPLE})),te=m.a.li(Qn(),g.MOBILE),re=function(n){return u.a.createElement("div",{onClick:n.onClick},u.a.createElement(te,null,u.a.createElement(ie,null,u.a.createElement("i",{className:n.toggle?"fa fa-times":"fa fa-bars"}))))},ae=m.a.li(qn(),(function(n){return n.toggle?"block":"none"}),(function(n){return n.transparent?"transparent":b.DARKER_PURPLE}),(function(n){return n.transparent?"1px solid "+b.DARKER_PURPLE:"none"}),g.MOBILE),ie=m.a.a(Fn(),g.MOBILE,(function(n){return n.transparent?b.LOW_OPC_BLACK:""})),oe=function(n){return u.a.createElement(ae,{toggle:n.toggle,transparent:n.transparent},u.a.createElement(ie,{onClick:n.onClick,href:n.href,transparent:n.transparent},n.children))},ce=function(n){return u.a.createElement(ae,{toggle:n.toggle,transparent:n.transparent},u.a.createElement(ie,{onClick:n.onClick,href:n.href,transparent:n.transparent},n.children))},le=m.a.li(Jn(),g.MOBILE),ue=m.a.div(Vn(),g.MOBILE),se=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).toggleDisplay=function(){t.setState((function(n){return{toggle:!n.toggle}}))},t.collapse=function(){t.setState((function(n){return{toggle:!1}}))},t.toggleColourSettings=function(){(document.body.scrollTop||document.documentElement.scrollTop)>=window.innerHeight?t.setState((function(n){return{transparent:!1}})):t.setState((function(n){return{transparent:!0}}))},t.componentDidMount=function(){window.addEventListener("scroll",t.toggleColourSettings),window.addEventListener("scroll",t.collapse)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.toggleColourSettings),window.addEventListener("scroll",t.collapse)},t.state={toggle:!1,transparent:!0},t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"getItems",value:function(n){var e=[];for(var t in n)"experience"!==t?e.push(u.a.createElement(oe,{onClick:this.toggleDisplay,toggle:this.state.toggle,transparent:this.state.transparent,href:"#"+t},n[t])):e.push(u.a.createElement(ce,{onClick:this.toggleDisplay,toggle:this.state.toggle,transparent:this.state.transparent,href:"#"+t},n[t]));return e}},{key:"render",value:function(){return u.a.createElement(ee,{transparent:this.state.transparent},u.a.createElement(ne,null,u.a.createElement(le,null,"Shari"),this.getItems($n),u.a.createElement(re,{onClick:this.toggleDisplay,toggle:this.state.toggle}),u.a.createElement(ue,null)))}}]),e}(l.Component),de=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(se,null),u.a.createElement(Wn,null),u.a.createElement(Yn,{id:"contact"}))}}]),e}(l.Component),fe=document.getElementById("root");d.a.render(u.a.createElement(f.a,{basename:"/portfolio"},u.a.createElement(de,null)),fe)}},[[24,1,2]]]);
//# sourceMappingURL=main.5d6816a7.chunk.js.map