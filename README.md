# 📺 GlobalStream IPTV

An ultra-lightweight, single-file live web television and IPTV client. **GlobalStream IPTV** seamlessly bridges the massive `iptv-org` registry with high-priority, auto-updating custom `.m3u` event playlists, ensuring primary sports streams and regional networks are always live, accessible, and prioritized.

![UI](https://img.shields.io/badge/UI-Tailwind_CSS_3.0-06b6d4?style=for-the-badge&logo=tailwind-css)
![Engine](https://img.shields.io/badge/Engine-React_18_--_HLS.js-61dafb?style=for-the-badge&logo=react)
![Deployment](https://img.shields.io/badge/Deployment-Single_File_/_Serverless-emerald?style=for-the-badge&logo=github-pages)

<h2 align="center">
    <a href="https://khela.pro.bd/"><b>Live Demo</b></a><br>
  🔗 <a href="https://khela.pro.bd/"><b>https://khela.pro.bd/</b></a>

</h2>

---

## ⚡ Key Features

*   **Dynamic Event Curation:** Live sports matches or pop-up events from specialized feeds (**Tapmad BD** and **FIFA Plus**) are automatically scraped and injected directly at the top of your homepage dashboard the moment they go live. 
*   **Dual-Engine Stream Aggregator:** Concurrently parses the entire global `iptv-org` registry (over 30,000 international streams) alongside hyper-focused, automated GitHub `.m3u` repositories.
*   **Intelligent Server Failover & Prioritization:** If a channel exists in both the public directory and your custom lists, the application automatically stacks your custom sources as `Server 1 (Primary)` and relegates secondary sources to fallback positions.
*   **Sleek Modern UX:** Crafted with a premium dark-mode dashboard using Tailwind CSS, featuring smooth transitions, adaptive channel grids, custom vector fallback logos, and responsive performance across mobile and desktop.
*   **Advanced Media Controls:** Equipped with standard/theater view modes, native fullscreen options, real-time buffer management via HLS.js, and a one-click **"Copy Link for VLC"** clipboard tool.
*   **Persistent User Library:** Mark favorite channels to curate a personalized dashboard page that saves instantly to browser `LocalStorage`.

---

## 🛠️ Built With

| Technology | Purpose | Implementation Method |
| :--- | :--- | :--- |
| **React 18** | UI State, Memoized filtering, and DOM rendering | Production CDN |
| **Tailwind CSS** | Premium Dark-Theme Layout and Grid Systems | Standalone script injection |
| **HLS.js** | Low-latency adaptive m3u8 streaming & buffer handling | JavaScript delivery network |
| **Lucide Icons** | Dynamic category and navigation iconography | Scalable Vector Graphics vector pack |

---

## 🔌 Integrated Playlists

The application aggregates, normalizes, and prioritizes links from the following active distributions:

*   **Toffee Auto-Update Feeds** (`toffee_NS_Player.m3u` & `toffee_playlist.m3u`)
*   **Tapmad BD Sports** (`tapmad_bd.m3u`) — *Injected straight to your live curation deck*
*   **FIFA Plus Live Events** (`fifa_live.m3u`) — *Injected straight to your live curation deck*
*   **AX Sports & CricHD Event Arrays** (`playlist.m3u`)
*   **Ayna OTT & BongoBD Regional Networks**
*   **IPTV-Org International Registry** (Global countries, logos, and categories APIs)

---

## ⌨️ Desktop Keyboard Shortcuts

Enhance your channel-surfing experience with native playback hotkeys:

> 💡 *Make sure your cursor is not focused inside the search filter box when using hotkeys.*

*   <kbd>Spacebar</kbd> — Play / Pause current stream
*   <kbd>T</kbd> — Toggle Theater Mode (expands player canvas)
*   <kbd>F</kbd> — Enter Fullscreen video mode
*   <kbd>M</kbd> — Quick Mute / Unmute audio toggle

---

## 🚀 Deployment & Installation

Because the entire application is compiled into a **single production-ready file**, deployment takes less than 60 seconds.

### Quick Local Start
1. Clone this repository or copy the `index.html` file.
2. Double-click `index.html` to open it instantly in any modern web browser.

### Web Deployment (GitHub Pages, Vercel, or Netlify)
Simply drop the `index.html` into the root directory of your static hosting platform:
```bash
# Example git deployment sequence
git init
git add index.html
git commit -m "feat: deploy standalone globalstream app"
git branch -M main
git remote add origin [https://github.com/kazimmt/GlobalStream-IPTV.git](https://github.com/kazimmt/GlobalStream-IPTV.git)
git push -u origin main
```
Go to your repository Settings -> Pages -> Set source branch to main -> Save.

## ⚖️ Disclaimer
This application is a generic media player client designed to aggregate publicly accessible playlist links. It does not host, broadcast, or store any streaming media content locally. All streams are retrieved peer-to-peer directly from the endpoints provided within public external `.m3u` repositories. Please ensure viewing complies with your local intellectual property regulations. If any links in these playlists infringe on your rights as a copyright holder, they may be removed by opening an [issue](https://github.com/kazimmt/GlobalStream-IPTV/issues/new).