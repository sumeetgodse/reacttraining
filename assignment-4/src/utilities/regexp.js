const nameRegexp = /^[a-zA-z]+([\s][a-zA-Z]+)*$/g;
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
const passwordRegexp = /^(?!^[.])(?!.*[.]$)(?!.*[.]{2})[\w!'`&=~%#/$*+\-^?{}|.]{1,64}$/g;
const dateRegexp = /^([0-9]{1,2})-([0-9]{1,2})-([0-9]{2,4})$/g;
const imgFormat = /(\.jpg|\.jpeg|\.png)$/i;

export { nameRegexp, emailRegexp, passwordRegexp, dateRegexp, imgFormat };
