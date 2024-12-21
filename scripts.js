document.addEventListener('DOMContentLoaded', function() {
    const text = "Frohe Weihnachten und ein glückliches neues Jahr wünschen euch";
    const names = "Tania & Niels";
    const greetingElement = document.getElementById('greeting');
    const namesElement = document.getElementById('names');
    const treeElement = document.getElementById('christmas-tree');
    const starElement = document.getElementById('falling-star');
    const audioElement = document.getElementById('jingle-bells');
    const playButton = document.getElementById('play-button');
    let index = 0;

    // Function to toggle audio
    function toggleAudio() {
        if (audioElement.paused) {
            audioElement.play();
            playButton.textContent = "Stop Music";
        } else {
            audioElement.pause();
            playButton.textContent = "Play Music";
        }
    }
    window.toggleAudio = toggleAudio;  // Make the function available globally

    // Function to create a snowflake
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = Math.random() < 0.5 ? '❅' : '❆';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
        snowflake.style.fontSize = (Math.random() * 1.5 + 1) + 'em';
        document.querySelector('.snowflakes').appendChild(snowflake);
        // Remove snowflake after it has fallen
        setTimeout(() => snowflake.remove(), 15000); // Adjust time to match animation duration
    }

    // Continuously create snowflakes
    setInterval(createSnowflake, 500); // Adjust interval to control the rate of new snowflakes

    // Function to type letters one by one
    function typeLetter() {
        if (index < text.length) {
            greetingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 150); // Adjust the speed here
        } else if (index === text.length) {
            namesElement.textContent = names;
            namesElement.style.opacity = '1';
            index++;
            setTimeout(() => {
                // Show tree after text is fully displayed
                treeElement.style.opacity = '1';
            }, 1000); // Delay to ensure names are complete before showing tree
        }
    }

    // Start the text animation after the star appears
    starElement.addEventListener('animationend', () => {
        greetingElement.style.opacity = '1'; // Make greeting element visible
        setTimeout(typeLetter, 500); // Start text animation after 0.5s
    });
});
