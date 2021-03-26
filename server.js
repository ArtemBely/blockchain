(()=>{"use strict";var e={453:(e,t,a)=>{const n=require("react");var r=a.n(n);const c=require("react-router-dom"),l=require("@babel/runtime/helpers/classCallCheck");var o=a.n(l);const s=require("@babel/runtime/helpers/createClass");var i=a.n(s);const m=require("@babel/runtime/helpers/inherits");var u=a.n(m);const p=require("@babel/runtime/helpers/possibleConstructorReturn");var f=a.n(p);const d=require("@babel/runtime/helpers/getPrototypeOf");var A=a.n(d);const h=function(){return r().createElement("div",{className:"wrap_header"},r().createElement("p",{className:"wrap_circle"},r().createElement("img",{src:"data:image/png;base64,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",id:"circle1"}),r().createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOnSURBVHgBfVRNix1FFD3Vrx/OjIiJ6CIoUUE37gRBDAEXikLwR4gLxYWCoCiC+HDpP4gLF7rL7LLQnV8LFxqX7hSZEIlKRhnndXdV3aq6ObeqZ5hJJun3mqK765577rnnlsMdrl//1Ke94MUoeHKKuDdEjEGwOwl+TwE//efxx9sX3P8nxbpbX/y1p89OHp/EjFMEG33EEBLWBuptFYyjYOCeQYAf3nrJXbkVozv6sB71vU6x3S9wlo+LRQfXdeg6h4URcA5dsbXwfQ8UwTOfXtZXVpd160TQIPphcfjAdY09gaAHlThoN+8ksOMeVQNmKs04vQx4bvWt9sdAB68XJOHdnCG5IBVFISPmaLc9aP1DHb/NkcV+TKbcdF+4jieOgVL8j6jXGBOmlBFTIXhGYqKcFfzPKwG5ajbgjIbu+M6yKR55/5Leb6/6nRv6ApvwAD+uyTIboGSElBD5LHxOloB3ZsLMKnKtxDGJq8kqYwMfRzxIzL2eljkvHQbLQJ2yGIBS4kLggihC1gohHZMl5cTbJMp1zdQ0UxjWxEQLNKb04lnqVkFL0882R0oRydbXBMYavE1zzAlAIIKZNKzAJOBX4NWVbvT04Rkqu+5qR0i2gSZGR5MhGnCpwCZFJIDUO9U9iRUJpRBWmWjF1G1i2bNBg/mPWa27xrQwKJGC1KZleBreB64EDrE1krnmhjY5xBNYLNEZlJ4BOwR7qHrBOoumU21YajKIkq0BUopSWhNnh0QmETGWJMLJS4uryFb+NXZu6xC0VKfU0mpQCzYZAlkHkiBprjNrk4bJLHH0AfLFxwj9NOEX1+Ph2bdqXjTrMDAldr7MAaYvnWBMvQGWmTUrMKbCZBTJpHTarwU/LwvOE+yeWVnTNRPIumqdJhYBWLJvpRtbb6zpnOC5aqskygL7bR54ff69nmPQOQKrjaOBZho7RVrGGuaqX81S0TcZPEv3yTNBxpQFU+gxfPmm++dwTF973v04BfzGDSOzDzaynLKBJQ/UdOSATLGNcR3l0R86YuJ3nzpM/hvsHsz+4cmyu8ZXG5t4eVE4FRy5VOoI1gniOEqMdbICz9jIVoaRjLl6ljxdu44b3227fIB17JC+eEWXf1/FU2zCozbP9Kr5lWohmQ8ZJnQLi2EC6okN7K+/xr/bRwBvAz243rmkmxvA4yXgFAFAfSV4etDGl4x5qu1vbWHvszfceFL8iaBHr9cv8lQ/jWUcuHcH/jFO0mrlyt1ibgIUqTmcoAzV4gAAAABJRU5ErkJggg==",id:"circle2"})),r().createElement("p",{id:"global"},"Global Blockchain Network"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"database"},"Database"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"conference"},"VR EXPO and Conference"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"partners"},"Partners"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"header_about"},"About"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"blog"},"Blog"),r().createElement(c.NavLink,{to:"/database",className:"nav_header",activeClassName:"active_header",id:"header_contacts"},"Contacts"),r().createElement("p",null))},v=a.p+"0b0d4cd65587c43ad62d7fd78f5db008.svg",E=a.p+"907f44255eef1d27f93234a6ab13adf2.png",N=a.p+"d1757b4507341e7df4c891b2a94c19e7.png";const b=function(e){u()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=A()(t);if(a){var r=A()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(){return o()(this,l),n.apply(this,arguments)}return i()(l,[{key:"render",value:function(){return r().createElement("div",{className:"main_screen"},r().createElement("p",null),r().createElement("div",{className:"blockchain_network"},r().createElement("p",{id:"block_net"},"Global Blockchain Network"),r().createElement("p",{id:"reality"},"New business reality from virtual to real"),r().createElement(c.NavLink,{to:"/join",id:"join_for"},"Join for us"),r().createElement(c.NavLink,{to:"/explore",id:"explore"},"Explore")),r().createElement("div",{className:"watch_vr"},r().createElement("p",{className:"watch_inside"},r().createElement("img",{src:v,id:"mobile"}),r().createElement("img",{src:E,id:"oculus"}),r().createElement("img",{src:N,id:"macbook"}),r().createElement("img",{src:"data:image/png;base64,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",id:"play1"}),r().createElement(c.NavLink,{to:"/vr_tour",className:"vr"},"Watch VR-tour"))))}}]),l}(r().Component),g=function(){return r().createElement("div",{className:"fone"})};a.p,require("three");const B=function(e){u()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=A()(t);if(a){var r=A()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function c(){return o()(this,c),n.call(this)}return i()(c,[{key:"render",value:function(){return r().createElement("div",{className:"collaboration"},r().createElement("h1",{className:"possibilities"},"Immerse yourself in a world of possibilities"),r().createElement("h2",{className:"technologies"},"We use the latest technologies to create the most comfortable platform for finding business partners"),r().createElement("h3",{className:"why"},"Why"),r().createElement("h4",{className:"community"},"We believe in collaboration, transparency, and the power of information. Thus we united multiple national associations and prominent community members. We created the most thorough database of companies involved in the blockchain field. We added The VR Expo and conference. Bonus for participants of the Global Blockchain Network is an HR section where you can find a professional to scale up your team."),r().createElement("h3",{className:"title_2"},"What is it"),r().createElement("h4",{className:"subtitle_2"},"What Easiest way to know «Who is Who in the Blockchain»."),r().createElement("h3",{className:"title_3"},"For whom"),r().createElement("h4",{className:"subtitle_3"},"Whether you are new to blockchain or already a prominent community member, you will find here partners, technologies, and implementation cases for any use. The Network is for everyone fascinated by technology."),r().createElement("div",{id:"container"}))}}]),c}(r().Component),y=a.p+"c7075c581f711575cc2625b8bd47d07d.png",w=function(){return r().createElement("div",{className:"table1"},r().createElement("img",{src:y,id:"table_1"}),r().createElement("div",{className:"table_glass"}),r().createElement(c.NavLink,{to:"#",id:"full_database"},"Full database"),r().createElement(c.NavLink,{to:"#",id:"register"},"Register a company"),r().createElement("p",{className:"table_text"},"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."))},R=a.p+"3c18fb7a95fbb2c92119f44f108e4346.png";const k=function(e){u()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=A()(t);if(a){var r=A()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(){var e;return o()(this,l),(e=n.call(this)).square=r().createRef(),e}return i()(l,[{key:"render",value:function(){return r().createElement("div",{className:"wrap_people"},r().createElement("div",{className:"people"},r().createElement("p",{className:"info_people"},r().createElement("p",{className:"our_people"},"Our people"),r().createElement("p",{className:"description_people"},"If you would like to become a member of the GBN personally, feel free to send us more information about yourself. Let the community know you. "),r().createElement(c.NavLink,{to:"#",className:"seeAll"},"See all →")),r().createElement("div",{className:"each_person"},r().createElement("p",{className:"grad_each",ref:this.square}),r().createElement("img",{src:R,id:"img_person"}),r().createElement("p",{className:"name_of_person"},"Tempor cupidata"),r().createElement("p",{className:"descr_of_person"},"Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim"))))}}]),l}(r().Component),C=a.p+"e4be23afb19decb367cb9604ac342b50.svg",q=function(){return r().createElement("div",{className:"wide"},r().createElement("img",{src:C,id:"wide1"}),r().createElement("p",{className:"water"},r().createElement("p",{className:"vr_gl"},"VR Global Blockchain Network"),r().createElement("p",{className:"expo1"},"Expo and conference"),r().createElement("p",{className:"dates1"},"1 May — 3 June"),r().createElement(c.NavLink,{to:"#",className:"reg_bottom1"},"Registration")))},L=(a.p,a.p+"752f070c61cbc738d3517032031fd721.svg"),W=function(){return r().createElement("div",{className:"brands"},r().createElement("p",{className:"info_brands"},r().createElement("p",{className:"VR_Stand"},"Brand your own VR Stand"),r().createElement("p",{className:"brands_text"},"Do one more step and see your business is in virtual reality. Real feeling, real people, easy access from any device or location. VR GBN is more than an event. Watch a promo, get a feeling, make it real."),r().createElement(c.NavLink,{to:"#",className:"seeAll_2"},"See all →")),r().createElement("div",{className:"stand_one"},r().createElement("img",{src:L,id:"img_stand"}),r().createElement("p",{className:"square_projects1"}),r().createElement("p",{className:"square_projects2"}),r().createElement(c.NavLink,{to:"#",className:"reserve"},"Reserve"),r().createElement(c.NavLink,{to:"#",className:"discover_more"},"Discover more")),r().createElement("div",{className:"stand_two"},r().createElement("p",{id:"img_stand"},r().createElement("img",{src:L}))))},x=a.p+"d3bf255bfcff937d22a41ac58a1be497.svg",I=function(){return r().createElement("div",{className:"wrap_logos"},r().createElement("div",{className:"logos"},r().createElement("p",{className:"explain2"},r().createElement("p",{className:"participating1"},"Participating companies"),r().createElement(c.NavLink,{to:"#",className:"seeAll_3"},"See all →"),r().createElement("p",{className:"join2"},"Join GBN VR Expro and give a full experience of what you do to the world.")),r().createElement("img",{src:x,className:"each_logo",id:"bmw"}),r().createElement("div",{className:"wrap_vacancies"},r().createElement("p",{className:"vacancies"},"Vacancies"),r().createElement("p",{className:"block_v"},"Blockchain is a rapidly developing field with a constant demand for high-profile specialists. If you are interested in leveraging your team or looking for a new position — let the community know. Match and watch how the magic happens."),r().createElement("p",{className:"we_wish"},"We wish you mutually beneficial cooperation!"))))},X=function(){return r().createElement("div",{className:"footer"},"Footer")};const O=[{path:"/",exact:!0,component:function(e){u()(c,e);var t,a,n=(t=c,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=A()(t);if(a){var r=A()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function c(){return o()(this,c),n.apply(this,arguments)}return i()(c,[{key:"render",value:function(){return r().createElement("div",null,r().createElement(h,null),r().createElement(b,null),r().createElement(g,null),r().createElement(B,null),r().createElement(w,null),r().createElement(k,null),r().createElement(q,null),r().createElement(W,null),r().createElement(I,null),r().createElement(X,null))}}]),c}(r().Component)}];const U=function(e){u()(l,e);var t,a,n=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=A()(t);if(a){var r=A()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f()(this,e)});function l(){return o()(this,l),n.apply(this,arguments)}return i()(l,[{key:"render",value:function(){return r().createElement("div",{className:"main_wrap"},r().createElement(c.Switch,null,O.map((function(e,t){return r().createElement(c.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),l}(r().Component),F=require("express");var V=a.n(F);const H=require("react-dom/server"),P=require("cookie-parser");var J=a.n(P);const S=require("body-parser");var M=a.n(S);const Y=require("serialize-javascript");var G=a.n(Y);const T=require("express-validator");var j=a.n(T),Q=V()();process.env.PORT,Q.use((function(e,t,a){t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t.setHeader("Pragma","no-cache"),t.setHeader("Expires","0"),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),a()})),Q.use(V().static("public")),Q.use(M().json()),Q.use(M().urlencoded({extended:!1})),Q.use(V().urlencoded({extended:!1})),Q.use(j()()),Q.use(J()()),Q.get("*",(function(e,t,a){var n=O.find((function(t){return(0,c.matchPath)(e.url,t)}))||{};(n.fetchInitialData?n.fetchInitialData(e.path):Promise.resolve()).then((function(a){var n={data:a},l=(0,H.renderToString)(r().createElement(c.StaticRouter,{location:e.url,context:n},r().createElement(U,{data:a}))),o='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>collab</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(G()(a),'<\/script>\n                            <title>Blockchain</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     ').concat(l,'\n                  </div>\n                  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"><\/script>\n                </body>\n            </html>');return t.send(o)})).catch(a)})),Q.use((function(e,t,a){var n=new Error("Noooo");n.status=404,a(n)})),Q.listen(8888,(function(){console.log("connected!")}))},346:e=>{e.exports=require("babel-regenerator-runtime")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,a),c.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.p="/",a(346),a(453)})();