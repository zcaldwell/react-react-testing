import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const headImage = screen.getByAltText(/alchemy/i)

  const meet = await screen.findByText(/Vonta/i)

  expect(meet).toBeInTheDocument()
  expect(headImage).toBeInTheDocument()
})
