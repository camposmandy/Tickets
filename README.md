# Aplicação Angular 2 com Webpack de exemplo com testes unitários e end-2-end

Essa aplicação tem como objetivo demonstrar através de exemplos práticos testes unitários com Karma e e2e com Protractor
para aplicações Angular 2 com typescript e webpack.

## Pre-requisitos

- Angular 2
- Webpack
- Node
- Npm
- Bootstrap

## npm scripts

Scripts npm 

* `npm start` - Roda o compilador e o servidor ao mesmo tempo, ambos em "watch mode".
* `npm run build` - Roda o compilador typescript uma vez.
* `npm run build:w` - Roda o compilador typescript em "watch mode", o processo continua rodando aguardando alterações no Typescript;

Para rodar testes:
* `npm test` - Compila, roda e observa os testes unitários do karma;
* `npm run e2e` - Compila e roda os testes e2e do protractor, escritos em Typescript written in Typescript

## Testando

Essa aplicação utiliza karma e jasmine para criação de testes unitários e protracotr para testes end-to-end.
These tools are configured for specific conventions described below.

*Não é usual e raramente é possível rodar a aplicação, testes unitários e e2e ao mesmo tempo.
Nós recomendamos que pare a execução de todos antes de executar algum isoladamente.*

### Testes Unitários
Testes unitários Typescript são armazenados no mesmo nível do arquivo a ser testado, dentro da estrutura da pasta 'app'.
Os arquivos precisam terminar com `.spec.ts`.

Rode os testes executanto `npm test`.

Esse comando primeiro compila a aplicação e roda o test-runner do Karma.
O test-runner fica escutando alterações nos arquivos de teste para rodar novamente.

Você pode interromper a execução dos testes pressionando `Ctrl-C`. 

### Testes End-to-end (E2E)

Testes E2E estão localizados na pasta 'e2e'.
O nome dos arquivos de teste devem terminar com `.e2e-spec.ts`. 

Para executar os testes execute `npm run e2e`.
