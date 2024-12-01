function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.dataset.darkness = 0;
        
        square.addEventListener('mouseover', () => {
            const currentDarkness = parseInt(square.dataset.darkness);
            
            if (currentDarkness < 10) {
                const baseColor = getRandomColor();
                const darkenAmount = (currentDarkness + 1) * 10;
                
                square.style.backgroundColor = baseColor;
                square.style.filter = `brightness(${100 - darkenAmount}%)`;
                
                square.dataset.darkness = currentDarkness + 1;
            }
        });
        
        container.appendChild(square);
    }
}

function changeGridSize() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    newSize = parseInt(newSize);
    
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
}

// Initial grid setup
document.getElementById('sizeBtn').addEventListener('click', changeGridSize);
createGrid(16); 