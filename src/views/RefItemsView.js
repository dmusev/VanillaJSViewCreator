/**
 *	Menu View
 * ==============================================================
 * @author Dimitar Musev, Sofia, Bulgaria
 * @date 22.11.2016
 */
//-------------------------------------------------------------------------------------
(function(){

    var RefItemsView = VU.RefItemsView = function( menuItems ){ "use strict";

        this.name = this.id 	= 'itemView_products'; //Item id
        this.menuItems 			= menuItems; //Menu items to be displayed
        this.refItemsContainer 	= null
    };

    /**
     * Initialize
     */
    RefItemsView.prototype.initialize = function( ){ "use strict";
        var 
        	createAttachRefItem,
        	_this = this
        ;
        // Creating and attaching ref items in the menu
        createAttachRefItem = function(container, item) {
        	var 
        		itemContainer, itemThumbnail,
        		itemImg, itemCaption, itemTitle
        	;
        	itemContainer = VU.DOMUtils.createDOM('a', {
	            class : 'item  col-sm-3',
	            style : {
                        display : 'block'
                    },
                href : item['url-target']//
        	});
        	itemThumbnail = VU.DOMUtils.createDOM('div', {
	            class : 'thumbnail'//
        	});

        	itemImg = VU.DOMUtils.createDOM('img', {
	            class : 'group list-group-image',
	            src: item['url-image'],
	            alt: ''//
        	});

        	itemCaption = VU.DOMUtils.createDOM('div', {
	            class : 'caption'//
        	});

        	itemTitle = VU.DOMUtils.createDOM('h4', {
	            class : 'group inner list-group-item-heading',
	            textContent: item['itemName']//
        	});
        	itemCaption.appendChild(itemTitle);

        	itemThumbnail.appendChild(itemImg);
        	itemThumbnail.appendChild(itemCaption);

        	itemContainer.appendChild(itemThumbnail);

        	container.appendChild(itemContainer);
        }
        //Create div with its classes
        _this.refItemsContainer = VU.DOMUtils.createDOM('div', {
            id    :  _this.id,
            class : 'row list-group'//
        });

        //Iterate over menu items from json and create every ref item
        for( var item in _this.menuItems ){
        	createAttachRefItem(_this.refItemsContainer, _this.menuItems[item]);
        }//
    };

})();