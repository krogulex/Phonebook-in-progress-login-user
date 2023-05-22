"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{5500:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(9434),r=t(3634),s=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.isAdding},i=function(e){return e.contacts.error},l=function(e){var n=s(e),t=function(e){return e.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},d=t(9140),u=t(4224),h=t(184),m=function(){var e=(0,a.I0)(),n=(0,a.v9)(s);return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)("h2",{children:"Add new contact"}),(0,h.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var a=t.target,s={name:a.elements[0].value,number:a.elements[1].value};if(n.find((function(e){return e.name.toLowerCase()===s.name.toLowerCase()})))return alert("".concat(s.name," is already in contacts"));e((0,r.uK)(s)),a.reset()},children:[(0,h.jsx)(d.I,{id:"name",type:"text",placeholder:"Enter name",focusBorderColor:"teal",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)("div",{children:(0,h.jsx)(d.I,{id:"number",type:"tel",placeholder:"Enter phone number",focusBorderColor:"teal",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,h.jsx)(u.z,{colorScheme:"teal",className:"add-button",type:"submit",children:"Add contact"})]})]})},p=function(){var e=(0,a.v9)(s),n=(0,a.v9)(l),t=(0,a.I0)();return(0,h.jsx)("div",{children:0===e.length?(0,h.jsx)("p",{children:"No contacts yet"}):0===n.length?(0,h.jsx)("p",{children:"No contacts found"}):n.map((function(e){return(0,h.jsxs)("div",{id:e.id,className:"contact-item",children:[(0,h.jsx)("span",{children:"\u2706"}),(0,h.jsxs)("p",{children:[(0,h.jsxs)("span",{children:[e.name,": "]}),e.phone]}),(0,h.jsx)(u.z,{colorScheme:"teal",className:"contact-delete",onClick:function(){return n=e.id,t((0,r.GK)(n));var n},children:"Delete"})]},e.id)}))})},f=t(4808),x=function(){var e=(0,a.I0)();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Find contacts by name"}),(0,h.jsx)("form",{children:(0,h.jsx)(d.I,{maxWidth:"47%",focusBorderColor:"teal",onChange:function(n){var t=n.target.value;e((0,f.x)(t))},type:"text",placeholder:"Enter name",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})})]})},j=t(2791),v=t(1523);function b(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,a.v9)(o),s=(0,a.v9)(i);return(0,j.useEffect)((function(){e((0,r.yF)())}),[e]),(0,h.jsxs)("div",{className:"page-contacts",children:[(0,h.jsx)(m,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(x,{}),n&&!s&&(0,h.jsx)("div",{className:"loader",children:(0,h.jsx)(v.g4,{height:"80",width:"80",radius:"9",color:"#319795",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0,ma:!0})}),s&&(0,h.jsx)("p",{children:"Service communication error"}),(0,h.jsx)(p,{}),t&&!s&&(0,h.jsx)("div",{className:"loader",children:(0,h.jsx)(v.g4,{height:"80",width:"80",radius:"9",color:"#319795",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0,ma:!0})})]})}}}]);
//# sourceMappingURL=500.d9a233f3.chunk.js.map