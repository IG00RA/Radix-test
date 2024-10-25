import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const MobileMenu = ({ setOpen = false }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/chairs"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Chairs
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/beds"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Beds
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/cabinets"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Cabinets
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/tables"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Tables
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/dressers"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Dressers
            </NavLink>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            <NavLink
              to="/sofas"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Sofas
            </NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
