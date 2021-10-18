# Explicações

## Decisão da arquitetura utilizada

### BackEnd

No backend segui o clean arquitecture, resguardando as devidas proporções de tamanho da aplicação, pois o que foi solicitado poderia ter sido feito de forma mais simples.
A ideia foi abstrair um pouco do teste para encarar como um problema mais real, com provavel escalabilidade e tudo mais. Codei seguindo o dominio, por mais "fake" que pudesse ser.

### FrontEnd

No front segui o MVVM que é um padrão que funciona muito bem com Vue. Adicionei apenas uma camada de Presenter para servir de dados para minha ViewModel. A partir dai, a ViewModel chamando a Model que cuida do acesso aos dados na API.

## Lista de bibliotecas de terceiros utilizadas

### BackEnd

Não utilizei nada muito alem, apenas o ORM que utilizei o typeorm e um Serializer para retornar para o front seguindo o JSON API

"class-validator": "^0.13.1",
"cors": "^2.8.5",
"jsonapi-serializer": "^3.6.7",
"pg": "^8.4.0",
"reflect-metadata": "^0.1.10",
"typeorm": "0.2.38"

### FrontEnd

"@kernel-js/api": "^0.4.17", - Essa lib é de um projeto meu, ela cria uma interface para api, seguindo JSON API
"awesome-mask": "^1.1.1",
"axios": "^0.18.1",

## O que você melhoraria se tivesse mais tempo

Não sei se por questão de tempo, mas talvez por uma regra de negócio mais complexa, gostaria de ter criado uma camada propria de repository que teria a dependencia pro ORM, assim eu isolaria mais o meu dominio. E também nao deixaria o Data Mapper direto nas minhas entities, criaria Models junto do Repository em uma camada de Data, pra isolar mais ainda o domain, não tendo nenhuma dependencia de Lib/framework

Nessa mesma linha adionaria um patter para navegar melhor as validações dentro do projeto, a validação está proxima de onde esta a regra e seguindo boas praticas nisso. Mas está usando uma lib, então gerando dependencia de lib/framework em camadas internas da aplicação. Melhoraria isso, talvez um chain of responsability, já ficaria bem bom.

## Quais requisitos obrigatórios que não foram entregues

Acredito que nenhum ;D
