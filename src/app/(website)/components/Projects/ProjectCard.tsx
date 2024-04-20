'use client'

import { Flex, Image, Stack, Text } from 'components/ui'
import { Tag } from 'components/ui/Tag/Tag'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { Project } from 'data/projects'
import { useMediaQuery } from 'hooks/useMediaQuery'

export const ProjectCard = ({ project }: { project: Project }) => {
  const { isSmall } = useMediaQuery()

  return (
    <WidgetWrapper padding={isSmall ? ['spacing40', 'spacing24'] : 'spacing56'} height={isSmall ? 'auto' : 56}>
      <Flex
        direction={isSmall ? 'column-reverse' : 'row'}
        template={[1, 1]}
        align={isSmall ? 'flex-start' : 'flex-end'}
        gap={isSmall ? 'spacing24' : 'spacing120'}
      >
        <Stack align="flex-start" gap="spacing8">
          <Tag>{project.tag}</Tag>
          <Stack gap="spacing24">
            <Text type="heading2" color="headingText">
              {project.cardTitle}
            </Text>
            <Text>{project.cardDescription}</Text>
          </Stack>
        </Stack>
        <Flex alignSelf={isSmall ? 'center' : 'flex-end'} justify="center">
          <Image {...project.image} height={isSmall ? 215 : project.image.height} alt={project.cardTitle} />
        </Flex>
      </Flex>
    </WidgetWrapper>
  )
}
