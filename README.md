# Etch-a-Sketch
going to build a browser version of something between a sketchpad and an Etch-A-Sketch.
A browser-based drawing application that combines features of a sketchpad and an Etch-A-Sketch. This project was built with vanilla JavaScript, HTML, and CSS as part of The Odin Project curriculum.

## Live Demo

[View Live Demo](https://miketking.github.io/Etch-a-Sketch/)

## Features

- **Adjustable Grid Size**: Create a new grid from 1x1 up to 100x100 squares
- **Dynamic Color Effects**:
  - Random RGB colors on each square hover
  - Progressive darkening effect (10% darker with each pass)
  - Squares become completely dark after 10 passes
- **Responsive Design**: Maintains a consistent 960px x 960px drawing area
- **Flex-based Grid System**: Utilizes CSS Flexbox for precise grid layout

## How to Use

1. Open the application in your web browser
2. Hover your mouse over the grid to start drawing
3. Click the "Change Grid Size" button to adjust the grid dimensions
4. Each hover interaction will:
   - Generate a new random color
   - Darken the square by 10%
   - After 10 passes, the square will be completely dark

## Code Structure

### HTML (`index.html`)
- Simple structure with a control button and container div
- Links to external CSS and JavaScript files

### CSS (`styles.css`)
- Flexbox-based grid layout
- Responsive square sizing
- Hover effect styles

### JavaScript (`script.js`)
- `createGrid(size)`: Generates the grid with specified dimensions
- `getRandomColor()`: Returns random RGB color values
- `changeGridSize()`: Handles user input for grid dimensions
- Event listeners for hover effects and darkness tracking

## Technical Implementation
javascript
// Example of color generation
function getRandomColor() {
const r = Math.floor(Math.random() 256);
const g = Math.floor(Math.random() 256);
const b = Math.floor(Math.random() 256);
return rgb(${r}, ${g}, ${b});
}

## Future Enhancements

- [ ] Add color picker option
- [ ] Implement save/load functionality
- [ ] Add eraser tool
- [ ] Include different drawing modes
- [ ] Add touch support for mobile devices

## Local Development
git clone https://github.com/MikeTKing/etch-a-sketch.git
 Open `index.html` in your browser

3. To modify:
   - Edit `styles.css` for styling changes
   - Edit `script.js` for functionality changes

## Contributing

Feel free to fork this project and submit pull requests. You can also open issues for bugs or feature suggestions.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Project inspiration from [The Odin Project](https://www.theodinproject.com/)
- Built with vanilla JavaScript, HTML, and CSS 
