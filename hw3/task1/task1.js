// ===========================ЗАДАНИЕ-1===========================================

const clients1 = [
  "Гилберт",
  "Сальваторе",
  "Пирс",
  "Соммерс",
  "Форбс",
  "Донован",
  "Беннет",
];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

console.log([...new Set([...clients1, ...clients2])]);
