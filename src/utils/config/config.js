const config = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCOllectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID
};

export default Object.freeze(config);