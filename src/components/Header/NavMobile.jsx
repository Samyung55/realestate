import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, VStack, Input, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const NavMobile = () => {
    // useDisclosure() returns an object with properties isOpen, onOpen, and onClose
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(); // initialize a ref to be used as the finalFocusRef in the Drawer

    return (
        <>
        <IconButton variant='ghost'
        icon={<FiMenu fontSize='1.35rem' />}
        aria-label='Open Menu'
        onClick={onOpen} ref={btnRef} // set the ref of the IconButton to btnRef
        />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <Center>
                    <DrawerHeader>Menu</DrawerHeader> 
                </Center>
                <DrawerBody px='14' mt='4'>
                    <VStack as='nav' spacing='8' alignItems='left'>
                        {
                            ['Home',  'Features', 'About Us'].map((item)=>(
                                <Link to={item === 'Features' ? '/features' : `/${item.toLowerCase()}`} key={item}>
                                <Button variant='link' key={item}>{item}</Button> // map over an array of menu items and create a Button for each item
                            </Link>
                            ))
                        }
                        <Button size='sm' variant='solid'>Contact</Button> // add a Contact button
                        <Button size='sm' variant='outline'>Sign Up</Button> // add a Sign Up button
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default NavMobile;
