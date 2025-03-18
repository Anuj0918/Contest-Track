# Contest Tracker 

## 📌 Overview  
The **Contest Tracker** is a Node.js-based backend service that tracks coding contests from platforms like **LeetCode, Codeforces, and CodeChef**. The platform allows users to view and track contests, automatically update solutions, and access contest discussions from YouTube. It provides an intuitive and responsive UI, supporting both light and dark themes, ensuring an enhanced experience for users.

## 🎯 Features  
✅ Fetches **upcoming and ongoing** contests from **LeetCode, Codeforces, and CodeChef**.  
✅ Stores contest details in a **MongoDB database**.  
✅ Provides a **REST API** for retrieving contest details.  
✅ Allows **adding and retrieving** YouTube solution links for contests.
✅ Supports **CORS** for secure API access.  

## 🛠️ Technologies Used  
| Technology | Purpose |  
|------------|---------|  
| **Node.js & Express.js** | Backend framework |  
| **MongoDB & Mongoose** | Database and ORM |  
| **Axios** | Fetching contest data via HTTP requests |  
| **Google APIs (YouTube)** | Fetching YouTube solution links |  
| **dotenv** | Managing environment variables |  
| **cron** | Scheduling periodic updates |  
| **React.js** | Frontend framework for UI |  
| **React Router** | Managing navigation between pages |  

---

## 🎥 Demo Video

Watch the demo video here: [Watch](https://drive.google.com/file/d/1vkn3pkPS9f4AgSrdZ8rwd86RLjPdkcB6/view?usp=sharing)  

##  Install (Backend)

### 1️. Clone the Repository  
### 2. npm install
### 3. Set up environment variables
```sh
PORT=5000
MONGODB_URI=mongodb+srv://your-mongodb-url
YOUTUBE_API_KEY=your-youtube-api-key
LEETCODE_PLAYLIST_ID=your-leetcode-playlist-id
CODEFORCES_PLAYLIST_ID=your-codeforces-playlist-id
CODECHEF_PLAYLIST_ID=your-codechef-playlist-id
```
### 4. node index.js

## Install (Frontend)

### 1️. Clone the Repository  
### 2. npm install
### 3. npm run dev
















