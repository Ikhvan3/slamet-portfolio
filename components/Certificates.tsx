import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <section id='certificates' className='py-28'>
      <div className='container-custom'>
        <h2 className='text-4xl font-bold mb-12'>
          Certificates
        </h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className='bg-slate-900 border border-slate-800 p-6 rounded-3xl'
            >
              <p>{certificate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}