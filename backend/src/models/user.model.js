import mongoose from "mongoose";

// Define the user schema
// This schema defines the structure of the user document in the MongoDB database
// It includes fields for email, full name, password, and profile picture
// Each field has its own type and validation rules
// The email field is required and must be unique, the full name is required, the password
// is required with a minimum length of 6 characters, and the profile picture is optional with
// a default value of an empty string.
// The schema also includes timestamps to automatically manage createdAt and updatedAt fields.
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},

		fullName: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
			minLength: 6,
		},

		profilePic: {
			type: String,
			default: "",
		},
	},

	{
		timestamps: true,
	}
);

// Create the User model using the user schema
// The User model is a representation of the user collection in the MongoDB database
// It provides an interface to interact with the user documents, allowing for operations like
// creating, reading, updating, and deleting user records.
// The model is exported so it can be used in other parts of the application, such as routes
const User = mongoose.model("User", userSchema);

export default User;
