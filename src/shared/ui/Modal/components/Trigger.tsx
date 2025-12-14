import { Button } from "~/shared/ui/Button";
import { useModalContext } from "..";

export interface ModalTriggerProps {
  children?: React.ReactNode;
}

export const ModalTrigger: React.FC<ModalTriggerProps> = ({ children }) => {
  const { toggle } = useModalContext();
  return (
    <Button 
      variant="outline" 
      size="medium" 
      onClick={toggle}
    >
      {children}
    </Button>
  )
};