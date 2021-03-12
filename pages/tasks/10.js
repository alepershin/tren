import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  let a = Math.trunc(Math.random() * 1000000)
  let b = Math.trunc(Math.random() * 10000)
  return (
    <Layout>
      <h1>Задание 10</h1>
      <p>
        Напишите число, большее {a} на {b}.
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer === a + b){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}