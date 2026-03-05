/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

function ReviewCard({ perfilImage, name, career, testimonial }: { perfilImage: string, name: string, career: string, testimonial: string }) {
  return (
    <div className='review-card'>
        <p className='text-body-large font-medium'>"{testimonial}"</p>

        <div className='user-info'>
            <Image src={perfilImage} height={100} width={100} alt={name} className='object-cover object-center size-13 rounded-full border border-beige-0'/>
            <div className='flex flex-col gap-0.5'>
                <p className='text-body-normal font-medium'>{name}</p>
                <p className='text-body-small'>{career}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard
