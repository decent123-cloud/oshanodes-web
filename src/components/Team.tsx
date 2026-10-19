import Image from 'next/image'

export default function Team() {
  const founder = {
    name: 'Fabian Orkar',
    role: 'Founder Oshanodes',
    img: '/images/team/founder%20.png',
  }

  const cofounders = [
    { name: 'Loveth', role: 'Co-founder', img: '/images/team/cofounder%20.png' },
  ]

  const teamMembers = [
    { name: 'Favour Rapheal', role: 'Lead', department: 'Marketing', img: '/images/team/favour_rapheal_marketing_lead.jpg' },
    // { name: 'teams', role: 'Product Management', department: 'Production', img: '/images/brand/rice_farm.png' },
  ]

  return (
    <section id="team" className="scroll-mt-24 bg-white/75 py-16 md:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-kicker">The people behind the work</p>
          <h2 className="section-title text-4xl md:text-5xl">Meet our team.</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article className="group overflow-hidden rounded-[26px] bg-[#f0f4ee]">
            <div className="h-72 overflow-hidden">
              <Image src={founder.img} alt={founder.name} width={480} height={600} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" priority />
            </div>
            <div className="p-5">
              <p className="font-extrabold tracking-[-0.03em] text-[#16372c]">{founder.name}</p>
              <p className="mt-1 text-sm text-slate-600">{founder.role}</p>
            </div>
          </article>
          {cofounders.map((person) => (
            <article key={person.name} className="group overflow-hidden rounded-[26px] bg-[#f0f4ee]">
              <div className="h-72 overflow-hidden">
                <Image src={person.img} alt={person.name} width={480} height={600} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="font-extrabold tracking-[-0.03em] text-[#16372c]">{person.name}</p>
                <p className="mt-1 text-sm text-slate-600">{person.role}</p>
              </div>
            </article>
          ))}
          {teamMembers.map((member) => (
            <article key={member.name} className="group overflow-hidden rounded-[26px] bg-[#f0f4ee]">
              <div className="h-72 overflow-hidden">
                <Image src={member.img} alt={member.name} width={480} height={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="font-extrabold tracking-[-0.03em] text-[#16372c]">{member.name}</p>
                <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0f5c32]">{member.department}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
