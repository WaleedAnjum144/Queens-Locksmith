

    let counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let target = parseInt(counter.getAttribute("data-target"));
        let speed = 200; // Adjust the speed as needed
        let intervalDuration = Math.floor(1000 / speed); // Calculate interval duration based on speed

        let counts = setInterval(() => updated(counter, target), intervalDuration);
        let currentCount = 0;

        function updated(counter, target) {
            currentCount++;
            if (currentCount > target) {
                clearInterval(counts);
            } else {
                counter.textContent = currentCount + '+';
            }
        }
    });


