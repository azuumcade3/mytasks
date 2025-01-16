import express from 'express';
import mongoose from 'mongoose';
import Task from './models/tesksModel.js';

const app = express();
app.use(express.json());
const PORT = 5555;


app.get('/', async(req, res) => {
    const tasks =await Task.find()
    res.status(200).json(tasks);
})



// try {
    app.post('/', async(req, res) => {
        const{title, date, finished}=req.body;
        const newTask =Task({title, date,finished});
    
        const task = await newTask.save(); 
        res.status(201).json(task);
    })
// } catch (e) {
//     console.log(e)
// }


app.put('/:id', async(req, res) => {
    const{title, date, finished}=req.body;
   
    const task = await Task.findById(req.params.id)

    if (task){
        task.title = title;
        task.date = date;
        task.finished = finished;

        const updatedTask = await task.save();
        res.status(200).json(updatedTask);
    }
})


app.delete ('/:id', async(req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)  
    res.status(200).json({massage: "Task deleted successfully!"})
   
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connect("mongodb+srv://azuumcade:azuumcade@cluster0.hnipv.mongodb.net/mytasks?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to database');
})
