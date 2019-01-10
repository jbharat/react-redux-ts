import * as React from 'react'
import * as enzyme from 'enzyme'
import Hello from '../Hello'

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Typescript" />)
  expect(hello.find('.greeting').text()).toEqual('Hello Typescript!')
})

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Typescript" enthusiasmLevel={1} />)
  expect(hello.find('.greeting').text()).toEqual('Hello Typescript!')
})

it('renders the correct text with an explicit enthusiasm of 5', () => {
  const hello = enzyme.shallow(<Hello name="Typescript" enthusiasmLevel={5} />)
  expect(hello.find('.greeting').text()).toEqual('Hello Typescript!!!!!')
})

it('throws when the enthusaism level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Typescript" enthusiasmLevel={0} />)
  }).toThrow()
})

it('throws when the enthusaism level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Typescript" enthusiasmLevel={-1} />)
  }).toThrow()
})
