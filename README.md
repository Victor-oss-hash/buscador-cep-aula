# Projeto buscador de Ceps

O objetivo do projeto é pesquisar CEPs em uma api chamada https://viacep.com.br.

## Design do projeto

![Design do projeto](image.png)

## API utilizada

A api https://viacep.com.br. retorna um json contendo as seguintes informações para um cep de exemplo 60311020
```
https://viacep.com.br/ws/60311020/json/
{
  "cep": "60311-020",
  "logradouro": "Rua Santa Elisa",
  "complemento": "até 498/499",
  "unidade": "",
  "bairro": "Pirambu",
  "localidade": "Fortaleza",
  "uf": "CE",
  "estado": "Ceará",
  "regiao": "Nordeste",
  "ibge": "2304400",
  "gia": "",
  "ddd": "85",
  "siafi": "1389"
}
```
## funcionalidades

- [x] Busca do cep
- [x] limpar dados
- [x] responsividade
- [x] rodapé
- [x] melhoria de desing

### Observações
> [!NOTE]
> Projeto feito na disciplina de programação webi I do curso ADS do ifce de jaguaruana

> [!IMPORTANT]
> Alguns CEPs podem não conter todas as informações.
## Responsabilidade da API Externa
Este projeto utiliza o serviço de ViaCEP https://viacep.com.br/, uma API pública brasileira para consulta de CEPs mantida por Marcelo D'Ávila https://viacep.com.br/sobre/ e colaboradores. 

**Atenção:**  
- Eventuais falhas na precisão dos dados  
- Indisponibilidade do serviço  
- Alterações não documentadas na API  

São de responsabilidade exclusiva dos mantenedores da API ViaCEP. Para questões relacionadas ao serviço, contate diretamente através do site oficial https://viacep.com.br/contato/.

## Contatos
Email: victorddlc21@gmail.com