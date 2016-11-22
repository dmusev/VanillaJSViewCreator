/**
 *  Menu Engine. Enter pointer
 * =============================================================
 * @author Dimitar Musev, Sofia, Bulgaria
 * @gameProducer EGT
 * @version      1.0
 *
 */

//-------------------------------------------------------------------------------------
(function(){

    var MenuEngine = VU.MenuEngine = function( menuConfig, viewport ){ "use strict";

        this.menuConfig     = menuConfig;
        this.menuView       = null;
        this.viewport       = viewport;
    };

    /**
     * Initialize
     */
    MenuEngine.prototype.initialize = function(){ "use strict";
        var 
            initializeMenu, createMenu, refItemsView,
            _this = this
        ;

        /**
         * Creating whole view
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        initializeMenu = function(callback){
            //Initialize ref items
            refItemsView = new VU.RefItemsView(_this.menuConfig.menu.menuItems);
            refItemsView.initialize();
            
            callback && callback(refItemsView.refItemsContainer, _this.menuConfig, _this.viewport);
        }
        
        createMenu = function(refItemsContainer, menuConfig, viewport){
            _this.menuView = new VU.MenuView(menuConfig, viewport);
            _this.menuView.initialize(refItemsContainer);

            if(VU.CookieUtils.findCookie('view') == 'list'){
                _this.menuView.setListView();
            }else{
                _this.menuView.setGridView();
            };

        }
        initializeMenu(createMenu);
    };//

})();

//Enter point
var
    menuEngine
;

function start(){
    menuEngine = new VU.MenuEngine(VU.menuConfig, VU.viewport);
    menuEngine.initialize();
}

$(document).ready(function(){
    start();
});