import './pages.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); // estado para armazenar o email e uma função para atualizá-lo
  const [senha, setSenha] = useState(''); // estado para armazenar a senha e uma função para atualizá-la
  const [busca, setBusca] = useState(''); // estado para armazenar a entrada de busca e uma função para atualizá-la
  const navigate = useNavigate(); // função de navegação para o uso em roteamento
  
  const handleLogin = () => { // função para lidar com o login
    //exemplo de uso
    if (email === 'maria@gmail.com' && senha === '123') {
      console.log('Login bem-sucedido');
      alert('Login bem-sucedido');
      navigate('/Home');  // navega para a página inicial após o login bem-sucedido
    } else {
      console.log('Email ou senha incorretos');
      alert('Email ou senha incorretos');
    }
  };

  const handleNoLoginClick = () => { // função para lidar com o clique em "Não tenho login"
    alert('Contate a empresa ABCD e se torne um cliente!');
  };

  const handleSearchChange = (e) => { // função para lidar com a mudança na entrada de busca
    setBusca(e.target.value);
  };

  const handleEmailClick = () => {   // função para lidar com o clique no ícone de e-mail
    alert('Email da empresa: contato@abcd.com');
  };

  const handleHome = () => { // função para navegar para a página inicial
    navigate('/Home');
  }

  const handleFaq = () => { // função para navegar para a página de FAQ
    navigate('/Faq');
  }

  return (
    <div className="entrar">
      <div className="container-2">
        <div className="container-3">
          <div className="menu">
            <div className="logo-1">
              <span className="curso-online-1">
                Curso Online
              </span>
              <span className="abcd-1">
                ABCD
              </span>
            </div>
            <div className="links-container">
              <span className="pages-link" onClick={handleHome}>
                HOME
              </span>
              <span className="pages-link">
                PRODUTOS
              </span>
              <span className="pages-link">
                SERVIÇOS
              </span>
              <span className="pages-active-link">
                ENTRAR
              </span>
              <span className="pages-link" onClick={handleFaq}>
                FAQ
              </span>
            </div>
            <div className="icoutline-email" onClick={handleEmailClick}>
              <img className="email-icon" src="assets/vectors/Vector8_x2.svg" alt="Email Icon" />
            </div>
          </div>

          <div className="login-title">
            Login
          </div>
          <div className="inputs">

            <div className="email">
              email
            </div>
            <div className="">
              <input
                type="email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="maria@gmail.com"
              />
            </div>

            <div className="senha">
              senha
            </div>
            <div className="">
              <input
                type="password"
                className="input-box"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="************"
              />
            </div>
          </div>

          <div className="entrar-button" onClick={handleLogin}>
            <span className="entrar-text">ENTRAR</span>
          </div>
          <span className="nao-tenho-login" onClick={handleNoLoginClick}>Não tenho login</span>
        </div>

        <div className="footer">
          <div className="footer-container-1">
            <div className="footer-component-1">
              <div className="link-footer">
                ProdutoA
              </div>
              <div className="link-footer">
                ProdutoB
              </div>
              <span className="link-footer">
                ProdutoC
              </span>
            </div>
            <div className="footer-component-1">
              <div className="link-footer">
                ServiçoA
              </div>
              <div className="link-footer">
                ServiçoB
              </div>
              <span className="link-footer">
                ServiçoC
              </span>
            </div>
            <div className="footer-container-1">
              <div className="footer-component-1">
                <div className="link-footer">
                  HOME
                </div>
                <div className="link-footer">
                  Produtos
                </div>
                <span className="link-footer">
                  Serviços
                </span>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="icon-copyright">
              <img className="vector" src="assets/vectors/Vector60_x2.svg" />
            </div>
            <div className="copyright-2024">
              Copyright @ 2024
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="campo-de-busca">
          <input
            type="text"
            className="input-busca"
            value={busca}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
          <img className="lupa-icon" src="assets/vectors/Vector37_x2.svg" alt="Lupa Icon" />
        </div>
        {/* <div className="icon-menu-navbar">
          <img className="menu-icon" src="assets/vectors/Vector9_x2.svg" />
        </div> */}
      </div>
    </div>
  )
}
