"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{5500:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(9434),r=t(3634),s=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.isAdding},o=function(e){return e.contacts.error},d=function(e){var n=s(e),t=function(e){return e.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},l=t(184),u=function(){var e=(0,a.I0)(),n=(0,a.v9)(s);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var a=t.target,s={name:a.elements[0].value,number:a.elements[1].value};if(n.find((function(e){return e.name.toLowerCase()===s.name.toLowerCase()})))return alert("".concat(s.name," is already in contacts"));e((0,r.uK)(s)),a.reset()},children:[(0,l.jsx)("input",{id:"name",type:"text",placeholder:"Enter name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("div",{children:(0,l.jsx)("input",{id:"number",type:"tel",placeholder:"Enter phone number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,l.jsx)("button",{className:"add-button",type:"submit",children:"Add contact"})]}),(0,l.jsx)("h2",{children:"Contacts"})]})},h=function(){var e=(0,a.v9)(s),n=(0,a.v9)(d),t=(0,a.I0)();return(0,l.jsx)("div",{children:e.length>n.length&&0===n.length?(0,l.jsx)("p",{children:"No contacts found"}):n.map((function(e){return(0,l.jsxs)("div",{id:e.id,className:"contact-item",children:[(0,l.jsxs)("p",{children:[(0,l.jsxs)("span",{children:[e.name,": "]}),e.phone]}),(0,l.jsx)("button",{className:"contact-delete",onClick:function(){return n=e.id,t((0,r.GK)(n));var n},children:"delete"})]},e.id)}))})},m=t(4808),p=function(){var e=(0,a.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{children:"Find contacts by name"}),(0,l.jsx)("input",{onChange:function(n){var t=n.target.value;e((0,m.x)(t))},type:"text",placeholder:"Enter name",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]})},f=t(2791),x=t(643);function v(){var e=(0,a.I0)(),n=(0,a.v9)(i),t=(0,a.v9)(c),s=(0,a.v9)(o);return(0,f.useEffect)((function(){e((0,r.yF)())}),[e]),(0,l.jsxs)("div",{className:"content-box",children:[(0,l.jsx)(u,{}),(0,l.jsx)(p,{}),n&&!s&&(0,l.jsx)("div",{className:"loader",children:(0,l.jsx)(x.g4,{height:"80",width:"80",radius:"9",color:"#008CBA",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0,ma:!0})}),s&&(0,l.jsx)("p",{children:"Service communication error"}),(0,l.jsx)(h,{}),t&&!s&&(0,l.jsx)("div",{className:"loader",children:(0,l.jsx)(x.g4,{height:"80",width:"80",radius:"9",color:"#008CBA",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0,ma:!0})})]})}}}]);
//# sourceMappingURL=500.b0160ffe.chunk.js.map