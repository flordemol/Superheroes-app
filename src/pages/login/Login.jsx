import FormLogin from "../../components/FormLogin";

function Login() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
       <div className="row" style={{background:'#000', padding:'5%', color:'#FFF', borderRadius:'10px'}}>
            <h2 className="text-center">Login</h2>
            <div className="col-xl">
                <FormLogin />
            </div>
       </div>
    </div>
  );
}

export default Login;
