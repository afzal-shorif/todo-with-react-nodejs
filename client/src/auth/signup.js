import { useState } from 'react';
import './auth.css';

function SignUp() {
	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const [inputConPassword, setInputConPassword] = useState("");
	
	const submit = (e) => {
		e.preventDefault();
		// validate inputs and call signup api
	}

	return (
		<div className="signup-login-wrapper">
			<div className="signup-login-from-container">
				<h3 className="text-center m-0 mb-5">Create Account</h3>

				<form onSubmit={submit}>	
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Full Name" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" placeholder="passowrd" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
					</div>
					<div className="form-group mb-5">
						<input type="password" className="form-control" placeholder="re-passowrd" value={inputConPassword} onChange={(e) => setInputConPassword(e.target.value)}/>
					</div>

					<button className="btn btn-signup">Sign Up</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
