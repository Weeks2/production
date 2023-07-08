login() {
curl -X POST -H "Content-Type: application/json" -d '{
  "email": "user@localhost.com",
  "password": "000000",
  "returnSecureToken": true
}' "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54"

}

create() {
curl -X POST -H "Content-Type: application/json" -d '{
  "displayName": "mi_usuario",
  "email": "usuario@example.com",
  "password": "123456",
  "returnSecureToken": true
}' "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54"
}

checkEmail() {
    curl -X POST -H "Content-Type: application/json" -d '{
  "email": "user@localhost.com"
}' "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54"

}

validate() {
    curl -X POST -H "Content-Type: application/json" -d '{
  "idToken": "TU_TOKEN_JWT"
}' "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCNBJ7XjaLkMQgh16vpt5d2obbP8Z-Th54"

}
checkEmail
#create
