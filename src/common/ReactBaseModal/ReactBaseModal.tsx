import { Dialog, DialogTrigger, Modal } from "react-aria-components";

import { ReactElement, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { CloseIcon } from "../../icons/CloseIcon/CloseIcon";

import { modalCloseButtonClass } from "./styles";
import "./index.css";

interface ReactBaseModalProps {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
}

const ReactBaseModal: React.FC<ReactBaseModalProps> = ({
  children,
  isOpen,
  onOpenChange,
}): ReactElement => {
  return (
    <DialogTrigger>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <Dialog className="outline-none w-full z-20">
          {({ close }) => (
            <div className="flex flex-col">
              <button className={modalCloseButtonClass} onClick={close}>
                <CloseIcon height={32} width={32} />
              </button>
              {children}
            </div>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
export default observer(ReactBaseModal);
