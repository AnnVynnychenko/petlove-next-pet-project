const DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;

export const formatDateSlash = date => {
  if (!date) return '';

  const dateObj = new Date(date);
  if (Number.isNaN(dateObj.getTime())) return date;

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObj);
};

export const formatDateDot = date => {
  if (!date) return '';

  if (typeof date === 'string') {
    const match = date.trim().match(DATE_REGEX);

    if (match) {
      const [, year, month, day] = match;
      return `${day}.${month}.${year}`;
    }
  }

  return formatDateUTC(date).replace(/\//g, '.');
};
