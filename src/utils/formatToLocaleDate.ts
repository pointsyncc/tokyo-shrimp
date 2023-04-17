/**
 * 
 * @param date 
 * @returns 
 */
export const formatToLocaleDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  };