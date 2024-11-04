import { Section, Spam } from '@/components/fabrics'
import Image from 'next/image'

export function Logo() {
  return (
    <Section className="flex items-center justify-center">
      <Spam className="text-5xl font-display -mr-4 z-10 text-yellow text-shadow-lg shadow-blue">
        Poké
      </Spam>
      <Image
        className="z-0"
        src="/svg/pokeball.svg"
        alt="Logo"
        width={80}
        height={80}
      />
      <Spam className="text-5xl font-display -ml-4 z-10 text-blue text-shadow-lg shadow-yellow">
        Team
      </Spam>
    </Section>
  )
}
