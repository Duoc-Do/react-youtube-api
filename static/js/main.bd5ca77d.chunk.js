(this["webpackJsonprc-videos"]=this["webpackJsonprc-videos"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),o=a(6),s=a.n(o),l=a(17),m=a(2),u=a(3),d=a(5),v=a(4),p=(a(25),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search: "),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange,placeholder:"Search Videos..."}))))}}]),a}(i.a.Component)),f=a(18),h=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),b=(a(43),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"video-item item",onClick:function(){a(t)}},i.a.createElement("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title,className:"ui image"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"}," ",t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(b,{video:e,key:e.id.videoId,onVideoSelect:a})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n," ")},S=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading....");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a,title:"GBIT - Video Player"})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"}," ",t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},y="AIzaSyA5zAKQbFaBXKFtvoY9GtjMR_jRaECzKaY",N=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:5,key:y}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("Fantasy")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(p,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(S,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),a}(n.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bd5ca77d.chunk.js.map