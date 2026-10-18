(() => {
  const video = document.getElementById("collectionVideo");
  const status = document.getElementById("videoStatus");

  // Numeric suffixes define the intended 01–13 collection sequence.
  const collections = [
    { name: "BOMBER", file: "bomber_vid01.mp4", tagline: "THE EVERYDAY ICON" },
    { name: "BAGEECHA", file: "bageecha_vid02.mp4", tagline: "A GARDEN IN EVERY STEP" },
    { name: "VANRAJYA", file: "vanrajya_vid03.mp4", tagline: "WILD AT HEART" },
    { name: "ARISTOCRACY", file: "aristrocracy_vid04.mp4", tagline: "A STATEMENT OF CHARACTER" },
    { name: "SAVAGE", file: "savage_vid05.mp4", tagline: "UNAPOLOGETIC BY NATURE" },
    { name: "MAD MOB", file: "madbob_vid06.mp4", tagline: "RULES ARE OPTIONAL" },
    { name: "TEXO", file: "texo_vid07.mp4", tagline: "TEXTURE WITH ATTITUDE" },
    { name: "IKAT", file: "ikat_vid08.mp4", tagline: "PATTERNS WITH A STORY" },
    { name: "PATOLA", file: "patola_vid09.mp4", tagline: "WOVEN IN CULTURE" },
    { name: "CORE", file: "core_vid10.mp4", tagline: "THE ESSENTIAL EXPRESSION" },
    { name: "FALSE FACE", file: "falseface_vid11.mp4", tagline: "LOOK BEYOND THE SURFACE" },
    { name: "CRANIUM", file: "cranium_vid12.mp4", tagline: "THINK OUTSIDE THE LINES" },
    { name: "BEAST PUNK", file: "beastpunk_vid13.mp4", tagline: "WEAR YOUR WILD SIDE" }
  ];

  let currentIndex = 0;
  let playRequestId = 0;

  function showCollection(index) {
    currentIndex = (index + collections.length) % collections.length;
    const collection = collections[currentIndex];
    const requestId = ++playRequestId;

    status.textContent = "Collection video changed.";

    // Replace the source, reset the playhead and request autoplay immediately.
    video.pause();
    video.src = `assets/videos/${collection.file}`;
    video.load();
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const attemptPlayback = () => {
      if (requestId !== playRequestId) return;
      const result = video.play();
      if (result && typeof result.catch === "function") {
        result.catch(() => {
          // Muted inline autoplay is supported by current browsers. If a browser
          // still blocks playback, retry when it becomes ready and on the next user action.
        });
      }
    };
    video.addEventListener("canplay", attemptPlayback, { once: true });
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) attemptPlayback();
  }

  // Keyboard navigation is useful without adding visible playback controls.
  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.matches("input, textarea, select")) return;
    if (event.key === "ArrowLeft") showCollection(currentIndex - 1);
    if (event.key === "ArrowRight") showCollection(currentIndex + 1);
  });

  // Initialize the first collection on page load.
  showCollection(0);
})();
