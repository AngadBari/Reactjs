# Reactjs


---

## 🛠️ Steps to Installing Tailwind CSS

```bash
# 1. Create a new React project using Vite
npm create vite@latest "Youer_Projet_Name"

# 2. Move into the project folder
cd "Youer_Projet_Name"

# 3. Install dependencies(Node)
npm install 

# 4. Start the development server
npm run dev

```
---


## 🛠️ Steps to Installing Tailwind CSS

### 1.Install Tailwind CSS
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```
```bash
npx tailwindcss init -p
```
### 2.Configure the Vite plugin(tailwind.config.js)
```bash
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

### 3.Import Tailwind CSS (index.css)
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 4.Start your build process
```bash
npm run dev
```



 
