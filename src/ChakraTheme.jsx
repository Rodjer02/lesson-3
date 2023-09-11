import { extendTheme } from '@chakra-ui/react'

const defaultChakra = extendTheme({
    components: {
        Button: {
            variants: {
                baseStyle: {
                    width: '100%',
                    bg: '#20AD96',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '14px',
                    color: '#fff',
                    padding: '10px 20px'
                }
            }
        },
        List: {
            variants: {
                headerMenu: {
                    container: {
                        display: "flex",
                        justifyContent: 'space-between',
                        gap: '10px',
                        width: '100%',
                        height: 'inherit'
                    },
                    item: {
                        listStyle: 'none',
                        height: 'inherit'
                    }
                    
                }
            }
        }
    }
})



export {defaultChakra}