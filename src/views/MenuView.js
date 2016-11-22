/**
 *	Menu View
 * ==============================================================
 * @author Dimitar Musev, Sofia, Bulgaria
 * @date 22.11.2016
 */
//-------------------------------------------------------------------------------------
(function(){

    var MenuView = VU.MenuView = function( menuConfig, viewport ){ "use strict";

        this.menuConfig     = menuConfig; //Menu Config - parsed json
        this.menuName       = menuConfig.menu.menuName;  //Menu name
        this.name = this.id = 'menuView_' + this.menuName;
        this.menuType       = null; //Menu type
        this.refItemView    = null; //Ref item view
        this.viewport       = viewport; //View port configuration
    };

    /**
     * Initialize
     */
    MenuView.prototype.initialize = function( refItemsContainer ){ "use strict";
        var
            menuContainer,
            _this = this
        ;

        // Create ViewPort
        menuContainer = VU.DOMUtils.createDOM('div', {
            id    :  _this.id,
            style :  {
                // width:  _this.viewport.width  + 'px'
            },
            class : 'container'//
        });
        //Calling attach function
        _this._attachButtonsTitle(menuContainer);

        //Appending container with ref items
        menuContainer.appendChild(refItemsContainer);
        //Append whole view to a particular element(currently to body as we are in development phase)
        self.document.body.appendChild( menuContainer );


    };
    /**
     * Private function to attach buttons and titles to the main menu view
     * @param  {[type]} container [description]
     * @return {[type]}           [description]
     */
    MenuView.prototype._attachButtonsTitle = function( container ) { "use strict";
        var
            menuContainer, containerTitle,
            buttonsContainer, buttonsGroup, listButton, gridButton,
            createAttachButton, setGridView, setListView,
            _this = this
        ;

        //Creating and attaching only buttons
        createAttachButton = function(elementId, elementToAttach, _this) {
            var
                button, buttonSpan, buttonTextNode
            ;
            buttonSpan = VU.DOMUtils.createDOM('span', {
                class : 'glyphicon glyphicon-th' + (elementId == 'List' ? '-list' : '')//
            });
            
            buttonTextNode = document.createTextNode(elementId);

            button = VU.DOMUtils.createDOM('a', {
                id: elementId,
                class : 'btn btn-default btn-sm'//
            });
            button.appendChild(buttonSpan);
            button.appendChild(buttonTextNode);
            (elementId == 'List' ? 
            	button.addEventListener('click', _this.setListView) : button.addEventListener('click', _this.setGridView))

            elementToAttach.appendChild(button);
        };

        buttonsContainer = VU.DOMUtils.createDOM('div', {
            class : 'well well-sm'//
        });

        //Creating title
        containerTitle = VU.DOMUtils.createDOM('strong', {
            textContent : _this.menuName,
            style : {
                        padding : '5px'
                    }//
        });

        //Appending title
        buttonsContainer.appendChild( containerTitle )

        buttonsGroup = VU.DOMUtils.createDOM('div', {
            class : 'btn-group'//
        });

        //Appending buttons
        createAttachButton('List', buttonsGroup, _this);
        createAttachButton('Grid', buttonsGroup, _this);

        buttonsContainer.appendChild(buttonsGroup);

        container.appendChild(buttonsContainer);
    };//

     /**
      * Set grid view
      * Helper function to swap between views
      */
    MenuView.prototype.setGridView = function() { "use strict";
    	$('.item').removeClass('list-group-item');
		VU.CookieUtils.createCookie('view', 'grid');
    };//

    /**
     * Set list view
     * Helper function to swap between views
     */
    MenuView.prototype.setListView = function() { "use strict";
    	$('.item').addClass('list-group-item');
		VU.CookieUtils.createCookie('view', 'list');
    };//

})();