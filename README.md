# pantreeco:zendesk

A Meteor wrapper for the Zendesk API

## Dependencies

 * [node-zendesk](https://github.com/blakmatrix/node-zendesk) - A Node.js wrapper for the Zendesk API

## Installation

Install using Meteor:

```sh
meteor add pantreeco:zendesk
```

Configure your settings.json:

```javascript
{
	"private": {
		"zendesk": {
			"username": "<Your Zendesk username>",
			"token": "<Your Zendesk token>",
			"remoteUri": "https://<yourRemoteZendesk>.zendesk.com/api/v2"
		}
	}
}
```

and start your server with:

```sh
meteor --settings settings.json
```

## Examples

### Create a ticket

```javascript
var requester = {
	name: 'test user',
	email: 'user@testmeteorzendesk.com'
};

var createTicketRequest = {
	ticket: {
		subject: 'Welcome to Meteor - Zendesk',
		comment: {
			body: 'This is a new ticket'
		},
		type: 'task',
		priority: 'urgent',
		tags: [
			'test'
		],
		requester: requester
	}
};

Zendesk().tickets.create(createTicketRequest, function(err, req, res) {
	if (err) {
		console.error('Zendesk error: ', err);
		return
	}
	// Do something with your ticket
});
```
