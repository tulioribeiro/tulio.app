import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  const contactLinks = [
    {
      id: 1,
      name: 'github',
      url: 'https://github.com/tulioribeiro/'
    },
    {
      id: 2,
      name: 'linkedin',
      url: 'https://linkedin.com/in/tuliocribeiro/'
    },
    {
      id: 3,
      name: 'twitter',
      url: 'https://twitter.com/tuliocribeiro'
    },
    {
      id: 4,
      name: 'email',
      url: 'mailto:tuliocribeiro@gmail.com'
    }
  ]

  return (
    <>
      <Head>
        <title>@tulioribeiro</title>
      </Head>
      <TulioApp>
        <ContactLinks>
          {contactLinks.map(link => (
            <ContactLink key={link.id} href={link.url}>
              {link.name}
            </ContactLink>
          ))}
        </ContactLinks>
      </TulioApp>
    </>
  )
}

const TulioApp = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ContactLink = styled.a`
  color: #0077b5;
  padding: 6px 10px;
  position: relative;
  margin: 4px;
  transition: color .45s;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    background: #0077b5;
    transition: height .15s;
    z-index: -1;
    border-radius: 4px;
  }

  &:hover {
    color: #ffffff;

    &::before {
      height: 100%;
    }
  }
`
