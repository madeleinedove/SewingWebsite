"use client"

import { generateClient } from 'aws-amplify/api';
import * as queries from '../../src/graphql/queries'

const client = generateClient();
const temp = await client.graphql({ query: queries.getFabric })

export default function Fabric() {


  console.log(temp)

  return <h1>Hello world</h1>
}
