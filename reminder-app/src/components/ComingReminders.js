import { useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "../styles/ureminder.css";
import "../styles/buttons.css";
import { addPastReminder, changeEditIndex, deleteReminder, store } from "../store/store";
import { IconButton } from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';

const ComingReminders = () => {
    const reminders = useSelector((state) => state.remindersReducer);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleDelete = (reminder) => {
        store.dispatch(addPastReminder(reminder));
        store.dispatch(deleteReminder(reminder.text));
    } 

    const handleEdit = (index) => {
        store.dispatch(changeEditIndex(index));
    }

    return(
        <div>
        <div className = "u-reminder-header">
            <AlarmIcon style = {{padding: "20px", color: "#263238", fontSize: "32px"}} />
            <div className = "u-reminder-text">Upcoming Reminders</div>
        </div>
        <div className="row">
        {
            reminders.map((reminder,index) => {
                return (
                    <div key = {`${reminder.text}_${reminder.date}`} className="column">
                        <div className="card">
                            <table>
                                <tbody>
                                <tr style = {{fontSize: "16px"}}>
                                    <td>
                                        {reminder.text}
                                    </td>
                                </tr>
                                <tr style = {{fontSize: "12px"}}>
                                    <td>
                                        {reminder.date.getDate()} {months[reminder.date.getMonth()]} {reminder.date.getFullYear()}
                                    </td>
                                </tr>
                                <tr style = {{fontSize: "12px"}}>
                                    <td>
                                        {days[reminder.date.getDay()]} {reminder.time.getHours()}{`:`}{reminder.time.getMinutes() < 10 ? `0${reminder.time.getMinutes()}` : reminder.time.getMinutes()}
                                    </td>
                                </tr>
                                <tr style = {{display: "flex", flexDirection: "row-reverse"}}>
                                    <td>
                                    <IconButton onClick = {() => handleDelete(reminder)}>
                                        <DeleteIcon className = "delete" />
                                    </IconButton>
                                    </td>
                                    <td>
                                    <IconButton>
                                        <EditIcon className = "edit" onClick = {() => handleEdit(index)} />
                                    </IconButton>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    );
}

export default ComingReminders;
