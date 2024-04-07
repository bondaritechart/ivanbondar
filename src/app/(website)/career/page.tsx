import { Box, Flex, Image, Stack, Text } from 'components/ui'
import { ListStyled } from 'components/ui/List/List.styles'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'

import image from 'assets/images/about-hero.svg'

const AboutPage = () => {
  return (
    <Stack gap="spacing24">
      <WidgetWrapper padding="spacing56" height={64}>
        <Flex template={[1, 1]} align="flex-end" gap="spacing120">
          <Stack gap="spacing24">
            <Text type="heading1" color="headingText">
              Career Path
            </Text>
            <Text>Lead software engineer, mentor, 7+ years of experience.</Text>
            <Text>
              Passionate about web development. It&apos;s a big pleasure to see how the things you&apos;ve created work.
            </Text>
          </Stack>
          <Box>
            <Image {...image} alt="about me" />
          </Box>
        </Flex>
      </WidgetWrapper>
      <WidgetWrapper padding="spacing56">
        <Stack gap="spacing24">
          <Flex align="flex-start" justify="space-between">
            <Stack>
              <Text type="heading3" color="headingText">
                SENIOR SOFTWARE ENGINEER
              </Text>
              <Text>Vention</Text>
            </Stack>
            <Text>2021 - present</Text>
          </Flex>
          <ListStyled>
            <li>
              <Text>
                Led the frontend development team in architecting and implementing user interfaces for large-scale web
                applications, ensuring alignment with project goals and technical requirements.
              </Text>
            </li>
            <li>
              <Text>
                Collaborated with cross-functional teams including designers, backend developers, and product managers
                to gather requirements, provide technical guidance, and deliver high-quality frontend solutions.
              </Text>
            </li>
            <li>
              <Text>
                Mentored junior developers, conducted code reviews, and established coding standards and best practices
                to maintain code quality and improve team efficiency.
              </Text>
            </li>
            <li>
              <Text>
                Refactored legacy frontend codebases to improve maintainability, scalability, and testability, reducing
                technical debt and enhancing development velocity.
              </Text>
            </li>
          </ListStyled>
        </Stack>
      </WidgetWrapper>
    </Stack>
  )
}

export default AboutPage
