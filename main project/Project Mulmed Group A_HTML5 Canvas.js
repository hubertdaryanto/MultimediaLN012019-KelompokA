(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Project Mulmed Group A_HTML5 Canvas_atlas_", frames: [[0,0,1934,1850]]},
		{name:"Project Mulmed Group A_HTML5 Canvas_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"Project Mulmed Group A_HTML5 Canvas_atlas_3", frames: [[0,0,1095,1179],[0,1181,491,351]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Project Mulmed Group A_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Project Mulmed Group A_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Group3 = function() {
	this.initialize(ss["Project Mulmed Group A_HTML5 Canvas_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.isometric = function() {
	this.initialize(ss["Project Mulmed Group A_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SoftwareButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,547.5,589.5);


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.isometric();
	this.instance.parent = this;
	this.instance.setTransform(2,0);

	this.instance_1 = new lib.Group3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,-5,3.9259,3.0912);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance}]},24).to({state:[{t:this.instance}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:true},24).wait(24).to({_off:false},0).wait(24));

}).prototype = p = new cjs.MovieClip();


(lib.HardwareButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,967,925);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("rgba(0,0,0,0)").setStrokeStyle(2,1,1,3,true).moveTo(275,200).lineTo(-275,200).lineTo(-275,-200).lineTo(275,-200).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961,-541,1922,1082);


