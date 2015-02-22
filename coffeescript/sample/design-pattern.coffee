class Foo
  constructor: ({@a, @b, @c}) ->

foo = new Foo a: 1, b: 2, c: 3
console.log foo.b

class Parser
  parse: (content, {optionA, optionB} = {}) ->
    optionA ?= false
    optionB ?= false

    console.log "#{content} and options #{optionA} #{optionB}"

p = new Parser
p.parse 'this is it', optionA: 'zet', optionB: 'xy'

processWithSleep = (p, sleepTime) ->
  console.log p
  console.log sleepTime

processWithSleep2 = (p, sleepTime) =>
  console.log p
  console.log sleepTime
