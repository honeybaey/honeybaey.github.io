(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=n(6),i=n(9),u=n(5),s=n(1),m=n(2),f=n(3),d=n(4),b=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"),o.a.createElement("h2",null,t," \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c, ",n," \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e"))}),h=(n(17),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={term:""},e.onSearchChange=function(t){var n=t.target.value;e.setState({term:n}),e.props.onSearchChange(n)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438",value:this.state.term,onChange:this.onSearchChange})}}]),n}(a.Component)),p=n(10),g=(n(18),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c="todo-list-item";return e.done&&(c+=" done"),e.important&&(c+=" important"),o.a.createElement("span",{className:c},o.a.createElement("span",{className:"todo-list-item-label",onClick:a},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),n}(a.Component)),v=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c=t.map((function(e){var t=e.id,c=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(g,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return r(t)},onToggleDone:function(){return a(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),j=(n(20),n(21),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=[{name:"all",label:"\u0412\u0441\u0435"},{name:"active",label:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"},{name:"done",label:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"}].map((function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),key:a,onClick:function(){return n(a)}},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),n}(a.Component)),O=(n(22),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onAddItem(e.state.label),e.setState({label:""})},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",value:this.state.label}),o.a.createElement("button",{className:"btn btn-primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(a.Component)),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).maxId=100,e.createItem=function(t){return{label:t,done:!1,important:!1,id:e.maxId++}},e.state={todoData:[e.createItem("\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),e.createItem("\u043d\u0430"),e.createItem("React.js")],term:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){var n=e.todoData,a=n.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(u.a)(n.slice(0,a)),Object(u.a)(n.slice(a+1)))}}))},e.addItem=function(t){var n=e.createItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(u.a)(t),[n])}}))},e.toggleProperty=function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))},e.onToggleDone=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"done")}}))},e.onToggleImportant=function(t){e.setState((function(n){var a=n.todoData;return{todoData:e.toggleProperty(a,t,"important")}}))},e.onSearchChange=function(t){e.setState({term:t})},e.onFilterChange=function(t){e.setState({filter:t})},e.search=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))},e.filter=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter((function(e){return e.done})).length,l=t.length-c;return o.a.createElement("div",{className:"todo-app"},o.a.createElement(b,{toDo:l,done:c}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(h,{onSearchChange:this.onSearchChange}),o.a.createElement(j,{filter:a,onFilterChange:this.onFilterChange})),o.a.createElement(v,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(O,{onAddItem:this.addItem}))}}]),n}(a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.4eab0535.chunk.js.map