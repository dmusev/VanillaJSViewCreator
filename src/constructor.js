"use strict";

(function(win) {
	/**
	 * Constructor
	 * =============================================================
	 */
	var VU = win.VU = win.VU || {
		version: "1.0",
		global: win
	}; //

	VU.viewport = {
		width: 1256
	};

	// Dump json for testing purposes
	win.jsonInfo = JSON.stringify({
		"menu": {
			"menuName": "VLT",
			"menuItems": [{
					"itemName": "USERS",
					"url-target": "index.php?MTab=6&FMn=3",
					"url-image": "http://placehold.it/560x360/000/fff"
				}, {
					"itemName": "MACHINES",
					"url-target": "index.php?MTab=6&FMn=3",
					"url-image": "http://placehold.it/280x180/000/fff"
				}, {
					"itemName": "PLACE OF LOCATION",
					"url-target": "index.php?MTab=6&FMn=3",
					"url-image": "http://placehold.it/280x180/000/fff"
				}, {
					"itemName": "GAMES",
					"url-target": "index.php?MTab=6&FMn=3",
					"url-image": "http://placehold.it/280x180/000/fff"
				}, {
					"itemName": "REPORTS BY MACHINE",
					"url-target": "index.php?MTab=6&FMn=3",
					"url-image": "http://placehold.it/280x180/000/fff"
				}

			]
		}
	});

	VU.menuConfig = JSON.parse(win.jsonInfo);

})(window);