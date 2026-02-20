export function getTodayMessage(): string {
  const day = new Date().getDay();
  let todayMessage = "";

  switch (day) {
    case 1:
      todayMessage = "Hoy lunes: Misterios Gozosos";
      break;
    case 2:
      todayMessage = "Hoy martes: Misterios Dolorosos";
      break;
    case 3:
      todayMessage = "Hoy miércoles: Misterios Gloriosos";
      break;
    case 4:
      todayMessage = "Hoy jueves: Misterios Luminosos";
      break;
    case 5:
      todayMessage = "Hoy viernes: Misterios Dolorosos";
      break;
    case 6:
      todayMessage = "Hoy sábado: Misterios Gozosos";
      break;
    case 0:
    default:
      todayMessage = "Hoy domingo: Misterios Gloriosos";
      break;
  }

  return todayMessage;
}
