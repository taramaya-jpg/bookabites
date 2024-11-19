document.addEventListener("DOMContentLoaded", () => {
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    const totalAmount = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const selectedItemsContainer = document.getElementById('selected-items');
    const totalPriceElement = document.getElementById('total-price');

    selectedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <p>${item.name} - Nu. ${item.price} x ${item.quantity} = Nu. ${item.price * item.quantity}</p>
        `;
        selectedItemsContainer.appendChild(itemElement);
    });

    totalPriceElement.innerText = `Nu. ${totalAmount}`;
});
