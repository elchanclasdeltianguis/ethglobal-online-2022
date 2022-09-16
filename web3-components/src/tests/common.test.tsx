import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import ENSProfile from '../components/ENSProfile'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<ENSProfile profile={undefined} />)
  })
})
