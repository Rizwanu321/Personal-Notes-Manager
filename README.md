# Personal Notes Manager (MERN Stack)

A simple and responsive Personal Notes Manager application built using the MERN stack. This app allows users to create, read, update, and delete notes. It includes features like filtering, searching, marking notes as completed, and user-friendly notifications and loaders.

---

## Features
- **CRUD Operations:** Create, Read, Update, Delete notes.
- **Search and Filter:** Search notes by title and filter by category.
- **Sorting:** Notes are sorted by the latest creation date.
- **Validation:** Notes must include a title and description. Category must be one of: `Work`, `Personal`, or `Others`.
- **Toggle Completion:** Mark notes as Completed/Not Completed.
- **User Feedback:** 
  - Notifications for actions like success, error, and invalid inputs using `react-toastify`.
  - Loading spinners during data fetching and processing using `react-loader-spinner`.
- **Responsive Icons:** Elegant icons using `lucide-react`.
- **Responsive Design:** Adaptable UI for mobile and desktop users.

---

## Technologies Used
- **Frontend:** React, Axios, React Toastify, React Loader Spinner, Lucide React, CSS (or TailwindCSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)

---

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB (ensure MongoDB is running locally or provide a connection URI)

### 1. **Clone the repository:** Clone this repository to your local machine using Git:
```bash
https://github.com/Rizwanu321/Personal-Notes-Manager.git
cd Personal-Notes-Manager
```

### 2. **Navigate to the backend folder:**
```bash
cd backend
```

### 3. **Install dependencies:** Install the required dependencies using npm or yarn:
```bash
npm install
```

### 4. **Create a .env file in the backend folder and add the following:**
```
PORT = 5000
MONGO_URI = mongo url
```


### 5. **Start the backend server:**

```bash
npm start
```

### Frontend Setup
### 1. **Navigate to the frontend folder:**
```bash
cd frontend
```

### 3. **Install dependencies:** Install the required dependencies using npm or yarn:
```bash
npm install
```

### 3. **Run the development server:** Start the development server using npm:
```bash
npm start
```

The application will open in your default browser at http://localhost:3000.


## Website Link

Visit the live website: [Personal Notes Manage](https://personal-notes-manager-app.onrender.com/)
