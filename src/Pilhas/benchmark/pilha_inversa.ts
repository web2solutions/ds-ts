import { PerformanceObserver, performance } from 'perf_hooks';
import { Pilha } from '../Pilha_inversa'

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log('Tempo de execução:', `${entry.duration} ms`);
    const heap = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`consumo aproximado: ${heap} MB`);
  })
})

perfObserver.observe({ entryTypes: ["measure"], buffered: true })

performance.mark("pilha-start")
// console.time('tempo de execução');

const valores = ['arroz', 'feijão', 'farinha'];
const pilha = new Pilha<string>({ valores, capacidade: 500000 }); // ou new Pilha({ valores })
while (pilha.tamanho < pilha.capacidade) {
  pilha.empilhar('açúcar');
}

performance.mark("pilha-end")

performance.measure("pilha", "pilha-start", "pilha-end")

// console.timeEnd('tempo de execução');

// const heap = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`consumo aproximado: ${heap} MB`);