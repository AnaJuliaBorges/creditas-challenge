# Creditas Challenge - Simulador de Empréstimo

## 📝 Descrição

Este projeto é uma solução para o desafio técnico da Creditas, consistindo em um simulador de empréstimo que calcula parcelas mensais com base no valor solicitado, prazo e idade do cliente.

## 📝 Ferramentas utilizadas
- React.js
- Vitest
- Decimal.js

## 🚀 Setup e Instalação

### Pré-requisitos

- Node.js
- npm ou yarn
- Git (para clonar o repositório)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AnaJuliaBorges/creditas-challenge.git
cd creditas-challenge
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie a aplicação:
```bash
npm start
# ou
yarn start
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 🛠️ Como Usar

1. Preencha o formulário com:
   - Valor desejado do empréstimo
   - Prazo em meses
   - Sua data de nascimento

3. Visualize os resultados:
   - Valor da parcela mensal
   - Total a ser pago
   - Total de juros

## 🏗️ Estrutura do Projeto e Arquitetura

```
src/
├── components/       # Componentes React
│   ├── formSimulation/         # Formulário de entrada
│   ├── resultSimulation/       # Exibição dos resultados
├── hooks/            # Hooks customizados
│   ├── useLoanCalculator.js   # Lógica de cálculo
│   ├── useLoanCalculator.test.js
├── utils/            # Utilitários
│   └── formatCurrency.js    # Formatação monetária
├── __tests__/            # Utilitários
│   └── integrations.test.js    # Testes de integração
└── App.js            # Componente principal
```

### Decisões de Arquitetura

1. **Separação de Responsabilidades**:
   - Lógica de cálculo isolada no hook `useLoanCalculator`
   - Componentes divididos por funcionalidade
   - Formatação separada em utilitários

2. **Gerenciamento de Estado**:
   - Uso de React Hooks para estado local
   - Estado do formulário gerenciado pelo componente

3. **Cálculos Financeiros**:
   - Biblioteca Decimal.js para precisão em operações monetárias
   - Taxas variáveis por faixa etária

4. **Testes**:
   - Testes unitários para o hook de cálculo
   - Testes de integração para fluxo completo
   - Testes de componentes isolados

## 🧪 Testes

Para executar os testes:

```bash
npm test
# ou
yarn test
```

Cobertura de testes:
```bash
npm run test:coverage
# ou
yarn test:coverage
```

## 📌 Melhorias Futuras

- [ ] Adicionar validações mais robustas no formulário
- [ ] Adicionar gráficos para visualização do pagamento
- [ ] Adicionar suporte para diferentes temas (claro e escuro).
- [ ] Criar um PWA (Progressive Web App) para permitir o uso offline da aplicação.
