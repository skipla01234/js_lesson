let points = []

for (let i = 0; i < 10000; i++) {
  points.push([i, i+1, i+2])
}

// 一時的に代入用に変数を用意
let tmp = []

console.time('forEach')
points.forEach((val, i, a) => {
  tmp.push([i, val])
})
console.timeEnd('forEach')

tmp = []
console.time('for in')
for (let i in points) {
  tmp.push([i, points[i]])
}
console.timeEnd('for in')

tmp = []
console.time('for')
for (let i = 0; i < points.length; i++) {
  tmp.push([i, points[i]])
}
console.timeEnd('for')


tmp = []
console.time('for of')
for (let val of points) {
  tmp.push([val])
}
console.timeEnd('for of')

tmp = []
console.time('for of + entries')
for (let [i, val] of points.entries()) {
  tmp.push([i, val])
}
console.timeEnd('for of + entries')
