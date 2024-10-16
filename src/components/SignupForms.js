import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Button from "./Button";
import "../styles/forms.css";


export default function SignupForm() {
    const [formData, setFormData] = useState({
        profileImage: null,
        name: '',
        email: '',
        doc: '',
        phone: '',
        birthday: '',
        church: '',
        imageUrl: '',
        firstTime: '',
        transport: '',
        pranks: '',
        remedy: '',
        allergic: '',
        payment: '',
    });

    const handleChange = (e) => {

        if (e.target.name === 'profileImage') {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: file, imageUrl: URL.createObjectURL(file) });
        } else {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "inscricoes"), formData);
            alert('Inscrição realizada com sucesso!');
        } catch (e) {
            console.log("Erro ao adicionar documento: ", e);
            alert('Erro ao enviar inscrição, tente novamente.');
        }
    };


    return (

        <div className="forms">


            <form class="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-8">
                    <label for="inputEmail4" class="form-label text-light">Qual seu nome?</label>
                    <input type="text"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Digite seu nome..."
                        name="name" onChange={handleChange}
                        value={formData.name}
                        required
                    />
                </div>
                <div class="col-md-4">
                    <label for="inputPassword4" class="form-label text-light">De qual igreja você é?</label>
                    <input type="text"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Digite o nome da sua igreja"
                        name="church" onChange={handleChange}
                        value={formData.church}
                        required
                    />
                </div>
                <div class="col-3">
                    <label for="inputPassword4" class="form-label text-light">Quando nasceu?</label>
                    <input type="date"
                        class="form-control"
                        id="inputPassword4"
                        placeholder=""
                        name="birthday"
                        onChange={handleChange}
                        value={formData.birthday}
                        required
                    />
                </div>
                <div class="col-3">
                    <label for="inputAddress2" class="form-label text-light">Qual seu telefone?</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Digite seu número"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        required
                    />
                </div>
                <div class="col-3">
                    <label for="inputAddress" class="form-label text-light">Qual seu email?</label>
                    <input type="email"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Digite seu email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                </div>

                <div class="col-3">
                    <label for="inputAddress2" class="form-label text-light">Nº de Documento</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Digite seu RG/CPF"
                        name="doc"
                        onChange={handleChange}
                        value={formData.doc}
                        required
                    />
                </div>
                <div class="col-6">
                    <label for="inputAddress3" class="form-label text-light">É alérgico a algum remédio?  Se sim, qual remédio?</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress3"
                        placeholder="Digite o nome do remédio"
                        name="remedy"
                        onChange={handleChange} required
                        value={formData.remedy}
                    />
                </div>
                <div class="col-6">
                    <label for="inputAddress3" class="form-label text-light">É alérgico a algum alimento?  Se sim, qual?</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress3"
                        placeholder="Digite o nome do alimento"
                        name="allergic"
                        onChange={handleChange} required
                        value={formData.allergic}
                    />
                </div>

                <div class="col-4">
                    <label for="inputAddress3" class="form-label text-light" className="extra">É a primeira vez que acampa com a gente?</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress3"
                        name="firstTime"
                        onChange={handleChange}
                        value={formData.firstTime}
                        placeholder="Responda com SIM ou NÃO"
                        required
                    />
                </div>

                <div class="col-4">
                    <label for="inputAddress3" class="form-label text-light" className="extra">Precisa de carona para a chácara?</label>
                    <input type="text"
                        class="form-control"
                        id="inputAddress3"
                        name="transport"
                        onChange={handleChange}
                        value={formData.transport}
                        placeholder="Responda com SIM ou NÃO"
                        required
                    />
                </div>

                <div class="col-4">
                    <label for="inputAddress3" class="form-label text-light" className="extra">Topa brincar todas as brincadeiras?</label>
                    <input type="text"
                        class="form-control text-opacity-25"
                        id="inputAddress3"
                        placeholder="Responda com SIM, NÃO ou DEPENDE"
                        name="pranks"
                        onChange={handleChange}
                        value={formData.pranks}
                        required
                    />
                </div>

                <div className="white">
                    <p>ATENÇÃO! Menores de 18 anos, peça sua ficha de autorização à diretoria.</p>
                </div>

                <div class="col-md-12 text-md-center">
                    <label for="inputState" class="form-label text-light">Qual será a forma de pagamento?</label>
                    <select id="inputState" class="form-select" name="payment" onChange={handleChange} required>
                        <option selected value="À vista">À Vista - 250,00</option>
                        <option value="2x">2x de 125,00</option>
                        <option value="3x">3x de 83,35</option>
                        <option value="4x">4x de 62,50</option>
                        <option value="5x">5x de 50,00</option>
                    </select>
                </div>

                <div class="col-md-12">
                    <p className="whats">Se precisar de ajuda para pagar ou tenha alguma dúvida <a href='https://api.whatsapp.com/send?phone=5519989318887&text=Olá!%20Queria%20conversar%20sobre%20o%20Acampa20255.'
                        target='_blank' rel='noreferrer'>fale com a gente</a></p>
                </div>


                <div className='button3'>
                    <Button children="Me inscrever agora" />
                </div>
            </form>
        </div>

    );
}