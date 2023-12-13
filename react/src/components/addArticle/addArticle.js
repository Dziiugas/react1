import {useState } from "react"

const addArticle = (props)=>{
    const [formData,setFormData] = useState ({
        'title':'',
        'description':'',
        'id':''
    })

    const handleChange = (event)=>{
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )

    }
    const submitHandler = (event)=>{
        event.preventDefault();
        props.onSave(formData)
    }
    console.log(formData);
    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="title" placeholder="Naujienos pavadinimas"className="m-1 form-control" onChange={handleChange} value={formData.title}/>

            </div>
            <div className="form-group">
                <textarea name="description" placeholder="Naujienos pavadinimas" onChange={handleChange}  className="m-1 form-control">{formData.description}</textarea>

            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">saugoti</button>

            </div>
        </form>
    )
}

export default addArticle