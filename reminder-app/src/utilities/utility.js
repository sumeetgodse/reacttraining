export const getReminders = () => {
    const reminders = localStorage.getItem("reminders");
    if (reminders && reminders.length) {
        const parsedReminders = JSON.parse(reminders);
        for( let i = 0; i < parsedReminders.length; i ++ ) {
            parsedReminders[i].date = new window.Date(parsedReminders[i].date);
            parsedReminders[i].time = new window.Date(parsedReminders[i].time);
        }
        return parsedReminders;
    } else {
        return [];
    }
}


export const getPastReminders = () => {
    const pastReminders = localStorage.getItem("pastReminders");
    if (pastReminders && pastReminders.length) {
        const parsedPastReminders = JSON.parse(pastReminders);
        for( let i = 0; i < parsedPastReminders.length; i ++ ) {
            parsedPastReminders[i].date = new window.Date(parsedPastReminders[i].date);
            parsedPastReminders[i].time = new window.Date(parsedPastReminders[i].time);
        }
        return parsedPastReminders;
    } else {
        return [];
    }
}
