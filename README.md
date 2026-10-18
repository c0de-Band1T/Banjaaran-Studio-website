# Banjaaran Studio — Visual Website Recreation

A responsive, standalone front-end concept inspired by the public Banjaaran Studio website and the screenshot supplied with the brief. It emphasizes cinematic presentation and three featured collections: Bomber, Mad Mob, and Bageecha.

## Run it
- Open `index.html` directly in a modern browser, or serve this folder with any static web server.
- No build step or package installation is required.

## Included
- Screenshot-derived Bomber hero image (`assets/bomber-hero.jpg`)
- Responsive header and navigation
- Animated cinematic hero and scroll reveal sections
- Collection cards linking to the corresponding public Banjaaran collection pages
- Responsive mobile layout and reduced-motion support

## Important scope note
This is a front-end visual recreation/prototype, not a source-code copy of Banjaaran's Shopify theme. It does not connect to private Shopify data, live inventory, checkout, customer accounts, or order systems. Collection links lead to the official public store. The screenshot-derived hero is included locally; Google Fonts are loaded from the web.


## Collection Films page
- Open `collection-films.html` for the custom 13-video page.
- The supplied MP4 files are stored locally in `assets/videos/`.
- One video is shown at a time in a 16:9 frame. Videos are muted, autoplay, loop, and play inline.
- The cream circular arrow buttons sit over the bottom-right of the video; clicking them switches to the previous/next collection and requests playback immediately.
- The offer area is a placeholder for the next design stage.
- `index.html` now links to the new page through “COLLECTION FILMS” in the navigation and footer.

Note: autoplay can be blocked by browser/device policies in some circumstances. The videos are muted and inline to maximize autoplay compatibility.

## Latest update (October 2026)
- Replaced the collection videos with the newly uploaded set of 13 MP4s.
- Video frame remains 16:9, centered, and capped at 1180px wide on desktop to avoid filling the entire screen.
- Removed visible arrow buttons; Left/Right keyboard arrows switch between collection videos.
- Autoplay, muted inline playback, looping, and the offer-section placeholder remain.

## Video whitespace refinement
- Added clear white space above and below the centered 16:9 video, as well as the existing left/right margins.
- Desktop vertical spacing uses responsive viewport-relative padding; mobile has its own compact spacing.
- All 13 videos, keyboard navigation, autoplay/muted looping, and the lower offer placeholder are preserved.


## Wider video section
- Increased the surrounding section width to 98% on desktop (up from 95%), with a slightly higher max width.
- Kept the video itself centered and undistorted, preserving its 16:9 ratio and the existing responsive fit behaviour.

## Wider and slightly taller video fit
- Reduced vertical white gaps slightly and increased the maximum video width.
- The responsive fit now uses more of the available browser height, making the 16:9 video slightly taller and therefore wider while preserving the full frame.
- No stretching, cropping, or added text; keyboard navigation and autoplay/looping remain.

## Tote bag product pages (October 2026)
- Click the coloured tote feature to open `coloured-tote.html`; click the DIY line-art tote to open `diy-tote.html`.
- Both pages use a responsive product-detail layout with image thumbnails, collection information, quantity controls, a demo add-to-cart interaction, and a link to the alternate edition.
- Product pricing is intentionally omitted. Checkout and live cart/inventory are prototype-only until connected to a commerce backend.
- False Face alternatives are also available at `coloured-false-face-tote.html` and `diy-false-face-tote.html`, linked from the product-page “Other Option” strip.


Collector box product page: open `collector-box.html`. It uses the front and open-box images, displays the confirmed price of ₹899/-, and has no “Other Option” section. The collector-box tile in the offer section links to this page.
