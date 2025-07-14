
export function useGlobalFunctions() {

    function addDurations(duration1, duration2) {
        // Function to convert MM:SS to total seconds
        function getTotalSeconds(duration) {
            const parts = duration.split(':');
            const minutes = parseInt(parts[0], 10);
            const seconds = parseInt(parts[1], 10);
            return (minutes * 60) + seconds;
        }

        // Function to convert total seconds back to MM:SS format
        function formatDuration(totalSeconds) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // padding seconds if needed
        }

        // Convert durations to seconds
        const totalSeconds1 = getTotalSeconds(duration1);
        const totalSeconds2 = getTotalSeconds(duration2);

        // Add the total seconds
        const totalSeconds = totalSeconds1 + totalSeconds2;

        // Convert back to MM:SS format
        return formatDuration(totalSeconds);
    }

    // const createFinishTime = () => {
    //     let currentDateTime = new Date()
    //     const utcDateTime = currentDateTime.toUTCString();
    //     console.log("this_time", utcDateTime)

    // }

    const getUTCnewFormat = (inDateTime) => {
        let currentDateTime
        if (inDateTime) {
            currentDateTime = inDateTime
        } else {
            currentDateTime = new Date();
        }
        const utcYear = currentDateTime.getUTCFullYear();
        const utcMonth = String(currentDateTime.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const utcDate = String(currentDateTime.getUTCDate()).padStart(2, '0');
        const utcHours = String(currentDateTime.getUTCHours()).padStart(2, '0');
        const utcMinutes = String(currentDateTime.getUTCMinutes()).padStart(2, '0');
        const utcSeconds = String(currentDateTime.getUTCSeconds()).padStart(2, '0');

        const formattedUTCDateTime = `${utcYear}-${utcMonth}-${utcDate} ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

        return formattedUTCDateTime
    }


    function createDateFromTime(time) {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        const currentDate = new Date();
        currentDate.setUTCHours(hours, minutes, seconds, 0);

        return currentDate;
    }

    function getFormattedUTCDateTime(date) {
        const utcYear = date.getUTCFullYear();
        const utcMonth = String(date.getUTCMonth() + 1).padStart(2, '0');
        const utcDate = String(date.getUTCDate()).padStart(2, '0');
        const utcHours = String(date.getUTCHours()).padStart(2, '0');
        const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
        const utcSeconds = String(date.getUTCSeconds()).padStart(2, '0');
        const formattedUTCDateTime = `${utcYear}-${utcMonth}-${utcDate} ${utcHours}:${utcMinutes}:${utcSeconds} UTC`

        return formattedUTCDateTime;
    }

    function createFinishTime(inputTime) {
        const [hours, minutes, seconds] = inputTime.split(':').map(Number);

        const currentDateTime = new Date();
        console.log('now time=>', getFormattedUTCDateTime(currentDateTime));

        currentDateTime.setUTCHours(currentDateTime.getUTCHours() + hours);
        currentDateTime.setUTCMinutes(currentDateTime.getUTCMinutes() + minutes);
        currentDateTime.setUTCSeconds(currentDateTime.getUTCSeconds() + seconds);

        return getFormattedUTCDateTime(currentDateTime);
    }

    let intervalId = null;
    const setFutureTime = (inputTime, myCallBack) => {
      
        let timeParts = inputTime.split(':');
     
        if (timeParts.length !== 3) {
            console.log('Please enter a valid time in HH:MM:SS format.');
            
            return;
        }

        const [hours, minutes, seconds] = timeParts.map(Number);
        const now = new Date();
        const futureDate = new Date(now.getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));

        const futureTimeString = futureDate.toUTCString();
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId = setInterval(() => {
            const currentTime = new Date();
           
            if (currentTime.getTime() >= futureDate.getTime()) {
                clearInterval(intervalId);
                myCallBack()
            }
        }, 1000);

        return futureTimeString
    };
    return {
        setFutureTime,
        addDurations,
        createFinishTime,
        getUTCnewFormat,
        createDateFromTime
    };
}