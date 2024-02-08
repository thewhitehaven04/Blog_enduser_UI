import { Toast } from 'Components/Common/Toast'
import { useToaster } from 'Hooks/toaster'

export function Toaster(): JSX.Element {
  const queue = useToaster()

  return (
    <>
      {queue.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </>
  )
}
