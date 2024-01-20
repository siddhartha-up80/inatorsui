import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const Testimonialcard = () => {
  return (
    <div className='w-full'>
      <section className="shadow-md">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Duo assum utroque appetere an
              </h2>
              <p className="">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="grid content-center gap-4">
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 rounded shadow-md">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                      height={200}
                      width={200}
                        src="https://source.unsplash.com/50x50/?girl?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm ">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonialcard