var glUtils  = function(){
    function getWebGlContext(canvas, attr_opts){
        var context = null;
        var names = ['webgl', 'webkit-3d', 'moz-webgl', 'experimental-webgl'];
        for (var i = 0, len = names.length; i < len; i ++) {
            try{
                context = canvas.getContext(names[i], attr_opts);    
            } catch(err){}
            if (context) {
                break;
            }
        }
        return context;
    }
    return {
        getWebGlContext: getWebGlContext 
    }
}();
/**
 * for test
 */
var canvas = document.getElementById('webgl');
var gl = glUtils.getWebGlContext(canvas);
gl.clearColor(0.5,0.5,0.5,1.0);
gl.clear(gl.COLOR_BUFFER_BIT);