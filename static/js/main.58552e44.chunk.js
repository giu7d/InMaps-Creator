(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(140)},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=a(11),l=a(12),s=a(16),u=a(15),p=a(17),m=a(47),d=a(201),g=a(5),h=a(73),f=a(182),b=a(183),v=a(71),y=a(175),E=a(96),O=a(180),j=a(181);function _(e){var t=r.a.useState(null),a=Object(v.a)(t,2),n=a[0],o=a[1],i=e.user,c=e.singOut;return r.a.createElement("div",null,r.a.createElement(y.a,{"aria-label":"Delete","aria-owns":n?"menuLogOut":void 0,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement("img",{alt:"Meno do usuario ".concat(i.displayName),src:i.photoURL,width:24,height:24,style:{borderRadius:"100%"}})),r.a.createElement(E.a,{id:"menuLogOut",anchorEl:n,open:Boolean(n),onClose:function(){o(null)}},r.a.createElement(O.a,{container:!0,spacing:3,justify:"center",style:{margin:14,width:250}},r.a.createElement(O.a,{item:!0,xs:2},r.a.createElement("img",{alt:"foto de perfil ".concat(i.displayName),src:i.photoURL,width:24,height:24,style:{borderRadius:"100%"}})),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(h.a,{variant:"subtitle1",color:"inherit"},i.displayName))),r.a.createElement(j.a,{onClick:c},"Sair")))}var w=Object(g.a)({title:{cursor:"pointer",flexGrow:1,marginLeft:24,marginRight:24},subTitle:{fontWeight:"normal",color:"#666"},appBar:{width:"100%"}})(function(e){var t=e.classes,a=e.action,n=e.user,o=e.singOut;return r.a.createElement(f.a,{className:t.appBar,position:"static",color:"default",elevation:0},r.a.createElement(b.a,null,r.a.createElement(h.a,{className:t.title,variant:"h6",color:"inherit",onClick:a},"InMaps ",r.a.createElement("span",{className:t.subTitle},"Creator")),n&&r.a.createElement(_,{user:n,singOut:o})))}),x=a(38),P=a.n(x),L=function(e){return r.a.createElement(O.a,{container:!0,spacing:5,style:{margin:25}},r.a.createElement(O.a,{item:!0,xs:5},r.a.createElement(P.a,null)),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(P.a,{count:3})),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(P.a,{count:3})),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(P.a,{count:3})))},k=a(184),C=Object(g.a)({space:{marginTop:24}})(function(e){var t=e.icon,a=e.title,n=e.children,o=e.classes;return r.a.createElement("div",null,r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:10,className:o.space},r.a.createElement(h.a,{variant:"h4",color:"textPrimary",gutterBottom:!0},t," ",a))),n,r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(k.a,{className:o.space,variant:"middle"}))))}),A=function(e){var t=e.children;return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(h.a,{variant:"caption",gutterBottom:!0},t)))},S=Object(g.a)({space:{marginTop:24}})(function(e){var t=e.children,a=e.justify,n=e.classes,o=e.spacing;return r.a.createElement(O.a,{container:!0,justify:a||"center",spacing:o||0,className:n.space},t)}),I=a(185),B=Object(g.a)({button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:4,border:0,color:"white",width:"100%",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",useNextVariant:!0},icon:{marginRight:6}})(function(e){var t=e.classes,a=e.action,n=e.icon,o=e.title,i=e.gridSize;return r.a.createElement(O.a,{item:!0,xs:i},r.a.createElement(I.a,{className:t.button,onClick:a},n,r.a.createElement("span",{className:t.icon}),o))}),M=Object(g.a)({button:{background:"#F5F5F5",borderRadius:4,border:0,color:"black",width:"100%",height:48,padding:"0 30px",boxShadow:"none",useNextVariant:!0},icon:{marginRight:6}})(function(e){var t=e.classes,a=e.action,n=e.icon,o=e.title,i=e.gridSize;return r.a.createElement(O.a,{item:!0,xs:i},r.a.createElement(I.a,{className:t.button,onClick:a},n,r.a.createElement("span",{className:t.icon}),o))}),T=(Object(g.a)({button:{background:"inherit",borderRadius:4,border:0,color:"#666",width:"100%",height:48,padding:"0 30px",boxShadow:"none",useNextVariant:!0}})(function(e){var t=e.classes,a=e.action,n=e.title,o=e.gridSize;return r.a.createElement(O.a,{item:!0,xs:o},r.a.createElement(I.a,{className:t.button,onClick:a},n))}),a(202)),N=Object(g.a)({space:{marginTop:24}})(function(e){var t=e.icon,a=e.title,n=e.action,o=e.classes,i=e.disabled;return r.a.createElement(O.a,{item:!0,xs:2,className:o.space},r.a.createElement(T.a,{title:a,"aria-label":a},r.a.createElement(y.a,{onClick:n,disabled:i}," ",t," ")))}),R=Object(g.a)({button:{background:"linear-gradient(to right, #F45C43, #EB3349)",borderRadius:4,border:0,color:"white",width:"100%",height:48,padding:"0 30px",boxShadow:"none",useNextVariant:!0},icon:{marginRight:6}})(function(e){var t=e.classes,a=e.action,n=e.icon,o=e.title,i=e.gridSize;return r.a.createElement(O.a,{item:!0,xs:i},r.a.createElement(I.a,{className:t.button,onClick:a},n,r.a.createElement("span",{className:t.icon}),o))}),D=a(200),z=a(142),U=Object(g.a)(function(e){return{modal:{position:"absolute",width:"50%",outline:"none",top:"25%",left:"25%",transform:"translate(25%-25%)"}}})(function(e){var t=e.open,a=e.action,n=e.classes,o=e.children;return r.a.createElement(D.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:t,onClose:a},r.a.createElement(z.a,{className:n.modal},o))}),F=a(203),W=Object(g.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:8,flex:1},icon:{padding:10},divider:{width:1,height:28,margin:4}})(function(e){var t=e.icon,a=e.title,n=e.classes,o=e.emmiter;return console.log(),r.a.createElement(z.a,{className:n.root,elevation:1},r.a.createElement(F.a,o({placeholder:a,className:n.input})),r.a.createElement("span",{className:n.icon},t))}),V=a(187),H=a(179),G=a(143),q=a(188),J=a(186),Y=function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(W,{icon:r.a.createElement(J.a,null),title:"Procure o Local",emmiter:t})),0!==a.length&&r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(z.a,null,o&&r.a.createElement(V.a,{color:"secondary"}),r.a.createElement(H.a,null,a.map(function(e){return r.a.createElement(G.a,Object.assign({button:!0},n(e)),r.a.createElement(q.a,{primary:e.description}))})))))},X=a(10),$=a(193),K=a(189),Z=a(74),Q=(a(120),a(141),a(122),Z.initializeApp({apiKey:"AIzaSyCDSqOGuaXdGlmyN_q4B0T2AYeLM-LTUG0",authDomain:"inmaps.firebaseapp.com",projectId:"inmaps",databaseURL:"https://inmaps.firebaseio.com",storageBucket:"gs://inmaps.appspot.com/"})),ee=Q.firestore(),te=Q.storage(),ae=Q.auth(),ne={googleProvider:new Z.auth.GoogleAuthProvider},re=a(90),oe=a.n(re),ie=function e(){Object(c.a)(this,e)};ie.getAll=function(e){var t=ae.currentUser,a=[];if(!t)throw new Error("401 Unauthorized Request \ud83d\ude38");ee.collection("places").where("uid","==",t.uid).get().then(function(t){t.forEach(function(e){return a.push({key:e.id,data:e.data()})}),e(a)}).catch(function(e){return console.error(e)})},ie.getById=function(e,t){if(!ae.currentUser)throw new Error("401 Unauthorized Request \ud83d\ude38");ee.collection("places").doc(e).get().then(function(e){t({key:e.id,data:e.data()})}).catch(function(e){return console.error(e)})},ie.create=function(e,t){var a=ae.currentUser;if(!a)throw new Error("401 Unauthorized Request \ud83d\ude38");ee.collection("places").add(Object(X.a)({},e,{uid:a.uid})).then(function(e){t(e.id)}).catch(function(e){return t(e)})},ie.delete=function(e){var t=ae.currentUser;if(!t)throw new Error("401 Unauthorized Request \ud83d\ude38");ee.collection("places").where("uid","==",t.uid).doc(e).delete()},ie.update=function(e,t){if(!ae.currentUser)throw new Error("401 Unauthorized Request \ud83d\ude38");ee.collection("places").doc(e).set(t)},ie.upload=function(e,t,a,n){var r=a.progress,o=a.load,i=(a.error,t.name),c=t.size,l=t.type,s=(new oe.a.MD5).hex(i+1e3*Math.random()*c),u=te.ref(),p={contentType:l};u.child(e+s).put(t,p).on("state_changed",function(e){return r("running"===e.state,e.bytesTransferred,e.totalBytes)},function(e){return console.log("On upload",e)},function(){u.child(e+s).getDownloadURL().then(function(e){n(e,s),o()}).catch(function(e){return console.log("On get URL",e)})})};var ce=a(190),le=a(72),se=a.n(le),ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",id:"",title:"",description:"",address:"",placeId:"",center:{},border:[],blueprint:[],tag:[],creationTime:new Date},a._inputChangeHandler=function(e){a.setState({search:e})},a._inputSelectHandler=function(e){Object(le.geocodeByAddress)(e).then(function(t){return a.setState({title:e.match(/^(.[^\s]+)\s(.[^\s]+)/g)[0],description:e,placeId:t[0].place_id,address:t[0].formatted_address}),Object(le.getLatLng)(t[0])}).then(function(e){return a.setState({center:{latitude:e.lat,longitude:e.lng}})}).then(function(){return console.log(a.state)}).catch(function(e){return console.error("Error",e)})},a._createHandler=function(){ie.create(a.state,function(e){return a._navigateToPlace(e)})},a._navigateToPlace=function(e){a.props.history.push("/place/".concat(e))},a._closeModalHandler=function(){console.log("close")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(C,{icon:r.a.createElement(K.a,null),title:"Novo Local"},r.a.createElement(se.a,{value:this.state.search,onChange:this._inputChangeHandler,onSelect:this._inputSelectHandler},function(e){return r.a.createElement(Y,e)}),r.a.createElement("div",{style:{margin:"0 12px"}},r.a.createElement(S,{justify:"flex-end",spacing:8},r.a.createElement(M,{icon:r.a.createElement(ce.a,null),title:"Pr\xf3ximo",gridSize:4,action:this._createHandler}))))}}]),t}(n.Component),pe=Object(m.d)(ue),me=a(29),de=a(191),ge=a(192);function he(e){var t=r.a.useState(null),a=Object(v.a)(t,2),n=a[0],o=a[1],i=e.id,c=e.title,l=e.date,s=e.onDelete;return r.a.createElement("div",null,r.a.createElement(G.a,null,r.a.createElement(me.b,{to:"/place/".concat(i),style:{color:"inherit",textDecoration:"none"}},r.a.createElement(q.a,{primary:c,secondary:l.seconds})),r.a.createElement(de.a,null,r.a.createElement(y.a,{"aria-label":"Delete","aria-owns":n?"menu":void 0,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(ge.a,null)))),r.a.createElement(E.a,{id:"menu",anchorEl:n,open:Boolean(n),onClose:function(){o(null)}},r.a.createElement(j.a,{onClick:s.bind(null,i)},"Excluir")))}var fe=a(22),be="SET_MAP",ve="SET_MAP_LOCATION",ye="SET_MAP_DRAW",Ee="SET_PLACE",Oe="SET_OVERLAYS",je="SET_OVERLAYS_LOADED",_e="SET_CONTOUR_POLYGONS",we="SET_CONTOUR_LOADED",xe="RESET_STORE",Pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,places:[],load:!1},a._setPlace=function(){ie.getAll(function(e){try{a.setState({places:e,load:!0})}catch(t){console.log(t)}})},a._deletePlace=function(e,t){ie.delete(e),a._setPlace()},a._toggleModal=function(){a.setState({modal:!a.state.modal})},a.componentWillMount=function(){var e=a.props,t=e.resetStore,n=e.setMapLocation;t(),n({latitude:-14.235004,longitude:-51.925279,zoom:3})},a.componentDidMount=function(){a._setPlace(),console.log("reset"),console.log(a.props)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C,{icon:r.a.createElement($.a,null),title:"Lugares"},r.a.createElement(S,null,r.a.createElement(B,{icon:r.a.createElement(K.a,null),title:"Criar",gridSize:7,action:this._toggleModal}))),this.state.load?r.a.createElement(H.a,{style:{marginTop:24}},0!==this.state.places.length?this.state.places.map(function(t){return r.a.createElement(he,{key:t.key,id:t.key,title:t.data.title,date:t.data.creationTime,onDelete:e._deletePlace})}):r.a.createElement(O.a,{container:!0,justify:"center",spacing:3,style:{marginTop:"25%"}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(h.a,{variant:"subtitle1",align:"center"},"Voc\xea n\xe3o possui nenhum projeto criado.",r.a.createElement("br",null),":P")))):function(){for(var e=Math.floor(10*Math.random()),t=[],a=0;a<e;a++)t.push(r.a.createElement("div",{key:a,style:{margin:24,width:300}},r.a.createElement(P.a,{count:2})));return t}(),r.a.createElement(U,{open:this.state.modal,action:this._toggleModal},r.a.createElement(pe,null)))}}]),t}(n.Component),Le=Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setMapLocation:function(t){return e({type:ve,lat:t.latitude,lng:t.longitude,zoom:t.zoom})},resetStore:function(){return e({type:xe})}}})(Pe),ke=a(194),Ce=a(32),Ae=a(53),Se=a.n(Ae),Ie=a(69),Be=function e(){Object(c.a)(this,e)};Be.getRandomHexColor=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},Be.mapPolygonToString=function(e){var t=e.getPath().getLength(),a=Object(Ce.a)(new Array(t)).map(function(t,a){return e.getPath().getAt(a).toUrlValue(6).match(/(-?\d+(\.\d+)?)/g)});return JSON.stringify(a)},Be.getImageMeta=function(){var e=Object(Ie.a)(Se.a.mark(function e(t){return Se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){var a=new Image;a.src=t,a.addEventListener("load",function(){return e({width:a.width,height:a.height})})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Be.setDrawingMode=function(e,t){e.setOptions({drawingMode:google.maps.drawing.OverlayType[t],polygonOptions:{strokeColor:Be.getRandomHexColor(),strokeOpacity:.5,strokeWeight:3,fillColor:Be.getRandomHexColor(),fillOpacity:.3,editable:!0,draggable:!1}})},Be.addListener=function(e,t,a){google.maps.event.addListener(e,t,a)},Be.addPolygonEvents=function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var a=e.getPath();google.maps.event.addListener(a,"insert_at",function(){return t(e)}),google.maps.event.addListener(a,"set_at",function(){return t(e)})},Be.removePolygonEvents=function(e){google.maps.event.clearListeners(e,"polygoncomplete"),google.maps.event.clearListeners(e,"insert_at"),google.maps.event.clearListeners(e,"set_at"),e.setMap(null)},Be.removeAllPolygonsEvents=function(e){e.map(function(e){return Be.removePolygonEvents(e)})};var Me=function(){function e(t,a,n){var r=this;Object(c.a)(this,e),this.createWithListener=function(){r._drawingMode("POLYGON"),google.maps.event.addListener(r._drawAPI,"polygoncomplete",function(e){r._drawingMode(null),r.load(e),google.maps.event.clearListeners(r._drawAPI,"polygoncomplete"),r._callback(r)})},this.load=function(e){var t=e.getPath();r.setPolygon(e),e.setMap(r._mapAPI),google.maps.event.addListener(t,"insert_at",function(){return r._callback(r)}),google.maps.event.addListener(t,"set_at",function(){return r._callback(r)})},this.isEditable=function(e){r._polygon.setEditable(e)},this.setColor=function(e){r._polygon.setOptions({strokeColor:e,fillColor:e}),r._color=e},this._drawingMode=function(e){r._drawAPI.setOptions({drawingMode:google.maps.drawing.OverlayType[e],polygonOptions:{strokeColor:r._color,strokeOpacity:.5,strokeWeight:3,fillColor:r._color,fillOpacity:.3}})},this.createPolygonFromPathString=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r._color;r._color=t;var a=JSON.parse(e);return new google.maps.Polygon({paths:a.map(function(e){return new google.maps.LatLng(e[0],e[1])}),strokeColor:t,strokeOpacity:.5,strokeWeight:2,fillColor:t,fillOpacity:.3})},this.getCoordinatesAsString=function(){var e=r._polygon.getPath().getLength(),t=Object(Ce.a)(new Array(e)).map(function(e,t){return r._polygon.getPath().getAt(t).toUrlValue(6).match(/(-?\d+(\.\d+)?)/g)});return JSON.stringify(t)},this._mapAPI=t,this._drawAPI=a,this._callback=n,this._polygon=null,this._color=Be.getRandomHexColor()}return Object(l.a)(e,[{key:"setPolygon",value:function(e){this._polygon=e}}]),e}(),Te=function(e){var t=function(t){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).create=function(){var e=t.props.map,a=e.mapAPI,n=e.drawAPI;new Me(a,n,t.save).createWithListener()},t.load=function(){console.log("LOAD BOARD");var e=t.props.place.border,a=t.props.map,n=a.mapAPI,r=a.drawAPI,o=e.map(function(e){var a=e.path,o=e.color,i=new Me(n,r,t.save),c=i.createPolygonFromPathString(a,o);return i.load(c),i});t.store(o)},t.save=function(e){var a=t.props.contourPolygons,n=a.indexOf(e);-1===n?a.push(e):a[n]=e,t.store(a)},t.delete=function(e){var a=t.props.contourPolygons;a[e]._polygon.setMap(null),a.splice(e,1),t.store(a)},t.store=function(e){var a=t.props,n=a.place,r=a.setPlace,o=a.setContourPolygons,i=e.map(function(e,t){return{title:"Contorno #".concat(t+1),path:e.getCoordinatesAsString(),color:e._color}}),c=Object(X.a)({},n,{border:i});o(e),r(c);try{console.log("STORE BORDER"),console.log(c,e),ie.update(c.id,c)}catch(l){console.log(l)}},t}return Object(p.a)(a,t),Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,t=e.isContourLoaded,a=e.setContourLoaded,n=e.place;t||0===n.border.length?0===n.border.length&&a(!0):(this.load(),a(!0))}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,{createBorder:this.create,loadBorder:this.load,deleteBorder:this.delete,saveBorder:this.save,storeBorder:this.store}))}}]),a}(n.Component);return Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setContourPolygons:function(t){return e({type:_e,contourPolygons:t})},setPlace:function(t){return e({type:Ee,place:t})},setContourLoaded:function(t){return e({type:we,isContourLoaded:t})}}})(t)},Ne=Te(function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{icon:r.a.createElement(ke.a,null),title:"Criar Contorno",action:this.props.createBorder})}}]),t}(n.Component)),Re=a(199),De=a(195),ze=a(144),Ue=Object(ze.a)({root:{"& label.Mui-focused":{color:"#24c6dc"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#24c6dc"}},width:"100%"}})(Re.a),Fe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contourIndex:null,color:"#000000"},a._init=function(){var e=a.props.place.border,t=a.props.match.params.contourIndex,n=e[t].color;a.setState({contourIndex:t,color:n})},a._isEditable=function(e){a.props.contourPolygons[a.state.contourIndex].isEditable(e)},a._changeColor=function(e){var t=e.target.value;t.length<=7&&"#"===t[0]&&(a.props.contourPolygons[a.state.contourIndex].setColor(t),a.setState({color:t}))},a._delete=function(){a._isEditable(!1),a.props.deleteBorder(a.state.contourIndex),a.props.history.goBack()},a._complete=function(){var e=a.props,t=e.contourPolygons;(0,e.saveBorder)(t[a.state.contourIndex]),a._isEditable(!1),a.props.history.goBack()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this._init()}},{key:"componentDidMount",value:function(){this._isEditable(!0)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(O.a,{className:e.container,container:!0,justify:"center",spacing:3},r.a.createElement(O.a,{className:e.header,item:!0,xs:10},r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},r.a.createElement(ke.a,{className:e.icon}),"Ajustes da borda")),r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(Ue,{label:"Cor do poligono",value:this.state.color,onChange:this._changeColor,variant:"outlined"})),r.a.createElement(O.a,{item:!0,xs:9,className:e.deleteBtn},r.a.createElement(R,{icon:r.a.createElement(De.a,null),title:"Excluir",gridSize:12,action:this._delete})),r.a.createElement(O.a,{item:!0,xs:9},r.a.createElement(M,{icon:r.a.createElement(ce.a,null),title:"Pronto",gridSize:12,action:this._complete}))))}}]),t}(n.Component),We=Object(fe.b)(function(e){return Object(X.a)({},e)})(Te(Object(ze.a)({container:{marginTop:24,height:"100%",overflowX:"hidden",overflowY:"auto"},header:{marginBottom:24},icon:{marginRight:16},deleteBtn:{marginTop:24,marginBottom:24}})(Object(m.d)(Fe)))),Ve=a(196),He={};function Ge(e,t,a,n,r,o){var i=t.image,c=t.url,l=t.border,s=t.rotation,u=t.scale;this._bounds=new google.maps.LatLngBounds(new google.maps.LatLng(l.south,l.west),new google.maps.LatLng(l.north,l.east)),this._image=i,this._src=c,this._map=e,this._div=null,this._rotation=s,this._scale=u,this._saveFunc=r,this._deleteFunc=o,this.markerA=a,this.markerB=n,this.setMap(e)}Ge.prototype=new google.maps.OverlayView,Ge.prototype.onAdd=function(){var e=document.createElement("img");e.src=this._src,e.style.width="100%",e.style.height="100%",e.style.position="absolute";var t=document.createElement("div");t.style.borderStyle="none",t.style.borderWidth="0px",t.style.position="absolute",t.style.transform="rotate(".concat(this._rotation,"deg) scale(").concat(this._scale,", ").concat(this._scale,")"),t.appendChild(e),this._div=t,this.getPanes().overlayMouseTarget.appendChild(t)},Ge.prototype.draw=function(){var e=this.getProjection(),t=e.fromLatLngToDivPixel(this._bounds.getSouthWest()),a=e.fromLatLngToDivPixel(this._bounds.getNorthEast()),n=this._div;n.style.left=t.x+"px",n.style.top=a.y+"px",n.style.width=a.x-t.x+"px",n.style.height=t.y-a.y+"px"},Ge.prototype.updateBounds=function(e){this._bounds=e,this.draw()},Ge.prototype.updateTransform=function(e,t){this._rotation=e,this._scale=t,this.onRemove(),this.onAdd(),this.draw()},Ge.prototype.updateMarkersVisibility=function(e){this.markerA.setVisible(e),this.markerB.setVisible(e)},Ge.prototype.onRemove=function(){this._div.parentNode.removeChild(this._div),this._div=null},Ge.prototype.getAsBlueprint=function(){return{title:"Planta ".concat(this._image.toUpperCase().slice(0,7)),image:this._image,url:this._src,border:this._bounds.toJSON(),scale:this._scale,rotation:this._rotation}},Ge.prototype.loadLeastSavedState=function(){this.updateBounds(He._bounds),this.updateTransform(He._rotation,He._scale),this.markerA=He.markerA,this.markerB=He.markerB},Ge.prototype.save=function(){He=Object(X.a)({},this),this._saveFunc(this)},Ge.prototype.persistDeletion=function(e){this._deleteFunc(e)};var qe=function(e){var t=function(t){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).create=function(e){var a=t.props.map.mapAPI,n=e.border,r=n.north,o=n.east,i=n.south,c=n.west,l=new google.maps.LatLngBounds(new google.maps.LatLng(i,c),new google.maps.LatLng(r,o)),s=l.getNorthEast(),u=l.getSouthWest(),p=new google.maps.Marker({position:u,visible:!1,map:a,draggable:!0,title:"SW: lat:".concat(u.lat()," + lng: ").concat(u.lng())}),m=new google.maps.Marker({position:s,visible:!1,map:a,draggable:!0,title:"NE: lat:".concat(s.lat()," + lng: ").concat(s.lng())}),d=new Ge(a,e,p,m,t.save,t.delete),g=function(){var e=p.getPosition(),t=m.getPosition(),a=new google.maps.LatLngBounds(e,t);d.updateBounds(a)};return Be.addListener(p,"drag",g),Be.addListener(m,"drag",g),d},t.load=function(){t.clear(),t.props.place.blueprint.forEach(function(e){var a=t.create(e);t.save(a)})},t.save=function(e){var a=t.props.overlays,n=a.indexOf(e);-1===n?a.push(e):a[n]=e,t.store(a)},t.delete=function(e){var a=t.props.overlays;a.splice(e,1),t.store(a)},t.store=function(e){var a=t.props,n=a.place,r=a.setOverlays,o=e.map(function(e){return e.getAsBlueprint()});r(e),t._storePlace(Object(X.a)({},n,{blueprint:Object(Ce.a)(o)}))},t.upload=function(e,a){ie.upload("blueprint/",e,a,function(){var e=Object(Ie.a)(Se.a.mark(function e(a,n){var r,o,i,c,l,s,u;return Se.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),r=t.props.place,e.next=4,Be.getImageMeta(a);case 4:o=e.sent,i=o.width,c=o.height,l=new google.maps.LatLngBounds(new google.maps.LatLng(r.center.latitude,r.center.longitude),new google.maps.LatLng(r.center.latitude+1e-6*c,r.center.longitude+1e-6*i)),console.log(l),s={image:n,border:l.toJSON(),url:a,scale:1,rotation:0},u=t.create(s),t.save(u);case 12:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}())},t.clear=function(){var e=t.props,a=e.overlays,n=e.setOverlays;a.forEach(function(e){e.setMap(null)}),n(new Array(0))},t}return Object(p.a)(a,t),Object(l.a)(a,[{key:"_storePlace",value:function(e){try{console.log("STORE PLACE"),this.props.setPlace(e),ie.update(e.id,e)}catch(t){console.log(t)}}},{key:"componentWillMount",value:function(){var e=this.props,t=e.isOverlaysLoaded,a=e.setOverlaysLoaded,n=e.place;t||0===n.blueprint.lenght?0===n.blueprint.length&&a(!0):(this.load(),a(!0))}},{key:"render",value:function(){return r.a.createElement(e,Object.assign({},this.props,{createBlueprint:this.create,loadBlueprint:this.load,saveBlueprint:this.save,deleteBlueprint:this.delete,storeBlueprint:this.store,uploadBlueprint:this.upload}))}}]),a}(n.Component);return Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setPlace:function(t){return e({type:Ee,place:t})},setOverlays:function(t){return e({type:Oe,overlays:t})},setOverlaysLoaded:function(t){return e({type:je,isOverlaysLoaded:t})}}})(t)},Je=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.history;return r.a.createElement(N,{icon:r.a.createElement(Ve.a,null),title:"Adicionar Planta",action:function(){return a.push("/place/".concat(t.params.id,"/blueprint"))}})}}]),t}(n.Component),Ye=qe(Object(m.d)(Je)),Xe=a(93),$e=(a(137),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._fileUpload=function(e,t,n,r,o,i,c){var l=a.props,s=l.uploadBlueprint,u=l.history,p=l.match;s(t,{progress:i,load:r,error:o}),u.push("/place/".concat(p.params.id))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.history,a=e.match;return r.a.createElement(O.a,{container:!0,justify:"center",style:{marginTop:"25%",marginBottom:"25%",height:"50%"}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(Xe.FilePond,{server:{allowMultiple:!1,allowRevert:!1,process:this._fileUpload}})),r.a.createElement(O.a,{item:!0,xs:7},r.a.createElement(M,{icon:r.a.createElement(ce.a,null),title:"Pronto",gridSize:12,action:function(){return t.push("/place/".concat(a.params.id))}})))}}]),t}(n.Component)),Ke=qe(Object(m.d)($e)),Ze=a(197),Qe=a(204),et=Object(ze.a)({root:{color:"#24c6dc",height:2,padding:"15px 0"},thumb:{height:28,width:28,backgroundColor:"#fff",boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",marginTop:-14,marginLeft:-14,"&:focus,&:hover,&$active":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)","@media (hover: none)":{boxShadow:"0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"}}},active:{},valueLabel:{left:"calc(-50% + 11px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"#bfbfbf"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{backgroundColor:"currentColor"}})(Qe.a),tt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={overlayIndex:null,rotation:null,scale:null},a._init=function(){var e=a.props.place.blueprint,t=a.props.match.params.overlayIndex,n=e[t],r=n.rotation,o=n.scale;a.setState({overlayIndex:t,rotation:r,scale:o})},a._rotate=function(e,t){a.props.overlays[a.state.overlayIndex].updateTransform(t,a.state.scale),a.setState({rotation:t})},a._scale=function(e,t){a.props.overlays[a.state.overlayIndex].updateTransform(a.state.rotation,t),a.setState({scale:t})},a._save=function(){var e=a.props,t=e.overlays;(0,e.saveBlueprint)(t[a.state.overlayIndex])},a._delete=function(){var e=a.props,t=e.overlays,n=e.deleteBlueprint;t[a.state.overlayIndex].setMap(null),a._isMarkersVisible(!1),n(a.state.overlayIndex),a.props.history.goBack()},a._complete=function(){a._save(),a._isMarkersVisible(!1),a.props.history.goBack()},a._isMarkersVisible=function(e){a.props.overlays[a.state.overlayIndex].updateMarkersVisibility(e)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this._init()}},{key:"componentDidMount",value:function(){this._isMarkersVisible(!0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.a,{container:!0,justify:"center",spacing:3,style:{marginTop:25,height:"100%"}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},r.a.createElement(Ze.a,{style:{marginRight:14}}),"Ajustes da planta"),r.a.createElement(h.a,{variant:"h5",gutterBottom:!0})),r.a.createElement(O.a,{item:!0,xs:10,style:{marginTop:25}},r.a.createElement(h.a,{gutterBottom:!0},"Rota\xe7\xe3o"),r.a.createElement("br",null),r.a.createElement(et,{"aria-label":"rotation",value:this.state.rotation,onChange:this._rotate,min:-180,max:180,valueLabelDisplay:"auto"})),r.a.createElement(O.a,{item:!0,xs:10,style:{marginTop:25}},r.a.createElement(h.a,{gutterBottom:!0},"Escala"),r.a.createElement("br",null),r.a.createElement(et,{"aria-label":"scale",value:this.state.scale,onChange:this._scale,step:.1,min:.1,max:10,valueLabelDisplay:"auto"})),r.a.createElement(O.a,{item:!0,xs:9,style:{marginTop:25,marginBottom:90}},r.a.createElement(R,{icon:r.a.createElement(De.a,null),title:"Excluir",gridSize:12,action:this._delete}))),r.a.createElement(z.a,{elevation:0,style:{position:"absolute",bottom:0,width:340}},r.a.createElement(O.a,{container:!0,justify:"center",spacing:3,style:{margin:"auto",height:"100%"}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(M,{icon:r.a.createElement(ce.a,null),title:"Pronto",gridSize:12,action:this._complete})))))}}]),t}(n.Component),at=Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setOverlays:function(t){return e({type:Oe,overlays:t})}}})(qe(Object(m.d)(tt))),nt=a(198),rt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._openLayer=function(e,t,n){var r=a.props,o=r.history,i=r.match;o.push("/place/".concat(i.params.id,"/").concat(t,"/").concat(n,"/options"))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.place,a=t.blueprint,n=t.border;if(0===a.length&&0===n.length)return r.a.createElement(O.a,{container:!0,justify:"center",style:{marginTop:"25%"}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(h.a,{variant:"subtitle1",align:"center"},"Sem camadas de dados. ",r.a.createElement("br",null),"o.0")));var o=function(t,a,n){return t.map(function(t,o){return r.a.createElement(G.a,{button:!0,key:t.title+o,onClick:function(t){return e._openLayer(t,a,o)}},r.a.createElement(nt.a,null,n),r.a.createElement(q.a,{primary:"".concat(t.title)}))})};return r.a.createElement(O.a,{container:!0,justify:"center",spacing:3,style:{marginTop:25}},r.a.createElement(O.a,{item:!0,xs:10},r.a.createElement(H.a,{component:"nav","aria-label":"Main mailbox folders"},o(a,"blueprint",r.a.createElement(Ve.a,null)),o(n,"border",r.a.createElement(ke.a,null)))))}}]),t}(n.Component),ot=Object(fe.b)(function(e){return Object(X.a)({},e)})(Object(m.d)(rt)),it=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._getByURLId=function(){var e=a.props.match.params.id;ie.getById(e,function(e){try{var t=e.key,n=e.data,r=Object(X.a)({},n,{id:t});a.props.setMapLocation(n.center),a.props.setPlace(r)}catch(o){console.log(o)}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._getByURLId()}},{key:"render",value:function(){var e=this.props,t=e.match,a=e.place;return null===a?r.a.createElement(L,null):r.a.createElement("div",null,r.a.createElement(C,{icon:r.a.createElement($.a,null),title:a.title||r.a.createElement(P.a,null)},r.a.createElement(A,null,a.description||r.a.createElement(P.a,{count:3})),r.a.createElement(S,null,r.a.createElement(Ne,null),r.a.createElement(Ye,null))),r.a.createElement("div",null,r.a.createElement(m.a,{path:"".concat(t.path,"/"),exact:!0,component:ot}),r.a.createElement(m.a,{path:"".concat(t.path,"/border/:contourIndex/options"),exact:!0,component:We}),r.a.createElement(m.a,{path:"".concat(t.path,"/blueprint"),exact:!0,component:Ke}),r.a.createElement(m.a,{path:"".concat(t.path,"/blueprint/:overlayIndex/options"),exact:!0,component:at})))}}]),t}(n.Component),ct=Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setPlace:function(t){return e({type:Ee,place:t})},setMapLocation:function(t){return e({type:ve,lat:t.latitude,lng:t.longitude,zoom:18})}}})(Object(m.d)(it)),lt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._setURLToHome=function(){a.props.history.push("/")},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.user,n=e.singOut;return console.log(a),r.a.createElement(d.a,{anchor:"left",variant:"permanent"},r.a.createElement(w,{user:a,singOut:n,action:this._setURLToHome}),r.a.createElement("div",{className:t.drawer},r.a.createElement(m.a,{path:"/",exact:!0,component:Le}),r.a.createElement(m.a,{path:"/place/:id",component:ct})))}}]),t}(n.Component),st=Object(g.a)({drawer:{width:"375px",height:"100vh",overflowX:"hidden"}})(Object(m.d)(lt)),ut=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._initAPIs=function(){var e=a._startMapAPI(),t=a._startDrawAPI();t.setMap(e);var n=a.props,r=n.setMapAPI,o=n.setDrawAPI;r(e),o(t)},a._startMapAPI=function(){return new google.maps.Map(document.getElementById("map"),{center:new google.maps.LatLng(a.props.lat,a.props.lng),zoom:a.props.zoom})},a._startDrawAPI=function(){return new google.maps.drawing.DrawingManager({drawingControl:!1})},a._changeMapPosition=function(){var e=a.props.map,t=e.mapAPI,n=e.lat,r=e.lng,o=e.zoom;t.setCenter({lat:n,lng:r}),t.setZoom(o)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._initAPIs()}},{key:"componentDidUpdate",value:function(){this._changeMapPosition()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{id:"map",className:e.map})}}]),t}(n.Component),pt=Object(fe.b)(function(e){return Object(X.a)({},e)},function(e){return{setMapAPI:function(t){return e({type:be,mapAPI:t})},setDrawAPI:function(t){return e({type:ye,drawAPI:t})}}})(Object(g.a)({map:{position:"absolute",top:0,margin:0,width:"100vw",height:"100vh"}})(ut)),mt=a(94),dt=a(95),gt=function(e){var t=e.signInWithGoogle;return r.a.createElement(O.a,{container:!0,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(w,{action:null,user:null,singOut:null})),r.a.createElement(O.a,{item:!0,xs:4},r.a.createElement(O.a,{container:!0,style:{marginTop:24,background:"#FFFFFF"},spacing:5,justify:"center"},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"h5",gutterBottom:!0},"LOGIN"),r.a.createElement(h.a,{variant:"caption",gutterBottom:!0},"Selecione o m\xe9todo de login desejado para acessar a aplica\xe7\xe3o")),r.a.createElement(O.a,{item:!0},r.a.createElement(dt.a,{onClick:t})))))},ht=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.signOut,n=e.signInWithGoogle;return t?r.a.createElement("main",null,r.a.createElement(st,{user:t,singOut:a}),r.a.createElement(pt,null)):r.a.createElement(gt,{signInWithGoogle:n})}}]),t}(n.Component),ft=Object(mt.a)({firebaseAppAuth:ae,providers:ne})(ht);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt=a(68),vt={map:{mapAPI:null,drawAPI:null,lat:-14.235004,lng:-51.925279,zoom:3},place:null,overlays:[],contourPolygons:[],isContourLoaded:!1,isOverlaysLoaded:!1},yt=(a(138),a(139),Object(bt.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return console.log("reset"),Object(X.a)({},vt,{map:Object(X.a)({},e.map)});case be:return Object(X.a)({},e,{map:Object(X.a)({},e.map,{mapAPI:t.mapAPI})});case ve:return Object(X.a)({},e,{map:Object(X.a)({},e.map,{lat:t.lat,lng:t.lng,zoom:t.zoom})});case ye:return Object(X.a)({},e,{map:Object(X.a)({},e.map,{drawAPI:t.drawAPI})});case Ee:return Object(X.a)({},e,{place:Object(X.a)({},t.place)});case Oe:return Object(X.a)({},e,{overlays:Object(Ce.a)(t.overlays)});case je:return Object(X.a)({},e,{isOverlaysLoaded:t.isOverlaysLoaded});case _e:return Object(X.a)({},e,{contourPolygons:Object(Ce.a)(t.contourPolygons)});case we:return Object(X.a)({},e,{isContourLoaded:t.isContourLoaded});default:return e}})),Et=r.a.createElement(fe.a,{store:yt},r.a.createElement(me.a,null,r.a.createElement(ft,null)));i.a.render(Et,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.58552e44.chunk.js.map