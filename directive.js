angular.module('myApp').directive('responsiveImage', function(){    
    // return appropriate image source
    return {
      link: function postLink(scope, element, attr, sizes) {

        // sizes (breakpoints) = [desktop min -1, tablet min - 1]
        var sizes = sizes || [1099,767],
          size = 
          // get appropriate size
          screen.width > sizes[0] ? attr.desktopSize :
          screen.width > sizes[1] ? attr.tabletSize :
          attr.mobileSize;

        // apply size. modify pathing as needed and apply to src
        element.attr("src", attr.originalSrc.replace('/files/','/files/styles/'+size+'/public/'));        
      }
    };
});