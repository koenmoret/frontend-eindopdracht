import axios from "axios";
function Login_user({values}) {
    // Send a request to your server to check the user
    try {
        axios.post('http://localhost:8081/login', values)
            .then(res => {
                console.log(res);
                if(res.data === "Succes"){

                    // navigate('/Home');
                    alert("Okay");
                }else {
                    alert("Error");
                }
            })
            .catch(err => console.log(err))

    } catch (error) {
        console.error('Error during login:', error);
        alert('Error during login');
    }
}

export default Login_user;