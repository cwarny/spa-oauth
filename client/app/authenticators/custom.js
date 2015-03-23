import Ember from "ember";
import Base from "simple-auth/authenticators/base";

export default Base.extend({

	restore: function(data) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},

	authenticate: function(credentials) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			Ember.$.ajax({
				type: "POST",
				url: "api/sessions",
				data: JSON.stringify(credentials),
				contentType: "application/json",
				dataType: "json",
				success: Ember.run.bind(null, resolve),
				error: Ember.run.bind(null, reject)
			});
		});
	},

	invalidate: function() {
		return new Ember.RSVP.Promise(function(resolve) {
			resolve();
		});
	}
});