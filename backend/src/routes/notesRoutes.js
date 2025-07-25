import express from "express" 
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from "../controllers/notesController.js";
// import { getAllNotes, create } from "../controllers/notes/notesControllers.js";
// import { createNote } from "../controllers/notes/notesControllers.js";

const router = express.Router(); 

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote); 

router.put("/:id", updateNote); 

router.delete("/:id", deleteNote);  


export default router 

// app.get("/api/notes", (req,res) => {
//     res.send("you got 22 notes");
// });

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({message:"post created successfully!"})

// })

// app.put("/api/notes/:id", (req,res) => {
//     res.status(200).json({mesage:"Post updated successfully!"})
// })

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(200).json({mesage:"Post deleted successfully!"}) 
// }); 

// app.listen(5001, () => {
//     console.log("Server started on PORT: 5001");
// })