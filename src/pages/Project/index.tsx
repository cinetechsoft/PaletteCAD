import React, { useEffect } from 'react'

import { useGetAllProjectsQuery } from '../../services/api/projectAPI'
import { SimpleGrid, Card, rem, Text, createStyles } from '@mantine/core'
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));


function Project() {
    const { classes, theme } = useStyles();
    const { data } = useGetAllProjectsQuery();

    return (
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {data?.map((project) => (
                <Link to={`/quotation/${project.project_Id}`}>
                    <Card key={project.project_Id} shadow="md" radius="md" className={classes.card} padding="xl">
                        {/* <project.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} /> */}
                        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                            {project.project_Id}
                        </Text>
                        <Text fz="sm" c="dimmed" mt="sm">
                            {project.custName}
                        </Text>
                    </Card>
                </Link>
            ))}
        </SimpleGrid>
    )
}

export default Project