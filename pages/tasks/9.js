import Layout from '../../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  var str = String(Math.trunc(Math.random() * 1000000))
  let x = 0
  for (let i = 0; i < 10; i++){
    if (str.indexOf(String(i)) > -1){
      x++
    }
  }
  return (
    <Layout>
      <h1>Задание 9</h1>
      <p>
        Сколько уникальных цифр использовано для записи числа {str}?
      </p>
      <input type="text"></input>
      <button type="button" onClick={() => {
        let answer = parseInt(document.querySelector('input').value)
        if(answer === x){
          let k = Math.trunc(Math.random() * n) + 1
          document.querySelector('input').value = ""
          Router.push('/tasks/' + k)
        }}}>Отправить</button>
    </Layout>
  )
}