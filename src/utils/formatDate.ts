// src/utils/formatDate.ts
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = d.getFullYear();

  const hours = String(d.getHours()).padStart(2, "0"); // 24-hour format
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
