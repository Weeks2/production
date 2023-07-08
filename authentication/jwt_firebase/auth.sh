login_() {
  curl -X POST -H "Content-Type: application/json" -d '{"email": "user@localhost.com", "password": "000000"}' -o token.txt http://localhost:8083/token
}

fetch() {
curl -X GET -H "Authorization: Bearer $(cat token.txt)" "http://localhost:8083/api/todos"
}
fetch() {
curl -X GET -H "Authorization: Bearer $(cat token.txt)" "https://jwt-firebase.onrender.com/api/todos"
}

#login_
fetch
