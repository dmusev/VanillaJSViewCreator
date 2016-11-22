/**
 *  DOM Utils
 * ==============================================================
 * @author Dimitar Musev, Sofia, Bulgaria
 * @date 22.11.2016
 */
(function(){

    var DOMUtils = VU.DOMUtils = {};

   /**
    * Create DOM element( Petar Petrov's implementation)
    * @param  {[type]} type  [description]
    * @param  {[type]} props [description]
    * @param  {[type]} win   [description]
    * @return {[type]}       [description]
    */
    DOMUtils.createDOM = function(type, props, win){
        win = win || window;
        var dom = win.document.createElement(type);
        for(var p in props){
            var val = props[p];
            if(p == "style"){
                for(var s in val) {
                    dom.style[s] = val[s];
                }
            }else if( p == "class"){
 				dom.className = val;
            }else{
                dom[p] = val;
            }
        }
        return dom;
    };//createDOM
})();