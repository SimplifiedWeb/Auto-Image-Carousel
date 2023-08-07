# Auto Image Carousel
# The main goal is to understand the logic behind its functioning.
# Open the project code on one side and this readme on the other side to better understand what I'm trying to convey.
Check out the demo: https://simplifiedweb.github.io/Auto-Image-Carousel/

I've developed an auto image carousel. Let me explain it in a simple way.

First, let's consider that we have three boxes: left, middle, and right. Even though they have different sizes, their functionality is the same across all boxes.

Having three boxes implies having three containers, and each container has images. The idea here is that every box has a different size, so we need to address how we can uniquely identify and size each container. This is where we use IDs for each container to give them distinctive attributes, including their sizes.

Once we have established the structure, we move on to the CSS part, where we discuss the use of the transform property. It's essential to note that we need to move each image by a certain number of pixels to display the second and third images. This is where the transform property, specifically translate, comes into play.

At the starting point, the transform translate value is set to zero because we don't want any translation for the first image.

The logic is straightforward: If you set the width of the images to, let's say, 300px, then the transform translate property should also be 300px.

For example:

When index = 0, we have a translate of 300px.
When index = 1, we have a translate of 300px * 2 (600px).
When index = 2, we have a translate of 300px * 3 (900px).
Since each image has a width of 300px, the translation moves the image by the width value each time. This results in the images aligning properly.

The same logic applies to the other images as well. We just need to move each image by its width and adjust it using the translate transform property.

We use the setInterval function for continuous iteration.

Feel free to explore the demo link to see the carousel in action!
