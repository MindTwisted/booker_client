(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c211a5"],{"05e7":function(t,e,i){},"0fab":function(t,e,i){"use strict";var r=i("21cf"),s=i.n(r);s.a},"11e9":function(t,e,i){var r=i("52a7"),s=i("4630"),n=i("6821"),a=i("6a99"),o=i("69a8"),c=i("c69a"),u=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?u:function(t,e){if(t=n(t),e=a(e,!0),c)try{return u(t,e)}catch(t){}if(o(t,e))return s(!r.f.call(t,e),t[e])}},1663:function(t,e,i){},"21cf":function(t,e,i){},"37da":function(t,e,i){"use strict";var r=i("c59a"),s=i.n(r);s.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,i){var r=i("d3f4"),s=i("8b97").set;t.exports=function(t,e,i){var n,a=e.constructor;return a!==i&&"function"==typeof a&&(n=a.prototype)!==i.prototype&&r(n)&&s&&s(t,n),t}},"63ff":function(t,e,i){"use strict";var r=i("05e7"),s=i.n(r);s.a},"8b97":function(t,e,i){var r=i("d3f4"),s=i("cb7c"),n=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return n(t,i),e?t.__proto__=i:r(t,i),t}}({},!1):void 0),check:n}},9093:function(t,e,i){var r=i("ce10"),s=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},a093:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bookIt"},[i("div",{staticClass:"dashboard__title"},[i("h1",{staticClass:"title"},[t._v("Book Room '"+t._s(t.room.name)+"'")]),i("router-link",{staticClass:"button is-success",attrs:{to:{name:"dashboard.booking",query:{room_id:t.room.id}}}},[t._v("\n            Back\n        ")])],1),i("div",{staticClass:"bookIt__form"},[i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("User")]),t.isAdmin?i("div",{staticClass:"control select",class:{"is-danger":t.errors.userId.length>0}},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.userId=e.target.multiple?i:i[0]}}},t._l(t.users,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))]):i("div",{staticClass:"control select"},[i("select",{attrs:{disabled:""}},[i("option",{domProps:{value:t.auth.id}},[t._v(t._s(t.auth.name))])])]),i("ul",{staticClass:"help is-danger"},t._l(t.errors.userId,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Event Date")]),i("date-picker",{attrs:{weekStart:t.settings.weekStart},model:{value:t.selectedDate,callback:function(e){t.selectedDate=e},expression:"selectedDate"}})],1),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Event Start Time")]),i("time-picker",{attrs:{timeFormat:t.settings.timeFormat,isError:t.errors.startTime.length>0},model:{value:t.selectedTime.start,callback:function(e){t.$set(t.selectedTime,"start",e)},expression:"selectedTime.start"}}),i("ul",{staticClass:"help is-danger"},t._l(t.errors.startTime,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))],1),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Event End Time")]),i("time-picker",{attrs:{timeFormat:t.settings.timeFormat,isError:t.errors.endTime.length>0},model:{value:t.selectedTime.end,callback:function(e){t.$set(t.selectedTime,"end",e)},expression:"selectedTime.end"}}),i("ul",{staticClass:"help is-danger"},t._l(t.errors.endTime,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))],1),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("Description")]),i("div",{staticClass:"control"},[i("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.description,expression:"description",modifiers:{trim:!0}}],staticClass:"textarea",class:{"is-danger":t.errors.description.length>0},attrs:{placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),i("ul",{staticClass:"help is-danger"},t._l(t.errors.description,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))]),i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("\n                Is this going to be a recurring event?\n            ")]),i("div",{staticClass:"control"},[i("label",{staticClass:"radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isRecur,expression:"isRecur"}],attrs:{type:"radio"},domProps:{value:!0,checked:t._q(t.isRecur,!0)},on:{change:function(e){t.isRecur=!0}}}),t._v("\n                    Yes\n                ")]),i("label",{staticClass:"radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isRecur,expression:"isRecur"}],attrs:{type:"radio"},domProps:{value:!1,checked:t._q(t.isRecur,!1)},on:{change:function(e){t.isRecur=!1}}}),t._v("\n                    No\n                ")])])]),t.isRecur?i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("\n                If it is recurring, specify weekly, bi-weekly or monthly\n            ")]),i("div",{staticClass:"control"},[i("label",{staticClass:"radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.recurType,expression:"recurType"}],attrs:{type:"radio",value:"weekly"},domProps:{checked:t._q(t.recurType,"weekly")},on:{change:function(e){t.recurType="weekly"}}}),t._v("\n                    Weekly\n                ")]),i("label",{staticClass:"radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.recurType,expression:"recurType"}],attrs:{type:"radio",value:"bi-weekly"},domProps:{checked:t._q(t.recurType,"bi-weekly")},on:{change:function(e){t.recurType="bi-weekly"}}}),t._v("\n                    Bi-Weekly\n                ")]),i("label",{staticClass:"radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.recurType,expression:"recurType"}],attrs:{type:"radio",value:"monthly"},domProps:{checked:t._q(t.recurType,"monthly")},on:{change:function(e){t.recurType="monthly"}}}),t._v("\n                    Monthly\n                ")])]),i("ul",{staticClass:"help is-danger"},t._l(t.errors.recurType,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))]):t._e(),t.isRecur?i("div",{staticClass:"field"},[i("label",{staticClass:"label"},[t._v("\n                Specify recurring duration\n            ")]),"weekly"===t.recurType?i("div",{staticClass:"select"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.recurDuration,expression:"recurDuration"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.recurDuration=e.target.multiple?i:i[0]}}},t._l(4,function(e){return i("option",{key:e},[t._v(t._s(e))])}))]):"bi-weekly"===t.recurType?i("div",{staticClass:"select"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.recurDuration,expression:"recurDuration"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.recurDuration=e.target.multiple?i:i[0]}}},t._l(2,function(e){return i("option",{key:e},[t._v(t._s(e))])}))]):i("div",{staticClass:"select"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.recurDuration,expression:"recurDuration"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.recurDuration=e.target.multiple?i:i[0]}}},t._l(1,function(e){return i("option",{key:e},[t._v(t._s(e))])}))]),i("ul",{staticClass:"help is-danger"},t._l(t.errors.recurDuration,function(e){return i("li",{key:e},[t._v("\n                    "+t._s(t._f("ucfirst")(e))+"\n                ")])}))]):t._e(),i("div",{staticClass:"field"},[t.isLoading?i("button",{staticClass:"button is-success is-loading",attrs:{disabled:""}},[t._v("\n                Submit\n            ")]):i("button",{staticClass:"button is-success",on:{click:t.handleCreateEvent}},[t._v("\n                Submit\n            ")])])])])},s=[],n=i("c93e"),a=i("2f62"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"datepicker"},[i("div",{staticClass:"dropdown",class:{"is-active":t.isDropdownOpen}},[i("div",{staticClass:"dropdown-trigger"},[i("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:t.toggleDropdown}},[i("span",{staticClass:"date"},[t._v(t._s(t._f("getMonthString")(t.month))+" "+t._s(t.date)+", "+t._s(t.year))]),t._m(0)])]),i("div",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[i("div",{staticClass:"dropdown-content"},[i("calendar",{attrs:{weekStart:t.weekStart},on:{"select-date":t.handleSelectDate}})],1)])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"icon"},[r("img",{attrs:{src:i("f080"),alt:""}})])}],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"calendar"},[r("div",{staticClass:"calendar__header"},[r("div",{staticClass:"calendar__prevMonth",on:{click:t.handlePrevMonth}},[r("img",{attrs:{src:i("f080"),alt:"Arrow Left"}})]),r("div",{staticClass:"calendar__monthInfo"},[t._v("\n            "+t._s(t._f("getMonthString")(t.month))+" "+t._s(t.year)+"\n            "),t.checkSwitched()?r("div",{staticClass:"calendar__reset",on:{click:t.resetCalendar}},[t._v("\n                today\n            ")]):t._e()]),r("div",{staticClass:"calendar__nextMonth",on:{click:t.handleNextMonth}},[r("img",{attrs:{src:i("f080"),alt:"Arrow Right"}})])]),r("div",{staticClass:"calendar__body"},[r("div",{staticClass:"calendar__weekDays"},t._l(t.weekDays,function(e,i){return r("div",{key:i,staticClass:"calendar__item"},[t._v("\n                "+t._s(e)+"\n            ")])})),r("div",{staticClass:"calendar__dates"},t._l(t.days,function(e,i){return r("div",{key:i,staticClass:"calendar__item"},[e?r("div",{class:{calendar__itemInner:!0,current:t.checkCurrent(e),selected:t.checkSelected(e)},on:{click:function(i){t.handleSelectDate(e)}}},[t._v("\n                    "+t._s(e.date)+"\n                ")]):[t._v("\n                    "+t._s(e)+"\n                ")]],2)}))])])},l=[],d={name:"calendar",data:function(){return{date:null,weekDays:[],days:[],month:"",year:"",currentDate:{},selectedDate:{}}},props:{weekStart:{type:String,required:!0,validator:function(t){return-1!==["sunday","monday"].indexOf(t)}}},mounted:function(){this.date=new Date,this.currentDate={date:this.date.getDate(),month:this.date.getMonth()+1,year:this.date.getFullYear()},this.handleSelectDate(this.currentDate)},watch:{date:function(){this.month=this.date.getMonth()+1,this.year=this.date.getFullYear(),this.days=this.generateDays(),this.weekDays=this.generateWeekDays()}},methods:{handlePrevMonth:function(){this.date=new Date(this.date.getFullYear(),this.date.getMonth()-1)},handleNextMonth:function(){this.date=new Date(this.date.getFullYear(),this.date.getMonth()+1)},generateWeekDays:function(){switch(this.weekStart){case"monday":return["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];case"sunday":return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];default:return!1}},generateDays:function(){for(var t=[],e=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate(),i=1;i<=e;i++)t.push({date:i,month:this.month,year:this.year});var r=new Date(this.date.getFullYear(),this.date.getMonth(),1).getDay(),s=new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDay();if("sunday"===this.weekStart){for(var n=0;n<r;n++)t.unshift(null);for(var a=s;a<6;a++)t.push(null)}else{for(var o=1;o<r;o++)t.unshift(null);for(var c=s;c<7;c++)t.push(null)}return t},handleSelectDate:function(t){this.selectedDate={date:t.date,month:t.month,year:t.year},this.$emit("select-date",t)},checkCurrent:function(t){return+t.date===+this.currentDate.date&&+t.month===+this.currentDate.month&&+t.year===+this.currentDate.year},checkSelected:function(t){return+t.date===+this.selectedDate.date&&+t.month===+this.selectedDate.month&&+t.year===+this.selectedDate.year},checkSwitched:function(){var t=(new Date).getMonth()+1,e=(new Date).getFullYear();return!this.checkSelected(this.currentDate)||+this.year!==+e||+this.month!==+t},resetCalendar:function(){this.date=new Date,this.handleSelectDate(this.currentDate)}}},m=d,h=(i("37da"),i("2877")),p=Object(h["a"])(m,u,l,!1,null,"f926f20e",null);p.options.__file="Calendar.vue";var f=p.exports,_={name:"date-picker",components:{calendar:f},props:{weekStart:{type:String,required:!0,validator:function(t){return-1!==["sunday","monday"].indexOf(t)}}},data:function(){return{isDropdownOpen:!1,date:"",month:"",year:""}},methods:{toggleDropdown:function(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown:function(){this.isDropdownOpen=!1},handleSelectDate:function(t){this.date=t.date,this.month=t.month,this.year=t.year,this.$emit("input",{date:this.date,month:this.month,year:this.year})}}},v=_,g=(i("0fab"),Object(h["a"])(v,o,c,!1,null,"a8a6ac9c",null));g.options.__file="DatePicker.vue";var y=g.exports,k=i("e648"),w={name:"book-it",components:{"date-picker":y,"time-picker":k["a"]},data:function(){return{userId:"",description:"",selectedDate:{},selectedTime:{start:{},end:{}},isRecur:!1,recurType:"weekly",recurDuration:1,errors:{userId:[],description:[],startTime:[],endTime:[],recurType:[],recurDuration:[]},isLoading:!1}},mounted:function(){this.userId=this.auth.id},watch:{recurType:function(){this.recurDuration=1}},computed:Object(n["a"])({},a["a"].mapState(["rooms","users","auth","settings"]),a["a"].mapGetters(["getRoomById","isAdmin"]),{room:function(){var t=this.getRoomById(this.$route.query.room_id);if(t&&t.id)return t;this.$router.push({name:"dashboard.booking"})}}),methods:Object(n["a"])({},a["a"].mapActions(["addEvent"]),{handleCreateEvent:function(){var t=this,e=this.selectedDate.date,i=this.selectedDate.month,r=this.selectedDate.year,s=this.selectedTime.start.hours,n=this.selectedTime.start.minutes,a=this.selectedTime.start.ampm?this.selectedTime.start.ampm:"",o=new Date("".concat(i,"/").concat(e,"/").concat(r," ").concat(s,":").concat(n,":00 ").concat(a)),c=this.selectedTime.end.hours,u=this.selectedTime.end.minutes,l=this.selectedTime.end.ampm?this.selectedTime.end.ampm:"",d=new Date("".concat(i,"/").concat(e,"/").concat(r," ").concat(c,":").concat(u,":00 ").concat(l)),m=this.isRecur?this.recurType:"",h=this.isRecur?this.recurDuration:"";this.isLoading=!0,this.addEvent({userId:this.userId,description:this.description,roomId:this.room.id,startTime:o/1e3,endTime:d/1e3,recurType:m,recurDuration:h}).then(function(e){t.$notify({group:"messages",title:"Success",type:"success",text:e.text}),t.$router.push({name:"dashboard.booking",query:{room_id:t.room.id}})}).catch(function(e){if(t.$notify({group:"messages",title:"Error",type:"error",text:e.text}),!e.data)return t.errors.userId=[],t.errors.description=[],t.errors.startTime=[],t.errors.endTime=[],t.errors.recurType=[],t.errors.recurDuration=[],!1;var i=e.data.user_id,r=e.data.description,s=e.data.start_time,n=e.data.end_time,a=e.data.recur_type,o=e.data.recur_duration;t.errors.userId=i||[],t.errors.description=r||[],t.errors.startTime=s||[],t.errors.endTime=n||[],t.errors.recurType=a||[],t.errors.recurDuration=o||[]}).finally(function(){return t.isLoading=!1})}})},D=w,C=Object(h["a"])(D,r,s,!1,null,null,null);C.options.__file="BookIt.vue";e["default"]=C.exports},aa77:function(t,e,i){var r=i("5ca1"),s=i("be13"),n=i("79e5"),a=i("fdef"),o="["+a+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t,e,i){var s={},o=n(function(){return!!a[t]()||c[t]()!=c}),u=s[t]=o?e(m):a[t];i&&(s[i]=u),r(r.P+r.F*o,"String",s)},m=d.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},c59a:function(t,e,i){},c5f6:function(t,e,i){"use strict";var r=i("7726"),s=i("69a8"),n=i("2d95"),a=i("5dbc"),o=i("6a99"),c=i("79e5"),u=i("9093").f,l=i("11e9").f,d=i("86cc").f,m=i("aa77").trim,h="Number",p=r[h],f=p,_=p.prototype,v=n(i("2aeb")(_))==h,g="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():m(e,3);var i,r,s,n=e.charCodeAt(0);if(43===n||45===n){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var a,c=e.slice(2),u=0,l=c.length;u<l;u++)if(a=c.charCodeAt(u),a<48||a>s)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(v?c(function(){_.valueOf.call(i)}):n(i)!=h)?a(new f(y(e)),i,p):y(e)};for(var k,w=i("9e1e")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;w.length>D;D++)s(f,k=w[D])&&!s(p,k)&&d(p,k,l(f,k));p.prototype=_,_.constructor=p,i("2aba")(r,h,p)}},e0ef:function(t,e,i){"use strict";var r=i("1663"),s=i.n(r);s.a},e648:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"timepicker"},[i("div",{staticClass:"dropdown",class:{"is-active":t.isDropdownOpen}},[i("div",{staticClass:"dropdown-trigger"},[i("button",{staticClass:"button",class:{"is-danger is-outlined":t.isError},attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{click:t.toggleDropdown}},[i("span",{staticClass:"date"},["24h"===t.timeFormat?[t._v("\n                        "+t._s(t._f("zeroFill")(t.pickedTime.hours))+" : "+t._s(t._f("zeroFill")(t.pickedTime.minutes))+"\n                    ")]:[t._v("\n                        "+t._s(t._f("zeroFill")(t.pickedTime.hours))+" : "+t._s(t._f("zeroFill")(t.pickedTime.minutes))+" "+t._s(t.pickedTime.ampm)+"\n                    ")]],2),t._m(0)])]),i("div",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[i("div",{staticClass:"dropdown-content"},[i("timer",{attrs:{timeFormat:t.timeFormat,initHours:t.initHours,initMinutes:t.initMinutes},on:{"set-time":t.handleSetTime}})],1)])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"icon"},[r("img",{attrs:{src:i("f080"),alt:""}})])}],n=(i("c5f6"),i("cadf"),i("551c"),i("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"timer"},["24h"==t.timeFormat?r("div",{staticClass:"timer__24h"},[r("div",{staticClass:"timer__section"},[r("div",{staticClass:"timer__arrow timer__arrowUp",on:{click:function(e){t.incrementTime("hours")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})]),r("div",{staticClass:"timer__number"},[t._v("\n                "+t._s(t._f("zeroFill")(t.time["24h"].hours))+"\n            ")]),r("div",{staticClass:"timer__arrow timer__arrowDown",on:{click:function(e){t.decrementTime("hours")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})])]),r("div",{staticClass:"timer__section"},[r("div",{staticClass:"timer__arrow timer__arrowUp",on:{click:function(e){t.incrementTime("minutes")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})]),r("div",{staticClass:"timer__number"},[t._v("\n                "+t._s(t._f("zeroFill")(t.time["24h"].minutes))+"\n            ")]),r("div",{staticClass:"timer__arrow timer__arrowDown",on:{click:function(e){t.decrementTime("minutes")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})])])]):r("div",{staticClass:"timer__12h"},[r("div",{staticClass:"timer__section"},[r("div",{staticClass:"timer__arrow timer__arrowUp",on:{click:function(e){t.incrementTime("hours")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})]),r("div",{staticClass:"timer__number"},[t._v("\n                "+t._s(t._f("zeroFill")(t.time["12h"].hours))+"\n            ")]),r("div",{staticClass:"timer__arrow timer__arrowDown",on:{click:function(e){t.decrementTime("hours")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})])]),r("div",{staticClass:"timer__section"},[r("div",{staticClass:"timer__arrow timer__arrowUp",on:{click:function(e){t.incrementTime("minutes")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})]),r("div",{staticClass:"timer__number"},[t._v("\n                "+t._s(t._f("zeroFill")(t.time["12h"].minutes))+"\n            ")]),r("div",{staticClass:"timer__arrow timer__arrowDown",on:{click:function(e){t.decrementTime("minutes")}}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})])]),r("div",{staticClass:"timer__section"},[r("div",{staticClass:"timer__arrow timer__arrowUp",on:{click:t.toggleAMPM}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})]),r("div",{staticClass:"timer__number"},[t._v("\n                "+t._s(t.time["12h"].ampm)+"\n            ")]),r("div",{staticClass:"timer__arrow timer__arrowDown",on:{click:t.toggleAMPM}},[r("img",{attrs:{src:i("f080"),alt:"Angle Icon"}})])])])])}),a=[],o={name:"timer",props:{timeFormat:{type:String,required:!0,validator:function(t){return-1!==["12h","24h"].indexOf(t)}},initHours:{type:Number,validator:function(t){return t>=0&&t<=23},default:function(){return(new Date).getHours()}},initMinutes:{type:Number,validator:function(t){return t>=0&&t<=59},default:function(){return(new Date).getMinutes()}}},data:function(){return{time:{"24h":{hours:"",minutes:""},"12h":{hours:"",minutes:"",ampm:""}}}},mounted:function(){this.time["24h"]={hours:this.initHours,minutes:this.initMinutes},this.time["12h"]={hours:this.get12hFormat(this.initHours,this.initMinutes,"hours"),minutes:this.get12hFormat(this.initHours,this.initMinutes,"minutes"),ampm:this.get12hFormat(this.initHours,this.initMinutes,"ampm")}},watch:{time:{handler:function(){this.setTime()},deep:!0}},methods:{get12hFormat:function(t,e,i){var r=t>=12?"pm":"am";switch(t%=12,t=t||12,e=+e<10?"0"+ +e:e,i){case"hours":return t;case"minutes":return e;case"ampm":return r;default:return t+":"+e+" "+r}},incrementTime:function(t){if("hours"===t){if("24h"===this.timeFormat)return+this.time["24h"].hours<23?(this.time["24h"].hours++,!1):(this.time["24h"].hours=0,!1);if("12h"===this.timeFormat)return+this.time["12h"].hours<12?(this.time["12h"].hours++,!1):(this.time["12h"].hours=1,!1)}if("minutes"===t)return+this.time["24h"].minutes<59&&+this.time["12h"].minutes<59?(this.time["24h"].minutes++,this.time["12h"].minutes++,!1):(this.time["24h"].minutes=0,this.time["12h"].minutes=0,!1)},decrementTime:function(t){if("hours"===t){if("24h"===this.timeFormat)return+this.time["24h"].hours>0?(this.time["24h"].hours--,!1):(this.time["24h"].hours=23,!1);if("12h"===this.timeFormat)return+this.time["12h"].hours>1?(this.time["12h"].hours--,!1):(this.time["12h"].hours=12,!1)}if("minutes"===t)return+this.time["24h"].minutes>0&&+this.time["12h"].minutes>0?(this.time["24h"].minutes--,this.time["12h"].minutes--,!1):(this.time["24h"].minutes=59,this.time["12h"].minutes=59,!1)},toggleAMPM:function(){this.time["12h"].ampm="am"===this.time["12h"].ampm?"pm":"am"},setTime:function(){var t="24h"===this.timeFormat?this.time["24h"]:this.time["12h"];this.$emit("set-time",t)}}},c=o,u=(i("e0ef"),i("2877")),l=Object(u["a"])(c,n,a,!1,null,"eb2af8ee",null);l.options.__file="Timer.vue";var d=l.exports,m={name:"time-picker",components:{timer:d},props:{timeFormat:{type:String,required:!0,validator:function(t){return-1!==["12h","24h"].indexOf(t)}},initHours:{type:Number,validator:function(t){return t>=0&&t<=23},default:function(){return(new Date).getHours()}},initMinutes:{type:Number,validator:function(t){return t>=0&&t<=59},default:function(){return(new Date).getMinutes()}},isError:{type:Boolean,default:function(){return!1}}},data:function(){return{isDropdownOpen:!1,pickedTime:{}}},methods:{toggleDropdown:function(){this.isDropdownOpen=!this.isDropdownOpen},closeDropdown:function(){this.isDropdownOpen=!1},handleSetTime:function(t){this.pickedTime=t,this.$emit("input",this.pickedTime)}}},h=m,p=(i("63ff"),Object(u["a"])(h,r,s,!1,null,"309d1819",null));p.options.__file="TimePicker.vue";e["a"]=p.exports},f080:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAY1BMVEUAAAAWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBkWGBmRvucRAAAAIHRSTlMAAQIDCAsMDhASEzg7PE5QZG+FhoiJi4ydnqXZ5Ont/RciaMsAAACiSURBVEiJ7ctHDsMwDERROr333jz3P2WQKDJoq43W0V+RBJ9I6b+b3DbUX7W9Ds00ewFnRlyAx8gK4EQJY3pPgDFGAPdKBgBjrEDdF1kxphGYf9a13Y6EWJpD0jhCmQMrEsYroiYgIiYolNmzImCiwmsSQpkdKxxDiI6hRMuQQhtWKEMLxxCiYyjRMqRQhhaNyRA/kyW+ZpEnRKbjXFEqeXsDZkozHmVn2gcAAAAASUVORK5CYII="},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-35c211a5.b3323bce.js.map