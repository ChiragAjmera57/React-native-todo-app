export function formatDate(inputDate) {
    // Convert the input string to a Date object
    const inputDateTime = new Date(inputDate);

    // Get the current date and time
    const currentDateTime = new Date();

    // Calculate the time difference in days
    const timeDifferenceInDays = Math.floor((inputDateTime - currentDateTime) / (24 * 60 * 60 * 1000));

    if (timeDifferenceInDays === 0) {
        // The input date is today
        return `Today | ${formatTime(inputDateTime)}`;
    } else if (timeDifferenceInDays === 1) {
        // The input date is tomorrow
        return `Tomorrow | ${formatTime(inputDateTime)}`;
    } else if (timeDifferenceInDays === -1) {
        // The input date is yesterday
        return `Yesterday | ${formatTime(inputDateTime)}`;
    } else {
        // The input date is none of the above, format it as "10 March, 23 | 10:30pm"
        return `${formatCustomDate(inputDateTime)} | ${formatTime(inputDateTime)}`;
    }
}

// Helper function to format time as "10:30pm"
function formatTime(date) {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date).toUpperCase();
}

// Helper function to format custom date as "10 March, 23"
function formatCustomDate(date) {
    const options = { day: 'numeric', month: 'long', year: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}


