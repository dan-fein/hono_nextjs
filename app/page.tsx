import { useEffect, useState } from 'react'
import Client from './client'

export default function Home() {

  return <div>
            <div>This message was received by calling the API:</div>

            <Client />
              
            </div>
}
