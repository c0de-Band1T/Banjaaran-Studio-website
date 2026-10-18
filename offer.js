(() => {
  const itemCards = [...document.querySelectorAll('[data-offer-item="box"]')];
  const sequences = {
    coloredVanrajya: [
      'assets/offer/colored-vanrajya-front.png',
      'assets/offer/vanrajya-back.png',
      'assets/offer/colored-vanrajya-front-detail.png',
      'assets/offer/vanrajya-back-detail.png'
    ],
    coloredFalseFace: [
      'assets/offer/colored-false-face-front.png',
      'assets/offer/false-face-back.png',
      'assets/offer/colored-false-face-front-detail.png',
      'assets/offer/false-face-back-detail.png'
    ],
    diyVanrajya: [
      'assets/offer/diy-vanrajya-front.png',
      'assets/offer/vanrajya-back.png',
      'assets/offer/diy-vanrajya-front-detail.png',
      'assets/offer/vanrajya-back-detail.png'
    ],
    diyFalseFace: [
      'assets/offer/diy-false-face-front.png',
      'assets/offer/false-face-back.png',
      'assets/offer/diy-false-face-front-detail.png',
      'assets/offer/false-face-back-detail.png'
    ]
  };
  const viewerIndex = Object.fromEntries(Object.keys(sequences).map(key => [key, 0]));

  function closeOtherPanels(except) {
    itemCards.forEach(card => {
      if (card === except) return;
      const trigger = card.querySelector('.offer-main');
      const panel = card.querySelector('.offer-panel');
      trigger.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    });
  }

  itemCards.forEach(card => {
    const trigger = card.querySelector('.offer-main');
    const panel = card.querySelector('.offer-panel');
    trigger.addEventListener('click', () => {
      const opening = panel.hidden;
      closeOtherPanels(card);
      panel.hidden = !opening;
      trigger.setAttribute('aria-expanded', String(opening));
      if (!opening) {
        panel.querySelectorAll('.tote-option').forEach(button => button.setAttribute('aria-pressed', 'false'));
        panel.querySelectorAll('.tote-viewer').forEach(viewer => viewer.hidden = true);
      }
    });
  });

  document.querySelectorAll('.tote-option').forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.closest('.offer-panel');
      const key = button.dataset.option;
      panel.querySelectorAll('.tote-option').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
      panel.querySelectorAll('.tote-viewer').forEach(viewer => viewer.hidden = viewer.dataset.viewer !== key);
      viewerIndex[key] = 0;
      updateToteViewer(key);
    });
  });

  function updateToteViewer(key) {
    const viewer = document.querySelector(`[data-viewer="${key}"]`);
    if (!viewer) return;
    const index = viewerIndex[key];
    viewer.querySelector('.viewer-image').src = sequences[key][index];
    viewer.querySelector('.viewer-count').textContent = `${index + 1} / ${sequences[key].length}`;
  }

  document.querySelectorAll('.tote-viewer .viewer-arrow').forEach(button => {
    button.addEventListener('click', () => {
      const viewer = button.closest('.tote-viewer');
      const key = viewer.dataset.viewer;
      viewerIndex[key] = (viewerIndex[key] + Number(button.dataset.step) + sequences[key].length) % sequences[key].length;
      updateToteViewer(key);
    });
  });


})();
