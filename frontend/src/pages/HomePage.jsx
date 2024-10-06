import { Container, SimpleGrid, Text, VStack, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { useProductStore } from "../store/product";

import ProductCard from '../components/ProductCard'

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    return (
        <Container maxW="Container.x1" py={12}>
            <VStack spacing={8}>
                <Text
                    bgGradient='linear(to-l, cyan.400, blue.500)'
                    bgClip='text'
                    fontSize='30'
                    fontWeight='bold'
                >
                    Current Products 🚀
                </Text>
                <SimpleGrid
                    columns={{
                        base:1,
                        md:2,
                        lg:3
                    }}
                    spacing={10}
                    w="full"
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>
                <Text fontSize='xl' textAlign='center' fontWeight={'bold'} color={'gray.500'}> 
                    No Products found 😔 
                    <Link as={ReactRouterLink} to={'/create'}>
                     <Text as='span' color={'blue.500'} _hover={{textDecoration:'underline'}}>
                        Create a product
                    </Text>
                    </Link>
                    </Text> 
            </VStack>
        </Container>
    );
}
export default HomePage;