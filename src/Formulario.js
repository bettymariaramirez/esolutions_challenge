import React, { Fragment, useState } from "react";
import "./index.css";

const Formulario = () => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    password: "",
    inputAddress: "",
    inputAddress2: "",
    inputCity: "",
    sex: "",
    dateBirth: "",
    motivation: "",
    experience: "",
    goals: "",
    know: "",
  });
  const handlImputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      datos.name +
        "" +
        datos.email +
        "" +
        datos.sex +
        "" +
        datos.dateBirth +
        "" +
        datos.motivation +
        "" +
        datos.experience +
        "" +
        datos.password +
        "" +
        datos.goals +
        "" +
        datos.know +
        "" +
        datos.inputAddress +
        "" +
        datos.inputAddress2 +
        "" +
        datos.inputCity
    );
  };

  return (
    <Fragment>
      <h1>ENCUESTA ESOLUTIONS</h1>

      <form className="row g-3" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <label for="inputName4" className="form-label">
            Nombre
          </label>
          <input
            placeholder="ingrese su nombre"
            className="form-control"
            name="name"
            type="name"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-md-3">
          <label for="inputEmail4" className="form-label">
            Correo
          </label>
          <input
            placeholder="ingrese su correo"
            className="form-control"
            name="email"
            type="email"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-md-3">
          <label for="inputPassword4" className="form-label">
            Contraseña
          </label>
          <input
            placeholder="****"
            className="form-control"
            name="password"
            type="password"
            onChange={handlImputChange}
          />
        </div>
        <div className="col-md-3">
          <label for="inputEmail4" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            placeholder="fecha de nacimiento"
            className="form-control"
            name="dateBirth"
            type="text"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-md-2">
          <label for="inputCity" className="form-label">
            sexo
          </label>
          <input
            placeholder="sexo"
            type="text"
            className="form-control"
            name="sex"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-2">
          <label for="inputAddress" className="form-label">
            Teléfono
          </label>
          <input
            placeholder="número"
            type="number"
            className="form-control"
            name="number"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-4">
          <label for="inputAddress2" className="form-label">
            Dirección
          </label>
          <input
            placeholder="Apartment,Casa,Barrio"
            type="text"
            className="form-control"
            name="inputAddress2"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-md-2">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input
            placeholder="Ciudad"
            type="text"
            className="form-control"
            name="inputCity"
            onChange={handlImputChange}
          />
        </div>

        <div className="col-md-2">
          <label for="inputState" className="form-label">
            Provincia
          </label>
          <select className="form-select">
            <option selected>Córdoba...</option>
            <option selected>...</option>
          </select>
        </div>
        <div>
          <br />
        </div>

        <div class="row">
          <div className="col-md-5">
            <label for="inputName4" className="form-label">
              ¿Cuál es tu motivacion para ingresar a Esolutions?
            </label>
            <input
              placeholder="Mi motivacion es ..."
              className="form-control"
              name="motivation"
              type="text"
              onChange={handlImputChange}
            />
          </div>

          <div className="col-md-5">
            <label for="inputName4" className="form-label">
              ¿cuánto tiempo de experiencia tienes como desarrollador web?
            </label>
            <input
              placeholder=" x años"
              className="form-control"
              name="experience"
              type="text"
              onChange={handlImputChange}
            />
          </div>
        </div>

        <div>
          <br />
        </div>

        <div class="row">
          <div className="col-md-4">
            <label for="inputName4" className="form-label">
              ¿Cuáles serían tus metas dentro de nuestra empresa?
            </label>
            <input
              placeholder="metas"
              className="form-control"
              name="goals"
              type="text"
              onChange={handlImputChange}
            />
          </div>

          <div className="col-md-4">
            <label for="inputName4" className="form-label">
              ¿Cómo conociste de nuestra empresa?
            </label>
            <input
              placeholder=" de donde  ..."
              className="form-control"
              name="know"
              type="text"
              onChange={handlImputChange}
            />
          </div>
        </div>

        <div class="row">
          <div className="col-md-6">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
