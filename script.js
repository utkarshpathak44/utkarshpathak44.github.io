const addButton = document.getElementById('add');
    const closeButton = document.getElementById('close');
    const fixedDiv = document.getElementById('fixedDiv');

    addButton.addEventListener('click', () => {
      fixedDiv.classList.toggle('hidden'); // Toggle visibility
    });

    closeButton.addEventListener('click', () => {
      fixedDiv.classList.add('hidden'); // Hide the div
    });