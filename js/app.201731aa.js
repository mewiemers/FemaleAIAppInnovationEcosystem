(function(e){function t(t){for(var n,i,o=t[0],s=t[1],u=t[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/FemaleAIAppInnovationEcosystem/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;r.push([8,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"35cb":function(e,t,a){"use strict";a("a0cf")},"37dd":function(e,t,a){},4:function(e,t){},4398:function(e,t,a){"use strict";a("8c74")},5:function(e,t){},"5c0b":function(e,t,a){"use strict";a("9c0c")},6:function(e,t){},7:function(e,t){},"71f4":function(e,t,a){},"77dc":function(e,t,a){"use strict";a("37dd")},8:function(e,t,a){e.exports=a("cd49")},"8c74":function(e,t,a){},9931:function(e,t,a){},"9a18":function(e,t,a){"use strict";a("9931")},"9c0c":function(e,t,a){},a0cf:function(e,t,a){},aac2:function(e,t,a){"use strict";a("d27c")},b2db:function(e,t,a){},c0b9:function(e,t,a){},caaf:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("transition",{attrs:{name:e.transitionName}},[a("vue-page-stack",[a("router-view",{key:e.screen,staticClass:"router-view-c"})],1)],1)],1)},r=[],i=a("d4ec"),o=a("bee2"),s=a("262e"),u=a("2caf"),l=a("9ab4"),f=a("1b40"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tile is-ancestor",staticStyle:{"margin-bottom":"100px"}},[a("div",{staticClass:"tile is-parent is-vertical"},e._l(e.imageList,(function(t){return a("div",{key:t.image_url,staticClass:"tile is-child"},[a("b-image",{attrs:{ratio:"1by1  ",src:""+e.apiUrl+t.image_url}}),a("b-button",{attrs:{id:"btn-delete",rounded:"",type:"is-black"},on:{click:function(a){return e.deleteImage(t)}}},[e._v(" Delete ")])],1)})),0)])])},b=[],p=(a("99af"),a("2f62")),v=a("bfa9"),h=a("bc3a"),m=a.n(h),g="https://milligram-melanie.azurewebsites.net/",y="540d0d1874f047f187f37a5c245ad6b6",O="629b39807dd944079e152366de4f3dd7",j="https://face-api-melanie.cognitiveservices.azure.com/",k=new v["a"]({storage:window.localStorage});n["a"].use(p["a"]);var _=new p["a"].Store({state:{githubUsername:"mewiemers",imageList:[]},mutations:{setGithubUsername:function(e,t){e.githubUsername=t},setImageList:function(e,t){console.log(t),e.imageList=t}},actions:{refreshImageList:function(e){m.a.get("".concat(g,"images")).then((function(t){e.commit("setImageList",t.data)})).catch((function(t){e.commit("setImageList",[]),console.log(t)}))},deleteImage:function(e,t){m.a.delete("".concat(g).concat(t.image_url)).then((function(){e.dispatch("refreshImageList")}))}},modules:{},plugins:[k.plugin]}),w=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.apiUrl=g,e}return Object(o["a"])(a,[{key:"imageList",get:function(){return this.$store.state.imageList}},{key:"deleteImage",value:function(e){this.$store.dispatch("deleteImage",e)}},{key:"mounted",value:function(){this.$store.dispatch("refreshImageList")}}]),a}(f["c"]);w=Object(l["c"])([Object(f["a"])({store:_})],w);var C=w,x=C,I=(a("d033"),a("2877")),S=Object(I["a"])(x,d,b,!1,null,"b35043e8",null),U=S.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile is-size-4"},[a("b-image",{staticStyle:{"margin-top":"100px"},attrs:{src:e.profile.avatar_url,alt:"Profile Picture of User",ratio:"1by1",rounded:""}}),a("h1",[e._v(e._s(e.profile.name))]),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{tag:"router-link",to:"/editprofile",rounded:"",type:"is-black",expanded:""}},[e._v(" Edit Profile ")])],1)],1)},P=[],$="https://api.github.com/users/",E=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.profile={},e}return Object(o["a"])(a,[{key:"mounted",value:function(){this.getProfileDetails()}},{key:"githubUsername",get:function(){return this.$store.state.githubUsername}},{key:"getProfileDetails",value:function(){var e=this;m.a.get("".concat($).concat(this.githubUsername)).then((function(t){e.profile=t.data})).catch((function(e){console.log(e)}))}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("githubUsername")],E.prototype,"getProfileDetails",null),E=Object(l["c"])([Object(f["a"])({store:_})],E);var L=E,B=L,A=(a("77dc"),Object(I["a"])(B,R,P,!1,null,"02365aba",null)),F=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{"fixed-bottom":"",centered:"","mobile-burger":!1},scopedSlots:e._u([{key:"brand",fn:function(){return[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("div",{staticClass:"buttons-container navbar-center"},[e.showCameraButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/camera"}},[a("b-icon",{attrs:{type:"is-white",icon:"camera",pack:"fas"}})],1)],1):e._e(),e.showSpeechButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/microphone"}},[a("b-icon",{attrs:{type:"is-white",icon:"microphone",pack:"fas"}})],1)],1):e._e(),e.showFaceButton?a("b-button",{attrs:{rounded:"",type:"is-black"}},[a("router-link",{attrs:{to:"/faceai"}},[a("b-icon",{attrs:{type:"is-white",icon:"grin-stars",pack:"fas"}})],1)],1):e._e()],1)]},proxy:!0}])})},D=[],V=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"showCameraButton",get:function(){return""!==g}},{key:"showFaceButton",get:function(){return""!==y&&""!==j}},{key:"showSpeechButton",get:function(){return""!==O}}]),a}(f["c"]);V=Object(l["c"])([f["a"]],V);var z=V,H=z,M=(a("ffb0"),Object(I["a"])(H,N,D,!1,null,"2d824408",null)),T=M.exports,G=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.transitionName="forward",e.screen="home",e}return Object(o["a"])(a,[{key:"route",value:function(e,t){"forward"===e.params["stack-key-dir"]?this.transitionName="forward":this.transitionName="back"}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("$route")],G.prototype,"route",null),G=Object(l["c"])([Object(f["a"])({components:{Profile:F,ImageList:U,Navbar:T}})],G);var W=G,J=W,q=(a("5c0b"),Object(I["a"])(J,c,r,!1,null,null,null)),K=q.exports,Z=a("289d"),Q=(a("5abe"),a("ecee")),X=a("c074"),Y=a("ad3d"),ee=a("8c4f"),te=a("04e1"),ae=a.n(te),ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{"fixed-top":"","mobile-burger":!1},scopedSlots:e._u([{key:"brand",fn:function(){return[a("div",{attrs:{id:"left"}}),a("div",{attrs:{id:"right"}}),a("div",{attrs:{id:"top"}}),a("div",{attrs:{id:"bottom"}}),a("b-navbar-item",{staticClass:"title is-2",attrs:{id:"fontnavbar"}},[e._v(" Milligram ")])]},proxy:!0}])}),a("div",{staticClass:"container"},[a("Profile"),a("ImageList"),a("Navbar")],1)],1)},ce=[],re=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(f["c"]);re=Object(l["c"])([Object(f["a"])({components:{Profile:F,ImageList:U,Navbar:T}})],re);var ie=re,oe=ie,se=(a("aac2"),Object(I["a"])(oe,ne,ce,!1,null,"3b557880",null)),ue=se.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"camera"}},[a("EasyCamera",{ref:"camera",attrs:{fullscreen:""},on:{close:e.onClose},model:{value:e.picture,callback:function(t){e.picture=t},expression:"picture"}})],1)},fe=[];a("d3b7"),a("25f0");function de(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},t="".concat(e()).concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e());return t.toLowerCase()}var be=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.picture="",e}return Object(o["a"])(a,[{key:"onClose",value:function(){ot.back()}},{key:"savePicture",value:function(){var e=this;this.camera.close(),fetch(this.picture).then((function(e){return e.blob()})).then((function(t){var a=new File([t],"".concat(de(),".png"),{type:"image/png"});console.log(a);var n=new FormData;return n.append("file",a),m.a.post("".concat(g,"upload/"),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){e.$store.dispatch("refreshImageList")}))}))}}]),a}(f["c"]);Object(l["c"])([Object(f["b"])()],be.prototype,"camera",void 0),Object(l["c"])([Object(f["d"])("picture")],be.prototype,"savePicture",null),be=Object(l["c"])([Object(f["a"])({store:_})],be);var pe=be,ve=pe,he=(a("9a18"),Object(I["a"])(ve,le,fe,!1,null,"f9380464",null)),me=he.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"microphone"}},[a("div",{attrs:{id:"select"}},[a("h2",[e._v("Select your language:")]),a("select",{staticClass:"custom-select",attrs:{name:"lang"},on:{change:function(t){return e.onChange(t)}}},[a("option",{attrs:{value:"es-ES",selected:""}},[e._v("Spanisch")]),a("option",{attrs:{value:"en-US"}},[e._v("English")])])]),a("br"),a("NavBarBack"),a("VueRecordAudio",{attrs:{mode:"press"},on:{stream:e.onStream,result:e.onResult}}),a("p",{staticClass:"is-large"},[e._v(e._s(e.text))]),e._v("speechConfig.speechRecognitionLanguage ")],1)},ye=[],Oe=a("743c"),je=a("2d28"),ke=a("8d7f"),_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{"fixed-top":"","mobile-burger":!1},scopedSlots:e._u([{key:"brand",fn:function(){return[a("div",{staticClass:"buttons container"},[a("b-button",{attrs:{rounded:"",type:"is-black"},on:{click:e.onBack}},[a("b-icon",{attrs:{type:"is-white",icon:"arrow-left",pack:"fas"}})],1)],1)]},proxy:!0}])})},we=[],Ce=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(o["a"])(a,[{key:"onBack",value:function(){ot.back()}}]),a}(f["c"]);Ce=Object(l["c"])([f["a"]],Ce);var xe,Ie=Ce,Se=Ie,Ue=Object(I["a"])(Se,_e,we,!1,null,"c6aaa43a",null),Re=Ue.exports,Pe="westeurope",$e=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.text="",e.selectedLanguage="es-ES",e}return Object(o["a"])(a,[{key:"onStream",value:function(e){var t=Oe["a"].fromSubscription(O,Pe);t.speechRecognitionLanguage=this.selectedLanguage;var a=je["a"].fromStreamInput(e);xe=new ke["a"](t,a),xe.recognizing=this.onRegonitionResult,xe.recognized=this.onRegonitionResult,xe.startContinuousRecognitionAsync()}},{key:"onRegonitionResult",value:function(e,t){this.text=t.result.text}},{key:"onResult",value:function(){xe.stopContinuousRecognitionAsync()}},{key:"onChange",value:function(e){this.selectedLanguage=e.target.value,console.log(e.target.value)}}]),a}(f["c"]);$e=Object(l["c"])([Object(f["a"])({components:{NavBarBack:Re}})],$e);var Ee=$e,Le=Ee,Be=(a("e283"),Object(I["a"])(Le,ge,ye,!1,null,"62bcc3b4",null)),Ae=Be.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[0==e.faces.length?a("div",[a("canvas",{staticStyle:{display:"none"},attrs:{id:"ghostVideo"}}),e._m(0),a("EasyCamera",{ref:"camera",attrs:{fullscreenZIndex:-1,fullscreen:""},on:{close:e.onClose},model:{value:e.picture,callback:function(t){e.picture=t},expression:"picture"}})],1):e._e(),e.faces.length>0?a("section",[a("NavBarBack"),a("b-tabs",[a("b-tab-item",{attrs:{label:"Results"}},[a("b-table",{attrs:{data:e.faces,columns:e.columns}})],1)],1)],1):e._e()])},Ne=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"faceRectContainer"}},[a("canvas",{attrs:{id:"faceRect"}})])}],De=a("5530"),Ve=(a("d81d"),a("8e36")),ze=a("a5e3"),He=new Ve["a"]({inHeader:{"Ocp-Apim-Subscription-Key":y}}),Me=new ze["a"](He,j);function Te(e,t){return e>.5?t:""}var Ge=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.picture="",e.faceInterval=-1,e.faces=[],e.liveFaces=[],e.faceRect={width:92,height:92,left:301,top:149},e.useLiveFaceDetection=!0,e.liveFaceDetectionInverval=3e3,e.columns=[{field:"age",label:"Age"},{field:"emotion",label:"Emotion"},{field:"facialHair",label:"Facial Hair"},{field:"gender",label:"Gender"},{field:"smile",label:"Smile"},{field:"glasses",label:"Glasses"}],e}return Object(o["a"])(a,[{key:"onClose",value:function(){window.clearInterval(this.faceInterval),ot.back()}},{key:"created",value:function(){var e=this;this.faceInterval=window.setInterval((function(){var t=document.getElementById("ghostVideo"),a=t.getContext("2d"),n=document.querySelector("video"),c=0,r=0,i=n;if(null!=a&&null!=i)try{c=i.videoWidth,r=i.videoHeight,t.width=c,t.height=r,a.fillRect(0,0,c,r),a.drawImage(i,0,0,c,r);var o=t.toDataURL();a.clearRect(0,0,c,r);var s=document.getElementById("faceRect");s.width=c,s.height=r;var u=s.getContext("2d");null!=u&&(u.rect(e.faceRect.left,e.faceRect.top,e.faceRect.width,e.faceRect.height),u.stroke()),"data:,"!==o&&e.useLiveFaceDetection&&fetch(o).then((function(e){return e.blob()})).then((function(t){Me.face.detectWithStream(t).then((function(t){e.liveFaces=t.map((function(t){e.faceRect=t.faceRectangle}))}))}))}catch(l){console.log(l)}}),this.liveFaceDetectionInverval)}},{key:"savePicture",value:function(){var e=this;this.camera.stop(),clearInterval(this.faceInterval),fetch(this.picture).then((function(e){return e.blob()})).then((function(t){Me.face.detectWithStream(t,{returnFaceAttributes:["age","emotion","facialHair","smile","gender","glasses"]}).then((function(t){0!=t.length?e.faces=t.map((function(e){var t=Object(De["a"])({},e.faceAttributes),a=t.age,n=void 0===a?0:a,c=t.emotion;c=void 0===c?{}:c;var r=c.anger,i=void 0===r?0:r,o=c.contempt,s=void 0===o?0:o,u=c.disgust,l=void 0===u?0:u,f=c.fear,d=void 0===f?0:f,b=c.happiness,p=void 0===b?0:b,v=c.neutral,h=void 0===v?0:v,m=c.sadness,g=void 0===m?0:m,y=c.surprise,O=void 0===y?0:y,j=t.facialHair;j=void 0===j?{}:j;var k=j.moustache,_=void 0===k?0:k,w=j.beard,C=void 0===w?0:w,x=j.sideburns,I=void 0===x?0:x,S=t.gender,U=void 0===S?"":S,R=t.smile,P=void 0===R?0:R,$=t.glasses,E=void 0===$?"":$;return{age:n,emotion:"".concat(Te(i,"anger")," ").concat(Te(s,"contempt")," ").concat(Te(l,"disgust")," ").concat(Te(d,"fear")," ").concat(Te(p,"happiness")," ").concat(Te(h,"neutral")," ").concat(Te(g,"sadness")," ").concat(Te(O,"surprise")),facialHair:"".concat(Te(_,"moustache")," ").concat(Te(C,"beard")," ").concat(Te(I,"sideburns")),gender:U,smile:"".concat(Te(P,"smile")),glasses:E}})):e.$confirm("The AI could not recognize your face, make sure the gray box covers most of your face.","AI Error","error").then((function(t){e.$router.go(0)})).catch((function(){e.$router.push({name:"home"})}))})).catch((function(t){e.$alert("An error occurred while trying to connect to Face AI. Try again and ask your coach if the problem persists.","Face AI not available","warning").then((function(){return e.$router.go(0)})),console.log("An error occurred:"),console.error(t)}))}))}}]),a}(f["c"]);Object(l["c"])([Object(f["b"])()],Ge.prototype,"camera",void 0),Object(l["c"])([Object(f["d"])("picture")],Ge.prototype,"savePicture",null),Ge=Object(l["c"])([Object(f["a"])({components:{NavBarBack:Re}})],Ge);var We=Ge,Je=We,qe=(a("35cb"),a("4398"),Object(I["a"])(Je,Fe,Ne,!1,null,"0c60a54c",null)),Ke=qe.exports,Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile is-size-4"},[a("b-image",{attrs:{src:e.profile.avatar_url,alt:"Profile Picture of User",ratio:"1by1",rounded:""}}),a("h1",[e._v(e._s(e.profile.name))]),a("b-field",{attrs:{label:"Github Username",type:e.status,message:"Check if your username is correct"}},[a("b-input",{attrs:{maxlength:"30"},model:{value:e.githubUsername,callback:function(t){e.githubUsername=t},expression:"githubUsername"}})],1),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{rounded:"",type:"is-black",expanded:"",disabled:!e.isValid},on:{click:e.saveProfile}},[e._v("Save Profile")])],1)],1)},Qe=[],Xe=a("2ef0"),Ye="https://api.github.com/users/",et=function(e){Object(s["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.githubUsername=e.$store.state.githubUsername,e.isValid=!1,e.profile={},e.debouncedOnUsernameChanged=Object(Xe["debounce"])(e.onUsernameChanged,500),e}return Object(o["a"])(a,[{key:"status",get:function(){return this.isValid?"is-success":"is-danger"}},{key:"mounted",value:function(){this.onUsernameChanged()}},{key:"onUsernameChanged",value:function(){var e=this;console.log(this.githubUsername),m.a.get("".concat(Ye).concat(this.githubUsername)).then((function(t){e.profile=t.data,e.isValid=!0})).catch((function(t){console.log(t),e.isValid=!1}))}},{key:"saveProfile",value:function(){this.$store.commit("setGithubUsername",this.githubUsername),this.$router.back()}}]),a}(f["c"]);Object(l["c"])([Object(f["d"])("githubUsername")],et.prototype,"debouncedOnUsernameChanged",void 0),et=Object(l["c"])([Object(f["a"])({store:_})],et);var tt=et,at=tt,nt=(a("d79c"),Object(I["a"])(at,Ze,Qe,!1,null,"056a57c9",null)),ct=nt.exports;n["a"].use(ee["a"]);var rt=[{path:"/",name:"home",component:ue},{path:"/camera",name:"camera",component:me},{path:"/microphone",name:"microphone",component:Ae},{path:"/faceai",name:"faceai",component:Ke},{path:"/editprofile",name:"editprofile",component:ct}],it=new ee["a"]({base:"/FemaleAIAppInnovationEcosystem/",routes:rt});n["a"].use(ae.a,{router:it});var ot=it,st=a("98f5"),ut=a("c9d0"),lt=a.n(ut),ft=a("683f");Q["c"].add(X["b"],X["f"],X["e"],X["c"],X["d"],X["a"]),n["a"].use(ft["a"]),n["a"].use(lt.a),n["a"].component("vue-fontawesome",Y["a"]),n["a"].use(Z["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),n["a"].component("EasyCamera",st["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ot,store:_,render:function(e){return e(K)}}).$mount("#app")},d033:function(e,t,a){"use strict";a("b2db")},d27c:function(e,t,a){},d79c:function(e,t,a){"use strict";a("caaf")},e283:function(e,t,a){"use strict";a("71f4")},ffb0:function(e,t,a){"use strict";a("c0b9")}});
//# sourceMappingURL=app.201731aa.js.map