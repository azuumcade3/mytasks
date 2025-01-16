import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Title is required'],
    },
    date: {
        type: String,
        required:[true, 'Date is required']
    },
    finished: {
        type: Boolean,
        default: false,
    }, 
});

const Task = mongoose.model('Task', taskSchema);

export default Task;