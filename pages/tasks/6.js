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
  do {
    x = Math.trunc(Math.random() * 100) + 1
    y = 9
  } while (NOK(x, y) === x * y)
  return (
    <Layout>
      <h1>Задание 6</h1>
      <p>
        Назовите наименьшее натуральное трехзначное число, кратное {x} и {y}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer % x === 0 && answer % y === 0 && answer > 99 && answer <1000){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}