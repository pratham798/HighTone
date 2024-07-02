import React from 'react';

const LoadingState = () => {
  return (
    <section className={`flex flex-row gap-5 cursor-pointer p-3 bg-white bg-opacity-10 rounded-md -ml-3 animate-pulse`}>
      <section className='bg-slate-300 bg-opacity-10 rounded-3xl w-12 h-12 animate-pulse flex-shrink-0' />
      <section>
        <header className='bg-slate-300 bg-opacity-10 h-4 rounded-xl w-40 mb-4 animate-pulse'/>
        <header className='bg-slate-300  bg-opacity-10 h-3 w-32 rounded-xl animate-pulse'/>
      </section>
      <span className='ml-auto bg-slate-300  bg-opacity-10 my-auto h-4 w-6 rounded-xl animate-pulse'/>
    </section>
  )
}

export default LoadingState;
