import './pages.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Faq() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate(); // função de navegação para o uso em roteamento

  const handleSearchChange = (e) => { // função para lidar com a mudança na entrada de busca
    setBusca(e.target.value); // atualiza o estado da busca com o valor digitado pelo usuário
  };

  const handleEmailClick = () => { // função para lidar com o clique no ícone de e-mail
    alert('Email da empresa: empresaabcd@outlook.com');
  };

  const handleLogout = () => { 
    navigate('/Login'); // navega para a página de login quando o usuário faz logout
  };

  const handleHome = () => {
    navigate('/Home'); // navega para a página inicial quando o usuário clica no link "HOME"
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
              <span className="pages-link" onClick={handleHome}>
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
              <span className="pages-active-link">
                FAQ
              </span>
            </div>
            <div className="icoutline-email" onClick={handleEmailClick}>
              <img className="email-icon" src="assets/vectors/Vector8_x2.svg" alt="Email Icon" />
            </div>
          </div>

          <div className="perguntas-frequentes">
            Perguntas Frequentes
          </div>
          <div className='perguntas'>
            <div className="container-pergunta">
              <span className="pergunta">
                Como faço para acessar o curso online de capacitação?
              </span>
            </div>
            <div className="container-pergunta">
              <span className="pergunta">
                Posso acessar o curso em dispositivos móveis?
              </span>
            </div>
            <div className="container-pergunta">
              <span className="pergunta">
                Como receber suporte técnico durante o curso?
              </span>
            </div>
            <div className="container-pergunta">
              <span className="pergunta">
                Posso compartilhar meu acesso ao curso com outras pessoas?
              </span>
            </div>
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