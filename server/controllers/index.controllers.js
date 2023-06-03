import { pool } from "../db.js"

export const getTodoLists = async (req, res) => {
    try {
        const [response] = await pool.query(
            "SELECT * FROM todolist ORDER BY id DESC"
        )
        console.log(response)
        res.json(response)
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const getTodoList = async (req, res) => {
    try {
        const [response] = await pool.query(
            "SELECT * FROM todolist WHERE id = ?",
            [req.params.id]
        )
        console.log(response[0])
        if (response.length === 0)
            return res.status(404).json({ message: "Task not found" })
        res.json(response[0])
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const createTodoList = async (req, res) => {
    try {
        const [response] = await pool.query(
            "INSERT INTO todolist (title, description) VALUES (?, ?)",
            [req.body.title, req.body.description]
        )
        console.log(response)
        res.json({
            id: response.insertId,
            title: req.body.title,
            description: req.body.description,
        })
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const updateTodoLists = async (req, res) => {
    try {
        const [response] = await pool.query(
            "UPDATE todolist SET ? WHERE id = ?",
            [req.body, req.params.id]
        )
        console.log(response)
        if (response.affectedRows === 0)
            return res.status(404).json({ message: "Task not found" })
        res.json(response)
    } catch (error) {
        return res.status(500).json({ error })
    }
}

export const deleteTodoLists = async (req, res) => {
    try {
        const [response] = await pool.query(
            "DELETE FROM todolist WHERE id = ?",
            [req.params.id]
        )
        console.log(response)
        if (response.affectedRows === 0)
            return res.status(404).json({ message: "Task not found" })
        
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ error })
    }
}
