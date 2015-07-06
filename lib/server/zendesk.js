function validateSettings(settings) {
	if (settings &&
		settings.username &&
		settings.token &&
		settings.remoteUri
	) {
		return true;
	} else {
		throw new Meteor.Error("Must define following Zendesk fields in your settings.json",
			JSON.stringify({
				"private": {
					"zendesk": {
						"username": "<Your Zendesk username>",
						"token": "<Your Zendesk token>",
						"remoteUri": "https://<yourRemoteZendesk>.zendesk.com/api/v2"
					}
				}
			}, null, 2, '\t')
		);
	}
}

function getSettings() {
	if (Meteor.settings &&
		Meteor.settings.private &&
		Meteor.settings.private.zendesk
	) {
		return Meteor.settings.private.zendesk;
	} else {
		throw new Meteor.Error("Missing private zendesk field in your settings.json",
			JSON.stringify({
				"private": {
					"zendesk": {}
				}
			}, null, 2, '\t')
		);
	}
}

Zendesk = function(settings) {
	settings = settings || getSettings();

	validateSettings(settings);

	return Npm.require('node-zendesk').createClient(settings);
}
