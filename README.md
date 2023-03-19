# RF

- [x] User can create a new transaction
- [ ] User can get the account's summary
- [x] User can list all the transactions
- [x] User can view the details of a unique transactions

# RN

- [x] The transaction can be credit (sum) or debit type (subtract)
- [ ] Must be possible identify the user between the requests
- [ ] User only view transaction that him created

# RNF

- [ ]

# Testes

- Unitários: unidade da sua aplicação, testar a funcionalidade sem necessariamente um contexto
- Integração: comunicação entre duas ou mais unidades
- e2e - ponta a ponta: Simula, um usuário operando na aplicação
  <ul>
    <li>Front-end: abre a página de login, digite o texto admin@admin.com no campo com ID email, clique no butão logar</li>
    <li>Back-end: chamadas HTTP, websockets</li>
  </ul>
- Pirâmide de testes: E2E (não dependem de nenhuma tecnologia, nem arquitetura, mas menos performáticos)
