const validate_date = (date) => {
    const varDate = new Date(date);
    const today = new Date();

    if( varDate > today ) {
      return false;
    }

    return true;
}

export { validate_date };
