// Import configuration values (URL, Project ID, DB ID etc.)
import conf from "../conf.js";

// Import required classes from Appwrite SDK
import { Client, ID, Databases, Storage, Query } from "appwrite";

// Service class to handle all Appwrite operations
export class Service {
  // Create Appwrite client instance
  client = new Client();

  // Variables for database and storage
  databases;
  bucket;

  // Constructor runs automatically when class is created
  constructor() {
    // Set Appwrite endpoint and project ID
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    // Initialize database service
    this.databases = new Databases(this.client);

    // Initialize storage (bucket) service
    this.bucket = new Storage(this.client);
  }

  // Create a new post in database
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId, // Database ID
        conf.appwriteCollectionId, // Collection ID
        slug, // Document ID
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service  >> createPost >> error ", error);
    }
  }

  // Update existing post using slug (document ID)
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service >> updatePost >> error", error);
    }
  }

  // Delete a post from database
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true; // success
    } catch (error) {
      console.log("Appwrite service >> deletePost > error", error);
      return false;
    }
  }

  // Get single post by slug
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service >> getPost >> error", error);
      return false;
    }
  }

  // Get multiple posts (default: only active posts)
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  // Upload file to Appwrite storage
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(), // auto-generate unique file ID
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  // Delete file from storage
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  // Get preview URL of uploaded file
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

// Create single instance of Service (singleton pattern)
const service = new Service();

// Export service for use in whole project
export default service;
