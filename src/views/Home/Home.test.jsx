import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const profileHeader = await screen.findByAltText('header')
  const image = screen.getByAltText('avatar')
  const profileName = screen.getByRole('heading', { name: 'Vonta' })
  const faveColor = screen.getByText(/crimson/i)
  const likes = screen.getByRole('list')
  const interestHead = screen.getByRole('heading', { name: /interests/i })
  const motto = screen.getByText(/res non verba/i)

  expect(profileHeader).toBeInTheDocument()
  expect(image).toBeInTheDocument()
  expect(profileName).toBeInTheDocument()
  expect(faveColor).toBeInTheDocument()
  expect(likes.children.length).toEqual(6)
  expect(interestHead).toBeInTheDocument()
  expect(motto).toBeInTheDocument()
})
