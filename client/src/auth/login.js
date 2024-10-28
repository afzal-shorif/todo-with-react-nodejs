import {useState} from 'react';

function Login(){
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	
	const submit = (e) => {
		e.preventDefault();
	}

	return(
		<div className="signup-login-wrapper">
			<div className="signup-login-from-container">
				<h3 className="text-center m-0 mb-5">Login</h3>

				<form onSubmit={submit}>	
					<div className="form-group">
						<input type="text" className="form-control" placeholder="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
					</div>
					<div className="form-group mb-5">
						<input type="password" className="form-control" placeholder="passowrd" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
					</div>

					<button className="btn btn-signup">Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login;
