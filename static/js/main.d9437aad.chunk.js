(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={enter:"transition_enter__2zN-h",enterActive:"transition_enterActive__3k4Jg",exit:"transition_exit__8MDWR",exitActive:"transition_exitActive__1u7It"}},16:function(t,e,n){t.exports={enter:"pb_enter__HM_wD",enterActive:"pb_enterActive__mB2AH",exit:"pb_exit__pWwmV",exitActive:"pb_exitActive__2KtrW"}},20:function(t,e,n){t.exports=n(29)},25:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(25),n(17)),l=n(5),u=n(6),s=n(9),m=n(7),b=n(10),h=n(13),p=n(14),f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault(),n.props.submitContact({name:n.state.name,number:n.state.number,id:Object(p.uuid)()}),n.setState({name:"",number:""})},n.handleChange=function(t){n.setState(Object(h.a)({},t.target.name,t.target.value))},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name "),c.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("label",null,"Number "),c.a.createElement("input",{type:"text",name:"number",onChange:this.handleChange,value:this.state.number}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),e}(a.Component),d=function(t){var e=t.contact,n=e.name,a=e.number,r=e.id,o=t.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",null,n," "),c.a.createElement("span",null,a),c.a.createElement("button",{type:"button",id:r,onClick:o},"Delete"))},g=n(31),v=n(30),E=n(15),_=n.n(E),C=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{component:"ul"},e.map((function(t){return c.a.createElement(v.a,{timeout:1500,classNames:_.a,unmountOnExit:!0},c.a.createElement(d,{contact:t,key:t.id,deleteContact:n}))}))))},y=function(t){var e=t.getName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Find contact by name..."),c.a.createElement("input",{type:"text",onChange:e}))},O=n(16),x=n.n(O),S=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:"",inUp:!1},n.submitContact=function(t){console.log("data",{data:t}),n.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[t])}}))},n.deleteContact=function(t){var e=t.target.id;n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n.getName=function(t){n.setState({filter:t.target.value})},n.filterContacts=function(){return n.state.contacts.filter((function(t){return t.name.toLocaleLowerCase().includes(n.state.filter)}))},n}return Object(b.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=null!==localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[];console.log(t),this.setState({contacts:t,inUp:!0})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v.a,{in:this.state.inUp,timeout:1500,classNames:x.a},c.a.createElement("h1",null,"Phonebook")),c.a.createElement(f,{submitContact:this.submitContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(y,{getName:this.getName}),c.a.createElement(C,{contacts:this.filterContacts(),deleteContact:this.deleteContact}))}}]),e}(a.Component);o.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d9437aad.chunk.js.map