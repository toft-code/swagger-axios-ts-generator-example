import { generate } from '@toft-code/swagger-axios-ts-generator'

generate({
  out: './testServices',
  url:
    'https://raw.githubusercontent.com/toft-code/swagger-axios-ts-generator/master/test.json',
  operationIdForeach: (operationId: string) => {
    return operationId.match(/[a-zA-Z]+/g)?.join('') ?? operationId
  },
})
