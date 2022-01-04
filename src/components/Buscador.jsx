import { environment } from "./../constants/index";
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function Buscador() {

    const { BASE_URL_SUPERHERO, key } = environment;

    const validation = values => {
        let errors = {};
        if (!values.search) {
          errors.search = 'El campo no puede estar vacío';
        }
        return errors;
    }

    return (
        <>
            <Formik
                initialValues={{
                    search: '',
                }}
                onSubmit={ async (values) => {
                   
                    try {
                        await axios.get(`${BASE_URL_SUPERHERO}${key}/search/batman`)
                            .then((response) => {
                             console.log(response.data.results)
                            });
                    } catch(err){
                        console.error(err);
                    }
                }}
                validate={validation}
            >
                {
                    ({errors}) => (
                        <div className="container my-4">
                        <h3 className="text-center">Buscá superhéroes para agregar a tu equipo</h3>
                        <Form id="buscador" className="d-flex justify-content-center my-3" style={{maxWidth:"700px", margin:"auto"}}>
                            <div className="row" style={{width:"100%"}}>
                                <Field className="form-control col mx-2" name="search" type="search" placeholder="Por nombre..." aria-label="Search"/>
                                <button className="btn btn-primary col-3 mx-2" id="btn-buscador" type="submit">
                                    Buscar
                                </button>
                            </div>
                        </Form>
                        {
                            <small className='text-danger text-center' style={{display:"block"}}>{errors.search}</small>
                        }
                        </div>
                    )
                }
            </Formik>
        </>
    );
  }
  
  export default Buscador;
  