// Idea 1

osc(8.345, 0.153, 1.143)
	.kaleid(4.408)
	.scale(3.5)
	.out();

// Idea 2
noise().mult(osc(8.345, 0.153, 1.143)
	.kaleid(9.408)
	.scale(0.5))
	.out();

// Idea 3
osc(10.281, 0.144, 1.2)
	.blend(noise(1.272)).color(-2, 1).colorama()
	.diff(shape(1, 0.02)
		.rotate(0.834, 0.067))
	.out();

// Now Combine 
osc(10.281, 0.059, 1.2)
	.blend(noise(1.376, 0)
		.thresh(0, 156)
		.add(noise(21.33, 0)
			.brightness(-1)
			.color(0, 0.551)), -.003)
	.color(-1.641, 1.862)
	.colorama()
	.blend(noise(1.272))
	.color(-2, 1)
	.colorama()
	.diff(noise(1.376, 0))
	.out();
