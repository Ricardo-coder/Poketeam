/**
 * The `Logo` component renders the logo of the application.
 * It consists of two text elements "Poké" and "Team" with a Pokéball image in between.
 *
 * @returns {JSX.Element} The rendered logo component.
 */
import { Section, Span } from '@/components/fabrics'
import Image from 'next/image'
import { BRAND_NAME } from '@/data/constants'

export function Logo(): JSX.Element {
  const [name1, name2] = BRAND_NAME.split(' ')

  return (
    <Section className="flex items-center justify-center">
      <Span className="text-3xl md:text-5xl font-display -mr-5 z-10 text-yellow text-shadow-lg shadow-blue">
        {name1}
      </Span>
      <Image
        className="z-0 w-16 md:w-24"
        src="/svg/pokeball.svg"
        alt="Logo"
        width={90}
        height={90}
      />
      <Span className="text-3xl md:text-5xl font-display -ml-5 z-10 text-red text-shadow-lg shadow-yellow">
        {name2}
      </Span>
    </Section>
  )
}
