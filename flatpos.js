(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.flatpos = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383838").s().p("AxcAVQnPgJAAgMQAAgLHPgJQHPgJKNAAQKOAAHPAJQHPAJAAALQAAAMnPAJQnPAJqOAAQqNAAnPgJg");
	this.shape.setTransform(966.3,319.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383838").s().p("AhFGnQgdivgBj4QABj3AdiwQAdiwAoAAQApAAAdCwQAeCwAAD3QAAD4geCvQgdCxgpAAQgoAAgdixg");
	this.shape_1.setTransform(1024.3,368.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383838").s().p("AlvIZQiYjfAAk6QAAk5CYjgQCZjeDWAAQDXAACYDeQCZDgAAE5QAAE6iZDfQiYDfjXAAQjWAAiZjfg");
	this.shape_2.setTransform(878.3,522.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383838").s().p("EhkNgHrUArcAQpgQzhAvUBWTAKlBamgKlUhooBS1AvcANHUg4qAPngjMAAAUhG+AAAAQeg/dg");
	this.shape_3.setTransform(430.9,341);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(281.7,368,1354.6,714.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;