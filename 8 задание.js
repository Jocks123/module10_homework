let truth = new Map();
truth.set("Небо", "Голубое"); 
truth.set("Путин", "Президент"); 
truth.set("Зенит", "Чемпион"); 
for (let pair of truth.entries()) {
  console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
}