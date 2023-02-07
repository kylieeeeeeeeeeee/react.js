import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title=" About" />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>Unang gabi niya ko nakasama pagngiti
            Sabi niya madami ka'ng babae oy hindi ah
            Kasi sa ngayon ikaw ang gusto kong makita
            Habang merong alak saking baso'ng malamig ah
            Masaya pero pano kung wala ko'ng kaya
            Tulad ng kasama mo'ng iba
            'Wag ka padin sana mawala
            Yung larawan mo tumatakbo hanggang sa panaginip
            Alaala na naglalaro sa malikot na isip
            May ibang nasa harap na
            Ba't ikaw ang madalas naaalala pag wasak na'ko
            Pwede bang sakin ka nalang ma
            Sana 'wag ka magsasawang maalala
            Kung ano yung ating nagawa sa
            Unang araw mo ko nakilala</p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
