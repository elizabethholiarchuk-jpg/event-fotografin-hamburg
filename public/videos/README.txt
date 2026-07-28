====================================================================
IMPORTANT: FOR LARGE VIDEO FILES (200MB - 500MB+)
====================================================================

Because your video files are 200–500 MB, DO NOT put local video files directly into this folder! 

WHY?
1. GitHub restricts file uploads over 50–100 MB and will reject your git push.
2. Direct Vercel hosting will exceed bandwidth limits quickly when serving large video files.
3. Raw video files load slowly on client Wi-Fi/mobile without adaptive streaming.

BEST PRACTICE: YOUTUBE "UNLISTED" (NICHT GELISTET)
1. Upload your videos to YouTube.
2. In the visibility setting, select "Unlisted" ("Nicht gelistet"). This ensures nobody can find them in public search or on your channel, maintaining client privacy!
3. Open your code editor and go to:
   - site/src/app/video-support/page.tsx
   - site/src/app/de/video-support/page.tsx
4. Replace the "embedUrl" values with your YouTube embed links, for example:
   "https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID"
   
(Using youtube-nocookie.com also ensures full German GDPR / DSGVO privacy compliance!)