(lib.Scene_1_buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.softwareBtn = new lib.SoftwareButton();
	this.softwareBtn.name = "softwareBtn";
	this.softwareBtn.parent = this;
	this.softwareBtn.setTransform(561.25,294.3,1,1,0,0,0,273.3,294.3);
	this.softwareBtn.visible = false;
	new cjs.ButtonHelper(this.softwareBtn, 0, 1, 1);

	this.hardwareButton = new lib.HardwareButton();
	this.hardwareButton.name = "hardwareButton";
	this.hardwareButton.parent = this;
	this.hardwareButton.setTransform(1338.85,510.75,1,1,0,0,0,483.4,462.4);
	this.hardwareButton.visible = false;
	new cjs.ButtonHelper(this.hardwareButton, 0, 1, 1);

	this.imacBtn = new lib.SoftwareButton();
	this.imacBtn.name = "imacBtn";
	this.imacBtn.parent = this;
	this.imacBtn.setTransform(1499.8,366.4,0.7693,0.5402,0,2.4122,27.8245,273.4,296.8);
	this.imacBtn.visible = false;
	new cjs.ButtonHelper(this.imacBtn, 0, 1, 1);

	this.appletvBtn = new lib.SoftwareButton();
	this.appletvBtn.name = "appletvBtn";
	this.appletvBtn.parent = this;
	this.appletvBtn.setTransform(1688.85,816.75,0.2976,0.2401,0,-55.7767,-34.1586,272.4,298.3);
	this.appletvBtn.visible = false;
	new cjs.ButtonHelper(this.appletvBtn, 0, 1, 1);

	this.iphoneBtn = new lib.SoftwareButton();
	this.iphoneBtn.name = "iphoneBtn";
	this.iphoneBtn.parent = this;
	this.iphoneBtn.setTransform(1546.35,910.4,0.2085,0.094,0,-64.1917,-29.9987,272,299.3);
	this.iphoneBtn.visible = false;
	new cjs.ButtonHelper(this.iphoneBtn, 0, 1, 1);

	this.ipodBtn = new lib.SoftwareButton();
	this.ipodBtn.name = "ipodBtn";
	this.ipodBtn.parent = this;
	this.ipodBtn.setTransform(1481.05,888.1,0.1345,0.0677,0,-64.1918,-29.9981,272.6,296.3);
	this.ipodBtn.visible = false;
	new cjs.ButtonHelper(this.ipodBtn, 0, 1, 1);

	this.applewatchBtn = new lib.SoftwareButton();
	this.applewatchBtn.name = "applewatchBtn";
	this.applewatchBtn.parent = this;
	this.applewatchBtn.setTransform(1428.8,862.85,0.1345,0.0533,0,-64.1838,-29.9981,272.9,295.4);
	this.applewatchBtn.visible = false;
	new cjs.ButtonHelper(this.applewatchBtn, 0, 1, 1);

	this.ipadBtn = new lib.SoftwareButton();
	this.ipadBtn.name = "ipadBtn";
	this.ipadBtn.parent = this;
	this.ipadBtn.setTransform(1407.1,740.2,0.3579,0.2253,0,-64.1831,-29.9976,273.1,294.7);
	this.ipadBtn.visible = false;
	new cjs.ButtonHelper(this.ipadBtn, 0, 1, 1);

	this.macbookButton = new lib.HardwareButton();
	this.macbookButton.name = "macbookButton";
	this.macbookButton.parent = this;
	this.macbookButton.setTransform(1209.4,623.85,0.2753,0.2086,0,-120.0033,-148.1208,483.2,462.1);
	this.macbookButton.visible = false;
	new cjs.ButtonHelper(this.macbookButton, 0, 1, 1);

	this.macosButton = new lib.SoftwareButton();
	this.macosButton.name = "macosButton";
	this.macosButton.parent = this;
	this.macosButton.setTransform(649.15,507.35,1,1,0,0,0,273.3,294.3);
	this.macosButton.visible = false;
	new cjs.ButtonHelper(this.macosButton, 0, 1, 1);

	this.iosButton = new lib.HardwareButton();
	this.iosButton.name = "iosButton";
	this.iosButton.parent = this;
	this.iosButton.setTransform(1338.9,510.8,0.6363,0.6289,0,0,0,483.4,462.4);
	this.iosButton.visible = false;
	new cjs.ButtonHelper(this.iosButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]}).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},23).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},1).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},23).to({state:[{t:this.macbookButton},{t:this.ipadBtn},{t:this.applewatchBtn},{t:this.ipodBtn},{t:this.iphoneBtn},{t:this.appletvBtn},{t:this.imacBtn}]},1).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},23).to({state:[{t:this.iosButton},{t:this.macosButton}]},1).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},24).to({state:[{t:this.hardwareButton},{t:this.softwareBtn}]},23).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ProjectMulmedGroupA_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
		this.stop();
		
		this.hardwareBtn.addEventListener("click", start2.bind(this));
		this.softwareBtn.addEventListener("click", start.bind(this));
		
		
		function start(){
			this.gotoAndPlay(1);
		}
		
		function start2(){
			this.gotoAndPlay(25);
		}
	}
	this.frame_23 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
		this.gotoAndPlay(72);
	}
	this.frame_24 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
	}
	this.frame_47 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
	}
	this.frame_48 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.macbookButton = this.buttons.macbookButton;
		this.ipadBtn = this.buttons.ipadBtn;
		this.applewatchBtn = this.buttons.applewatchBtn;
		this.ipodBtn = this.buttons.ipodBtn;
		this.iphoneBtn = this.buttons.iphoneBtn;
		this.appletvBtn = this.buttons.appletvBtn;
		this.imacBtn = this.buttons.imacBtn;
		this.stop();
	}
	this.frame_71 = function() {
		this.macbookButton = undefined;this.ipadBtn = undefined;this.applewatchBtn = undefined;this.ipodBtn = undefined;this.iphoneBtn = undefined;this.appletvBtn = undefined;this.imacBtn = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
	}
	this.frame_72 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.iosButton = this.buttons.iosButton;
		this.macosButton = this.buttons.macosButton;
		this.stop();
	}
	this.frame_96 = function() {
		this.iosButton = undefined;this.macosButton = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
	}
	this.frame_119 = function() {
		this.hardwareButton = undefined;this.softwareBtn = undefined;this.hardwareButton = this.buttons.hardwareButton;
		this.softwareBtn = this.buttons.softwareBtn;
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(23).call(this.frame_47).wait(1).call(this.frame_48).wait(23).call(this.frame_71).wait(1).call(this.frame_72).wait(24).call(this.frame_96).wait(23).call(this.frame_119).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(960,540);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.7,regY:0.6,scaleX:0.5462,scaleY:0.5462,x:685.3,y:293.75},23).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:960,y:540},0).to({regX:0.5,regY:0.4,scaleX:0.7943,scaleY:0.7943,x:1158.55,y:532.75},23).wait(24).to({regX:0,regY:0,scaleX:1,scaleY:1,x:960,y:540},0).wait(49));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.parent = this;
	this.buttons.setTransform(1055,486.4,1,1,0,0,0,1055,486.4);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 0
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(120));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(962,540,1,1,0,0,0,962,540);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 1
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959,535,969.7,546);
// library properties:
lib.properties = {
	id: '1CAEAB27B7AF4C498661D32752AFBEEB',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Project Mulmed Group A_HTML5 Canvas_atlas_.png?1561051218165", id:"Project Mulmed Group A_HTML5 Canvas_atlas_"},
		{src:"images/Project Mulmed Group A_HTML5 Canvas_atlas_2.png?1561051218165", id:"Project Mulmed Group A_HTML5 Canvas_atlas_2"},
		{src:"images/Project Mulmed Group A_HTML5 Canvas_atlas_3.png?1561051218165", id:"Project Mulmed Group A_HTML5 Canvas_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1CAEAB27B7AF4C498661D32752AFBEEB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;