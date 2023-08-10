//FUNCION - Verificar Fecha
export const validDate = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  const validateDate = regex.test(date);
  if (!validateDate) return false;
  const parts = date.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
};
