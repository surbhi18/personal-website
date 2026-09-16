document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const photos = Array.from(gallery.querySelectorAll('[data-gallery-photo]'));
    const thumbnails = Array.from(gallery.querySelectorAll('[data-gallery-thumbnail]'));
    const navigation = gallery.querySelector('.gallery-navigation');
    const count = gallery.querySelector('[data-gallery-count]');
    let currentPhoto = 0;

    if (!photos.length) return;

    const showPhoto = (index) => {
        currentPhoto = (index + photos.length) % photos.length;

        photos.forEach((photo, photoIndex) => {
            photo.hidden = photoIndex !== currentPhoto;
        });

        thumbnails.forEach((thumbnail, photoIndex) => {
            thumbnail.setAttribute('aria-pressed', String(photoIndex === currentPhoto));
        });

        count.textContent = `${currentPhoto + 1} of ${photos.length}`;
    };

    gallery.querySelector('[data-gallery-prev]').addEventListener('click', () => showPhoto(currentPhoto - 1));
    gallery.querySelector('[data-gallery-next]').addEventListener('click', () => showPhoto(currentPhoto + 1));

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => showPhoto(index));
    });

    gallery.addEventListener('keydown', (event) => {
        if (!navigation.contains(event.target) || event.altKey || event.ctrlKey || event.metaKey) return;

        const destinations = {
            ArrowLeft: currentPhoto - 1,
            ArrowRight: currentPhoto + 1,
            Home: 0,
            End: photos.length - 1,
        };

        if (!(event.key in destinations)) return;
        event.preventDefault();
        showPhoto(destinations[event.key]);

        if (thumbnails.includes(event.target)) thumbnails[currentPhoto].focus();
    });

    showPhoto(0);
    gallery.dataset.enhanced = 'true';
    navigation.hidden = false;
});
