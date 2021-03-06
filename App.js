Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc2/doc/">App SDK 2.0rc2 Docs</a>'},
    
	launch: function() {
        console.log("Our First App woot!");
		this._getData();
    },
	
	_getData: function() {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(store, data, success) {
					this._loadGrid(store);
				},
				scope: this
			},
			fetch: ['Name', 'FormattedID', 'ScheduleState']
		});
	},
	
	_loadGrid: function(store) {
		var myGrid = Ext.create("Rally.ui.grid.Grid", {
			store: store,
			columnCfgs: ['FormattedID', 'Name', 'ScheduleState']
		});
		
		this.add(myGrid);
	}
});
