import jwt from "jsonwebtoken";

const user = {
    id: "20",
    name: "Guilherme",
    username: "guilherme@gmail.com",
    password: "123457"
}

const secret = "spaodjo2831489di"
const token = jwt.sign({ id: user.id, username: user.username}, secret, { expiresIn: 60 * 60 * 24 * 30 })


console.log(token);


// const validData = jwt.verify(token, secret)

// console.log(validData);
