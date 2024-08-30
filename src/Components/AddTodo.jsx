import React from 'react'

function AddTodo() {
    const handleEvent = (e) => {
        e.preventDefault();
      }
    
      const onChange = (e) => {

      }
    return (
        <>
            <div className="container my-3">
                <h2>Add a note:</h2>
                <form className="my-3">
                    <div className="form-group">
                        <label htmlFor="todo">Todo</label>
                        <input className="form-control" name="todo" id="todo" onChange={onChange}></input>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={handleEvent}>
                        Add <i className="fa-solid fa-check mx-2"></i>
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddTodo
