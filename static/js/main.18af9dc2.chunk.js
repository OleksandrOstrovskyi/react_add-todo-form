(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a.n(n),i=a(3),r=a(6),o=a(7),c=a(9),l=a(8),d=a(4),u=a(1),m=a.n(u),h=a(0),b=function(e){var t=e.name,a=e.username,n=e.email;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Username:"})," ".concat(a)]}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[Object(h.jsx)("strong",{children:"Email:"})," ".concat(n)]})]})},p=(a(15),function(e){var t=e.title,a=e.completed,n=e.user;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:t}),n&&Object(h.jsx)(b,{name:n.name,username:n.username,email:n.email}),Object(h.jsx)("br",{}),a?Object(h.jsx)("span",{className:"completed",children:Object(h.jsx)("i",{children:"Well done"})}):Object(h.jsx)("span",{className:"not-completed",children:Object(h.jsx)("i",{children:"Not completed"})})]})}),j=(a(16),function(e){var t=e.todos,a=void 0===t?[]:t;return Object(h.jsx)("ul",{className:"todo-list",children:a.map((function(e){return Object(h.jsx)("li",{className:"todo-list-element",children:Object(h.jsx)(p,{title:e.title,completed:e.completed,user:e.user})},e.id)}))})}),g=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],y=function(e){return g.find((function(t){return t.id===e}))},f=(a(17),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:y(e.userId)||null})}))),x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={allTodos:Object(i.a)(f),newTodoTitle:"",selectedUserId:0,hasTitleError:!1,hasUserError:!1},e.addNewTodo=function(t){e.setState((function(e){return{allTodos:[].concat(Object(i.a)(e.allTodos),[t])}}))},e.handleTitleChange=function(t){e.setState({newTodoTitle:t.target.value,hasTitleError:!1})},e.handleUserChange=function(t){e.setState({selectedUserId:+t.target.value,hasUserError:!1})},e.getNewTodo=function(){var t=e.state,a=t.allTodos,n=t.newTodoTitle,s=t.selectedUserId;return{id:a.length+1,title:n,userId:s,completed:!1,user:y(s)||null}},e.clearState=function(){e.setState({newTodoTitle:"",selectedUserId:0})},e.validateForm=function(){var t=e.state,a=t.newTodoTitle,n=t.selectedUserId;return!(!a||!n)||(e.setState({hasTitleError:!a,hasUserError:!n}),!1)},e.handleSubmit=function(t){if(t.preventDefault(),e.validateForm()){var a=e.getNewTodo();e.addNewTodo(a)}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.allTodos,a=e.newTodoTitle,n=e.selectedUserId,s=e.hasTitleError,i=e.hasUserError;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("form",{action:"post",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Write your task",value:a,onChange:this.handleTitleChange}),s&&Object(h.jsx)("span",{children:"Please enter the title"})]}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("select",{value:n,onChange:this.handleUserChange,children:[Object(h.jsx)("option",{value:"0",children:"Choose a user"}),g.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),i&&Object(h.jsx)("span",{children:"Please choose a user"})]}),Object(h.jsx)("button",{type:"submit",children:"Add"})]}),Object(h.jsx)(j,{todos:t})]})}}]),a}(m.a.Component),O=x;s.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.18af9dc2.chunk.js.map