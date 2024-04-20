import { Box, Flex, Image, Stack, Text } from 'components/ui'
import { ListStyled } from 'components/ui/List/List.styles'
import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import { CAREER } from 'data/career'

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
      {CAREER.map((job) => {
        return (
          <WidgetWrapper key={job.title} padding="spacing56">
            <Stack gap="spacing24">
              <Flex align="flex-start" justify="space-between">
                <Stack>
                  <Text type="heading3" color="headingText">
                    {job.title}
                  </Text>
                  <Text>{job.company}</Text>
                </Stack>
                <Text>{job.date}</Text>
              </Flex>
              <ListStyled>
                {job.description.map((item, index) => (
                  <li key={index}>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ListStyled>
            </Stack>
          </WidgetWrapper>
        )
      })}
    </Stack>
  )
}

export default AboutPage
