
export function useGlobalFunctions() {
    const testComp = () => {
        alert("fuck you")
    }

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
    

    return {
        testComp,
        addDurations
    };
}