sap.ui.controller("shoppingcart.Products", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.Products
*/
	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
	
	_handleRouteMatched: function(evt) {
		
		if(evt.getParameter("name") !== "Products") {
			
			return;
			
		}
		
		this.catIndex = evt.getParameter("arguments").catIndex;
		this.subCatIndex = evt.getParameter("arguments").subCatIndex;
		
		var context = sap.ui.getCore().byId("app").getModel('products').getContext('/collection/' + this.catIndex + '/items/subcat/' + this.subCatIndex);
		
		this.getView().setBindingContext(context,'products');
		
		
	},



});