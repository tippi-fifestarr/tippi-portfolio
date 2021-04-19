
const SignIn = ({ onRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    {/* why isn't this centering */}
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                        // this is key, set the value to what we give it, but we got to make sure it only runs on the click? so the arrow function is that function
                        onClick={() => onRouteChange('Home')} 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    {/* register RouteChange */}
                    <p 
                        onClick={() => onRouteChange('Register')} 
                        className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>        
    )
}

export default SignIn;