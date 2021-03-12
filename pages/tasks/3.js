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
  let y = Math.trunc(Math.random() * 11) + 1
  if (y % 2 == 0){
    y = y + 1
  }
  let z = y * 3
  let x = z * 2
  while (x % 10 != 0){
    x = x + 1
  }
  return (
    <Layout>
      <h1>Задание 3</h1>
      <p>
        Приведите пример натурального двузначного четного числа, меньшего {x}, которое делится на {y} и {z}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer % 2 == 0 && answer > 9 && answer < 100 && answer % z == 0){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}