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


