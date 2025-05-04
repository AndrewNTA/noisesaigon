import React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Logo from "static/images/logo.png";

const MenuWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
});

const MenuLogoWrapper = styled('div')({
  cursor: 'pointer',
});

const MenuItemGroup = styled('div')({
  display: 'flex',
  gap: '24px',
});

const MenuItem = styled('div')({
  cursor: 'pointer',
  fontSize: '1.1rem',
  '&:hover': {
    color: '#1976d2',
  },
});

function Menu() {
  return (
    <MenuWrapper>
      <Link href="/" passHref>
        <MenuLogoWrapper>
          <Image src={Logo} alt="noisesaigon" width={150} height={40} />
        </MenuLogoWrapper>
      </Link>
      <MenuItemGroup>
        <Link href="/gigs" passHref>
          <MenuItem>Gigs</MenuItem>
        </Link>
        <Link href="/reads" passHref>
          <MenuItem>Reads</MenuItem>
        </Link>
        <Link href="/links" passHref>
          <MenuItem>Links</MenuItem>
        </Link>
      </MenuItemGroup>
    </MenuWrapper>
  );
}

export default Menu;
