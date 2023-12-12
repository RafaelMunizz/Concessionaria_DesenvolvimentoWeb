interface Posts {
  id: string
  anunciante: string
  carro: string
  endereco: string
  valor: number
  fotos: string[]
}

interface Anunciante {
  id: number
  nome: string
  email: string 
  cpf: string 
  telefone: string 
  rua: string 
  numero: string
  bairro: string 
  funcao: number
}

interface Carro {
  id: number
  marca: string
  modelo: string
  ano: number
  preco: number
  fotos: string[]
  anunciante: Anunciante //id_anunciante
}

// Essa parte tá quebrando porque o anunciante tá direfente do que era antes
// É preciso puxar as coisas do banco e tentar lidar com elas enquanto não consegue puxar direto do banco
// Talvez colocar dados fakes no lugar dos itens que vem  vazios seja uma opção

export const posts: Carro[] = [
  {
    id: 1,
    marca: "Renault",
    modelo: "Sandero",
    ano: 2014,
    preco: 30000,
    fotos: [
      'https://www.chavesnamao.com.br/imn/0358X0250/N/veiculos/226406/4263926/renault-sandero-1-0-vibe-12v-4p_f69c67888ca.jpg',
      'https://www.quadrosautomoveis.com.br/carros/f6f8f9eefecff94bfaadcf269b547212-thumbjpeg-renault-sandero-9451861-900-675-70.jpg',
      'https://img.olx.com.br/images/55/551343329764693.jpg'
    ],
    anunciante: {
      id: 1,
      nome: "Fulano de tal",
      email: "fulano@gmail.com", 
      cpf: "01234567890", 
      telefone: "83900000000", 
      rua: "Av. Floriano Peixoto", 
      numero: "305",
      bairro: "Centro", 
      funcao: 1
    }
  },
  {
    id: '2',
    anunciante: 'Ciclano da Silva',
    carro: 'Golf GTI 2018',
    endereco: 'Avenida Principal, 1234',
    valor: 80000,
    fotos: [
      'https://img.olx.com.br/images/57/575331336294668.jpg',
    ]
  },
  {
    id: '3',
    anunciante: 'Beltrano Oliveira',
    carro: 'Honda Civic 2020',
    endereco: 'Rua dos Sonhos, 567',
    valor: 60000,
    fotos: [
      'https://www.autoo.com.br/fotos/2019/11/1280_960/honda_civic_2020_1_23112019_18464_1280_960.jpg',
    ]
  },
  {
    id: '4',
    anunciante: 'Maria Souza',
    carro: 'Ford Mustang 2019',
    endereco: 'Avenida dos Esportes, 987',
    valor: 120000,
    fotos: [
      'https://i.pinimg.com/originals/8b/7b/6c/8b7b6c3ea377a6c2e9e08bd4d6f140ea.jpg',
    ]
  },
  // Adicione mais itens conforme necessário
];