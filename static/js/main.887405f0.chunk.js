(this["webpackJsonprc-videos"]=this["webpackJsonprc-videos"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),o=a(6),s=a.n(o),u=a(17),l=a(2),m=a(3),p=a(5),v=a(4),d=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Video Search: "),r.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(r.a.Component),b=a(18),f=a.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),h=function(e){var t=e.video;return r.a.createElement("div",null,r.a.createElement("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),t.snippet.title)},y=function(e){var t=e.videos.map((function(e){return r.a.createElement(h,{video:e,key:e.id})}));return r.a.createElement("div",null,t)},E="AIzaSyA5zAKQbFaBXKFtvoY9GtjMR_jRaECzKaY",S=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[]},e.onTermSubmit=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:5,key:E}});case 2:n=t.sent,e.setState({videos:n.data.items});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(d,{onFormSubmit:this.onTermSubmit}),r.a.createElement(y,{videos:this.state.videos}))}}]),a}(n.Component);c.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.887405f0.chunk.js.map