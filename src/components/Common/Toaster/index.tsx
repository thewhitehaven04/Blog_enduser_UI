import { Toast } from 'Components/Common/Toast'
import * as SC from './styles'
import { useToaster } from 'Components/Common/Toaster/hooks/toaster'

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
