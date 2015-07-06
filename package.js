Package.describe({
	name    : 'pantreeco:zendesk',
	version : '1.0.0',
	summary : 'A Meteor wrapper for the Zendesk API',
	homepage: "https://github.com/pantreeco/meteor-zendesk",
	author  : "Josh Chittick (https://pantree.co)",
	git     : 'https://github.com/pantreeco/meteor-zendesk.git'
});

Package.onUse(function (api, where) {

	api.versionsFrom('METEOR@0.9.2');

	api.addFiles('lib/server/zendesk.js', 'server');

	if (api.export) {
		api.export('Zendesk', ['server']);
	}
});

Npm.depends({ 'node-zendesk': '1.1.4' });
