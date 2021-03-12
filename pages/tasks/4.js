import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

function NOD(a, b){
  while (a != b){
      if (a > b){
          a -= b;
      } else {
          b -= a;
      }
  }
  return (a);
}

function NOK(a, b){
  return (Math.abs(a * b)/NOD(a, b));
}

export default function Page () {
  let x = 0
  let y = 0
  let z = 0
  do {
    y = (Math.trunc(Math.random() * 9) + 1) * 10
    z = (Math.trunc(Math.random() * 9) + 1) * 10
    x = 100
    while ((x % y != 0 || x % z != 0) && x < 1000){
      x = x + 1
    }
  } while (y == z || x > 900)
  while (x % 100 != 0){
    x = x + 1
  }
  x = x + 1
  return (
    <Layout>
      <h1>Задание 4</h1>
      <p>
        Приведите пример натурального трехзначного числа, меньшего {x}, которое делится на {y} и {z}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer % y == 0 && answer % z == 0 && answer < x && answer > 99){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}