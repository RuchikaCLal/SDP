# 🐾 Putu API – Node.js + Express Project

This is a simple backend project built with **Node.js** and **Express.js**.  
When you run the server and visit the root URL, it returns a cute doggo's data in JSON format. 🐶

---

## 📂 Project Structure

```
putu-api/
├── index.js        # Main server file
├── package.json    # Project metadata and dependencies
├── .gitignore      # Files to ignore in version control
```

---

## 🚀 How to Run

1. Clone this repository or download the files
2. Open terminal inside the project folder
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Open your browser and go to:
   ```
   http://localhost:5000/
   ```

---

## 📡 API Endpoint

### `GET /`

Returns a JSON object:

```json
{
  "name": "Putu",
  "Age": 10,
  "Breed": "GoldenRetriever"
}
```

---

## 💡 Features

- Built with Express
- Sends JSON response
- Basic project structure to expand into a fullstack app

---

## 📌 Future Goals

- Add more routes (e.g., `/cats`, `/pokis`)
- Connect to a frontend
- Add MongoDB or other database support

---

## 🧑‍💻 Made with love by Ruchie  
(with the help of karthik <3 )
