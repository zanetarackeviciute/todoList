import { useState } from "react"

export default function App() {
    const [newItem, setNewItem] = useState("")

    return (    
        <>  
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New item</label>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">Todo List</h1>
            <ul>
                <li>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-delete">Delete</button>
                </li>
            </ul>
        </>  
    )
}