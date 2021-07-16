export const validate_date = (date) => {
    const varDate = new Date(date);
    const today = new Date();

    if( varDate > today ) {
      return false;
    }

    return true;
}

export const getUserData = () => {
  const userData = localStorage.getItem('userData')
  if (userData && userData.length) {
      return JSON.parse(userData)
  } else {
      return []
  }
}