(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),i=t.n(o),c=(t(15),t(4)),s=t(5),l=t(7),d=t(6),u=t(1),m=t(8),h=(t(16),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={currentDescr:"Play it!"},t.handleClick=t.handleClick.bind(Object(u.a)(t)),t.handleKeyPress=t.handleKeyPress.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"handleClick",value:function(e){e.target.children[0].play(),this.setState({currentDescr:e.target.id})}},{key:"handleKeyPress",value:function(e){var n=document.querySelectorAll(".drum-pad"),t=!0,a=!1,r=void 0;try{for(var o,i=n[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var c=o.value;e.key.toUpperCase()===c.textContent&&c.click()}}catch(s){a=!0,r=s}finally{try{t||null==i.return||i.return()}finally{if(a)throw r}}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",{id:"drum-machine"},r.a.createElement(f,{display:this.state.currentDescr}),r.a.createElement(p,{keys:w,handleClick:this.handleClick,handleKeyPress:this.handleKeyPress}),r.a.createElement(v,null))}}]),n}(r.a.Component)),v=function(e){return r.a.createElement("div",{id:"credits"},"by Annestezia")},f=function(e){return r.a.createElement("div",{id:"display"},e.display)},p=r.a.memo(function(e){var n=e.keys.map(function(n,t){return r.a.createElement("button",{className:"drum-pad",id:n.descr,key:n.descr,onClick:e.handleClick,onKeyPress:e.handleKeyPress},n.name,r.a.createElement("audio",{src:n.clip,class:"clip",id:n.name}))});return r.a.createElement("div",{id:"pads"},n)}),w=[{name:"Q",clip:"./sounds/Bassdrum-01.wav",descr:"Bassdrum-01"},{name:"W",clip:"./sounds/Bassdrum-02.wav",descr:"Bassdrum-02"},{name:"E",clip:"./sounds/kick.wav",descr:"Kick"},{name:"A",clip:"./sounds/floor-tom.wav",descr:"Floor Tom"},{name:"S",clip:"./sounds/Hat Closed.wav",descr:"Hat closed"},{name:"D",clip:"./sounds/hi-hat.wav",descr:"Hi-hat"},{name:"Z",clip:"./sounds/tapesnare.wav",descr:"Tape Snare"},{name:"X",clip:"./sounds/clap.wav",descr:"Clap"},{name:"C",clip:"./sounds/rack-tom.wav",descr:"Rack Tom"}],y=h,k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fcc-drum-machine",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/fcc-drum-machine","/service-worker.js");k?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):g(n,e)})}}()},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ce710564.chunk.js.map