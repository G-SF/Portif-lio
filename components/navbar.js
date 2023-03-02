import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
  IoMailUnreadOutline,
  IoHome,
  IoFolderOpen,
  IoList,
  IoClose
} from 'react-icons/io5'
import { useState } from 'react'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        borderRadius={10}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        display="inline-flex"
        alignItems="center"
        style={{ gap: 4 }}
        pl={2}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const [isOpen, setOpen] = useState(false)
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#22223E')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Menu matchWidth={true} arrowPadding={5}>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button}>
                {isOpen ? <IoClose size={20} /> : <IoList size={20} />}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <LinkItem href="/" path={path}>
                    <IoHome />
                    Portfolio
                  </LinkItem>
                </MenuItem>
                <MenuItem>
                  <LinkItem href="/works" path={path}>
                    <IoFolderOpen />
                    Projects
                  </LinkItem>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href="mailto:gabrielsmangor@gmail.com"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoMailUnreadOutline />
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
