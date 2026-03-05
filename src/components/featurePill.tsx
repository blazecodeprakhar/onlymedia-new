import { JSX } from "react"

function FeaturePill({icon, text}: {icon: JSX.Element, text: string}) {
    return (
        <div className='py-3 px-4 justify-center flex items-center gap-2 rounded-full border border-stroke'>
            {icon}
            <p className="text-body-normal text-neutral-30">{text}</p>
        </div>
    )
}

export default FeaturePill
