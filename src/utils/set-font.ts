// iphone 6/7/8 尺寸为375
const basis = 37.5

function setRem() {
  const width = document.documentElement.clientWidth || document.body.clientWidth
  const size = width / 375
  // 设计稿为750 最高两倍图
  document.documentElement.style.fontSize = (basis * Math.min(size, 2)) + 'px'
}

setRem()

let wait: NodeJS.Timeout
window.onresize = () => {
  if (wait) {
    clearTimeout(wait)
  } else {
    wait = setTimeout(() => {
      setRem()
    }, 100)
  }
}


export {}
