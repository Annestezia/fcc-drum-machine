(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),c=t.n(o),i=(t(15),t(4)),s=t(5),l=t(7),d=t(6),u=t(8),m=t(1);t(17);function f(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(i)throw o}}}}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={currentDescr:"Play it!"},t.handleClick=t.handleClick.bind(Object(m.a)(Object(m.a)(t))),t.handleKeyPress=t.handleKeyPress.bind(Object(m.a)(Object(m.a)(t))),t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"handleClick",value:function(e){e.target.children[0].currentTime=0,e.target.children[0].play(),this.setState({currentDescr:e.target.id})}},{key:"handleKeyPress",value:function(e){var n,t=f(document.querySelectorAll(".drum-pad"));try{for(t.s();!(n=t.n()).done;){var r=n.value;e.key.toUpperCase()===r.textContent&&r.click()}}catch(a){t.e(a)}finally{t.f()}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return a.a.createElement("div",{id:"drum-machine"},a.a.createElement(v,{display:this.state.currentDescr}),a.a.createElement(w,{keys:k,handleClick:this.handleClick,handleKeyPress:this.handleKeyPress}),a.a.createElement(y,null))}}]),n}(a.a.Component),y=function(e){return a.a.createElement("div",{id:"credits"},"by Annestezia")},v=function(e){return a.a.createElement("div",{id:"display"},e.display)},w=a.a.memo(function(e){var n=e.keys.map(function(n,t){return a.a.createElement("button",{className:"drum-pad",id:n.descr,key:n.descr,onClick:e.handleClick,onKeyPress:e.handleKeyPress},n.name,a.a.createElement("audio",{src:n.clip,class:"clip",id:n.name}))});return a.a.createElement("div",{id:"pads"},n)}),k=[{name:"Q",clip:"http://www.drumsoundz.com/Bassdrum-01.wav",descr:"Bassdrum-01"},{name:"W",clip:"http://www.drumsoundz.com/Bassdrum-02.wav",descr:"Bassdrum-02"},{name:"E",clip:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",descr:"Kick-01"},{name:"A",clip:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",descr:"Kick-02"},{name:"S",clip:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",descr:"Hat-1"},{name:"D",clip:"http://www.drumsoundz.com/Snare1.wav",descr:"Snare-1"},{name:"Z",clip:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",descr:"Snare-2"},{name:"X",clip:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",descr:"Dry_Ohh"},{name:"C",clip:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",descr:"Chord-1"}],b=p,g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fcc-drum-machine",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/fcc-drum-machine","/service-worker.js");g?(function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(n,e)})}}()},9:function(e,n,t){e.exports=t(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.f1d28f21.chunk.js.map