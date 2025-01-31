import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  Wrapper,
} from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>Mocha</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>Log In</InnerButton>
          <InnerButton>Sign Up</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
