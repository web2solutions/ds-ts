import { PerformanceObserver, performance } from 'perf_hooks';
import { FilaVetor } from '../FilaVetor'

const perfObserver = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log('Tempo de execução:', `${entry.duration} ms`);
    const heap = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`consumo aproximado: ${heap} MB`);
  })
})

perfObserver.observe({ entryTypes: ["measure"], buffered: true })

const max_items = 500000;
const valores = ['José', 'João', 'Jesus'];
performance.mark("fila-start")
const fila = new FilaVetor<string>({ valores }); // ou new FilaVetor({ valores })
while (fila.tamanho <= max_items) {
  fila.enfileirar(`James ${fila.tamanho}`);
}

performance.mark("fila-end")
performance.measure("fila", "fila-start", "fila-end")