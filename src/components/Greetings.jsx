    import "./Greetings.css"

    function Greetings({nome, mensagem = "Seja Bem-vindo (a)!"}) {
return (
    <div className="greeting">
        <span className="greeting__eyebrow">React - primeiros Passos</span>
        <h1>{nome}, {mensagem}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi, dignissimos. Odit quibusdam aspernatur ratione deserunt repellat. Fuga cum, totam commodi recusandae voluptas a porro dolorum rem, aspernatur quis corrupti asperiores.</p>
    </div>
);
}
export default Greetings;