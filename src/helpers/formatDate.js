export const formatDate = date => {
  if (!date) return '';

  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) return date;

  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObj);
};
