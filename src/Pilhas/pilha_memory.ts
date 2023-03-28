import { PerformanceObserver, performance } from 'perf_hooks';
import { Pilha } from './Pilha'

console.time('tempo de execução');

const valores = ['arroz', 'feijão', 'farinha'];
const pilha = new Pilha<string>({ valores, capacidade: 100000 }); // ou new Pilha({ valores })
while (pilha.tamanho < pilha.capacidade) {
  pilha.empilhar('açúcar');
}

console.timeEnd('tempo de execução');

const heap = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`consumo aproximado: ${heap} MB`);