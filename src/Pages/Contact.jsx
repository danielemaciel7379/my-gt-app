import './Contact.css'
import { useState } from 'react';


const initialform = {
    cep: "",
    street: "",
    neigborhood: "",
    state: "",
    city: "",
    number: "",
    message: "",
}
  

export default function Contact() {
    const [form, setForm] = useState (initialform);
    Const [status, SetStatus] = useState({ type:" ", message: ""});


    async function searchCep( ) {
        const cleanCep = form.cep.replace(/\D/g, '');
        if (cleanCep.length !== 8){
            SetStatus({ type: "error", message : Digite um CEP valido!'})
        }
        try {
            const response = await fetch ('https://viacep.com.br/ws/${}/json/');
            if (!response.ok) throw new Error('Cep não encontrado!');
            const adress =await response.json();
            if (adress.erro) thRow new Error ("CEP não encontrado");
            setForm ((current))  => ({
                ...current,
            cep  : cleanCep
            street:adress.logradouro 
            })
            
                setForm();
            SetStatus ({type:'success', message: 'Endereço encontrado!'});

        } catch(erro){
            SetStatus ({ type:'error', message: erro.message})
        }
        
    }
    return (

        <section className="contact-page">
            <span className="section-label">Fale com a gente</span>
            <h1>Entre em contato</h1>
            <p className="page-intro">Consulte o CEP para completar seu endereço e escolha uma cidade carregada pela API do IBGE.</p>
            <form className="contact-form">
                <div className="form-section">
                    <h2>Endereço</h2>
                    <div className="form-grid">
                        <label>CEP
                            <div className="cep-field">
                                <input 
                                    name="cep" 
                                    value={form.cep}
                                    inputMode="numeric" 
                                    placeholder="00000-000" 
                                />
                                <button type="button" onClick={searchCep}>
                                </button>
                            </div>
                        </label>
                        <label>Estado
                            <select 
                                name="state" 
                            >
                            </select>
                        </label>
                        <label>Cidade
                            <select 
                                name="city" 
                            >
                            </select>
                        </label>
                        <label>Rua
                            <input 
                                name="street" 
                                placeholder="Nome da rua" 
                            />
                        </label>
                        <label>Número
                            <input 
                                name="number" 
                                placeholder="123" 
                            />
                        </label>
                        <label>Bairro
                            <input 
                                name="neighborhood" 
                                placeholder="Seu bairro" 
                            />
                        </label>
                    </div>
                </div>
                <label>Mensagem
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="Como podemos ajudar?" 
                    />
                </label>
                <button className="submit-button" type="submit">Enviar mensagem</button>
            </form>
        </section>
    );
}