export const getDayOfWeek = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  };
  
  export const getFullDate = (date) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };
  
  export const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridiem = (hours >= 12) ? 'PM' : 'AM';
  
    hours = (hours % 12) || 12;
    hours = hours.toString().padStart(2, '0');
  
    return {
      timeString: `${hours}:${minutes}:${seconds} ${meridiem}`,
      dayOfWeek: getDayOfWeek(now.getDay()),
      fullDate: getFullDate(now)
    };
  };