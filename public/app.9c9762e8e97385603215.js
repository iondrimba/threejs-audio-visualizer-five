!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callback=null}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"load",value:function(e){var t=this,i=new XMLHttpRequest;i.open("GET",e,!0),i.onprogress=function(e){var i=Math.floor(e.loaded/e.total*100);t.callback(i)},i.onload=function(){t.complete(e)},i.send()}},{key:"progress",value:function(e){this.callback=e}},{key:"complete",value:function(){}}]),e}();function a(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.songFile="https://iondrimbafilho.me/3d5/ocean_drive.mp3",this.percent=0,this.playing=!1,this.volume=1,this.sceneBackGroundColor=1603806,this.objectsColor=16774912,this.rowTiles=[],this.groupTiles=new THREE.Object3D,this.loader=new o,this.loader.progress(function(e){t.progress(e)}),this.loaderBar=document.querySelector(".loader"),this.loader.load(this.songFile),this.playIntro=document.querySelector(".play-intro"),this.loader.complete=this.complete.bind(this)}return function(e,t,i){t&&a(e.prototype,t),i&&a(e,i)}(e,[{key:"progress",value:function(e){var t=this;this.loaderBar.style.transform="scale(".concat(e/100+.1,", .999)"),100===e&&setTimeout(function(){requestAnimationFrame(function(){t.playIntro.classList.add("control-show"),t.loaderBar.classList.add("removeLoader"),t.loaderBar.style.transform="scale(.999, 0)"})},800)}},{key:"complete",value:function(e){this.firstRing=new THREE.Object3D,this.groupTiles=new THREE.Object3D,this.groupTiles2=new THREE.Object3D,this.groupTiles3=new THREE.Object3D,this.groupTiles4=new THREE.Object3D,this.tiles=[],this.setupAudio(),this.addSoundControls(),this.createScene(),this.createCamera(),this.addAmbientLight(),this.addSpotLight(new THREE.SpotLight(this.objectsColor),0,30,0),this.addCameraControls(),this.addFloor(),this.playSound(e),this.addEventListener(),this.addEnvMap(),this.addGroupTiles(this.groupTiles),this.addGroupTiles(this.groupTiles2),this.addGroupTiles(this.groupTiles3),this.addGroupTiles(this.groupTiles4),this.groupTiles.position.set(-9,0,9),this.groupTiles2.position.set(-27,0,-9),this.groupTiles3.position.set(9,0,-9),this.groupTiles4.position.set(-9,0,-27),this.addGrid(),this.animate()}},{key:"addEnvMap",value:function(){var e=(new THREE.CubeTextureLoader).load(["https://iondrimbafilho.me/3d5/img/posx.jpg","https://iondrimbafilho.me/3d5/img/negx.jpg","https://iondrimbafilho.me/3d5/img/posy.jpg","https://iondrimbafilho.me/3d5/img/negy.jpg","https://iondrimbafilho.me/3d5/img/posz.jpg","https://iondrimbafilho.me/3d5/img/negz.jpg"]);e.format=THREE.RGBAFormat;var t=THREE.ShaderLib.cube;t.uniforms.tCube.texture=e;var i=new THREE.ShaderMaterial({fragmentShader:t.fragmentShader,vertexShader:t.vertexShader,uniforms:t.uniforms,depthWrite:!1});new THREE.Mesh(new THREE.CubeGeometry(100,100,100),i).flipSided=!0;var n=new THREE.OctahedronGeometry(3,0),o=new THREE.MeshStandardMaterial({color:16776960,emissive:0,roughness:.4,metalness:.6,envMap:e});this.reflectingObject=new THREE.Mesh(n,o),this.reflectingObject.position.y=8,this.reflectingObject.castShadow=!0,this.reflectingObject.receiveShadow=!0,this.scene.add(this.reflectingObject)}},{key:"addGroupTiles",value:function(e){for(var t=[],i=new THREE.CylinderBufferGeometry(.4,.4,10,59),n=new THREE.MeshStandardMaterial({color:this.objectsColor,emissive:5792512,roughness:.15,metalness:.64}),o=0;o<10;o++){t[o]=[];for(var a=0;a<10;a++){var s={z:a,y:0,x:o};t[o][a]=s;var r=this.create3DObj(i,n);r.scale.set(1,.001,1),o>0&&(s.x=1*t[o-1][a].x+2),a>0&&(s.z=1*t[o][a-1].z+2),r.position.set(s.x,s.y,s.z),e.add(r),this.tiles.push(r)}}t=null,this.scene.add(e)}},{key:"addGrid",value:function(){var e=new THREE.GridHelper(25,25);e.position.set(0,0,0),e.material.opacity=0,e.material.transparent=!0,this.scene.add(e)}},{key:"playSound",value:function(e){this.audioElement.src=e}},{key:"map",value:function(e,t,i,n,o){return(e-t)/(i-t)*(o-n)+n}},{key:"drawWave",value:function(){var e=0,t=0;if(this.playing){this.analyser.getByteFrequencyData(this.frequencyData);for(var i=0;i<this.tiles.length;i++)t=this.frequencyData[i],e=this.map(t,0,255,.001,1),this.tiles[i]&&TweenMax.to(this.tiles[i].scale,.3,{y:e})}}},{key:"addSoundControls",value:function(){var e=this;this.btnPlay=document.querySelector(".play"),this.btnPause=document.querySelector(".pause"),this.btnPlay.addEventListener("click",function(){e.play()}),this.btnPause.addEventListener("click",function(){e.pause()})}},{key:"pause",value:function(){this.audioElement.pause(),this.btnPause.classList.remove("control-show"),this.btnPlay.classList.add("control-show")}},{key:"play",value:function(){this.audioCtx.resume(),this.audioElement.play(),this.btnPlay.classList.remove("control-show"),this.btnPause.classList.add("control-show")}},{key:"createScene",value:function(){this.scene=new THREE.Scene,this.scene.background=new THREE.Color(this.sceneBackGroundColor),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.scene1=new THREE.Scene,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,document.body.appendChild(this.renderer.domElement)}},{key:"addEventListener",value:function(){var e=this;this.playIntro.addEventListener("click",function(t){t.currentTarget.classList.remove("control-show"),e.play()}),document.body.addEventListener("mouseup",function(){requestAnimationFrame(function(){document.body.style.cursor="-moz-grab",document.body.style.cursor="-webkit-grab"})}),document.body.addEventListener("mousedown",function(){requestAnimationFrame(function(){document.body.style.cursor="-moz-grabbing",document.body.style.cursor="-webkit-grabbing"})}),document.body.addEventListener("keyup",function(t){32!==t.keyCode&&"Space"!==t.code||(e.playIntro.classList.remove("control-show"),e.playing?e.pause():e.play())})}},{key:"createCamera",value:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(40,40,-40),this.scene.add(this.camera),this.cameraCube=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1e5)}},{key:"addCameraControls",value:function(){this.controls=new THREE.OrbitControls(this.camera)}},{key:"create3DObj",value:function(e,t){var i=new THREE.Mesh(e,t);i.castShadow=!0,i.receiveShadow=!0,i.position.y=5;var n=new THREE.Object3D;return n.add(i),n.size=2,n}},{key:"onResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}},{key:"addFloor",value:function(){var e=new THREE.PlaneGeometry(250,250),t=new THREE.ShadowMaterial({opacity:.05});this.floor=new THREE.Mesh(e,t),e.rotateX(-Math.PI/2),this.floor.position.y=0,this.floor.receiveShadow=!0,this.scene.add(this.floor)}},{key:"addSpotLight",value:function(e,t,i,n){this.spotLight=e,this.spotLight.position.set(t,i,n),this.spotLight.castShadow=!0,this.scene.add(this.spotLight)}},{key:"addAmbientLight",value:function(){var e=new THREE.AmbientLight(16777215);this.scene.add(e)}},{key:"animate",value:function(){this.controls.update(),this.renderer.render(this.scene,this.camera),this.drawWave(),this.reflectingObject.rotation.y+=.05,requestAnimationFrame(this.animate.bind(this))}},{key:"radians",value:function(e){return e*Math.PI/180}},{key:"setupAudio",value:function(){var e=this;this.audioElement=document.getElementById("audio"),this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioCtx.createAnalyser(),this.analyser.smoothingTimeConstant=.4,this.source=this.audioCtx.createMediaElementSource(this.audioElement),this.source.connect(this.analyser),this.source.connect(this.audioCtx.destination),this.bufferLength=this.analyser.frequencyBinCount,this.waveform=new Uint8Array(this.analyser.fftSize),this.frequencyData=new Uint8Array(this.analyser.fftSize),this.audioElement.volume=this.volume,this.audioElement.addEventListener("playing",function(){e.playing=!0}),this.audioElement.addEventListener("pause",function(){e.playing=!1}),this.audioElement.addEventListener("ended",function(){e.playing=!1,e.pause()})}}]),e}());window.addEventListener("resize",s.onResize.bind(s))}]);