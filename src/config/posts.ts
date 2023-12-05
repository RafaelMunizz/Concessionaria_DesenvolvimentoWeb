interface Posts {
  id: string
  anunciante: string
  carro: string
  endereco: string
  valor: number
  fotos: string[]
}

export const posts: Posts[] = [
  {
    id: '1',
    anunciante: 'Fulano de tal',
    carro: 'Sandero 2014',
    endereco: 'Bairro 123, Rua 456, 789',
    valor: 30000,
    fotos: [
      'https://www.chavesnamao.com.br/imn/0358X0250/N/veiculos/226406/4263926/renault-sandero-1-0-vibe-12v-4p_f69c67888ca.jpg',
      'https://www.quadrosautomoveis.com.br/carros/f6f8f9eefecff94bfaadcf269b547212-thumbjpeg-renault-sandero-9451861-900-675-70.jpg',
      'https://img.olx.com.br/images/55/551343329764693.jpg'
    ]
  },
  {
    id: '2',
    anunciante: 'Ciclano da Silva',
    carro: 'Golf GTI 2018',
    endereco: 'Avenida Principal, 1234',
    valor: 80000,
    fotos: [
      'https://cdn.motor1.com/images/mgl/NPOzO/s1/2021-vw-golf-gti.webp',
      'https://motorshow.com.br/wp-content/uploads/2019/08/Volkswagen-Golf-GTI-Special-Performance-2020.jpg',
      'https://quatrorodas.abril.com.br/wp-content/uploads/2018/05/volkswagen-golf-gti-6.jpg'
    ]
  },
  {
    id: '3',
    anunciante: 'Beltrano Oliveira',
    carro: 'Honda Civic 2020',
    endereco: 'Rua dos Sonhos, 567',
    valor: 60000,
    fotos: [
      'https://cdn.motor1.com/images/mgl/zL2p1/s1/2022-honda-civic-type-r-rendering.webp',
      'https://cdn.motor1.com/images/mgl/RvY8V/s1/2020-honda-civic-type-r-facelift-spy-photo.webp',
      'https://img.olx.com.br/images/26/268252076118650.jpg'
    ]
  },
  {
    id: '4',
    anunciante: 'Maria Souza',
    carro: 'Ford Mustang 2019',
    endereco: 'Avenida dos Esportes, 987',
    valor: 120000,
    fotos: [
      'https://cdn.motor1.com/images/mgl/RvY8V/s1/2020-honda-civic-type-r-facelift-spy-photo.webp',
      'https://www.automotiveaddicts.com/wp-content/uploads/2019/03/2019_Ford_Mustang_GT_PP2_Review-35.jpg',
      'https://cdn.motor1.com/images/mgl/4gEVv/s1/2021-ford-mustang-mach-1-spied.webp'
    ]
  },
  // Adicione mais itens conforme necessário
];