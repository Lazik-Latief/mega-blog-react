// Create a configuration object for Appwrite
const conf = {

  // Appwrite server URL (from .env file)
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

  // Appwrite Project ID (from .env file)
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

  // Appwrite Database ID (from .env file)
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  // Appwrite Collection ID (from .env file)
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

  // Appwrite Storage Bucket ID (from .env file)
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Export configuration so it can be used anywhere in the app
export default conf;
