document.addEventListener("DOMContentLoaded", function() {
    const checkInButton = document.getElementById("checkInButton");
    const message = document.getElementById("message");
    const locationDisplay = document.getElementById("location");

    const homeLocation = {
        latitude: 17.0492, // Replace with your home latitude
        longitude: 99.0675, // Replace with your home longitude
        radius: 100 // Radius in meters within which check-in is allowed
    };

    function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
        const R = 6371000; // Radius of the Earth in meters
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in meters
        return distance;
    }

    checkInButton.addEventListener("click", function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;
                const distance = getDistanceFromLatLonInMeters(
                    homeLocation.latitude,
                    homeLocation.longitude,
                    userLatitude,
                    userLongitude
                );

                locationDisplay.textContent = `Your Location: Latitude ${userLatitude.toFixed(4)}, Longitude ${userLongitude.toFixed(4)}`;
                locationDisplay.classList.remove("hidden");

                if (distance <= homeLocation.radius) {
                    message.textContent = "Check-in successful!";
                    message.classList.remove("hidden", "error");
                    message.classList.add("success");
                } else {
                    message.textContent = "You are not within the check-in area.";
                    message.classList.remove("hidden", "success");
                    message.classList.add("error");
                }
            }, function(error) {
                message.textContent = "Geolocation is not supported or permission denied.";
                message.classList.remove("hidden", "success");
                message.classList.add("error");
                locationDisplay.classList.add("hidden");
            });
        } else {
            message.textContent = "Geolocation is not supported by this browser.";
            message.classList.remove("hidden", "success");
            message.classList.add("error");
            locationDisplay.classList.add("hidden");
        }
    });
});
