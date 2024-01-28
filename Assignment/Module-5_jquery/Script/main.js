
$(document).ready(function(){
    var images = ['#img1', '#img2', '#img3'];
    var index = 0;

    $('#btn').click(function(){
        // Move the current image to the left
        $(images[index]).animate({ left: '100%' });
        
        // Increment the index
        index = (index + 1) % images.length;
        
        // Move the next image to its initial position
        $(images[index]).css({ left: '100%' }).animate({ left: '0' });
    });
});