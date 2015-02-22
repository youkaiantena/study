# this is comment.

###
this is comments
that is comment.
###

name = 'youkaiantena'

'#{name}'
"my name is #{name}"

text = """
  aaa
  #{'bbb'}
  ccc
"""

###
function arguments test
###
fill = (container, liquid = 'coffee') ->
  "Filling the #{container} with #{liquid}..."

fill2 = (container, liquid = 'coffee' if liquid) ->
  "Filling the #{container} with #{liquid}..."

fill3 = (container, liquid = 'coffee' if liquid?) ->
  "Filling the #{container} with #{liquid}..."

###
array test
###
array = [1, 2, 3]
array2 = [
  1
  2
  3
]
array3 = [
  1
2
    3
]

[1..3]

[0...3]

###
array slice test
###

arr = [0..3]
for i in [0...arr.length]
  console.log i

arr2 = ['a', 'b', 'c', 'd', 'e']
arr2[1..3]
arr2[3..]

###
object test
###
obj = a: 1, b: 2, c: 3
obj2 =
  a: 4
  b: 5
  c: 6
  d: 7, e: 8

f0 = -> func
  a: 1
  b: 2

###
object on scope
###
a = 3
b = 2

obj = {a, b, c: 1}

f = ->
  @a = 3
  @b = 2

  obj = {@a, @b, c: 1}

###
?
###
a1 = ->
  console.log _a = null ? true
  _a
b1 = ->
  console.log _b = undefined ? true
  _b
c1 = ->
  console.log _c = {} ? true
  _c
d1 = ->
  console.log _d = false ? {}
  _d

###
console.log a1()
console.log b1()
console.log c1()
console.log d1()
###

f1 = ({a, b, c}) -> b
console.log "f1 #{f1 {a: 1, b: 2, c: 3}}"

f2 = ({a, b, c} = {}) -> a
console.log "f2 #{f2 {a: 1, b: 2, c: 3}}"
console.log "f2_2 #{f2()}"

class A
  @method: ->
    console.log '@method called'

A.method()

class B
  method: ->
    console.log 'method called'

B.prototype.method()
