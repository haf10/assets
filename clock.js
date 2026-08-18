function updateClock() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    // Calculate clock hand angles

    const hourAngle =
        (hours % 12) * 30 +
        minutes * 0.5;

    const minuteAngle =
        minutes * 6;

    const secondAngle =
        seconds * 6;


    // Get AR clock hands

    const hourHand =
        document.getElementById("hourHand");

    const minuteHand =
        document.getElementById("minuteHand");

    const secondHand =
        document.getElementById("secondHand");


    // Rotate the hands

    if (hourHand) {

        hourHand.setAttribute(
            "rotation",
            `0 0 ${-hourAngle}`
        );

    }


    if (minuteHand) {

        minuteHand.setAttribute(
            "rotation",
            `0 0 ${-minuteAngle}`
        );

    }


    if (secondHand) {

        secondHand.setAttribute(
            "rotation",
            `0 0 ${-secondAngle}`
        );

    }


    // Update digital clock

    const clock =
        document.getElementById("clock");

    if (clock) {

        clock.textContent =
            now.toLocaleTimeString();

    }

}


// Update immediately
updateClock();


// Update every second
setInterval(updateClock, 1000);



// Show information when AR target is detected

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const overlay =
            document.getElementById("overlay");

        const target =
            document.getElementById("ar-target");


        if (!target) {
            return;
        }


        // Marker found

        target.addEventListener(
            "targetFound",
            () => {

                console.log("AR target found");

                if (overlay) {
                    overlay.style.display = "block";
                }

            }
        );


        // Marker lost

        target.addEventListener(
            "targetLost",
            () => {

                console.log("AR target lost");

                if (overlay) {
                    overlay.style.display = "none";
                }

            }
        );

    }
);
