import React from 'react'
import RetroGrid from "@/components/ui/retro-grid";
import NumberTicker from "@/components/ui/number-ticker";

const ErrorComponent = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
        <div className='w-full h-20 flex gap-7 items-center justify-center'>
            <NumberTicker value={404} className="text-8xl font-bold font-poppins" />
            <h1 className='text-6xl font-bold font-poppins'>Page Not Found</h1>
        </div>
      <RetroGrid className='w-full h-full absolute' angle={0} />
    </div>
  )
}

export default ErrorComponent