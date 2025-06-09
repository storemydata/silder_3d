document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.slider .item');
    let activeCard = null;
    let lastClickedItem = null;

    items.forEach(item => {
        item.addEventListener('click', () => {
            // If another card is already open, close it
            if (activeCard) {
                activeCard.remove();
                if (lastClickedItem) lastClickedItem.style.visibility = 'visible';
            }

            const img = item.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt || 'Image';
            const title = item.getAttribute('data-title') || imgAlt;
            const description = item.getAttribute('data-description') || 'No description available';

            // Hide the clicked item in the carousel
            item.style.visibility = 'hidden';

            // Create popup card
            const card = document.createElement('div');
            card.className = 'popup-card';
            card.innerHTML = `
                <img src="${imgSrc}" alt="${imgAlt}">
                <h3>${title}</h3>
                <div>${description}</div>
                <button class="close-btn">Close</button>
            `;
            document.body.appendChild(card);

            activeCard = card;
            lastClickedItem = item;

            // Close logic
            card.querySelector('.close-btn').addEventListener('click', () => {
                card.remove();
                item.style.visibility = 'visible';
                activeCard = null;
                lastClickedItem = null;
            });
        });
    });
});
