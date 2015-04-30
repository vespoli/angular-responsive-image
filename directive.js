angular.module('myApp').directive('responsiveImage', function(){    
    // return appropriate source
    var imgSrc = {
      link: function postLink(scope, element, attr) {
        var size = 
          // insert desired measurments or pass in
          screen.width > 1100 ? attr.desktopSize :
          screen.width > 767 ? attr.tabletSize :
          attr.mobileSize;

        //modify pathing
        element.attr("src", attr.originalSrc.replace('/files/','/files/styles/'+size+'/public/'));        
      }
    };
  return imgSrc;
});