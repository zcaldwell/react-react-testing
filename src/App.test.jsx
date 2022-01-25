import { render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const headImage = screen.getByAltText(/alchemy/i)

  const name = await screen.findByText(/vonta/i)

  const banner = screen.getByRole('banner')

  expect(banner).toHaveStyle({
    background: 'var(--grey)',
  })

  expect(name).toBeInTheDocument()
  expect(headImage).toBeInTheDocument()
})
