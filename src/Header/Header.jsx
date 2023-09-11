import { Link } from "react-router-dom";
import { Box,  List, Container, Button} from '@chakra-ui/react'
import { ListItem } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
export default function Header() {
    return (
        <Box  as="header" style={{ background: '#fff',boxShadow: '2px 1px 5px 1px rgba(0,0,0,0.4)'}}>
            <Container maxW='1440px'  centerContent>
                <Flex  style={{  width: '100%',maxWidth:'100%',height: '60px',justifyContent: 'space-between',alignItems: 'center'}}>
                        <Link to="/"><img src="./Logo.png" alt="" /></Link>
                        <Flex style={{ width: '40%', maxWidth: '100%', height: '60px', justifyContent: 'space-between', alignItems: 'center', gap:'20px' }}>
                            <nav className="header__nav" style={{ width: '100%' }}>
                                <List variant='headerMenu' >
                                    <ListItem><Link to="/">Home</Link></ListItem>
                                    <ListItem><Link to="/services">Blog</Link></ListItem>
                                    <ListItem><Link to="/about">About</Link></ListItem>
                                    <ListItem><Link to="/extrasales">About</Link></ListItem>
                                </List>
                            </nav>
                            <Button variant='baseStyle'>Get you free guide now</Button>
                        </Flex>
                </Flex>
            </Container>
        </Box>
    )
}