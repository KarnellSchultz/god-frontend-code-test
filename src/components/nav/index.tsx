import React from "react";
import { TabNav, TabNavItem } from "vcc-ui";
import { BodyTypeFilterKeys } from "../../types";

type NavProps = {
  setFilterKey: React.Dispatch<
    React.SetStateAction<"SUV" | "SEDAN" | "ALL" | "ESTATE">
  >;
  filterKey: keyof typeof BodyTypeFilterKeys;
};
export const Nav = ({ setFilterKey, filterKey }: NavProps) => {
  return (
    <TabNav
      backButton={{
        text: "Volvo Cars",
        href: "/",
        clickHandler: () => {
          setFilterKey("ALL");
        },
      }}
    >
      <TabNavItem
        isActive={filterKey === BodyTypeFilterKeys.ALL}
        onClick={() => setFilterKey("ALL")}
      >
        All
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypeFilterKeys.ESTATE}
        onClick={() => setFilterKey("ESTATE")}
      >
        Estate
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypeFilterKeys.SEDAN}
        onClick={() => setFilterKey("SEDAN")}
      >
        Sedan
      </TabNavItem>
      <TabNavItem
        isActive={filterKey === BodyTypeFilterKeys.SUV}
        onClick={() => setFilterKey("SUV")}
      >
        SUV
      </TabNavItem>
    </TabNav>
  );
};
