// Show/hide modal
document.querySelectorAll('.modal-bg, .modal-bg2').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-bg') || e.target.classList.contains('modal-bg2') || e.target.classList.contains('modal-close')) {
            this.style.display = 'none';
        }
    });
});

document.getElementById('checkout').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'flex';
});

document.getElementById('modal-btn').addEventListener('click', function() {
    document.querySelector('.modal-bg').style.display = 'none';
    document.querySelector('.modal-bg2').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('thank').style.display = 'block';
    }, 2000); // Simulate loading time
});

document.getElementById('close').addEventListener('click', function() {
    document.querySelector('.modal-bg2').style.display = 'none';
});

// Update totals (assuming products and their prices are dynamically added)
function updateTotals() {
    let subtotal = 0;
    // Add logic to calculate subtotal based on added products
    document.getElementById('bill_amt').innerText = subtotal.toFixed(2);
    let total = subtotal * 1.18; // Adding 18% GST
    document.getElementById('total_amt').innerText = total.toFixed(2);

    if (total > 1999) {
        document.getElementById('freeShip').style.display = 'block';
        document.getElementById('offer').style.display = 'none';
    } else {
        document.getElementById('freeShip').style.display = 'none';
        document.getElementById('offer').style.display = 'block';
    }
}

// Call updateTotals whenever necessary
updateTotals();
