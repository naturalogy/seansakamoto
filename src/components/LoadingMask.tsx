/**
 * LoadingMask component
 * Displays a fullscreen loading spinner and message.
 */

export function LoadingMask() {
  return (
    <div className='bg-base-200 fixed top-0 z-50 flex h-screen w-screen flex-wrap place-content-center'>
      <div className='text-center'>
        <span className='loading loading-ring loading-lg'></span>
        <span className='block'>Thanks for your patience.</span>
      </div>
    </div>
  )
}
