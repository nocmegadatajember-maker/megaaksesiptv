<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://vjs.zencdn.net/7.11.4/video-js.css" rel="stylesheet">
    <title>HLS/M3U8 Video Player</title>
</head>
<body>
    <video
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        width="640"
        height="264"
        data-setup="{}"
    >
        <source src="YOUR_M3U8_URL_HERE.m3u8" type="application/x-mpegURL">
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a web browser that
            <a href="https://instructure.com">supports HTML5 video</a>
        </p>
    </video>

    <script src="https://vjs.zencdn.net/7.11.4/video.min.js"></script>
</body>
</html>