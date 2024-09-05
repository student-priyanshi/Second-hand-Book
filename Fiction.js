// Select all book images and attach click event listeners
document.querySelectorAll('.book-image').forEach((img) => {
    img.addEventListener('click', (event) => {
        const bookItem = event.target.closest('.book-item');
        
        // Get book details from data attributes
        const title = bookItem.getAttribute('data-title');
        const author = bookItem.getAttribute('data-author');
        const price = bookItem.getAttribute('data-price');
        const oldPrice = bookItem.getAttribute('data-old-price');
        const discount = bookItem.getAttribute('data-discount');
        const rating = bookItem.getAttribute('data-rating');
        const imgSrc = event.target.src;

        // Update modal content with book details
        document.getElementById('modal-book-title').textContent = title;
        document.getElementById('modal-book-author').textContent = author;
        document.getElementById('modal-book-price').textContent = price;
        document.getElementById('modal-old-price').textContent = oldPrice;
        document.getElementById('modal-discount').textContent = discount;
        document.getElementById('modal-book-rating').textContent = rating;
        document.getElementById('modal-book-image').src = imgSrc;

        // Show the modal
        $('#bookDetailsModal').modal('show');
    });
});
