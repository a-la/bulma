import bulma from '../src'

(async () => {
  const res = await bulma({
    text: 'example',
  })
  console.log(res)
})()