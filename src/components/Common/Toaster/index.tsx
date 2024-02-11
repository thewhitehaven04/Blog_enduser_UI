import { Toast } from 'Components/Common/Toast'
import { useToaster } from 'Hooks/toaster'
import * as SC from './styles'

export function Toaster(): JSX.Element {
  const { queue, dismissToast } = useToaster()

  return (
    <SC.ToasterContainer>
      {queue.map((toast, index) => (
        <Toast key={index} instance={toast} dismiss={dismissToast} />
      ))}
    </SC.ToasterContainer>
  )
}
