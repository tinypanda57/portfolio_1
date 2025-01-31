import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "Dog", page: "/openapis" },
  { name: "Boarders", page: "/boards" },
  { name: "Product", page: "/markets" },
  { name: "Mypage", page: "/mypages" },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
