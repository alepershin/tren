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
  let a = Math.trunc(Math.random() * 11) + 1
  let x = a * 3
  let y = a * 2
  return (
    <Layout>
      <h1>Задание 1</h1>
      <p>
        Приведите пример натурального числа, большего {x}, которое делится на {x} и не делится на {y}. <i>В ответ запишите двузначное число.</i>
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer > x && answer % x ==0 && answer % y !=0 && answer < 100){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}