(this.webpackJsonpstuff=this.webpackJsonpstuff||[]).push([[0],{24:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t(4),i=t(6),o=t(5),c=t(7),l=t(0),u=t.n(l),s=t(11),d=t.n(s),f=t(21),h=t(1),p=t(2),m={screenSizes:{MOBILE:"600px"},colours:{DARKEST_PURPLE:"#2c0b40",EVEN_DARKER_PURPLE:"#6c3096",DARKER_PURPLE:"#9866cc",DARK_PURPLE:"#aa84d1",LOW_OPC_PURPLE:"rgba(66, 24, 84, 0.5)",TYPING_PURPLE:"#d7abff",LIGHT_PURPLE:"#f5ebff",LIGHTER_PURPLE:"#fbf7ff",GRAY:"#4d4d4d",DARK_GRAY:"#383838",LIGHT_GRAY:"#e0e0e0",LOW_OPC_GRAY:"rgba(50, 50, 50, 0.5)",LOW_OPC_BLACK:"rgba(0, 0, 0, 0.5)",LIGHTER_BLUE:"#eeeff7",BLUE_GRAY:"#d8dbed",DARK_BLUE:"#2c377d",SOME_BLUE:"#5d6bc9",DARKER_BLUE:"#283273"},NAVBAR_HEIGHT:"80px"},g=m.screenSizes,b=m.colours,E=m;function w(){var n=Object(h.a)(["\n  background-color: transparent;\n  border: 1px solid ",";\n  line-height: 34px;\n  color: white;\n  padding: 1%;\n  font-family: Verdana, sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  \n"]);return w=function(){return n},n}function v(){var n=Object(h.a)(["\n  text-align: center;\n  margin: 0px 10px;\n\n  @media all and (min-width: ",") {\n    margin: 0;\n    text-align: left;\n  }\n"]);return v=function(){return n},n}var x=["Hello world",":DDDD","I like Javascript","Contest programming/algorithm is hard","This website took me so long to make from scratch (no template)","I wish I knew the existence of Next.js before finishing the entire site","Frontend is hmmmmm","I like taking pictures :)","I like backend better :D","I like food, lots of different food","This typing component is cool","I never thought I'd one day use classes in JS (not prototypes)"],O=p.a.div(v(),g.MOBILE),j=p.a.span(w(),b.TYPING_PURPLE),y=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).state={typedWord:"",addingLetters:!0},t.adding={id:"",speed:100},t.deleting={id:"",speed:function(){return Math.floor(20*Math.random())+20}},t.signatures=x,t.used=[],t.curIndex=[Math.floor(Math.random()*t.signatures.length),0],t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"newIndex",value:function(){if(this.used.push(this.curIndex[0]),this.used.length===this.signatures.length)return this.used=[],Math.floor(Math.random()*this.signatures.length);for(var n=Math.floor(Math.random()*this.signatures.length);-1!==this.used.indexOf(n);)n=Math.floor(Math.random()*this.signatures.length);return n}},{key:"addingLetters",value:function(){var n=this;this.curIndex[1]-1===this.signatures[this.curIndex[0]].length?(this.setState((function(n){return{addingLetters:!1}})),clearInterval(this.typingID),this.typingID=setInterval((function(){n.updateLetters()}),this.deleting.speed())):this.curIndex[1]++}},{key:"deletingLetters",value:function(){var n=this;1===this.curIndex[1]?(this.setState((function(n){return{addingLetters:!0}})),this.curIndex[0]=this.newIndex(),clearInterval(this.typingID),this.typingID=setInterval((function(){n.updateLetters()}),this.adding.speed)):this.curIndex[1]--}},{key:"updateLetters",value:function(){var n=this;this.state.addingLetters?this.addingLetters():this.deletingLetters(),this.setState((function(e){return{typedWord:n.signatures[n.curIndex[0]].slice(0,n.curIndex[1])}}))}},{key:"componentDidMount",value:function(){var n=this;this.typingID=setInterval((function(){n.updateLetters()}),this.adding.speed)}},{key:"componentWillUnmount",value:function(){clearInterval(this.typingID)}},{key:"render",value:function(){return u.a.createElement(O,null,u.a.createElement(j,null,this.state.typedWord,"|"))}}]),e}(l.Component);function I(){var n=Object(h.a)(["\n  \n  font-family: Helvetica, Arial, sans-serif;\n  color: white;\n  align-self: end;\n  text-align: center;\n\n  @media all and (min-width: ",") {\n    grid-column: 2 ;\n    grid-row: 3;\n    text-align: left;\n  }\n\n"]);return I=function(){return n},n}function L(){var n=Object(h.a)(["\n  grid-column: 1;\n  grid-row: 4;\n  align-self: center;\n\n  @media all and (min-width: ",") {\n    grid-column: 2;\n    grid-row: 2 / span 2;\n  }\n\n"]);return L=function(){return n},n}function R(){var n=Object(h.a)(["\n  border-radius: 40%;\n  grid-column: 1;\n  grid-row: 2 / span 2;\n  max-width: 98%;\n  max-height: 100%;\n  justify-self: center;\n  \n\n  @media all and (min-width: ",") {\n    grid-column: 1;\n    grid-row: 2 / span 2;\n    justify-self: end;\n  }\n"]);return R=function(){return n},n}function k(){var n=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 20px;\n  width: 100%;\n  height: 100vh;\n  background-image: radial-gradient(",", ","), url('https://wallpaperaccess.com//full/51426.jpg');\n  background-size: cover;\n\n  \n  @media all and (min-width: ",") {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n  }\n\n"]);return k=function(){return n},n}var _=p.a.div(k(),b.LOW_OPC_GRAY,b.LOW_OPC_BLACK,g.MOBILE),A=p.a.img(R(),g.MOBILE),P=p.a.div(L(),g.MOBILE),D=p.a.div(I(),g.MOBILE),M=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(_,{id:this.props.id,onScroll:function(){console.log("hi")}},u.a.createElement(P,null,u.a.createElement(D,null,u.a.createElement("p",{style:{"font-size":"20px"}},"HELLO, MY NAME IS "),u.a.createElement("p",{style:{"font-size":"80px"}},"Shari Sun")),u.a.createElement(y,null)),u.a.createElement(A,{src:"./me.jpg",alt:"uh oh something went wrong D:"}))}}]),e}(l.Component);function B(){var n=Object(h.a)(["\n  font-family: Nunito, sans-serif;\n  font-size: 120%;\n  padding-top: 20px;\n"]);return B=function(){return n},n}function C(){var n=Object(h.a)(["\n  border: 1px solid ",";\n  width: 70%;\n  margin: auto;\n"]);return C=function(){return n},n}function U(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 150%;\n"]);return U=function(){return n},n}function K(){var n=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  font-family: Raleway, sans-serif;\n  color: white;\n  background-color: ",";\n\n  border: 4px solid ",";\n  border-radius: 50px 50px 50px 0px;\n  border-shadow: ",";\n\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  @media all and (min-width: ",") {\n    width: 20%;\n    height: 20%;\n    margin-right: 5%;\n    margin-top: 0;\n\n  }\n"]);return K=function(){return n},n}var S=p.a.div(K(),b.SOME_BLUE,b.DARKER_BLUE,b.GRAY,g.MOBILE),H=p.a.div(U()),G=p.a.hr(C(),b.DARKER_BLUE),T=p.a.div(B()),z=function(n){return u.a.createElement(H,null,n.children,u.a.createElement(G,null))},N=function(n){return u.a.createElement(T,null,n.children)},Y=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(S,{id:this.props.id},u.a.createElement(z,null,this.props.heading),u.a.createElement(N,null,this.props.content))}}]),e}(l.Component);function W(){var n=Object(h.a)(["\n  width: 40%;\n  margin: auto;\n  border: 2px solid ",";\n  border-radius: 2px;\n\n  @media all and (min-width: ",") {\n    width: 7%\n    margin: 0;\n  }\n"]);return W=function(){return n},n}function V(){var n=Object(h.a)(["\n  width: 100%;\n  text-align: center;\n  font-family: Montserrat, Arial, sans-serif;\n  color: ",";\n  font-size: 300%;\n  margin-bottom: 30px;\n\n  @media all and (min-width: ",") {\n    text-align: left;\n    margin-left: 5%;\n  }\n"]);return V=function(){return n},n}function J(){var n=Object(h.a)(["\n  width: 100%;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 150%;\n  color: ",";\n\n  padding-left: 5%;\n  padding-right: 5%;\n\n  overflow-wrap: break-word;\n\n  @media all and (min-width: ",") {\n    width: 40%\n    padding: 0;\n    margin-left: 5%;\n    margin-right: auto;\n  }\n"]);return J=function(){return n},n}function F(){var n=Object(h.a)(["\n  display: inline-block;\n  color: white;\n  padding: 20px 10px;\n  text-decoration: none;\n  background-color: ",";\n"]);return F=function(){return n},n}function Q(){var n=Object(h.a)(["\n  text-align: center;\n  margin-top: 20px;\n"]);return Q=function(){return n},n}function q(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  background-color: ",";\n\n  padding-top: ",";\n  padding-bottom: 30px;\n\n  @media all and (min-width: ",") {\n    flex-flow: row wrap;\n  }\n"]);return q=function(){return n},n}var X="Web App",Z="Although inexperienced, I have some experience\n            with web app developing. In the future, I'm planning\n            on creating a mobile app using React-Native so please\n            look forward to it!\n            ",$="Misc",nn="During my free time, I enjoy spending \n            time with my friends. We watch movies, go \n            out to places to eat, shop, play sports, etc.\n            I also do drawing and likes to play ping pong\n            with my brother (occasinally). If you ever want\n            a chat, feel free to contact me! \n            ",en=p.a.div(q(),b.BLUE_GRAY,E.NAVBAR_HEIGHT,g.MOBILE),tn=p.a.p(Q()),rn=p.a.a(F(),b.DARKER_BLUE),an=p.a.div(J(),b.DARK_BLUE,g.MOBILE),on=p.a.h1(V(),b.DARK_GRAY,g.MOBILE),cn=p.a.hr(W(),b.SOME_BLUE,g.MOBILE),ln=function(n){return u.a.createElement(on,null,n.children,u.a.createElement(cn,null))},un=function(n){return u.a.createElement(an,null,"\n  Hello, I don't really know what to say about me. I'm currently a grade 11\n  student at RHHS and I like many things. I like drawing, painting,\n  cooking, baking, etc. This September, after going to my first Hackathon,\n  I realized how much I lack in terms of skills. I did not know the existence\n  of servers, dynamic pages, algorithms, etc. I barely knew anything.\n  For the entire time, all I could make was only a .html file with \n  some info and pictures. However, I learned how much I didn't know. After that\n  first week of September, I was motivated to improve and catch up to everyone.\n  I know I'm late by several years, but I'll do whatever I can to catch up :D\n",u.a.createElement(tn,null,u.a.createElement(rn,{href:"./resources/exit_resume.pdf",target:"_blank"},"Resume")))},sn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(en,{id:this.props.id},u.a.createElement(ln,null,"About Me"),u.a.createElement(un,null),u.a.createElement(Y,{heading:X,content:Z}),u.a.createElement(Y,{heading:$,content:nn}))}}]),e}(l.Component);function dn(){var n=Object(h.a)(["\n  font-size: 70%;\n  font-family: sans-serif;\n  margin-left: 10px;\n  color: ",";\n"]);return dn=function(){return n},n}function fn(){var n=Object(h.a)(["\n  list-style-type: none;\n"]);return fn=function(){return n},n}function hn(){var n=Object(h.a)(["\n  width: 50%;\n  margin: 5px 0 15px 0;\n  border: 1px solid ",";\n  border-radius: 1px;\n"]);return hn=function(){return n},n}function pn(){var n=Object(h.a)(["\n  font-size: 10vw;\n  text-decoration: none;\n  color: ",";\n\n  \n\n  @media all and (min-width: ",") {\n    font-size: 200%;\n\n    &:hover {\n      color: ",";\n      cursor: pointer;\n    }\n  }\n"]);return pn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  background-color: white;\n  margin-right: auto;\n  border: 2px solid ",";\n  border-radius: 0 10px 10px 10px;\n  padding: 10px;\n  width: 100%;\n"]);return mn=function(){return n},n}function gn(){var n=Object(h.a)(["\n  background-color: white;\n  font-size: 250%;\n  margin-bottom: auto;\n  margin-left: auto;\n  padding: 0 5px;\n  height: 42%vw;\n  border: 2px solid ",";\n  border-radius: 10px 0 0 0;\n  border-width: 2px 0 2px 2px;\n\n"]);return gn=function(){return n},n}function bn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 10px 10px 30px 10px;\n  width: 100%;\n  font-family: Raleway, sans-serif;\n  text-align: left;\n  \n\n  color: ",";\n  \n  @media all and (min-width: ",") {\n    width: 30%;\n  }\n"]);return bn=function(){return n},n}var En=p.a.div(bn(),b.EVEN_DARKER_PURPLE,g.MOBILE),wn=p.a.div(gn(),b.DARKER_PURPLE),vn=p.a.div(mn(),b.DARKER_PURPLE),xn=p.a.a(pn(),b.EVEN_DARKER_PURPLE,g.MOBILE,b.DARKEST_PURPLE),On=p.a.hr(hn(),b.DARKER_PURPLE),jn=p.a.ul(fn()),yn=p.a.div(dn(),b.DARK_PURPLE),In=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).parseContent=function(){return t.content.map((function(n){return u.a.createElement("li",null,"> "+n)}))},t.content=t.props.content,t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(En,null,u.a.createElement(wn,null,u.a.createElement("i",{className:this.props.icon})),u.a.createElement(vn,null,u.a.createElement(xn,{href:this.props.href,target:"_blank"},this.props.heading),u.a.createElement(yn,null,this.props.date),u.a.createElement(On,null),u.a.createElement(jn,null,this.parseContent())))}}]),e}(l.Component);function Ln(){var n=Object(h.a)(["\n  margin: auto;\n  width: 150px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  margin-bottom: 50px;\n"]);return Ln=function(){return n},n}function Rn(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: 250%;\n  color: ",";\n  margin-bottom: 10px;\n  font-family: Montserrat, Mukta, sans-serif;\n"]);return Rn=function(){return n},n}function kn(){var n=Object(h.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  margin: auto;\n  text-align: center;\n  max-width: 1400px;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  @media all and (min-width: ",") {\n    flex-flow: row wrap;\n  }\n"]);return kn=function(){return n},n}function _n(){var n=Object(h.a)(["\n  padding-top: ",";\n  padding-bottom: 50px;\n  background-color: ",";\n"]);return _n=function(){return n},n}var An=p.a.div(_n(),E.NAVBAR_HEIGHT,b.LIGHTER_BLUE),Pn=p.a.div(kn(),g.MOBILE),Dn=p.a.div(Rn(),b.EVEN_DARKER_PURPLE),Mn=p.a.hr(Ln(),b.DARKER_PURPLE),Bn={icon:"fa fa-code",heading:"The STEAM project",date:"July 2019 - present",content:["Camp counsellor","Junior robotics instructor"],href:"http://www.thesteamproject.ca"},Cn={icon:"fa fa-code",heading:"Hatch Canada",date:"Nov 2019 - present",content:["Leader In Training (LIT) program coordinator","Project creator/editor","Alpha curriculum (Gr9+) developer"],href:"./resources/presentation.pdf"},Un={icon:"fa fa-code",heading:"Dairy Queen",date:"July 2019 - Aug 2019",content:["Basic crew member"]},Kn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(An,{id:this.props.id},u.a.createElement(Dn,null,u.a.createElement("b",null,"Things I've Done")),u.a.createElement(Mn,null),u.a.createElement(Pn,null,u.a.createElement(In,{icon:Bn.icon,heading:Bn.heading,date:Bn.date,content:Bn.content,href:Bn.href}),u.a.createElement(In,{icon:Cn.icon,heading:Cn.heading,date:Cn.date,content:Cn.content,href:Cn.href}),u.a.createElement(In,{icon:Un.icon,heading:Un.heading,date:Un.date,content:Un.content})))}}]),e}(l.Component);function Sn(){var n=Object(h.a)(["\n  width: 5%;\n  margin: auto;\n  border: 1px solid white;\n  border-radius: 2px;\n  margin-bottom: 10px;\n"]);return Sn=function(){return n},n}function Hn(){var n=Object(h.a)(["\n  font-size: 300%;\n  margin: 10px;\n  color: white;\n\n  &:hover {\n    color: gray;\n    transition: color 500ms ease;\n  }\n"]);return Hn=function(){return n},n}function Gn(){var n=Object(h.a)(["\n  font-family: Nunito, sans-serif;\n  font-size: 240%;\n  width: 100%;\n"]);return Gn=function(){return n},n}function Tn(){var n=Object(h.a)(["\n  max-width: 1400px;\n  text-align: center;\n  margin: auto;\n  color: white;\n"]);return Tn=function(){return n},n}function zn(){var n=Object(h.a)(["\n  padding: 50px 10px 30px 10px;\n  background-color: ",";\n"]);return zn=function(){return n},n}var Nn=p.a.div(zn(),b.DARK_GRAY),Yn=p.a.div(Tn()),Wn=p.a.p(Gn()),Vn=p.a.i(Hn()),Jn=p.a.hr(Sn()),Fn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement(Nn,{id:this.props.id},u.a.createElement(Yn,null,u.a.createElement(Wn,null,"Contact Me"),u.a.createElement(Jn,null),u.a.createElement("a",{href:"https://www.instagram.com/shari09x/",target:"_blank"},u.a.createElement(Vn,{className:"fa fa-instagram"})),u.a.createElement("a",{href:"https://github.com/shari09",target:"_blank"},u.a.createElement(Vn,{className:"fa fa-github"})),u.a.createElement("a",{href:"mailto: shari.s093w@gmail.com subject=subject text"},u.a.createElement(Vn,{className:"fa fa-envelope"}))))}}]),e}(l.Component),Qn=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{id:"homePage"},u.a.createElement(M,{id:"home"}),u.a.createElement(sn,{id:"aboutMe"}),u.a.createElement(Kn,{id:"experience"}))}}]),e}(l.Component);function qn(){var n=Object(h.a)(["\n  display: none;\n  \n  @media all and (min-width: ",") {\n    display: block;\n    width: 70px;\n    order: 3;\n  }\n\n"]);return qn=function(){return n},n}function Xn(){var n=Object(h.a)(["\n  color: white;\n  margin-left: 20px;\n  font-size: 25px;\n  \n  @media all and (min-width: ",") {\n    order: 0;\n    margin-right: auto;\n    margin-left: 20%;\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(h.a)(["\n  padding: 20px 10px;\n  \n  color: white;\n  text-decoration: none;\n  display: block;\n\n  @media all and (max-width: ",") {\n    background-color: ",";\n  }\n\n"]);return Zn=function(){return n},n}function $n(){var n=Object(h.a)(["\n  font-size: 20px;\n  white-space: nowrap;\n\n  order: 2;\n  text-align: center;\n  width: 100%;\n  display: ",";\n  \n\n  &:hover {\n    background-color: ",";\n    transition: background-color 300ms ease;\n    cursor: pointer;\n    border: ",";\n    transition: border 300ms ease;\n  }\n\n  @media all and (min-width: ",") {\n    width: auto;\n    display: block;\n    order: 1;\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Object(h.a)(["\n  font-size: 25px;\n  order: 1;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @media all and (min-width: ",") {\n    display: none;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(h.a)(["\n  font-family: Helvetica, Arial, sans-serif;\n  box-shadow: 0 0 4px ",";\n  background-color: ",";\n  transition: background-color 500ms ease;\n  position: fixed;\n  width: 100%;\n"]);return ee=function(){return n},n}function te(){var n=Object(h.a)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  \n"]);return te=function(){return n},n}var re={home:"Home",aboutMe:"About Me",experience:"Experience",contact:"Contact"},ae=p.a.ul(te()),ie=p.a.nav(ee(),b.DARK_GRAY,(function(n){return n.transparent?"transparent":b.DARK_PURPLE})),oe=p.a.li(ne(),g.MOBILE),ce=function(n){return u.a.createElement("div",{onClick:n.onClick},u.a.createElement(oe,null,u.a.createElement(ue,null,u.a.createElement("i",{className:n.toggle?"fa fa-times":"fa fa-bars"}))))},le=p.a.li($n(),(function(n){return n.toggle?"block":"none"}),(function(n){return n.transparent?"transparent":b.DARKER_PURPLE}),(function(n){return n.transparent?"1px solid "+b.DARKER_PURPLE:"none"}),g.MOBILE),ue=p.a.a(Zn(),g.MOBILE,(function(n){return n.transparent?b.LOW_OPC_BLACK:""})),se=function(n){return u.a.createElement(le,{toggle:n.toggle,transparent:n.transparent},u.a.createElement(ue,{onClick:n.onClick,href:n.href,transparent:n.transparent},n.children))},de=function(n){return u.a.createElement(le,{toggle:n.toggle,transparent:n.transparent},u.a.createElement(ue,{onClick:n.onClick,href:n.href,transparent:n.transparent},n.children))},fe=p.a.li(Xn(),g.MOBILE),he=p.a.div(qn(),g.MOBILE),pe=function(n){function e(n){var t;return Object(r.a)(this,e),(t=Object(i.a)(this,Object(o.a)(e).call(this,n))).toggleDisplay=function(){t.setState((function(n){return{toggle:!n.toggle}}))},t.collapse=function(){t.setState((function(n){return{toggle:!1}}))},t.toggleColourSettings=function(){(document.body.scrollTop||document.documentElement.scrollTop)>=window.innerHeight?t.setState((function(n){return{transparent:!1}})):t.setState((function(n){return{transparent:!0}}))},t.componentDidMount=function(){window.addEventListener("scroll",t.toggleColourSettings),window.addEventListener("scroll",t.collapse)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.toggleColourSettings),window.addEventListener("scroll",t.collapse)},t.state={toggle:!1,transparent:!0},t}return Object(c.a)(e,n),Object(a.a)(e,[{key:"getItems",value:function(n){var e=[];for(var t in n)"experience"!==t?e.push(u.a.createElement(se,{onClick:this.toggleDisplay,toggle:this.state.toggle,transparent:this.state.transparent,href:"#"+t},n[t])):e.push(u.a.createElement(de,{onClick:this.toggleDisplay,toggle:this.state.toggle,transparent:this.state.transparent,href:"#"+t},n[t]));return e}},{key:"render",value:function(){return u.a.createElement(ie,{transparent:this.state.transparent},u.a.createElement(ae,null,u.a.createElement(fe,null,"Shari"),this.getItems(re),u.a.createElement(ce,{onClick:this.toggleDisplay,toggle:this.state.toggle}),u.a.createElement(he,null)))}}]),e}(l.Component),me=function(n){function e(n){return Object(r.a)(this,e),Object(i.a)(this,Object(o.a)(e).call(this,n))}return Object(c.a)(e,n),Object(a.a)(e,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(pe,null),u.a.createElement(Qn,null),u.a.createElement(Fn,{id:"contact"}))}}]),e}(l.Component),ge=document.getElementById("root");d.a.render(u.a.createElement(f.a,{basename:"/portfolio"},u.a.createElement(me,null)),ge)}},[[24,1,2]]]);
//# sourceMappingURL=main.0b249a87.chunk.js.map