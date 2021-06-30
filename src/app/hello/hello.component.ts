import { Component } from "@angular/core";

// DECORATOR - DEFINE QUE ESSA CLASSE É UM COMPONENTE ANGULAR
@Component({
    selector:'app-hello', //DEFINE NOME DA TAG QUE CHAMARA ESSE COMPONENT - prefixo app convenção
    template:` <h2> HELLO {{nome}} </h2> ` //CONVENCAO MAXIMO 3 4 LINHAS
    // templateUrl:'' // PATH DO HTML
})

// EXPORT DEFINE A VISIBILIDADE DA CLASSE POR OUTROS SCOPOS
export class HelloComponent{
    nome = 'BRUNO'; // atributo/variavel que pode ser usado na transposicao dentro do template do componente
}