(function(e){function t(t){for(var a,r,s=t[0],u=t[1],i=t[2],d=0,f=[];d<s.length;d++)r=s[d],o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac9bf":"1b5f04eb","chunk-2d0b9223":"92da62a9","chunk-2d20eb84":"06cc4dbd","chunk-2d230e02":"901c0238","chunk-339244e4":"86f5c305","chunk-35c211a5":"b3323bce","chunk-379a6a8a":"87aba22d","chunk-37aed991":"43efd122","chunk-5e225842":"e60610be","chunk-cfa26f1a":"86149fde","chunk-e8be808e":"57d136d9"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-339244e4":1,"chunk-35c211a5":1,"chunk-379a6a8a":1,"chunk-37aed991":1,"chunk-5e225842":1,"chunk-cfa26f1a":1,"chunk-e8be808e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0ac9bf":"31d6cfe0","chunk-2d0b9223":"31d6cfe0","chunk-2d20eb84":"31d6cfe0","chunk-2d230e02":"31d6cfe0","chunk-339244e4":"7de6d0e7","chunk-35c211a5":"d7f845bd","chunk-379a6a8a":"a4079c86","chunk-37aed991":"a4079c86","chunk-5e225842":"9243bafb","chunk-cfa26f1a":"24c1098b","chunk-e8be808e":"0c817777"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===a||i===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],i=s.getAttribute("data-href");if(i===a||i===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,n(o)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var i,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(e),i=function(t){f.onerror=f.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var m=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,d.appendChild(f)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/~user5/booker-client/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var m=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"365c":function(e,t,n){"use strict";var a=n("c93e"),r=(n("cadf"),n("551c"),n("097d"),n("7f7f"),"http://192.168.0.15/~user5/booker-server"),o=n("bc3a"),c=n.n(o),s={loginUser:function(e){return new Promise(function(t,n){c.a.post("".concat(r,"/api/auth/"),"email=".concat(e.email,"&password=").concat(e.password)).then(function(e){var n=e.data.message.data.token;c.a.defaults.headers.common["Authorization"]="Bearer ".concat(n),t(e)}).catch(function(e){n(e.response)})})},fetchAuthUser:function(){return new Promise(function(e,t){c.a.get("".concat(r,"/api/auth/")).then(function(t){e(t)}).catch(function(e){t(e.response)})})},fetchUsers:function(){return new Promise(function(e,t){c.a.get("".concat(r,"/api/users/")).then(function(t){e(t)}).catch(function(e){t(e.response)})})},addUser:function(e){return new Promise(function(t,n){c.a.post("".concat(r,"/api/users/"),"name=".concat(e.name,"&email=").concat(e.email,"&password=").concat(e.password)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},updateUser:function(e){return new Promise(function(t,n){c.a.put("".concat(r,"/api/users/").concat(e.id),"name=".concat(e.name,"&email=").concat(e.email,"&password=").concat(e.password)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},deleteUser:function(e){return new Promise(function(t,n){c.a.delete("".concat(r,"/api/users/").concat(e)).then(function(e){t(e)}).catch(function(e){n(e.response)})})}},u={fetchEvents:function(){return new Promise(function(e,t){c.a.get("".concat(r,"/api/events/")).then(function(t){e(t)}).catch(function(e){t(e.response)})})},addEvent:function(e){return new Promise(function(t,n){c.a.post("".concat(r,"/api/events/"),"room_id=".concat(e.roomId,"&user_id=").concat(e.userId,"&start_time=").concat(e.startTime,"&end_time=").concat(e.endTime,"&description=").concat(e.description,"&recur_type=").concat(e.recurType,"&recur_duration=").concat(e.recurDuration)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},updateEvent:function(e){return new Promise(function(t,n){c.a.put("".concat(r,"/api/events/").concat(e.id),"room_id=".concat(e.roomId,"&user_id=").concat(e.userId,"&start_time=").concat(e.startTime,"&end_time=").concat(e.endTime,"&description=").concat(e.description,"&recur_id=").concat(e.recurId)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},deleteEvent:function(e){return new Promise(function(t,n){c.a.delete("".concat(r,"/api/events/").concat(e.id),{data:"recur_id=".concat(e.recurId)}).then(function(e){t(e)}).catch(function(e){n(e.response)})})}},i={fetchRooms:function(){return new Promise(function(e,t){c.a.get("".concat(r,"/api/rooms/")).then(function(t){e(t)}).catch(function(e){t(e.response)})})},addRoom:function(e){return new Promise(function(t,n){c.a.post("".concat(r,"/api/rooms/"),"name=".concat(e.name)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},updateRoom:function(e){return new Promise(function(t,n){c.a.put("".concat(r,"/api/rooms/").concat(e.id),"name=".concat(e.name)).then(function(e){t(e)}).catch(function(e){n(e.response)})})},deleteRoom:function(e){return new Promise(function(t,n){c.a.delete("".concat(r,"/api/rooms/").concat(e)).then(function(e){t(e)}).catch(function(e){n(e.response)})})}};t["a"]=Object(a["a"])({},s,u,i)},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4678"},"494f":function(e,t,n){"use strict";var a=n("9df5"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("bc3a"),o=n.n(r),c=n("8c4f"),s=n("2f62"),u={auth:{id:localStorage.getItem("id")||"",token:localStorage.getItem("token")||"",name:localStorage.getItem("name")||"",email:localStorage.getItem("email")||"",role:localStorage.getItem("role")||""},users:[],events:[],rooms:[],settings:{weekStart:localStorage.getItem("weekStart")||"monday",timeFormat:localStorage.getItem("timeFormat")||"24h"}},i=u;n("7514"),n("20d6"),n("7f7f");function d(e){e.users=[]}function f(e){e.events=[]}function m(e){e.rooms=[]}var l={setAuth:function(e,t){e.auth={id:t.id,token:t.token,name:t.name,email:t.email,role:t.role}},removeAuth:function(e){e.auth={id:"",token:"",name:"",email:"",role:""},d(e),f(e),m(e)},setUsers:function(e,t){e.users=t},deleteUser:function(e,t){var n=e.users.findIndex(function(e){return+e.id===+t});e.users.splice(n,1)},setEvents:function(e,t){e.events=t},updateEvent:function(e,t){var n="admin"===e.auth.role?e.users.find(function(e){return+e.id===+t.data.userId}):{id:e.auth.id,name:e.auth.name,email:e.auth.email};if(!t.data.recurId){var a=e.events.findIndex(function(e){return+e.id===+t.data.id});return e.events[a].description=t.data.description,e.events[a].start_time=t.data.startTime,e.events[a].end_time=t.data.endTime,e.events[a].recur_id=t.newRecurId,e.events[a].user.id=n.id,e.events[a].user.name=n.name,void(e.events[a].user.email=n.email)}e.events=e.events.map(function(e){if(+e.id>=+t.data.id&&+e.recur_id===+t.data.recurId){var a=new Date(1e3*e.start_time),r=new Date(1e3*e.end_time);a.setHours(new Date(1e3*t.data.startTime).getHours()),a.setMinutes(new Date(1e3*t.data.startTime).getMinutes()),r.setHours(new Date(1e3*t.data.endTime).getHours()),r.setMinutes(new Date(1e3*t.data.endTime).getMinutes()),e.description=t.data.description,e.start_time=a/1e3,e.end_time=r/1e3,e.recur_id=t.newRecurId,e.user.id=n.id,e.user.name=n.name,e.user.email=n.email}return e})},deleteEvent:function(e,t){if(t.recurId)e.events=e.events.filter(function(e){return!(e.id>=t.id&&+e.recur_id===+t.recurId)});else{var n=e.events.findIndex(function(e){return+e.id===+t.id});e.events.splice(n,1)}},setRooms:function(e,t){e.rooms=t},deleteRoom:function(e,t){var n=e.rooms.findIndex(function(e){return+e.id===+t});e.rooms.splice(n,1)}},h=l,b=n("365c"),p={loginUser:function(e,t){var n,a;return new Promise(function(r,o){b["a"].loginUser(t).then(function(e){return n=e.data.message.data.token,a=e.data.message.text,b["a"].fetchAuthUser()}).then(function(t){var o=t.data.message.data;e.commit("setAuth",{id:o.id,token:n,name:o.name,email:o.email,role:o.role}),localStorage.setItem("id",o.id),localStorage.setItem("token",n),localStorage.setItem("name",o.name),localStorage.setItem("email",o.email),localStorage.setItem("role",o.role),r({text:a})}).catch(function(e){o({text:e.data.message.text,data:e.data.message.data})})})},logoutUser:function(e){return new Promise(function(t,n){var a=e.state.auth.name;e.commit("removeAuth"),localStorage.removeItem("id"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("role"),localStorage.removeItem("weekStart"),localStorage.removeItem("timeFormat"),t({text:"User '".concat(a,"' was successfully logged out.")})})},getUsers:function(e){return new Promise(function(t,n){b["a"].fetchUsers().then(function(n){e.commit("setUsers",n.data.message.data),t()}).catch(function(e){n({text:e.data.message.text})})})},addUser:function(e,t){return new Promise(function(e,n){b["a"].addUser(t).then(function(t){e({text:t.data.message.text})}).catch(function(e){n({text:e.data.message.text,data:e.data.message.data})})})},updateUser:function(e,t){return new Promise(function(e,n){b["a"].updateUser(t).then(function(t){e({text:t.data.message.text})}).catch(function(e){n({text:e.data.message.text,data:e.data.message.data})})})},deleteUser:function(e,t){return new Promise(function(n,a){b["a"].deleteUser(t).then(function(a){e.commit("deleteUser",t),n({text:a.data.message.text})}).catch(function(e){a({text:e.data.message.text})})})},getEvents:function(e){return new Promise(function(t,n){b["a"].fetchEvents().then(function(n){e.commit("setEvents",n.data.message.data),t()}).catch(function(e){n({text:e.data.message.text})})})},addEvent:function(e,t){return new Promise(function(e,n){b["a"].addEvent(t).then(function(t){e({text:t.data.message.text})}).catch(function(e){n({text:e.data.message.text,data:e.data.message.data})})})},updateEvent:function(e,t){return new Promise(function(n,a){b["a"].updateEvent(t).then(function(a){e.commit("updateEvent",{data:t,newRecurId:a.data.message.data.recurId}),n({text:a.data.message.text})}).catch(function(e){a({text:e.data.message.text,data:e.data.message.data})})})},deleteEvent:function(e,t){return new Promise(function(n,a){b["a"].deleteEvent(t).then(function(a){e.commit("deleteEvent",t),n({text:a.data.message.text})}).catch(function(e){a({text:e.data.message.text,data:e.data.message.data})})})},getRooms:function(e){return new Promise(function(t,n){b["a"].fetchRooms().then(function(n){e.commit("setRooms",n.data.message.data),t()}).catch(function(e){n({text:e.data.message.text})})})},addRoom:function(e,t){return new Promise(function(e,n){b["a"].addRoom(t).then(function(t){e({text:t.data.message.text})}).catch(function(e){n({text:e.data.message.text,data:e.data.message.data})})})},updateRoom:function(e,t){return new Promise(function(e,n){b["a"].updateRoom(t).then(function(t){e({text:t.data.message.text})}).catch(function(e){n({text:e.data.message.text,data:e.data.message.data})})})},deleteRoom:function(e,t){return new Promise(function(n,a){b["a"].deleteRoom(t).then(function(a){e.commit("deleteRoom",t),n({text:a.data.message.text})}).catch(function(e){a({text:e.data.message.text})})})}},g=p,v=(n("55dd"),n("8afe")),j={isAuth:function(e){return e.auth.id&&e.auth.token&&e.auth.name&&e.auth.email&&e.auth.role},isAdmin:function(e){return e.auth.id&&e.auth.token&&e.auth.name&&e.auth.email&&"admin"===e.auth.role},getUserById:function(e){return function(t){var n=e.users.findIndex(function(e){return+e.id===+t});return-1!==n?e.users[n]:{}}},getRoomById:function(e){return function(t){var n=e.rooms.findIndex(function(e){return+e.id===+t});return-1!==n?e.rooms[n]:{}}},getEventsSortedByStartTime:function(e){var t=Object(v["a"])(e.events);return t.sort(function(e,t){return e.start_time-t.start_time}),t}},k=j;a["default"].use(s["a"]);var w=new s["a"].Store({state:i,mutations:h,actions:g,getters:k}),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notFound"},[n("div",{staticClass:"notFound__wrapper"}),n("div",{staticClass:"notFound__inner"},[n("div",{staticClass:"notFound__content"},[n("h1",[e._v("404")]),n("p",[e._v("There's nothing here.")])])])])}],I=(n("494f"),n("2877")),_={},S=Object(I["a"])(_,x,y,!1,null,"023b4ba6",null);S.options.__file="NotFound.vue";var E=S.exports;a["default"].use(c["a"]);var P=function(e,t,n){return w.getters.isAdmin?n():n({name:"dashboard.stats"})},U=function(e,t,n){return w.getters.isAuth?n():n({name:"login"})},z=function(e,t,n){return w.getters.isAuth?n({name:"dashboard.stats"}):n()},T=new c["a"]({routes:[{path:"/",redirect:{name:"dashboard.stats"}},{path:"/login",name:"login",component:function(){return n.e("chunk-cfa26f1a").then(n.bind(null,"a55b"))},beforeEnter:z},{path:"/dashboard",component:function(){return n.e("chunk-339244e4").then(n.bind(null,"5c3a8"))},beforeEnter:U,children:[{path:"",redirect:{name:"dashboard.stats"}},{path:"stats",name:"dashboard.stats",component:function(){return n.e("chunk-e8be808e").then(n.bind(null,"acd8"))}},{path:"booking",name:"dashboard.booking",component:function(){return n.e("chunk-5e225842").then(n.bind(null,"170c"))}},{path:"booking/book-it",name:"dashboard.booking.bookIt",component:function(){return n.e("chunk-35c211a5").then(n.bind(null,"a093"))},beforeEnter:function(e,t,n){return 0===w.state.rooms.length?n({name:"dashboard.booking"}):n()}},{path:"users",name:"dashboard.users",component:function(){return n.e("chunk-379a6a8a").then(n.bind(null,"9852"))},beforeEnter:P},{path:"users/create",name:"dashboard.users.create",component:function(){return n.e("chunk-2d230e02").then(n.bind(null,"edc0"))},beforeEnter:P},{path:"users/:id/edit",name:"dashboard.users.edit",component:function(){return n.e("chunk-2d0ac9bf").then(n.bind(null,"19ef"))},beforeEnter:function(e,t,n){return w.getters.isAdmin?0===w.state.users.length?n({name:"dashboard.users"}):n():n({name:"dashboard.stats"})}},{path:"rooms",name:"dashboard.rooms",component:function(){return n.e("chunk-37aed991").then(n.bind(null,"f5c7"))},beforeEnter:P},{path:"rooms/create",name:"dashboard.rooms.create",component:function(){return n.e("chunk-2d0b9223").then(n.bind(null,"323a"))},beforeEnter:P},{path:"rooms/:id/edit",name:"dashboard.rooms.edit",component:function(){return n.e("chunk-2d20eb84").then(n.bind(null,"b121"))},beforeEnter:function(e,t,n){return w.getters.isAdmin?0===w.state.rooms.length?n({name:"dashboard.rooms"}):n():n({name:"dashboard.stats"})}}]},{path:"/not-found",name:"notFound",component:E},{path:"*",redirect:{name:"notFound"}}]}),A=n("ee98"),O=n.n(A),R=n("d842"),M=n("5b20"),F=n.n(M),D=n("e67d"),B=n.n(D),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("notifications",{attrs:{group:"messages",position:"bottom right"}})],1)},N=[],H=(n("5c0b"),{}),J=Object(I["a"])(H,C,N,!1,null,null,null);J.options.__file="App.vue";var q=J.exports,$=n("9f21"),L=localStorage.getItem("token");L&&(o.a.defaults.headers.common["Authorization"]="Bearer ".concat(L)),o.a.interceptors.response.use(function(e){return e},function(e){var t=e.response;return 401===+t.status&&(w.commit("removeAuth"),localStorage.removeItem("id"),localStorage.removeItem("token"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("role"),localStorage.removeItem("weekStart"),localStorage.removeItem("timeFormat"),T.push({name:"login"})),Promise.reject(e)}),a["default"].config.productionTip=!1,a["default"].directive("focus",{inserted:function(e){e.focus()}}),a["default"].directive("click-outside",B.a),a["default"].filter("ucfirst",function(e){return e[0].toUpperCase()+e.slice(1)}),a["default"].filter("getMonthString",function(e){var t={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};return t[e]}),a["default"].filter("zeroFill",$["c"]),a["default"].filter("unixToString",function(e,t){var n=new Date(1e3*e);if("24h"===t){var a=Object($["c"])(n.getHours()),r=Object($["c"])(n.getMinutes());return"".concat(a,":").concat(r,", ").concat(n.toDateString())}return"".concat(Object($["b"])(n),", ").concat(n.toDateString())}),a["default"].use(O.a),a["default"].use(R["a"],{adapter:F.a}),new a["default"]({router:T,store:w,render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"9df5":function(e,t,n){},"9f21":function(e,t,n){"use strict";function a(e){return+e<10?"0"+ +e:+e}function r(e){var t=e.getHours(),n=e.getMinutes();t=a(t),n=a(n);var r=t+":"+n;return r}function o(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"pm":"am";t%=12,t=t||12,n=n<10?"0"+n:n;var r=t+":"+n+" "+a;return r}n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}});
//# sourceMappingURL=app.f415604f.js.map