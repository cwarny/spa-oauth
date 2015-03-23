import Ember from "ember";

export default Ember.Controller.extend({
	credentials: function() {
		return { username: this.get("username"), password: this.get("password") };
	}.property("username", "password"),
	actions: {
		authenticate: function() {
			this.get("session").authenticate("authenticator:custom", this.get("credentials"));
		}
	}
});