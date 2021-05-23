
// x = 0;
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ], {
        rewind: true,
        // autoplay: true,
        // interval: 3000,
        
    } ).mount();
    // x++;
}

// console.log('x = ',x)
// console.log('elms length = ',elms)
