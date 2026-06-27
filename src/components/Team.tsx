import Image from 'next/image'

export default function Team(){
  const cofounders = [
    {name: 'Loved', role: 'Co-founder', img: '/images/cofounder .png'},
  ]
  
  const teamMembers = [
    {name: 'Enoch Suleiman', role: 'Lead A1.onomist', department: 'Agriculture', img: '/images/team1.jpg'},
    {name: 'teams', role: 'Product Management', department: 'Production', img: '/images/oshanodes 6.jpg'},
  ]

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold">Our Team & Supporters</h2>

      <div className="mt-8 grid gap-8 md:grid-cols-3 items-start">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold">Funder</h3>
          <div className="mt-4 flex flex-col items-center text-center">
            <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-100">
              <Image src="/images/founder .png" alt="Funder" width={176} height={176} className="object-cover" />
            </div>
            <p className="mt-4 font-semibold">FABIAN ORKA</p>
            <p className="text-sm text-slate-600">founder Oshanodes</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold">Co-founders</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {cofounders.map((c) => (
              <div key={c.name} className="flex items-center gap-4 bg-white p-4 rounded shadow">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <Image src={c.img} alt={c.name} width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-slate-600">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold">Team Members</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image src={member.img} alt={member.name} width={64} height={64} className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-slate-600">{member.role}</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">{member.department}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
