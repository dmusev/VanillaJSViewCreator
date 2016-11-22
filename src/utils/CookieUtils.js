/**
 *  Cookie Utils
 * ==============================================================
 * @author Dimitar Musev, Sofia, Bulgaria
 * @date 22.11.2016
 */
(function(){

    var CookieUtils = VU.CookieUtils = {};
    /**
     * Create cookie
     * @param  {[type]} name  [description]
     * @param  {[type]} value [description]
     * @param  {[type]} days  [description]
     * @return {[type]}       [description]
     */
    CookieUtils.createCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        } else{
            var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
        } 
    }//createCookie

    /**
     * Find a cookie by name
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    CookieUtils.findCookie = function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };//findCookie

    /**
     * Erase cookie by name
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
     */
    CookieUtils.eraseCookie = function(name) {
        createCookie(name,"",-1);
    };//eraseCookie
})();