(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(7),u=n.n(a),o=n(4),i=(n(27),n(28),n(3)),s=n(34),l=(n(29),n(6)),j=n(2),b=n(11),d=n(15),x="UPDATE_XARR",m="ADD_XARR",O="DELETE_ROW",h="ADD_ROW",f=function(t){return{type:m,xArr:t}},p=function(t,e){return{type:x,rowIndex:t,colIndex:e}},_=function(t){return{type:O,rowIndex:t}},v=function(t){return{type:h,row:t}},A=function(t){return t.xArr},M={xArr:[]},g=Object(b.legacy_createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(j.a)(Object(j.a)({},t),{},{xArr:e.xArr});case x:var n=Object(j.a)({},t.xArr[e.rowIndex][e.colIndex]);n.amount+=1;var r=Object(l.a)(t.xArr);return r[e.rowIndex][e.colIndex]=n,Object(j.a)(Object(j.a)({},t),{},{xArr:r});case O:return Object(j.a)(Object(j.a)({},t),{},{xArr:t.xArr.filter((function(t,n){return n!==e.rowIndex}))});case h:return Object(j.a)(Object(j.a)({},t),{},{xArr:[].concat(Object(l.a)(t.xArr),[e.row])});default:return t}}),Object(d.composeWithDevTools)()),y=n(1),N=function(){var t=Object(r.useState)(0),e=Object(i.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(0),u=Object(i.a)(a,2),l=u[0],j=u[1],b=Object(o.b)();return Object(y.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=Array.from({length:n},(function(){return Array.from({length:l},(function(){return{id:Object(s.a)(),amount:Math.ceil(1e3*Math.random())}}))}));b(f(e))},className:"box Form",children:[Object(y.jsxs)("label",{htmlFor:"rows",className:"label",children:["Count rows:",Object(y.jsx)("input",{type:"number",min:0,max:100,id:"rows",value:n,onChange:function(t){return c(+t.target.value)},className:"Form__input"})]}),Object(y.jsxs)("label",{htmlFor:"columns",className:"label",children:["Count columns:",Object(y.jsx)("input",{type:"number",min:0,max:100,id:"columns",value:l,onChange:function(t){return j(+t.target.value)},className:"Form__input"})]}),Object(y.jsx)("button",{type:"submit",className:"button is-info Form__button",children:"Create matrix"})]})},w=n(16),F=n.n(w),I=(n(31),function(){var t,e=Object(o.c)(A),n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],u=c[1],l=Object(r.useState)(null),j=Object(i.a)(l,2),b=j[0],d=j[1],x=Object(o.b)(),m=Array.from({length:null===(t=e[0])||void 0===t?void 0:t.length},(function(t,n){return Math.round(e.reduce((function(t,e){return t+e[n].amount}),0)/e.length)})),O=function(t){return t.reduce((function(t,e){return t+e.amount}),0)},h=function(t,e){return(t/O(e)*100).toFixed(1)},f=function(t){u(t),d(null)},M=function(t){d(t),u(null)};return Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)("table",{className:"Matrix",children:Object(y.jsxs)("tbody",{children:[e.map((function(t,e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("button",{type:"button",onClick:function(){return x(_(e))},className:"Matrix__button Matrix__delete",children:"\ud83d\uddd1"})}),t.map((function(n,r){return Object(y.jsx)("td",{children:Object(y.jsx)("button",{type:"button",onClick:function(){x(p(e,r))},onMouseOver:function(){return f(n)},onFocus:function(){return f(n)},onMouseLeave:function(){return u(null)},className:F()("Matrix__button",{Matrix__relatedButton:a&&n.id!==a.id&&(a.amount-n.amount<=100&&a.amount-n.amount>=0||n.amount-a.amount<=100&&n.amount-a.amount>=0),Matrix__selectedButton:n.id===(null===a||void 0===a?void 0:a.id),Matrix__buttonPercent:b===e}),children:b===e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("span",{children:"".concat(h(n.amount,t),"%")}),Object(y.jsx)("div",{style:{height:"".concat(h(n.amount,t),"%")},className:"Matrix__part"})]}):Object(y.jsx)("span",{children:n.amount})})},n.id)})),Object(y.jsx)("td",{className:"Matrix__selected Matrix__sum",onFocus:function(){return M(e)},onMouseOver:function(){return M(e)},onMouseLeave:function(){return d(null)},children:O(t)})]},Object(s.a)())})),Object(y.jsxs)("tr",{children:[e.length>0&&Object(y.jsx)("td",{}),m.map((function(t){return Object(y.jsx)("td",{className:"Matrix__selected",children:t},Object(s.a)())})),e.length>0&&Object(y.jsx)("td",{className:"Matrix__selected",children:"avg/sum"})]})]})}),e.length>0&&Object(y.jsx)("button",{type:"button",className:"button is-info",onClick:function(){var t,n=Array.from({length:null===(t=e[0])||void 0===t?void 0:t.length},(function(){return{id:Object(s.a)(),amount:Math.ceil(1e3*Math.random())}}));x(v(n))},children:"Add row"})]})}),C=(n(32),function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(N,{}),Object(y.jsx)(I,{})]})});u.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(o.a,{store:g,children:Object(y.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0fbdd74c.chunk.js.map