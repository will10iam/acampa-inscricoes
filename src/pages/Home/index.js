
import SignupForm from '../../components/SignupForms'
import Title from '../../components/Title'
import logo from '../../assets/logo.png'

function App() {
    return (
        <div className="App">

            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <Title title='Preencha os campos abaixo e GARANTA SUA VAGA!' />
            <SignupForm />
        </div>
    );
}

export default App;
