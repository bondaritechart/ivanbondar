'use client'

import { Flex, Image, Stack, Text } from 'components/ui'
import { Tag } from 'components/ui/Tag/Tag'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { Project } from 'data/projects'

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <WidgetWrapper padding="spacing56" height={56}>
      <Flex template={[1, 1]} align="flex-end" gap="spacing120">
        <Stack align="flex-start" gap="spacing8">
          <Tag>{project.tag}</Tag>
          <Stack gap="spacing24">
            <Text type="heading2" color="headingText">
              {project.cardTitle}
            </Text>
            <Text>{project.cardDescription}</Text>
          </Stack>
        </Stack>
        <Flex justify="center">
          <Image {...project.image} alt={project.cardTitle} />
        </Flex>
      </Flex>
    </WidgetWrapper>
  )
}
