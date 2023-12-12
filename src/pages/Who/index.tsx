import { DivContainerWho, ImageTeam } from './styles';

export function Who() {
  return (
    <DivContainerWho>
          <h2>Quem Somos</h2>
          <p>
            Bem-vindo à nossa concessionária e marketplace de carros! Somos uma equipe apaixonada por automóveis e comprometida em fornecer as melhores opções de veículos para nossos clientes.
          </p>
          <p>
            Nossa missão é proporcionar uma experiência excepcional de compra de carros, garantindo a satisfação e confiança de nossos clientes.
          </p>
          <br />
          <h3>Nossa Equipe</h3>
          <p>
            Conheça nossa equipe dedicada de profissionais que está aqui para ajudar você a encontrar o carro perfeito.
          </p>
          <ImageTeam src="src\assets\images\Equipe3.jpg" alt="Equipe"  />
    </DivContainerWho>
        
  );
}
