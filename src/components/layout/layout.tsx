import Link from "next/link";

import {
  StyleProvider,
  ThemePicker,
  Button,
  Text,
  Block,
  Link as VLink,
  View,
  Logo,
} from "vcc-ui";

import { FavIcons } from "@volvo-cars/favicons/react";
import { Head } from "next/document";

type Props = { children: React.ReactNode };
export const Layout = ({ children }: Props) => {
  return (
    <div>
      <StyleProvider>
        <ThemePicker variant="light">
          <View padding={6}>
            <Logo type="spreadmark" height={8} />
          </View>

          <div>{children}</div>
          <Link href={"/"} passHref>
            <VLink arrow="right">Visit Home</VLink>
          </Link>
        </ThemePicker>
      </StyleProvider>
    </div>
  );
};
