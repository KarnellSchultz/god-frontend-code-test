import { TabNav, TabNavItem } from "vcc-ui";
import { BodyTypeKeysType, BodyTypes } from "../../types";

type NavProps = {
  handleClick: (key: BodyTypeKeysType) => void;
  filterKey: BodyTypeKeysType;
};
export const Nav = ({ handleClick, filterKey }: NavProps) => {
  return (
    <TabNav
      backButton={{
        text: "Volvo Cars",
        href: "/",
        clickHandler: () => {
          handleClick(BodyTypes.ALL);
        },
      }}
    >
      <TabNavItem
        isActive={filterKey === BodyTypes.ALL}
        onClick={() => handleClick(BodyTypes.ALL)}
      >
        All
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypes.SUV}
        onClick={() => handleClick(BodyTypes.SUV)}
      >
        SUV
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypes.ESTATE}
        onClick={() => handleClick(BodyTypes.ESTATE)}
      >
        Estate
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypes.SEDAN}
        onClick={() => handleClick(BodyTypes.SEDAN)}
      >
        Sedan
      </TabNavItem>
    </TabNav>
  );
};
