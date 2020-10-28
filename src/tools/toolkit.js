/* eslint-disable */
function getTodaysDate() {
  const today = new Date();
  const date =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return date;
}

const regExpr = (expr) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(expr);
};

function authenticate(json,history) {
  console.log(json);

  if ('token' in json) {
    let token = json.token;
    let user = json.user;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/');
  } else {
    console.error('Error:', json.text);
  }
}

function logout() {
  localStorage.removeItem('token');
  localStorage.setItem('user', '{}');
}

export { regExpr, getTodaysDate, authenticate, logout };
