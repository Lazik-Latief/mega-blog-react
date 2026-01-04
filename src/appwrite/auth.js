// Import Appwrite configuration (URL & Project ID)
import conf from "../conf/conf.js";

// Import required classes from Appwrite SDK
import { Client, Account, ID } from "appwrite";

// AuthService class handles all authentication work
export class AuthService {

  // Create Appwrite client object
  client = new Client();

  // Variable to store Account service
  account;

  // Constructor runs when AuthService object is created
  constructor() {

    // Connect client to Appwrite server & project
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    // Create Account service using client
    this.account = new Account(this.client);
  }

  // Create new user account (signup)
  async createAccount({ email, password, name }) {
    try {
      // Create user in Appwrite with unique ID
      const userAccount = await this.account.create(
        ID.unique(),   // auto-generated user ID
        email,         // user email
        password,      // user password
        name           // user name
      );

      // If account created successfully
      if (userAccount) {
        // Automatically log in the user
        return this.login({ email, password });
      } else {
        // Return account data if needed
        return userAccount;
      }

    } catch (error) {
      // Send error to the place where function was called
      throw error;
    }
  }

  // Login user with email & password
  async login({ email, password }) {
    try {
      // Create login session in Appwrite
      return await this.account.createSession(
        email,
        password
      );
    } catch (error) {
      // Throw error if login fails
      throw error;
    }
  }

  // Get currently logged-in user details
  async getCurrentUser() {
    try {
      // Fetch current user data
      return await this.account.get();
    } catch (error) {
      // Print error in console
      console.log(
        "Appwrite service :: getCurrentUser :: error",
        error
      );
    }

    // Return null if no user is logged in
    return null;
  }

  // Logout current user
  async logout() {
    try {
      // Delete current session (logout)
      await this.account.deleteSessions("current");
    } catch (error) {
      // Print logout error
      console.log(
        "Appwrite service :: logout :: error",
        error
      );
    }
  }
}

// Create a single AuthService object
const authService = new AuthService();

// Export the object so it can be used anywhere in app
export default authService;
