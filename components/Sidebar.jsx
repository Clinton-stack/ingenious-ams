"use client";
import {
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,

} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  FaUserSecret,
  FaUsers,
  FaUserAlt,
} from "react-icons/fa";
import {
  RiUserSettingsLine,
} from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const itemStyles = {
    color: "white",
    fontSize: "1em",
    padding: "5px",
    bg: "#78B8EA",
    ":hover": {
      color: "white",
      bg: "#597086",
    },
  };
  
  const activeItemStyles = {
    ...itemStyles,
    color: '#fff',
    bg: '#597086',
  }



const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sidebarRef = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    // add event listener to the window object to listen for clicks outside the sidebar
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleForms = (event) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
  };

  const getLinkStyle = (path) => {
    return pathname === path ? activeItemStyles : itemStyles;
  }

  return (
    <div ref={sidebarRef}>
      {isVisible ? (
        <Flex alignItems="center" justifyContent="right">
          <IconButton
            _hover={{ color: "#ABCDEF", backgroundColor: "white" }}
            variant=""
            color="white"
            fontSize="1.5em"
            aria-label="Hamburger Menu"
            icon={<CgMenuMotion />}
            textAlign="right"
            onClick={(event) => toggleForms(event)}
          />
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center">
          <IconButton
            _hover={{ color: "#ABCDEF", backgroundColor: "white" }}
            variant=""
            fontSize="1.5em"
            color="white"
            aria-label="Hamburger Menu"
            icon={<HamburgerIcon />}
            textAlign="right"
            onClick={(event) => toggleForms(event)}
          />
        </Flex>
      )}

      {isVisible ? (
        <List as="nav" spacing={0.5}>
          <ListItem sx={getLinkStyle('/')}>
            <NextLink href="/" className="sideLinks mRight">
              <Image
                src="/icons/dashboard.svg"
                mr="20px"
                boxSize="16px"
                alt="dashboard icon"
              />
              Dashboard
            </NextLink>
          </ListItem>
          <ListItem sx={getLinkStyle('/users')}>
            <NextLink href="/users" className="sideLinks mRight">
              <ListIcon as={FaUserAlt} mr="20px" />
              Users
            </NextLink>
          </ListItem>
          <ListItem sx={getLinkStyle('/assets')}>
            <NextLink href="/assets" className="sideLinks mRight">
              <Image
                src="/icons/assets-icon.svg"
                mr="20px"
                boxSize="16px"
                alt="assets icon"
              />
              Assets
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/assets-managers')}>
            <NextLink href="/assets-managers" className="sideLinks mRight">
              <Image
                src="/icons/assets-manager-icon.svg"
                mr="20px"
                boxSize="16px"
                alt="assets manager icon"
              />
              Assets Managers
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/collaborators')}>
            <NextLink href="/collaborators" className="sideLinks mRight">
              <Image
                src="/icons/collaborators-icon.svg"
                mr="20px"
                boxSize="16px"
                alt="collaborators icon"
              />
              Collaborators
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/faciltymanagers')}>
            <NextLink href="/facilitymanagers" className="sideLinks mRight">
              <ListIcon as={FaUserSecret} mr="20px" />
              Facility Managers
            </NextLink>
          </ListItem>
          <ListItem sx={getLinkStyle('/consumers')}>
            <NextLink href="/consumers" className="sideLinks mRight">
              <ListIcon as={FaUsers} mr="20px" />
              Consumers
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/notifications')}>
            <NextLink href="/notifications" className="sideLinks mRight">
              <ListIcon as={IoIosNotifications} mr="20px" />
              Notifcations
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/account')}>
            <NextLink href="/account" className="sideLinks mRight">
              <ListIcon as={BsCurrencyDollar} mr="20px" />
              Accounts
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/profile')}>
            <NextLink href="/profile" className="sideLinks mRight">
              <ListIcon as={RiUserSettingsLine} mr="20px" />
              Profile Settings
            </NextLink>
          </ListItem>
        </List>
      ) : (
        <List as="nav" spacing={0.5}>
          <ListItem sx={getLinkStyle('/')}>
            <NextLink href="/" className="sideLinks">
              <Image
                src="/icons/dashboard.svg"
                className="iconStyles"
                alt="dasboard icon"
              />
            </NextLink>
          </ListItem>
          <ListItem sx={getLinkStyle('/users')}>
            <NextLink href="/users" className="sideLinks">
              <ListIcon as={FaUserAlt} className="iconStyles" />
            </NextLink>
          </ListItem>
          <ListItem sx={getLinkStyle('/assets')}>
            <NextLink href="/assets" className="sideLinks">
              <Image
                src="/icons/assets-icon.svg"
                className="iconStyles"
                alt="assest icon"
              />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/assets-managers')}>
            <NextLink href="/asset-managers" className="sideLinks">
              <Image
                src="/icons/assets-manager-icon.svg"
                className="iconStyles"
                alt="assets manager icon"
              />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/collaborators')}>
            <NextLink href="/collaborators" className="sideLinks">
              <Image
                src="/icons/collaborators-icon.svg"
                className="iconStyles"
                alt="collaborators icon"
              />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/faciltymanagers')}>
            <NextLink href="/facility-managers" className="sideLinks">
              <ListIcon as={FaUserSecret} className="iconStyles" />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/consumers')}>
            <NextLink href="/consumers" className="sideLinks">
              <ListIcon as={FaUsers} className="iconStyles" />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/notifications')}>
            <NextLink href="/notifications" className="sideLinks">
              <ListIcon as={IoIosNotifications} className="iconStyles" />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/account')}>
            <NextLink href="/account" className="sideLinks">
              <ListIcon as={BsCurrencyDollar} className="iconStyles" />
            </NextLink>
          </ListItem>

          <ListItem sx={getLinkStyle('/profile')}>
            <NextLink href="/profile" className="sideLinks">
              <ListIcon as={RiUserSettingsLine} className="iconStyles" />
            </NextLink>
          </ListItem>
        </List>
      )}
    </div>
  );
};



export default Sidebar;
