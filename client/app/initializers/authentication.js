import Ember from "ember";
import CustomAuthenticator from "../authenticators/custom";
import CustomAuthorizer from "../authorizers/custom";

export default {
	name: "authentication",
	before: "simple-auth",
	initialize: function(container, application) {
		container.register("authenticator:custom", CustomAuthenticator);
		container.register("authorizer:custom", CustomAuthorizer);
	}
};