document.getElementById('download-btn').addEventListener('click', function() {
    const nakkuContainer = document.getElementById('nakku-container');
    nakkuContainer.style.display = 'block';

    // Optional: Add an animation effect when showing the text
    nakkuContainer.classList.add('fade-in');
});

// CSS for fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
