let aluno = {
    nome: "Ana",
    idade: 18,
    curso: "Ciência da Computação",
    notas: [9.0,10.0,8.5]
};

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Primeira nota: ${aluno.notas[0]}`);

aluno.idade = 19;
aluno.notas.push(8.0);

console.log(aluno);

let alunoJSON = JSON.parse(alunoJSON);
console.log("Objeto convertido em string JSON", alunoJSON);

let alunoObj = JSON.parse(alunoJSON);
console.log("Objeto convertido de volta:", alunoObj);

for (let propriedade in aluno) {
    console.log(`${propried}: ${aluno[propried]}`);
}

let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

aluno.endereco = {
    rua: "Avenida Brasil",
    cidade: "São Paulo",
    estado : "São Paulo"
};
console.log(aluno);

let alunos = [
    {
      nome: "Gabriel Barbosa",
      idade: 28,
      curso: "Engenharia de Software",
      notas: [7.5, 8.0, 9.5],
      endereco: { rua: "Rua das Flores", cidade: "São Paulo", estado: "SP" }
    },
    {
      nome: "Neymar",
      idade: 30,
      curso: "Ciência da Computação",
      notas: [9.0, 8.5, 10.0],
      endereco: { rua: "Avenida Brasil", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
      nome: "Giorgian de Arrascaeta",
      idade: 27,
      curso: "Engenharia de Software",
      notas: [6.0, 7.5, 8.0],
      endereco: { rua: "Flamengo", cidade: "Rio de Janeiro", estado: "RJ" }
    }
  ];
  
  console.log(alunos);

  let alunosComMediaAlta = alunos.filter(aluno => {
    let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return media > 8;
  });
  
  console.log("Alunos com média maior que 8:", alunosComMediaAlta);
