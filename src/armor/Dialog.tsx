import { useRef, MouseEvent, ReactNode } from "react";

import useDelayUnmount from "../helpers/useDelayUnmount";

import Close from "../svg/Close";

import animate, { ANIMATION_TYPES, ANIMATION_STYLES } from "../helpers/animate";
import styled from "@emotion/styled";

type Props = {
  isDialogOpen: boolean;
  closeDialog: () => void;
  title?: string;
  children: ReactNode;
};

const Dialog = ({ isDialogOpen, closeDialog, title, children }: Props): any => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const delayTimeWhenUnmount = !isDialogOpen ? 200 : 0;
  const showComponent = useDelayUnmount(isDialogOpen, delayTimeWhenUnmount);

  function handelClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (drawerRef.current && drawerRef.current.className === target.className) {
      close();
    }
  }

  function close() {
    closeDialog();
  }

  return (
    showComponent && (
      <DialogContainer
        ref={drawerRef}
        onClick={handelClick}
        style={
          isDialogOpen
            ? ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_IN)
            : ANIMATION_STYLES.get(ANIMATION_TYPES.FADE_OUT)
        }
      >
        <div className="dialog">
          <div className="content">
            <div className="content-header">
              <h6>{title}</h6>

              <Close size={16} onPress={close} />
            </div>
            <div className="content-body">{children}</div>
          </div>
        </div>
      </DialogContainer>
    )
  );
};

const DialogContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);

  ${animate(ANIMATION_TYPES.FADE_IN, "opacity", 0, 1)};

  ${animate(ANIMATION_TYPES.FADE_OUT, "opacity", 1, 0)};

  .dialog {
    overflow-x: hidden;
    width: 400px;

    background-color: #fff;

    box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12),
      0px 11px 15px -7px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    transition: opacity 200ms ease-in-out;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content-header,
  .content-body {
    padding: 0.5rem 1rem;
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 1rem;

    background-color: #f3f3f3;
  }
  .content-body {
    padding-top: 1.3rem;
    padding-bottom: 2rem;
  }
`;

export default Dialog;
