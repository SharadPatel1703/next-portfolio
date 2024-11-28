import { Box, TagLabel, Tag, HStack } from "@chakra-ui/react"
import Link from 'next/link'
import styles from '../styles/Work.module.css'

const BlogCard = ({ blog, currentTheme }) => {
    const imageSrc = blog.thumbnail || blog.cover_image || "/images/placeholder.jpg";

    return (
        <div style={{ whiteSpace: 'initial' }}>
            <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden" bg={currentTheme.secondary}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '300px',
                    overflow: 'hidden'
                }}>
                    <img
                        src={imageSrc}
                        alt={blog.title || 'Blog thumbnail'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/placeholder.jpg";
                        }}
                    />
                </div>
                <Box p="6">
                    <HStack spacing={2}>
                        {blog.categories ?
                            blog.categories.slice(0, 3).map((category, key) => (
                                <div key={`category-${key}`}>
                                    <Tag size="sm" borderRadius="md" variant="outline" colorScheme="blue">
                                        <TagLabel>{category}</TagLabel>
                                    </Tag>
                                </div>
                            )) : blog.tag_list ?
                                blog.tag_list.slice(0, 3).map((category, key) => (
                                    <div key={`tag-${key}`}>
                                        <Tag size="sm" borderRadius="md" variant="outline" colorScheme="blue">
                                            <TagLabel>{category}</TagLabel>
                                        </Tag>
                                    </div>
                                )) : null
                        }
                    </HStack>
                    <Box
                        mt="1"
                        as="h4"
                        lineHeight="tight"
                    >
                        {blog.title}
                    </Box>
                    <Box as="span" color={currentTheme.subtext} fontSize="sm">
                        {blog.description?.replace(/(<([^>]+)>)/ig, '').slice(0, 85) + ' . . .'}
                    </Box>
                    <div style={{marginTop: '1rem'}}>
                        <Box>
                            <Link href={blog.link || blog.url || '#'}>
                                <a className={styles.cta2} style={{ color: '#3182ce' }}>View More</a>
                            </Link>
                        </Box>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default BlogCard