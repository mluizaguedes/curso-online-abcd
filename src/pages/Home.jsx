import './pages.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [busca, setBusca] = useState(''); // estado para armazenar a entrada de busca e uma função para atualizá-lo
  const navigate = useNavigate(); // função de navegação para o uso em roteamento

  const handleSearchChange = (e) => {
    setBusca(e.target.value);
  };

  const handleEmailClick = () => { // função para lidar com o clique no ícone de e-mail
    alert('Email da empresa: empresaabcd@outlook.com'); 
  };

  const handleLogout = () => {
    navigate('/Login'); // navega para a página de login quando o usuário faz logout
  };

  const handleFaq = () => { // função para lidar com o clique no link "FAQ"
    navigate('/Faq');
  }

  return (
    <div className="entrar">
      <div className="container-2">
        <div className="container-4">
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
              <span className="pages-active-link">
                HOME
              </span>
              <span className="pages-link">
                PRODUTOS
              </span>
              <span className="pages-link">
                SERVIÇOS
              </span>
              <span className="pages-link" onClick={handleLogout}>
                SAIR
              </span>
              <span className="pages-link" onClick={{handleFaq}}>
                FAQ
              </span>
            </div>
            <div className="icoutline-email" onClick={handleEmailClick}>
              <img className="email-icon" src="assets/vectors/Vector8_x2.svg" alt="Email Icon" />
            </div>
          </div>

          <div className="curso-online-de-capacitao">
            Curso Online de Capacitação
          </div>
          <div className="descricao-container">
            <span className="descricao-text">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
          <div className="home-entrar">
            <div className="home-entrar-button-bg">
            </div>
            <span className="home-entrar-button">
              Entrar
            </span>
          </div>
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
        {/* <div className="icbaseline-menu">
          <img className="icon-menu-navbar" src="assets/vectors/Vector57_x2.svg" />
        </div> */}
      </div>
    </div>
  )
}