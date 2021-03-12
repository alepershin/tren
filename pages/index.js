import Layout from '../components/layout'
import Router from 'next/router'

const n = 10

export default function Page () {
  let k = Math.trunc(Math.random() * n) + 1  //Номер выбранного задания
  return (
    <Layout>
      <h1>Тренажер по математике. 5 класс</h1>
      <p>
        Для начала тренировки нажмите на кнопку
      </p>
      <button type="button" onClick={() => Router.push('/tasks/' + k)}>Пуск</button>
    </Layout>
  )
}