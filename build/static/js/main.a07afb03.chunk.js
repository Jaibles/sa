(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(83),r=t.n(l),s=(t(97),t(84)),i=t(85),o=t(90),m=t(86),d=t(91),u=t(87),p=t.n(u),v=t(88),f=t.n(v),g=(t(242),t(243),t(89)),E=t.n(g),N=new f.a.Converter,h=new p.a({apiKey:"keyNxi8D57wMKr4Ge"}).base("appKL8Umn96W3lcVd"),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={records:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h("Stops").select({view:"Grid view"}).eachPage(function(a,t){e.setState({records:a}),console.log(a),t()})}},{key:"createHTML",value:function(e){return N.makeHtml(e)}},{key:"parseImg",value:function(e){return e.imageURL instanceof Array?e.imageURL[0].thumbnails.large.url:""}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container-fluid mt-5"},c.a.createElement("img",{src:E.a,alt:"Logo"}),c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card-deck"},this.state.records.length>0?this.state.records.map(function(a,t){return c.a.createElement("div",{className:"col-md-4 d-flex align-items-stretch",key:t},c.a.createElement("div",{className:"card card-location"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"image-cover"},c.a.createElement("img",{className:"card-img",src:e.parseImg(a.fields)})),c.a.createElement("div",{class:"card-location-header"},c.a.createElement("h3",{className:"card-title card-location-title"},a.fields.Stop,c.a.createElement("small",{className:"text-muted card-location-days"},a.fields["Days (planned)"]," days")),c.a.createElement("span",{className:"card-location-place-type badge badge-warning",content:'{record.fields["Place Type"]}'},a.fields["Place Type"])),c.a.createElement("div",{className:"card-text",dangerouslySetInnerHTML:{__html:e.createHTML(a.fields.Description)}})),c.a.createElement("div",{className:"card-footer"},c.a.createElement("p",null,c.a.createElement("span",{className:""},a.fields["Activities available"])),c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Planned Stop: "),a.fields["Planned Stop"]),c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Budget: $"),a.fields["Daily Budget"]))))}):c.a.createElement("div",{className:"d-flex justify-content-center loading"},c.a.createElement("div",{class:"text-center"},c.a.createElement("div",{className:"spinner-border text-warning",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,a,t){e.exports=t.p+"static/media/logo.942c8f64.svg"},92:function(e,a,t){e.exports=t(246)},97:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.a07afb03.chunk.js.map