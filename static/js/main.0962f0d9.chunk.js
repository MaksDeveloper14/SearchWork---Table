(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),s=a.n(r),o=a(3),c=a.n(o),i=a(6),m=a(7),u=a(8),d=a(12),p=a(10),h=a(9),E=a.n(h),f=(a(24),function(){return l.a.createElement("div",{className:"loader-wrap"},l.a.createElement("div",{className:"loadingio-spinner-eclipse-qv3a04ijgmf"},l.a.createElement("div",{className:"ldio-0o69o5915vpe"},l.a.createElement("div",null))))}),g=function(e){return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{onClick:e.onSort.bind(null,"id")},"ID ","id"===e.sortField?l.a.createElement("small",null,e.sort):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"firstName")},"First Name ","firstName"===e.sortField?l.a.createElement("small",null,e.sort):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"lastName")},"Last Name ","lastName"===e.sortField?l.a.createElement("small",null,e.sort):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"email")},"Email ","email"===e.sortField?l.a.createElement("small",null,e.sort):null),l.a.createElement("th",{onClick:e.onSort.bind(null,"phone")},"Phone ","phone"===e.sortField?l.a.createElement("small",null,e.sort):null))),l.a.createElement("tbody",null,e.data.map((function(t){return l.a.createElement("tr",{key:t.id+t.phone,onClick:e.onRowSelect.bind(null,t)},l.a.createElement("td",null,t.id),l.a.createElement("td",null,t.firstName),l.a.createElement("td",null,t.lastName),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phone))}))))},b={marginBottom:"10px"},N=function(e){return l.a.createElement("input",{type:"button",style:b,onClick:function(){return e.add()},value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})},C=function(e){var t=e.person;return l.a.createElement("div",null,l.a.createElement("p",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,t.firstName+" "+t.lastName)),l.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",l.a.createElement("textarea",{defaultValue:t.description})),l.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",l.a.createElement("b",null,t.address.streetAddress)),l.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434: ",l.a.createElement("b",null,t.address.city)),l.a.createElement("p",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",l.a.createElement("b",null,t.address.state)),l.a.createElement("p",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",l.a.createElement("b",null,t.address.zip)))},v=function(e){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"50px 0"}},l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")},className:"btn btn-success"},"32 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"),l.a.createElement("button",{onClick:function(){return e.onSelect("http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")},className:"btn btn-danger"},"1000 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"))},w=a(11),x=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),r=a[0],s=a[1];return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.onSearch(r)}},"Seacrh")),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){s(e.target.value)},value:r}))},S=a(1),k=a.n(S),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isModeSelected:!1,isLoading:!1,data:[],search:"",sort:"asc",sortField:"id",row:null,currentPage:0},e.onSort=function(t){var a=e.state.data.concat(),n="asc"===e.state.sort?"desc":"asc",l=k.a.orderBy(a,t,n);e.setState({data:l,sort:n,sortField:t}),e.setState({data:l,sort:n,sortField:t})},e.modeSelectHandler=function(t){e.setState({isModeSelected:!0,isLoading:!0}),e.fetchData(t)},e.onRowSelect=function(t){e.setState({row:t})},e.addRow=function(){alert("\u041d\u0430\u0436\u0430\u0442\u0438\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c")},e.pageCnahgeHandler=function(t){var a=t.selected;e.setState({currentPage:a})},e.searchHandler=function(t){e.setState({search:t,currentPage:0})},e.getFilteredData=function(){var t=e.state,a=t.data,n=t.search;return n?a.filter((function(e){return e.firstName.toLowerCase().includes(n.toLowerCase())||e.lastName.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())||e.phone.toLowerCase().includes(n.toLowerCase())})):a},e}return Object(u.a)(a,[{key:"fetchData",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,this.setState({isLoading:!1,data:k.a.orderBy(n,this.state.sortField,this.state.sort)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.isModeSelected)return l.a.createElement("div",{className:"container"},l.a.createElement(v,{onSelect:this.modeSelectHandler}));var e=this.getFilteredData(),t=Math.ceil(e.length/50),a=k.a.chunk(e,50)[this.state.currentPage];return l.a.createElement("div",{className:"container"},this.state.isLoading?l.a.createElement(f,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{onSearch:this.searchHandler}),l.a.createElement(N,{add:this.addRow}),l.a.createElement(g,{data:a,onSort:this.onSort,sort:this.state.sort,sortField:this.state.sortField,onRowSelect:this.onRowSelect})),this.state.data.length>50?l.a.createElement(E.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.pageCnahgeHandler,containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",forcePage:"{this.state.currentPage}"}):null,this.state.row?l.a.createElement(C,{person:this.state.row}):null)}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.0962f0d9.chunk.js.map