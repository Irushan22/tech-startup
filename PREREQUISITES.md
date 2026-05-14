# Before You Start — A Guide for Non-Technical Users

Welcome! This guide will walk you through everything you need to install on your computer **before** you can run this template. No coding experience needed. Just follow each step in order.

**Total time:** about 20–30 minutes.

---

## What You Will Install

| Tool | What it does | Free? |
| --- | --- | --- |
| **Node.js** | The engine that runs the website on your computer | Yes |
| **A code editor** (VS Code) | A program to open and edit the template files | Yes |
| **A terminal** | Where you type commands. Already on your computer. | Yes |

That's it. Three things. Let's go.

---

## Step 1 — Install Node.js

Node.js is what powers the template. Without it, the website cannot run.

1. Go to **https://nodejs.org**
2. Click the big green button that says **"LTS"** (LTS = Long-Term Support, the stable version).
3. Open the file that downloaded. It will be called something like `node-v20.x.x.pkg` (Mac) or `node-v20.x.x.msi` (Windows).
4. Click **Next / Continue / Install** through every screen. You can accept all the defaults.
5. When it's done, close the installer.

### Check it worked

You need to open a terminal to verify the install.

**On Mac:**
- Press `Cmd + Space` (the magnifying glass / Spotlight search).
- Type **Terminal** and press Enter.

**On Windows:**
- Press the Windows key.
- Type **PowerShell** and press Enter.

A black or white window opens. This is your **terminal** — you'll use it a few times.

Now type this exactly and press Enter:

```
node -v
```

You should see something like `v20.18.0` (any number starting with 18, 20, or 22 is fine).

Type this and press Enter:

```
npm -v
```

You should see a number like `10.x.x`.

✅ If both worked, Node.js is installed. Move to Step 2.
❌ If you got "command not found", close the terminal completely, open a new one, and try again. If it still fails, reinstall Node.js.

---

## Step 2 — Install a Code Editor (VS Code)

You need a program to view and edit the template files. We recommend **Visual Studio Code** (VS Code) — it's the most popular and it's free.

1. Go to **https://code.visualstudio.com**
2. Click the big blue **Download** button. It auto-detects your system.
3. Run the installer. Accept all the default options.
4. Open VS Code once it's installed, just to confirm it works. You can close it again.

✅ Done. Move to Step 3.

---

## Step 3 — Unzip the Template

When you bought this template, you received a `.zip` file. You need to unzip it somewhere easy to find.

**Recommended location:**
- **Mac:** Put the folder on your Desktop or in Documents.
- **Windows:** Put the folder on your Desktop or in Documents.

**Do NOT** put it in iCloud, OneDrive, Dropbox, or Google Drive's sync folder. These can interfere with how the tools work.

After unzipping, you should have a folder that contains files like:
- `package.json`
- `README.md`
- A folder called `app`
- A folder called `public`

If you see these, you're good.

---

## Step 4 — Open the Template in VS Code

1. Open VS Code.
2. Click **File → Open Folder…** (Mac: **File → Open…**).
3. Navigate to where you unzipped the template and select that folder.
4. Click **Open** (or **Select Folder**).

VS Code will open showing the project's files on the left.

If VS Code asks **"Do you trust the authors of the files in this folder?"** click **Yes, I trust the authors**.

---

## Step 5 — Open the Terminal Inside VS Code

VS Code has a built-in terminal so you don't have to switch windows.

1. From the top menu, click **Terminal → New Terminal**.

A panel opens at the bottom. This is the terminal. You'll type commands here.

---

## Step 6 — Install the Template's Dependencies

The template depends on other free libraries (like React, Next.js, Tailwind). You need to download them once.

In the VS Code terminal, type this and press Enter:

```
npm install
```

This will take **2–5 minutes**. You'll see lots of text scrolling. That's normal.

It's done when you see your terminal prompt return (something like `your-name@computer ~/Desktop/skylis-template %`).

⚠️ You may see lines that say `warning` or `deprecated`. **Ignore them.** Only red `error` messages need attention.

✅ Done. Now we run the website.

---

## Step 7 — Start the Website

In the same terminal, type:

```
npm run dev
```

After a few seconds you'll see something like:

```
   ▲ Next.js 16.x.x
   - Local:        http://localhost:3000
```

**Open your web browser** (Chrome, Firefox, Safari, Edge — any of them).

Type this into the address bar and press Enter:

```
http://localhost:3000
```

🎉 The template is now running on your computer. Edit any file in `app/config/siteData.tsx`, save, and the website updates automatically.

---

## How to Stop the Website

When you're done:

1. Click back into the VS Code terminal.
2. Press **`Ctrl + C`** (Windows) or **`Control + C`** (Mac).
3. The website stops.

To start it again later, just type `npm run dev` again.

---

## How to Customize the Template

Once everything is running, the only file you need to edit is:

```
app/config/siteData.tsx
```

Open it in VS Code (double-click it on the left sidebar). Every piece of text on the website is in this one file — company name, phone number, services, testimonials, everything.

Edit any text between the quotes (`"like this"`), save the file (`Ctrl/Cmd + S`), and the website updates instantly. Read the full **README.md** in the project for the complete guide.

---

## Common Problems & Fixes

### "node: command not found" or "npm: command not found"

Node.js didn't install correctly, or your terminal was open before you installed it.
- Close all terminal windows.
- Open a new terminal.
- Try again.
- If still broken, reinstall Node.js from https://nodejs.org

### Port 3000 is already in use

Another program is using port 3000. Either:
- Close other terminal windows that might be running `npm run dev`.
- Or use a different port: type `PORT=3001 npm run dev` (Mac) or `set PORT=3001 && npm run dev` (Windows).

### `npm install` failed with a long red error

- Make sure you have an internet connection.
- Make sure the template folder is NOT inside iCloud / OneDrive / Dropbox.
- Try deleting the `node_modules` folder (if it exists) and running `npm install` again.

### The website page is blank or shows an error

- Stop the server (`Ctrl/Cmd + C` in the terminal).
- In the terminal, type `npm run dev` again.
- Hard-refresh your browser (`Ctrl + Shift + R` on Windows, `Cmd + Shift + R` on Mac).

### I edited the file but nothing changes on the website

- Make sure you saved the file (`Ctrl/Cmd + S`).
- Make sure the dev server is still running (you should see it in the terminal).
- Hard-refresh the browser.

---

## What These Words Mean

A small glossary so the README makes more sense:

| Word | What it means |
| --- | --- |
| **Terminal** | A text-based window where you type commands instead of clicking. |
| **Command** | A single line of text you type into the terminal, then press Enter. |
| **npm** | The "App Store" for code libraries. Comes with Node.js. |
| **`npm install`** | Downloads all the code libraries the template needs. Run once after unzipping. |
| **`npm run dev`** | Starts the website on your computer for testing. |
| **`npm run build`** | Prepares the website for going live on the internet. |
| **localhost** | Your own computer. `http://localhost:3000` means "the website running on my own machine." |
| **Dependency** | A piece of code from someone else that the template uses. |
| **node_modules** | A folder full of dependencies. Created by `npm install`. You never edit it. |

---

## What's Next

Once you've got the template running and you've customized the content:

1. Read the main **README.md** for the customization guide.
2. When you're happy with how it looks, you'll need to **deploy** it — put it on the actual internet. The easiest free option is **Vercel** (vercel.com). They have a one-click deploy. Or hire a developer for 1–2 hours of work.
3. Buy a domain (GoDaddy, Namecheap, Cloudflare) and point it to your deployed site.

If you get stuck, a developer can typically help you finish setup in **under 2 hours** of paid work.

Good luck — you've got this!
