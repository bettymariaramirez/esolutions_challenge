import React, { Fragment, useState }  from "react"
import './index.css';







const Formulario = ()=> {

    const[datos,setDatos]= useState({
      email:'',
      password:'',
      inputAddress:'',
      inputAddress2:'',
      inputCity:''
      
    })
    const handlImputChange = (event)=> {
// console.log(event.target.value)
  setDatos({
    ...datos,
    [event.target.name]: event.target.value
   })
 }
   const enviarDatos = (event) => {
       event.preventDefault();
       console.log(datos.email +''+ datos.password +''+  datos.inputAddress +''+  datos.inputAddress2 +''+ datos.inputCity)
   }    
    
    return (
        <Fragment>
      <h1>Formulario</h1>
      <form className="row g-3" onSubmit={enviarDatos}>
          <div className="col-md-3">
          <label for="inputEmail4" 
          className="form-label">Email</label>
          <input placeholder="ingrese email"
          className="form-control"
          name="email"
          type="email"
          onChange={handlImputChange}/>
          </div>
          <div className="col-md-3">
          <label for="inputPassword4" 
           className="form-label">Password</label>
          <input placeholder="****"
          className="form-control"
          name="password"
          type="password"
          onChange={handlImputChange}/>
          </div>
          <div className="col-5">
           <label for="inputAddress" 
           className="form-label">Address</label>
            <input placeholder="1234 Main St" 
            type="text" 
            className="form-control" 
            name="inputAddress"
           onChange={handlImputChange}/>
          </div>
          <div className="col-5">
      <label for="inputAddress2" className="form-label">Address 2</label>
      <input placeholder="Apartment, studio, or floor"
      type="text" 
      className="form-control" 
      name="inputAddress2" 
      onChange={handlImputChange}/>
    </div>
    <div className="col-md-2">
      <label for="inputCity" 
      className="form-label">City</label>
      <input placeholder="City"type="text" 
      className="form-control" 
      name="inputCity"
      onChange={handlImputChange}/>
      </div>
      <div className="col-md-2">
      <label for="inputState" 
      className="form-label">State</label>
      <select  className="form-select">
        <option selected>Choose...</option>
        <option>...</option>
        </select>
       </div>
       <div class="col-5">
    <div class="form-check">
      <input class="form-check-input" 
      type="checkbox" name="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit">Enviar</button>
          </div>
      </form>
      </Fragment>
    );
  }
    
  export default Formulario;
