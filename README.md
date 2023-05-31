# Auto-Image-Carousel
I develop a Auto ImageCarousel. Let me Explain you in Simple way.

so let's first think about it, we have three boxes, left middle and right; 
so they all are different sizes but the functionality was all the same in all the boxes.

Three boxes means three container each containing has images. so the idea is like every box has different sizes.
so we have to think about that, how we are gonna do that, how we are gonna target each one of them.
So we use id for each container to uniquely identifies each of them and make the sizes of each container.

 After we do all the structure part then we move on to css part where we talk about the Transform property. Bcz keep in mind
each image we have to move in some pixels to get the second image or than third. So transform-Translate property was important
So on the starting point the transform translate was to be Zero bcz for the first image we don't want that.
So logic is simple if you give the width of images like 300px so the transform translate property should be 300px also. for example
index = 0 we have 300px of translate.
index = 1 we have 300px * 2 of translate
index = 3 we have 300px * 3 of translate.
bcz each image width was 300px so it move everytime from 300px for first and second for 600px for third 900px like that.

So basic scenario is same for others. The logic same we want just move the image by width and adjust it by translate transform property.

setInterval for continuous iteration.
