# 📺 Khela Stream

![Khela Stream Banner](https://img.shields.io/badge/Status-Live-success?style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Khela Stream** is a modern, responsive, and lightweight web application designed for live streaming sports and events. It utilizes `hls.js` to play `.m3u8` HTTP Live Streaming feeds directly in the browser and features a dynamic channel matrix that parses both hardcoded and external `.m3u` playlists.

---

## ✨ Features

- **Modern Dark UI:** A sleek, dark-themed dashboard inspired by premium streaming platforms, utilizing Google Material Symbols and the Inter font.
- **HLS Video Player:** Integrated `hls.js` engine for smooth, adaptive playback of `.m3u8` video streams.
- **Dynamic M3U Parsing:** Automatically fetches and parses external `.m3u` playlists (e.g., Tapmad BD) and appends them to the channel matrix.
- **CORS Proxy Integration:** Bypasses browser CORS restrictions using a custom Cloudflare Worker proxy, ensuring maximum compatibility with third-party streaming links.
- **Smart Fallback System:** Built-in error handling that displays a user-friendly fallback screen if a stream cluster fails to load.
- **Responsive Design:** Fully responsive grid layout that adapts flawlessly to desktop, tablet, and mobile screens.
- **Anti-Debugging:** Integrates `disable-devtool` to deter casual source-code inspection and stream ripping.



---

## 🚀 Live Demo

<h2 align="center">
  🔗 <a href="https://khela.pro.bd/"><b>https://khela.pro.bd/</b></a>

</h2>

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, Vanilla CSS, Vanilla JavaScript
- **Video Engine:** [hls.js (v1.4.12)](https://github.com/video-dev/hls.js/)
- **Icons & Typography:** Google Material Symbols Outlined, Google Fonts (Inter)
- **Security:** [disable-devtool](https://github.com/theajack/disable-devtool)

---

## ⚙️ How It Works

1. **Initialization:** On load, the app automatically bootstraps the default hardcoded channel.
2. **Dynamic Fetching:** The script fetches an external `.m3u` playlist from GitHub, parses the `#EXTINF` metadata (channel names and logo URLs), and injects new channel cards into the UI.
3. **Playback & Proxy:** When a channel is clicked, the URL is routed through a Cloudflare Worker proxy to prevent cross-origin blocks. `hls.js` then mounts the stream to the `<video>` element.

---

## 💻 Running Locally

Since this is a client-side application, running it is incredibly simple. No build tools are required!

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/kazimmt/GlobalStream-IPTV.git](https://github.com/kazimmt/GlobalStream-IPTV.git)
   ```
2. **Navigate to the directory:**
```bash
cd khela-stream
```
3. **Open** index.html:
Simply double-click the `index.html` file to open it in your browser, or use an extension like Live Server in VS Code.

## 🔧 Customization
**Adding/Changing the External M3U Playlist**
To change the source of the dynamic channels, locate the `fetch()` call near the bottom of the script in the HTML file:
```JavaScript
fetch('[https://raw.githubusercontent.com/srhady/tapmad-bd/refs/heads/main/tapmad_bd.m3u](https://raw.githubusercontent.com/srhady/tapmad-bd/refs/heads/main/tapmad_bd.m3u)')
```
Replace the URL with any valid direct link to an `.m3u` file.

## ⚠️ Disclaimer
This project is built for educational purposes and acts strictly as a front-end video player. **Khela Stream** does not host, upload, or control any of the video feeds or streams. All streams are pulled from third-party URLs and public `.m3u` playlists provided by the community.